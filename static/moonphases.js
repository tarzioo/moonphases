ar dict = {
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
	$(".shadow").css({"right": dict[phase], "box-shadow": "inset 60px -10px 10px 10px rgba(0, 0, 0, 0.90)", "background-color": "rgba(0, 0, 0, 0)" });
	}
    
    else if(phase === "waningGibbous"){
	$(".shadow").css({"right": dict[phase], "box-shadow": "inset -60px -10px 10px 10px rgba(0, 0, 0, 0.90)", "background-color": "rgba(0, 0, 0, 0)"});
	
	}
    else {
	$(".shadow").css({"right": dict[phase], "border-radius": "50%", "height": "300px", "background-color": "rgba(0, 0, 0, 0.90)", "box-shadow": "none" });
	}
    
    
};


var phases = ["firstQuarter", "waxingCrescent", "new", "waningCrescent", "thirdQuarter", "waningGibbous", "full", "waxingGibbous"];
 

for(var start = 0; start < phases.length; start++) {
  (function(i){
    setTimeout(function(){
     setPhase(phases[i])
    }, 1500 * i)
  })(start);
}


