'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    // no input
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }

    // wins
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // too high
    else if(guess > secretNumber)
    {
        if(score > 0)
        {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent=0;
        }
    }

    // too low
    else if(guess < secretNumber)
    {
        if(score > 0){
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent=0;
        }
    }
});

// replay 
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})