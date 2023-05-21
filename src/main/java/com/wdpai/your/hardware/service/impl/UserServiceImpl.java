package com.wdpai.your.hardware.service.impl;

import com.wdpai.your.hardware.mapper.UserMapper;
import com.wdpai.your.hardware.models.request.CreateUserRequest;
import com.wdpai.your.hardware.models.response.UserResponse;
import com.wdpai.your.hardware.repository.UserRepository;
import com.wdpai.your.hardware.service.SecurityService;
import com.wdpai.your.hardware.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final SecurityService securityService;

    @Override
    public List<UserResponse> findAll() {
        return UserMapper.MAPPER.map(
                userRepository.findAll()
        );
    }

    @Override
    public UserResponse findUserById(Integer id) throws Exception {
        return userRepository.findById(id)
                .map(UserMapper.MAPPER::map)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public UserResponse findUserByEmail(String email) throws Exception {
        return userRepository.findByEmail(email)
                .map(UserMapper.MAPPER::map)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public UserResponse save(CreateUserRequest createUserRequest) throws Exception {

        Optional.of(userRepository.existsByEmail(createUserRequest.getEmail()))
                .filter(val -> val.equals(false))
                .orElseThrow(RuntimeException::new);

        return Optional.of(UserMapper.MAPPER.map(createUserRequest))
                .map(securityService::encodePassword)
                .map(userRepository::save)
                .map(UserMapper.MAPPER::map)
                .orElseThrow(RuntimeException::new);
    }
}
