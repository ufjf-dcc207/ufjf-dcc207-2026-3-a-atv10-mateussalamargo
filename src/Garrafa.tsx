import type { GarrafaType } from "./Types"
import './Garrafa.css'

type GarrafaProps = {
    cores: GarrafaType;
    selecionada: boolean;
    aoClicar: () => void;
}

export default function Garrafa({cores,selecionada,aoClicar}:GarrafaProps) {
    return (
        <>
            <div className={`garrafa ${selecionada ? "selecionada" : ""}`}>
                <div className="cores">
                    {cores.cores.map((cor, i) => <div key={i} className={`segmento ${cor}`}></div>)}
                </div>
                <button className="botao" onClick={() => aoClicar()}>Selecionar</button>
            </div>
        </>
    )
}