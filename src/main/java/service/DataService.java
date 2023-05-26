package service;

import models.entity.Data;
import models.request.SaveDataRequest;
import models.request.UpdatePostRequest;
import models.response.FullDataResponse;

import java.io.IOException;
import java.util.List;

public interface DataService {

    List<FullDataResponse> findAll();
    List<Data> findOwnedData(String email);
    FullDataResponse findById(Integer id);
    Data save(SaveDataRequest saveDataRequest) throws IOException;
    byte[] findImage(String title);
    void deleteById(Integer id);
    void updatePost(UpdatePostRequest updatePostRequest);
}
