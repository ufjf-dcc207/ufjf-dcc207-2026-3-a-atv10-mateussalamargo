import { useState } from "react"
import Garrafa from './Garrafa'
import type { GarrafaType } from './Types'
import './Jogo.css'
import { despejar, podeDespejar } from './logica'


const grupo:Array<GarrafaType> = [
  { cores: ["red", "blue", "green", "red"] },
  { cores: ["blue", "green", "red", "blue"] },
  { cores: ["green", "red", "blue", "green"] },
  { cores: ["", "", "", ""] },
  { cores: ["", "", "", ""] },
]

export default function Jogo() {
    const[garrafas,setGarrafas] = useState(grupo);
    const [selecionada, setSelecionada] = useState<number | null>(null);

    function clicarGarrafa(i: number) {
        if(selecionada === i) {
            setSelecionada(null)
        }
        else if(selecionada === null){
            setSelecionada(i)
        }
        else {
        if (podeDespejar(garrafas[selecionada], garrafas[i])) {
            setGarrafas(despejar(garrafas, selecionada, i))
        }
        setSelecionada(null)
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