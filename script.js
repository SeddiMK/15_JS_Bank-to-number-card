document.querySelector('#card-number').oninput = function () {
  let cardNum = this.value;
  if (cardNum.trim().length > 5) {
    let cardInfo = new CardInfo(cardNum.trim(), {
      bankLogosPath: './node_modules/card-info/dist/banks-logos',
      brandsLogosPath: './node_modules/card-info/dist/brands-logos',
    });
    //bank name
    console.log(cardInfo.bankName);
  }
};
