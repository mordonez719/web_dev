import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profilepic from './assets/profile.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='sections' id="title-content">
        <div className="sections" id ="inner">
          <h1>
            Michelle Ordonez Campos
          </h1>
          <h3>CS @ Northwestern</h3>
        </div>
        <span>
          <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fprofile&psig=AOvVaw1yIPFVzAil4nqAF4hq4GpH&ust=1738013948738000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPif-_GslIsDFQAAAAAdAAAAABAE'/>
        </span>
      </div>
      <div className='sections'>
        <p>
          intro here
        </p>
      </div>
      <div className='sections'>
        <p>
          experience here
        </p>
      </div>
      <div className='sections'>
        <p>
          projects here
        </p>
      </div>
    </>
  )
}

export default App
