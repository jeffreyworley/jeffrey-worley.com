/*
 *
 * Jeffrey Worley
 * jeff@theworleys.com
 *
 */
(function(){
	//import anime from anime.min.js
	let divWidth = Math.floor(window.innerWidth / 20) - Math.floor(window.innerWidth / 20) * 0.1;
	let numColumns = Math.floor(window.innerWidth / divWidth);
	let numRows = Math.ceil(window.innerHeight / divWidth);

	let ANIMATE = true;
	"use strict";

	window.addEventListener("load", initPage);

	function initPage() {
		let welcome = document.getElementById("welcome");
		let fuck = makeBoxes();
		welcome.addEventListener("click", () => {
			if (ANIMATE) {

				//document.getElementById("welcome").parentNode.parentNode.removeChild(document.getElementById("welcome").parentNode)
				introAnimation(fuck);
			}
		});
		
		
	}

	function introAnimation(fuck) {
		moveBoxes(fuck);
	}
	


	function isElementInViewport (el) {
	    let rect = el.getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	}

	function checkBounds(divs) {
		//let rect = el.getBoundingClientRect();
		//let winHeight = (window.innerHeight || document.documentElement.clientHeight);
		//let winWidth = (window.innerWidth || document.documentElement.clientWidth);
		//console.log(rect.top);
		console.log("in");
		divs.forEach(el => {
			if (!isElementInViewport(el)) {
			console.log("removing an element");
			//el.style.width = "0px";
			//el.style.height = "0px";
			el.style.visibility = "none";
		}
	});
		
	}

	function makeBoxes() {
		let animatedGrid = [];
		
		let leftover = (window.innerWidth / 20) - divWidth;
		//document.body.style.marginLeft = leftover / 2;
		//document.body.style.marginRight = leftover / 2;
		
		let container = document.getElementById("box-holder");
		for (let i = 0; i <  numColumns * numRows; i++) {
			let newDiv = document.createElement("div");
			newDiv.style.width = divWidth + "px";
			newDiv.style.height = divWidth + "px";
			newDiv.classList.add("intro-boxes");
			animatedGrid.push(newDiv);
			container.appendChild(newDiv);
		}
		return animatedGrid;
	}

	function moveBoxes(animatedGrid) {

		let introTimeline = anime.timeline();
		introTimeline.add({
		  targets: animatedGrid,
		  scale: [
		    {value: .1, easing: 'easeInQuad', duration: 300},
		    {value: 1, easing: 'easeInOutQuad', duration: 150},
		    //{value: 1, duration: 50},
		    {value: 0, duration: 200}
		  ],
		  //translateX: anime.stagger([10, 10], {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
		  //translateY: anime.stagger([10, 10], {grid: [numColumns, numRows], from: 'center', axis: 'y'}),
		  //rotateZ: anime.stagger([0, 40], {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
		  rotate: anime.stagger([1080, 1080], {grid: [numColumns, numRows], from: 'center'}),
		  delay: anime.stagger(150, {grid: [numColumns, numRows], from: 'center'}),
		  easing: 'easeInQuad',
		  loopComplete: (anim) => {
		  	let boxes = document.getElementById("box-holder");
		  	if (boxes) {
		  		document.getElementById("box-holder").remove();
		  		this.removeEventListener()
	  		}
		  }

		}, 500);
	}

})();