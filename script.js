//your JS code here. If required.
const input = document.getElementById("fname");
input.addEventListener("blur",function(){
	alert(input.value.toUpperCase());
	input.value=input.value.toUpperCase()
})