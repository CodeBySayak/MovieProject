const mongoose=require('mongoose');
const Movie= require('./models/movies');




const dummyMovie=[
  {
    name: "Inception",
    year: 2010,
    img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    desc: "A thief who steals corporate secrets through dream-sharing technology is given an inverse task of planting an idea."
  },
  {
    name: "The Dark Knight",
    year: 2008,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/The_Dark_Knight_%282008_film%29.jpg/250px-The_Dark_Knight_%282008_film%29.jpg",
    desc: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late."
  },
  {
    name: "Interstellar",
    year: 2014,
    img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    desc: "A team of explorers travel through a wormhole in space to ensure humanity's survival."
  },
  {
    name: "Titanic",
    year: 1997,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Titanic_%281997_film%29_poster.png/250px-Titanic_%281997_film%29_poster.png",
    desc: "A romance unfolds aboard the ill-fated RMS Titanic."
  },
  {
    name: "Avatar",
    year: 2009,
    img: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg",
    desc: "A paraplegic Marine is sent to Pandora and becomes torn between two worlds."
  },
  {
    name: "The Matrix",
    year: 1999,
    img: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    desc: "A hacker discovers the true nature of reality and his role in the war against its controllers."
  },
  {
    name: "Troy",
    year: 2004,
    img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Troy_03500296.png",
    desc: "Paris, the prince of Troy, convinces the beautiful Helen to leave her husband, King Menelaus, and come with him. But this enrages the king, and he declares war on Troy along with all his allies."
  },
  {
    name: "Jurassic World Rebirth",
    year: 2025,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Jurassic_World_Rebirth_poster.jpg/250px-Jurassic_World_Rebirth_poster.jpg",
    desc: " A team travels to a former island research facility where three specific gigantic species of dinosaurs reside, with the goal of extracting samples that are vital for a heart disease treatment."
  },
  {
    name: "Avengers: Endgame",
    year: 2019,
    img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    desc: "The Avengers assemble once more to reverse Thanos' actions and restore balance."
  },
  {
    name: "The Devil Wears Prada 2",
    year: 2026,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/The_Devil_Wears_Prada_2_%28film_poster%29.png/250px-The_Devil_Wears_Prada_2_%28film_poster%29.png",
    desc: "Miranda Priestly struggles against Emily Charlton, her former assistant turned rival executive, as they compete for advertising revenue amid declining print media, while Miranda nears retirement."
  }
]


function seed(){
    Movie.insertMany(dummyMovie)
.then(()=>{
    console.log("data seeded");
})
}

module.exports=seed;


