var canvas;
var gameState = 0;
var playerCount;
 var database;

 var form, game, player;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  

}

