const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');
// JS이벤트 함수 addEventListener(a,b) a는 click이벤트 종류, b는 실행함수
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient)
    // alert('색을 바꿨네요! 2');
    // console.log(color2. value);
    // body.style.background=`linear-gradient(to right, ${color1.value},${color2.value})`;
    // h3.textContent=body.style.background+";"

function setGradient(){
    body.style.background=`linear-gradient(to right, ${color1.value},${color2.value})`;
    h3.textContent=body.style.background+";"

}
