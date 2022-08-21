using InterviewExam.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace InterviewExam.Services
{
    public class JWTManagerRepository : IJWTManagerRepository
    {

        private Dictionary<string, Users> _userRecords = new Dictionary<string, Users>();
        private readonly IConfiguration iconfiguration;
        public JWTManagerRepository(IConfiguration iconfiguration)
        {
            this.iconfiguration = iconfiguration;
        }
        public Tokens Authenticate(Users users)
        {
            if (users==null||users.UserName==null)
            {
                return null;
            }
            if(!_userRecords.TryGetValue(users.UserName, out Users user))
            {
                _userRecords.Add(users.UserName, users);                
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.UTF8.GetBytes(iconfiguration["JWT:Key"]);
            SigningCredentials signingCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), "HS256");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
              {
             new Claim(ClaimTypes.Name, users.Name)
              }),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = signingCredentials
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Tokens { Token = tokenHandler.WriteToken(token) };
        }
    }
}
