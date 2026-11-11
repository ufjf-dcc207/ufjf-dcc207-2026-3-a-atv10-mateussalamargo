import type { GarrafaType } from "./Types"


function corDoTopo(garrafa: GarrafaType): string {
    if(garrafa.cores.filter(cor => cor !== "").at(-1) !== undefined) {
        return garrafa.cores.filter(cor => cor !== "").at(-1);
    }
}

function temEspaco(garrafa: GarrafaType): boolean {
    return garrafa.cores.includes("");
}

export function podeDespejar(origem: GarrafaType, destino: GarrafaType): boolean {
    let corOrigem = corDoTopo(origem);
    let corDestino = corDoTopo(destino);

    if(temEspaco(destino) && corOrigem === corDestino) {
        return true;
    }
    else {
        return false;
    }
}