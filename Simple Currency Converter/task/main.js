const input = require('sync-input');

console.log("Welcome to Currency Converter!\n" + 
            "1 USD equals 1 USD\n" + 
            "1 USD equals 113.5 JPY\n" +
            "1 USD equals 0.89 EUR\n" + 
            "1 USD equals 74.36 RUB\n" + 
            "1 USD equals 0.75 GBP");

menu();



function menu() {
    while(true) {
        console.log("What do you want to do?");
        console.log("1-Convert currencies 2-Exit program");

        let opt = input();

        if (parseInt(opt) === 1) {
            convertMenu();
        } else if (parseInt(opt) === 2) {
            console.log("Have a nice day!");
            return;
        } else {
            console.log("Unknown input");
        }
    }
}

function convertMenu() {
    let isFinished = false;

    do {
        console.log("What do you want to convert?")

        let currFrom = input("From:").toUpperCase();

        if (!validateCurrency(currFrom)) {
            console.log("Unknown currency");
            return;
        }

        let currTo = input("To: ").toUpperCase();

        if (!validateCurrency(currTo)) {
            console.log("Unknown currency");
            return;
        }

        convert(currFrom, currTo, findCurrencyRate(currFrom), findCurrencyRate(currTo));
        isFinished = true;

    } while (!isFinished)
}

function convert(currFrom, currTo, currFromRate, currToRate) {
  let amount = input("Amount: ");
  
  if (!Number.isInteger(parseInt(amount))) {
    console.log("The amount has to be a number");
  } else if (amount < 1) {
    console.log("The amount cannot be less than 1");
  } else {
    console.log("Result: " + amount + " " + currFrom + " equals " + 
                (parseInt(amount) / currFromRate * currToRate).toFixed(4) + " " + currTo);
  }
}

function validateCurrency(currency) {
  switch (currency) {
    case "USD":
    case "JPY":
    case "EUR":
    case "RUB":
    case "GBP":
      return true;
    default:
      return false;
  }
}

function findCurrencyRate(currency) {
   switch (currency) {
    case "USD":
       return 1;
       break;
    case "JPY":
       return 113.5;
       break;
    case "EUR":
       return 0.89;
       break;
    case "RUB":
       return 74.36;
       break;
    case "GBP":
       return 0.75;
       break;
  }
}