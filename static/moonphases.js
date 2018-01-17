var dict = {
	new: "0px",
	full: "610px",
	waxingCrescent: "150px",
	waningCrescent: "-150px",
	firstQuarter: "300px",
	thirdQuarter: "-300px",
};
function setPhase(phase) {
		
	if(phase === "firstQuarter"){
		$(".shadow").css({"right": dict[phase], "border-radius": "50% 0 0  50%", "height": "320px"});
	}
	else if(phase === "thirdQuarter"){
		$(".shadow").css({"right": dict[phase], "border-radius": "0 50% 50% 0", "height": "320px"});
	}
	else {
		$(".shadow").css({"right": dict[phase], "border-radius": "50%", "height": "300px"});
	}
	
};

// function firstQuarter(){
// 	$(".shadow").css({"right": "295px", "border-radius": "50% 0% 0% 50%", "height": "320px"});
// }






// $(".shadow").css({"border-radius": "50%", "height": "300px"});
// $(".shadow").css("right", "150px");


$(".shadow").css("right", "0px");
