using Microsoft.AspNetCore.Mvc;

namespace pr_elecciones.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }
    }
}
