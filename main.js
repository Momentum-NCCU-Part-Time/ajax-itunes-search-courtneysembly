const itunesUrl = "https://proxy-itunes-api.glitch.me/";
let inputForm = document.getElementById('Form');
let inputField = document.getElementById('inputField');
let results = document.getElementById('results');
let button = document.getElementById('searchButton');
let container = document.getElementById("container");
let playPreview = document.getElementById("songUrl");
let songTitle = document.getElementById("songName")
const songUrl = "https://geo.itunes.apple.com/us/album/";


inputField.addEventListener('submit', (event) => {
    event.preventDefault();
    let term = inputField.value;
  
    document.addEventListener('play', event => {
      const audio = document.getElementsByTagName('audio');
       })
    
    while (container.firstChild) {
          container.removeChild(container.firstChild);
      }
    
  
    fetch(itunesUrl + term + "&media=music" + "&limit=42" + "&country=us").then((response) => {
      if (response.status === 200){
        return response.json();
      } else {
        let errorMsg = document.createElement('h2');
        errorMsg.innerText = 'Dust yourself off and try again.';
        results.appendChild(errorMsg);
      }
    }).then((parsedJsonResponse) => {
      console.log(parsedJsonResponse);
      const songs = parsedJsonResponse.results;
      return songs.map(results => {
          const songCard = document.createElement("div"),    
          artist = document.createElement('h2'),
          song = document.createElement('h2'),
          img = document.createElement('img'),
          playButton = document.createElement('button')
  
          playButton.innerText = "Play Preview"
  
          playButton.addEventListener('click', (event) => {
            event.preventDefault();
            playPreview.src = results.previewUrl;
            songTitle.innerText += " " + results.songName;
          })
  
      artist.innerHTML = results.artistName;
      track.innerHTML = results.songName;
      img.src = results.artworkUrl100;
      
      musicCard.appendChild(img);
      musicCard.appendChild(artist);
      musicCard.appendChild(song);
      musicCard.appendChild(playButton);
      
      container.appendChild(musicCard);
  })
  })
    })