//
function guard(card,type) {
	var thisCard = card;
	var thisType = type;
	//选择玩家
	playerList();
	//删除没选中的玩家，高亮选中玩家
	$('.playerArea button').click(function(event) {
		var $player = $(this);
		$(this).addClass('player-choose');
		$('.playerArea button').not('.player-choose').remove();
		$('.log').append('<p>选择了:'+$player.text()+'号玩家</p>');

		//猜测玩家身份
		
		$('.cardArea span').append('<button>牧师</button><button>男爵</button><button>女仆</button>'+
		'<button>王子</button><button>国王</button><button>女伯爵</button><button>公主</button>');
		$('.cardArea button').click(function(event) {
			$(this).addClass('card-choose');
			$('.log').append('<p>猜测'+$player.text()+'号玩家身份是:'+$(this).text()+'</p>');
			//判断结果是否正确
			if($('#p'+$player.text()).children('.first-card').text() === $(this).text()) {
				alert('猜中了，'+$player.text()+'号玩家出局！');
				$('.log').append('<p>猜中了，'+$player.text()+'号玩家出局！</p>');
				$.each(playersArr,function(index) {
					if(playersArr[index].id === $player.text()) {
						playersArr.splice(index,1);
						$('#p'+$player.text()).remove();						
						return false;
					}					
				});
			}
			else {
				alert('猜错了，轮到下一位玩家.');
				$('.log').append('猜错了，轮到下一位玩家.');
			}
			endTurn(thisCard,thisType);
		});
	});
}

function priest(card,type) {
	var thisCard = card;
	var thisType = type;
	//选择玩家
	playerList();
	//删除没选中的玩家，高亮选中玩家
	$('.playerArea button').click(function(event) {
		var $player = $(this);
		$(this).addClass('player-choose');
		$('.playerArea button').not('.player-choose').remove();
		$('.log').append('<p>选择了:'+$player.text()+'号玩家</p>');

		//查看玩家身份
		console.log($player.text()+'号玩家身份是'+$('#p'+$player.text()+' .first-card').text());
		alert($player.text()+'号玩家身份是'+$('#p'+$player.text()+' .first-card').text());
		$('.log').append($player.text()+'号玩家身份是'+$('#p'+$player.text()+' .first-card').text());
		endTurn(thisCard,thisType);
	});
}

function baron(card,type) {
	var thisCard = card;
	var thisType = type;
	//选择玩家
	playerList();
	//删除没选中的玩家，高亮选中玩家
	$('.playerArea button').click(function(event) {
		var $player = $(this);
		$(this).addClass('player-choose');
		$('.playerArea button').not('.player-choose').remove();
		$('.log').append('<p>选择了:'+$player.text()+'号玩家</p>');

		//拼点
		var p1 = thisCard.siblings('.handCard').text();
		var p2 = $('#p'+$player.text()+' .first-card').text();
		var point1 = '';
		var point2 = '';
		alert(p1+' '+p2);
		$.each(cardsCost,function(index) {
			if(cardsCost[index].name === p1) {
				point1 = cardsCost[index].cost;
				console.log(cardsCost[index]);
				return false;
			}
		});
		$.each(cardsCost,function(index) {
			if(cardsCost[index].name === p2) {
				point2 = cardsCost[index].cost;
				return false;
			}
		});
		if(point1>point2) {
			alert('你赢了,'+$player.text()+'号玩家出局.');
			$('.log').append('你赢了,'+$player.text()+'号玩家出局.');
			playerOut($player.text());
		}
		else if(point1===point2) {
			alert('打平手，游戏继续.');
			$('.log').append('打平手，游戏继续.');
		}
		else if(point1<point2) {
			alert('你输了，出局');
			$('.log').append('你输了,'+playersArr[playersArr.length-1].id+'号玩家出局.');
			playerOut(playersArr[playersArr.length-1].id);
		}
		endTurn(thisCard,thisType);
	});
}

function handmaid(card,type) {
	var thisCard = card;
	var thisType = type;
	var id = playersArr[playersArr.length-1].id;
	if($.inArray(id, existArr) === -1) {		
		existArr.push(id);
		playersArr[playersArr.length-1].exist = false;
	}
	else {
		
	}
	alert(id+'号玩家已经被锁定.');
	$('.log').append(id+'号玩家已经被锁定.');
	endTurn(thisCard,thisType);
}

function prince(card,type) {
	var thisCard = card;
	var thisType = type;
	var oldCard = '';
	//选择玩家
	playerList();
	//删除没选中的玩家，高亮选中玩家
	$('.playerArea button').click(function(event) {
		var $player = $(this);
		$(this).addClass('player-choose');
		$('.playerArea button').not('.player-choose').remove();
		$('.log').append('<p>选择了:'+$player.text()+'号玩家</p>');

		//被选择的玩家弃牌换牌
		var p = $('#p'+$player.text()+' .first-card').text();
		if(p === '公主') {
			alert($player.text()+'号玩家因为丢弃公主身份牌而出局.');
			$('.log').append($player.text()+'号玩家因为丢弃公主身份牌而出局.');
			playerOut($player.text());
		}
		else {
			oldCard = $('#p'+$player.text()+' .first-card').text();
			if(cardsArr.length === 0) {
				alert('卡牌已经摸完，将会摸取移除的牌.')
				console.log('卡牌已经摸完，将会摸取移除的牌.');
				cardsArr.push(THEONE);
				THEONE = '';
			}
			$('#p'+$player.text()+' .first-card').text(cardsArr[0].name);
			$('.log').append('<p>'+$player.text()+'号玩家丢弃了:'+oldCard+',摸到了:'+cardsArr[0].name+'</p>');	
			cardsArr.splice(0,1);
		}
		endTurn(thisCard,thisType);
	});
}

function king(card,type) {
	var thisCard = card;
	var thisType = type;
	var oldCard = '';
	var p = thisCard.siblings('.handCard').text();
	if(p === "女伯爵") {
		alert('你必须打出女伯爵.');
		console.log('你必须打出女伯爵.');
		return false;
	}
	else {		
		//选择玩家
		playerList();
		//删除没选中的玩家，高亮选中玩家
		$('.playerArea button').click(function(event) {
			var $player = $(this);
			$(this).addClass('player-choose');
			$('.playerArea button').not('.player-choose').remove();
			$('.log').append('<p>选择了:'+$player.text()+'号玩家</p>');

			//与被选择的玩家互换
			var yourCard = $('#p'+$player.text()+' .first-card').text();
			thisCard.siblings('.handCard').text(yourCard);
			$('#p'+$player.text()+' .first-card').text(p);
			endTurn(thisCard,thisType);
		});
	}
}

function countess(card,type) {
	var thisCard = card;
	var thisType = type;
	endTurn(thisCard,thisType);
}

function princess(card,type) {
	var thisCard = card;
	var thisType = type;
	var r = confirm("丢弃公主将会立刻出局.");
	if (r===true)  {
	  alert("你丢弃公主，出局.");
	  playerOut(playersArr[playersArr.length-1].id);
	  $('.log').append('<p>'+playersArr[playersArr.length-1].id+'号玩家丢弃了公主出局.</p>');	
	}
	endTurn(thisCard,thisType);
}