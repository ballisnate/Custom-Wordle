import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Keyboard() {
  return (
    <div>
      <button>A</button>
      <button>B</button>
      <button>C</button>
      <button>D</button>
      <button>E</button>
      <button>F</button>
      <button>G</button>
      <button>H</button>
      <button>I</button>
      <button>J</button>
      <br />
      <button>K</button>
      <button>L</button>
      <button>M</button>
      <button>N</button>
      <button>O</button>
      <button>P</button>
      <button>Q</button>
      <button>R</button>
      <button>S</button>
      <button>T</button>
      <br />
      <button>U</button>
      <button>V</button>
      <button>W</button>
      <button>X</button>
      <button>Y</button>
      <button>Z</button>
    </div>
  );
}

function Tile(props) {

  const [letter, setLetter] = useState('?')

  return (
    <div className='tile'>
      <button>{letter}</button>
    </div>
  );
}

function TileRow() {

  let complete = false;

  return (
    <div>
      <Tile id = '1'/>
      <Tile id = '2'/>
      <Tile id = '3'/>
      <Tile id = '4'/>
      <Tile id = '5'/>
    </div>
  );
}

function App() {

  const [active_tile, setActive_tile] = useState('1')

  return (
    <div className="App">
      <TileRow id = '1'/>
      <TileRow id = '2'/>
      <TileRow id = '3'/>
      <TileRow id = '4'/>
      <TileRow id = '5'/>
      <Keyboard />
    </div>
  )
}

export default App
