package com.wdpai.your.hardware.service;

import com.wdpai.your.hardware.models.entity.User;

public interface SecurityService {
    User encodePassword(final User user);
    Boolean comparePasswords(final String passwordOne, final String passwordTwo);
}
