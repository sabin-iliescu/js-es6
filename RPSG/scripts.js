// Define the RockPaperScissors game as a class
class RockPaperScissors {
  constructor() {
    // Immutable array of choices
    this.choices = ['rock', 'paper', 'scissors'];
    this.playerScore = 0;
    this.computerScore = 0;
  }

  // Arrow function to get the computer's random choice
  getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  };

  // Arrow function to determine the game winner and update scores
  determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      this.playerScore++;
      return 'You win!';
    }
    this.computerScore++;
    return 'Computer wins!';
  };

  // Arrow function to play one round of the game
  playRound = (playerChoice) => {
    const computerChoice = this.getComputerChoice();
    const result = this.determineWinner(playerChoice, computerChoice);
    return { playerChoice, computerChoice, result };
  };

  // Reset the scores
  resetScores = () => {
    this.playerScore = 0;
    this.computerScore = 0;
  };
}

// Instantiate the game
const game = new RockPaperScissors();

// UI Elements
const resultDiv = document.querySelector('.result');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.choices button');
const resetButton = document.getElementById('reset');

// Add event listeners to choice buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const round = game.playRound(playerChoice);
    resultDiv.innerHTML = `
    <p>You chose <strong>${round.playerChoice}</strong>.</p>
    <p>Computer chose <strong>${round.computerChoice}</strong>.</p>
    <p>Result: <strong>${round.result}</strong></p>
  `;
    playerScoreSpan.textContent = game.playerScore;
    computerScoreSpan.textContent = game.computerScore;
  });
});

// Reset game event
resetButton.addEventListener('click', () => {
  game.resetScores();
  playerScoreSpan.textContent = game.playerScore;
  computerScoreSpan.textContent = game.computerScore;
  resultDiv.innerHTML = '';
});
