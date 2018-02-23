const format = require('./index');

it('should work', () => {
    const result = format()
    expect(result).toBe("500,00 €")
})
