package service.impl;

import mapper.DataMapper;
import models.entity.Data;
import models.request.SaveDataRequest;
import models.request.UpdatePostRequest;
import models.response.FullDataResponse;
import repository.DataRepository;
import service.DataService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DataServiceImpl implements DataService {
    private final DataRepository dataRepository;

    @Override
    public List<FullDataResponse> findAll() {
        return DataMapper.MAPPER.mapTo(dataRepository.findAll());
    }

    @Override
    public List<Data> findOwnedData(String email) {
        return dataRepository.findAll()
                .stream().filter(data -> data.getCreatedBy().equals(email))
                .toList();
    }

    @Override
    public FullDataResponse findById(Integer id) {
        return dataRepository.findById(id)
                .map(DataMapper.MAPPER::mapTo)
                .orElseThrow(() -> new RuntimeException("Data not found"));
    }

    @Override
    public Data save(SaveDataRequest saveDataRequest) throws IOException {
        final Data data = DataMapper.MAPPER.map(saveDataRequest);

        log.info(String.format("File name '%s' uploaded successfully.", saveDataRequest));


        return dataRepository.save(data);
    }

    @Transactional
    @Override
    public byte[] findImage(String title) {
        return this.dataRepository.findByTitle(title).getImage();
    }

    @Override
    public void deleteById(Integer id) {
        this.dataRepository.deleteById(id);
    }

    @Transactional
    @Override
    public void updatePost(UpdatePostRequest updatePostRequest) {
        Data data = dataRepository.findById(updatePostRequest.getId())
                .orElseThrow(IllegalStateException::new);

        data.setTitle(updatePostRequest.getTitle())
                .setDescription(updatePostRequest.getDescription());

        dataRepository.save(data);
    }
}
