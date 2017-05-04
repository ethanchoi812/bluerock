

	window.onscroll = function(){changeNavBg()};

	window.onload =function(){loadFa()};
	
	function changeNavBg(){

		var mainNav = document.getElementById("main-nav");

		if (document.body.scrollTop > 70){ 
			mainNav.classList.add("white-nav");
		} else if (document.body.scrollTop < 70) {
			mainNav.classList.remove("white-nav");
		}
	};

	function loadFa(){

		var faIcons = document.getElementsByClassName("fa");
		for(var i=0; i<faIcons.length; i++){
			if(faIcons[i].scrollIntoView){
				if(faIcons[i].display === "none"){
					faIcons[i].display = "block";
					alert("YAS");
				}
			}
		}
	}