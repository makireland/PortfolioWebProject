// menu hamburguer when click it shows
document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

//section quote selecting ids and updating prices from quantity, checkbox, rdbutton-yes, rdbutton-no
document.querySelector("#qtd").addEventListener("change", updatePrice);
document.querySelector("#jsCheckBox").addEventListener("change", updatePrice);
document.querySelector("#layout-yes").addEventListener("change", updatePrice);
document.querySelector("#layout-no").addEventListener("change", updatePrice);

//setting the delivery time to finish the project
document.querySelector("#delivery-time").addEventListener("change", () => {

   //getting the value from the Ids and storaging it in a variable
   const deliveryTime = document.querySelector("#delivery-time").value;

   //if the deliveryTime value collected in the variable is less than 1
   if (deliveryTime < 1) {

      //add + 1 to deliveryTime variable
      deliveryTime += 1;

      //add the size of the range and string week at front the label
      document.querySelector("label[for=delivery-time]").innerHTML = `Delivery Time: ${deliveryTime} week`;
   }
   //if the deliveryTime value collected in the variable is equal to 1
   else if (deliveryTime == 1) {
      //add the size of the range and string week at front the label
      document.querySelector("label[for=delivery-time]").innerHTML = `Delivery Time: ${deliveryTime} week`;
   }
   //if the deliveryTime value collected in the variable is greater than 1
   else{
      //add the size of the range and string weeks at front the label
      document.querySelector("label[for=delivery-time]").innerHTML = `Delivery Time: ${deliveryTime} Weeks`;
   }

   //calling update funciton to update the values
   updatePrice()
});

//business rules - function that check if the selector are checked and if have value and update 
function updatePrice() {

   //getting the value from the Ids and storaging it in a variable
   const qtd = document.querySelector("#qtd").value;
   const jsCheckBox = document.querySelector("#jsCheckBox").checked;
   const layoutIncluded = document.querySelector("#layout-yes").checked;
   const deliveryTime = document.querySelector("#delivery-time").value;

//get the value from qtd multply it by 100 and storage it in price
   let price = qtd * 100;

   //if javascript box is checked add 110% on top of price
   if (jsCheckBox == true) {
      price = price * 1.1;
   }

   //if layout is checked add 500 on top of price
   if (layoutIncluded) price += 500;

   // add 10% as faster it selected to delivery
   let taxFastDelivery = 1 - deliveryTime*0.1;
   price *= 1 + taxFastDelivery;

   // selecting id price and add string with euro mark and manking the price to have 2 numbers after dot
   document.querySelector("#price").innerHTML = `€ ${price.toFixed(2)}`;
}