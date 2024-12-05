const secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.secret').textContent =  secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function(){
const guess = document.querySelector('.guess').value;
if (!guess){
    document.querySelector('.message').textContent = '😡 No Number';
}else if(guess == secretNumber){
document.querySelector('.message').textContent = '✔ Corrrect Number';
}
else if(guess > secretNumber){
    if(score > 0){
    document.querySelector('.message').textContent = '💹 Too High';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = '😒 You Lost the Game';
        document.querySelector('.score').textContent = 0;
    }
}else if (guess < secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent = '📉 Too Low';
    score--;
    document.querySelector('.score').textContent = score;
    }else {
        document.querySelector('.message').textContent = '😒 You Lost the Game';
        document.querySelector('.score').textContent = 0;
    }
}
}
)