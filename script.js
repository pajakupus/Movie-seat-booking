const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.ocupied)');  // stavlja u node listu esedista koja nisu okupirana
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;   // + ispred ga pretvara u broj, moze i ParseInt()
//.value je za string i broj a NodeValue je za objekat


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected'); // space izmedju oca i deteta div klase, nema razmak ako se nastavlja klasa u jednom divu

    const selectedSeatsCount = selectedSeats.length; // vraca broj clana u nizu jer je obrazovan NodeList

    count.innerText = selectedSeatsCount; // stavlja broj u tekst dole
    total.innerText = selectedSeatsCount * ticketPrice; // mnozi br sa cenom karte
}


// event listener za ceo containner ako kliknemo na element koji poseduje klasu sediste
//menjamo klasu u selected i samo se menja u prazno ako opet kliknemo jer koristimo toggle
container.addEventListener('click', (e)=> {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('ocupied')) {   // ako pretisnemo u prazno nista se ne desava
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})



// nisi zavrsio local storage