
var scores, roundScore, activePlayer, gamePlaying, twoSix;

init();




document.querySelector('.btn-roll').addEventListener('click', function() {
	
	if (gamePlaying) {
	//1. Random Number:
	var dice = Math.floor(Math.random()*6) +1;
	var dice1 = Math.floor(Math.random()*6) +1;
	
	//2. Display the result:
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	var dice1DOM = document.querySelector('.dice1');
	dice1DOM.style.display = 'block';
	dice1DOM.src = 'dice-' + dice1 + '.png';
	
	//3. Update the round score IF the rolled number was NOT a 1:
	
	if (dice !==1 && dice1 !==1 ){
		if (dice ===6 && dice1 ===6 ){
		nextPlayer();}
		
		//Add score
		roundScore +=dice+dice1;
				
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		
	} else {
	// Next player
		nextPlayer();

	}}
	       
});
	
	document.querySelector('.btn-hold').addEventListener('click', function(){
		
		if (gamePlaying) {
		//Add curent score to GLOBAL
		scores[activePlayer] +=roundScore;
		
		
		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
		
		// Check if player won the game
		if (scores[activePlayer] >=100) {
			document.querySelector('#name-' + activePlayer).textContent='Winner!';
			document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}else {
			//Next player
			nextPlayer();
		}
		}
		
	});
	
	
	function nextPlayer(){
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice1').style.display = 'none';
	};
	
	document.querySelector('.btn-new').addEventListener('click', init);
	
	function init(){
		scores = [0,0];
		roundScore = 0;
		activePlayer = 0;
		gamePlaying = true;
		twoSix = 6;

		document.querySelector('.dice').style.display = 'none';
				document.querySelector('.dice1').style.display = 'none';


		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.getElementById('name-1').textContent = 'Player 2';
		document.getElementById('name-0').textContent = 'Player 1';	
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.remove('active');

		document.querySelector('.player-0-panel').classList.add('active');

		
	};
	

	







