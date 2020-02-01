$(document).ready(function(){
    //Get products from JSON and append to dom in html form
   $.getJSON("json/products.json", function(data){
       $("#products").append("<table id=\"productsList\">");
       $("#productsList").append("<tr>");
       $("#productsList").append("<th>Name</th>");
       $("#productsList").append("<th>Stock Number</th>");
       $("#productsList").append("<th>Quantity on Hand</th>");
       $("#productsList").append("<th> Size</th>");
       $("#productsList").append("<th>Color</th>");
       $("#productsList").append("<th>Knife Sharpener</th>");
       $("#productsList").append("<th>Autoshutoff</th>");
       $("#productsList").append("<th>Cord Storage</th>");
       $("#productsList").append("</tr>");
       $.each(data, function(){
           $.each(this,function(key, value){
               $("#productsList").append("<tr>");
               $("#productsList").append("<td>"+value.name+"</td>");
               $("#productsList").append("<td>"+value.stockNumber+"</td>");
               $("#productsList").append("<td>"+value.quantityOnHand+"</td>");
               $("#productsList").append("<td>"+value.size+"</td>");
               $("#productsList").append("<td>"+value.color+"</td>");
               $("#productsList").append("<td>"+value.knifeSharpener+"</td>");
               $("#productsList").append("<td>"+value.autoshutoff+"</td>");
               $("#productsList").append("<td>"+value.cordStorage+"</td>");
               $("#productsList").append("</tr>");
           });
       });
       $("#productsList").append("</table>");
   }) ;
});