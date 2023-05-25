package com.wdpai.your.hardware.repository;

import com.wdpai.your.hardware.models.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findById(Integer id);
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
}