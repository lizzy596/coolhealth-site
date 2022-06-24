
const video = document.querySelector('#video');
let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);



/*function smallScreenControls() {
  let playButton = document.querySelector('.play');
  let screenWidth = window.innerWidth;
  if(screenWidth < 481) {
    playButton.style.opacity = "0";
    video.setAttribute("controls", "controls")
    video.setAttribute("muted", "muted")
    console.log('hello')
  } else {
    console.log('goodbye')
    return 
  }
} */








/*function playPause() {
    let playButton = document.querySelector('.play');
    if (video.paused) {
     
      video.setAttribute("controls", "controls")
      video.autoplay = true;
      
      playButton.style.opacity = "0";

    
 
     
    } else {
      video.pause();
      video.removeAttribute("controls", "controls")
      video.removeAttribute("autoplay", "autoplay")
      
   
     
      playButton.style.opacity = "1";
      
      
    }
  } */


  function playPause() {

    
    let playButton = document.querySelector('.play');
    if (video.paused) {


      if(isSafari) {
        video.muted = true;
        video.autoplay = true;
        video.setAttribute('playsinline', 'playsinline');


      } else {
        video.setAttribute("controls", "controls")
        video.autoplay = true;
        
        playButton.style.opacity = "0";

      }
     
  

    
  
 
     
    } else {
      video.pause();
      video.removeAttribute("controls", "controls")
      video.removeAttribute("autoplay", "autoplay")
      
   
     
      playButton.style.opacity = "1";
      
      
    }
  } 







  

function showControls() {
    if(video.playing) {
        video.setAttribute("controls", "controls")
    }
}


//video.addEventListener("onload", smallScreenControls, false) 


video.addEventListener("click", playPause, false);

video.addEventListener("mouseover", showControls, false)





























/*var videoPlayButton,
  videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
        this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
  }

videoMethods.renderVideoPlayButton() */