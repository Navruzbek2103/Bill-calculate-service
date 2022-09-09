let elForm = document.querySelector(".form")
let summaInput = document.querySelector('.summa-input');
let btnPercentage5 = document.querySelector(".btn-num5");
let btnPercentage10 = document.querySelector(".btn-num10");
let btnPercentage15 = document.querySelector(".btn-num15");
let btnPercentage25 = document.querySelector(".btn-num25");
let btnPercentage50 = document.querySelector(".btn-num50");
let btnPercentageCustom = document.querySelector(".custom-input");
let numberPersonInput = document.querySelector(".number-person-input")
let personSumma = document.querySelector(".person-sum");
let totalSum = document.querySelector(".total-sum");
let elResetInput = document.querySelector(".reset-input");


let num1 = 0;
let valueInput = 0;
let countPerson = 0;
btnPercentage5.addEventListener('click', (t) => {
  t.preventDefault()
  if(summaInput.value != "" && numberPersonInput.value != ""){
    num1 = Number(btnPercentage5.textContent);
    valueInput = Number(summaInput.value);
    countPerson = Number(numberPersonInput.value);

    if(countPerson > 0){
      personSumma.textContent = ((valueInput * (num1 / 100)) / countPerson).toFixed(2);
      totalSum.textContent = ((valueInput + (valueInput * (num1 / 100))) / countPerson).toFixed(2)
    }
    else if(countPerson === 0){
      personSumma.textContent = valueInput * (num1 / 100);
      totalSum.textContent = valueInput + (valueInput * (num1 / 100));
    }
    else if(countPerson < 0){
      numberPersonInput.value = "Bunday qiymat mavjud emas";
    }
  }
  else if(summaInput.value != ""){
    num1 = Number(btnPercentage5.textContent);
    valueInput = Number(summaInput.value);
    personSumma.textContent = (valueInput * (num1 / 100)).toFixed(2);
    totalSum.textContent = (valueInput + (valueInput * (num1 / 100))).toFixed(2);
    btnPercentageCustom.value = "Custom"
  }
})

btnPercentage10.addEventListener('click', (t) => {
  t.preventDefault()
  if(summaInput.value != "" && numberPersonInput.value != ""){
    num1 = Number(btnPercentage10.textContent);
    valueInput = Number(summaInput.value);
    countPerson = Number(numberPersonInput.value);

    if(countPerson > 0){
      personSumma.textContent = ((valueInput * (num1 / 100)) / countPerson).toFixed(2);
      totalSum.textContent = ((valueInput + (valueInput * (num1 / 100))) / countPerson).toFixed(2)
    }
    else if(countPerson === 0){
      personSumma.textContent = valueInput * (num1 / 100);
      totalSum.textContent = valueInput + (valueInput * (num1 / 100));
    }
    else if(countPerson < 0){
      numberPersonInput.value = "Bunday qiymat mavjud emas";
    }
  }
  else if(summaInput.value != ""){
    num1 = Number(btnPercentage10.textContent);
    valueInput = Number(summaInput.value);
    personSumma.textContent = (valueInput * (num1 / 100)).toFixed(2);
    totalSum.textContent = (valueInput + (valueInput * (num1 / 100))).toFixed(2)
    btnPercentageCustom.value = "Custom"
  }
})

btnPercentage15.addEventListener('click', (t) => {
  t.preventDefault()
  if(summaInput.value != "" && numberPersonInput.value != ""){
    num1 = Number(btnPercentage15.textContent);
    valueInput = Number(summaInput.value);
    countPerson = Number(numberPersonInput.value);

    if(countPerson > 0){
      personSumma.textContent = ((valueInput * (num1 / 100)) / countPerson).toFixed(2);
      totalSum.textContent = ((valueInput + (valueInput * (num1 / 100))) / countPerson).toFixed(2)
    }
    else if(countPerson === 0){
      personSumma.textContent = valueInput * (num1 / 100);
      totalSum.textContent = valueInput + (valueInput * (num1 / 100));
    }
    else if(countPerson < 0){
      numberPersonInput.value = "Bunday qiymat mavjud emas";
    }
  }
  else if(summaInput.value != ""){
    num1 = Number(btnPercentage15.textContent);
    valueInput = Number(summaInput.value);
    personSumma.textContent = (valueInput * (num1 / 100)).toFixed(2);
    totalSum.textContent = (valueInput + (valueInput * (num1 / 100))).toFixed(2);
    btnPercentageCustom.value = "Custom"
  }
})

