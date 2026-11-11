import './App.css'
import Garrafa from './Garrafa'
import type { GarrafaType } from './Types'

const grupo:Array<GarrafaType> = [
  {
    cores: ["red","blue","green",""]
  },
  {
    cores: ["red","green","",""]
  },
  {
    cores: ["red","","",""]
  },
]

export default function App() {
  return (
    <>
      <div className="jogo">
        {grupo.map((garrafa, i) => <Garrafa key={i} cores={garrafa}/>)}
      </div>
    </>
  )
}


