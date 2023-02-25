

const langsBox = document.querySelector('.langs')

const langs = document.querySelectorAll('.lang')

langsBox.addEventListener('click', event => {
	langs.forEach(i => {
		i.classList.add('active-lang')
	})
})

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