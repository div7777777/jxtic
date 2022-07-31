let cells=['','','','','','','','',''];
let currentplayer= 'x';
let result= document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const tictactoe = (element, index)=>{
    element.value=currentplayer;
    element.disabled=true;
    cells[index]=currentplayer;
    currentplayer = currentplayer == 'x' ? 'o':'x';
    result.innerHTML='player ${currentplayer} Turn';

    for(let i=0; i< conditions.length; i++) {
        let condition = conditions[i];
        let a = cells[condition[0]];
        let b = cells[condition[1]];
        let c = cells[condition[2]];

        if(a == ''||  b == '' ||  c == '') {
            continue;
        }  
        if((a==b) && (b==c)){
            result.innerHTML='player ${a} Won Yeees';
            btns.forEach((btn)=> btn.disabled = true);
        }
    }
};

function reset() {
    cells = ['','','','','','','','',''];
    btns.forEach((btn)=>{
        btn.value='';
    });
    currentplayer = 'x';
    result.innerHTML = 'player x Turn';
    btns.forEach((btn)=> btn.disabled = false);
};

document.querySelector('#reset').addEventListener('click',reset);

btns.forEach((btn, i)=> {
    btn.addEventListener('click', () => tictactoe(btn, i));
});