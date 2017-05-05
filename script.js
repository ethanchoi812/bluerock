

	window.onscroll = function(){
		changeNavBg();
		
		//var abtDiv = document.getElementById("about");
		//var svcDiv = document.getElementById("services");
		var faicons = document.getElementsByClassName("fa");
		var getStartedBtn = document.getElementById("get-started-btn");
		var downloadBtn = document.getElementById("download-btn");
		var x = 1000;

		for (var i=0; i<faicons.length; i++){		
			setTimeout(lazyLoad(faicons[i]), x);
			x += 1000;
		}

		lazyLoad(getStartedBtn);
		lazyLoad(downloadBtn);
	};
	
	function changeNavBg(){

		var mainNav = document.getElementById("main-nav");

		if (document.body.scrollTop > 70){ 
			mainNav.classList.add("white-nav");
		} else if (document.body.scrollTop < 70) {
			mainNav.classList.remove("white-nav");
		}
	};

	function elementInViewport(el){
		var rect = el.getBoundingClientRect();
		var html = document.documentElement;

		return (rect.top >= 0 && rect.left >= 0 
			&& rect.bottom <= (window.innerHeight || html.clientHeight)
			&& rect.right <= (window.innerWidth || html.clientWidth)
	    )
	}

	function lazyLoad(el){
		if(elementInViewport(el)){
			el.style.opacity = 1;
			el.classList.add("animated");
			el.classList.add("zoomIn");
		}
	}
		
	
