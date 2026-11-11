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