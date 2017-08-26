        var adiv = document.getElementById("select");
		var sdiv = adiv.getElementsByTagName("div");
		var img = document.getElementById("pic");
		var simg = img.getElementsByTagName("img");
		for(var i=0;i<sdiv.length;i++){
			sdiv[i].index=i;
			sdiv[i].onmouseover = function(){
				for(var j=0;j<simg.length;j++){
					simg[j].className = "hide";
				}
				this.style.color="blue";
				simg[this.index].className = "show";
			}
		}