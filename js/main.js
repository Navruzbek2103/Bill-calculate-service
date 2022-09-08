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



elForm.addEventListener("change", (e) => {
  e.preventDefault();

  summaInput = summaInput.value * 1;
  if(numberPersonInput.value != ""){
    pluralMan();
  }
  else{
    singleMan();
  }


  function pluralMan(){
    alert(true)
  }


  function singleMan(){
    btnPercentage5.addEventListener("click", (r) => {
      r.preventDefault();
      btnPercentage5 = Number(btnPercentage5.textContent);

      personSumma.textContent = summaInput * (btnPercentage5 / 100);
      totalSum.textContent = summaInput + (summaInput * (btnPercentage5 / 100));
    });


    btnPercentage10.addEventListener("click", (r) => {
      r.preventDefault();
      btnPercentage10 = Number(btnPercentage10.textContent);

      personSumma.textContent = summaInput * (btnPercentage10 / 100);
      totalSum.textContent = summaInput + (summaInput * (btnPercentage10 / 100));
    })

    btnPercentage15.addEventListener("click", (r) => {
      r.preventDefault();
      btnPercentage15 = Number(btnPercentage15.textContent)

      personSumma.textContent = summaInput * (btnPercentage15 / 100);
      totalSum.textContent = summaInput + (summaInput * (btnPercentage15 / 100));
    })

    btnPercentage25.addEventListener("click", (r) => {
      r.preventDefault();
      btnPercentage25 = Number(btnPercentage25.textContent);

      personSumma.textContent = summaInput * (btnPercentage25 / 100);
      totalSum.textContent = summaInput + (summaInput * (btnPercentage25 / 100));
    })

    btnPercentage50.addEventListener("click", (r) => {
      r.preventDefault();
      btnPercentage50 = Number(btnPercentage50.textContent);

      personSumma.textContent = summaInput * (btnPercentage50 / 100);
      totalSum.textContent = summaInput + (summaInput * (btnPercentage50 / 100));
    })

    btnPercentageCustom.addEventListener("input", (r) => {
      r.preventDefault();
      btnPercentageCustom = Number(btnPercentageCustom.value);

      personSumma.textContent = summaInput * (btnPercentageCustom / 100);
      totalSum.textContent = summaInput + (summaInput * (btnPercentageCustom / 100));
    })
  }



})