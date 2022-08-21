using System.Threading.Tasks;
using InterviewExam.Models;
using InterviewExam.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InterviewExam.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    public class ItemController : ControllerBase
    {
        private readonly ICosmosDbService _cosmosDbService;
        private readonly IJWTManagerRepository _jWTManager;

        public ItemController(ICosmosDbService cosmosDbService, IJWTManagerRepository jWTManager)
        {
            _cosmosDbService = cosmosDbService;
            _jWTManager = jWTManager;
        }

        [HttpGet]
        [ActionName("get")]
        public async Task<ActionResult> Get()
        {
            var result = await _cosmosDbService.GetItemAsync("Stellium");
            return Ok(result);
        }


        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody] Users usersdata)
        {
            var token = _jWTManager.Authenticate(usersdata);

            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(token);
        }
    }
}
