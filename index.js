/*
 *
 * Jeffrey Worley
 * jeff@theworleys.com
 *
 */
(function(){
	//import anime from anime.min.js
	let ANIMATE = true;
	"use strict";

	window.addEventListener("load", initPage);

	function initPage() {
		if (ANIMATE) {
			introAnimation()
		}
		
	}

	function introAnimation() {
		introBoxes();
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

	function introBoxes() {
		let animatedGrid = [];
		let divWidth = Math.floor(window.innerWidth / 20) - Math.floor(window.innerWidth / 20) * 0.1;
		let leftover = (window.innerWidth / 20) - divWidth;
		//document.body.style.marginLeft = leftover / 2;
		//document.body.style.marginRight = leftover / 2;
		let numColumns = Math.floor(window.innerWidth / divWidth)
		let numRows = Math.ceil(window.innerHeight / divWidth)
		let container = document.getElementById("box-holder");
		for (let i = 0; i <  numColumns * numRows; i++) {
			let newDiv = document.createElement("div");
			newDiv.style.width = divWidth + "px";
			newDiv.style.height = divWidth + "px";
			newDiv.classList.add("intro-boxes");
			animatedGrid.push(newDiv);
			container.appendChild(newDiv);
		}

		let introTimeline = anime.timeline();
		introTimeline.add({
		  targets: animatedGrid,
		  scale: [
		    {value: .1, easing: 'easeInQuad', duration: 300},
		    {value: 1, easing: 'easeInOutQuad', duration: 300},
		    {value: 1, duration: 350},
		    {value: 0, duration: 200}
		  ],
		  //translateX: anime.stagger([10, 10], {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
		  //translateY: anime.stagger([10, 10], {grid: [numColumns, numRows], from: 'center', axis: 'y'}),
		  //rotateZ: anime.stagger([0, 40], {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
		  rotate: anime.stagger([270, 270], {grid: [numColumns, numRows], from: 'center'}),
		  delay: anime.stagger(150, {grid: [numColumns, numRows], from: 'center'}),
		  easing: 'easeInQuad'
		  
		}, 500)/*.add({
			targets: '.intro-boxes',
			//translateX: anime.stagger(window.outerWidth * 2, {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
			//translateX: anime.stagger(window.outerWidth, {grid: [numColumns, numRows], from: 'center'}),  
			//translateY: window.outerHeight,
			scale: anime.stagger(0, {grid: [numColumns, numRows], from: 'center'}),
			delay: anime.stagger(50, {grid: [numColumns, numRows], from: 'center'}),
			easing: 'easeInQuad',
			complete: () => {animatedGrid.forEach(element => element.remove());},
			update: () => {checkBounds(animatedGrid)}
		});*/
	}

})();