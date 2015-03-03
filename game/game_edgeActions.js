var debug = true; //uitschakelen bij release
const maxMonsters = 8; //constante, afhankelijk van bord
var monsterGenerationSpeed, activeMonsters, score, life;
var gameStatus = 'initializing';
var nameBox; //Voor highscore op te slaan

//Monster objecten
var monsterIE1 = { name:'IE_persona1', id: 1, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterIE2 = { name:'IE_persona2', id: 2, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterIE3 = { name:'IE_persona3', id: 3, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterIE4 = { name:'IE_persona4', id: 4, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterIE5 = { name:'IE_persona5', id: 5, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterIE6 = { name:'IE_persona6', id: 6, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterIE7 = { name:'IE_persona7', id: 7, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterIE8 = { name:'IE_persona8', id: 8, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };

var monsterFX1 = { name:'FX_persona1', id: 9, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterFX2 = { name:'FX_persona2', id: 10, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterFX3 = { name:'FX_persona3', id: 11, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterFX4 = { name:'FX_persona4', id: 12, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterFX5 = { name:'FX_persona5', id: 13, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterFX6 = { name:'FX_persona6', id: 14, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterFX7 = { name:'FX_persona7', id: 15, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };
var monsterFX8 = { name:'FX_persona8', id: 16, visible: false, alive:false, needsAnimUp:false, needsAnimDown:false, scaleX:0.0, scaleY:0.0, timeUp:0 };

//Timers
var createMonsterTimer;
var monsterAnimTimer;
var missedMonstersTimer;
var uptimeCheckSpeed = 100;
var monsterAnimSpeed = 50;

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) 
      {
      });
      //Edge binding end

		Symbol.bindElementAction(compId, symbolName, "${IE_persona1}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona1')); });
      Symbol.bindElementAction(compId, symbolName, "${IE_persona2}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona2')); });
      Symbol.bindElementAction(compId, symbolName, "${IE_persona3}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona3')); });
      Symbol.bindElementAction(compId, symbolName, "${IE_persona4}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona4')); });
      Symbol.bindElementAction(compId, symbolName, "${IE_persona5}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona5')); });
      Symbol.bindElementAction(compId, symbolName, "${IE_persona6}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona6')); });
      Symbol.bindElementAction(compId, symbolName, "${IE_persona7}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona7')); });
      Symbol.bindElementAction(compId, symbolName, "${IE_persona8}", "click", function(sym, e) { killMonster(sym, getMonsterID('IE_persona8')); });

      Symbol.bindElementAction(compId, symbolName, "${FX_persona1}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona1')); });
      Symbol.bindElementAction(compId, symbolName, "${FX_persona2}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona2')); });
      Symbol.bindElementAction(compId, symbolName, "${FX_persona3}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona3')); });
      Symbol.bindElementAction(compId, symbolName, "${FX_persona4}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona4')); });
      Symbol.bindElementAction(compId, symbolName, "${FX_persona5}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona5')); });
      Symbol.bindElementAction(compId, symbolName, "${FX_persona6}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona6')); });
      Symbol.bindElementAction(compId, symbolName, "${FX_persona7}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona7')); });
      Symbol.bindElementAction(compId, symbolName, "${FX_persona8}", "click", function(sym, e) { killMonster(sym, getMonsterID('FX_persona8')); });
      
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${highscore_backbutton}", "click", function(sym, e) {
         location.reload(); //meh

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${splash_button_play}", "click", function(sym, e) {
         sym.play("Game");
         if(debug) console.log('==> Debugging enabled');	
			startGame(sym);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${splash_button_highscores}", "click", function(sym, e) {
         
         sym.play("Highscores");
         loadScores(sym);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gameover_button_savescore}", "click", function(sym, e) 
      {
      	sym.play("Savescore");
      				
			var plchr = sym.$("savescore_name_placeholder");
			nameBox = $("<input />")
									.attr({
										"type": "text",
										"placeholder" : "Your name",
										"id" : "savescore_name_placeholder"
									})
									.css({
										"width" : "100%",
										"height": "100%",
										"font-size": "24px"
									});
								
			nameBox.appendTo(plchr);
			
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gameover_button_retry}", "click", function(sym, e)
      {
      	location.reload(); //meh
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${savescore_button_save}", "click", function(sym, e) {
							
			var name = $('#savescore_name_placeholder').val();
			if(score > 0 && name.length > 0) pushScore(name); //score moet groter zijn dan 0 om op te slaan in de database
			setTimeout(function()
			{
				sym.play("Highscores");
         	loadScores(sym);
         	sym.stop();
			}, 1000);
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'splash_button_highscores'
   (function(symbolName) {   
   		
   })("splash_button_highscores");
   //Edge symbol end:'splash_button_highscores'

   //=========================================================
   
   //Edge symbol: 'splash_button_play'
   (function(symbolName) {   
   
   })("splash_button_play");
   //Edge symbol end:'splash_button_play'

   //=========================================================
   
   //Edge symbol: 'gameover_button_retry'
   (function(symbolName) {   
   
   })("gameover_button_retry");
   //Edge symbol end:'gameover_button_retry'

   //=========================================================
   
   //Edge symbol: 'gameover_button_savescore'
   (function(symbolName) {   
   
   })("gameover_button_savescore");
   //Edge symbol end:'gameover_button_savescore'

   //=========================================================
   
   //Edge symbol: 'savescore_button_save'
   (function(symbolName) {   
   
   })("savescore_button_save");
   //Edge symbol end:'savescore_button_save'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Game");

function startGame(sym)
{
	monsterGenerationSpeed = 1000;
	activeMonsters = 0;
	score = 0;
	life = 5;
	sym.$('scorePlaceholder').html(score);
	createMonsterTimer = setInterval(newMonster, monsterGenerationSpeed, sym);
	monsterAnimTimer = setInterval(animateMonster, monsterAnimSpeed, sym); // één timer die alle animaties afhandeld lijkt me interessanter dan één timer per object/symbool...
	missedMonstersTimer = setInterval(checkMonstersUptime, uptimeCheckSpeed, sym);
	gameStatus = 'Game started';
	if(debug) console.log('==> Game started');
}

function increaseGameSpeed()
{
	monsterGenerationSpeed -= 20;
	window.clearInterval(createMonsterTimer);
	createMonsterTimer = setInterval(newMonster, monsterGenerationSpeed);
	
	if(debug) console.log('==> Speed increased');	
}

function newMonster()
{
	/*if(activeMonsters == maxMonsters - 1)
	{
		if(debug) console.log('==> Board full, game lost');
		endGame('fullBoard');
	}*/
	
	var randomMonsterObject;
	do  // genereer een monster dat nog niet bestaat
	{
		var randomMonsterID = Math.floor((Math.random() * 16) + 1);
		randomMonsterObject = getMonsterObjectVariable(randomMonsterID);
		
		if(!randomMonsterObject.alive && !randomMonsterObject.needsAnimUp && !randomMonsterObject.needsAnimDown)
		{
			randomMonsterObject.alive = true; //Monster nu actief
			randomMonsterObject.visible = true;
			randomMonsterObject.needsAnimUp = true;
			randomMonsterObject.needsAnimDown = false;
			activeMonsters++;
			if(debug) console.log('==> Spawned new monster: ' + randomMonsterObject.name);
		}
	}
	while(!randomMonsterObject.alive)
}

function animateMonster(sym)
{
	for(var i = 1; i <= 16; i++)
	{
		var monsterObject = getMonsterObjectVariable(i);
		
		if(monsterObject.needsAnimUp)
		{
			
			if(monsterObject.scaleX >= .90)
			{
				monsterObject.needsAnimUp = false;
				monsterObject.scaleX = 1;
				monsterObject.scaleY = 1;
			}
			else
			{
				monsterObject.scaleX += 0.10;
				monsterObject.scaleY += 0.10;
			}
		}
		
		if(monsterObject.needsAnimDown)
		{
			
			if(monsterObject.scaleX <= .10)
			{
				monsterObject.needsAnimDown = false;
				monsterObject.scaleX = 0;
				monsterObject.scaleY = 0;
				monsterObject.visible = false;
				monsterObject.id <= 8 ? sym.$(monsterObject.name).css({"backgroundImage": "url('images/IE_persona.png')"}) : sym.$(monsterObject.name).css({"backgroundImage": "url('images/FX_persona.png')"}); //afbeelding resetten
			}
			else
			{
				monsterObject.scaleX -= .10;
				monsterObject.scaleY -= .10;
			}
		}
		
		sym.$(monsterObject.name).css(
		{
			"-webkit-transform": "ScaleX(" + monsterObject.scaleX + ") ScaleY(" + monsterObject.scaleY + ")",
			"-o-transform": "ScaleX(" + monsterObject.scaleX + ") ScaleY(" + monsterObject.scaleY + ")",
			"-moz-transform": "ScaleX(" + monsterObject.scaleX + ") ScaleY(" + monsterObject.scaleY + ")",
			"-ms-transform": "ScaleX(" + monsterObject.scaleX + ") ScaleY(" + monsterObject.scaleY + ")",
			"transform": "ScaleX(" + monsterObject.scaleX + ") ScaleY(" + monsterObject.scaleY + ")"
		});
	}
}

function checkMonstersUptime(sym)
{
	for(var i = 1; i <= 16; i++)
	{
		var monsterObject = getMonsterObjectVariable(i);
		
		if(!monsterObject.alive) continue;
		
		if(monsterObject.timeUp >= 1000) monsterHide(sym, monsterObject);
		else monsterObject.timeUp += 100;
	}
}

function monsterHide(sym, monsterObject)
{
	monsterObject.needsAnimDown = true;
	monsterObject.timeUp = 0;
	setTimeout(monsterAway, monsterAnimSpeed*10, sym, monsterObject); // 500 ms tijd om te klikken voor het monster niet meer zichtbaar is.
}

function monsterAway(sym, monsterObject)
{
	if(monsterObject.alive)
	{
		monsterObject.visible = false;
		monsterObject.id <= 8 ? reductLife(sym) : increaseScore(sym); //Leven verminderen als het gevluchte monster een IE object is, score vermeerderen als het gevluchte monster een FX object is
		activeMonsters--;
		monsterObject.alive = false;
	}
	else return;

}

function reductLife(sym)
{
	sym.$('life' + life).css( { 'display': 'none' });
	life--;
	if(life == 0) endGame(sym, 'noLives');
}

function killMonster(sym, monsterID)
{
	var monsterObject = getMonsterObjectVariable(monsterID);
	
	if(!monsterObject.alive) return;
	
	monsterObject.id <= 8 ? sym.$(monsterObject.name).css({"backgroundImage": "url('images/IE_persona_dead.png')"}) : sym.$(monsterObject.name).css({"backgroundImage": "url('images/FX_persona_dead.png')"});
	monsterObject.needsAnimUp = false;
	monsterObject.needsAnimDown = true;
	monsterObject.alive = false;
	activeMonsters--;
	monsterObject.timeUp = 0;
	monsterObject.id >= 9 ? reductLife(sym) : increaseScore(sym);
	increaseGameSpeed();
}

function increaseScore(sym, value)
{
	value = value || 1; //optionele parameter value, zonder parameter wordt de score++

	score += value;
	sym.$('scorePlaceholder').html(score);
}
function endGame(sym, reason)
{
	window.clearInterval(createMonsterTimer);
	window.clearInterval(monsterAnimTimer);
	window.clearInterval(missedMonstersTimer);
	
	sym.play("Gameover");
	sym.stop;
	
	if(debug) console.log('==> Game ended');
	gameStatus = 'Game over';
/*	if(debug)
	{	
		switch(reason)
		{
			case 'noLives':
				alert('You ran out of lives. Game over. Score:  ' + score);
				break;
			case 'manual':
				alert('Game ended. Score: ' + score);
				break;
			case 'fullBoard':
				alert('The monsters took over the board, game over. Score: ' + score);
				break;
			default:
				alert("Game ended but we don't know why... Score: " + score);
				break;		
		}
	}*/
}

function pushScore(name)
{
	request = $.ajax({
		url: "http://student.howest.be/ziggy.maes/2NMCT/web-advanced/game/post_highscore.php",
		type: "post",
		data: { name: name, score: score }
	});
}

function loadScores(sym)
{	
	var link = 'http://student.howest.be/ziggy.maes/2NMCT/web-advanced/game/get_highscore.php';

	$.ajax
	({
		type: "GET",
		url: link,
		async: false,
		beforeSend: function(x) 
		{
			if(x && x.overrideMimeType)
			{
				x.overrideMimeType("application/j-son;charset=UTF-8");
			}
		},
		dataType: "json",
		success: function(data)
		{
			var l = data.length;
							
			for(i = 1; i <= l; i++)
			{
				sym.$('highscore_naamlabel_' + i).html(data[i-1].name);
				sym.$('highscore_scorelabel_' + i).html(data[i-1].score);
			}
		}
	});
}

function getMonsterID(monsterName)
{
	switch(monsterName)
	{
		case "IE_persona1":
			return 1;
			break;
		case "IE_persona2":
			return 2;
			break;
		case "IE_persona3":
			return 3;
			break;
		case "IE_persona4":
			return 4;
			break;
		case "IE_persona5":
			return 5;
			break;
		case "IE_persona6":
			return 6;
			break;
		case "IE_persona7":
			return 7;
			break;
		case "IE_persona8":
			return 8;
			break;
		case "FX_persona1":
			return 9;
			break;
		case "FX_persona2":
			return 10;
			break;
		case "FX_persona3":
			return 11;
			break;
		case "FX_persona4":
			return 12;
			break;
		case "FX_persona5":
			return 13;
			break;
		case "FX_persona6":
			return 14;
			break;
		case "FX_persona7":
			return 15;
			break;
		case "FX_persona8":
			return 16;
			break;
		default:
			return -1;
			break;	
	}
}

function getMonsterName(monsterID) { for(var i = 1; i <= maxMonsters; i++) if(i == monsterID) return "IE_persona" + i; return "onbekend"; }

function getMonsterObjectVariable(monsterID)
{
	switch(monsterID)
	{
		case 1:
			return monsterIE1;
			break;
		case 2:
			return monsterIE2;
			break;
		case 3:
			return monsterIE3;
			break;
		case 4:
			return monsterIE4;
			break;
		case 5:
			return monsterIE5;
			break;
		case 6:
			return monsterIE6;
			break;
		case 7:
			return monsterIE7;
			break;
		case 8:
			return monsterIE8;
			break;
		case 9:
			return monsterFX1;
			break;
		case 10:
			return monsterFX2;
			break;
		case 11:
			return monsterFX3;
			break;
		case 12:
			return monsterFX4;
			break;
		case 13:
			return monsterFX5;
			break;
		case 14:
			return monsterFX6;
			break;
		case 15:
			return monsterFX7;
			break;
		case 16:
			return monsterFX8;
			break;
		default:
			return -1
			break;				
	}
}