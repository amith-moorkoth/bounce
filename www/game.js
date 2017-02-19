var game;
var menuGroup;

window.onload = function() {	      
	game = new Phaser.Game(640, 960);
     game.state.add("Boot", boot);
     game.state.add("Preload", preload);
     game.state.add("GameTitle", gameTitle);
	game.state.start("Boot");
}

////////////////////////////////////////////////////////////////////////////////

var boot = function(game){};

boot.prototype = {
     preload: function(){
          game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize = true;
          game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
          game.stage.backgroundColor = "#020028";
     },
  	create: function(){
		game.state.start("Preload");
	}
}

////////////////////////////////////////////////////////////////////////////////

var preload = function(game){};

preload.prototype = {
	preload: function(){
          game.load.image("gametitle", "icon.png");
          game.load.image("gridedition", "assets/sprites/gridedition.png");
          game.load.image("playbutton", "assets/sprites/playbutton.png");
          game.load.image("menubutton", "assets/sprites/menubutton.png");
          game.load.image("Settings", "assets/sprites/resetgame.png");
          game.load.image("thankyou", "assets/sprites/thankyou.png");
	},
  	create: function(){
		game.state.start("GameTitle");
	}
}

////////////////////////////////////////////////////////////////////////////////

var gameTitle = function(game){}

gameTitle.prototype = {
     create: function(){
          var title = game.add.sprite(game.width / 2, game.height / 2-50, "gametitle");
          title.anchor.set(0.5); 
          var grid = game.add.sprite(game.width / 2, 130, "gridedition");
          grid.anchor.set(0.5);
          var playButton = game.add.button(game.width / 2, game.height / 2 + 300, "playbutton", function(){
              game.add.tween(playButton).from({
                x:(game.width / 2)-30
              }, 500, Phaser.Easing.Bounce.In, true);
              setTimeout(function(){window.location = "hex/index.html";},500)
          });
          playButton.anchor.set(0.5);
          menuGroup = game.add.group();
          var menuButton = game.add.button(game.width / 2, game.height +100, "menubutton", toggleMenu);
          menuButton.anchor.set(0.5);
          menuGroup.add(menuButton);
          var resetGame = game.add.button(game.width / 2, game.height + 50, "Settings", function(){});
          resetGame.anchor.set(0.5);
          menuGroup.add(resetGame);
          var thankYou = game.add.button(game.width / 2, game.height + 130, "thankyou", function(){});
          thankYou.anchor.set(0.5);
          menuGroup.add(thankYou);          
     }
}

function toggleMenu(){
     if(menuGroup.y == 0){
          var menuTween = game.add.tween(menuGroup).to({
               y: -180     
          }, 500, Phaser.Easing.Bounce.Out, true);
     }
     if(menuGroup.y == -180){
          var menuTween = game.add.tween(menuGroup).to({
               y: 0    
          }, 500, Phaser.Easing.Bounce.Out, true);     
     }
}