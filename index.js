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
  var phoneCost = PHONE_COST;
  var accessoryCost = ACCESSORY_COST;
  var bankTally = BANK_TALLY;

  
  function phonePurchase() { 
    phoneCost+=50;
  };
  
 function accessoryPurchase(){
    accessoryCost+=10;
  };



//document.getElementById("bank").innerHTML = "You have " + "$" + accessorySub + " left to spend";
document.getElementById("buyPhone").onclick = function() { 
  phonePurchase(); 
  document.getElementById("phonePurchase").innerHTML = "You've spent " + "$" + phoneCost.toFixed(2) + " on phones.";
  return; 
};

document.getElementById("buyAccessory").onclick = function() {
 accessoryPurchase();
 document.getElementById("accessoryPurchase").innerHTML = "You've spent " + "$" + accessoryCost.toFixed(2) + " on accessories"; 
 return;
};

console.log();

}; //window load end


//  if (phoneCost <= bankTally) {
//       document.getElementById("phonePurchase").innerHTML = "You've spent " + "$" + phoneCost.toFixed(2) + " on phones."; 
//     } else { 
//       console.log("You need more money!");
//     }

// if (accessoryCost <= bankTally) {
//       document.getElementById("accessoryPurchase").innerHTML = "You've spent " + "$" + accessoryCost.toFixed(2) + " on accessories"; 
//     } else { 
//       console.log("You need more money!");
//     }