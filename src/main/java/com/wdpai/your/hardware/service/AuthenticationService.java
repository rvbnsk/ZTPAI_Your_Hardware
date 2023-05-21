package com.wdpai.your.hardware.service;

import com.wdpai.your.hardware.models.request.AuthenticationRequest;
import com.wdpai.your.hardware.models.request.CreateUserRequest;
import com.wdpai.your.hardware.models.response.AuthenticationResponse;

public interface AuthenticationService {
    AuthenticationResponse register(CreateUserRequest request) throws Exception;
    AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception;
}
