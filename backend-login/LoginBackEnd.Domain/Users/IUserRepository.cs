namespace LoginBackEnd.Domain.Users;

public interface IUserRepository
{
    Task<User?> GetByEmailAsync(string email);
}
