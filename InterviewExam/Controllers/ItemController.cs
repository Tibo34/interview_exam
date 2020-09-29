using System.Threading.Tasks;
using InterviewExam.Services;
using Microsoft.AspNetCore.Mvc;

namespace InterviewExam.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ItemController : ControllerBase
    {
        private readonly ICosmosDbService _cosmosDbService;

        public ItemController(ICosmosDbService cosmosDbService)
        {
            _cosmosDbService = cosmosDbService;
        }

        [HttpGet]
        [ActionName("get")]
        public async Task<ActionResult> Get()
        {
            var result = await _cosmosDbService.GetItemAsync("Stellium");
            return Ok(result);
        }
    }
}
