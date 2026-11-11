import type { GarrafaType } from "./Types"


function corDoTopo(garrafa: GarrafaType): string {
    const topo = garrafa.cores.filter(cor => cor !== "").at(-1)
    if(topo === undefined) {
        return "";
    }
    else {
        return topo;
    }

}

function temEspaco(garrafa: GarrafaType): boolean {
    return garrafa.cores.includes("");
}

export function podeDespejar(origem: GarrafaType, destino: GarrafaType): boolean {
    const corOrigem = corDoTopo(origem);
    const corDestino = corDoTopo(destino);

    if(!temEspaco(destino)) {
        return false;
    }
    if(corOrigem === "") {
        return false;
    }
    return corDestino === "" || corOrigem === corDestino;
}

export function despejar(garrafas: Array<GarrafaType>, iOrigem: number, iDestino: number): Array<GarrafaType> {
    if (iOrigem === iDestino) return garrafas

    const novas = garrafas.map(g => ({ cores: [...g.cores] }))
    const origem = novas[iOrigem]
    const destino = novas[iDestino]

    while (podeDespejar(origem, destino)) {
        const iTopo = origem.cores.findLastIndex(cor => cor !== "")
        const iLivre = destino.cores.indexOf("")

        destino.cores[iLivre] = origem.cores[iTopo]
        origem.cores[iTopo] = ""
    }

    return novas
}

