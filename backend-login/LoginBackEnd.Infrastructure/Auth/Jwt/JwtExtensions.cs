using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace LoginBackEnd.Infrastructure.Auth.Jwt;

public static class JwtExtensions
{
    public static IServiceCollection AddJwtAuthentication(
        this IServiceCollection services, IConfiguration config)
    {
        var jwtSettings = new JwtSettings();
        config.GetSection("Jwt").Bind(jwtSettings);

        services.AddSingleton(jwtSettings);
        services.AddSingleton<JwtProvider>();

        return services;
    }
}
