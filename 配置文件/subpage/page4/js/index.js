setTimeout(function(){
	document.getElementById('email').style.display = "block";
	document.getElementById('btn').style.display = "block";
},10000);

function button(){
	window.open("../page5/小作文.docx");
	document.getElementById('content').style.animationPlayState = "running"
}