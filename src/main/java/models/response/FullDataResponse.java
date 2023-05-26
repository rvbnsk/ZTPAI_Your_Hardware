package models.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FullDataResponse {

    private Integer id;
    private String title;
    private String description;
    private String createdBy;
    private String url;
}
