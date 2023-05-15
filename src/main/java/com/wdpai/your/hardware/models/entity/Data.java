package com.wdpai.your.hardware.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "data")
@AllArgsConstructor
@NoArgsConstructor
@lombok.Data
@Builder
@Accessors(chain = true)
public class Data {

    @Id
    @GeneratedValue(generator = "uuid")
    private Integer id;
    private String title;
    private String description;
    private String createdBy;

    private String fileName;

    private String fileType;

    @Lob
    private byte[] image;
}
