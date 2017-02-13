window.onload = function() { 
	function new_num(){
		var numShow = Math.random() < 0.5 ? 2 : 4;
		var tileNum = Math.floor(Math.random() * 4) + 1;
		var rowNum = Math.floor(Math.random() * 4) + 1;
		var rowName;
		switch (rowNum) {
			case 1:
			rowName = "A";
			break;
			case 2:
			rowName = "B";
			break;
			case 3:
			rowName = "C";
			break;
			case 4:
			rowName = "D";
			break;
		}
		switch (numShow) {
			case 2:
			colorBG = "#eee4da";
			break;
			case 4:
			colorBG = "#ede0c8";
			break;
		}
		if ($( ".tile"+tileNum+"-"+rowName ).hasClass( "used" ) == false) {
			$( ".tile"+tileNum+"-"+rowName ).css( "background-color", colorBG );
			$( ".tile"+tileNum+"-"+rowName  ).text( numShow );
			$( ".tile"+tileNum+"-"+rowName ).addClass( "tile_"+numShow + " used");
		}else{
			console.log("tile_"+numShow)
			new_num();
		}
		
	}
	$(document).keydown(function( event ) {
		switch (event.which) {
			case 37:
			direction = "left";
			break;
			case 38:
			direction = "top";
			break;
			case 39:
			direction = "right";
			break;
			case 40:
			direction = "bottom";
			break;
		}
		new_num();
		alert(direction);
	});
};
// {"grid":{"size":4,"cells":[[null,{"position":{"x":0,"y":1},"value":4},null,null],[null,null,null,{"position":{"x":1,"y":3},"value":4}],[null,null,null,null],[null,null,null,{"position":{"x":3,"y":3},"value":2}]]},"score":4,"over":false,"won":false,"keepPlaying":false}
// {"grid":{"size":4,"cells":[[null,null,{"position":{"x":0,"y":2},"value":2},{"position":{"x":0,"y":3},"value":4}],[null,{"position":{"x":1,"y":1},"value":4},{"position":{"x":1,"y":2},"value":16},{"position":{"x":1,"y":3},"value":8}],[null,{"position":{"x":2,"y":1},"value":32},{"position":{"x":2,"y":2},"value":2},{"position":{"x":2,"y":3},"value":32}],[null,{"position":{"x":3,"y":1},"value":8},{"position":{"x":3,"y":2},"value":16},{"position":{"x":3,"y":3},"value":8}]]},"score":388,"over":false,"won":false,"keepPlaying":false}