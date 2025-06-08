const music = new Audio('audio/admirin.mp3');
//music.play();

const songs = [
    {
        id: "1",
        songName: 'Darkhast <br><div class="subtitle">Arijit Singh</div>',
         poster: "Images/1darkhast.jpg"

    },
    {
        id: "2",
        songName: 'Soniye <br><div class="subtitle">KK,Sunidhi Chouhan</div>',
        poster: "Images/2soniye.jpg"

    },
    {
        id: "3",
        songName: 'admirin <br><div class="subtitle">karan aujla</div>',
        poster: "Images/3admirin.jpg"

    },
    {
        id: "4",
        songName: 'Hey Shona<br><div class="subtitle">Shaan,Sunidhi Chouhan</div>',
        poster: "Images/4heyshona.jpg"

    },
    {
        id: "5",
        songName: 'Hum Tum <br><div class="subtitle">Alka Yagnik</div>',
        poster: "Images/5hum tum.jpg"

    },
    {
        id: "6",
        songName: 'Ibadatein <br><div class="subtitle">Rito Riba</div>',
        poster: "Images/6ibadatein.jpg"

    },
    {
        id: "7",
        songName: 'Ishq Hai<br><div class="subtitle">Anurag Saikia</div>',
        poster: "Images/7ishq hai.jpg"

    },
    {
        id: "8",
        songName: 'Jhoom <br><div class="subtitle">Ali Zafar</div>',
        poster: "Images/8jhoom.jpg"

    },
    {
        id: "9",
        songName: 'Khuda Jane <br><div class="subtitle">KK,Shilpa Rao</div>',
        poster: "Images/9khuda jane.jpg"

    },
    {
        id: "10",
        songName: 'Mast Magan <br><div class="subtitle">Arijit Singh</div>',
        poster: "Images/10mast magan.jpg"

    },
    {
        id: "11",
        songName: 'Saiyyan<br><div class="subtitle">Kailash kher</div>',
        poster: "Images/11saiyan.jpg"

    },
    {
        id: "12",
        songName: 'Samjho Na <br><div class="subtitle">Aditya Rikhari</div>',
        poster: "Images/12samjho na.jpg"

    },
    {
        id: "13",
        songName: 'Afreen-Afreen <br><div class="subtitle">Nusrat Fateh Ali khan</div>',
        poster: "Images/13afreen.jpg"

    },
    {
        id: "14",
        songName: 'Tenu Sang Rakhna <br><div class="subtitle">Arijit Singh</div>',
        poster: "Images/14tenu sang rakhna.jpg"

    },
    {
        id: "15",
        songName: 'Tere Hawale <br><div class="subtitle">Arijit Singh</div>',
        poster: "Images/15tere hawale.jpg"

    }

]
Array.from(document.getElementsByClassName('SongItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', ()=>{
    if ( music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
    } else {
        music.pause();
        wave.classList.remove('active1');

    }
})




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',() => {
    pop_song.scrollLeft += 330;

})
pop_song_left.addEventListener('click',() => {
    pop_song.scrollLeft -= 330;

})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',() => {
    Artists_bx.scrollLeft += 330;
})
pop_art_left.addEventListener('click',() => {
    Artists_bx.scrollLeft -= 330;
})