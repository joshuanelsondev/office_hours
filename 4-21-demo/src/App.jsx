import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IoMdClose } from "react-icons/io";
import './App.css'

const names = ['Aaron', 'Moka', 'Nadia', 'Rizel', 'Jean']

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Press the toggle button to toggle through names');
  const [openGreetModal, setOpenGreetModal] = useState(false);
  
  const toggleGreetModal = () => {
    setOpenGreetModal(!openGreetModal);
  }

  const toggleNames = () => {
    setName(names[count]);
    setCount((count + 1) % 5);
  }

  const addOne = () => {
    setCount(count + 1);
  }

  return (
    <div className='container'>
      <div>
        <h1>{name}</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={toggleNames}>
          Toggle
        </button>
        <button onClick={addOne}>
          Add
        </button>
        <button onClick={() => setCount(count - 1)}>
          Subtract  
        </button>
        <button onClick={toggleGreetModal}>
          Greet  
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {openGreetModal ? ( 
        <div className='modal-div'>
          <div className='greet-modal'>
            <h3>Welcome to our page {name}!</h3>
            <IoMdClose className='close' onClick={toggleGreetModal} size={24} />
          </div>
        </div>
      ): (
        <h3>Welcome to our Page!</h3>
      )}
    </div>
  )
}

export default App
