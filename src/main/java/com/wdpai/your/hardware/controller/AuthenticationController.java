package com.wdpai.your.hardware.controller;

import com.wdpai.your.hardware.models.request.AuthenticationRequest;
import com.wdpai.your.hardware.models.request.CreateUserRequest;
import com.wdpai.your.hardware.models.response.AuthenticationResponse;
import com.wdpai.your.hardware.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService jwtAuthenticationService;

    @PostMapping("/register")
    public AuthenticationResponse register(@RequestBody CreateUserRequest request) throws Exception {
        return jwtAuthenticationService.register(request);
    }

    @PostMapping("/verify")
    public String register() throws Exception {
        return "OK";
    }

    @PostMapping
    public AuthenticationResponse authenticate(@RequestBody AuthenticationRequest request) throws Exception {
        return jwtAuthenticationService.authenticate(request);
    }
}
