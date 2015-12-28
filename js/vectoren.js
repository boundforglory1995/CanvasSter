var Canvas = document.getElementById("Canvas");
stage = new createjs.Stage(Canvas);
var Stars = 25;
var ActiveStars= Stars;
var allStars = [];


for(var i=0; i<Stars; i++) {
var star = new createjs.Shape();
star.graphics.setStrokeStyle(5).beginStroke("#ff9900");
star.graphics.drawPolyStar(280,150,80 + (i^1),7,0.50, -90);
star.x = Math.random()*600;
star.y = Math.random()*400;
star.alpha = 1 - i/50;
star.compositeOperation ="lighter";
var tween = createjs.Tween.get(star).to({x:300,y:200},1500 + 90*i, createjs.Ease.elasticOut);
allStars.push({starId: star});

stage.addChild(star);

}


createjs.Ticker.addEventListener("tick",repeat);
function repeat(event) {
   stage.update(event); 
    
    
}

function countActiveStars() {
    ActiveStars--;
    //code
}

addEventListener('mouseup', Clicked);
function Clicked(event){
    
 for(var i = 0; i<Stars; i++){
    
    
    var Star = allStars[i].starId;
    createjs.Tween.get(Star,{override:true}).to({x:stage.mouseX, y:stage.MouseY}, 1500 + 180*i, createjs.Ease.elasticOut).call(countActiveStars);
    
 }
    ActiveStars = Stars;
    
}




