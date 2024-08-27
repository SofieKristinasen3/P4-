const modes = ["lightmode","darkmode"];
// Laver 'modes' array
let currentIndex = 0;
// Sætter currentIndex til at være 0 (lightmode).

document.getElementById("modeSwitch").addEventListener("click", function() {
// Først hiver den fat i knappen med getElementById, og knappen har <button id = modeSwitch> i HTML.
// Derefter tilføjer den en EventListener, som reagerer når der bliver klikket på knappen og udarbejder functionen.
    currentIndex = (currentIndex + 1) % modes.length;
// Opdaterer currentIndex til næste tilstand i 'modes' array.
// Ved at bruge modulus (%) operatoren sikres, at currentIndex ruller tilbage til 0, når slutningen af array er nået.

    for (let i = 0; i < modes.length; i++) {
        document.body.classList.remove(modes[i]);
    }
// Dette for-loop gennemgår alle tilstande i 'modes' arrayet og fjerner dem fra body's classList.
// Det sikre, at kun én tilstand er aktiv på én gang.
// Eksempelvis: Hvis 'lightmode' er aktiv, vil det blive fjernet når man klikker på knappen.
    document.body.classList.add(modes[currentIndex]);
// Tilføjer den nye tilstand, som er angivet af currentIndex til body's classList.
// Hvis currentIndex er 0, vil 'lightmode' blive tilføjet.
// Hvis currentIndex er 1, vil 'darkmode' blive tilføjet.
});
// Lukker functionen.


//document.body = [lightmode]
//modes = [lightmode, darkmode]
//currentindex = 0

//currentindex = 1
//document.body = [] 


//document.body.classList.remove(modes[currentIndex]);
//currentIndex = (currentIndex + 1) % modes.length;
//document.body.classList.add(modes[currentIndex]);