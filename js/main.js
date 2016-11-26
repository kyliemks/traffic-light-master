
document.getElementById ("stopButton").onclick = function(){
	document.getElementById("stopLight").style.backgroundColor = "red";
	document.getElementById("slowLight").style.backgroundColor = "";
	document.getElementById("goLight").style.backgroundColor = "";
}

document.getElementById ("slowButton").onclick = function(){
	document.getElementById("stopLight").style.backgroundColor = "";
	document.getElementById("slowLight").style.backgroundColor = "yellow";
	document.getElementById("goLight").style.backgroundColor = "";
}

document.getElementById ("goButton").onclick = function(){
	document.getElementById("goLight").style.backgroundColor = "green";
	document.getElementById("slowLight").style.backgroundColor = "";
	document.getElementById("stopLight").style.backgroundColor = "";
}
