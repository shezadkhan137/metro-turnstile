
var rotateBox = function(box){
	var intTimerId = setInterval(runRotate, 5)
	function runRotate(){
		rotateBoxIncrement(box, intTimerId)
	}
}

var rotateBoxIncrement = function(box, intTimerId){
	var currentDeg = box.data("deg")
	if (!currentDeg){
		currentDeg = 0;
	}

	if (currentDeg == -90){
		clearInterval(intTimerId)
		box.css("opacity", "0")
	}
	
	var newDeg = currentDeg - 1
	var att = "rotateY("+newDeg+"deg)"
	box.css("-webkit-transform", att)
	box.data("deg", newDeg)

}

function rotateBoxAfterTime(box, t){

	timerId = setTimeout(runRotate, t)
	
	function runRotate(){
		rotateBox(box)
	}

}

$(".box").click(function(event){
	var boxes = $(".box")
	boxes.css(boxProperties)
	boxes.parent().css(parentProperties)
	for (var i = 0; i < boxes.length; i++){
		
		var t = (600-$(boxes[i]).offset().left)*2 + Math.floor((Math.random()*1000))
		t = t+ $(boxes[i]).offset().top*2
		t = t/2

		if (boxes[i] == event.target){
			t += +1500
		}
		rotateBoxAfterTime($(boxes[i]), t)
	}
})

var boxProperties = {
	"-webkit-transform-origin": "-100px 100px",
    "-webkit-transition": "all 0.4s",
    "-moz-transition": "all 0.4s",
    "-o-transition": "all 0.4s",
    "transition":"all 0.4s",
}

var parentProperties = {
	"-webkit-perspective": "2000",
}