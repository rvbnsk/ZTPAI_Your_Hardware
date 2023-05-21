package com.wdpai.your.hardware.service;

import com.wdpai.your.hardware.models.entity.Data;
import com.wdpai.your.hardware.models.request.SaveDataRequest;
import com.wdpai.your.hardware.models.request.UpdatePostRequest;
import com.wdpai.your.hardware.models.response.FullDataResponse;

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
