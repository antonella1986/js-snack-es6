/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/


const biciclette = [{
    nome : "Giant TCR Advanced SL",
    peso : 6.4
},{
    nome : "Scott Addict RC Ultimate",
    peso : 5.9
},{
    nome : "Factor O2 VAM 2023",
    peso : 6.32
},{
    nome : "Canyon Ultimate CF SL 8 Aero",
    peso : 7.86
}
]

let biciclettaLeggera = biciclette[0]

for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciclettaLeggera.peso) {
        biciclettaLeggera = biciclette[i];
    }
}

console.log(`La bicicletta più leggera è ${biciclettaLeggera}`);

/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */



