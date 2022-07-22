(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"measuring_HTML5_Canvas_atlas_1", frames: [[0,1002,736,434],[0,1438,1046,125],[0,0,1600,1000]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["measuring_HTML5_Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["measuring_HTML5_Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Graph_paper_scan_1600x1000_6509259561 = function() {
	this.initialize(ss["measuring_HTML5_Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Ruler1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ruler1, new cjs.Rectangle(0,0,1046,125), null);


(lib.circuitboard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circuitboard, new cjs.Rectangle(0,0,736,434), null);


(lib.ruler = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Ruler1();
	this.instance.setTransform(523,62.5,1,1,0,0,0,523,62.5);
	this.instance.alpha = 0.6289;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1046,125);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ruler("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,523,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-523,-62.5,1046,125), null);


// stage content:
(lib.measuring_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// make sure that the movieclips inside your draggable
		// items and your droppable items are not 0% oppacity
		// or they will not be "seen"and the drop will not work.
		
		createjs.Touch.enable(stage);
		
		
		// ******************** SET THE ITEM NAMES IN 2 ARRAY *************
		// there is one array for the elements to go on the left
		// and one array for the elements to go on the right
		// each item has the dot symbol included
		// each basket is an instance of the basket symbol that includes
		// the hitBox symbol
		//****************** ROUND ITEMS **********************************
		var roundItems = [this.rulerH, this.rulerV, this.orange, this.kiwi, this.pear, this.plum];
		var longItems = [this.rulerV, this.carrot]
		var score = 0;
		// we apply the same code for each symbol with the for loop
		for(var i = 0; i<roundItems.length; i++){	
			roundItems[i].on("mousedown", onMouseDown.bind(this));
			roundItems[i].on("pressmove", onMouseMove.bind(this));
			roundItems[i].on("pressup", onMouseUp.bind(this));
			roundItems[i].basket1 = this.basket2;
			roundItems[i].originX = roundItems[i].x;
			roundItems[i].originY = roundItems[i].y;
		}
		
		//****************** LONG *******************************
		for(var i = 0; i<longItems.length; i++){
			longItems[i].on("mousedown", onMouseDown.bind(this));
			longItems[i].on("pressmove", onMouseMove.bind(this));
			longItems[i].on("pressup", onMouseUp.bind(this));
			longItems[i].basket1 = this.basket1;
			longItems[i].originX = longItems[i].x;
			longItems[i].originY = longItems[i].y;
		}
		// mouse down event
		function onMouseDown(evt){
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
		}
		// mouse up event
		function onMouseUp(evt){
			var item = evt.currentTarget;
			item.drag = false;
			var pt = item.localToLocal(item.dot.x, item.dot.y, item.basket1.hitBox);
			if(item.basket1.hitBox.hitTest(pt.x, pt.y) ){
				item.x = item.basket1.x;
				item.y = item.basket1.y;
				score++;
				this.score.text = "score:" + score;
				item.mouseEnabled = false;   // prevents object from being move when place correctly
			}else{
				item.x = item.originX;
				item.y = item.originY;
			}
		}
		// mouse move event
		function onMouseMove(evt){
			var item = evt.currentTarget;
			if (item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		
		
		
		
		
		/* Click to Position an Object
		Moves the specified symbol instance to the x-coordinate and y-coordinate you specify.
		
		Instructions:
		1. Replace the value 200 with the x-coordinate
		   where you want to position the object.
		2. Replace the value 100 with the y-coordinate where you want to position the object.
		*/
		
		this.rotatebutton1.addEventListener("click", fl_ClickToPosition.bind(this));
		
		function fl_ClickToPosition()
		{
			this.rotatebutton1.x = 200;
			this.rotatebutton1.y = 100;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.circuitboard();
	this.instance.setTransform(526,388,1,1,0,0,0,368,217);
	this.instance.compositeOperation = "darken";

	this.rulerV = new lib.Symbol1();
	this.rulerV.name = "rulerV";
	this.rulerV.setTransform(72,347,1,1,90);
	this.rulerV.compositeOperation = "multiply";

	this.rulerH = new lib.Symbol1();
	this.rulerH.name = "rulerH";
	this.rulerH.setTransform(586.9,689.55);
	this.rulerH.compositeOperation = "multiply";

	this.instance_1 = new lib.Graph_paper_scan_1600x1000_6509259561();
	this.instance_1.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.rulerH},{t:this.rulerV},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(500,224,780,646);
// library properties:
lib.properties = {
	id: 'FBEDB558E026124C95DE263E168AC58B',
	width: 1000,
	height: 800,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/measuring_HTML5_Canvas_atlas_1.png", id:"measuring_HTML5_Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FBEDB558E026124C95DE263E168AC58B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;