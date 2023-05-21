package com.wdpai.your.hardware.service;

import com.wdpai.your.hardware.models.request.CreateUserRequest;
import com.wdpai.your.hardware.models.response.UserResponse;

import java.util.List;

public interface UserService {
    List<UserResponse> findAll();
    UserResponse findUserById(Integer id) throws Exception;
    UserResponse findUserByEmail(String email) throws Exception;
    UserResponse save(CreateUserRequest createUserRequest) throws Exception;
}
