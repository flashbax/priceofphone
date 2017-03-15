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

   //pass in the cost of an accesory and the purchase of a phone
 //document.getElementById("buyAccessory").addEventListener("click", 
 
 function accessoryPurchase(){ 

      //console.log("hello");
  var buyAccessory = ACCESSORY_COST;
  //var addAccessory = buyAccessory;
  var buy = buyAccessory++;
  console.log(buy);
  //for (i=buyAccessory; i < buyAccessory+10; i++) {
  //      console.log(i);
 // }

  };
  
//document.getElementById("bank").innerHTML = "You have " + "$" + accessorySub + " left to spend";
document.getElementById("buyAccessory").onclick = function() { accessoryPurchase() };

}; //window load end


    