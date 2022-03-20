"use strict";

const button = document
  .getElementById("first-offerent-name-btn")
  .addEventListener("click", buttonClick);

// STRINGI DO POBIERANIA DANYCH
const firstOfferentName = document.getElementById("first-offerent-name");
const firstOfferentPrice = document.getElementById("first-offerent-price");
const firstOfferentTermin = document.getElementById("first-offerent-termin");

const secondOfferentName = document.getElementById("second-offerent-name");
const secondOfferentPrice = document.getElementById("second-offerent-price");
const secondOfferentTermin = document.getElementById("second-offerent-termin");

const thirdOfferentName = document.getElementById("third-offerent-name");
const thirdOfferentPrice = document.getElementById("third-offerent-price");
const thirdOfferentTermin = document.getElementById("third-offerent-termin");

let priceWeight = document.getElementById("weight-price");

let terminWeight = document.getElementById("termin-price");

const printFirstOfferentTotalScore = document.getElementById(
  "first-offerent-total-score"
);

const printSecondOfferentTotalScore = document.getElementById(
  "second-offerent-total-score"
);
const printThirdOfferentTotalScore = document.getElementById(
  "third-offerent-total-score"
);

// FUNKCJA / STRIN WYŚWIETLANIE DANYCH
// PIERWSZA OFERTA
const printPointsError = document.getElementById("weightpoints-error");

const printFirstOfferentName = document.getElementById(
  "first-offerent-name-answer"
);
const printFirstOfferentPrice = document.getElementById(
  "first-offerent-price-answer"
);
const printFirstOfferentTermin = document.getElementById(
  "first-offerent-termin-answer"
);

//DRUGA OFERTA
const printSecondOfferentName = document.getElementById(
  "second-offerent-name-answer"
);
const printSecondOfferentPrice = document.getElementById(
  "second-offerent-price-answer"
);
const printSecondOfferentTermin = document.getElementById(
  "second-offerent-termin-answer"
);
//TRZECIA OFERTA
const printThirdOfferentName = document.getElementById(
  "third-offerent-name-answer"
);
const printThirdOfferentPrice = document.getElementById(
  "third-offerent-price-answer"
);
const printThirdOfferentTermin = document.getElementById(
  "third-offerent-termin-answer"
);

