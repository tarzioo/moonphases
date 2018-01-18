var dict = {
    new: "0px",
    full: "610px",
    waxingCrescent: "150px",
    waningCrescent: "-150px",
    firstQuarter: "300px",
    thirdQuarter: "-300px",
    waxingGibbous: "0px",
    waningGibbous: "0px",
};
function setPhase(phase) {
    
    if(phase === "firstQuarter"){
	$(".shadow").css({"right": dict[phase], "border-radius": "50% 0 0  50%", "height": "320px", "background-color": "rgba(0, 0, 0, 0.90)", "box-shadow": "none"});
	}
    else if(phase === "thirdQuarter"){
	$(".shadow").css({"right": dict[phase], "border-radius": "0 50% 50% 0", "height": "320px", "background-color": "rgba(0, 0, 0, 0.90)", "box-shadow": "none"});
	}
    else if(phase === "waxingGibbous"){
	$(".shadow").css({"right": dict[phase], "box-shadow": "inset 60px -10px 10px 10px rgba(0, 0, 0, 0.90)", "background-color": "none" });
	}
    
    else if(phase === "waningGibbous"){
	$(".shadow").css({"right": dict[phase], "box-shadow": "inset -60px -10px 10px 10px rgba(0, 0, 0, 0.90)", "background-color": "none" });
	
	}
    else {
	$(".shadow").css({"right": dict[phase], "border-radius": "50%", "height": "300px", "background-color": "rgba(0, 0, 0, 0.90)", "box-shadow": "none" });
	}
    
};

