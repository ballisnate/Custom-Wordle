import './App.css';
import React from 'react'

function App() {
	return (
		<div className='App'>
			<TileBox name='Tile 1 here'/>
			<VirtualKeyboard />
		</div>
	);
}


function TileBox(props){
	return <p>{props.name}</p>
}

class VirtualKeyboard extends React.Component {
	render() {
		return (
			<div>
				<button className='key-button' onClick={() => { this.send_letter('A') }}>A</button>
				<button className='key-button' onClick={() => { this.send_letter('B') }}>B</button>
				<button className='key-button' onClick={() => { this.send_letter('C') }}>C</button>
				<button className='key-button' onClick={() => { this.send_letter('D') }}>D</button>
				<button className='key-button' onClick={() => { this.send_letter('E') }}>E</button>
				<button className='key-button' onClick={() => { this.send_letter('F') }}>F</button>
				<button className='key-button' onClick={() => { this.send_letter('G') }}>G</button>
				<button className='key-button' onClick={() => { this.send_letter('H') }}>H</button>
				<button className='key-button' onClick={() => { this.send_letter('I') }}>I</button>
				<button className='key-button' onClick={() => { this.send_letter('J') }}>J</button>
				<button className='key-button' onClick={() => { this.send_letter('K') }}>K</button>
				<button className='key-button' onClick={() => { this.send_letter('L') }}>L</button>
				<button className='key-button' onClick={() => { this.send_letter('M') }}>M</button>
				<button className='key-button' onClick={() => { this.send_letter('N') }}>N</button>
				<button className='key-button' onClick={() => { this.send_letter('O') }}>O</button>
				<button className='key-button' onClick={() => { this.send_letter('P') }}>P</button>
				<button className='key-button' onClick={() => { this.send_letter('Q') }}>Q</button>
				<button className='key-button' onClick={() => { this.send_letter('R') }}>R</button>
				<button className='key-button' onClick={() => { this.send_letter('S') }}>S</button>
				<button className='key-button' onClick={() => { this.send_letter('T') }}>T</button>
				<button className='key-button' onClick={() => { this.send_letter('U') }}>U</button>
				<button className='key-button' onClick={() => { this.send_letter('V') }}>V</button>
				<button className='key-button' onClick={() => { this.send_letter('W') }}>W</button>
				<button className='key-button' onClick={() => { this.send_letter('X') }}>X</button>
				<button className='key-button' onClick={() => { this.send_letter('Y') }}>Y</button>
				<button className='key-button' onClick={() => { this.send_letter('Z') }}>Z</button>
				<button className='key-button' onClick={() => { this.send_letter('ENTER') }}>ENTER</button>
				<button className='key-button' onClick={() => { this.send_letter('BACK') }}>BACK</button>
			</div>
		);
	}
	send_letter(letter) {
		// this.setState({ text: letter});
		console.log('setting state to ' + letter);
	}
}

export default App