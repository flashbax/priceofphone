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
  const BANK_THRESHOLD = 200.00; 
  const TAX_RATE = 0.13;
 
  var bank_balance = 300.00;
  var amount = 0;

  function phonePurchase(amount) {
    amount+=50
    //document.getElementById("phonePurchase").innerHTML = "You've spent " + "$" + amount.toFixed(2) + " on phones.";
    //return amount;
  };
  
 document.getElementById("phonePurchase").onclick = function() { phonePurchase(amount) };
  
 

  
  // function addSubTotal(){    
  //   var subTotal = phonePurchaseSubTotal+accessoryPurchaseSubTotal;
  //   return subTotal;
  // };

  // console.log(addSubTotal());

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


    