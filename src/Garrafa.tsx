import type { GarrafaType } from "./Types"
import './Garrafa.css'

type GarrafaProps = {
    cores: Array<String>;
}

export default function Garrafa({cores}:GarrafaProps) {
    return (
        <>
            <div className="garrafa">
                <div className="cores">
                    {cores.map(cor => <p>{cor}</p>)}
                </div>
                <button className="botao">Selecionar</button>
            </div>
        </>
    )
}