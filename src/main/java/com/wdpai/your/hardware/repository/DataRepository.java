package com.wdpai.your.hardware.repository;

import com.wdpai.your.hardware.models.entity.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends JpaRepository<Data, Integer> {
    Data findByTitle(String title);
}
