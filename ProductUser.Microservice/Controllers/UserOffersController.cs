
using Microsoft.AspNetCore.Mvc;
using ProductUser.Microservice.Model;
using ProductUser.Microservice.Services;

namespace ProductUser.Microservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserOffersController : ControllerBase
    {
        private readonly IUserService userService;

        public UserOffersController(IUserService _userService)
        {
           userService = _userService;
        }

        [HttpGet]
        public Task<IEnumerable<ProductOfferDetail>> ProductListAsync()
        {
            var productList = userService.GetProductListAsync();
            return productList;

        }

        [HttpGet("{id}")]
        public Task<ProductOfferDetail> GetProductByIdAsync(int Id)
        {
            return userService.GetProductByIdAsync(Id);
        }
    }
}
