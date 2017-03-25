
    
  //prompt user for purchase 
  //calculate total price of phone (const)
  //can keep purchasing phones
  //max amount of money (const)
  //list of accessories that can be purchased with the phone (const)
  //add tax to subtotal (const)
  //total amount
  //prompt for remaining amount in bank

  const ACCESSORY_COST = 10.00;
  const PHONE_COST = 50.00;
  const BANK_THRESHOLD = 173.59; 
  const TAX_RATE = 0.13;  
 
  var bank_balance = 300.00;
  var amount = 0;
   

  function phone() { 
    if (amount < BANK_THRESHOLD) { 
      amount += PHONE_COST;
      document.getElementById("subTotal").innerHTML = amount;
    } else {
        document.getElementById("subTotal").innerHTML ="You're out of cash";
    }
  };

  function accessory() { 
    if (amount < BANK_THRESHOLD) {
      amount += ACCESSORY_COST;
      document.getElementById("subTotal").innerHTML = amount;
    } else { 
        document.getElementById("subTotal").innerHTML ="You're out of cash";
    }
  };

  function total() { 
      var tax = amount * TAX_RATE;
      var totalAmt = tax + amount;
      document.getElementById("total").innerHTML = totalAmt;
      return totalAmt;
  };

  function bank() { 
      var bank = bank_balance - total();
      document.getElementById("bank").innerHTML = "You have $" + bank + " left in your account";
  };


  

//document.onload = function() {
  
//}; //window load end