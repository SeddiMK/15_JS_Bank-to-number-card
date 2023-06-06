document.querySelector('#card-number').oninput = function () {
  let cardNum = this.value;
  if (cardNum.trim().length > 5) {
    let cardInfo = new CardInfo(cardNum.trim(), {
      banksLogosPath: './node_modules/card-info/dist/banks-logos/',
      brandsLogosPath: './node_modules/card-info/dist/brands-logos/',
    });
    //bank name
    console.log(cardInfo.bankName);
    console.log(cardInfo.bankLogo);
    console.log(cardInfo.brandLogo);
    console.log(cardInfo.backgroundColor);
    if (cardInfo.bankName !== null) {
      document.querySelector('.front-card__img').src = cardInfo.bankLogo;
      document.querySelector('.front-card__logo').src = cardInfo.brandLogo;
      document.querySelector('.front-card').style.backgroundColor =
        cardInfo.backgroundColor;
    } else {
      alert('Такого банка не существует... \nВведите номер вашего банка');
    }
  }
};
