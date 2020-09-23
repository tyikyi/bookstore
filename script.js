
$(document).ready(function(){
$("[data-toggle='popover']").popover();
});

var i=0;
var j=1;
var getnum;
var added=document.getElementById("added");
var getstr;
document.getElementById("add").innerHTML=i;

if(i==0){
	added.innerHTML="<h1>No items you added.</h1>";
}
function plus(num){
getnum=num;
getnum++;
i++;
getstr="<img src='image/book"+getnum+".jpg' class='img-responsive' width='60px' style='display:inline-block;margin:1px;'>";
document.getElementById("add").innerHTML=i;
if(i==0){
	added.innerHTML="<h1>No items you added.</h1>";
}
else if(i==j){
	added.innerHTML="";
}
	added.innerHTML+=getstr;
}

			