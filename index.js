
    
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
  const BANK_THRESHOLD = 200.00; 
  const TAX_RATE = 0.13;  
 
  var bank_balance = 300.00;
  var amount = 0;

  function phone() { 
      amount += 50;
      document.getElementById("subTotal").innerHTML = amount;
      return amount;
  };

  function accessory() { 
      amount += 10;
      document.getElementById("subTotal").innerHTML = amount;
      return amount;
  };

  

//document.onload = function() {
  
//}; //window load end