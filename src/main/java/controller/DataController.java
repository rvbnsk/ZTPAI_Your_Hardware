package controller;

import models.entity.Data;
import models.request.SaveDataRequest;
import models.request.UpdatePostRequest;
import models.response.FullDataResponse;
import service.DataService;
import service.impl.JwtServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/data")
@RequiredArgsConstructor
public class DataController {
    private final DataService dataService;
    private final JwtServiceImpl jwtService;


    @GetMapping
    public List<FullDataResponse> findAll() {
        return dataService.findAll();
    }

    @GetMapping("/owned")
    public List<Data> findAll(HttpServletRequest request) {

        String userEmail = jwtService.extractUsername(request.getHeader("Authorization").substring(7));

        return dataService.findOwnedData(userEmail);
    }

    @GetMapping("{id}")
    public FullDataResponse findById(@PathVariable Integer id) {
        return dataService.findById(id);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable Integer id) {
        dataService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity<?> updatePost(@RequestBody UpdatePostRequest updatePostRequest) {
        dataService.updatePost(updatePostRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/image/{title}")
    public byte[] findById(@PathVariable String title) {
        return dataService.findImage(title);
    }

    @PostMapping(value = "/upload")
    public ResponseEntity uploadFile(@RequestParam(value = "file") MultipartFile file,
                                     @RequestParam String title,
                                     @RequestParam String description,
                                     HttpServletRequest request) throws IOException {

        String userEmail = jwtService.extractUsername(request.getHeader("Authorization").substring(7));

        dataService.save(SaveDataRequest.builder()
                .description(description)
                .title(title)
                .createdBy(userEmail)
                .file(file).build());

        return ResponseEntity.ok().build();
    }
}
