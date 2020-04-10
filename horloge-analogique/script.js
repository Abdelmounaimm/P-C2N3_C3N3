// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function clock() {
    const time = new Date()
    const secondsRatio = time.getSeconds() *6 ;
    const minutesRatio = time.getMinutes() * 6;
    const hoursRatio = time.getHours() * 30;

    AIGUILLEHR.style.transform = 'rotate(' + hoursRatio +'deg)';
    AIGUILLEMIN.style.transform = 'rotate(' + minutesRatio +'deg)';
    AIGUILLESEC.style.transform = 'rotate(' + secondsRatio +'deg)';
    setTimeout(clock, 1000);
};
clock();