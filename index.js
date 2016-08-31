var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  cart.push({[item]: (Math.floor(Math.random()*(101)+0))});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cartText = "In your cart, you have";
    for(var i=0; i<cart.length; i++){
      var item = cart[i];
      for (var itemName in item) {
        cartText += ` ${itemName} at $${item[itemName]},`;
      }
    }
    console.log(cartText.slice(0, -1) + ".");
  }
}

function removeFromCart(name) {
  var length = cart.length;
    for(var i=0; i<cart.length; i++){
      var item = cart[i];
      if (item.hasOwnProperty(name)){
        cart.splice(i, 1);
        break;
      }
    }
  if (length === cart.length){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
