const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.remove('fadeOut');
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };
    //Update Score Function
    const updateScore = () => {
        const playerScore = document.querySelector('.player-socre p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    //Compare Hands Function
    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.winner');
        //Checking for a tie 
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //Check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
    }
    //Call the inner functions
    startGame();
    playMatch();
};
// Start the game function
game();