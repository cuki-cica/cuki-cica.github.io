var gyikTest = document.getElementById('gyikTest');
var gyik = document.getElementById('gyik');
var teszteredmeny = document.getElementById('teszteredmeny');
var pozitiv = 'A megfelelő szerveket értesítettük, és egy interkontinentális ballisztikus rakéta már az irányodba tart, menekülni esélytelen, fogadd el a sorsodat, vesztettél ádáz gyíkember. A programjainkat, amiken bár biztos nem tudsz részt venni, az Események oldalon találhatod, hogy tudjad miről maradsz le.';
var negativ = 'Gratulálunk, nem vagy gyíkember! De az izgalmaknak még nincs vége! Csoportunk mindig vár új jelentkezőket! Ha érdekelnek a gyíkemberek, és a céljainkat nemesnek találod, akkor itt a remek alkalom, hogy csatlakozz hozzánk! Következő programjainkat az Események oldalon találod meg!';
var email = document.getElementById('email');

function form() {
    var eredmeny = gyik.checked;
    if(eredmeny) {
        teszteredmeny.textContent = pozitiv;
    }
    else{
        teszteredmeny.textContent = negativ;
    }
    /* if(eredmeny) {
        alert(pozitiv);
    }
    else{
        alert(negativ);
    } */
}

gyikTest.addEventListener('click', form);