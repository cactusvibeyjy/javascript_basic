'use strict'
// alert('hi')
// js 이미지 주사위 6번 나오도록.
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
// img1.setAttribute('src', 'images/dice6.png')
// img2.setAttribute('src', 'images/dice6.png')
// Random 1-6 사이 숫자를 만들어서 randonNumber1에 입력
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
// 랜던 숫자의 주사위 사진은 img1에 나오게 한다.
img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png')
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png')
// 랜덤 숫자를 비교 주사위 게임 결과 보여주기
// 비겼을땐 Draw
const h1 = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    // document.querySelector('h1') = 'Player 1 wins!';
    h1.textContent = '👏Player 1 wins'
}
else if (randomNumber1 < randomNumber2) {
    // document.querySelector('h1') = 'Player 2 wins!';
    h1.textContent = 'Player 2 wins👏'
}
// (randomNumber1 == randomNumber2)
else if  {
    // document.querySelector('h1') = 'Draw';
    h1.textContent = 'Draw'
}