btnPercentage25.addEventListener('click', (t) => {
  t.preventDefault()
  if(summaInput.value != "" && numberPersonInput.value != ""){
    num1 = Number(btnPercentage25.textContent);
    valueInput = Number(summaInput.value);
    countPerson = Number(numberPersonInput.value);

    if(countPerson > 0){
      personSumma.textContent = ((valueInput * (num1 / 100)) / countPerson).toFixed(2);
      totalSum.textContent = ((valueInput + (valueInput * (num1 / 100))) / countPerson).toFixed(2)
    }
    else if(countPerson === 0){
      personSumma.textContent = valueInput * (num1 / 100);
      totalSum.textContent = valueInput + (valueInput * (num1 / 100));
    }
    else if(countPerson < 0){
      numberPersonInput.value = "Bunday qiymat mavjud emas";
    }
  }
  else if(summaInput.value != ""){
    num1 = Number(btnPercentage25.textContent);
    valueInput = Number(summaInput.value);
    personSumma.textContent = (valueInput * (num1 / 100)).toFixed(2);
    totalSum.textContent = (valueInput + (valueInput * (num1 / 100))).toFixed(2)
    btnPercentageCustom.value = "Custom"
  }
})

btnPercentage50.addEventListener('click', (t) => {
  t.preventDefault()
  if(summaInput.value != "" && numberPersonInput.value != ""){
    num1 = Number(btnPercentage50.textContent);
    valueInput = Number(summaInput.value);
    countPerson = Number(numberPersonInput.value);

    if(countPerson > 0){
      personSumma.textContent = ((valueInput * (num1 / 100)) / countPerson).toFixed(2);
      totalSum.textContent = ((valueInput + (valueInput * (num1 / 100))) / countPerson).toFixed(2)
    }
    else if(countPerson === 0){
      personSumma.textContent = valueInput * (num1 / 100);
      totalSum.textContent = valueInput + (valueInput * (num1 / 100));
    }
    else if(countPerson < 0){
      numberPersonInput.value = "Bunday qiymat mavjud emas";
    }
  }
  else if(summaInput.value != ""){
    num1 = Number(btnPercentage50.textContent);
    valueInput = Number(summaInput.value);
    personSumma.textContent = (valueInput * (num1 / 100)).toFixed(2);
    totalSum.textContent = (valueInput + (valueInput * (num1 / 100))).toFixed(2)
    btnPercentageCustom.value = "Custom"
  }
})

btnPercentageCustom.addEventListener('input', (t) => {
  t.preventDefault()
  if(summaInput.value != "" && numberPersonInput.value != ""){
    num1 = Number(btnPercentageCustom.value);
    valueInput = Number(summaInput.value);
    countPerson = Number(numberPersonInput.value);

    if(countPerson > 0){
      personSumma.textContent = ((valueInput * (num1 / 100)) / countPerson).toFixed(2);
      totalSum.textContent = ((valueInput + (valueInput * (num1 / 100))) / countPerson).toFixed(2)
    }
    else if(countPerson === 0){
      personSumma.textContent = valueInput * (num1 / 100);
      totalSum.textContent = valueInput + (valueInput * (num1 / 100));
    }
    else if(countPerson < 0){
      numberPersonInput.value = "Bunday qiymat mavjud emas";
    }
  }
  else if(summaInput.value != ""){
    num1 = Number(btnPercentageCustom.value);
    valueInput = Number(summaInput.value);
    personSumma.textContent = (valueInput * (num1 / 100)).toFixed(2);
    totalSum.textContent = (valueInput + (valueInput * (num1 / 100))).toFixed(2)
  }
})

elResetInput.addEventListener("click", () => {
  personSumma.textContent = "0.00";
  totalSum.textContent = "0.00";
})