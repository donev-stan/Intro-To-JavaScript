function solve() {
   
   const cart = {};
   const productList = [];
   let totalPrice = 0;

   document.querySelectorAll('.add-product').forEach(addBtn => {
      addBtn.addEventListener('click', addToCart);
   });
   document.querySelector('.checkout').addEventListener('click', checkout);

   const cartSection = document.querySelector('textarea');

   function addToCart(e){
      const product = e.target.parentElement.parentElement;
      const productName = product.querySelector('.product-title').textContent;
      const productPrice = product.querySelector('.product-line-price').textContent;

      const msg = `Added ${productName} for ${productPrice} to the cart.\n`;
      cartSection.append(msg);

      if (cart.hasOwnProperty(productName) == false) {
         cart[productName] = 0;
      }
      cart[productName] += Number(productPrice);
   }

   function checkout(e) {
      Object.keys(cart).forEach(product => {
         productList.push(product);
         totalPrice += Number(cart[product]);
      });
      
      const msg = `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`;
      cartSection.append(msg);

      [...document.querySelectorAll('button')].forEach(btn => btn.disabled = true);

      totalPrice = 0;
   }
}