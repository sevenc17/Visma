
const scrollToAbout = document.querySelector('.scroll_to_about')

const about = document.querySelector('#about-company')

const video = document.querySelector('.video-item')

const videoWrapper = document.querySelector('.video-wrapper')

video.addEventListener('click', playVideo)

function playVideo(){
	video.removeEventListener('click', playVideo)
	videoWrapper.classList.add('playing')
	video.setAttribute('controls', '')
	setTimeout(() => {
		video.play()
	}, 0)
}

scrollToAbout.addEventListener('click', () => {
	about.scrollIntoView({
		behavior: "smooth"
	})
})