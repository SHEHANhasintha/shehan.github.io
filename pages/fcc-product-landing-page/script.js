	const nav = document.getElementsByTagName("nav")[0];
	document.addEventListener("scroll", (e) => {
		console.log(window.pageYOffset)
		if (window.pageYOffset > 0){
			nav.style.backgroundColor = "#000";
		}else{
			nav.style.backgroundColor = "#fff0";
		}
	});


	function anim(){
		let ele = $(".area div");
		var tl = new TimelineMax({repeat:-1});

		tl.staggerFromTo(ele,0.5,
			{y:-20, autoAlpha:0},
			{y:0,autoAlpha:1, ease:Back.easeInOut},0.05
			)
			.fromTo(ele,0.5,
				{autoAlpha:1,scale:1},
				{autoAlpha:0,scale:0},0.05

			)



	}
anim();

window.onload = function(){
	var timeLT = new TimelineLite();
	timeLT.from($("#nav-bar"), 0.5, {opacity:0,y:-50})
		.from($(".form-div"), 0.5, {opacity:0,y:-50},'-=0.25')
		.from($(".slider"),0.5,{opacity:0,y:-50},'-=0.25');

	var defaultArr = [];
	var object = $(".object");
	console.log(object[0])
	for (i=0;i<object.length;i++){
		defaultArr[i] = object[i];
	}
	defaultArr.forEach( ob => {
		timeLT.from(ob,0.5,{opacity:0,x:50},'-=0.25')
	})

	timeLT.from($(".switch"),0.5,{opacity:0,y:50})
			.from($("iframe"),0.5,{opacity:0,y:50},'-=0.25')
			.from($("footer"),0.5,{opacity:0,y:50},'-=0.25');

	$(".area")[0].style.display = 'none';


}