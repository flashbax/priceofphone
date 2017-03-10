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
  //var purchaseAccessory = document.getElementById("buyAccessory").innerHTML = "Purchase Accessory";

  //calculate phone purchase against total in bank account 
  function phoneCost(phoneCost, bankTally) { 
    phoneSub = bankTally - phoneCost;
    return phoneSub;
  };   
  
  //pass in cost of phone and the current bank account value
  phoneCost(PHONE_COST, BANK_TALLY);

  //pass in the cost of an accesory and the purchase of a phone
  document.getElementById("buyAccessory").addEventListener("click", function() {
    console.log(ACCESSORY_COST);
  });

  //calculate accessory purchase 
  // function accessoryCost(ACCESSORY_COST) { 
  //   for (i=0; i < ACCESSORY_COST; i++) { 
  //     return ACCESSORY_COST
  //   } 
  // }; 
  

  //document.getElementById("bank").innerHTML = "You have " + "$" + accessorySub + " left to spend";
  

}; //window load end


    