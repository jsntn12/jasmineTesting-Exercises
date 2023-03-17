
it('should calculate the monthly rate correctly', function () {
  const value = {amount: 100000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(value)).toEqual("1036.38");
  expect(calculateMonthlyPayment({amount: 120000, years: 1, rate: .00001})).toEqual("10000.00");
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 495000, years: 15, rate: 6.9})).toEqual("4421.57")
});
