import { useState } from "react"

function App() {
  const [color, setColor] = useState('#6EC6CA')

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: '#D7F9FA'}} onClick={ () => setColor('#D7F9FA') }
          >Humming Bird</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: '#EAE7D6'}} onClick={ () => setColor('#EAE7D6') }
          >White Rock</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: '#B0D4B8'}} onClick={ () => setColor('#B0D4B8') }
          >Gum Leaf</button>

          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{backgroundColor: '#A4C3A2'}} onClick={ () => setColor('#A4C3A2') }
          >Norway</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: '#5D7B6F'}} onClick={ () => setColor('#5D7B6F') }
          >Viridian Green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: '#052010'}} onClick={ () => setColor('#052010') }
          >Outer space</button>
        </div>
      </div>
    </div>
  )
}

export default App
