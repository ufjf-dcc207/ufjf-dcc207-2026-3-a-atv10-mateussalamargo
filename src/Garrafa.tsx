import type { GarrafaType } from "./Types"
import './Garrafa.css'

type GarrafaProps = {
    cores: GarrafaType;
}

export default function Garrafa({cores}:GarrafaProps) {
    return (
        <>
            <div className="garrafa">
                <div className="cores">
                    {cores.cores.map(cor => <p className={cor}>{cor}</p>)}
                </div>
                <button className="botao">Selecionar</button>
            </div>
        </>
    )
}