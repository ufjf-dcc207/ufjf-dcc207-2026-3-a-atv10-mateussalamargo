import './App.css'
import Garrafa from './Garrafa'
import type { GarrafaType } from './Types'

const grupo:Array<GarrafaType> = [
  {
    cores: ["vermelho","azul","verde","vazio"]
  },
  {
    cores: ["vermelho","verde","vazio","vazio"]
  },
  {
    cores: ["vermelho","vazio","vazio","vazio"]
  },
]

export default function App() {
  return (
    <>
      <Garrafa cores={["vermelho","azul","verde","vazio"]}/>
    </>
  )
}


