package service;

import models.entity.User;

public interface SecurityService {
    User encodePassword(final User user);
    Boolean comparePasswords(final String passwordOne, final String passwordTwo);
}
