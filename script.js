function Game(){
	this.gameBegin = false;
	this.pointsToWin = 0;
	this.plGetPoint = false;
	this.pcGetPoint = false;
	this.actualLevel = '';		
}


Game.prototype.choosePointsToWin = function(value){	
	document.querySelector('#finalResult').style.display = 'none';		
		if (value.textContent !== 'START' && this.gameBegin === false) {
			this.pointsToWin = parseInt(value.textContent);
	}
}

Game.prototype.setactualLevel = function(value){
	if (value.textContent !== 'START' && this.gameBegin === false){
		this.actualLevel = value;	
		this.actualLevel.classList.add('selectedLevel');
		let control = document.querySelectorAll('#many_points > div');
		for (let i = 0; i < 4; i++){	 
			if (control[i].classList.contains('selectedLevel') && control[i].textContent !== this.actualLevel.textContent){
				control[i].classList.remove('selectedLevel');
			}
		}
	}
}

Game.prototype.startNewGame = function(value) {
	if(value.textContent === 'START' && this.gameBegin === false) {
		if (this.pointsToWin === 0) {
			alert('You forgot to choose the number of points to win!!!');
		}else{
			document.querySelector('#game').style.display = 'block';
			this.gameBegin = true;
		}
		
	}
}

Game.prototype.scoreAnimationPl = function() {
	document.querySelector('#score div > span:first-child').classList.add('scoreAnimation');
	setTimeout(function(){
		document.querySelector('#score div > span:first-child').classList.remove('scoreAnimation');
	}, 810);
}

Game.prototype.scoreAnimationPc = function() {		
	document.querySelector('#score div > span:last-child').classList.add('scoreAnimation');
	setTimeout(function(){
		document.querySelector('#score div > span:last-child').classList.remove('scoreAnimation');
	}, 810);
}

		Game.prototype.roundResult = function(player, pc) {
	setTimeout(function(){
		if (player.choice === 'rock' && pc.choice === 'paper'){
		pc.score += 1;
		this.pcGetPoint = true;
	}

	if (player.choice === 'rock' && pc.choice === 'scissors'){
		player.score += 1;
		this.plGetPoint = true;
	}

	if (player.choice === 'scissors' && pc.choice === 'paper'){
		player.score += 1;
		this.plGetPoint = true;
	}

	if (player.choice === 'scissors' && pc.choice === 'rock'){
		pc.score += 1;
		this.pcGetPoint = true;
	}

	if (player.choice === 'paper' && pc.choice === 'rock'){
		player.score += 1;
		this.plGetPoint = true;
	}

	if (player.choice === 'paper' && pc.choice === 'scissors'){
		pc.score += 1;
		this.pcGetPoint = true;
	}
	}, 1001);			
}


Game.prototype.renderRoundResult = function(player, pc) {
	let game = this;
	setTimeout(function(){
		document.querySelector('#player').textContent = player.score;
		document.querySelector('#pc').textContent = pc.score;
		if (this.plGetPoint === true){
			game.scoreAnimationPl();
			this.plGetPoint = false;
		}
		if (this.pcGetPoint === true){
			game.scoreAnimationPc();
			this.pcGetPoint = false;
		}	
	}, 1001);
			
}


Game.prototype.returnUnknownImage = function() {
	setTimeout(function(){
		document.querySelector('#final_choice div:first-child img').src = 'img/otaznik.jpg';
		document.querySelector('#final_choice div:last-child img').src = 'img/otaznik.jpg';
	}, 1001);
			
}

Game.prototype.resetGame = function(player, pc) {
	this.gameBegin = false;
	player.score = 0;
	pc.score = 0;
	this.pointsToWin = 0;
	document.querySelector('#player').textContent = player.score;
	document.querySelector('#pc').textContent = pc.score;
	this.actualLevel.classList.remove('selectedLevel');
}




