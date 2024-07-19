
$('.toggle i').click(function(){
    $('ul').toggleClass('show')
    });


$('.productcard .btn').click(function(){
    $(this).toggleClass('background-red');

    });
    
$('.product-card .btn').click(function(){
   $(this).toggleClass( "background-red" ); 
})

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
    
    smallimg[0].onclick = function(){
       MainImg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function(){
       MainImg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function(){
       MainImg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function(){
       MainImg.src = smallimg[3].src;
    }
    smallimg[4].onclick = function(){
        MainImg.src = smallimg[4].src;
   }



let carts = document.querySelectorAll(".btn-black");

let products = [
   {
      name :'Uendi',
      tag: 'uend',
      price:609,
      inCart: 0

   },
   
   {
      name : 'Uendi',
      tag: 'jeans',
      price: 70,
      inCart: 0

   },
   
   {
      name : 'Uendi',
      tag: 'uend',
      price: 59,
      inCart: 0
   
   },
   
   {
      name : 'Uendi',
      tag: 'uend',
      price: 59,
      inCart: 0

   },
]

for (let i=0; i < carts.length; i++) {
   carts[i].addEventListener('click', () => {
      cartNumbers(products [i]);
      totalCost(products[i])

})
}

function onLoadCartNumbers(){
   let productNumbers = localStorage.getItem('cartNumbers');

   if(productNumbers){
      document.querySelector('.bx-cart span').textContent = productNumbers;
   }
}
       
function cartNumbers(product){
   let productNumbers = localStorage.getItem('cartNumbers');
  
   productNumbers = parseInt(productNumbers);

   if(productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.bx-cart span').textContent = productNumbers + 1;
   } else{
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.bx-cart span').textContent = 1;
   }

   setItems(product);;
}

function setItems(product){
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);
 

   if(cartItems  != null){  
      if(cartItems[product.tag] == undefined ){
         cartItems = {
            ...cartItems,
            [product.tag]: product
          }
      }
      cartItems[product.tag].inCart += 1; 
   } else{
      product.inCart = 1;
      cartItems = {
         [product.tag]: product
      }
   }

   product.inCart = 1;
   cartItems = {
      [product.tag]: product
   }

   localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


     
        
      
          
      
              
      

   