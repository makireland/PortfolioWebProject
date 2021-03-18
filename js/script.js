// menu hamburguer when click it shows
document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

//updting prices from quantity, checkbox, rdbutton-yes, rdbutton-no
document.querySelector("#qtd").addEventListener("change", updatePrice);
document.querySelector("#jsCheckBox").addEventListener("change", updatePrice);
document.querySelector("#layout-yes").addEventListener("change", updatePrice);
document.querySelector("#layout-no").addEventListener("change", updatePrice);

//setting the delivery time to finish the project
document.querySelector("#delivery-time").addEventListener("change", () => {

   const deliveryTime = document.querySelector("#delivery-time").value;

   if (deliveryTime < 1) {
      deliveryTime += 1;
      document.querySelector("label[for=delivery-time]").innerHTML = `Delivery Time: ${deliveryTime} week`;
   }
   else if (deliveryTime == 1) {
      document.querySelector("label[for=delivery-time]").innerHTML = `Delivery Time: ${deliveryTime} week`;
   }
   else{
      document.querySelector("label[for=delivery-time]").innerHTML = `Delivery Time: ${deliveryTime} Weeks`;
   }
   updatePrice()
});

//function that check if the selector are checked and if have value and update 
function updatePrice() {
   const qtd = document.querySelector("#qtd").value;
   const jsCheckBox = document.querySelector("#jsCheckBox").checked;
   const layoutIncluded = document.querySelector("#layout-yes").checked;
   const deliveryTime = document.querySelector("#delivery-time").value;

   let price = qtd * 100;

   if (jsCheckBox == true) {
      price = price * 1.1;
   }

   if (layoutIncluded) price += 500;

   let taxFastDelivery = 1 - deliveryTime*0.1;
   price *= 1 + taxFastDelivery;

   document.querySelector("#price").innerHTML = `€ ${price.toFixed(2)}`;
}