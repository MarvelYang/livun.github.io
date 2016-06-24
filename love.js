//打乱
function shuffle() {	
	cardsArr=cardsArr.sort(function(){
	  return Math.random()-0.5;
	});
}
//抽离一张牌
function theOne() {
	THEONE = cardsArr[0];
	cardsArr.splice(0,1);
	$('.log').append('移除了: '+THEONE.name);
}
//发牌
function sendCards() {
	theOne();
	$('.player').each(function(index) {
		$(this).find('.playerName').text(playersArr[index].id);
		$(this).find('.first-card').text(cardsArr[0].name);
		cardsArr.splice(0,1);
	});
	$('.log').append('<p>发牌</p>');
}
//轮到哪一位玩家
function whichPlayer() {
	var thisPlayer = playersArr[0];
	playersArr.splice(0,1);
	playersArr.push(thisPlayer);
	$('.log').append('<p>轮到'+thisPlayer.id+'号玩家</p>');

	//检查玩家锁定状态
	if($.inArray(thisPlayer.id, existArr) !== -1) {
		existArr.splice($.inArray(thisPlayer.id, existArr),1);
		playersArr[playersArr.length-1].exist = true;
	}
	return thisPlayer;
}
//列出可选择玩家
function playerList() {
	$('.playerArea span').html('');
	$('.cardArea span').html('');
	for(var i=0;i<playersArr.length-1;i++) {
		if(playersArr[i].exist===true) {			
			$('.playerArea span').append('<button>'+playersArr[i].id+'</button>');
		}
	}

}
//选择玩家
function choosePlayer(playerId) {
	var thisPlayer;
	$.each(playersArr, function(index, el) {
		if(playersArr[index].id === playerId) {
			thisPlayer = this;	
			return false;
		}
	});
	return thisPlayer;
}

//摸牌
function getCard(player) {
	if(cardsArr.length === 0 && THEONE === '') {
		gameover();
	}
	else {		
		$('#p'+player.id).addClass('player-turn');
		$('#p'+player.id+' .second-card').text(cardsArr[0].name);
		$('.log').append('<p>'+player.id+'号玩家摸到了:'+cardsArr[0].name+'</p>');	
		cardsArr.splice(0,1);
		$('.player-turn .first-card').click(function(event) {
			event.preventDefault();
			playCard($(this),0);
		});
		$('.player-turn .second-card').click(function(event) {
			event.preventDefault();
			playCard($(this),1);
		});
	}
}
//出牌
function playCard(card,type) {
	var thisCard = card;
	var thisType = type;
	if(thisCard.text() === "守卫") {
		guard(thisCard,thisType);
	}
	else if(thisCard.text() === "牧师") {
		priest(thisCard,thisType);
	}
	else if(thisCard.text() === "男爵") {
		baron(thisCard,thisType);
	}
	else if(thisCard.text() === "女仆") {
		handmaid(thisCard,thisType);
	}
	else if(thisCard.text() === "王子") {
		prince(thisCard,thisType);
	}
	else if(thisCard.text() === "国王") {
		king(thisCard,thisType);
	}
	else if(thisCard.text() === "女伯爵") {
		countess(thisCard,thisType);
	}
	else if(thisCard.text() === "公主") {
		princess(thisCard,thisType);
	}
}
//玩家出局
function playerOut(id) {
	/*var num = $.inArray(player, playersArr);
	alert("player "+player.id+" out.");
	$('#p'+player.id).remove();
	playersArr.splice(num,1);*/
	$.each(playersArr,function(index) {
		if(playersArr[index].id === id) {
			playersArr.splice(index,1);
			$('#p'+id).remove();						
			return false;
		}					
	});
}
//是否摸完卡组
function noCards() {
	if(cardsArr.length === 0) {
		alert("No more cards.");
	}
}
//是否结束
function gameover() {
	if(playersArr.length === 1) {
		alert('Game Over.');
		$('.log').append('Game Over.');
	}
	return false;
}

//结束回合
function endTurn(card,type) {
	var thisCard = card;
	var thisType = type;
	$('.player-turn').removeClass('player-turn');
	$('.playerArea span').html('');
	$('.cardArea span').html('');
	var f = $(thisCard).parent().find('.first-card').text();
	var s = $(thisCard).parent().find('.second-card').text();
	var h = $(thisCard).parent().find('.history-card').text();
	if(thisType === 0) {
		$(thisCard).text(s);
		h = h+" "+f;
		$(thisCard).parent().find('.history-card').text(h);
	}
	else {
		$(thisCard).text(f);
		h = h+" "+s;
		$(thisCard).parent().find('.history-card').text(h);
	}
	$('.second-card').text('');
	$(thisCard).unbind('click');
	gameover();
	getCard(whichPlayer());
}

shuffle();
sendCards();
getCard(whichPlayer());