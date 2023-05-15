package com.wdpai.your.hardware.models.response;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DataResponse {
    private Integer id;
    private String title;
    private String image;
}
