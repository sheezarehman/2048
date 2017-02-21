"use strict";
window.onload = function () { 
    //on load 2 numbers already apears
    new_num();
    new_num();
    function new_num(){
        var numShow = Math.random() < 0.5 ? 2 : 4;
        var tileNum = Math.floor(Math.random() * 4) + 1;
        var rowName = Math.floor(Math.random() * 4) + 1;
        switch (numShow) {
            case 2:
            var colorBG = "#eee4da";
            break;
            case 4:
            var colorBG = "#ede0c8";
            break;
        }
        if ($( "#tile"+tileNum+"-"+rowName ).hasClass( "used" ) == false) {
            $( "#tile"+tileNum+"-"+rowName ).css( "background-color", colorBG );
            $( "#tile"+tileNum+"-"+rowName  ).text( numShow );
            $( "#tile"+tileNum+"-"+rowName ).addClass( "used"+" tile_"+numShow );
        }else{
            console.log("tile_"+numShow);// to find a condition to find id whole grid is filled
            new_num();
        }
    }
    $(document).keydown(function( event ) {
        switch (event.which) {
            case 37:
            var direction = "left";
            var actions=-1;
            for (var i = 1; i < 4; i++) left_click(i);
                break;
            case 38:
            var direction = "top";
            var actions=-1;
            for (var i = 1; i < 4; i++) top_click(i);
                break;
            case 39:
            var direction = "right";
            var actions=+1;
            for (var i = 1; i < 4; i++) right_click(i);
                break;
            case 40:
            var direction = "bottom";
            var actions=+1;
            for (var i = 1; i < 4; i++) bottom_click(i);
                break;
            default: return "";
        }
        new_num();
		// tile-x-y
		function left_click(first_only){
			var actions=-1;
			for (var x = 4; x >= 1; x--) {
				for (var y = 1; y <=4; y++) {
					console.log("two : tile"+x+"-"+y );
					var classList = $("#tile"+x+"-"+y).attr("class").split(' ');//classList[2] = nbr on the tile , classList[1]=used
					if ($( "#tile"+x+"-"+y ).hasClass("used" )) {
						$( "#tile"+x+"-"+y ).css( "background-color", "pink" );
                        if (x+actions<=4 && x+actions>=1) {
                            var xb=x+actions;
                        }else if(x+actions>=4){
                            var xb=4;
                        }else if(x+actions<=1){
                            var xb=1;
                        }else{
                            var xb="problem";
                        }
                        console.log("three : tile"+xb+"-"+y );
                        if ($( "#tile"+xb+"-"+y ).hasClass( "used" ) == false && first_only ==1) {
                           console.log(" tada : #tile"+xb+"-"+y);
                           if($( "#tile"+x+"-"+y  ).value== $("#tile"+xb+"-"+y).value){
                            console.log("same values");
                                var tile_score = classList[2].substr(5);
                                var new_val=tile_score * 2;
                                $( "#tile"+x+"-"+y  ).removeClass( classList[2] +" "+ classList[1] );
                                $( "#tile"+x+"-"+y ).empty();
                                $("#tile"+xb+"-"+y).addClass( classList[1] + " " + "tile_"+new_val  );
                                $( "#tile"+xb+"-"+y  ).text(new_val);
                                $( "#tile"+xb+"-"+y ).css( "background-color", "red" );
                            }else{
                                console.log(" not same values");
                                $( "#tile"+x+"-"+y  ).removeClass( classList[2] +" "+ classList[1] );
                                $( "#tile"+x+"-"+y ).empty();
                                $("#tile"+xb+"-"+y).addClass( classList[1] + " " + classList[2]  );
                                var tile_score = classList[2].substr(5);
                                $( "#tile"+xb+"-"+y  ).text(tile_score);
                                $( "#tile"+xb+"-"+y ).css( "background-color", "red" );
                            }
                        }
                }
            }
        }
    }
    function right_click(first_only){
       var actions=+1;
       for (var x = 1; x <= 4; x++) {
        for (var y = 1; y <=4; y++) {
         console.log("two : tile"+y+"-"+x );
					var classList = $("#tile"+y+"-"+x).attr("class").split(' ');//classList[3] = nbr on the tile , classList[2]=used
					if ($(  "#tile"+y+"-"+x ).hasClass("used" )) {
						$( "#tile"+y+"-"+x ).css( "background-color", "pink" );
						if (y+actions<=4 && y+actions>=1) {
                            var yb=y+actions;
                        }else if(y+actions>=4){
                            var yb=4;
                        }else if(y+actions<=1){
                            var yb=1;
                        }else{
                            var yb="problem";
                        }
                        console.log("three : tile"+yb+"-"+x );
                        if ($( "#tile"+yb+"-"+x ).hasClass( "used" ) == false ) {
                           console.log(classList);
                           $( "#tile"+y+"-"+x  ).removeClass( classList[2] +" "+ classList[1] );
                           $( "#tile"+y+"-"+x ).empty();
                           $("#tile"+yb+"-"+x).addClass(classList[1] + " " + classList[2]  );
                           var tile_score = classList[2].substr(5);
                           $( "#tile"+yb+"-"+x).text(tile_score);
                           $( "#tile"+yb+"-"+x).css( "background-color", "red" );
                       }
                   }
               }
           }
       }
       function top_click(first_only){
           var actions=-1;
           for (var x = 1; x <= 4; x++) {
            for (var y = 1; y <=4; y++) {
             console.log("two : tile"+x+"-"+y );
					var classList = $("#tile"+x+"-"+y).attr("class").split(' ');//classList[3] = nbr on the tile , classList[2]=used
					if ($(  "#tile"+x+"-"+y ).hasClass("used" )) {
						$( "#tile"+x+"-"+y ).css( "background-color", "pink" );
						if (y+actions<=4 && y+actions>=1) {
                            var yb=y+actions;
                        }else if(y+actions>=4){
                            var yb=4;
                        }else if(y+actions<=1){
                            var yb=1;
                        }else{
                            var yb="problem";
                        }
                        console.log("three : tile"+x+"-"+yb );
                        if ($( "#tile"+x+"-"+yb ).hasClass( "used" ) == false) {
                           console.log(classList);
                           $(  "#tile"+x+"-"+y  ).removeClass( classList[2] +" "+ classList[1] );
                           $(  "#tile"+x+"-"+y ).empty();
                           $("#tile"+x+"-"+yb).addClass(classList[1] + " " + classList[2] );
                           var tile_score = classList[2].substr(5);
                           $( "#tile"+x+"-"+yb ).text(tile_score);
                           $( "#tile"+x+"-"+yb).css( "background-color", "red" );
                       }
                   }
               }
           }
       }
       function bottom_click(first_only){
           var actions=+1;
           for (var x = 4; x >= 1; x--) {
            for (var y = 1; y <=4; y++) {
             console.log("two : tile"+x+"-"+y );
					var classList = $("#tile"+x+"-"+y).attr("class").split(' ');//classList[3] = nbr on the tile , classList[2]=used
					if ($(  "#tile"+x+"-"+y ).hasClass("used" )) {
						$( "#tile"+x+"-"+y ).css( "background-color", "pink" );
						if (y+actions<=4 && y+actions>=1) {
                            var yb=y+actions;
                        }else if(y+actions>=4){
                            var yb=4;
                        }else if(y+actions<=1){
                            var yb=1;
                        }else{
                            var yb="problem";
                        }
                        console.log("three : tile"+x+"-"+yb );
                        if ($( "#tile"+x+"-"+yb ).hasClass( "used" ) == false ) {
                           $(  "#tile"+x+"-"+y  ).removeClass( classList[2] +" "+ classList[1] );
                           $(  "#tile"+x+"-"+y ).empty();
                           $("#tile"+x+"-"+yb).addClass(classList[1] + " " + classList[2] );
                           var tile_score = classList[2].substr(5);
                           $( "#tile"+x+"-"+yb ).text(tile_score);
                           $( "#tile"+x+"-"+yb).css( "background-color", "red" );
                       }
                   }
               }
           }
       }
		// alert(direction);
	});
};
// {"grid":{"size":4,"cells":[[null,{"position":{"x":0,"y":1},"value":4},null,null],[null,null,null,{"position":{"x":1,"y":3},"value":4}],[null,null,null,null],[null,null,null,{"position":{"x":3,"y":3},"value":2}]]},"score":4,"over":false,"won":false,"keepPlaying":false}
// {"grid":{"size":4,"cells":[[null,null,{"position":{"x":0,"y":2},"value":2},{"position":{"x":0,"y":3},"value":4}],[null,{"position":{"x":1,"y":1},"value":4},{"position":{"x":1,"y":2},"value":16},{"position":{"x":1,"y":3},"value":8}],[null,{"position":{"x":2,"y":1},"value":32},{"position":{"x":2,"y":2},"value":2},{"position":{"x":2,"y":3},"value":32}],[null,{"position":{"x":3,"y":1},"value":8},{"position":{"x":3,"y":2},"value":16},{"position":{"x":3,"y":3},"value":8}]]},"score":388,"over":false,"won":false,"keepPlaying":false}