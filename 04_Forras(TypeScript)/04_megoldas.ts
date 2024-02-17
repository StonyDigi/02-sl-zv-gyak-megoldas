function EkezetesBetukSzama(vizsgaltSzoveg: string): number {
const EkezetesBetuk = vizsgaltSzoveg.match(/[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]/g);
return EkezetesBetuk ? EkezetesBetuk.length : 0;
}

function ElsoNszamSzorzat(mennyiseg: number): number {
    let szorzat = 1;
    for (let i = 1; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}

function ParosakOsszege(vizsgaltTomb: number[] = []): number {
    let osszeg = 0;
    for (let i =0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 === 0) {
            osszeg += vizsgaltTomb[i];
    }
}
return osszeg;
}