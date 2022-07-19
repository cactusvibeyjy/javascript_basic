const btn1 = document.querySelector('button');
btn1.addEventListener('click', btnClicked);

function btnClicked(){
    console.log(this.textContent);
    //현재 클릭된 개채
    //this.style.color = 'white'
    
    switch(this.textContent){
        case'w':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case'a':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
        case's':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case'd':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;case'j':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
        case'k':
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
        case'l':
        var audio = new Audio('sounds/kick.mp3');
        audio.play();
        break;
    }
}

    





// 모든 클래스 드럼이 있는 버튼 클릭하면 클릭됨 출력 => 반복문 사용
const btns = document.querySelectorAll('.drum');

for (i= 0; i < btns.length; i++) {
    btns[i].addEventListener("click", btnClicked);
  }
//키보드를 눌렀을때
document.addEventListener('keydown', function(event){
   //console.log(event.key);//이벤트객체(자동생성)
   drumSound(ever.key);
})

function drumSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break; case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick.mp3');
            audio.play();
            break;
    }
}
