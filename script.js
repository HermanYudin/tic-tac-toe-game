const gameContainer = document.querySelector('.game-container');
const boxes = document.querySelectorAll('.box');
let count = 0;
const blackout = document.querySelector('.blackout');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalBtn = document.querySelector('.modal-button');

function changePlayer(event){
if(event.target.className = 'box'){
    count++;
    if(count % 2 === 0){
        event.target.innerHTML = 'O';
        }
        else if(count % 2 !== 0){
        event.target.innerHTML = 'X';
        }
    }

    if(Array.from(boxes).every((el) => el.innerHTML !== '')){
            gameContainer.removeEventListener('click', changePlayer);   
        }
    winnerCheck();
}

gameContainer.addEventListener('click', changePlayer);

boxes.forEach((el) => {
    el.addEventListener("click", () => {
        if(el.innerHTML !== ''){
            count --;
        }
    })
});   

function winnerCheck(){
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i = 0; i < arr.length; i++){
        if(boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X'&& boxes[arr[i][2]].innerHTML === 'X'){
            blackout.classList.add('block');
            modal.classList.add('flex');
            modalTitle.innerHTML = 'Tics won!';
        }
        else if(boxes[arr[i][0]].innerHTML === 'O' && boxes[arr[i][1]].innerHTML === 'O'&& boxes[arr[i][2]].innerHTML === 'O'){
            blackout.classList.add('block');
            modal.classList.add('flex');
            modalTitle.innerHTML = 'Tacs won!';
        }
        else if(Array.from(boxes).every((el) => el.innerHTML !== '')){
            blackout.classList.add('block');
            modal.classList.add('flex');
            modalTitle.innerHTML = 'Nobody won!';
        }
    }
}

document.body.addEventListener("click", function (event) {
    if(event.target === blackout || event.target === modalBtn){
        location.reload();
    }
});