namespace LoginBackEnd.Application.Auth;

public class LoginResponse
{
    public bool Success { get; init; }
    public string? Token { get; init; }    
    public string? Message { get; init; }  
}
