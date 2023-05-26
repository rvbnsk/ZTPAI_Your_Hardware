package controller;

import models.request.CreateUserRequest;
import models.response.UserResponse;
import service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<UserResponse> findAll() {
        return userService.findAll();
    }

    @GetMapping("{email}")
    public UserResponse findByEmail(@PathVariable final String email) throws Exception {
        return userService.findUserByEmail(email);
    }

    @PostMapping
    public UserResponse save(@RequestBody final CreateUserRequest createUserRequest) throws Exception {
        return userService.save(createUserRequest);
    }
}
