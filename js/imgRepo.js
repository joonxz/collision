var MG = MG || {};

(function () {
	"use strict";

	// Load all images here within this image repository
	var imageRepository = function () {
		// Define images
		this.background = new Image();
		// Set images src
		this.background.src = "imgs/bg.png";
	}();

	// expose imageRespository
	MG.imageRepository = imageRepository;
})();