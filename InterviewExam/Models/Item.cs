using Newtonsoft.Json;

namespace InterviewExam.Models
{
    public class Item
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

    }
}
