const games = [
    {
        id: 1,
        tittle: 'withcer 3',
        img: "witcher 3.jpg",
        desc: 'withcer 3',
    },
    {
        id: 2,
        tittle: 'persona 5',
        img: "persona 5.webp",
        desc: 'persona 5',
    },
    {
        id: 3,
        tittle: 'metal gear v',
        img: "metal gear solid v.jpg",
        desc: 'metal gear v',
    },
    {
        id: 4,
        tittle: 'ark',
        img: "ark.jpg",
        desc: 'ark',
    },
    {
        id: 5,
        tittle: 'genshin impact',
        img: "genshin-impact.webp",
        desc: 'genshin impact',
    },
]
const img = document.getElementById('g-img');
const Gtittle = document.getElementById('g-tittle');
const descP = document.getElementById('desc-p');

const btnR = document.getElementById('btn-r');
const btnSur = document.getElementById('btn-sur');
const btnL = document.getElementById('btn-l');
console.log(btnR)
let currentItem = 1;

window.addEventListener('DOMContentLoaded',function(){
    const item = games[currentItem];
    img.src = item.img;
    Gtittle.textContent = item.tittle;
    descP.textContent = item.desc
});

function showGame(Game) {
    const item = games[currentItem];
    img.src = item.img;
    Gtittle.textContent = item.tittle;
    descP.textContent = item.desc
    console.log(currentItem)
    console.log(5*7)
}

btnR.addEventListener('click',function (){
    currentItem++;
    if (currentItem > games.length - 1){
        currentItem = 0;
    }
    showGame(currentItem)
});

btnL.addEventListener('click',function (){
    currentItem--;
    if (currentItem < 0){
        currentItem = games.length - 1;
    }
    showGame(currentItem)
});

btnSur.addEventListener('click',function (){
    currentItem = Math.floor(Math.random * games.length)
    showGame(currentItem)
});