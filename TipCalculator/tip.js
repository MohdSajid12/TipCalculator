function calculateTip() {

  var billAmount = document.querySelector('#billamt').value

  var numOfPeople = document.querySelector('#peopleamt').value

  var serviceQual = document.querySelector('#serviceQual').value

  var total = (billAmount * serviceQual) / numOfPeople;



  total = Math.round(total);

  let final = total.toFixed()

  document.querySelector('#totalTip').innerHTML = final;

}

var button = document.querySelector('#calculate')

button.addEventListener('click', calculateTip)