//FUNKCJA ZBIERAJĄCA I PRZETWARZAJĄCA DANE
function buttonClick() {
  // //WYŚWIETLANIE DANYCH W POLACH
  // printFirstOfferentName.textContent = firstOfferentName.value;
  // printFirstOfferentPrice.textContent = firstOfferentPrice.value;
  // printFirstOfferentTermin.textContent = firstOfferentTermin.value;
  // // DRUGA FIRMA
  // printSecondOfferentName.textContent = secondOfferentName.value;
  // printSecondOfferentPrice.textContent = secondOfferentPrice.value;
  // printSecondOfferentTermin.textContent = secondOfferentTermin.value;
  // // TRZECIA FIRMA
  // printThirdOfferentName.textContent = thirdOfferentName.value;
  // printThirdOfferentPrice.textContent = thirdOfferentPrice.value;
  // printThirdOfferentTermin.textContent = thirdOfferentTermin.value;

  let removePrevious = function () {
    printFirstOfferentTotalScore.style = "color: white;";
    printSecondOfferentTotalScore.style = "color: white;";
    printThirdOfferentTotalScore.style = "color: white;";
  };

  removePrevious();

  // SMALLEST PRICE CALC

  console.log(removePrevious);
  let smallestPrice = Math.min(
    firstOfferentPrice.value,
    secondOfferentPrice.value,
    thirdOfferentPrice.value
  );

  //SMALLEST TERMIN CALC
  let smallestTermin = Math.min(
    firstOfferentTermin.value,
    secondOfferentTermin.value,
    thirdOfferentTermin.value
  );

  // POINTS MUST EQUAL 100

  if (Number(priceWeight.value) + Number(terminWeight.value) === 100) {
  } else {
    printPointsError.textContent = "Uwaga! Musi równać sie 100!";
    printPointsError.style.color = "red";
    printPointsError.style.fontWeight = "900";
    setTimeout(() => {
      printPointsError.textContent = "";
      printPointsError.textContent = "Waga musi równać się 100";
      printPointsError.style.color = "black";
      printPointsError.style.fontWeight = "400";
    }, 3000);
  }

  // PRICE POINTS CALC

  let firstOfferPricePoints =
    (smallestPrice / firstOfferentPrice.value) * priceWeight.value;
  let secondOfferPricePoints =
    (smallestPrice / secondOfferentPrice.value) * priceWeight.value;
  let thirdOfferPricePoints =
    (smallestPrice / thirdOfferentPrice.value) * priceWeight.value;

  // TERMIN POINTS CALC

  let firstOfferTerminPoints =
    (smallestTermin / firstOfferentTermin.value) * terminWeight.value;
  let secondOfferTerminPoints =
    (smallestTermin / secondOfferentTermin.value) * terminWeight.value;
  let thirdOfferTerminPoints =
    (smallestTermin / thirdOfferentTermin.value) * terminWeight.value;

  //TOTAL SCORE

  const firstOfferentTotalScore =
    firstOfferPricePoints + firstOfferTerminPoints;
  const secondOfferentTotalScore =
    secondOfferPricePoints + secondOfferTerminPoints;
  const thirdOfferentTotalScore =
    thirdOfferPricePoints + thirdOfferTerminPoints;

  // mark the best offer

  // first option
  if (
    firstOfferentTotalScore > secondOfferentTotalScore &&
    firstOfferentTotalScore > thirdOfferentTotalScore
  ) {
    printFirstOfferentTotalScore.textContent = firstOfferentTotalScore;
    printFirstOfferentTotalScore.style.cssText = `
    color: white; 
    background-color: green;
  `;
  } else {
    printFirstOfferentTotalScore.textContent = firstOfferentTotalScore;
    printFirstOfferentTotalScore.style.cssText = "background-color: #2f4f4f;";
  }

  // second option
  if (
    secondOfferentTotalScore > firstOfferentTotalScore &&
    secondOfferentTotalScore > thirdOfferentTotalScore
  ) {
    printSecondOfferentTotalScore.textContent = secondOfferentTotalScore;
    printSecondOfferentTotalScore.style.cssText = `
    color: white; 
    background-color: green;
  `;
    console.log(printSecondOfferentTotalScore.style);
  } else {
    printSecondOfferentTotalScore.textContent = secondOfferentTotalScore;
    printSecondOfferentTotalScore.style.cssText = "background-color: #2f4f4f;";
  }

  // third option

  if (
    thirdOfferentTotalScore > firstOfferentTotalScore &&
    thirdOfferentTotalScore > secondOfferentTotalScore
  ) {
    printThirdOfferentTotalScore.textContent = thirdOfferentTotalScore;
    printThirdOfferentTotalScore.style.cssText = `
    color: white; 
    background-color: green;
  `;
  } else {
    printThirdOfferentTotalScore.textContent = thirdOfferentTotalScore;
    printThirdOfferentTotalScore.style.cssText = "background-color: #2f4f4f;";
  }

  let topScore = Math.max(
    firstOfferentTotalScore,
    secondOfferentTotalScore,
    thirdOfferentTotalScore
  );
  console.log(topScore);

  // LICZNIK WAGI

  // console.log(
  //   firstOfferentTotalScore,
  //   secondOfferentTotalScore,
  //   thirdOfferentTotalScore
  // );
}

/// COPYRIGHTS
const printYear = document.querySelector(".copyrights");
let curDate = new Date();
let year = curDate.getFullYear();

printYear.innerHTML += " " + year;

console.log(year);
