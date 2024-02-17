function EkezetesBetukSzama(vizsgaltSzoveg) {
    var EkezetesBetuk = vizsgaltSzoveg.match(/[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]/g);
    return EkezetesBetuk ? EkezetesBetuk.length : 0;
}
function ElsoNszamSzorzat(mennyiseg) {
    var szorzat = 1;
    for (var i = 1; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}
function ParosakOsszege(vizsgaltTomb) {
    if (vizsgaltTomb === void 0) { vizsgaltTomb = []; }
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 === 0) {
            osszeg += vizsgaltTomb[i];
        }
    }
    return osszeg;
}
