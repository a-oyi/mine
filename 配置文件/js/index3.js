$(function(){
    Victor("container", "output");   
    $("#entry_name").focus();
    $(document).keydown(function(event){
        if(event.keyCode==13){
            $("#entry_btn").click();
        }
    });
});

function iconChange(){
	var userNameId = document.getElementById('entry_name');
	var userNameValue = userNameId.value;
	if(userNameValue == "洪天慈"){
		icon_url = "icon.jpg";
	}else{
		icon_url = "user.png"
	}
	document.getElementById('icon').innerHTML = "<img src='image/" + icon_url + "' alt=''/>";
}

document.getElementById('entry_btn').addEventListener('click',function() {
	var username = document.getElementById("entry_name").value;
	var password = document.getElementById("entry_password").value;
	if(username == '洪天慈' && password == '1214'){
		document.body.style.animationPlayState="running";
		setTimeout(function(){window.location.href = 'subpage/page1/index.html'},1500);
	}else{
		alert('抱歉，您的用户名或密码错误，请重新输入！');
	}
});