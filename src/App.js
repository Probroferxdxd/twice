import {useState, useEffect, useRef} from 'react'
import './App.css';

const LikeButton = () => {

  const [count, setCount] = useState(0)

  const clickFunction = () => {
    setCount(count + 1)
  }

  return(
    <button onClick={clickFunction}> <i class="fa-regular fa-heart"></i> Stan ({count})</button>
  )
}

const LastTheme = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      try{
        audio.pause();
      }
      catch{
        console.log("Dont worry")
      }
    } else {
      try{
        audio.play();
      }
      catch{
        console.log("Dont worry")
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='theme-section'>
      <h1>Latest Release: "Dive"</h1>
      <audio ref={audioRef}>
        <source src="./dive.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className='theme-song'>
        <section>
          <div className='image-section'>
            <img src='https://pbs.twimg.com/media/GQ_GaYUbwAQYzn_.jpg' width="200px"/>
          </div>
          <div className='info-section'>
            <h3>Dive</h3>
            <span>Twice</span>
          </div>
        </section>
        <section>
          <button onClick={togglePlayPause}>
            {isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}
          </button>
        </section>
      </div>
    </div>
  );
}

const App = () => {

  const members = [
    {
      name: "Nayeon",
      role: ["Vocalista", "Bailarina"],
      img: "https://i.pinimg.com/736x/3d/2d/a6/3d2da68131f095564e395e7620fc269e.jpg"
    },
    {
      name: "Jeongyeon",
      role: ["Vocalista", "Bailarina", "Rapera"],
      img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSbtWgkaWQqU2mMM6uz5uGUixu9XgY1wP6Gr0AO_FIzgDcXNRF04XI5xxEghnmbmCKfagzqFDg2ZVZ_Ks4"
    },
    {
      name: "Momo",
      role: ["Vocalista", "Bailarina", "Rapera"],
      img: "https://0.soompi.io/wp-content/uploads/sites/8/2020/01/05204321/momo.jpg"
    },
    {
      name: "Sana",
      role: ["Vocalista", "Bailarina"],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/20240809_Sana_Minatozaki_%E6%B9%8A%EF%A8%91_%E7%B4%97%E5%A4%8F_for_PRADA_2024_06.jpg/240px-20240809_Sana_Minatozaki_%E6%B9%8A%EF%A8%91_%E7%B4%97%E5%A4%8F_for_PRADA_2024_06.jpg"
    },
    {
      name: "Jihyo",
      role: ["Lider", "Vocalista", "Bailarina"],
      img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/TWICE_Jihyo_Fred_May_2024.jpg"
    },
    {
      name: "Mina",
      role: ["Vocalista", "Bailarina"],
      img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Mina_H%26M_Rokh_2.jpg"
    },
    {
      name: "Dahyun",
      role: ["Vocalista", "Bailarina"],
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/DAHYUN_%28%EB%8B%A4%ED%98%84%29_%E2%80%93_2024.02.12_%E2%80%93_P1.png"
    },
    {
      name: "Chaeyoung",
      role: ["Rapera", "Vocalista", "Bailarina"],
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/241204_Chaeyoung_at_Rokh_H%26M_%282%29.png"
    },
    {
      name: "Tzuyu",
      role: ["Rapera","Vocalista", "Bailarina"],
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/20240305_Chou_Tzuyu_%E5%91%A8%E5%AD%90%E7%91%9C_03.jpg"
    }
  ]

  return(
    <div className='container'>
      <div className='main-1'>
        <div className='black-parallax'></div>
        <h1>TWICE</h1>
      </div>
      <div className='main-2'>
          <header><h3>Meet the Members</h3></header>
          <main>
            {members.map((element)=>(
              <div className='member-section'>
                <section>
                  <img src={element.img}/> 
                </section>
                <section className='information'>
                  <h4>{element.name}</h4>
                  <ul>
                    {element.role.map((el)=>(
                      <li>{el}</li>
                    ))}
                  </ul>
                  <LikeButton/>
                </section>
              </div>
            ))}
            <LastTheme/>
          </main>
      </div>
    </div>
  )
}

export default App;
