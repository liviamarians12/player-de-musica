const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title:
      "EXO - LOTTO",
    artist: "EXO",
    cover: "files/Exo_Lotto_Album.jpg",
    file: "files/Lotto.mp3"
  };

  cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
  title.innerText = data.title;
  artist.innerHTML = `<i class='material-icons'>account_circle<i/> ${data.artist}`;
  audio.src = data.file;