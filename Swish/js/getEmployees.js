$(document).ready(function(){
   //get list of employees from JSON and append to dom
   $.getJSON("json/employees.json", function(data){
       $("#employees").append('<div id=empList>');
       
       //appends script for manipulating elements loaded into dom
       $("#empList").append('<script type=\"text/javascript\">$(document).ready(function() {$(\"#empList h3\").click(function(evt){$(this).toggleClass(\"minus\");if($(this).attr(\"class\") == \"minus\"){$(this).next().slideDown(500, \"easeOutBounce\");}else{$(this).next().slideUp(500,\"easeInBounce\");}evt.preventDefault();});});</script>')
       $.each(data, function(){
           $("#empList").append('<ul>');
           $.each(this,function(key, value){
               $("#empList").append('<li>');
               $("#empList").append(
                       '<h3><a href=\"#\">' + value.name + '</a></h3>' +
                       '<div class\"info\"><p>Title: ' + value.title + '</p>'+
                       '<p>Department: ' + value.department + '</p>' +
                       '<p>Phone: ' + value.phone + '</p>' +
                       '<p>Location: ' + value.location + '</p></div><br>'
                );
                $("#empList").append('</il>');
           });
           $("#empList").append('</ul>');
       });
       $("#empList").append('</div>');
   }); 
});
