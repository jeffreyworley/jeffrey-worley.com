(function(){
	window.addEventListener("load", init);

	function init() {
		h2s = document.querySelectorAll("h2");
		for (let i = 1; i < h2s.length; i++) {
			if (i % 2 == 1) {
				h2s[i].classList.add("h2-formatting-blue");
			} else {
				h2s[i].classList.add("h2-formatting-orange");
			}
		}
	}


})();