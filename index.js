/*
 *
 * Jeffrey Worley
 * jeff@theworleys.com
 *
 */
(function(){
	//import anime from anime.min.js

	"use strict";

	window.addEventListener("load", initPage);

	function initPage() {
		introAnimation()
	}

	function introAnimation() {
		introBoxes();
	}

	function introBoxes() {
		let animatedGrid = [];
		let divWidth = Math.floor(window.innerWidth / 20) - Math.floor(window.innerWidth / 20) * 0.1;
		let leftover = (window.innerWidth / 20) - divWidth;
		//document.body.style.marginLeft = leftover / 2;
		//document.body.style.marginRight = leftover / 2;
		let numColumns = Math.floor(window.innerWidth / divWidth)
		let numRows = Math.ceil(window.innerHeight / divWidth)

		for (let i = 0; i <  numColumns * numRows; i++) {
			let newDiv = document.createElement("div");
			newDiv.style.width = divWidth + "px";
			newDiv.style.height = divWidth + "px";
			newDiv.classList.add("intro-boxes");
			animatedGrid.push(newDiv);
			document.body.appendChild(newDiv);
		}
		
		let introTimeline = anime.timeline();
		introTimeline.add({
		  targets: '.intro-boxes',
		  scale: [
		    {value: .1, easing: 'easeInQuad', duration: 500},
		    {value: 1, easing: 'easeInOutQuad', duration: 1200}
		  ],
		  translateX: anime.stagger(10, {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
		  translateY: anime.stagger(10, {grid: [numColumns, numRows], from: 'center', axis: 'y'}),
		  rotateZ: anime.stagger([0, 40], {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
		  delay: anime.stagger(200, {grid: [numColumns, numRows], from: 'center'}),
		  easing: 'easeInQuad'
		}).add({
			targets: '.intro-boxes',
			translateX: anime.stagger(window.outerWidth * 2, {grid: [numColumns, numRows], from: 'center', axis: 'x'}),
			delay: anime.stagger(150, {grid: [numColumns, numRows], from: 'center'}),
			easing: 'easeInQuad',
			complete: () => {animatedGrid.forEach(element => element.remove());}
		});
	}

})();