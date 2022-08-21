using InterviewExam.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewExam.Services
{
    public interface IJWTManagerRepository
    {
        Tokens Authenticate(Users users);
    }
}
