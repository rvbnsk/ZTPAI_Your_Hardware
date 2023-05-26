package mapper;

import models.entity.User;
import models.request.CreateUserRequest;
import models.response.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface UserMapper {
    UserMapper MAPPER = Mappers.getMapper(UserMapper.class);
    List<UserResponse> map(List<User> users);
    UserResponse map(User user);
    User map(CreateUserRequest createUserRequest);
}
