import React from 'react';
import ParticleBackground from "../../components/particleBackground";
import { Typewriter } from 'react-simple-typewriter';
import './Home.scss';

function Home() {
  return (
    <>
    <ParticleBackground></ParticleBackground>
      <div className="body">
          <div className="title">
              <h1>
              <Typewriter
                  words={['Vuillite','📩Post.', '💬Chat.', '💡Inspire.', 'Join now!']}
                  loop={0}
                  cursor={'|'}
                  cursorBlinking={false}
                  ></Typewriter>
              </h1>
          </div>
          <div className="buttons">
                <button>Start</button>
          </div>
      </div>
                  </>
  )
}

export default Home;