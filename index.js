window.onload = function() {
    
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
  const BANK_TALLY = 200.00; 
  const TAX_RATE = 0.13;
  
  var phone = document.getElementById("phone").innerHTML = "The cost of a phone is " + "$" + PHONE_COST;
  var accessory = document.getElementById("accessory").innerHTML = "The cost of an accessory is " + "$" + ACCESSORY_COST;

  //calculate phone purchase against total in bank account 
  function phoneCost(phoneCost, bankTally) { 
    phoneSub = bankTally - phoneCost;
    return phoneSub;
  };   

   //calculate accessory purchase against total in bank account 
  function accessoryCost(accessoryCost, phoneSub) { 
    accessorySub =  phoneSub - accessoryCost;
    return accessorySub;    
  };  
  
  //pass in cost of phone and the current bank account value
  phoneCost(PHONE_COST, BANK_TALLY);

  //pass in the cost of an accesory and the purchase of a phone
  accessoryCost(ACCESSORY_COST, phoneSub);

  //console.log();
  document.getElementById("bank").innerHTML = "You have " + "$" + accessorySub + " left to spend";


}; //window load end


    