var product_total_amt=document.getElementById('product_total_amt');
var total_cart_amt=document.getElementById('total_cart_amt');
var shipping_charge=document.getElementById('shipping_charge');
var discountCode=document.getElementById('discount_code1');
const decrease=(dec,itemprice)=>
{
     var itemval=document.getElementById(dec);
     var itemprice=document.getElementById(itemprice);
     // console.log(itemval);
     if(itemval.value<=0){
     itemval.value=0;
     alert("Invalid");
     }
     else{
     itemval.value=parseInt(itemval.value)-1;
     itemval.style.background='#fff';
     itemval.style.color='#000';
     itemprice.innerHTML=parseInt(itemprice.innerHTML)-15;

     product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)-15;
     total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);
     }
}


const increase=(inc,itemprice)=>
{
     var itemval=document.getElementById(inc);
     var itemprice=document.getElementById(itemprice);
    
     // console.log(itemval);
     if(itemval.value>=5){
     itemval.value=5;
     alert('max 5 allowed');
     itemval.style.background='red';
     itemval.style.color='#ffff';
     }
     else{
     itemval.value=parseInt(itemval.value)+1;
     itemprice.innerHTML=parseInt(itemprice.innerHTML)+15;
     product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)+15;
     total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML);

     }
}

let discount_code =() =>{
     // let totalcurramt = parseInt(total_cart_amt.innerHTML);
     let error_trw = document.getElementById('error_trw');
     if(discountCode.value ==="aman"){
          // let newtotalamt = totalcurramt-15;
          total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)+parseInt(shipping_charge.innerHTML)-15;
          // total_cart_amt.innerHTML=newtotalamt;
          error_trw.innerHTML="Hurray! Got 15 $ discount ";
          return;
     }
     else{
          error_trw.innerHTML="Try again Valid code is aman";
     }
}

