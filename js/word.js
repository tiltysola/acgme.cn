var index=0;
var content="　　机会，掌握于自己之手，需要靠自己掌舵。\n　　当我们在做自己所想之事时，必须全力以赴，尽己所能，这是机会；而当我们在做自己所恶之事时（但又必须去面对），更应竭尽全力，至臻完美，这是锻炼。学习和生活就是如此，只有我们完成了所有我们想做的事情和解决了所有我们必须面对的事情时，我们的人生才算是完整的。\n　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　—— 奏";
function fadein(){
	if(index<=content.length){
		index++;
		while(content.substring(index-1,index)=="　"){
			index++;
		}
	    document.getElementById("content").innerText = content.substring(0,index);
	    document.getElementById("content").style.display = "";
	    setTimeout(fadein, 100);
	}
}
window.onload=function(){ 
	setTimeout(fadein, 100);
} 
