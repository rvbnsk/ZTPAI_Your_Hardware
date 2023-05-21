package com.wdpai.your.hardware.service.impl;

import com.wdpai.your.hardware.models.entity.User;
import com.wdpai.your.hardware.service.SecurityService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SecurityServiceImpl implements SecurityService {

    private final PasswordEncoder passwordEncoder;

    @Override
    public User encodePassword(User user) {
        return user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );
    }

    @Override
    public Boolean comparePasswords(String passwordOne, String passwordTwo) {
        return Boolean.TRUE;
    }
}
