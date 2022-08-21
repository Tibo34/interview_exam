using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewExam.Models
{
    public class Users
    {
        public string UserName { get; set; }
        public string Name { get; set; }
    }

    public class Tokens
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; }
    }
}
