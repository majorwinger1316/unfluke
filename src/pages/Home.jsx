import React from 'react'
import "../styles/Home.css"
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className='home'>
              <Typewriter
          options={{
            strings: [
              "An easy-to-use platform for traders and investors.",
              "Back-test strategies in Indian stock and cryptocurrency markets.",
              "We provide comprehensive historical data for the Indian derivative markets.",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "typer",
            cursorClassName: "cursor",
          }}
        />
    </div>
  )
}

export default Home
