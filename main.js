enchant();

var gs = {fps:15, height:320, width:320};

var ga = {};
ga.oo3 = {				//おおさんしooょううおのimage
	height:32
	,image: "oo3.png"
	,width:47
};
ga.item = {
	height:16
	,image: "./images/icon0.png"
	,width:16
};



var eSprite = enchant.Class.create(enchant.Sprite,{
	initialize:function(asset) {
		enchant.Sprite.call(this,asset.width,asset.height);
		this.image = game.assets[asset.image];
		game.currentScene.addChild(this);
	}
});

var	Oo3 = enchant.Class.create(eSprite,{
	initialize:function(frame,x,y) {
		eSprite.call(this,ga.oo3);
		this.frame = frame || 0;
		this.x = x || 0;
		this.y = y || 0;
	}
});

var Item = enchant.Class.create(eSprite,{
	initialize:function(oo3x,oo3y) {
		eSprite.call(this,ga.item);
		this.frame = 54;
		this.x = oo3x.x
		this.y = oo3y.y

	}
});

//	==================================================

window.onload = function() {
	game = new Core(gs.width, gs.height);
	game.fps = gs.fps;
	game.preload(ga.oo3.image,ga.item.image);
	stage = game.rootScene;

	game.onload = function() {

		var oo3 = new Oo3([0,1,2],100,200);

		stage.tl.delay(10).then(function() {
			var item = new Item(oo3.x,oo3.y);
			stage.addChild(item);
		});

		var impressions = new Label();
		impressions.text = "弾がちゃんとしたところからでないぃぃぃぃいい";
		impressions.x = 10;
		impressions.y = 100;
		stage.addChild(impressions);
		
	};

	game.start();
};
