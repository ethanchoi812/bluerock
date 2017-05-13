

	window.onscroll = function(){
		changeNavBgScroll();
		activeNav();

		var faicons = document.getElementsByClassName("fai");
		var getStartedBtn = document.getElementById("get-started-btn");
		var downloadBtn = document.getElementById("download-btn");	

		for (var i=0; i<faicons.length; i++){			
			lazyLoad(faicons[i]);
		}

		lazyLoad(getStartedBtn);
		lazyLoad(downloadBtn);
	};
	
	function changeNavBgScroll(){

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

	function activeNav(){

		var sumHeight = window.innerHeight - document.getElementById("main-nav").offsetHeight;;

		divId = ["about", "services", "portfolio", "contact"];		
		
		for(var n=0; n<divId.length; n++){

			var divHeight = document.getElementById(divId[n]).offsetHeight;
			var body = document.body; 
			var html = document.documentElement;
			var navLink = document.getElementById(divId[n] + "-nav");

			if (body.scrollTop > sumHeight || html.scrollTop > sumHeight){

				navLink.classList.add("active");
				
			} else {

				navLink.classList.remove("active");

			}

			if (body.scrollTop > (sumHeight + divHeight) || html.scrollTop > (sumHeight + divHeight)) {
				
				navLink.classList.remove("active");
	
			} 

			sumHeight += divHeight;
		}
	}
	
		
	
