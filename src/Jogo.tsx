import { useState } from "react"
import Garrafa from './Garrafa'
import type { GarrafaType } from './Types'
import './Jogo.css'

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

export default function Jogo() {
    const[garrafas,setGarrafas] = useState();
    
    return (
        <>
            <div className="jogo">
                {grupo.map((garrafa, i) => <Garrafa key={i} cores={garrafa}/>)}
            </div>
        </>
    )
}