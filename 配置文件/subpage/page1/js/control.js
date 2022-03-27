document.getElementById('ifr').style.width = window.screen.width + "px";
document.getElementById('ifr').style.height = window.screen.height + "px";
function loadScript(url,callback){ 
	setTimeout(function(){
   		var script = document.createElement("script");
   		script.type = "text/javascript"; 
   		script.src = url;
   		if (script.readyState){//IE 
   		   script.onreadystatechange = function(){ 
   		      if (script.readyState ==  "loaded" || script.readyState == "complete"){ 
   		         script.onreadystatechange = null;
   		         eval(callback + '()');
   		      } 
   		   }; 
   		} else {
   		   script.onload = function(){ 
   		      eval(callback + '()');
   		   }; 
   		}
   		document.body.appendChild(script);
	},1200);
}

function playOrPaused(){
	if(audio1.paused){
		audio1.play();
		document.getElementById('btn').style.animationPlayState = "running";
		setTimeout(function(){
			document.getElementById('sum').style.display = "none";
			document.getElementById('iframe').style.display = "block";
			document.getElementById('ifr').src = "../page2/index.html";
			document.getElementById('skin1').style.display = "none";
			document.getElementById('skin2').style.display = "none";
		},27000);
		setTimeout(function(){
			document.getElementById('skin1').style.animationPlayState = "running";
			document.getElementById('skin2').style.animationPlayState = "running";
		},25000)
		return;
	}
}

var audios = document.getElementsByTagName("audio");
for (var i = 0; i < audios.length; i++) {
    audios[i].addEventListener('ended', function() {
        var nextAudio = this.nextSibling.nextSibling;
        if (nextAudio.tagName == "AUDIO") {
            nextAudio.play();
        }
    }, false);
}
var vol = 0.3;
document.getElementById('audio1').volume = vol;
document.getElementById('audio2').volume = vol;
document.getElementById('audio3').volume = vol;