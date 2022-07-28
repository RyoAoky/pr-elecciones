using Microsoft.AspNetCore.Mvc;

namespace pr_elecciones.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        [Route("Login")]
        public IActionResult Login()
        {
            return View();
        }
    }
}
