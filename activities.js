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

document
	.querySelector(".timeline-item:last-child .timeline-content:last-child")
	.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
