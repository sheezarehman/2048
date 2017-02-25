"use strict";
window.onload = function () {
    var my_array=[
    [null , null , null , null],
    [null , null , null , null],
    [null , null , null , null],
    [null , null , null , null],
    ]
    //on load 2 numbers already apears
    new_num();
    new_num();
    var total=0;
    function new_num(){
        var numShow = Math.random() < 0.6 ? 2 : 4;
        var tileNum = Math.floor(Math.random() * 4)+1;
        var rowName = Math.floor(Math.random() * 4)+1;
        if( my_array[tileNum-1][rowName-1] == null){
            my_array[tileNum-1][rowName-1]="x="+tileNum+", y="+rowName+" value="+numShow;
        }else{
            new_num();
        }
        remove_classes();
        display();
    }
     var direction;
    var actions;
    function top(){
        direction = "top";
        actions=-1;
        for (var i = 1; i < 5; i++) top_click(i);
        remove_classes();
        display();
        var res = checking();
       if(res != "false" && res != "end" ){
            new_num();
       } 
    }
    function bottom(){
        direction = "bottom";
        actions=+1;
        for (var i = 1; i < 5; i++) bottom_click(i);
        remove_classes();
        display();
        var res = checking();
       if(res != "false" && res != "end" ){
            new_num();
       }  
    }
    function left(){
         direction = "left";
        actions=-1;
        for (var i = 1; i < 5; i++) left_click(i);
        remove_classes();
        display();
        var res = checking();
       if(res != "false" && res != "end" ){
            new_num();
       } 
    }
    function right(){
        direction = "right";
        actions=+1;
        for (var i = 1; i < 5; i++) right_click(i);
        remove_classes();
        display();
            var res = checking();
       if(res != "false" && res != "end" ){
            new_num();
       }        
    }
    $( ".top" ).click(function() {
       top();        
    });
    $( ".bottom" ).click(function() {
        bottom();
    });
    $( ".left" ).click(function() {
        left();        
    });
    $( ".right" ).click(function() {
        right();       
    });
     $(document).keydown(function( event ) {
        switch (event.which) {
            case 37:
            left();
            break;
            case 38:
            top();
            break;
            case 39:
            right();
            break;
            case 40:
            bottom();
            break;
            default: return "";
        } 
    });

    function left_click(first_only){
        var actions=-1;
        for (var x = 4; x >= 1; x--) {
            for (var y = 1; y <=4; y++) {
                if ( my_array[x-1][y-1] != null) {
                    // $( "#tile"+x+"-"+y ).css( "background-color", "pink" );
                    if (x+actions<=4 && x+actions>=1) {
                        var xb=x+actions;
                    }else if(x+actions>=4){
                        var xb=4;
                    }else if(x+actions<=1){
                        var xb=1;
                    }else{
                        var xb="problem";
                    }
                    if ( my_array[xb-1][y-1] != null && my_array[xb-1][y-1].substr(15) == my_array[x-1][y-1].substr(15) && x != xb && my_array[x-1][y-1].substr(my_array[x-1][y-1].length -1)!= "b"  && my_array[xb-1][y-1].substr(my_array[xb-1][y-1].length -1)!= "b") {
                        var tile_score = my_array[xb-1][y-1].substr(15);
                        var new_val=tile_score * 2;
                        var nbr2= my_array[x-1][y-1].substr(15);
                        my_array[x-1][y-1]=null;
                        my_array[xb-1][y-1] ="x="+xb+", y="+y+" value="+new_val+"b";
                        $("#result").val(total+new_val);
                        total=total+new_val;
                        // $( "#tile"+xb+"-"+y ).css( "background-color", "red" );  
                    }else if (my_array[xb-1][y-1]  == null) {
                        var nbr2= my_array[x-1][y-1].substr(15);
                        my_array[x-1][y-1]=null;
                        my_array[xb-1][y-1] ="x="+xb+", y="+y+" value="+nbr2;
                        // $( "#tile"+xb+"-"+y ).css( "background-color","red");
                    }

                }
            }
        }
    }
    function right_click(first_only){
        var actions=+1;
        for (var x = 1; x <= 4; x++) {
            for (var y = 1; y <=4; y++) {
                if ( my_array[y-1][x-1] != null) {
                    // $( "#tile"+y+"-"+x ).css( "background-color", "pink" );
                    if (y+actions<=4 && y+actions>=1) {
                        var yb=y+actions;
                    }else if(y+actions>=4){
                        var yb=4;
                    }else if(y+actions<=1){
                        var yb=1;
                    }else{
                        var yb="problem";
                    }
                    if ( my_array[yb-1][x-1] != null && my_array[yb-1][x-1].substr(15) == my_array[y-1][x-1].substr(15) && y != yb && my_array[y-1][x-1].substr(my_array[y-1][x-1].length -1)!= "b"  && my_array[yb-1][x-1].substr(my_array[yb-1][x-1].length -1)!= "b") {
                        var tile_score = my_array[yb-1][x-1].substr(15);
                        var new_val=tile_score * 2;
                        var nbr2= my_array[y-1][x-1].substr(15);
                        my_array[y-1][x-1]=null;
                        my_array[yb-1][x-1] ="x="+yb+", y="+x+" value="+new_val+"b";
                        $("#result").val(total+new_val);
                        total=total+new_val;
                        // $( "#tile"+xb+"-"+y ).css( "background-color", "red" );  
                    }else if (my_array[yb-1][x-1]  == null) {
                        var nbr2= my_array[y-1][x-1].substr(15);
                        my_array[y-1][x-1]=null;
                        my_array[yb-1][x-1] ="x="+yb+", y="+x+" value="+nbr2;
                        // $( "#tile"+xb+"-"+y ).css( "background-color","red");
                    }
                }
            }
        }
    }
    function top_click(first_only){
        var actions=-1;
        for (var x = 1; x <= 4; x++) {
            for (var y = 1; y <=4; y++) {
                if (my_array[x-1][y-1] != null) {
                    // $( "#tile"+x+"-"+y ).css( "background-color", "pink" );
                    if (y+actions<=4 && y+actions>=1) {
                        var yb=y+actions;
                    }else if(y+actions>=4){
                        var yb=4;
                    }else if(y+actions<=1){
                        var yb=1;
                    }else{
                        var yb="problem";
                    }
                    if ( my_array[x-1][yb-1] != null && my_array[x-1][yb-1].substr(15) == my_array[x-1][y-1].substr(15) && y != yb && my_array[x-1][y-1].substr(my_array[x-1][y-1].length -1)!= "b"  && my_array[x-1][yb-1].substr(my_array[x-1][yb-1].length -1)!= "b") {
                        var tile_score = my_array[x-1][yb-1].substr(15);
                        var new_val=tile_score * 2;
                        var nbr2= my_array[x-1][y-1].substr(15);
                        my_array[x-1][y-1]=null;
                        my_array[x-1][yb-1] ="x="+x+", y="+yb+" value="+new_val+"b";
                        $("#result").val(total+new_val);
                        total=total+new_val;
                        // $( "#tile"+xb+"-"+y ).css( "background-color", "red" );  
                    }else if (my_array[x-1][yb-1]  == null) {
                        var nbr2= my_array[x-1][y-1].substr(15);
                        my_array[x-1][y-1]=null;
                        my_array[x-1][yb-1] ="x="+x+", y="+yb+" value="+nbr2;
                        // $( "#tile"+xb+"-"+y ).css( "background-color","red");
                    }
                }
            }
        }
    }
    function bottom_click(first_only){
        var actions=+1;
        for (var x = 4; x >= 1; x--) {
            for (var y = 1; y <=4; y++) {
                if (my_array[x-1][y-1] != null) {
                    // $( "#tile"+x+"-"+y ).css( "background-color", "pink" );
                    if (y+actions<=4 && y+actions>=1) {
                        var yb=y+actions;
                    }else if(y+actions>=4){
                        var yb=4;
                    }else if(y+actions<=1){
                        var yb=1;
                    }else{
                        var yb="problem";
                    }
                    if ( my_array[x-1][yb-1] != null && my_array[x-1][yb-1].substr(15) == my_array[x-1][y-1].substr(15) && y != yb && my_array[x-1][y-1].substr(my_array[x-1][y-1].length -1)!= "b"  && my_array[x-1][yb-1].substr(my_array[x-1][yb-1].length -1)!= "b") {
                        var tile_score = my_array[x-1][yb-1].substr(15);
                        var new_val=tile_score * 2;
                        var nbr2= my_array[x-1][y-1].substr(15);
                        my_array[x-1][y-1]=null;
                        my_array[x-1][yb-1] ="x="+x+", y="+yb+" value="+new_val+"b";
                        $("#result").val(total+new_val);
                        total=total+new_val;
                        // $( "#tile"+xb+"-"+y ).css( "background-color", "red" );  
                    }else if (my_array[x-1][yb-1]  == null) {
                        var nbr2= my_array[x-1][y-1].substr(15);
                        my_array[x-1][y-1]=null;
                        my_array[x-1][yb-1] ="x="+x+", y="+yb+" value="+nbr2;
                        // $( "#tile"+xb+"-"+y ).css( "background-color","red");
                    }
                }
            }
        }
    }
    function remove_classes(){
        for (var x = 4; x >= 1; x--) {
            for (var y = 1; y <=4; y++) {
                $("#tile"+x+"-"+y ).removeClass();
                $("#tile"+x+"-"+y ).empty();
                $("#tile"+x+"-"+y).addClass("tile");
            }
        }
    }
    function display(){
        $.each( my_array, function( key, value ) {
            $.each( value, function( key2 , val2 ) {
                if (val2 != null) {
                    if (val2.substr(val2.length-1) == "b") {
                        my_array[key][key2]=val2.substr(0 , val2.length-1);
                        val2=val2.substr(0 , val2.length-1);
                    }
                    var x =  val2.substr(2, 1) != 0?val2.substr(2, 1): 1 ;
                    var y = val2.substr(7, 1 ) != 0 ? val2.substr(7, 1 ): 1;
                    var nbr= val2.substr(15); 
                    $("#tile"+x+"-"+y).addClass( "used"+" tile_"+nbr ).text( nbr);
                    $(".used").fadeIn(50000);
                }
            });
        });
    }
     function checking(){

        if(    my_array[0][0] != null && my_array[0][1] != null && my_array[0][2] != null && my_array[0][3] != null
            && my_array[1][0] != null && my_array[1][1] != null && my_array[1][2] != null && my_array[1][3] != null
            && my_array[2][0] != null && my_array[2][1] != null && my_array[2][2] != null && my_array[2][3] != null
            && my_array[3][0] != null && my_array[3][1] != null && my_array[3][2] != null && my_array[3][3] != null){

            if(    my_array[0][0].substr(15) != my_array[0][1].substr(15) && my_array[0][0].substr(15) != my_array[1][0].substr(15)
                && my_array[1][0].substr(15) != my_array[0][0].substr(15) && my_array[1][0].substr(15) != my_array[1][1].substr(15) && my_array[1][0].substr(15) != my_array[2][0].substr(15)
                && my_array[2][0].substr(15) != my_array[1][0].substr(15) && my_array[2][0].substr(15) != my_array[2][1].substr(15) && my_array[2][0].substr(15) != my_array[3][0].substr(15)
                && my_array[3][0].substr(15) != my_array[2][0].substr(15) && my_array[3][0].substr(15) != my_array[3][1].substr(15)
                && my_array[0][1].substr(15) != my_array[0][0].substr(15) && my_array[0][1].substr(15) != my_array[1][1].substr(15) && my_array[0][1].substr(15) != my_array[0][2].substr(15)
                && my_array[1][1].substr(15) != my_array[1][0].substr(15) && my_array[1][1].substr(15) != my_array[0][1].substr(15) && my_array[1][1].substr(15) != my_array[2][1].substr(15) && my_array[1][1].substr(15) != my_array[1][2].substr(15)
                && my_array[2][1].substr(15) != my_array[1][1].substr(15) && my_array[2][1].substr(15) != my_array[2][2].substr(15) && my_array[2][1].substr(15) != my_array[3][1].substr(15) && my_array[2][1].substr(15) != my_array[2][0].substr(15)
                && my_array[3][1].substr(15) != my_array[3][0].substr(15) && my_array[3][1].substr(15) != my_array[2][1].substr(15) && my_array[3][1].substr(15) != my_array[3][2].substr(15)
                && my_array[0][2].substr(15) != my_array[0][1].substr(15) && my_array[0][2].substr(15) != my_array[1][2].substr(15) && my_array[0][2].substr(15) != my_array[0][3].substr(15)
                && my_array[1][2].substr(15) != my_array[1][1].substr(15) && my_array[1][2].substr(15) != my_array[2][2].substr(15) && my_array[1][2].substr(15) != my_array[0][2].substr(15) && my_array[1][2].substr(15) != my_array[1][3].substr(15)
                && my_array[2][2].substr(15) != my_array[2][1].substr(15) && my_array[2][2].substr(15) != my_array[3][2].substr(15) && my_array[2][2].substr(15) != my_array[1][2].substr(15) && my_array[2][2].substr(15) != my_array[2][3].substr(15)
                && my_array[3][2].substr(15) != my_array[3][1].substr(15) && my_array[3][2].substr(15) != my_array[2][2].substr(15) && my_array[3][2].substr(15) != my_array[2][2].substr(15)
                && my_array[0][3].substr(15) != my_array[0][2].substr(15) && my_array[0][3].substr(15) != my_array[1][3].substr(15)
                && my_array[1][3].substr(15) != my_array[2][3].substr(15) && my_array[1][3].substr(15) != my_array[0][3].substr(15) && my_array[1][3].substr(15) != my_array[1][2].substr(15)
                && my_array[2][3].substr(15) != my_array[3][3].substr(15) && my_array[2][3].substr(15) != my_array[1][3].substr(15) && my_array[2][3].substr(15) != my_array[2][2].substr(15)
                && my_array[3][3].substr(15) != my_array[2][3].substr(15) && my_array[3][3].substr(15) != my_array[3][2].substr(15) 
                ){
                     
                    if(confirm("Game Over; your score was "+total+" ,  You vwanna restart? ")){
                           my_array=[
                            [null , null , null , null],
                            [null , null , null , null],
                            [null , null , null , null],
                            [null , null , null , null],
                            ] 
                            new_num();
                            new_num();
                            total = 0;
                            $("#result").val(total);
                    }
                return "end";
            }
                console.log(my_array);
                return "false";
        }
    }
};  