var savatcha=[];
$(document).ready(function(){
// $("body").append($("<div class='eaxmple'><img alt='rasm' src='https://storage.kun.uz/source/5/HOg4b8974tm1VsSZ_63gZSdWt6nTaPAP.jpg' /> <p>text</p></div>"));
// $(".add").click(function(){
// 	var lilar=$("li");
// 	if (lilar.length>=10) {
// 		alert("Limitga yetdingiz")
// 	}else{
// 		var li=$("<li >List"+(lilar.length+1)+"</li>");
// 	$("ul").append(li);
// 	}
	

// });
// $(".remove").click(function(){
// 	var lilar=$("li");
// 	if (lilar.length<=0) {
// 		alert("Element tugadi")
// 	}
// 	else{
// 	lilar[lilar.length-1].remove();
// 	}
// })

products.forEach(function(tovar) {
	var product=$(`<div class=" class${products.indexOf(tovar)} product ">
		<img src="${tovar.image}" alt="product img">
		<p class="type">${tovar.type}</p>
		<h4><a href="#">${tovar.name}</a></h4>
<label for="count">Tovar soni</label>
<input onkeyup="calc(${products.indexOf(tovar)})" value="1" min=1 type="number" id="count">
<p class="price"> <span>${tovar.price}</span> $</p>
<p class="totalPrice">Umumiy narx: <span>${tovar.price}<span/> $</p>
<button onclick="addCart(${products.indexOf(tovar)})" class="btnaddCart">Savatchaga qo'shish</button>
	</div>`);
	$(".container").append(product);
})


$(".tasdiqlash").click(function(){
	var summa=parseFloat($(".money input").val());
	
	if (summa<=0 || isNaN(summa)) {
		alert("Xato format");
	}else{
		var dastlabki=parseFloat($(".totalMoney span").text());
        var qiymat=(dastlabki+summa).toFixed(3);
        $(".totalMoney span").text(qiymat);
      
	}
  $(".money input").val("");
});
$(".btnCart").click(function(){
	$(".modal").toggleClass("disable");
	$(".cartProducts").html("");
	var count=0;
	var price=0;
	savatcha.forEach(function(tovar) {
		count+=tovar.count;
		price+=tovar.totPrice;
		var item=$(`	<div class="cartProduct">
	 		<img src="${tovar.img}" alt="Product img">
	 		<div class="info">
	 			<h3>${tovar.name}</h3>
	 			<p>Narxi: ${tovar.price} &</p>
	 			<p>Soni: ${tovar.count}</p>
	 			<p>Umumiy narxi: ${tovar.totPrice} & </p>
	 		</div>
	 	</div>`);
	$(".cartProducts").append(item);
     $(".cartCount span").text(count);
     $(".cartPrice span").text(price.toFixed(3));
	});

	$(".close").click(function(){
		$(".modal").addClass("disable");
	})
})

});


function calc(id){
       var count=parseInt($(".class"+id+" #count").val());
        if (count<1) {
        	alert("Product soni 1 dan kam emas");
        }else{
       var price= parseFloat($(".class"+id+" .price span").text());
        var totalPrice=(count*price).toFixed(2);
     
        $(".class"+id+" .totalPrice span").text(totalPrice);
	}
}
function addCart(id){
	var totalPrice=parseFloat($(".class"+id+" .totalPrice span").text());
	var money=$(".totalMoney span").text();
	if (money<totalPrice) {
		alert("Mablag' yetarli emas");
	}else{
  var sOb={
   name:products[id].name,
   price:parseFloat($(".class"+id+" .price span").text()),
   totPrice:totalPrice,
   img:products[id].image,
   count:parseInt($(".class"+id+" #count").val())
  }
  savatcha.push(sOb);
  var qolganPul=money-totalPrice;
  $(".totalMoney span").text(qolganPul);
	}

}
