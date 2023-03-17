describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

    it("should add new payment to all payment and submit it", function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments.length).toEqual(1));
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual('20');
    })

    it("should create a new payment",function(){
        expect(createCurPayment()).toEqual({ billAmt: '100', tipAmt: '20', tipPercent: 20})
    })
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });
});
