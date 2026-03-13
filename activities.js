function toggleVideo(wrapper) {
	const video = wrapper.querySelector("video");
	const overlay = wrapper.querySelector(".video-overlay");

	if (video.paused) {
		video.play();
		overlay.classList.add("hidden");
	} else {
		video.pause();
		overlay.classList.remove("hidden");
	}
}
