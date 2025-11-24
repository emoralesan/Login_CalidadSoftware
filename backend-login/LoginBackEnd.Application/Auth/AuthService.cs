namespace LoginBackEnd.Application.Auth;
using LoginBackEnd.Domain.Users;

public class LoginHandler
{
    private readonly IUserRepository _repository;

    public LoginHandler(IUserRepository repository)
    {
        _repository = repository;
    }

    public async Task<LoginResponse> Handle(LoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) ||
            string.IsNullOrWhiteSpace(request.Password))
        {
            return new LoginResponse
            {
                Success = false,
                Message = "Email y contraseña son requeridos"
            };
        }

        var user = await _repository.GetByEmailAsync(request.Email);

        if (user is null || user.PasswordHash != request.Password)
        {
            return new LoginResponse
            {
                Success = false,
                Message = "Invalid login credentials"
            };
        }

        return new LoginResponse
        {
            Success = true,
            Message = "Login Successful"
        };
    }
}
