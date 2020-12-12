var attamptsValue = 6;
var randomCompNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
var enteredNumbersArray = [];

var elFindForm = document.querySelector('.find-form');
var elInput = document.querySelector('.find-form__input');
var elAttampts = document.querySelector('.attampts');
var elRandomWrapper = document.querySelector('.random-number');
var elEnteredNumbers = document.querySelector('.entered-numbers');
var elGlobalDiv = document.querySelector('.global');

console.log(randomCompNumber);

if (elFindForm) {
  elFindForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    if (elInputValue < 0 || elInputValue > 100) {
      elGlobalDiv.textContent = `Xato`;
    }

    var elInputValue = Number(elInput.value);
    enteredNumbersArray.push(elInputValue);
    elEnteredNumbers.textContent = enteredNumbersArray;

    elAttampts.textContent = --attamptsValue;



    if (elInputValue < randomCompNumber) {
      elGlobalDiv.textContent = `Kichik raqam kiritdingiz`;
    } else if (elInputValue > randomCompNumber) {
      elGlobalDiv.textContent = `Katta raqam kiritdingiz`;
    } else if (elInputValue === randomCompNumber) {
      elGlobalDiv.textContent = `Urreeee!!!!!!!!👏🎁🥳`;
      elRandomWrapper.textContent = `Kompyuter o'ylagan son: ` + randomCompNumber + ` edi. Qoyil👏`;
      elInput.disabled = true;
    }

    if (attamptsValue === 0 && elInputValue !== randomCompNumber) {
      elInput.disabled = true;
      elGlobalDiv.textContent = `Yutqazdingiz va-va-va😜`;
    }

  });
}
