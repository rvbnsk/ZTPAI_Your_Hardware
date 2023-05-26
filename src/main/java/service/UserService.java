package service;

import models.request.CreateUserRequest;
import models.response.UserResponse;

import java.util.List;

public interface UserService {
    List<UserResponse> findAll();
    UserResponse findUserById(Integer id) throws Exception;
    UserResponse findUserByEmail(String email) throws Exception;
    UserResponse save(CreateUserRequest createUserRequest) throws Exception;
}
