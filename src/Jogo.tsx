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
    const[garrafas,setGarrafas] = useState(grupo);
    const [selecionada, setSelecionada] = useState<number | null>(null);

    function clicarGarrafa(i: number) {
        if(selecionada === i) {
            setSelecionada(null)
        }
        else {
            setSelecionada(i)
        }
    }

    return (
        <>
            <div className="jogo">
                {garrafas.map((garrafa, i) => <Garrafa key={i} cores={garrafa} selecionada={i === selecionada} aoClicar={() => clicarGarrafa(i)}/>)}
            </div>
        </>
    )
}