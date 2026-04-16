using CalculatorTest.Core;
using Xunit;

namespace CalculatorTest.Tests;

public class SimpleCalculatorTests
{
    private readonly ISimpleCalculator _calculator;

    public SimpleCalculatorTests()
    {
        _calculator = new SimpleCalculator();
    }

    [Theory]
    [InlineData(5, 3, 8)]
    [InlineData(-5, -3, -8)]
    [InlineData(5, -3, 2)]
    [InlineData(0, 0, 0)]
    [InlineData(100, 200, 300)]
    public void Add_ShouldReturnCorrectSum(int start, int amount, int expected)
    {
        // Act
        var result = _calculator.Add(start, amount);

        // Assert
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData(10, 3, 7)]
    [InlineData(5, 5, 0)]
    [InlineData(3, 10, -7)]
    [InlineData(-5, -3, -2)]
    [InlineData(0, 0, 0)]
    public void Subtract_ShouldReturnCorrectDifference(int start, int amount, int expected)
    {
        // Act
        var result = _calculator.Subtract(start, amount);

        // Assert
        Assert.Equal(expected, result);
    }
}