Game.prototype.finalResult = function(player, pc) {
	let game = this;
	setTimeout(function(){
		if(player.score === game.pointsToWin){
		setTimeout(function() {
			document.querySelector('#game').style.display = 'none';
			document.querySelector('#finalResult').style.display = 'block';
			document.querySelector('#finalResult').textContent = 'Congratulations - YOU WON';
			game.resetGame(player, pc);
		}, 500);
	}
				
		if(pc.score === newGame.pointsToWin){
				setTimeout(function() {
				document.querySelector('#game').style.display = 'none';
				document.querySelector('#finalResult').style.display = 'block';
				document.querySelector('#finalResult').textContent = 'Sorry - YOU LOOSE';
				game.resetGame(player, pc);
			}, 500);
			}
		player.alreadyChoose = false;
		}, 1801);			
}


function Player(){
	this.score = 0;
	this.choice = '';
	this.alreadyChoose = false;
	this.animationOff = 0;
}


Player.prototype.makeChoice = function(value) {
	this.choice = value.querySelector('img').alt;
	
}


Player.prototype.imgFromChoice = function() {
	document.querySelector('#final_choice div:first-child img').src = 'img/' + this.choice + '_choice.jpg';
	this.alreadyChoose = true;
				
}

function Opponent(){
	this.score = 0;
	this.choice = '';
	this.anim = document.querySelector('#final_choice div:last-child img');
	this.options =  ['rock', 'scissors', 'paper'];

}

Opponent.prototype.animation = function() {
		this.anim.classList.add('animation');
		setTimeout(function(){
			pc.anim.classList.remove('animation');
		}, 1001);
}

/*Opponent.prototype.animation = function() {
	let imgControl = 0;
	let images = ['img/rock_choice.jpg', 'img/scissors_choice.jpg', 'img/paper_choice.jpg'];
			let animationOff = 0
	let animation = setInterval(function() {
		document.querySelector('#final_choice div:last-child img').src = images[imgControl];
		if (imgControl === 2){
			imgControl = 0;
		}else{
			imgControl += 1;
		}
		if (animationOff > 20) 
		clearInterval(animation);
         //break the interval
        animationOff++;
        console.log(animationOff);

	}, 50);

			
	}*/
		/*Opponent.prototype.setAnimation = function() {
			let actualImg = 0;
			let images = ['img/rock_choice.jpg', 'img/scissors_choice.jpg', 'img/paper_choice.jpg'];

			let animation = setInterval(function () {
				document.querySelector('#final_choice div:last-child img').src = images[actualImg];
				if (actualImg === 2){
					actualImg = 0;
				}else{
					actualImg += 1;
				}
				pc.finish += 1;
				
			}, 100);
				
		}

		Opponent.prototype.endAnimation = function(anim){
			clearInterval(anim);
		}*/

Opponent.prototype.madeChoice = function(){
	let pc = this;
	setTimeout(function(){
		let choice = Math.floor(Math.random() * 3);
		pc.choice = pc.options[choice];
		document.querySelector('#final_choice div:last-child img').src = 'img/' + pc.choice + '_choice.jpg';
	}, 1001);
}



let newGame = new Game();
let newPlayer = new Player();
let pc = new Opponent();


document.querySelectorAll('#many_points > div').forEach(function (option){
	option.addEventListener('click', function(ev){

		newGame.choosePointsToWin(option);

		newGame.setactualLevel(option);

		newGame.startNewGame(option);
		});
	});

document.querySelectorAll('#choice_box > div').forEach(function(option){
	option.addEventListener('click', function(ev){
		if (newPlayer.alreadyChoose === false){
					
			newPlayer.makeChoice(option, pc);

			newPlayer.imgFromChoice();	

			pc.animation();

			pc.madeChoice();

			newGame.roundResult(newPlayer, pc);

			newGame.renderRoundResult(newPlayer, pc);

			setTimeout(newGame.returnUnknownImage, 800);

			newGame.finalResult(newPlayer, pc);
		}
	});
});	