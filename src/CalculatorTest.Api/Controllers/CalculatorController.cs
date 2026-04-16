using CalculatorTest.Api.Models;
using CalculatorTest.Core;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorTest.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CalculatorController : ControllerBase
{
    private readonly ISimpleCalculator _calculator;

    public CalculatorController(ISimpleCalculator calculator)
    {
        _calculator = calculator;
    }

    [HttpGet("add")]
    public ActionResult<CalculatorResult> Add([FromQuery] int start, [FromQuery] int amount)
    {
        var result = _calculator.Add(start, amount);
        return Ok(new CalculatorResult(result, "Add", start, amount, DateTime.UtcNow));
    }

    [HttpGet("subtract")]
    public ActionResult<CalculatorResult> Subtract([FromQuery] int start, [FromQuery] int amount)
    {
        var result = _calculator.Subtract(start, amount);
        return Ok(new CalculatorResult(result, "Subtract", start, amount, DateTime.UtcNow));
    }
}
