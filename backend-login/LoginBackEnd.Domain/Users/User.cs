namespace LoginBackEnd.Domain.Users;

public class User
{
    public Guid Id { get; }
    public string Email { get; }
    public string PasswordHash { get; }

    public User(Guid id, string email, string passwordHash)
    {
        Id = id;
        Email = email;
        PasswordHash = passwordHash;
    }
}
