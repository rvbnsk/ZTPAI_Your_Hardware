package service;

import models.request.AuthenticationRequest;
import models.request.CreateUserRequest;
import models.response.AuthenticationResponse;

public interface AuthenticationService {
    AuthenticationResponse register(CreateUserRequest request) throws Exception;
    AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception;
}
