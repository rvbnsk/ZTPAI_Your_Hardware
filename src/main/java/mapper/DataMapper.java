package mapper;

import models.entity.Data;
import models.request.SaveDataRequest;
import models.response.DataResponse;
import models.response.FullDataResponse;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.io.IOException;
import java.util.List;

@Mapper
public interface DataMapper {
    DataMapper MAPPER = Mappers.getMapper(DataMapper.class);

    default Data map(SaveDataRequest saveDataRequest) throws IOException {
        return Data.builder()
                .image(saveDataRequest.getFile().getBytes())
                .title(saveDataRequest.getTitle())
                .description(saveDataRequest.getDescription())
                .fileType(saveDataRequest.getFile().getContentType())
                .fileName(saveDataRequest.getFile().getOriginalFilename())
                .createdBy(saveDataRequest.getCreatedBy())
                .build();
    };

    default DataResponse map(Data data) {
        return DataResponse.builder()
                .id(data.getId())
                .title(data.getTitle())
                .image("http://localhost:8080/api/v1/data/image/" + data.getTitle())
                .build();
    }

    default FullDataResponse mapTo(Data data) {
        return FullDataResponse.builder()
                .id(data.getId())
                .title(data.getTitle())
                .description(data.getDescription())
                .createdBy(data.getCreatedBy())
                .url("http://localhost:8080/api/v1/data/image/" + data.getTitle())
                .build();
    }

    default List<FullDataResponse> mapTo(List<Data> all) {
        return all.stream()
                .map(this::mapTo)
                .toList();
    }
}
