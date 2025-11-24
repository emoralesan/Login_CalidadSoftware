using LoginBackEnd.Application.Auth;
using LoginBackEnd.Domain.Users;
using LoginBackEnd.Infrastructure.Auth.Jwt;

namespace LoginBackEnd.Infrastructure.Auth;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepository;
    private readonly JwtProvider _jwtProvider;

    public AuthService(IUserRepository userRepository, JwtProvider jwtProvider)
    {
        _userRepository = userRepository;
        _jwtProvider = jwtProvider;
    }

    public async Task<LoginResponse> LoginAsync(LoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Password))
        {
            return new LoginResponse
            {
                Success = false,
                Message = "Email and password are required"
            };
        }

        var user = await _userRepository.GetByEmailAsync(request.Email);

        if (user is null || user.PasswordHash != request.Password)
        {
            return new LoginResponse
            {
                Success = false,
                Message = "Invalid Login Credentials"
            };
        }

        var token = _jwtProvider.GenerateToken(user);

        return new LoginResponse
        {
            Success = true,
            Token = token,
            Message = "Login Successful"
        };
    }
}
