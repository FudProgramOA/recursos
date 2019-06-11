(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"functions_atlas_", frames: [[1819,0,200,200],[1819,202,200,200],[0,1883,200,200],[1819,404,200,200],[0,0,1024,813],[1628,0,189,410],[0,2136,1000,420],[1002,2136,1000,420],[0,2558,1000,420],[602,1068,600,1066],[1026,0,600,1066],[0,815,600,1066],[602,815,255,246]]}
];


// symbols:



(lib.badge1 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.badge2 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.badge3 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.badge4 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.base = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bomb = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.leftHeli = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.leftHeli2 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.rightHeli = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.soldier1 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.soldier2 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.soldier3 = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.star = function() {
	this.spriteSheet = ss["functions_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Fin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Ejecución del modulo completado", "23px 'Army'", "#3E4418");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(1,-32.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E4418").ss(1,1,1).p("A2LsGMAsXAAAQB8AABYBYQBYBYAAB8IAAO1QAAB8hYBYQhYBYh8AAMgsXAAAQh8AAhYhYQhYhYAAh8IAAu1QAAh8BYhYQBYhYB8AAg");
	this.shape.setTransform(0,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fin, new cjs.Rectangle(-172.9,-80.9,346,157), null);


(lib.plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.plus = new cjs.Text("+", "18px 'Consolas'");
	this.plus.name = "plus";
	this.plus.lineHeight = 23;
	this.plus.parent = this;
	this.plus.setTransform(-5,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.plus).wait(1));

}).prototype = getMCSymbolPrototype(lib.plus, new cjs.Rectangle(-7,-12.5,14.1,25.1), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.IndicadorGo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AiLBPIAAidICpAAIBuBOIhqBPg");
	this.shape.setTransform(3.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AiLBPIAAidICpAAIBuBOIhpBPg");
	this.shape_1.setTransform(3.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IndicadorGo, new cjs.Rectangle(-11.6,-9.2,30,17.8), null);


(lib.Indicador = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5A8494").ss(1,1,1).p("AiLBPIAAidICqAAIBtBOIhqBPg");
	this.shape.setTransform(2.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D2EFF7").ss(1,1,1).p("EgktgBLIAAgDMBJbAAAIAACdMhJbAAA");
	this.shape_1.setTransform(247.3,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A8494").s().p("AiLBPIAAidICqAAIBtBOIhqBPg");
	this.shape_2.setTransform(2.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2EFF7").s().p("EgktABPIBqhPIhqhKIAAgEMBJbAAAIAACdg");
	this.shape_3.setTransform(247.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Indicador, new cjs.Rectangle(-12.6,-9.2,496,17.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rightHeli();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,150,63), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.leftHeli();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,150,63), null);


(lib.smallcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// motion
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Aiys/ID7AAQAAAHAGAHQAFAHAAAGQgbAAhnAaQhoAagpAAQAHArARAIQAIADA2AAQA0AAAGgCQALgEA2giIBCAAIAABDQgVAshEgCQhXgJgvAGAhIK7IgNAAAjaKUQB3gRBcgoQBMghBTgDQgXAzhJAgQgqAShWAfQDIgBBbgLQhhAchYAVQiqAogRAEQBQAABPALQBgAOA/Ab");
	this.shape.setTransform(5.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AEwn/QgTgVgTgTIAAgNQAVAWARAfQAVAoAOA5QAUBPAABMIAAApQgVgrhQhRQhFhHgEggAF1pPQApBVA0BZQA4BgALAXIhDAAQhTh+hPhXAoUFTQAoCIApAzQAWAaBHAoIBDAAQgWgkgUguQgVgwgJgUQgfhCgsgKIAAhDQA1AnBLBLQArArBTBUIAAiuQgBAAg/hfQglg4g8gk");
	this.shape_1.setTransform(0.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AnllZQAmhhBHhHQA2g0BBghIAACgQgJAKgyBHQgjAxgoAdIAAApQBIgoBhg1QBHgpBEg0AF8JXQAUh6AohaQAmhZAIgtQg1AAg1gbQAABXgVBHQgdBlhGA8IgbAAIAAhPQAghQAMghQAVg2AChJ");
	this.shape_2.setTransform(-4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("AJ6AAQAAGLi6EXQi5EYkHAAQkGAAi5kYQi6kXAAmLQAAmKC6kYQC5kXEGAAQEHAAC5EXQC6EYAAGKg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#000000","#FFFFFF"],[0.357,0.498,0.627],0.1,-63.1,0,63.2).s().p("Am/KiQi6kXAAmLQAAmKC6kXQC6kXEFAAQEGAAC6EXQC6EXAAGKQAAGLi6EXQi6EYkGgBQkFABi6kYg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#000000","#FFFFFF"],[0.365,0.498,0.631],44.6,-44.6,-44.5,44.6).s().p("Am/KiQi6kXAAmLQAAmKC6kXQC6kXEFAAQEGAAC6EXQC6EXAAGKQAAGLi6EXQi6EYkGgBQkFABi6kYg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#000000","#FFFFFF"],[0.369,0.498,0.631],54.5,31.6,-54.4,-31.6).s().p("Am/KiQi6kXAAmLQAAmKC6kXQC6kXEFAAQEGAAC6EXQC6EXAAGKQAAGLi6EXQi6EYkGgBQkFABi6kYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_3}]},2).to({state:[{t:this.shape_6},{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.3,-97.3,130.7,194.7);


(lib.bigcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// motion
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EA8NgCRQCkABAlBQQANAdABAuQAAAcgDA2QAABFAbBZQAbBZAAA7QAAAogbA2IAAAMQA+gwAOiAQAFgtAAi4QAAg7ABhLQAAgzgJgcQgKgfgdgnQgRgXhHhUIAAgNQCVBJBWDjQBPDPAHEUQAAhDApgpQAUgUAIgPQAMgYAAgpQAAiBhTi3Qg1h2hhifQgEgHgEgGIAAANQADAAAFAAQAUgCAmgLQAsgOAQAAQBYAACeEsQA7BvA0B8QAiBQASA1QgShUgIhJQgKhzgHhNQgEg4g6hbQhGhtgNgkEBJ+AFEQAHAUAEAQIAAANQgGgZgFgYgEhKIgAnQBGg5A2g9QA0hBAWgbQAkgtAkgYQAtggBJgVQC6g1DvhQQgnBJhDAoQgnAXhWAjQhPAmgzA9QgRAVgQAZQgwBKglByQALhVAgg1QARgbAZgXQATgSAZgQQAsgbBbgjQB1gsBJgdIDHAAQgHAlg1AdQgjAVhPAaQheAfgbAMQg8AagSAeQgsBLgSBgQgNBGgGCD");
	this.shape.setTransform(-16,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("EgoLgLNQCpgfFrhaQFAhQCIgoIBPAAQhIAokbBdQjxBPhXA9QChgxFfg1QFKgyBRAAIBfAAQiIBAg2gFQgTgCgrgJQgxgJg9AAQh6AAiKBjQgjAYhNA/QhEA4gnAZIBCAAQBDhABagPQBCgMBrAMQCqAUAKAAQBpAGBPgaEgiLgKtQgGAEgFADIgNAAQALgEANgDgEAiyAG3QAAgUglAIQg+AMgBAAIAmAAQA+gIAAAIIAfAAQjMAFkeCZQhBAkiWBZQh1BFgxAVIAAAOQIeiSCYgiQBwgYE6g/QiIA6lNCHQl0CXg0AQIAAAbQAEAAAMAHQALAGATAAQAjAAGEhkQGEhlBmAAEAjbAG3QgGAAgEAAEAh0AG3IA+AAASwJ/QCsgsGFhRQEng9BsgO");
	this.shape_1.setTransform(-14.7,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AUFtaQDtgeDhgHQBTgDFiAAIHNAAQkgBgiZABQgqAAh7gIQh/gJhyAAQiyAAgfAJQhOAhiRAzIgMAAQANAAAzAHQA3AGASAAQBGAAEQgaQEQgaA7AAQD/AABCAMIAAAbQhHAfnPAeQnWAegJADQAQAFAXAVQAaAYABAQQAigQC8ghQC0geAtAAQCNAAB8AcQC1AoBeALEgpUAIbQGaACChgHQD0gJFzgoQglAcmJBbQmaBfjiAaQAUAAAmAHQAlAGAQAAQBPAAAIgCQA5gTCsgfIK0AAIAABCQgrAJm3A5QmoA2jWAXQgVACgTAC");
	this.shape_2.setTransform(-16.6,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("EBQ1AAAQAAHx3rFgUgXrAFfghfAAAUgheAAAgXrgFfQ3rlgAAnxQAAnwXrlgUAXrgFfAheAAAUAhfAAAAXrAFfQXrFgAAHwg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#000000","#FFFFFF"],[0.431,0.498,0.565],-517.2,0,517.3,0).s().p("Eg5JANRQ3qlgAAnxQAAnwXqlgUAXrgFfAheAAAUAhfAAAAXrAFfQXqFgAAHwQAAHx3qFgUgXrAFfghfAAAUgheAAAgXrgFfg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#000000","#FFFFFF"],[0.431,0.498,0.565],-181.2,-483.8,181.2,483.9).s().p("Eg5JANRQ3qlgAAnxQAAnwXqlgUAXrgFfAheAAAUAhfAAAAXrAFfQXqFgAAHwQAAHx3qFgUgXrAFfghfAAAUgheAAAgXrgFfg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#000000","#FFFFFF"],[0.431,0.498,0.565],133.9,-498.2,-133.8,498.2).s().p("Eg5JANRQ3qlgAAnxQAAnwXqlgUAXrgFfAheAAAUAhfAAAAXrAFfQXqFgAAHwQAAHx3qFgUgXrAFfghfAAAUgheAAAgXrgFfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_3}]},2).to({state:[{t:this.shape_6},{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.2,-122,1038.5,244);


(lib.BotonPlayPause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.7,1,1).p("AnakrIO1AAQCCAAAACCIAAFTQAACCiCAAIu1AAQiCAAAAiCIAAlTQAAiCCCAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31,123,62);


(lib.Symbol1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.base();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1063,0,0.2,0.2);

	this.instance_3 = new lib.base();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_2, new cjs.Rectangle(0,0,1267.8,162.6), null);


(lib.yReturn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.firstY = new cjs.Text("y", "18px 'Consolas'");
	this.firstY.name = "firstY";
	this.firstY.lineHeight = 23;
	this.firstY.lineWidth = 28;
	this.firstY.parent = this;
	this.firstY.setTransform(-14,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.firstY).wait(1));

}).prototype = getMCSymbolPrototype(lib.yReturn, new cjs.Rectangle(-16,-12.5,32,25.1), null);


(lib.yFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.yFinal = new cjs.Text("y", "18px 'Consolas'");
	this.yFinal.name = "yFinal";
	this.yFinal.lineHeight = 23;
	this.yFinal.lineWidth = 28;
	this.yFinal.parent = this;
	this.yFinal.setTransform(-14,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.yFinal).wait(1));

}).prototype = getMCSymbolPrototype(lib.yFinal, new cjs.Rectangle(-16,-12.5,32,25.1), null);


(lib.xReturn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.firstX = new cjs.Text("x", "18px 'Consolas'");
	this.firstX.name = "firstX";
	this.firstX.lineHeight = 23;
	this.firstX.lineWidth = 28;
	this.firstX.parent = this;
	this.firstX.setTransform(-14,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.firstX).wait(1));

}).prototype = getMCSymbolPrototype(lib.xReturn, new cjs.Rectangle(-16,-12.5,32,25.1), null);


(lib.xFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.xFinal = new cjs.Text("x", "18px 'Consolas'");
	this.xFinal.name = "xFinal";
	this.xFinal.lineHeight = 23;
	this.xFinal.lineWidth = 28;
	this.xFinal.parent = this;
	this.xFinal.setTransform(-14,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.xFinal).wait(1));

}).prototype = getMCSymbolPrototype(lib.xFinal, new cjs.Rectangle(-16,-12.5,32,25.1), null);


(lib.Total = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.result = new cjs.Text("", "21px 'Consolas'");
	this.result.name = "result";
	this.result.lineHeight = 27;
	this.result.lineWidth = 41;
	this.result.parent = this;
	this.result.setTransform(-14,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.result).wait(1));

}).prototype = getMCSymbolPrototype(lib.Total, new cjs.Rectangle(-16,-12.5,45,29.8), null);


(lib.suma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text(";    ", "18px 'Consolas'");
	this.text.lineHeight = 23;
	this.text.lineWidth = 10;
	this.text.parent = this;
	this.text.setTransform(141,-10.5);

	this.text_1 = new cjs.Text(")    ", "18px 'Consolas'");
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 10;
	this.text_1.parent = this;
	this.text_1.setTransform(131,-10.5);

	this.text_2 = new cjs.Text("y", "18px 'Consolas'");
	this.text_2.lineHeight = 23;
	this.text_2.lineWidth = 14;
	this.text_2.parent = this;
	this.text_2.setTransform(121,-10.5);

	this.text_3 = new cjs.Text("float", "italic 18px 'Consolas'", "#D695C6");
	this.text_3.lineHeight = 23;
	this.text_3.lineWidth = 51;
	this.text_3.parent = this;
	this.text_3.setTransform(62,-10.5);

	this.text_4 = new cjs.Text(",", "18px 'Consolas'");
	this.text_4.lineHeight = 23;
	this.text_4.lineWidth = 11;
	this.text_4.parent = this;
	this.text_4.setTransform(42.5,-10.5);

	this.text_5 = new cjs.Text("x", "18px 'Consolas'");
	this.text_5.lineHeight = 23;
	this.text_5.lineWidth = 14;
	this.text_5.parent = this;
	this.text_5.setTransform(32,-10.5);

	this.text_6 = new cjs.Text("float", "italic 18px 'Consolas'", "#D695C6");
	this.text_6.lineHeight = 23;
	this.text_6.lineWidth = 51;
	this.text_6.parent = this;
	this.text_6.setTransform(-27,-10.5);

	this.text_7 = new cjs.Text("(    ", "18px 'Consolas'");
	this.text_7.lineHeight = 23;
	this.text_7.lineWidth = 10;
	this.text_7.parent = this;
	this.text_7.setTransform(-37,-10.5);

	this.text_8 = new cjs.Text("suma", "18px 'Consolas'", "#60CAE1");
	this.text_8.lineHeight = 23;
	this.text_8.lineWidth = 41;
	this.text_8.parent = this;
	this.text_8.setTransform(-76,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.suma, new cjs.Rectangle(-78,-12.5,230.9,25.1), null);


(lib.segundoNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.primerNum = new cjs.Text("segundoNumero();", "18px 'Consolas'", "#60CAE1");
	this.primerNum.name = "primerNum";
	this.primerNum.lineHeight = 23;
	this.primerNum.lineWidth = 159;
	this.primerNum.parent = this;
	this.primerNum.setTransform(-76,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.primerNum).wait(1));

}).prototype = getMCSymbolPrototype(lib.segundoNum, new cjs.Rectangle(-78,-12.5,163,25.1), null);


(lib.printf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("\"", "18px 'Consolas'", "#6C99BB");
	this.text.lineHeight = 23;
	this.text.lineWidth = 10;
	this.text.parent = this;
	this.text.setTransform(163.9,-10.5);

	this.text_1 = new cjs.Text("z", "18px 'Consolas'");
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 10;
	this.text_1.parent = this;
	this.text_1.setTransform(247.3,-10.5);

	this.text_2 = new cjs.Text(",", "18px 'Consolas'");
	this.text_2.lineHeight = 23;
	this.text_2.lineWidth = 10;
	this.text_2.parent = this;
	this.text_2.setTransform(233.4,-10.5);

	this.text_3 = new cjs.Text(",", "18px 'Consolas'");
	this.text_3.lineHeight = 23;
	this.text_3.lineWidth = 10;
	this.text_3.parent = this;
	this.text_3.setTransform(205.6,-10.5);

	this.text_4 = new cjs.Text("x", "18px 'Consolas'");
	this.text_4.lineHeight = 23;
	this.text_4.lineWidth = 10;
	this.text_4.parent = this;
	this.text_4.setTransform(191.7,-10.5);

	this.text_5 = new cjs.Text(",", "18px 'Consolas'");
	this.text_5.lineHeight = 23;
	this.text_5.lineWidth = 10;
	this.text_5.parent = this;
	this.text_5.setTransform(177.8,-10.5);

	this.f3 = new cjs.Text("%f", "18px 'Consolas'", "#D695C6");
	this.f3.name = "f3";
	this.f3.lineHeight = 23;
	this.f3.lineWidth = 20;
	this.f3.parent = this;
	this.f3.setTransform(139.9,-10.5);

	this.text_6 = new cjs.Text("=", "18px 'Consolas'", "#66A76F");
	this.text_6.lineHeight = 23;
	this.text_6.lineWidth = 10;
	this.text_6.parent = this;
	this.text_6.setTransform(126,-10.5);

	this.f2 = new cjs.Text("%f", "18px 'Consolas'", "#D695C6");
	this.f2.name = "f2";
	this.f2.lineHeight = 23;
	this.f2.lineWidth = 20;
	this.f2.parent = this;
	this.f2.setTransform(101.9,-10.5);

	this.text_7 = new cjs.Text("\"", "18px 'Consolas'", "#6C99BB");
	this.text_7.lineHeight = 23;
	this.text_7.lineWidth = 10;
	this.text_7.parent = this;
	this.text_7.setTransform(-24.5,-10.5);

	this.text_8 = new cjs.Text("Suma de", "18px 'Consolas'", "#66A76F");
	this.text_8.lineHeight = 23;
	this.text_8.lineWidth = 71;
	this.text_8.parent = this;
	this.text_8.setTransform(-10.6,-10.5);

	this.text_9 = new cjs.Text(";    ", "18px 'Consolas'");
	this.text_9.lineHeight = 23;
	this.text_9.lineWidth = 10;
	this.text_9.parent = this;
	this.text_9.setTransform(271.2,-10.5);

	this.text_10 = new cjs.Text(")    ", "18px 'Consolas'");
	this.text_10.lineHeight = 23;
	this.text_10.lineWidth = 10;
	this.text_10.parent = this;
	this.text_10.setTransform(261.2,-10.5);

	this.text_11 = new cjs.Text("y", "18px 'Consolas'");
	this.text_11.lineHeight = 23;
	this.text_11.lineWidth = 10;
	this.text_11.parent = this;
	this.text_11.setTransform(219.5,-10.5);

	this.text_12 = new cjs.Text("+", "18px 'Consolas'", "#66A76F");
	this.text_12.lineHeight = 23;
	this.text_12.lineWidth = 10;
	this.text_12.parent = this;
	this.text_12.setTransform(88,-10.5);

	this.f1 = new cjs.Text("%f", "18px 'Consolas'", "#D695C6");
	this.f1.name = "f1";
	this.f1.lineHeight = 23;
	this.f1.lineWidth = 20;
	this.f1.parent = this;
	this.f1.setTransform(64,-10.5);

	this.text_13 = new cjs.Text("(    ", "18px 'Consolas'");
	this.text_13.lineHeight = 23;
	this.text_13.lineWidth = 10;
	this.text_13.parent = this;
	this.text_13.setTransform(-37,-10.5);

	this.text_14 = new cjs.Text("printf", "italic 18px 'Consolas'", "#60CAE1");
	this.text_14.lineHeight = 23;
	this.text_14.lineWidth = 60;
	this.text_14.parent = this;
	this.text_14.setTransform(-95.4,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_14},{t:this.text_13},{t:this.f1},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.f2},{t:this.text_6},{t:this.f3},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.printf, new cjs.Rectangle(-97.4,-12.5,380.6,25.1), null);


(lib.primerNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.primerNum = new cjs.Text("primerNumero();", "18px 'Consolas'", "#60CAE1");
	this.primerNum.name = "primerNum";
	this.primerNum.lineHeight = 23;
	this.primerNum.lineWidth = 152;
	this.primerNum.parent = this;
	this.primerNum.setTransform(-76,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.primerNum).wait(1));

}).prototype = getMCSymbolPrototype(lib.primerNum, new cjs.Rectangle(-78,-12.5,156,25.1), null);


(lib.lastReturn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.lastReturn, null, null);


(lib.intro2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.soldier2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.intro2, new cjs.Rectangle(0,0,450,799.5), null);


(lib.funcionEjemplo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBSIAAgNIAGAAQAUAAAAgTIAAgfQAAgUARgDQgRgCAAgWIAAgUQAAgUgUAAIgGAAIAAgNIAHAAQARAAAIAIQAHAIABARIAAAUIABAIQABADACACQADADAEABQAEABAFAAIAEAAIAAALIgEAAIgKABQgEABgDADQgBACgBADIgBAIIAAAfQAAAHgCAGQgCAGgEAEQgDAEgGADQgGACgKAAg");
	this.shape.setTransform(-377.7,138.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAwIAIgBQAFAAADgCQADgCABgEQACgCAAgDIgBgHIgCgEIgDgEIgBgGIAAgEIADgDIACgDQACgBAEgBIAGACQACABADADQACADABAEQABAEAAAFQAAAHgCAHQgDAGgFAFQgGAGgHADQgIADgKAAgAABghIgDgDIgDgEIgBgFIABgGIADgEIADgCQACgCADAAIAFACIAFACIADAEIABAGIgBAFIgDAEIgFADIgFABIgFgBg");
	this.shape_1.setTransform(-91.5,117.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_2.setTransform(-101,113.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_3.setTransform(-110.8,115.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_4.setTransform(-120.8,113.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgNIApAAIAABLIAbAAIAAANgAgFgmIgDgDIgDgEIgBgFIABgEIADgEIADgDIAFgBIADABIAEADIADAEIABAEIgBAFIgDAEIgEADIgDABIgFgBg");
	this.shape_5.setTransform(-130.4,113.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_6.setTransform(-140.5,115.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_7.setTransform(-150.3,115.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiA+IAAgNIAdAAIAAhhIgbAAIAAgNIApAAIAABuIAbAAIAAANg");
	this.shape_8.setTransform(-160.1,113.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_9.setTransform(-170.1,115.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIAsIgihXIARAAIAWA5IADAPIAFgPIAWg5IAQAAIgiBXg");
	this.shape_10.setTransform(-180,115.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D695C6").s().p("AAUAtIAAg4QAAgKgEgFQgEgEgHAAIgFAAIgFADIgHAGIgHAJIAAA5IgPAAIAAhXIANAAIABAOIAHgIIAIgEIAGgDIAHgBQANAAAIAIQAGAJAAAPIAAA5g");
	this.shape_11.setTransform(-199.8,115.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_12.setTransform(-209.3,115.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D695C6").s().p("AgcAlQgGgIAAgQIAAg5IAPAAIAAA3QAAAVAPAAIAFgBIAFgDIAHgGIAHgIIAAg6IAPAAIAABXIgNAAIAAgOIgIAIIgIAEIgGADIgHABQgNAAgIgIg");
	this.shape_13.setTransform(-219.6,115.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D695C6").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_14.setTransform(-229.9,114.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D695C6").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_15.setTransform(-239.4,115.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_16.setTransform(-248.9,115.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D695C6").s().p("AgeAwIAKgBIAJgDQAEgDACgDQADgEAAgEIgBgEIgBgDIgCgEIgBgEQAAgDACgDIADgEIADgDIAEgBQAGAAAEAFQAEAEAAAHIgCAKQgBAEgDAFIgGAJQgEAFgFADQgFADgHACQgHACgJAAgAALghIgEgCIgDgFIAAgFIABgGIADgDIAEgEIAFgBIAGABIAEADIADAEIABAGIgCAEIgDAFQgBACgDABIgFABIgGgBg");
	this.shape_17.setTransform(274.3,94);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYBLQARgRAIgTQAIgSAAgUQAAgpghghIAJgKQAoAmAAAtQAAAJgCAKQgCAKgFALQgEALgIALQgHALgMALg");
	this.shape_18.setTransform(265.3,92.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_19.setTransform(255.6,92.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgDgGgCgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_20.setTransform(245.5,90.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgNIApAAIAABLIAbAAIAAANgAgFgnIgDgCIgDgEIgBgFIABgEIADgEIADgDIAFAAIAEAAIADADIADAEIABAEIgBAFIgDAEIgDACIgEACIgFgCg");
	this.shape_21.setTransform(235.9,90.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_22.setTransform(226.3,92.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_23.setTransform(216.4,92.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcAlQgGgIAAgQIAAg5IAPAAIAAA3QAAAVAPAAIAFgBIAFgDIAHgGIAHgIIAAg6IAPAAIAABXIgNAAIAAgOIgIAIIgIAEIgGADIgHABQgNAAgIgIg");
	this.shape_24.setTransform(206.1,92.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_25.setTransform(196.1,92.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAtIgPgDIAAgOQAHADAJABIAPABQAJAAAGgDQAFgDAAgGIgBgEIgDgDIgGgEIgMgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAEgEQAFgEAHgCQAHgDAJAAIAMABIANACIAAAOIgNgDIgMgBIgJABQgDABgCACIgEADIgBAFIABAEQABACACACIAHADIALAEIANAFQAFABADADQAEAEACADQABAEAAAFQAAAFgBAEQgCADgDADIgHAFIgHADIgIACIgIABIgQgBg");
	this.shape_26.setTransform(186.4,92.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAUAtIAAg4QAAgJgEgGQgEgEgHAAIgFAAIgFADIgHAGIgHAJIAAA5IgPAAIAAhXIANAAIABAOIAIgIIAHgEIAGgDIAHgBQANAAAIAIQAGAJAAAQIAAA4g");
	this.shape_27.setTransform(176.4,92.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgTAAIgJABg");
	this.shape_28.setTransform(166.4,92.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_29.setTransform(157,92.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHA6IAAhlIgiAAIAAgOIBTAAIAAAOIgiAAIAABlg");
	this.shape_30.setTransform(146.7,91.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_31.setTransform(136.8,92.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AglA/IAAh7IAOAAIABAOQAGgJAIgDQAHgEAIAAQAIAAAFAEQAGACAEAHQAEAFACAIQACAIAAAKQAAAMgEAIQgDAJgGAFQgFAGgIADQgIADgJAAIgIgBIgIgBIAAAlgAgBgvIgGACQgDADgEAEIgHAIIAAAqIAIADIAKAAQALABAHgJQAHgHAAgRIgBgMQgBgHgCgDQgCgFgEgCQgDgDgFABIgFABg");
	this.shape_32.setTransform(127.1,94.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAcAtIAAg/IgBgGIgBgFIgCgBIgCgBIgDABIgEADIgDAHIgFAJIAAA4IgNAAIAAg9IAAgHIgBgFIgCgCIgDgBIgCABIgEADIgEAGIgFAKIAAA4IgNAAIAAhXIALAAIABAQIAFgIIADgFIAGgEIAFgBQAIAAACAFQAEAFAAAJIAEgIIAEgGQACgCAEgCQADgBADAAQAQAAAAAaIAAA/g");
	this.shape_33.setTransform(117,92.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_34.setTransform(107.1,92.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgNIApAAIAABLIAbAAIAAANgAgFgnIgDgCIgDgEIgBgFIABgEIADgEIADgDIAFAAIAEAAIADADIADAEIABAEIgBAFIgDAEIgDACIgEACIgFgCg");
	this.shape_35.setTransform(97.3,90.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_36.setTransform(86.9,91.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AglBIIA8iPIAOAAIg7CPg");
	this.shape_37.setTransform(67.3,91.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgTAAIgJABg");
	this.shape_38.setTransform(47.6,92.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_39.setTransform(37.6,90.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgNIApAAIAABLIAbAAIAAANgAgFgnIgDgCIgDgEIgBgFIABgEIADgEIADgDIAFAAIAEAAIADADIADAEIABAEIgBAFIgDAEIgDACIgEACIgFgCg");
	this.shape_40.setTransform(28,90.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_41.setTransform(18.4,92.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_42.setTransform(8.5,92.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_43.setTransform(-1.8,92.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_44.setTransform(-11.8,92.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_45.setTransform(-21.6,92.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAVA6IgRglIgEgHIgDgFIgGgCIgGgBIgHAAIAAA0IgQAAIAAhzIAfAAQAJABAHACQAHACAFAEQAFAEACAFQACAGAAAHIgCAKQgBAFgDAEQgDADgFADQgFACgGACQAFACAEADIAGAMIATAmgAgWgFIAMAAQAGAAAEgBIAHgEQADgDACgEQACgDAAgFQAAgJgGgFQgGgEgJAAIgPAAg");
	this.shape_46.setTransform(-31.1,91.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_47.setTransform(-41.5,92.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgNIApAAIAABLIAbAAIAAANgAgFgnIgDgCIgDgEIgBgFIABgEIADgEIADgDIAFAAIADAAIAEADIADAEIABAEIgBAFIgDAEIgEACIgDACIgFgCg");
	this.shape_48.setTransform(-51.2,90.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_49.setTransform(-61.3,92.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAUAtIAAg4QAAgJgEgGQgEgEgHAAIgFAAIgFADIgHAGIgHAJIAAA5IgPAAIAAhXIANAAIABAOIAHgIIAIgEIAGgDIAHgBQANAAAIAIQAGAJAAAQIAAA4g");
	this.shape_50.setTransform(-71.1,92.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_51.setTransform(-81.1,92.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_52.setTransform(-91.3,91.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgSAtIgPgDIAAgOQAHADAIABIAQABQAJAAAGgDQAFgDAAgGIgBgEIgDgDIgGgEIgMgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAEgEQAFgEAHgCQAHgDAJAAIAMABIANACIAAAOIgNgDIgMgBIgJABQgDABgCACIgEADIgBAFIABAEQABACACACIAHADIALAEIANAFQAFABADADQAEAEACADQABAEAAAFQAAAFgBAEQgCADgDADIgHAFIgHADIgIACIgIABIgQgBg");
	this.shape_53.setTransform(-100.7,92.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgNIApAAIAABLIAbAAIAAANgAgFgnIgDgCIgDgEIgBgFIABgEIADgEIADgDIAFAAIADAAIAEADIADAEIABAEIgBAFIgDAEIgEACIgDACIgFgCg");
	this.shape_54.setTransform(-110.6,90.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_55.setTransform(-120.8,90.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYABQAAgKACgKQACgLAFgLQAFgKAIgLQAHgKALgLIAJAJQghAiAAAoQAAAUAIATQAIATARAQIgJAKQgogmAAgtg");
	this.shape_56.setTransform(-130.3,92.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AglAWIAAgNIBLAAIAAANgAglgIIAAgNIBLAAIAAANg");
	this.shape_57.setTransform(-150.3,92.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_58.setTransform(-170.3,90.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_59.setTransform(-180.1,92.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_60.setTransform(-190.1,90.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgNIApAAIAABLIAbAAIAAANgAgFgnIgDgCIgDgEIgBgFIABgEIADgEIADgDIAFAAIADAAIAEADIADAEIABAEIgBAFIgDAEIgEACIgDACIgFgCg");
	this.shape_61.setTransform(-199.7,90.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_62.setTransform(-209.8,92.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_63.setTransform(-219.6,92.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgiA+IAAgMIAdAAIAAhiIgbAAIAAgNIApAAIAABvIAbAAIAAAMg");
	this.shape_64.setTransform(-229.4,90.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_65.setTransform(-239.4,92.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgIAsIgihXIARAAIAWA5IADAPIAFgPIAWg5IAQAAIgiBXg");
	this.shape_66.setTransform(-249.3,92.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgUAwIAIgBQAFAAADgCQADgDABgDQACgCAAgDIgBgGIgCgFIgDgEIgBgGIAAgEIADgEIACgCQACgBAEgBIAGACQACABADADQACACABAEQABAEAAAGQAAAHgCAHQgDAHgFAEQgGAGgHADQgIADgKAAgAABghIgDgDIgDgEIgBgFIABgGIADgEIADgDQACgBADAAIAFABIAFADIADAEIABAGIgBAFIgDAEIgFADIgFABIgFgBg");
	this.shape_67.setTransform(-121.2,71);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_68.setTransform(-130.7,67.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_69.setTransform(-140.5,69.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_70.setTransform(-150.5,67.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgiA/IAAgNIAdAAIAAg+IgbAAIAAgMIApAAIAABKIAbAAIAAANgAgFgnIgDgCIgDgEIgBgFIABgEIADgEIADgDIAFAAIADAAIAEADIADAEIABAEIgBAFIgDAEIgEACIgDABIgFgBg");
	this.shape_71.setTransform(-160.1,67.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_72.setTransform(-170.2,69.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_73.setTransform(-180,69.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgiA+IAAgMIAdAAIAAhiIgbAAIAAgNIApAAIAABvIAbAAIAAAMg");
	this.shape_74.setTransform(-189.8,67.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_75.setTransform(-199.8,69.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgIAsIgihXIARAAIAWA5IADAOIAFgOIAWg5IAQAAIgiBXg");
	this.shape_76.setTransform(-209.7,69.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_77.setTransform(-229.2,68.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D695C6").s().p("AAOAtIALg3QACgLgCgFQgDgFgHABQgFgBgGAEQgEAEgFAGQgFAHgEAHQgDAHgCAHIgGAiIgQAAIAKguIABgFIABgHIABgMIACgRIAOAAIgCAUQAGgKAIgGQAIgGAKAAQAOAAAGAIQAGAJgDARIgMA3g");
	this.shape_78.setTransform(-239.7,69.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D695C6").s().p("AgCA+QgEgCgDgEQgCgEAAgGQAAgGABgIIAGgeIABgHIgBgGIgCgCIgEgBQgGAAgGACQgGACgFAEIAAgOQAFgDAHgCQAHgCAIAAQAFAAAEACQAEABADAEQABAEABAGIgBAOIgHAdIAAAJIAAAFIADADIAEABQAGAAAFgDIAMgFIAAANQgFAEgHABQgHACgIAAQgGAAgDgBgAAFgnIgDgDIgCgDIgBgFIABgFIACgEIAEgDIAFAAIAEAAIAEADIADAEIAAAEIAAAFIgDAEIgFADIgEABIgFgBg");
	this.shape_79.setTransform(-249.3,67.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAaBSQgRAAgJgIQgGgIgBgQIAAgfIgBgHQAAgEgDgCQgDgCgEgBQgEgCgGAAIgDAAIAAgLIADAAIALgBIAHgDQABgCABgEIABgIIAAgUQAAgIACgGQACgGADgEQAEgEAGgCQAHgDAJAAIAHAAIAAANIgGAAQgUAAAAAUIAAAUQAAAVgSADQASACAAAVIAAAeQAAAUAUAAIAGAAIAAANg");
	this.shape_80.setTransform(453.3,23.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgYBLQARgRAIgTQAIgSAAgUQAAgpghgiIAJgJQAoAlAAAuQAAAJgCALQgCAKgFAKQgEALgIALQgHALgMALg");
	this.shape_81.setTransform(433.6,23.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_82.setTransform(414,23.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_83.setTransform(403.9,21.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgiA+IAAgMIAdAAIAAg+IgbAAIAAgMIApAAIAABKIAbAAIAAAMgAgFgnIgDgCIgDgEIgBgEIABgGIADgDIADgDIAFAAIADAAIAEADIADADIABAGIgBAEIgDAEIgEACIgDABIgFgBg");
	this.shape_84.setTransform(394.3,21.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_85.setTransform(384.7,23.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_86.setTransform(374.8,23.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgcAlQgGgIAAgQIAAg5IAPAAIAAA3QAAAVAPAAIAFgBIAFgDIAHgGIAHgIIAAg6IAPAAIAABXIgNAAIAAgOIgIAIIgIAEIgGADIgHABQgNAAgIgIg");
	this.shape_87.setTransform(364.5,23.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_88.setTransform(354.5,23.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSAtIgPgDIAAgOQAHADAIABIAQABQAJAAAGgDQAFgDAAgGIAAgEIgEgDIgGgEIgMgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAEgEQAFgEAHgCQAHgDAJAAIAMABIANACIAAAOIgNgDIgMgBIgJABQgDABgCACIgEADIgBAFIABAEQABACACACIAHADIALAEIANAFQAFABADADQAEAEACADQABAEAAAFQAAAFgBAEQgCADgDADIgHAFIgHADIgIACIgIABIgQgBg");
	this.shape_89.setTransform(344.8,23.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAUAtIAAg3QAAgLgEgFQgEgEgHgBIgFABIgFADIgHAFIgHAJIAAA6IgPAAIAAhXIANAAIABAOIAHgHIAIgGIAGgCIAHgBQANAAAIAJQAGAHAAARIAAA4g");
	this.shape_90.setTransform(334.8,23.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_91.setTransform(324.8,23.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_92.setTransform(315.4,23.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgHA5IAAhkIgiAAIAAgNIBTAAIAAANIgiAAIAABkg");
	this.shape_93.setTransform(305.1,22.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAHADAGAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_94.setTransform(295.2,23.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AglA/IAAh7IAOAAIABAPQAGgKAIgDQAHgEAIAAQAIAAAFADQAGAEAEAFQAEAGACAIQACAIAAALQAAALgEAIQgDAIgGAHQgFAFgIADQgIADgJAAIgIgBIgIgBIAAAlgAgBgvIgGADQgDABgEAFIgHAIIAAAqIAIADIAKABQALgBAHgHQAHgIAAgRIgBgMQgBgGgCgFQgCgEgEgCQgDgDgFAAIgFACg");
	this.shape_95.setTransform(285.5,25.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAcAtIAAg+IgBgHIgBgEIgCgDIgCAAIgDABIgEAEIgDAGIgFAKIAAA3IgNAAIAAg9IAAgIIgBgEIgCgDIgDAAIgCABIgEADIgEAGIgFALIAAA3IgNAAIAAhXIALAAIABAQIAFgIIADgGIAGgDIAFgBQAIAAACAFQAEAEAAAKIAEgIIAFgGQABgCAEgCQACgBAEAAQAQAAAAAaIAAA/g");
	this.shape_96.setTransform(275.4,23.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_97.setTransform(265.5,23.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgiA+IAAgMIAdAAIAAg+IgbAAIAAgMIApAAIAABKIAbAAIAAAMgAgFgnIgDgCIgDgEIgBgEIABgGIADgDIADgDIAFAAIADAAIAEADIADADIABAGIgBAEIgDAEIgEACIgDABIgFgBg");
	this.shape_98.setTransform(255.7,21.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_99.setTransform(245.3,22.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_100.setTransform(226.2,22.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_101.setTransform(216.1,23.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIIgBANQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_102.setTransform(206.1,23.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D695C6").s().p("AgRA8QgGgCgCgEQgDgFAAgHQAAgIACgLIARhUIAPAAIgQBUIgCAOIAAAIQABADADAAIAGABIANgBIASgGIAAAOIgRAFIgQACQgIgBgFgCg");
	this.shape_103.setTransform(196.3,21.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D695C6").s().p("Ag2BRIgEAAIADgNIAHAAQALAAAGgGQAHgFACgMIAMg+IgcAAIACgNIAdAAIADgPQAEgRAIgKQALgIASAAIALAAIAKACIgCANIgKgCIgLgBQgKAAgGAGQgGAGgCALIgEAPIAoAAIgDANIgnAAIgMA+QgCAJgDAIQgEAGgFAEQgEAEgIADQgHACgJAAIgFAAg");
	this.shape_104.setTransform(186.3,23.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgYARIAKgBIAJgDQAEgCABgEQADgDAAgEIgBgEIgBgDIgBgDIgBgFQAAgDABgCIADgFIAEgCIAEgBQAGAAAEAEQAEAEAAAHIgCAKQgBADgDAFIgGAJQgEAFgGADIgLAFQgHACgJAAg");
	this.shape_105.setTransform(164.7,27.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgBgEQgCgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_106.setTransform(156.5,23.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgDgGgCgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_107.setTransform(146.5,21.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgiA+IAAgMIAdAAIAAg+IgbAAIAAgMIApAAIAABKIAbAAIAAAMgAgFgnIgDgCIgDgEIgBgEIABgGIADgDIADgDIAFAAIAEAAIADADIADADIABAGIgBAEIgDAEIgDACIgEABIgFgBg");
	this.shape_108.setTransform(136.9,21.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_109.setTransform(127.3,23.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_110.setTransform(117.4,23.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_111.setTransform(107.1,23.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_112.setTransform(97.1,23.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_113.setTransform(87.3,23.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAVA5IgRgkIgEgHIgDgFIgGgCIgGAAIgHAAIAAAyIgQAAIAAhxIAfAAQAJAAAHACQAHACAFAEQAFAEACAGQACAFAAAHIgCAKQgBAFgDAEQgDAEgFADQgFABgGABQAFACAEAEIAGALIATAmgAgWgFIAMAAQAGAAAEgCIAHgDQADgDACgEQACgDAAgFQAAgJgGgEQgGgFgJAAIgPAAg");
	this.shape_114.setTransform(77.8,22.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgBgEQgCgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgTAAIgJABg");
	this.shape_115.setTransform(67.4,23.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgiA+IAAgMIAdAAIAAg+IgaAAIAAgMIAoAAIAABKIAbAAIAAAMgAgFgnIgDgCIgDgEIgBgEIABgGIADgDIADgDIAFAAIADAAIAEADIADADIABAGIgBAEIgDAEIgEACIgDABIgFgBg");
	this.shape_116.setTransform(57.7,21.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_117.setTransform(47.6,23.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAUAtIAAg3QAAgLgEgFQgEgEgHgBIgFABIgFADIgHAFIgHAJIAAA6IgPAAIAAhXIANAAIABAOIAIgHIAHgGIAGgCIAHgBQANAAAIAJQAGAHAAARIAAA4g");
	this.shape_118.setTransform(37.8,23.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_119.setTransform(27.8,23.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_120.setTransform(17.6,22.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgSAtIgPgDIAAgOQAHADAIABIAQABQAJAAAGgDQAFgDAAgGIgBgEIgDgDIgGgEIgMgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAEgEQAFgEAHgCQAHgDAJAAIAMABIANACIAAAOIgNgDIgMgBIgJABQgDABgCACIgEADIgBAFIABAEQABACACACIAHADIALAEIANAFQAFABADADQAEAEACADQABAEAAAFQAAAFgBAEQgCADgDADIgHAFIgHADIgIACIgIABIgQgBg");
	this.shape_121.setTransform(8.2,23.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgiA+IAAgMIAdAAIAAg+IgbAAIAAgMIApAAIAABKIAbAAIAAAMgAgFgnIgDgCIgDgEIgBgEIABgGIADgDIADgDIAFAAIADAAIAEADIADADIABAGIgBAEIgDAEIgEACIgDABIgFgBg");
	this.shape_122.setTransform(-1.7,21.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_123.setTransform(-11.9,21.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_124.setTransform(-31.2,22.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_125.setTransform(-41.3,23.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIIgBANQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_126.setTransform(-51.3,23.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D695C6").s().p("AgRA8QgGgCgCgEQgDgFAAgHQAAgIACgLIARhUIAPAAIgQBUIgCAOIAAAIQABADADAAIAGABIANgBIASgGIAAAOIgRAFIgQACQgIgBgFgCg");
	this.shape_127.setTransform(-61.1,21.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D695C6").s().p("Ag2BRIgEAAIADgNIAHAAQALAAAGgGQAHgFACgMIAMg+IgcAAIACgNIAdAAIADgPQAEgRAIgKQALgIASAAIALAAIAKACIgCANIgKgCIgLgBQgKAAgGAGQgGAGgCALIgEAPIAoAAIgDANIgnAAIgMA+QgCAJgDAIQgEAGgFAEQgEAEgIADQgHACgJAAIgFAAg");
	this.shape_128.setTransform(-71.1,23.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgYABQAAgJACgLQACgLAFgLQAFgKAIgLQAHgLALgKIAJAJQghAiAAAoQAAAUAIATQAIATARARIgJAJQgoglAAgug");
	this.shape_129.setTransform(-90.7,23.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#60CAE1").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_130.setTransform(-110.7,23.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#60CAE1").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_131.setTransform(-121,22.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#60CAE1").s().p("AAUAtIAAg3QAAgLgEgFQgEgEgHgBIgFABIgFADIgHAFIgHAJIAAA6IgPAAIAAhXIANAAIABAOIAHgHIAIgGIAGgCIAHgBQANAAAIAJQAGAHAAARIAAA4g");
	this.shape_132.setTransform(-130.5,23.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#60CAE1").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_133.setTransform(-140.4,23.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#60CAE1").s().p("AgiA+IAAgMIAdAAIAAg+IgbAAIAAgMIApAAIAABKIAbAAIAAAMgAgFgnIgDgCIgDgEIgBgEIABgGIADgDIADgDIAFAAIADAAIAEADIADADIABAGIgBAEIgDAEIgEACIgDABIgFgBg");
	this.shape_134.setTransform(-150.2,21.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#60CAE1").s().p("AAcAtIAAg+IgBgHIgBgEIgCgDIgCAAIgDABIgEAEIgDAGIgFAKIAAA3IgNAAIAAg9IAAgIIgBgEIgCgDIgDAAIgCABIgEADIgEAGIgFALIAAA3IgNAAIAAhXIALAAIABAQIAFgIIADgGIAGgDIAFgBQAIAAACAFQAEAEAAAKIAEgIIAEgGQACgCAEgCQADgBADAAQAQAAAAAaIAAA/g");
	this.shape_135.setTransform(-160.2,23.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#60CAE1").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_136.setTransform(-170.2,23.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#60CAE1").s().p("AAUAtIAAg3QAAgLgEgFQgEgEgHgBIgFABIgFADIgHAFIgHAJIAAA6IgPAAIAAhXIANAAIABAOIAHgHIAIgGIAGgCIAHgBQANAAAIAJQAGAHAAARIAAA4g");
	this.shape_137.setTransform(-180,23.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#60CAE1").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_138.setTransform(-189.9,23.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#60CAE1").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_139.setTransform(-199.4,23.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#60CAE1").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_140.setTransform(-210.1,22.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#60CAE1").s().p("AAUAtIAAg3QAAgLgEgFQgEgEgHgBIgFABIgFADIgHAFIgHAJIAAA6IgPAAIAAhXIANAAIABAOIAHgHIAIgGIAGgCIAHgBQANAAAIAJQAGAHAAARIAAA4g");
	this.shape_141.setTransform(-219.6,23.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#60CAE1").s().p("AggA5IAAhxIBBAAIAAANIgxAAIAAAjIAvAAIAAANIgvAAIAAAnIAxAAIAAANg");
	this.shape_142.setTransform(-229.4,22.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#60CAE1").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_143.setTransform(-239.6,21.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#60CAE1").s().p("AgUAsQgFgCgDgDQgEgEgCgEQgBgFAAgFQgBgOALgHQAJgHATAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAGgCIAIgCIAIgBIAIgBQAIAAAHACQAGACAFAEQADADADAGQACAFABAHIAAA8IgOAAIgBgMQgHAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIABAFIACAEIAFADIAGABQAFAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_144.setTransform(-249.4,23.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#60CAE1").s().p("AgTA8QgGgDgEgGQgEgGgBgIQgCgIAAgKQAAgLADgIQACgJAHgGQAFgGAIgDQAIgDAIAAIAJAAIAIACIAAglIAQAAIAAB7IgOAAIgBgQQgGAJgHAEQgIAFgIAAQgIAAgFgDgAgOgGQgHAHAAARQAAAQAFAIQAFAIAIAAQAFAAAHgFQAGgGAHgKIAAgoQgEgCgFAAIgJgBQgLAAgHAIg");
	this.shape_145.setTransform(-259.4,21.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#60CAE1").s().p("AgiA+IAAgMIAdAAIAAg+IgbAAIAAgMIApAAIAABKIAbAAIAAAMgAgFgnIgDgCIgDgEIgBgEIABgGIADgDIADgDIAFAAIADAAIAEADIADADIABAGIgBAEIgDAEIgEACIgDABIgFgBg");
	this.shape_146.setTransform(-269,21.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#60CAE1").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_147.setTransform(-279.1,23.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#60CAE1").s().p("AgRArQgIgDgFgGQgFgFgDgJQgCgIAAgLQAAgKACgIQADgJAGgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAFAGQAFAGADAIQACAJAAAKQAAAKgCAIQgDAJgGAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgLgdQgEADgEAEQgDAFgBAGQgCAGAAAFQAAAIACAGQACAHADAEQADAEAFACQAFACAFAAQAHAAAFgDQAFgCADgFQADgEABgGIABgNQAAgHgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_148.setTransform(-288.9,23.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#60CAE1").s().p("AgiA+IAAgMIAdAAIAAhiIgbAAIAAgNIApAAIAABvIAbAAIAAAMg");
	this.shape_149.setTransform(-298.7,21.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#60CAE1").s().p("AgOArQgJgDgFgGQgFgGgDgIQgCgJAAgLQAAgIACgIQADgJAFgGQAGgGAHgEQAHgEAJAAQAJAAAHADQAHADAGAGQAEAFADAIQACAHAAAJIAAAFIAAAEIg9AAQAAAOAIAHQAHAHANAAIAIAAIAIgBIAHgBIAFgCIAAANIgNADIgRABQgKAAgIgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQABgGgCgEQgBgFgEgEQgDgDgDgCQgFgCgGAAQgEAAgEACg");
	this.shape_150.setTransform(-308.7,23.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#60CAE1").s().p("AgIAsIgihXIARAAIAWA5IADAOIAFgOIAWg5IAQAAIgiBXg");
	this.shape_151.setTransform(-318.6,23.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_152.setTransform(-338.1,22.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_153.setTransform(-348.2,23.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIIgBANQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_154.setTransform(-358.2,23.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D695C6").s().p("AgRA8QgGgCgCgEQgDgFAAgHQAAgIACgLIARhUIAPAAIgQBUIgCAOIAAAIQABADADAAIAGABIANgBIASgGIAAAOIgRAFIgQACQgIgBgFgCg");
	this.shape_155.setTransform(-368,21.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D695C6").s().p("Ag2BRIgEAAIADgNIAHAAQALAAAGgGQAHgFACgMIAMg+IgcAAIACgNIAdAAIADgPQAEgRAIgKQALgIASAAIALAAIAKACIgCANIgKgCIgLgBQgKAAgGAGQgGAGgCALIgEAPIAoAAIgDANIgnAAIgMA+QgCAJgDAIQgEAGgFAEQgEAEgIADQgHACgJAAIgFAAg");
	this.shape_156.setTransform(-378,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.funcionEjemplo, new cjs.Rectangle(-384.9,9.3,851,163.4), null);


(lib.floatY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.floatY = new cjs.Text("float y", "italic 18px 'Consolas'", "#D695C6");
	this.floatY.name = "floatY";
	this.floatY.lineHeight = 23;
	this.floatY.lineWidth = 76;
	this.floatY.parent = this;
	this.floatY.setTransform(-76,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.floatY).wait(1));

}).prototype = getMCSymbolPrototype(lib.floatY, new cjs.Rectangle(-78,-12.5,80,25.1), null);


(lib.floatX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.floatX = new cjs.Text("float x", "italic 18px 'Consolas'", "#D695C6");
	this.floatX.name = "floatX";
	this.floatX.lineHeight = 23;
	this.floatX.lineWidth = 76;
	this.floatX.parent = this;
	this.floatX.setTransform(-76,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.floatX).wait(1));

}).prototype = getMCSymbolPrototype(lib.floatX, new cjs.Rectangle(-78,-12.5,80,25.1), null);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.soldier1();
	this.instance.parent = this;
	this.instance.setTransform(-108,-530);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cover, new cjs.Rectangle(-108,-530,600,1066), null);


(lib.coma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.coma = new cjs.Text(",", "italic 18px 'Consolas'");
	this.coma.name = "coma";
	this.coma.lineHeight = 23;
	this.coma.lineWidth = 13;
	this.coma.parent = this;
	this.coma.setTransform(-76,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.coma).wait(1));

}).prototype = getMCSymbolPrototype(lib.coma, new cjs.Rectangle(-78,-12.5,17,25.1), null);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E4418").ss(1,1,1).p("Ar6r0IZcAAQB8AABYBYQBYBYAAB8IAALFQAAB8hYBYQhYBYh8AAIy4AAQtjErAuiLQAMgkBnhqQBZhbgPgPQhYhYAAh8IAArFQAAh8BYhYQBYhYB8AAg");
	this.shape.setTransform(-3.6,-15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E4418").s().p("AyLLJQAMgkBnhqQBZhbgPgPQhYhYAAh8IAArFQAAh8BYhYQBYhYB8AAIZcAAQB8AABYBYQBYBYAAB8IAALFQAAB8hYBYQhYBYh8AAIy4AAQpQDMimAAQhOAAAPgsg");
	this.shape_1.setTransform(-3.6,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-121.3,-91.9,235.3,153.5), null);


(lib.leftHeli_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// small
	this.instance = new lib.smallcopy();
	this.instance.parent = this;
	this.instance.setTransform(450.6,-77.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.leftHeli2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-500,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// big
	this.instance_2 = new lib.bigcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-76,-185.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-595.2,-307.3,1111.2,517.4);


(lib.intro3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(614.1,417.8,0.25,0.25);

	this.instance_1 = new lib.star();
	this.instance_1.parent = this;
	this.instance_1.setTransform(550.1,417.8,0.25,0.25);

	this.instance_2 = new lib.star();
	this.instance_2.parent = this;
	this.instance_2.setTransform(486.1,417.8,0.25,0.25);

	this.instance_3 = new lib.star();
	this.instance_3.parent = this;
	this.instance_3.setTransform(422.1,417.8,0.25,0.25);

	this.instance_4 = new lib.star();
	this.instance_4.parent = this;
	this.instance_4.setTransform(358.1,417.8,0.25,0.25);

	this.instance_5 = new lib.star();
	this.instance_5.parent = this;
	this.instance_5.setTransform(294.1,417.8,0.25,0.25);

	this.instance_6 = new lib.bomb();
	this.instance_6.parent = this;
	this.instance_6.setTransform(773.1,223.8,0.4,0.4);

	this.instance_7 = new lib.bomb();
	this.instance_7.parent = this;
	this.instance_7.setTransform(107.1,223.8,0.4,0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADAsQAEgBABgCQACgEAAgFIAAhBQAAgEgCgCQgBgCgEgCIAAgIQATABALAOQAMAPAAAVQAAAWgMAOQgLAOgTACgAggAkQgLgOAAgWQAAgVALgPQALgOATgBIAAAIQgDACgCACQgBACAAAEIAABBQAAAGABADQACACADABIAAAIQgTgCgLgOg");
	this.shape.setTransform(159.9,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAyIghAAIgCAAIgFgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIABgCIADgCIABAAIABAAIADgCIAAgEIAAhVIAhAAIAABVIAAAEIADACIABAAIABAAIADACIABACQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIgFABgAAjgPIgCgEIgBgFQgBgFgDgFQgCgEgEgCIAAgJIAUAAIAAAeIgCADQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgCgBgAgogPIgBgEIAAgeIATAAIAAAJQgDACgCAEIgEALIgBAEIgBAEIgDABIgEgBg");
	this.shape_1.setTransform(150.7,79.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAyIgxhVIgCgCIgBgBIgBgBIgBgBIgDgBIgCgCIAAgCIAAgCIACgBIACgBIAFAAIAgAAIAmBCIAAAhgAgmAyIgFgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgBIABgBIABAAIACgCQAEgCABgEQACgDAAgFIAAg0IAIAOIAAAmQAAAFABADQACAEAEACIACABIABABIABACIgBADIgFABgAAbgGIAAgVQAAgFgCgEQgCgDgEgCIAAgBIgBAAIgBgBIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIASAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIgBABIgBABIgCACQgEABgBAEQgCAEAAAEIAAAhg");
	this.shape_2.setTransform(141.4,79.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIAyIAAgIQAJgBAFgFQAGgEADgJIAAgBIABAAIABgDIABAAIAEABIABAFIAAAZgAgeAyIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgCIADgBIABgBIABAAIABgCIABgDIAAhJIgBgCIgBgCIgBAAIgBgBIgDgCIgBgCQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAgAAIAABjgAATASIgCgDQgBgFgDgDQgCgDgDAAIAAgIQAEgCACgDQACgCABgEIACgEQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAFIAAAaIgBAFIgCABIgDgBgAAggTIgBgCIgBAAQgDgKgFgEQgFgFgJAAIAAgJIAeAAIAAAaIgBAEIgDAAIgCAAg");
	this.shape_3.setTransform(131.9,79.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAyIgfAAIgCAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgCIACgBIABgBIABAAIACgCIABgDIAAhJIgBgCIgCgCIgBAAIgBgBIgCgCIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIACAAIAfAAIACAAIAFABIABADIgBACIgCACIgBABIgBAAIgCACIgBACIAABIIABAEIACACIABAAIABABIACABIABACIgBADIgFABg");
	this.shape_4.setTransform(124.4,79.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuAyIghAAIgDAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgCIACgCIACAAIAAAAIADgCIABgEIAAhVIAhAAIACAAIAEABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAACIgDACIgBABIgBAAIgCACIAAACIAABIIAAAEQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAABIABAAIABABIADABIAAACQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgEABgAgNAyIgchUIgBgBIAAgBIgCgDIgEgBIgDgCIgBgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAiAAIAOApIAGgWIAAAYIgQA4gAguAyIgEgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgBIAAgBIABAAIABAAQAEgDACgEQACgEAAgFIAAgsIAHAWIAAAWQAAAFACADQABADADACIADACIACABIABACQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEABg");
	this.shape_5.setTransform(115.5,79.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEAyIgDgBIgBgDIAAgCIAAAAIACgBIAAgBIABAAIABgBIABgDIAAgCIgDgLIgTAAIACgJIAQAAIgNg6IACgHIAdAAIAUBVIAAABIAAABIABADIADACIABAAIAAAAIACABIABACQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgFABgAgoAyIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCIADgBQAFgCACgEQACgCABgGIARg7IADAPIgMAuIAAABIgBABIAAABIAAABIABAEIADADIADABIACABIABACQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgEABg");
	this.shape_6.setTransform(105.1,79.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAyIgxhVIgCgCIgBgBIgBgBIgBgBIgDgBIgCgCIAAgCIAAgCIACgBIACgBIAFAAIAgAAIAmBCIAAAhgAgmAyIgFgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgBIABgBIABAAIACgCQAEgCABgEQACgDAAgFIAAg0IAIAOIAAAmQAAAFABADQACAEAEACIACABIABABIABACIgBADIgFABgAAbgGIAAgVQAAgFgCgEQgCgDgEgCIAAgBIgBAAIgBgBIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIASAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIgBABIgBABIgCACQgEABgBAEQgCAEAAAEIAAAhg");
	this.shape_7.setTransform(95.5,79.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAIAyIAAgIQAJgBAFgFQAFgEADgJIABgBIABAAIABgDIACAAIADABIAAAFIAAAZgAgeAyIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgCIACgBIABgBIABAAIADgCIAAgDIAAhJIAAgCIgDgCIgBAAIgBgBIgCgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAfAAIAABjgAATASIgCgDQgBgFgCgDQgDgDgDAAIAAgIQAEgCACgDQACgCABgEIABgEQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAFIAAAaIgBAFIgDABIgCgBgAAggTIgCgCIAAAAQgDgKgFgEQgFgFgJAAIAAgJIAdAAIAAAaIgBAEIgCAAIgCAAg");
	this.shape_8.setTransform(86,79.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAtQgFgFgBgKIAAgNQAAgGgBgDQgCgDgEAAIAAgHQAEgBACgBQABgDAAgFIAAgTQABgFgCgCQgBgDgFgBIAAgIIACAAIAOABQAGAAAEADIABAAIABABQAGADADAFQADAGAAAGQAAAGgDAFQgCAFgDADIAAABIgEACIgDABIgEABIgFABIABAAIABAAIAHACIAFACIABABIABAAQADACACADQADAEAAAEIAAAPIAAABIABABIABAAIAAgBIABgBIABAAIABgBIAAAAIABAAIABAAIABAAIABABIACABIAAABIgBADIgCAEIgDADIgDADIgHACIgHABQgJAAgGgGgAgHAxIghAAIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgCIACgBIACgBIABAAIACgCIAAgDIAAhJIAAgCIgCgCIgBAAIgCgBIgCgCIgBgCQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAhAAIAABVIABAEIACACIABAAIABAAIACACIABACQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgEABg");
	this.shape_9.setTransform(76.5,79.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAyIghAAIgCAAIgFgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIABgCIADgCIABAAIABAAIADgCIAAgEIAAhVIAhAAIAABVIAAAEIADACIABAAIABAAIADACIABACQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIgFABgAAjgPIgCgEIgBgFQgBgFgDgFQgCgEgDgCIAAgJIATAAIAAAeIgBADQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgCgBgAgngPIgCgEIAAgeIAUAAIAAAJQgEACgCAEIgEALIgBAEIgBAEIgDABIgDgBg");
	this.shape_10.setTransform(66.7,79.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAyIgxhVIgCgCIgBgBIgBgBIgBgBIgDgBIgCgCIAAgCIAAgCIACgBIACgBIAFAAIAgAAIAmBCIAAAhgAgmAyIgFgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgBIABgBIABAAIACgCQAEgCABgEQACgDAAgFIAAg0IAIAOIAAAmQAAAFABADQACAEAEACIACABIABABIABACIgBADIgFABgAAbgGIAAgVQAAgFgCgEQgCgDgEgCIAAgBIgBAAIgBgBIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIASAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIgBABIgBABIgCACQgEABgBAEQgCAEAAAEIAAAhg");
	this.shape_11.setTransform(57.3,79.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIAyIAAgIQAJgBAFgFQAGgEACgJIABgBIAAAAIACgDIABAAIAEABIABAFIAAAZgAgeAyIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgCIADgBIABgBIABAAIABgCIABgDIAAhJIgBgCIgBgCIgBAAIgBgBIgDgCIgBgCQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAgAAIAABjgAATASIgCgDQgBgFgDgDQgCgDgDAAIAAgIQAEgCACgDQACgCABgEIACgEQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAFIAAAaIgBAFIgCABIgDgBgAAfgTIgBgCIAAAAQgDgKgFgEQgFgFgJAAIAAgJIAeAAIAAAaIgBAEIgDAAIgDAAg");
	this.shape_12.setTransform(47.8,79.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAJApQAIgBAFgFQAEgHAAgJIAAgvQAAgFgBgDQgCgEgEgCIgBgBIgCAAIAAgBIgBgCQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIAEgBIASAAIADAAIACAAIABACIABACIAAABIgBABIgBABIgDABQgDACgCAEQgBADAAAFIAAAvQAAANgHAIQgHAJgMACgAABAzIgKgBIgJgCIgCgBIgCgBQgIgEgEgFQgDgHAAgKIAAg4IgBgEIgCgCIgBAAIgBAAIgCgBIgBgDIABgDIAEgBIADAAIAgAAIACAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABIgBADIgBABIgBAAIgBAAIgCACIgBAEIAAA7IABAJIAAAEIABAAIACADIAEACIAAAKg");
	this.shape_13.setTransform(205.6,60.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAyIgfAAIgDAAIgEgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgCIACgCIABAAIABgBIADgBIABgEIAAhVIAfAAIAABVIABAEIADABIABABIABAAIACACIABACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgFABgAAigPIgCgDIAAgGQgBgFgCgEQgDgFgDgCIAAgJIATAAIAAAeIgBAEQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBgAgngPIgBgDIAAgfIATAAIAAAJQgEACgDAFIgDAKIAAAFIgCADIgDABIgDgBg");
	this.shape_14.setTransform(196.1,60.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAuQgFgGgBgKIAAgMQAAgHgBgCQgCgDgEgBIAAgHQAEgBACgCQABgCAAgFIAAgUQAAgEgBgCQgCgCgEgCIAAgIIACAAIAOABQAGABAEACIABABIABAAQAGADADAGQADAFAAAGQgBAGgCAFQgCAFgDADIAAAAIgEACIgDACIgFACIgEAAIABABIABAAIAHABIAFACIABAAIABABQADACACAEQADADAAAEIAAAPIAAACIABAAIABAAIAAAAIABgBIABgCIABAAIAAgBIABAAIABAAIAAAAIACABIACADIAAAAIgBADIgCADIgDAEIgDADIgHACIgHABQgJAAgGgFgAgHAxIghAAIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIABgCIACgCIABAAIACgBIACgBIAAgDIAAhIIAAgEIgCgCIgCAAIgBAAIgCgBIgBgDQABgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAgAAIAABVIACAEIADABIAAAAIABABIACACIAAACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgEABg");
	this.shape_15.setTransform(165.1,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAEAyIgEgBIAAgCIAAgCIAAgBIABgBIABgBIABAAIACgCIAAgCIAAgCIgDgKIgTAAIACgJIAPAAIgMg7IACgHIAcAAIAVBVIAAABIAAABIACADIACABIABAAIAAABIACACIAAACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgEABgAgnAyIgFgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIADgCQAEgCACgCQADgDACgGIAQg8IAEAQIgOAuIAAABIAAABIAAABIAAABIABAEIAEACIACABIABADIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgEABg");
	this.shape_16.setTransform(155,60.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAyIADgIQAKgBAEgEQAFgDADgIIABgCIAAgBIABgBIAAgBIACgBIABgBIADABIABAEIAAAagAgjAyIAAgIIAnhbIAgAAIAAAIIgnBbgAgggUIgBgDIAAgaIAgAAIgEAIQgHABgGAGQgFAEgCAHIgCADQAAABAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDgCg");
	this.shape_17.setTransform(146.4,60.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAIAyIAAgIQAIgBAGgEQAFgGADgIIABgBIAAgBIACgBIACgBIADABIAAAEIAAAagAgeAyIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIADgCIAAAAIABgBIACgBIABgDIAAhIIgBgEIgCgCIgBAAIAAAAIgDgBIAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAfAAIAABjgAATASIgCgDQgBgGgDgCQgBgDgEgBIAAgHQAEgCACgCQACgDABgEIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABABAAADIAAAbIgBAFIgDABIgCgBgAAfgTIgBgCIAAgBQgDgIgFgFQgGgEgIgBIAAgJIAdAAIAAAaIAAADQgBABAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAIgDgBg");
	this.shape_18.setTransform(138.1,60.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAyIghAAIgCAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIADgCIABAAIABgBIACgBIAAgDIAAhIIAAgEIgCgCIgBAAIgBAAIgDgBIAAgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIACAAIAhAAIAABVIABAEIACABIABABIABAAIACACIABACQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgEABgAADAEQAFgBABgCQACgCAAgGIAAgYQAAgEgCgDQgCgCgEgBIAAgIIABAAIACAAIACAAIAGAAIAGABQALACAGAIQAGAIAAAMQAAALgGAIQgHAHgMADIgHABIgIAAg");
	this.shape_19.setTransform(129,60.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuAyIghAAIgDAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCIACgCIACAAIAAgBIADgBIABgEIAAhVIAhAAIACAAIAEABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIAAADIgDABIgBAAIgBAAIgCACIAAAEIAABIIAAADQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIABABIABAAIADACIAAACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABgAgNAyIgchTIgBgBIAAgBIgCgEIgEgCIgDgBIgBgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIAiAAIAOApIAGgWIAAAYIgQA4gAguAyIgEgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIABgCIAAgBIABAAIABAAQAEgDACgDQACgEAAgGIAAgrIAHAVIAAAWQAAAFACADQABADADACIADABIACADIABACQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEABg");
	this.shape_20.setTransform(118.2,60.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAIAyIAAgIQAJgBAFgEQAGgGADgIIAAgBIABgBIABgBIABgBIAEABIABAEIAAAagAgeAyIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIABgCIADgCIABAAIABgBIABgBIABgDIAAhIIgBgEIgBgCIgBAAIgBAAIgDgBIgBgDQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAgAAIAABjgAATASIgCgDQgBgGgDgCQgCgDgDgBIAAgHQAEgCACgCQACgDABgEIACgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABABAAADIAAAbIgBAFIgCABIgDgBgAAggTIgBgCIgBgBQgDgIgFgFQgFgEgJgBIAAgJIAeAAIAAAaIgBADQgBABAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgCgBg");
	this.shape_21.setTransform(108,60.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAEAyIgDgBIgBgCIAAgCIAAgBIABgBIABgBIABAAIABgCIABgCIAAgCIgDgKIgTAAIACgJIAQAAIgNg7IACgHIAcAAIAVBVIAAABIAAABIABADIADABIABAAIAAABIACACIAAACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgFABgAgoAyIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIADgCQAFgCACgCQACgDABgGIARg8IAEAQIgOAuIAAABIAAABIAAABIAAABIABAEIAEACIACABIABADIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgEABg");
	this.shape_22.setTransform(77.4,60.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALAuQgGgGABgKIAAgMQAAgHgCgCQgCgDgDgBIAAgHQADgBACgCQACgCAAgFIAAgUQgBgEgBgCQgCgCgDgCIAAgIIABAAIAPABQAFABAEACIABABIABAAQAGADADAGQACAFAAAGQAAAGgCAFQgBAFgFADIAAAAIgDACIgDACIgFACIgEAAIABABIABAAIAHABIAFACIABAAIAAABQAEACACAEQACADAAAEIAAAPIAAACIACAAIABAAIAAAAIABgBIABgCIABAAIAAgBIABAAIABAAIAAAAIACABIACADIAAAAIgCADIgBADIgDAEIgDADIgGACIgIABQgKAAgFgFgAgHAxIghAAIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIACgCIABAAIABgBIADgBIAAgDIAAhIIAAgEIgDgCIgBAAIgBAAIgCgBIAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAgAAIAABVIABAEIAEABIAAAAIACABIABACIAAACQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgEABg");
	this.shape_23.setTransform(67.7,60.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAEAyIgEgBIAAgCIAAgCIAAgBIABgBIABgBIABAAIABgCIABgCIAAgCIgDgKIgTAAIACgJIAPAAIgMg7IACgHIAcAAIAVBVIAAABIAAABIABADIADABIABAAIAAABIACACIAAACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgFABgAgoAyIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIADgCQAFgCACgCQACgDABgGIARg8IAEAQIgOAuIAAABIAAABIAAABIAAABIABAEIAEACIACABIABADIABACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgEABg");
	this.shape_24.setTransform(57.6,60.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAyIghAAIgCAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIADgCIABAAIABgBIACgBIAAgDIAAhIIAAgEIgCgCIgBAAIgBAAIgDgBIAAgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIACAAIAhAAIAABVIABAEIACABIABABIABAAIACACIABACQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgEABgAADAEQAFgBABgCQACgCAAgGIAAgYQAAgEgCgDQgCgCgEgBIAAgIIABAAIACAAIACAAIAGAAIAGABQALACAGAIQAGAIAAAMQAAALgGAIQgHAHgMADIgHABIgIAAg");
	this.shape_25.setTransform(48.3,60.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAPAyIgxhVIgCgCIgBgBIgBgBIgBgBIgDgBIgCgCIAAgCIAAgCIACgBIACgBIAFAAIAgAAIAmBCIAAAhgAgmAyIgFgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgBIABgBIABgBIACgBQAEgCABgEQACgDAAgFIAAgzIAIAMIAAAnQAAAFABADQACAEAEACIACABIABABIABACIgBADIgFABgAAbgGIAAgVQAAgGgCgDQgCgDgEgCIAAAAIgBAAIgBgCIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIASAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIgBABIgBACIgCABQgEACgBADQgCAEAAAEIAAAhg");
	this.shape_26.setTransform(205.7,40.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AADA5QAEgBABgDQACgDAAgFIAAhBQAAgEgCgDQgBgCgEgBIAAgIQATABALAOQALAPAAAVQABAWgLAOQgMAOgTACgAghAxQgKgOgBgWQAAgVAMgPQAMgOASgBIAAAIQgDABgCACQgBADgBAEIAABAQABAHABACQACADADABIAAAIQgTgCgMgOgAAAgqIgBAAIgGAAIgBAAIgBgBIAAgBIAKgRIABgBIABgBIACgBIACAAIAOAAIACABIABABIAAAAIAAABIgBAAIgCABIgUAQIgBABIAAAAIAAABg");
	this.shape_27.setTransform(195.8,39);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAQAyIgfAAIgDAAIgEgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgDIACgBIABAAIABAAIADgCIABgEIAAhVIAfAAIAABVIABAEIADACIABAAIABAAIACABIABADQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgFABgAAigPIgCgEIAAgEQgBgGgCgFQgDgEgDgCIAAgJIATAAIAAAeIgBADQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBgAgngPIgBgEIAAgeIATAAIAAAJQgEACgDAEIgDALIAAAEIgCAEIgDABIgDgBg");
	this.shape_28.setTransform(186.7,40.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AADAsQAEgBABgCQACgDAAgGIAAhBQAAgEgCgCQgBgCgEgCIAAgIQATABALAOQALAPAAAVQABAWgLAOQgMAOgTACgAghAkQgKgOgBgWQAAgVAMgPQAMgOASgBIAAAIQgDACgCACQgBACgBAFIAABAQABAGABADQACACADABIAAAIQgTgCgMgOg");
	this.shape_29.setTransform(177.5,40.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AABAyIAAgIQAGAAACgCQACgDAAgGIAAgQQAAgHgCgCQgCgDgGgBIAAgGQAGgBACgDQACgDAAgGIAAgNQAAgFgCgCQgDgDgFgBIAAgIIAJAAQAQAAAJAGQAIAHAAALQAAAGgCAFQgDAFgFADIgBABIAAAAIgEACIgDABIgDAAIgEABIAEABIADAAIADAAIACABIABABIABABQAGADADAFQAEAFAAAIQAAAHgDAFQgDAGgFADIgBAAIgBABIgJADIgNABgAgkAyIgCAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgCIACgCIABAAIABAAIACgCIABgDIAAhJIgBgCIgCgCIgBAAIgBgBIgCgCIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIACAAIAgAAIAABjg");
	this.shape_30.setTransform(167.7,40.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAJAyIAAgIIAEgBIAEgBIAAAAQADgDADgEQAEgFACgGIAAgCIAAgCIACgCIACgBIADABIABAFIAAAdgAgdAyIgCAAIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIACgCIABAAIABAAIACgCIAAgDIAAhJIAAgCIgCgCIgBAAIgBgBIgCgCIgBgCQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADgBIACAAIAgAAIADAAIAFABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBADIgCABIgBABIgBAAIgDACIgBADIAABVg");
	this.shape_31.setTransform(143.8,40.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAIAyIAAgIQAJgBAFgFQAGgEACgJIABgBIAAAAIACgDIABAAIAEABIABAFIAAAZgAgeAyIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgCIADgCIABAAIABAAIABgCIABgDIAAhJIgBgCIgBgCIgBAAIgBgBIgDgCIgBgCQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAgAAIAABjgAATASIgCgDQgBgFgDgDQgCgDgDAAIAAgIQAEgCACgDQACgCABgEIACgEQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAFIAAAaIgBAFIgCABIgDgBgAAfgTIgBgCIAAAAQgDgKgFgEQgFgFgJAAIAAgJIAeAAIAAAaIgBAEIgDAAIgDAAg");
	this.shape_32.setTransform(135.1,40.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAEAyIgDgBIgBgDIAAgCIAAgBIACAAIABgBIAAAAIABgBIABgDIAAgCIgCgLIgUAAIACgJIAQAAIgNg6IACgHIAdAAIAUBVIAAABIAAABIABADIADABIAAAAIABABIACABIABACQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgFABgAgoAyIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgCIADgCQAEgBADgEQACgCABgGIARg7IADAPIgMAuIAAABIgBABIAAABIAAABIABAEIADADIADAAIACACIABACQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgEABg");
	this.shape_33.setTransform(110.8,40.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPAyIgxhVIgCgCIgBgBIgBgBIgBgBIgDgBIgCgCIAAgCIAAgCIACgBIACgBIAFAAIAgAAIAmBCIAAAhgAgmAyIgFgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgBIABgBIABgBIACgBQAEgCABgEQACgDAAgFIAAgzIAIAMIAAAnQAAAFABADQACAEAEACIACABIABABIABACIgBADIgFABgAAbgGIAAgVQAAgGgCgDQgCgDgEgCIAAAAIgBAAIgBgCIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIASAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAABIgBABIgBACIgCABQgEACgBADQgCAEAAAEIAAAhg");
	this.shape_34.setTransform(101.3,40.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AADAsQAEgBABgCQACgDAAgGIAAhBQAAgEgCgCQgBgCgEgCIAAgIQATABALAOQAMAPgBAVQAAAWgLAOQgLAOgTACgAggAkQgLgOAAgWQgBgVAMgPQALgOATgBIAAAIQgEACgBACQgCACAAAFIAABAQAAAGACADQABACAEABIAAAIQgTgCgLgOg");
	this.shape_35.setTransform(91.4,40.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQAyIgfAAIgCAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgCIACgCIABAAIABAAIACgCIABgDIAAhJIgBgCIgCgCIgBAAIgBgBIgCgCIgBgCQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEgBIACAAIAfAAIACAAIAFABIABADIgBACIgCACIgBABIgBAAIgCACIgBACIAABIIABAEIACACIABAAIABAAIACACIABACIgBADIgFABg");
	this.shape_36.setTransform(83.6,40.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAArQAGgBADgCQADgDAAgEIgBgGIgEgEIgFgCIgFgEIgMgFIgHgEQgHgFgDgFQgEgIAAgIQAAgOAKgJQAJgJAQgBIAAAIQgFACgCADQgDACAAAEQAAADACADIAFAFIADABIAGADIAGADIAFACIAEACIACABIACACIABACIABAAQAGAFACAFQADAGAAAGQAAAPgLAKQgKAKgQAAgAgJA0IgDgBIgDgBIgDgBIgEgCIgCgBIAAAAIgBAAIgBABIgBABIgCACIAAAAIgBABIgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgBgGIAAgaIABgDIADgCQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIACACIAEALIAHAJIAAABIABABIAEADIAGABIAAAJIgEAAgAAagRIgCgDQgCgJgFgGQgGgFgHgDIAAgHIACAAIADAAIAFACIAGACIADAAIABAAIABgBIABgBIACgBIABgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIABADIAAAZIgBADIgDACQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_37.setTransform(76.4,40.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAIAyIAAgIQAIgBAGgFQAGgEADgJIAAgBIABAAIABgDIABAAIAEABIABAFIAAAZgAgeAyIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgCIACgCIACAAIABAAIACgCIAAgDIAAhJIAAgCIgCgCIgBAAIgCgBIgCgCIgBgCQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAgAAIAABjgAATASIgCgDQgBgFgCgDQgCgDgEAAIAAgIQAEgCACgDQACgCABgEIABgEQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAFIAAAaIgBAFIgCABIgDgBgAAggTIgBgCIgBAAQgDgKgFgEQgGgFgIAAIAAgJIAeAAIAAAaIgCAEIgCAAIgCAAg");
	this.shape_38.setTransform(67.9,40.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AALAtQgGgFAAgKIAAgNQAAgFgCgEQgBgDgDAAIAAgHQADAAABgCQACgDAAgFIAAgTQAAgFgBgCQgBgDgEgBIAAgIIABAAIAOABQAGAAAEADIABAAIABABQAGADADAFQACAGAAAHQABAFgCAFQgDAFgEADIAAABIgDACIgEABIgDABIgFABIABAAIACAAIAGACIAFACIABABIAAAAQAEACACAEQACADAAAEIAAAPIAAABIACABIAAAAIABgBIABgBIABgBIABAAIABAAIABAAIAAAAIABAAIABAAIABACIAAABIgBADIgBADIgDAEIgEADIgFACIgIABQgJAAgGgGgAgHAxIghAAIgCAAIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgCIADgCIABAAIAAAAIACgCIABgDIAAhJIgBgCIgCgCIAAAAIgBgBIgDgCIgBgCQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgBIACAAIAhAAIAABVIAAAEIADACIABAAIACAAIABABIABADQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgFABg");
	this.shape_39.setTransform(58.4,40.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCAyIghAAIgCAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgCIADgCIABAAIABAAIACgCIAAgDIAAhJIAAgCIgCgCIgBAAIgBgBIgDgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAEgBIACAAIAhAAIAABVIABAEIACACIABAAIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgEABgAADAEQAFgBABgDQACgBAAgGIAAgXQAAgFgCgDQgCgDgEAAIAAgIIABAAIACAAIACAAIAGABIAGABQALABAGAJQAGAHAAALQAAANgGAGQgHAJgMABIgHACIgIAAg");
	this.shape_40.setTransform(48.3,40.3);

	this.instance_8 = new lib.cloud();
	this.instance_8.parent = this;
	this.instance_8.setTransform(116.7,75.7,1,1,0,0,0,-3.6,-15.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAQQgHgHAAgJQAAgJAHgHQAHgHAKABQAKgBAGAHQAHAHAAAJQAAAJgHAHQgGAIgKAAQgKAAgHgIg");
	this.shape_41.setTransform(588,385.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAYBTIhRiNIgDgEIgDgDIgBgCIgCAAIgFgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA1AAIBBBvIAAA2gAhABTQgGAAgDgBQgDgCABgDIAAgCIABgBIABgCIADgCQAHgDACgGQAEgGAAgIIAAhXIAMAWIAABBQAAAIADAGQADAFAGAEIAEACIACACIABADQAAADgDACQgCABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgGgDIgBgBIgBAAIgDgCIAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgBAFAAIAfAAQAFAAACABQACACABADIgBADIgBABIgCACIgDACQgGADgEAGQgCAGAAAIIAAA3g");
	this.shape_42.setTransform(575.8,379.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAFBeQAGgBADgEQACgFAAgKIAAhsQAAgHgCgEQgDgEgGgCIAAgNQAfABATAYQATAZAAAkQAAAlgSAXQgTAYggACgAg3BSQgSgXAAglQAAgkATgZQATgYAfgBIAAANQgGACgDAEQgCAEAAAHIAABsQAAAKACAFQADAEAGACIAAANQgggCgTgYgAgDhHIgIAAIgDAAIgBgCIAAgCIASgcIABgBIABgCIACgBIAEAAIAYAAIADABIABACIAAAAIAAABIgBABIgCACIghAZIgDACIAAABIgBABIgBAAIgBAAg");
	this.shape_43.setTransform(559.2,377.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQAAAAgBABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_44.setTransform(546.3,379.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAQBIQAMgBALgIQAJgIAFgNIACgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQADACgBAEQAAADgBAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgHACgIABgAgvBAQgTgXAAgmQAAgRAFgOQADgPAIgLQAHgKAJgHQAJgHAKgEIAKgCIAHgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQgigBgTgWgAA3gUQgDgCgBgEQgEgUgKgLQgJgMgMgCIAAAAIAAgOIABAAIABAAIACAAIACABIAHACIAKADIAFACIADAAIAAAAIABAAIACgBIADgCIABgDIACgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_45.setTransform(533.9,379.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAYBTIhSiNIgCgEIgCgDIgDgCIgCAAIgEgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAIAHAAIA2AAIA/BvIAAA2gAhBBTQgFAAgDgBQgCgCgBgDIABgCIAAgBIADgCIADgCQAFgDAEgGQACgGAAgIIAAhXIANAWIAABBQAAAIADAGQADAFAGAEIADACIADACIABADQAAADgDACQgCABgFAAgAAtgLIAAgiQAAgKgDgFQgDgGgIgDIgBgBIAAAAIgCgCIgBgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQACgBAFAAIAeAAQAFAAADABQADACgBADIAAADIgBABIgCACIgEACQgFADgEAGQgDAGAAAIIAAA3g");
	this.shape_46.setTransform(518.6,379.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgJAAgRIAAhOQAAgJgDgGQgDgFgGgDIgDgCIgCgBIgBgDIgBgCQABgDACgBQACgCAFAAIAfAAIAEAAIACABIABAAIADADIABACIAAACIgBACIgDACIgEACQgFADgDAGQgDAGAAAIIAABOQAAAXgMANQgKAOgVAEgAABBVQgJAAgIgCQgIgBgGgCIgEgBIgDgBQgOgIgGgJQgGgLAAgRIAAhfIgBgFIgDgDIgCAAIgCgBIgDgCIgBgFQAAgCACgCQACgCAFAAIADAAIA2AAIADAAQAFAAABACQADACAAACQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIgCACIgCABIgBAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBAFIAABlIABAOIABAHQACAEADACIAHADIAAAQg");
	this.shape_47.setTransform(501.5,379.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAEBTIg2AAIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAACOIABAHQABABAEABIACABIABAAIAEACQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgDACQgCABgGAAgAAgAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGQABgFACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBgAA1ghIgCgEQgEgOgKgIQgJgHgOgCIAAgOIAxAAIAAAqQAAAFgBACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_48.setTransform(486.2,379.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAGBTQgDAAgCgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIAAAAIADgDIABgEIAAgDIgFgSIghAAIAEgPIAaAAIgWhiIAEgLIAwAAIAiCOIAAACIAAABIACAFIAFADIABAAIAAAAIADADIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgEAAgAhDBTQgEAAgDgBQgDgCAAgDIABgEIAFgCQAIgEAEgFQADgEADgKIAbhjIAGAZIgWBOIAAACIAAABIAAACIAAABQAAAEABADQACADAEABIAEACIADADIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgCABgEAAg");
	this.shape_49.setTransform(464.2,379.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ABFBTIg3AAIgCAAQgFAAgCgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgEIADgCIAEgCQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIAAg4IgTAAIAAgMIATAAIAAg1IgBgFQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgEgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgFQAAgDACgCQACgBAFAAIACAAIA3AAIAEAAQAEAAACABQADACAAADQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgEADIgCAAIgCABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAADgDACQgCABgEAAgAgOBTIg2AAIgEAAQgEAAgCgBQgDgCAAgDIABgEIAEgCIACgBIABgBIAEgCIABgGIAAh5IgBgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA2AAIADAAQAFAAACABQACACAAADIgBAEIgDADIgFABIgCACIgBAGIAAB5IABAGQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAIAFACIADACIABAEQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCABgFAAg");
	this.shape_50.setTransform(447,379.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAQBIQAMgBAKgIQAKgIAFgNIACgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQADACgBAEQAAADgBAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgHACgIABgAguBAQgUgXAAgmQABgRAEgOQAEgPAHgLQAHgKAJgHQAJgHAKgEIAJgCIAIgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQgigBgSgWgAA3gUQgCgCgBgEQgGgUgJgLQgJgMgMgCIAAAAIAAgOIABAAIABAAIACAAIACABIAGACIALADIAFACIADAAIAAAAIABAAIACgBIADgCIABgDIACgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_51.setTransform(430.1,379.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_52.setTransform(417.9,379.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AADBGQAKgCACgEQADgEAAgLIAAhgQgBgKgDgFQgCgFgJgCIAAgNIANAAIAKADIAEACIAEACQAUAKAKATQAKAUAAAaQAAAagLAVQgLAUgUALIgDABIgEACIgJACIgNAAgAg8BTIgDAAQgFAAgCgBQgDgCAAgDIACgEIADgCIACgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgCAAIgDgDIgCgEQAAgDADgCQACgBAFAAIADAAIA3AAIAAClg");
	this.shape_53.setTransform(405.1,379.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AASBLQgJgIAAgRIAAgVQAAgKgDgFQgDgFgGAAIAAgNQAGgBADgDQADgEAAgJIAAggQAAgHgCgEQgDgEgHgCIAAgOIADAAIAYABQAJABAHAEIACABIACABQAJAFAFAJQAFAJAAALQAAAKgDAIQgEAIgGAFIgBABIgFADIgHADIgGADIgIABIACAAIACAAIAMADIAIAEIABAAIABABQAGAEAEAGQADAFAAAGIAAAZIABADIACABIABAAIABgBIABgCIACgBIABgBIACgBIACAAIAAAAIABAAIADACIACADIAAABIAAAAIgBAFIgEAGIgFAFIgFAGIgKADQgGACgGAAQgQAAgKgKgAgMBRIg3AAIgDAAQgFAAgCgBQgDgCAAgDIABgEIAEgCIACgBIACgBIADgDIABgEIAAh6IgBgFIgDgDIgCAAIgCgBIgEgCIgBgFQAAgCADgCQACgCAFAAIADAAIA2AAIAACOIABAGQABACAEABIACAAIACABIADADQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgDABgFAAg");
	this.shape_54.setTransform(381.4,379.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIACgLIAxAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgEAAgAhCBTQgFAAgCgBQgDgCgBgDIACgEIAEgCQAIgEADgFQAEgEADgKIAbhjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEABADQADADADABIAEACIADADIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_55.setTransform(364.6,379.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AADBTIAGgMQAQgDAIgGQAHgGAGgNIABgCIABgDIAAgBIABgCIACgDIADgBQADAAACADQABACAAAEIAAArgAg7BTIAAgMIBDiZIA0AAIAAAOIhCCXgAg2giIgBgFIAAgrIA1AAIgGAOQgNABgJAIQgJAIgDANIgDAFQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_56.setTransform(350.2,379.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_57.setTransform(338.7,379.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAOBTIAAgOIAIgBIAGgCIAAAAIAAAAQAHgEAFgIQAFgHADgLIABgDIAAgDIADgDIAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIABAGIAAAxgAgwBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIADgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgDgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAEAAQAGAAACACQACABABAEQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAABIgEACIgCABIgBAAQgFABgBACIgBAGIAACOg");
	this.shape_58.setTransform(327.6,379.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAHBTQgEAAgCgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIABAAIACgDIABgEIAAgDIgFgSIghAAIADgPIAbAAIgVhiIADgLIAwAAIAhCOIABACIAAABIACAFIAFADIAAAAIABAAIADADIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgEAAgAhDBTQgEAAgCgBQgEgCAAgDIABgEIAFgCQAIgEADgFQAEgEADgKIAbhjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEABADQACADAEABIAEACIADADIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgDAAg");
	this.shape_59.setTransform(312.7,379.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_60.setTransform(297.7,379.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AASBLQgJgIAAgRIAAgVQAAgKgDgFQgDgFgGAAIAAgNQAGgBADgDQADgEAAgJIAAggQAAgHgCgEQgDgEgHgCIAAgOIADAAIAYABQAJABAHAEIACABIACABQAJAFAFAJQAFAJAAALQAAAKgDAIQgEAIgGAFIgBABIgFADIgHADIgGADIgIABIACAAIACAAIAMADIAIAEIABAAIABABQAGAEAEAGQADAFAAAGIAAAZIABADIACABIABAAIABgBIABgCIACgBIABgBIACgBIACAAIAAAAIABAAIADACIACADIAAABIAAAAIgBAFIgEAGIgFAFIgFAGIgKADQgGACgGAAQgQAAgKgKgAgMBRIg3AAIgDAAQgFAAgCgBQgDgCAAgDIABgEIAEgCIACgBIACgBIADgDIABgEIAAh6IgBgFIgDgDIgCAAIgCgBIgEgCIgBgFQAAgCADgCQACgCAFAAIADAAIA2AAIAACOIABAGQABACAEABIACAAIACABIADADQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgDABgFAAg");
	this.shape_61.setTransform(281.8,379.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBg");
	this.shape_62.setTransform(687.4,348);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgJAAgQIAAhPQAAgJgDgGQgDgFgGgEIgDgBIgCgCIgBgBIAAgDQgBgDADgCQACgBAFAAIAfAAIAFAAIABABIABAAIACACIACADIAAACIgCACIgCABIgEADQgFADgDAGQgEAGAAAIIAABOQAAAXgLAOQgLAOgUADgAABBVQgKAAgHgBQgIgBgGgDIgEgBIgCgCQgQgHgFgKQgGgKAAgRIAAhfIAAgFIgEgCIgCgCIgCAAIgDgDIgBgDQAAgEACgCQACgBAFAAIADAAIA2AAIADAAQAFAAABABQADACAAAEQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADIgCAAIgCACQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBAFIAABmIABANIABAHQACAEADACIAHADIAAAQg");
	this.shape_63.setTransform(671.5,348.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAxBZIgCAAQgHAAgGgCQgGgCgEgEIgDAAIgCABIgGABIgIABIAAgOIADAAIACgBIABgBIAAgBIgBgBIgDgDIgCgDIgCgBIgDAAIgFgCIgBgEQAAgEACgCQADgCAEAAIAFABIAFABIABABIACABIAAhrQAAgHgDgEQgCgEgGgCIAAgNQAfABATAYQATAZAAAlQAAAVgHASQgHARgNAMIAFADIAHABIAEAAIADgBIAFgCIACACQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAABIgBABQgCAEgGAEQgHAEgIABIgCAAgAg3A6QgTgXAAgkQAAglAUgZQATgYAfgBIAAANQgHACgCAEQgDAEAAAHIAABsQAAAKADAFQACAEAHACIAAANQgggDgTgXg");
	this.shape_64.setTransform(655,348.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQAEAAABACQABACAAAGIAAAtIgBAJQgBACgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBg");
	this.shape_65.setTransform(626.8,348);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAYBTIhRiNIgDgEIgDgDIgBgCIgCAAIgFgCIgDgCIgBgEIACgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA1AAIBBBvIAAA2gAhABTQgGAAgDgBQgCgCAAgDIAAgCIABgBIABgCIADgCQAHgDACgGQAEgGAAgIIAAhXIAMAWIAABBQAAAIADAGQADAFAGAEIAEACIACACIABADQAAADgCACQgDABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgGgDIgBgBIgBAAIgDgCIAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgBAFAAIAfAAQAFAAACABQADACAAADIgBADIgBABIgCACIgDACQgHADgCAGQgDAGAAAIIAAA3g");
	this.shape_66.setTransform(611.3,348);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQAEAAABACQABACAAAGIAAAtIgBAJQgBACgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBg");
	this.shape_67.setTransform(595.3,348);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_68.setTransform(582.9,348);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgFAAQgFAAgDgBQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgCIACAAIACgBQAEgBABgBIABgHIAAiOIA1AAIAACOIABAHQABABAFABIABABIABAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCACQgDABgGAAgAhCgaQgCgCAAgEIAAgyIAgAAIAAAPQgGADgEAHQgEAHgCALIgBAHQgBAEgCACQgCACgDAAQgDAAgCgCgAA5gaQgCgCgBgEIgBgIQgCgKgEgHQgEgHgGgDIAAgPIAgAAIAAAyQAAADgCADQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_69.setTransform(570.5,348);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAYBTIhRiNIgDgEIgDgDIgBgCIgCAAIgFgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA1AAIBBBvIAAA2gAhABTQgGAAgDgBQgDgCABgDIAAgCIABgBIABgCIADgCQAHgDACgGQAEgGAAgIIAAhXIAMAWIAABBQAAAIADAGQADAFAGAEIAEACIACACIABADQAAADgDACQgCABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgGgDIgBgBIgBAAIgDgCIAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgBAFAAIAfAAQAFAAACABQACACABADIgBADIgBABIgCACIgDACQgGADgEAGQgCAGAAAIIAAA3g");
	this.shape_70.setTransform(542.1,348);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAFBeQAGgBADgEQACgFAAgKIAAhsQAAgHgCgEQgDgEgGgCIAAgNQAfABATAYQATAZAAAkQAAAlgSAXQgTAYggACgAg3BSQgSgXAAglQAAgkATgZQATgYAfgBIAAANQgGACgDAEQgCAEAAAHIAABsQAAAKACAFQADAEAGACIAAANQgggCgTgYgAgDhHIgIAAIgDAAIgBgCIAAgCIASgcIABgBIABgCIACgBIAEAAIAYAAIADABIABACIAAAAIAAABIgBABIgCACIghAZIgDACIAAABIgBABIgBAAIgBAAg");
	this.shape_71.setTransform(525.5,345.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_72.setTransform(512.6,348);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAQBIQAMgBALgIQAJgIAFgNIACgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQADACgBAEQAAADgBAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgGACgJABgAgvBAQgTgXAAgmQAAgRAFgOQAEgPAHgLQAHgKAJgHQAJgHALgEIAJgCIAHgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQgigBgTgWgAA3gUQgCgCgCgEQgEgUgKgLQgJgMgMgCIAAAAIAAgOIABAAIABAAIACAAIACABIAHACIAKADIAFACIADAAIAAAAIABAAIACgBIADgCIABgDIACgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_73.setTransform(500.2,348);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIACgLIAxAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABQgCABgFAAgAhCBTQgFAAgCgBQgDgCAAgDIABgEIAEgCQAIgEADgFQAEgEACgKIAchjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEACADQABADAEABIAEACIADADIABAEQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQgDABgEAAg");
	this.shape_74.setTransform(485.3,348);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAGBJQAFgBADgEQACgDAAgHIAAgkIgBgGQgBgCgEgBIgCAAIgCgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgEQAAgEADgBQACgBAGAAIAEAAIAsAAQAGAAADABQACABAAAEIgBADIgBACIgBABIgBABIgBABIAAAAIgDADIAAAFIAAApIgDADIgDACIgGAEIgHAEIgDACIgEACQgHADgIACIgQACgAgFBXIgGgBIgJgDIgEgBIgFgCQgUgLgKgUQgLgUAAgbQAAgbALgVQAKgVAUgLIAKgEIAJgDIAFAAIAEgBIAAAOQgGABgDAEQgCAFAAAHIAABwQAAAIACADQACADAFACIAAAOgAA1gWQgCgCAAgEIgBgBIAAgBIgCgGIgDgGIgDgHIgFgHIgCgDIgCgDQgFgFgGgCQgGgDgJAAIAAgOIASADQAJABAGADIAGACIACAAIABAAIABgCIADgEIABAAIAAgBIADgBIACgBQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQACACAAAFIAAAvQAAAFgCACQgCADgCAAQgEAAgCgCg");
	this.shape_75.setTransform(469.6,348);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_76.setTransform(457,348);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAPBTIAAgOIAHgBIAFgCIAAAAIABAAQAGgEAFgIQAGgHACgLIABgDIABgDIADgDIAEgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABIABAGIAAAxgAgwBTIgDAAQgFAAgDgBQgCgCAAgDIABgEIAFgCIACgBIABgBIADgCIABgGIAAh5IgBgFIgDgDIgBgBIgCAAIgFgDIgBgEQABgDACgCQACgBAFAAIADAAIA2AAIAEAAQAFAAADACQADABgBAEQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAABIgEACIgCABIgCAAQgDABgBACIgBAGIAACOg");
	this.shape_77.setTransform(445.9,348);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AADBTIAAgMQAIgBAEgEQAEgFAAgJIAAgcQAAgKgEgFQgEgEgIgBIAAgMQAJgBAEgEQADgFAAgLIAAgVQAAgJgEgEQgEgFgIgBIAAgNIANAAQAbAAAPAKQAOALAAATQAAAKgEAIQgEAJgJAEIgBABIgCABIgEACIgHADIgFABIgGABIAHACIAFAAIAEABIAEACIACAAIACABQAKAFAFAKQAGAJAAAMQAAALgFAJQgFAJgJAGIgBABIgCABQgHADgIACQgJABgNAAgAg9BTIgDAAQgFAAgCgBQgCgCAAgDIAAgEIAFgCIACgBIABgBIADgCIABgGIAAh5IgBgFIgDgDIgBgBIgCAAIgFgDIAAgEQAAgDACgCQACgBAFAAIADAAIA2AAIAAClg");
	this.shape_78.setTransform(430.5,348);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_79.setTransform(414.1,348);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AASBMQgJgJAAgRIAAgUQAAgLgDgFQgDgFgGgBIAAgMQAGgBADgEQADgDAAgJIAAggQAAgIgCgEQgDgDgHgDIAAgNIADAAIAYABQAJACAHADIACABIACABQAJAGAFAIQAFAJAAAMQAAAJgDAIQgEAIgGAFIgBAAIgFAFIgHACIgGACIgIACIACAAIACAAIAMADIAIADIABABIABABQAGAEAEAFQADAGAAAHIAAAYIABAEIACABIABAAIABgBIABgCIACgCIABgBIACgBIACAAIAAAAIABAAIADACIACADIAAABIAAABIgBAEIgEAGIgFAGIgFAEIgKAFQgGABgGAAQgQAAgKgJgAgMBRIg3AAIgDAAQgFAAgCgBQgDgCAAgDIABgEIAEgCIACgBIACAAIADgDIABgGIAAh5IgBgFIgDgCIgCgCIgCAAIgEgDIgBgDQAAgEADgCQACgBAFAAIADAAIA2AAIAACPIABAGQABABAEACIACAAIACAAIADACQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgDABgFAAg");
	this.shape_80.setTransform(384.8,348.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_81.setTransform(367.8,348);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgEBTIg3AAIgCAAQgFAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIAAgGIAAh5IAAgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAFAAIACAAIA3AAIAACOIABAHIAFACIABABIABAAIAFACQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgCACQgDABgFAAgAAFAGQAIgBADgFQACgDABgJIAAgnQAAgJgDgEQgEgEgHgBIAAgNIACAAIADAAIACAAIALABIAJABQATADALANQAKANAAAUQAAATgLANQgLANgTAEIgMABIgOABg");
	this.shape_82.setTransform(352.2,348);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBg");
	this.shape_83.setTransform(323.8,348);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgFAAQgFAAgDgBQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgCIACAAIACgBQAEgBABgBIABgHIAAiOIA1AAIAACOIABAHQABABAFABIABABIABAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCACQgDABgGAAgAhCgaQgCgCAAgEIAAgyIAgAAIAAAPQgGADgEAHQgEAHgCALIgBAHQgBAEgCACQgCACgDAAQgDAAgCgCgAA5gaQgCgCgBgEIgBgIQgCgKgEgHQgEgHgGgDIAAgPIAgAAIAAAyQAAADgCADQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_84.setTransform(309,348);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAABJQAJgDAFgEQAFgFAAgHQAAgFgBgEQgCgDgFgDIgIgFIgJgFIgTgJIgNgHQgKgIgGgKQgGgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgHACgFAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAKAFIAKAEIAJAFIAFADIAFACIADAEIACABIACABQAJAIADAJQAFAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgGgCIgFgDIgDAAIgBAAIgBAAIgBAAIgBAAIgCABIgDAEIAAAAIgBAAIgBACIgCAAQgEAAgCgDQgBgDAAgFIAAgsQAAgDABgDQADgCADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIACAFQADAKAFAIQAEAJAHAHIABABIABABIAIAFIAJADIAAAOIgGgBgAArgcQgCgCgBgFQgDgOgJgKQgJgJgNgEIAAgNIAFAAIAEABIAIACIAKAFIAFAAIABAAIACgBIADgEIACgCIACAAQAEAAACACIABAHIAAAoQgBAEgBADQgDACgCAAQgDAAgCgCg");
	this.shape_85.setTransform(294.5,348);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBg");
	this.shape_86.setTransform(280.2,348);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIACgLIAxAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBABQgCABgFAAgAhCBTQgFAAgCgBQgDgCAAgDIABgEIAEgCQAIgEADgFQAEgEACgKIAchjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEACADQABADAEABIAEACIADADIABAEQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_87.setTransform(686.9,316.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAOBTIAAgOIAIgBIAGgCIAAAAIAAAAQAHgEAEgIQAFgHAEgLIAAgDIABgDIADgDIAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIACAGIAAAxgAgwBTIgDAAQgFAAgDgBQgBgCAAgDIAAgEIAEgCIADgBIABgBIADgCIABgGIAAh5IgBgFIgDgDIgBgBIgDAAIgEgDIAAgEQgBgDADgCQADgBAEAAIADAAIA2AAIAEAAQAGAAACACQACABAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgEACIgCABIgCAAQgDABgCACIgBAGIAACOg");
	this.shape_88.setTransform(673,316.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAPBTIAAgOIAHgBIAFgCIAAAAIABAAQAGgEAFgIQAGgHACgLIABgDIABgDIADgDIAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABIABAGIAAAxgAgwBTIgDAAQgFAAgDgBQgCgCAAgDIABgEIAFgCIACgBIABgBIADgCIABgGIAAh5IgBgFIgDgDIgBgBIgCAAIgFgDIgBgEQABgDACgCQACgBAFAAIADAAIA2AAIAEAAQAFAAADACQADABgBAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgEACIgCABIgCAAQgDABgBACIgBAGIAACOg");
	this.shape_89.setTransform(659.7,316.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAGBTQgDAAgCgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIAAAAIADgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgWhiIADgLIAxAAIAiCOIAAACIABABIACAFIAEADIAAAAIABAAIAEADIABAEQgBAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgCABgFAAgAhCBTQgFAAgDgBQgCgCAAgDIABgEIAEgCQAIgEAEgFQADgEACgKIAchjIAGAZIgVBOIgBACIAAABIAAACIAAABQAAAEACADQACADADABIAEACIADADIABAEQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_90.setTransform(644.8,316.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgFAAQgFAAgDgBQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgCIACAAIACgBQAEgBABgBIABgHIAAiOIA1AAIAACOIABAHQABABAFABIABABIABAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCACQgDABgGAAgAhCgaQgCgCAAgEIAAgyIAgAAIAAAPQgGADgEAHQgEAHgCALIgBAHQgBAEgCACQgCACgDAAQgDAAgCgCgAA5gaQgCgCgBgEIgBgIQgCgKgEgHQgEgHgGgDIAAgPIAgAAIAAAyQAAADgCADQgCACgDAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_91.setTransform(629.6,316.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIACgLIAxAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBABQgCABgFAAgAhCBTQgFAAgCgBQgDgCAAgDIABgEIAEgCQAIgEADgFQAEgEACgKIAchjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEACADQABADAEABIAEACIADADIABAEQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_92.setTransform(614.4,316.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AACBTIAAgMQAKgBADgEQAEgFAAgJIAAgcQAAgKgEgFQgDgEgKgBIAAgMQAKgBAEgEQADgFAAgLIAAgVQAAgJgFgEQgDgFgJgBIAAgNIAOAAQAbAAAOAKQAPALAAATQAAAKgEAIQgEAJgJAEIgBABIgBABIgGACIgGADIgFABIgGABIAHACIAFAAIAEABIAEACIACAAIACABQAKAFAFAKQAFAJAAAMQAAALgEAJQgFAJgJAGIgBABIgBABQgIADgIACQgIABgNAAgAg9BTIgDAAQgFAAgCgBQgCgCAAgDIABgEIADgCIACgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgCAAIgDgDIgBgEQAAgDACgCQACgBAFAAIADAAIA2AAIAAClg");
	this.shape_93.setTransform(598.4,316.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAGBTQgDAAgCgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIAAAAIADgDIABgEIAAgDIgFgSIghAAIAEgPIAaAAIgWhiIAEgLIAwAAIAiCOIAAACIABABIABAFIAFADIABAAIAAAAIADADIABAEQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAgAhDBTQgEAAgDgBQgDgCAAgDIABgEIAFgCQAIgEAEgFQADgEADgKIAbhjIAGAZIgVBOIgBACIAAABIAAACIAAABQAAAEABADQADADADABIAEACIADADIACAEQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBABQgCABgEAAg");
	this.shape_94.setTransform(568,316.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_95.setTransform(538.2,316.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AADBGQAKgCACgEQACgEABgLIAAhgQAAgKgDgFQgEgFgIgCIAAgNIANAAIAKADIAEACIAFACQATAKAKATQAJAUAAAaQAAAagKAVQgLAUgTALIgEABIgDACIgKACIgNAAgAg8BTIgDAAQgFAAgCgBQgDgCABgDIABgEIADgCIADgBIABgBIADgCIABgGIAAh5IgBgFIgDgDIgBgBIgDAAIgDgDIgBgEQgBgDADgCQADgBAEAAIADAAIA2AAIAAClg");
	this.shape_96.setTransform(522.4,316.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIADgLIAwAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAgAhCBTQgFAAgCgBQgDgCgBgDIACgEIAEgCQAIgEADgFQAEgEADgKIAbhjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEABADQADADADABIAEACIADADIABAEQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_97.setTransform(506.3,316.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("ABMBTIg2AAIgEAAQgGAAgCgBQgDgCAAgDIABgFIAEgCIADAAIABgBQAEgBABgBIABgHIAAiOIA2AAIAEAAQAEAAADABQACACAAADQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEADIgCAAIgCABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAADgCACQgDABgEAAgAgWBTIgwiLIAAgCIAAgCIgEgGQgCgBgEgBQgEgBgCgCQgCgBAAgEQAAgDACgCQADgBAEAAIA5AAIAXBEIALglIAAApIgcBdgAhOBTQgEAAgDgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIAAgCIACgCIABAAIABgBQAIgEADgGQACgGAAgJIAAhJIAOAkIAAAlQAAAIACAFQACAFAFADIAEADIAEADIABAEQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQgDABgEAAg");
	this.shape_98.setTransform(488.7,316.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIADgLIAwAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAgAhCBTQgFAAgCgBQgDgCgBgDIACgEIAEgCQAIgEADgFQAEgEADgKIAbhjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEABADQADADADABIAEACIADADIABAEQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_99.setTransform(471.2,316.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAOBTIAAgOIAIgBIAGgCIAAAAIAAAAQAHgEAFgIQAEgHAEgLIAAgDIABgDIADgDIAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIABAGIAAAxgAgwBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIADgCIADgBIABgBIADgCIABgGIAAh5IgBgFIgDgDIgBgBIgDAAIgDgDIgBgEQgBgDADgCQADgBAEAAIADAAIA2AAIAEAAQAGAAACACQACABABAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABIgEACIgCABIgBAAQgEABgCACIgBAGIAACOg");
	this.shape_100.setTransform(457.3,316.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAOBTIAAgOIAIgBIAGgCIAAAAIAAAAQAHgEAEgIQAGgHACgLIABgDIABgDIADgDIAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABIABAGIAAAxgAgwBTIgDAAQgFAAgDgBQgCgCABgDIAAgEIAFgCIACgBIABgBIADgCIABgGIAAh5IgBgFIgDgDIgBgBIgCAAIgFgDIAAgEQAAgDACgCQACgBAFAAIADAAIA2AAIAEAAQAGAAACACQADABgBAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgEACIgCABIgCAAQgDABgBACIgCAGIAACOg");
	this.shape_101.setTransform(444,316.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAABJQAKgDAEgEQAFgFAAgHQAAgFgBgEQgDgDgEgDIgIgFIgKgFIgSgJIgMgHQgMgIgFgKQgGgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgIACgEAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAKAFIAKAEIAJAFIAFADIAFACIADAEIADABIABABQAJAIADAJQAFAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgGgCIgFgDIgDAAIgBAAIgBAAIgBAAIgBAAIgCABIgDAEIAAAAIgBAAIgCACIgBAAQgDAAgDgDQgBgDAAgFIAAgsQAAgDABgDQADgCADAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIADAFQADAKAEAIQAFAJAGAHIABABIABABIAIAFIAJADIAAAOIgGgBgAArgcQgCgCgBgFQgCgOgKgKQgJgJgNgEIAAgNIAEAAIAFABIAIACIALAFIADAAIACAAIACgBIADgEIACgCIACAAQADAAADACIABAHIAAAoQgBAEgBADQgDACgDAAQgDAAgBgCg");
	this.shape_102.setTransform(415.7,316.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBg");
	this.shape_103.setTransform(401.3,316.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_104.setTransform(371.8,316.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AADBGQAKgCACgEQADgEAAgLIAAhgQgBgKgDgFQgCgFgJgCIAAgNIANAAIAKADIAEACIAEACQAUAKAKATQAKAUAAAaQAAAagLAVQgLAUgUALIgDABIgEACIgJACIgNAAgAg8BTIgDAAQgFAAgCgBQgDgCAAgDIACgEIADgCIACgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgCAAIgDgDIgCgEQAAgDADgCQACgBAFAAIADAAIA3AAIAAClg");
	this.shape_105.setTransform(356.1,316.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAGBTQgCAAgDgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIAAAAIADgDIABgEIAAgDIgFgSIghAAIAEgPIAaAAIgWhiIAEgLIAwAAIAiCOIAAACIABABIABAFIAFADIABAAIAAAAIADADIABAEQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBABQgDABgEAAgAhDBTQgEAAgDgBQgDgCAAgDIABgEIAFgCQAIgEADgFQAEgEADgKIAbhjIAGAZIgWBOIAAACIAAABIAAACIAAABQAAAEABADQACADAEABIAEACIADADIACAEQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBABQgCABgEAAg");
	this.shape_106.setTransform(340,316.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAEBGQAIgCADgEQACgEAAgLIAAhgQAAgKgDgFQgDgFgHgCIAAgNIAMAAIAKADIAEACIAEACQAUAKAKATQAKAUAAAaQAAAagLAVQgLAUgTALIgEABIgEACIgJACIgMAAgAg8BTIgDAAQgFAAgCgBQgCgCgBgDIABgEIAFgCIABgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgBAAIgFgDIgBgEQABgDACgCQACgBAFAAIADAAIA3AAIAAClg");
	this.shape_107.setTransform(324.4,316.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAPBTIAAgOIAHgBIAFgCIAAAAIABAAQAGgEAGgIQAEgHAEgLIABgDIABgDIACgDIAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIABAGIAAAxgAgwBTIgDAAQgFAAgCgBQgCgCgBgDIACgEIADgCIACgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgCAAIgDgDIgCgEQAAgDADgCQACgBAFAAIADAAIA2AAIAEAAQAGAAACACQADABAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABIgEACIgCABIgBAAQgFABgBACIAAAGIAACOg");
	this.shape_108.setTransform(309.9,316.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_109.setTransform(294.8,316.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAABJQAKgDAFgEQAEgFAAgHQAAgFgCgEQgCgDgDgDIgIgFIgKgFIgTgJIgNgHQgKgIgHgKQgFgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgIACgEAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAGADIAFACIAEAEIABABIACABQAIAIAFAJQAEAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgFgCIgGgDIgDAAIAAAAIgBAAIgCAAIgBAAIgCABIgCAEIgBAAIAAAAIgCACIgDAAQgCAAgCgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABIACAFQADAKAFAIQAFAJAGAHIABABIABABIAHAFIAJADIAAAOIgFgBgAArgcQgCgCgBgFQgCgOgKgKQgKgJgMgEIAAgNIAFAAIAEABIAIACIAKAFIAFAAIACAAIABgBIADgEIACgCIADAAQACAAACACIABAHIAAAoQAAAEgBADQgCACgDAAQgEAAgBgCg");
	this.shape_110.setTransform(279.8,316.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAYBTIhSiNIgCgEIgCgDIgDgCIgCAAIgEgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAIAHAAIA2AAIA/BvIAAA2gAhBBTQgFAAgDgBQgCgCgBgDIABgCIAAgBIADgCIADgCQAFgDAEgGQACgGAAgIIAAhXIANAWIAABBQAAAIADAGQADAFAGAEIADACIADACIABADQAAADgDACQgCABgFAAgAAtgLIAAgiQAAgKgDgFQgDgGgIgDIgBgBIAAAAIgCgCIgBgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQACgBAFAAIAeAAQAFAAADABQADACgBADIAAADIgBABIgCACIgEACQgFADgEAGQgDAGAAAIIAAA3g");
	this.shape_111.setTransform(686.5,284.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgKAAgPIAAhPQAAgJgDgGQgDgFgGgEIgDgBIgCgCIgBgBIgBgDQABgDACgCQACgBAFAAIAfAAIAEAAIACABIABAAIADACIABADIAAACIgBACIgDABIgEADQgFADgDAGQgDAGAAAIIAABOQAAAXgMAOQgKAOgVADgAABBVQgJAAgIgBQgIgCgGgCIgEgBIgDgBQgOgIgGgKQgGgJAAgSIAAhfIgBgFIgDgDIgCgBIgCAAIgDgDIgBgDQAAgEACgCQACgBAFAAIADAAIA2AAIADAAQAFAAABABQADACAAAEQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADIgCAAIgBABQgBABgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBAFIAABmIABANIABAHQACAEADACIAHADIAAAQg");
	this.shape_112.setTransform(669.3,285.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_113.setTransform(628.3,284.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAABJQAKgDAFgEQAEgFAAgHQAAgFgCgEQgCgDgDgDIgIgFIgLgFIgSgJIgMgHQgLgIgHgKQgFgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgHACgFAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAHADIAEACIAEAEIABABIACABQAIAIAFAJQAEAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgFgBIgGgCIgFgCIgGgDIgDAAIAAAAIgBAAIgCAAIgBAAIgCABIgCAEIgBAAIAAAAIgDACIgCAAQgCAAgCgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABIACAFQADAKAFAIQAFAJAGAHIABABIABABIAHAFIAJADIAAAOIgFgBgAArgcQgCgCgBgFQgCgOgKgKQgKgJgMgEIAAgNIAEAAIAFABIAIACIAKAFIAEAAIADAAIABgBIADgEIACgCIADAAQADAAABACIABAHIAAAoQAAAEgBADQgDACgCAAQgEAAgBgCg");
	this.shape_114.setTransform(616.3,284.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgWAmQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIABgDIADgDIAHgDIAFgEIACgCIACgCIABAAIAAgBIADgEIABgDIgBgCIgCgBIgCAAIgBAAQgIgBgFgFQgFgHAAgIQAAgKAHgGQAHgHAJAAQAKAAAIAIQAHAIAAALIAAABIAAACIAAADQgCAKgHAKQgHAKgKAHIgKAGIgIABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_115.setTransform(577.5,292.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_116.setTransform(565.4,284.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AADBGQAKgCACgEQADgEAAgLIAAhgQAAgKgEgFQgCgFgJgCIAAgNIANAAIAKADIAEACIAFACQATAKAKATQAKAUAAAaQAAAagLAVQgLAUgUALIgDABIgDACIgKACIgNAAgAg8BTIgDAAQgFAAgCgBQgCgCAAgDIABgEIADgCIACgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgCAAIgDgDIgBgEQAAgDACgCQADgBAEAAIADAAIA3AAIAAClg");
	this.shape_117.setTransform(549.7,284.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAHBTQgEAAgCgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIAAAAIADgDIABgEIAAgDIgFgSIghAAIAEgPIAaAAIgWhiIAEgLIAwAAIAiCOIAAACIAAABIACAFIAFADIABAAIAAAAIADADIABAEQAAAAAAABQAAAAAAABQAAABgBAAQAAAAgBABQgDABgEAAgAhDBTQgEAAgCgBQgEgCAAgDIABgEIAFgCQAIgEADgFQAEgEADgKIAbhjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEABADQACADAEABIAEACIADADIACAEQAAAAgBABQAAAAAAABQAAABgBAAQAAAAgBABQgDABgDAAg");
	this.shape_118.setTransform(533.6,284.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAEBGQAIgCADgEQACgEAAgLIAAhgQAAgKgDgFQgDgFgHgCIAAgNIAMAAIAKADIAEACIAEACQAUAKAKATQAKAUAAAaQAAAagLAVQgLAUgUALIgDABIgEACIgJACIgMAAgAg8BTIgDAAQgFAAgCgBQgDgCAAgDIABgEIAFgCIABgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgBAAIgFgDIgBgEQAAgDADgCQADgBAEAAIADAAIA3AAIAAClg");
	this.shape_119.setTransform(518,284.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAOBTIAAgOIAIgBIAFgCIAAAAIABAAQAGgEAGgIQAEgHAEgLIABgDIABgDIACgDIAEgBQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABIABAGIAAAxgAgwBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIADgCIACgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgCAAIgDgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAEAAQAFAAADACQADABAAAEQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIgEACIgCABIgBAAQgFABgBACIgBAGIAACOg");
	this.shape_120.setTransform(503.5,284.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_121.setTransform(488.4,284.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAABJQAKgDAEgEQAFgFAAgHQAAgFgCgEQgCgDgDgDIgIgFIgKgFIgTgJIgNgHQgLgIgGgKQgFgLAAgOQAAgYAPgPQAQgPAagCIAAAOQgHACgFAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAGADIAFACIADAEIACABIACABQAIAIAFAJQAEAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgFgCIgGgDIgDAAIAAAAIgBAAIgCAAIgBAAIgCABIgDAEIAAAAIAAAAIgCACIgDAAQgDAAgBgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQACABAAAEQADAKAFAIQAEAJAHAHIABABIABABIAHAFIAJADIAAAOIgFgBgAArgcQgCgCgBgFQgCgOgKgKQgKgJgMgEIAAgNIAFAAIAEABIAIACIAKAFIAFAAIACAAIABgBIADgEIACgCIADAAQACAAACACIACAHIAAAoQAAAEgCADQgCACgDAAQgDAAgCgCg");
	this.shape_122.setTransform(473.4,284.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAYBTIhSiNIgCgEIgDgDIgCgCIgCAAIgEgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAIAHAAIA2AAIBABvIAAA2gAhBBTQgFAAgDgBQgCgCAAgDIAAgCIAAgBIACgCIAEgCQAFgDAEgGQACgGAAgIIAAhXIANAWIAABBQAAAIADAGQADAFAGAEIADACIADACIABADQAAADgDACQgCABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgHgDIAAgBIgBAAIgCgCIgBgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQACgBAFAAIAfAAQAEAAADABQACACAAADIAAADIgBABIgCACIgEACQgGADgDAGQgCAGAAAIIAAA3g");
	this.shape_123.setTransform(430.7,284.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgKAAgPIAAhPQAAgJgDgGQgDgFgHgEIgCgBIgBgCIgCgBIAAgDQgBgDADgCQACgBAGAAIAeAAIAFAAIACABIAAAAIACACIABADIAAACIgBACIgCABIgEADQgGADgCAGQgEAGAAAIIAABOQAAAXgLAOQgKAOgVADgAABBVQgKAAgHgBQgHgCgIgCIgDgBIgCgBQgQgIgFgKQgGgJAAgSIAAhfIAAgFIgEgDIgCgBIgBAAIgEgDIgCgDQAAgEADgCQACgBAEAAIAEAAIA3AAIACAAQAFAAABABQADACAAAEQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADIgCAAIgCABQAAABgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIAAAFIAABmIAAANIABAHQACAEADACIAHADIAAAQg");
	this.shape_124.setTransform(413.5,285.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIAAAAIADgDIABgEIAAgDIgFgSIghAAIAEgPIAaAAIgWhiIAEgLIAwAAIAhCOIABACIAAABIACAFIAFADIABAAIAAAAIADADIABAEQAAAAAAABQAAAAAAABQAAABgBAAQAAAAgBABQgDABgEAAgAhDBTQgEAAgCgBQgEgCAAgDIABgEIAFgCQAIgEADgFQAEgEADgKIAbhjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEABADQACADAEABIAEACIADADIACAEQAAAAgBABQAAAAAAABQAAABgBAAQAAAAgBABQgCABgEAAg");
	this.shape_125.setTransform(369.8,284.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgFAAQgFAAgDgBQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgCIACAAIACgBQAEgBABgBIABgHIAAiOIA1AAIAACOIABAHQABABAFABIABABIABAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCACQgDABgGAAgAhCgaQgCgCAAgEIAAgyIAgAAIAAAPQgGADgEAHQgEAHgCALIgBAHQgBAEgCACQgCACgDAAQgDAAgCgCgAA5gaQgCgCgBgEIgBgIQgCgKgEgHQgEgHgGgDIAAgPIAgAAIAAAyQAAADgCADQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_126.setTransform(354.6,284.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgKAAgPIAAhPQAAgJgDgGQgDgFgGgEIgCgBIgDgCIgBgBIgBgDQABgDACgCQACgBAFAAIAfAAIAEAAIACABIABAAIADACIABADIAAACIgBACIgDABIgEADQgFADgDAGQgEAGABAIIAABOQAAAXgMAOQgKAOgVADgAABBVQgJAAgIgBQgIgCgGgCIgEgBIgDgBQgOgIgGgKQgGgJAAgSIAAhfIgBgFIgDgDIgBgBIgDAAIgDgDIgBgDQgBgEADgCQACgBAFAAIADAAIA2AAIAEAAQAEAAABABQADACAAAEQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADIgCAAIgBABQgBABgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBAFIAABmIABANIABAHQADAEACACIAHADIAAAQg");
	this.shape_127.setTransform(338.7,285.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAQBIQAMgBALgIQAKgIADgNIADgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAAEQABADgCAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgHACgIABgAgvBAQgSgXgBgmQAAgRAFgOQADgPAIgLQAHgKAJgHQAJgHALgEIAJgCIAHgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQghgBgUgWgAA3gUQgCgCgCgEQgEgUgKgLQgJgMgMgCIAAAAIAAgOIABAAIABAAIACAAIACABIAHACIAKADIAFACIADAAIABAAIAAAAIACgBIACgCIACgDIACgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_128.setTransform(322.8,284.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_129.setTransform(308.3,284.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgEBVIgBAAIgCAAIgEAAIAAgPQAGgCABgDQACgEAAgHIAAhzIgBgFQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgFgCIgFgCIgBgEQAAgDADgCQADgCAFAAIAEAAIA2AAIADAAQAFAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAABIgBADIgEADIgBABIgCAAIgEADIgBAFIAABmQAAAVgOAMQgOAMgaAAIgBAAgAgjBRQgFgCgFgDQgIgGgFgIQgFgHAAgKQAAgLAIgIQAIgIAKAAQALAAAHAHQAHAIAAAKQAAAGgEAGQgEAFgIAEIgBACIgBABIAAAAIABABIADABIAFABIAAAOIgOgDg");
	this.shape_130.setTransform(293.8,285.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBg");
	this.shape_131.setTransform(280.2,284.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBg");
	this.shape_132.setTransform(687.4,253.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgKAAgQIAAhPQAAgIgDgFQgDgHgGgCIgDgCIgCgCIgBgCIAAgCQgBgDADgCQACgBAFAAIAfAAIAFAAIABAAIABABIACADIACACIAAACIgCACIgCACIgEACQgFADgDAGQgEAGAAAHIAABPQAAAWgLAOQgLAOgUAEgAABBVQgKAAgHgCQgIgBgGgCIgEgBIgCgCQgQgGgFgLQgGgJAAgSIAAhfIAAgFIgEgCIgCgBIgCgBIgDgDIgBgEQAAgCACgDQACgBAFAAIADAAIA2AAIADAAQAFAAABABQADADAAACQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADIgCABIgCABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBAFIAABlIABAOIABAHQACAEADACIAHADIAAAQg");
	this.shape_133.setTransform(671.5,253.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAxBZIgCAAQgHAAgGgCQgGgCgEgEIgDAAIgCABIgGABIgIABIAAgOIADAAIACgBIABgBIAAgBIgBgBIgDgDIgCgDIgCgBIgDAAIgFgCIgBgEQAAgEACgCQADgCAEAAIAFABIAFABIABABIACABIAAhrQAAgHgDgEQgCgEgGgCIAAgNQAfABATAYQATAZAAAlQAAAVgHASQgHARgNAMIAFADIAHABIAEAAIADgBIAFgCIACACQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAABIgBABQgCAEgGAEQgHAEgIABIgCAAgAg3A6QgTgXAAgkQAAglAUgZQATgYAfgBIAAANQgHACgCAEQgDAEAAAHIAABsQAAAKADAFQACAEAHACIAAANQgggDgTgXg");
	this.shape_134.setTransform(655,253.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAABJQAKgDAEgEQAFgFAAgHQAAgFgCgEQgCgDgDgDIgIgFIgKgFIgTgJIgNgHQgLgIgGgKQgFgLAAgOQAAgYAPgPQAQgPAagCIAAAOQgHACgFAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAGADIAFACIADAEIACABIACABQAIAIAFAJQAEAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgFgCIgGgDIgDAAIAAAAIgBAAIgCAAIgBAAIgCABIgDAEIAAAAIAAAAIgCACIgDAAQgDAAgBgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQACABAAAEQADAKAFAIQAEAJAHAHIABABIABABIAHAFIAJADIAAAOIgFgBgAArgcQgCgCgBgFQgCgOgKgKQgKgJgMgEIAAgNIAFAAIAEABIAIACIAKAFIAFAAIACAAIABgBIADgEIACgCIADAAQACAAACACIACAHIAAAoQAAAEgCADQgCACgDAAQgDAAgCgCg");
	this.shape_135.setTransform(618.8,253.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgEgBg");
	this.shape_136.setTransform(604.4,253.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAYBTIhRiNIgDgEIgDgDIgCgCIgBAAIgFgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA1AAIBBBvIAAA2gAhBBTQgFAAgDgBQgDgCABgDIAAgCIABgBIABgCIADgCQAHgDACgGQAEgGAAgIIAAhXIAMAWIAABBQAAAIADAGQADAFAGAEIAEACIACACIABADQAAADgDACQgCABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgGgDIgBgBIgBAAIgDgCIAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgBAFAAIAfAAQAFAAACABQACACABADIgBADIgBABIgCACIgEACQgFADgEAGQgCAGAAAIIAAA3g");
	this.shape_137.setTransform(588.9,253.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_138.setTransform(572.3,253.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_139.setTransform(559.4,253.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAQBIQAMgBAKgIQAKgIAFgNIACgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAAEQAAADgBAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgGACgJABgAgvBAQgTgXAAgmQAAgRAFgOQADgPAIgLQAHgKAJgHQAJgHAKgEIAJgCIAIgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQgigBgTgWgAA3gUQgCgCgCgEQgEgUgKgLQgJgMgMgCIAAAAIAAgOIABAAIABAAIACAAIACABIAHACIAKADIAFACIADAAIABAAIAAAAIACgBIADgCIABgDIACgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_140.setTransform(547,253.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAYBTIhSiNIgCgEIgCgDIgDgCIgCAAIgEgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAIAHAAIA2AAIA/BvIAAA2gAhBBTQgFAAgDgBQgCgCgBgDIABgCIAAgBIADgCIADgCQAFgDAEgGQACgGAAgIIAAhXIANAWIAABBQAAAIADAGQADAFAGAEIADACIADACIABADQAAADgDACQgCABgFAAgAAtgLIAAgiQAAgKgDgFQgDgGgIgDIgBgBIAAAAIgCgCIgBgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQACgBAFAAIAeAAQAFAAADABQADACgBADIAAADIgBABIgCACIgEACQgFADgEAGQgDAGAAAIIAAA3g");
	this.shape_141.setTransform(531.7,253.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgKAAgQIAAhPQAAgIgDgFQgDgHgGgCIgDgCIgCgCIgBgCIgBgCQABgDACgCQACgBAFAAIAfAAIAEAAIACAAIABABIADADIABACIAAACIgBACIgDACIgEACQgFADgDAGQgDAGAAAHIAABPQAAAWgMAOQgKAOgVAEgAABBVQgJAAgIgCQgIgBgGgCIgEgBIgDgCQgOgGgGgLQgGgJAAgSIAAhfIgBgFIgDgCIgCgBIgCgBIgDgDIgBgEQAAgCACgDQACgBAFAAIADAAIA2AAIADAAQAFAAABABQADADAAACQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADIgCABIgBABQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBAFIAABlIABAOIABAHQACAEADACIAHADIAAAQg");
	this.shape_142.setTransform(514.5,253.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAEBTIg2AAIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAACOIABAHQABABAEABIACABIABAAIAEACQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgDACQgCABgGAAgAAgAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGQABgFACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBgAA1ghIgCgEQgEgOgKgIQgJgHgOgCIAAgOIAxAAIAAAqQAAAFgBACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_143.setTransform(499.2,253.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAABJQAJgDAGgEQAEgFAAgHQAAgFgCgEQgBgDgFgDIgHgFIgLgFIgSgJIgMgHQgMgIgFgKQgGgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgHACgFAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAHADIAEACIAEAEIACABIABABQAIAIAEAJQAFAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgFgBIgGgCIgFgCIgGgDIgDAAIAAAAIgCAAIgBAAIgBAAIgCABIgCAEIgBAAIAAAAIgDACIgCAAQgCAAgCgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQABABACAEQADAKAEAIQAFAJAGAHIABABIABABIAHAFIAKADIAAAOIgGgBgAArgcQgCgCgBgFQgDgOgJgKQgKgJgMgEIAAgNIAEAAIAFABIAIACIALAFIADAAIADAAIABgBIADgEIACgCIADAAQADAAABACIABAHIAAAoQABAEgCADQgDACgDAAQgCAAgCgCg");
	this.shape_144.setTransform(463.7,253.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAGBTQgCAAgDgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIAAAAIADgDIABgEIAAgDIgFgSIghAAIAEgPIAaAAIgWhiIAEgLIAwAAIAiCOIAAACIAAABIACAFIAFADIABAAIAAAAIADADIABAEQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQgDABgEAAgAhDBTQgEAAgDgBQgDgCAAgDIABgEIAFgCQAIgEADgFQAEgEADgKIAbhjIAGAZIgVBOIgBACIAAABIAAACIAAABQAAAEABADQACADAEABIAEACIADADIACAEQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABQgCABgEAAg");
	this.shape_145.setTransform(448.9,253.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAPBTIAAgOIAHgBIAFgCIAAAAIABAAQAGgEAGgIQAEgHAEgLIABgDIABgDIACgDIAEgBQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABIABAGIAAAxgAgwBTIgDAAQgFAAgCgBQgCgCgBgDIACgEIADgCIACgBIACgBIAEgCIAAgGIAAh5IAAgFIgEgDIgCgBIgCAAIgDgDIgCgEQAAgDADgCQACgBAFAAIADAAIA2AAIAEAAQAGAAACACQADABAAAEQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABIgEACIgCABIgBAAQgFABAAACIgBAGIAACOg");
	this.shape_146.setTransform(435,253.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_147.setTransform(398.7,253.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("ABNBTIg3AAIgFAAQgFAAgDgBQgCgCAAgDIABgFIAFgCIACAAIABgBQAEgBABgBIABgHIAAiOIA3AAIADAAQAFAAACABQACACAAADQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEADIgCAAIgCABQgBABAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAADgCACQgCABgFAAgAgWBTIgwiLIAAgCIgBgCIgDgGQgCgBgEgBQgEgBgBgCQgDgBAAgEQAAgDADgCQACgBAEAAIA5AAIAXBEIALglIAAApIgcBdgAhOBTQgEAAgCgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIAAgCIACgCIABAAIABgBQAIgEACgGQADgGAAgJIAAhJIAOAkIAAAlQAAAIABAFQADAFAFADIAEADIAEADIABAEQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgCABgFAAg");
	this.shape_148.setTransform(380.9,253.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_149.setTransform(363.2,253.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAQBIQANgBAKgIQAKgIADgNIADgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACABAEQAAADgCAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgHACgIABgAgvBAQgSgXgBgmQAAgRAFgOQADgPAJgLQAGgKAJgHQAKgHAKgEIAJgCIAHgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQghgBgUgWgAA3gUQgDgCgBgEQgEgUgKgLQgKgMgLgCIAAAAIAAgOIABAAIABAAIACAAIADABIAGACIAKADIAFACIADAAIABAAIAAAAIACgBIACgCIABgDIADgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgBACgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_150.setTransform(347.9,253.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAYBTIhSiNIgCgEIgCgDIgCgCIgDAAIgEgCIgDgCIgBgEIACgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA1AAIBABvIAAA2gAhABTQgGAAgDgBQgDgCAAgDIABgCIABgBIACgCIACgCQAHgDACgGQADgGAAgIIAAhXIANAWIAABBQAAAIADAGQADAFAGAEIAEACIACACIABADQAAADgCACQgDABgFAAgAAtgLIAAgiQAAgKgDgFQgDgGgIgDIgBgBIAAAAIgCgCIgBgEQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQACgBAFAAIAeAAQAFAAADABQACACAAADIAAADIgBABIgCACIgDACQgHADgCAGQgEAGAAAIIAAA3g");
	this.shape_151.setTransform(311.4,253.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_152.setTransform(294.8,253.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAABJQAKgDAFgEQAEgFAAgHQAAgFgCgEQgCgDgDgDIgIgFIgKgFIgTgJIgNgHQgKgIgHgKQgFgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgIACgEAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAGADIAFACIAEAEIABABIACABQAIAIAFAJQAEAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgFgCIgGgDIgDAAIAAAAIgBAAIgCAAIgBAAIgCABIgCAEIgBAAIAAAAIgCACIgDAAQgCAAgCgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQABABABAEQADAKAFAIQAFAJAGAHIABABIABABIAHAFIAJADIAAAOIgFgBgAArgcQgCgCgBgFQgCgOgKgKQgKgJgMgEIAAgNIAFAAIAEABIAIACIAKAFIAFAAIACAAIABgBIADgEIACgCIADAAQACAAACACIABAHIAAAoQAAAEgBADQgCACgDAAQgEAAgBgCg");
	this.shape_153.setTransform(279.8,253.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAYBTIhRiNIgDgEIgDgDIgBgCIgCAAIgFgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA1AAIBBBvIAAA2gAhABTQgGAAgDgBQgDgCABgDIAAgCIABgBIABgCIADgCQAHgDACgGQAEgGAAgIIAAhXIAMAWIAABBQAAAIADAGQADAFAGAEIAEACIACACIABADQAAADgDACQgCABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgGgDIgBgBIgBAAIgDgCIAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgBAFAAIAfAAQAEAAADABQACACABADIgBADIgBABIgCACIgDACQgGADgEAGQgCAGAAAIIAAA3g");
	this.shape_154.setTransform(686.5,221.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAFBeQAGgBADgEQACgFAAgKIAAhsQAAgHgCgEQgDgEgGgCIAAgNQAfABATAYQATAZAAAkQAAAlgSAXQgTAYggACgAg3BSQgSgXAAglQAAgkATgZQATgYAfgBIAAANQgGACgDAEQgCAEAAAHIAABsQAAAKACAFQADAEAGACIAAANQgggCgTgYgAgDhHIgIAAIgDAAIgBgCIAAgCIASgcIABgBIABgCIACgBIAEAAIAYAAIADABIABACIAAAAIAAABIgBABIgCACIghAZIgDACIAAABIgBABIgBAAIgBAAg");
	this.shape_155.setTransform(669.9,219.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQAAAAgBABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_156.setTransform(657,221.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAQBIQAMgBALgIQAJgIAFgNIACgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQADACgBAEQAAADgBAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgGACgJABgAgvBAQgTgXAAgmQAAgRAFgOQADgPAIgLQAHgKAJgHQAJgHAKgEIAKgCIAHgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQgigBgTgWgAA3gUQgDgCgBgEQgEgUgKgLQgJgMgMgCIAAAAIAAgOIABAAIABAAIACAAIACABIAHACIAKADIAFACIADAAIAAAAIABAAIACgBIADgCIABgDIACgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_157.setTransform(644.6,221.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIACgLIAxAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgCABgFAAgAhCBTQgFAAgCgBQgDgCAAgDIABgEIAEgCQAIgEADgFQAEgEACgKIAchjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEACADQABADAEABIAEACIADADIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_158.setTransform(629.7,221.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("ABNBTIg3AAIgFAAQgFAAgDgBQgCgCAAgDIABgFIAEgCIADAAIABgBQAEgBABgBIABgHIAAiOIA3AAIADAAQAEAAADABQACACAAADQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAIgEADIgCAAIgCABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQgDABgEAAgAgWBTIgwiLIAAgCIgBgCIgDgGQgCgBgEgBQgEgBgCgCQgCgBAAgEQAAgDACgCQADgBAEAAIA5AAIAXBEIALglIAAApIgcBdgAhOBTQgEAAgCgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIAAgCIACgCIABAAIABgBQAIgEADgGQACgGAAgJIAAhJIAOAkIAAAlQAAAIACAFQACAFAFADIAEADIAEADIABAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgCABgFAAg");
	this.shape_159.setTransform(612.1,221.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAHBTQgDAAgDgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIAAgBIACgBIADgCIAAAAIABAAIACgDIAAgEIAAgDIgDgSIgiAAIADgPIAbAAIgVhiIACgLIAxAAIAhCOIABACIAAABIADAFIAEADIAAAAIABAAIAEADIABAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgCABgFAAgAhCBTQgFAAgCgBQgDgCAAgDIABgEIAEgCQAIgEADgFQAEgEACgKIAchjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEACADQABADAEABIAEACIADADIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgEAAg");
	this.shape_160.setTransform(594.6,221.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AASBMQgJgKAAgQIAAgVQAAgKgDgFQgDgFgGgBIAAgMQAGgBADgEQADgDAAgJIAAggQAAgIgCgDQgDgEgHgDIAAgNIADAAIAYABQAJACAHADIACABIACABQAJAGAFAIQAFAJAAALQAAAKgDAIQgEAIgGAFIgBABIgFADIgHADIgGADIgIABIACAAIACAAIAMADIAIAEIABAAIABABQAGAEAEAFQADAGAAAGIAAAZIABAEIACABIABAAIABgBIABgDIACgBIABgBIACgBIACAAIAAAAIABAAIADACIACADIAAABIAAABIgBAEIgEAGIgFAFIgFAFIgKAEQgGACgGAAQgQAAgKgJgAgMBRIg3AAIgDAAQgFABgCgCQgDgCAAgDIABgEIAEgCIACgBIACAAIADgEIABgEIAAh6IgBgFIgDgDIgCgBIgCAAIgEgCIgBgFQAAgDADgBQACgCAFAAIADAAIA2AAIAACPIABAFQABACAEACIACAAIACAAIADADQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgDACgFgBg");
	this.shape_161.setTransform(578.4,222);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAFBJQAHgBABgEQADgDAAgHIAAgkIgBgGQgBgCgEgBIgCAAIgBgBQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBgEQAAgEACgBQADgBAFAAIAFAAIAtAAQAFAAACABQADABAAAEIgBADIgBACIgBABIgCABIAAABIgBAAIgCADIAAAFIAAApIgDADIgEACIgGAEIgFAEIgFACIgDACQgHADgIACIgRACgAgFBXIgHgBIgHgDIgFgBIgEgCQgVgLgLgUQgKgUAAgbQAAgbAKgVQALgVAUgLIAKgEIAKgDIADAAIAFgBIAAAOQgGABgCAEQgDAFAAAHIAABwQAAAIACADQACADAEACIAAAOgAA2gWQgDgCgBgEIAAgBIAAgBIgCgGIgDgGIgEgHIgDgHIgDgDIgDgDQgEgFgGgCQgGgDgIAAIAAgOIASADQAHABAHADIAGACIABAAIABAAIACgCIAEgEIAAAAIABgBIABgBIADgBQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQABACAAAFIAAAvQAAAFgBACQgCADgEAAQgDAAgBgCg");
	this.shape_162.setTransform(561.5,221.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_163.setTransform(545.9,221.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AASBMQgJgKAAgQIAAgVQAAgKgDgFQgDgFgGgBIAAgMQAGgBADgEQADgDAAgJIAAggQAAgIgCgDQgDgEgHgDIAAgNIADAAIAYABQAJACAHADIACABIACABQAJAGAFAIQAFAJAAALQAAAKgDAIQgEAIgGAFIgBABIgFADIgHADIgGADIgIABIACAAIACAAIAMADIAIAEIABAAIABABQAGAEAEAFQADAGAAAGIAAAZIABAEIACABIABAAIABgBIABgDIACgBIABgBIACgBIACAAIAAAAIABAAIADACIACADIAAABIAAABIgBAEIgEAGIgFAFIgFAFIgKAEQgGACgGAAQgQAAgKgJgAgMBRIg3AAIgDAAQgFABgCgCQgDgCAAgDIABgEIAEgCIACgBIACAAIADgEIABgEIAAh6IgBgFIgDgDIgCgBIgCAAIgEgCIgBgFQAAgDADgBQACgCAFAAIADAAIA2AAIAACPIABAFQABACAEACIACAAIACAAIADADQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgDACgFgBg");
	this.shape_164.setTransform(529.6,222);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgDBTIg3AAIgEAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIABgGIAAh5IgBgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA2AAIAACOIABAHIAEACIACABIACAAIADACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgDACQgCABgFAAgAAFAGQAIgBADgFQACgDAAgJIAAgnQAAgJgDgEQgCgEgIgBIAAgNIACAAIADAAIADAAIALABIAJABQASADAKANQALANAAAUQAAATgLANQgLANgTAEIgMABIgOABg");
	this.shape_165.setTransform(512.8,221.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAYBTIhRiNIgDgEIgDgDIgCgCIgBAAIgFgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA2AAIBABvIAAA2gAhBBTQgFAAgDgBQgDgCABgDIAAgCIAAgBIACgCIAEgCQAFgDAEgGQADgGAAgIIAAhXIAMAWIAABBQAAAIADAGQADAFAGAEIADACIADACIABADQAAADgDACQgCABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgGgDIgBgBIgBAAIgDgCIAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQACgBAFAAIAfAAQAEAAADABQACACABADIgBADIgBABIgCACIgEACQgFADgEAGQgCAGAAAIIAAA3g");
	this.shape_166.setTransform(488.6,221.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBg");
	this.shape_167.setTransform(472.7,221.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAABJQAKgDAEgEQAFgFAAgHQAAgFgCgEQgCgDgDgDIgIgFIgKgFIgTgJIgNgHQgKgIgHgKQgFgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgIACgEAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAHADIAEACIAEAEIABABIACABQAIAIAFAJQAEAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgFgCIgGgDIgDAAIAAAAIgBAAIgCAAIgBAAIgCABIgCAEIgBAAIAAAAIgCACIgDAAQgDAAgBgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABIACAFQADAKAFAIQAFAJAGAHIABABIABABIAHAFIAJADIAAAOIgFgBgAArgcQgCgCgBgFQgCgOgKgKQgKgJgMgEIAAgNIAFAAIAEABIAIACIAKAFIAFAAIACAAIABgBIADgEIACgCIADAAQACAAACACIABAHIAAAoQAAAEgBADQgCACgDAAQgEAAgBgCg");
	this.shape_168.setTransform(450.4,221.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AANBTIAAgNQAPgCAJgHQAJgIAFgPIABgBIAAgBIADgEIADgBQAEAAABACQABACAAAGIAAAqgAgzBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAAClgAAfAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGIADgHQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQAEAAABACQABACAAAGIAAAtIgBAJQgBACgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAA1ggIgCgEIgBAAIAAgBQgFgOgJgIQgJgHgOgCIAAgOIAyAAIAAArQAAAEgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_169.setTransform(436,221.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAYBTIhRiNIgDgEIgDgDIgBgCIgCAAIgFgCIgDgCIgBgEIACgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAEAAIAHAAIA1AAIBBBvIAAA2gAhABTQgGAAgDgBQgCgCAAgDIAAgCIABgBIACgCIACgCQAHgDACgGQAEgGAAgIIAAhXIAMAWIAABBQAAAIADAGQADAFAGAEIAEACIACACIABADQAAADgCACQgDABgGAAgAAtgLIAAgiQAAgKgDgFQgEgGgGgDIgBgBIgBAAIgDgCIAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgBAFAAIAfAAQAFAAACABQADACAAADIgBADIgBABIgCACIgDACQgHADgCAGQgDAGAAAIIAAA3g");
	this.shape_170.setTransform(420.5,221.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAFBJQAGgBADgFQACgFAAgJIAAhtQAAgHgCgDQgDgEgGgCIAAgOQAfACATAYQATAYAAAkQAAAlgSAYQgTAXggADgAg3A9QgSgYAAglQAAgkATgYQATgYAfgCIAAAOQgGACgDAEQgCADAAAIIAABsQAAAKACAEQADAFAGABIAAAOQgggDgTgXg");
	this.shape_171.setTransform(403.9,221.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAbBTIg1AAIgEAAQgEAAgDgBQgCgCAAgDIABgEIAEgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgEgDIgBgEQAAgDADgCQACgBAEAAIAEAAIA1AAIADAAQAFAAADABQACACAAADIgBAEIgEADIgCAAIgCABQAAAAgBABQgBAAAAAAQgBABAAAAQAAAAAAABIgBAFIAAB5IABAGIADACIACABIACABIAEACIABAEQAAADgDACQgCABgFAAg");
	this.shape_172.setTransform(391,221.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAQBIQAMgBALgIQAKgIADgNIADgFQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAAEQAAADgBAEIgFAJIgFAIIgGAGIgCACIgCABQgHAGgHACQgGACgJABgAgvBAQgSgXgBgmQAAgRAFgOQADgPAJgLQAGgKAJgHQAJgHALgEIAJgCIAHgBIAEgBIAAAPQgGABgEAGQgDAFAAAJIAABkIAAAGQAAAHAEAEQADAEAGABIAAAPQghgBgUgWgAA3gUQgCgCgCgEQgEgUgKgLQgJgMgMgCIAAAAIAAgOIABAAIABAAIACAAIACABIAHACIAKADIAFACIADAAIABAAIAAAAIACgBIACgCIACgDIACgCIADAAQAEAAACACQABABAAAEIAAAzQAAAEgCADQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_173.setTransform(378.6,221.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAYBTIhSiNIgCgEIgCgDIgDgCIgCAAIgEgCIgDgCIgBgEIABgEQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAIAHAAIA2AAIBABvIAAA2gAhBBTQgFAAgDgBQgCgCgBgDIABgCIAAgBIACgCIAEgCQAGgDADgGQACgGAAgIIAAhXIANAWIAABBQAAAIADAGQADAFAGAEIADACIADACIABADQAAADgDACQgCABgGAAgAAtgLIAAgiQAAgKgDgFQgDgGgIgDIgBgBIAAAAIgCgCIgBgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQACgBAFAAIAeAAQAFAAADABQACACAAADIAAADIgBABIgCACIgEACQgFADgEAGQgDAGABAIIAAA3g");
	this.shape_174.setTransform(363.3,221.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAPBFQAOgCAHgKQAIgKAAgPIAAhPQAAgJgDgGQgDgGgGgDIgDgBIgCgBIgBgCIAAgDQgBgDADgBQACgCAFAAIAfAAIAFAAIABABIABAAIACACIACADIAAACIgCACIgCABIgEADQgFADgDAGQgEAGAAAIIAABOQAAAXgLAOQgLAOgUADgAABBVQgKAAgHgCQgIgBgGgCIgEgBIgCgBQgQgIgFgJQgGgKAAgSIAAhfIAAgFIgEgDIgCgBIgCAAIgDgCIgBgFQAAgDACgBQACgCAFAAIADAAIA2AAIADAAQAFAAABACQADABAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIgCACIgCAAIgCABQAAABgBAAQAAAAgBABQAAAAgBAAQAAABAAAAIgBAFIAABmIABANIABAHQACAEADACIAHADIAAAQg");
	this.shape_175.setTransform(346.1,222);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAEBTIg2AAIgDAAQgFAAgCgBQgCgCAAgDIABgEIAEgCIACgBIABgBIAEgCIAAgGIAAh5IAAgFIgEgDIgBgBIgCAAIgEgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAACOIABAHQABABAEABIACABIABAAIAEACQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAADgDACQgCABgGAAgAAgAeIgCgFQgCgJgEgFQgEgEgGgCIAAgNQAHgDADgEQAEgEABgGQABgFACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAEAAABACIABAIIAAAtIgBAJQgBACgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAA1ghIgCgEQgEgOgKgIQgJgHgOgCIAAgOIAxAAIAAAqQAAAFgBACQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_176.setTransform(330.8,221.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAABJQAKgDAEgEQAFgFAAgHQAAgFgCgEQgCgDgDgDIgIgFIgKgFIgTgJIgNgHQgKgIgHgKQgFgLAAgOQAAgYAPgPQAPgPAbgCIAAAOQgIACgEAFQgEAEAAAGQAAAGADAFQADAEAGAEIAFACIAJAFIALAEIAIAFIAHADIAEACIAEAEIABABIACABQAIAIAFAJQAEAJAAAMQAAAYgRAQQgRARgbABgAgPBWIgGgBIgFgCIgFgCIgGgDIgDAAIAAAAIgBAAIgCAAIgBAAIgCABIgCAEIgBAAIAAAAIgCACIgDAAQgDAAgBgDQgCgDAAgFIAAgsQAAgDACgDQACgCACAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABIACAFQADAKAFAIQAFAJAGAHIABABIABABIAHAFIAJADIAAAOIgFgBgAArgcQgCgCgBgFQgCgOgKgKQgKgJgMgEIAAgNIAFAAIAEABIAIACIAKAFIAFAAIACAAIABgBIADgEIACgCIADAAQACAAACACIABAHIAAAoQAAAEgBADQgCACgDAAQgEAAgBgCg");
	this.shape_177.setTransform(308.6,221.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAHBTQgEAAgCgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgBIABgBIACgCIABAAIABAAIACgDIABgEIAAgDIgFgSIghAAIADgPIAbAAIgVhiIADgLIAwAAIAhCOIABACIAAABIACAFIAFADIAAAAIABAAIADADIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgEAAgAhDBTQgEAAgCgBQgEgCAAgDIABgEIAFgCQAIgEADgFQAEgEADgKIAbhjIAHAZIgXBOIAAACIAAABIAAACIAAABQAAAEABADQACADAEABIAEACIADADIACAEQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgDABgDAAg");
	this.shape_178.setTransform(293.8,221.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAOBTIAAgOIAIgBIAGgCIAAAAIAAAAQAHgEAFgIQAFgHADgLIABgDIABgDIACgDIAEgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIABAGIAAAxgAgwBTIgDAAQgFAAgCgBQgCgCAAgDIABgEIADgCIACgBIACgBIADgCIABgGIAAh5IgBgFIgDgDIgCgBIgCAAIgDgDIgBgEQAAgDACgCQADgBAEAAIADAAIA2AAIAEAAQAGAAACACQACABABAEQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIgEACIgCABIgBAAQgFABgBACIgBAGIAACOg");
	this.shape_179.setTransform(279.9,221.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#8D8D54").ss(1,1,1).p("EggdgQIMBA7AAAQCsAAAACWIAAblQAACWisAAMhA7AAAQisAAAAiWIAA7lQAAiWCsAAg");
	this.shape_180.setTransform(483.1,303);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#8D8D54").s().p("EggdAQJQisAAAAiWIAA7lQAAiWCsAAMBA6AAAQCtAAAACWIAAblQAACWitAAg");
	this.shape_181.setTransform(483.1,303);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.instance_8},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.intro3, new cjs.Rectangle(-0.5,-0.5,849.2,479.8), null);


(lib.intro1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgBIAAgCIADgCIAEgDQAHgEADgHQAEgHAAgKIAAhoIAPAaIAABOQAAAKAEAHQADAHAIADIAEADIADADIABAEQAAAEgDACQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgEQAAgEADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape.setTransform(1190.4,588);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgZQAAgMgEgGQgDgGgIgBIAAgPQAIgBADgEQAEgFAAgKIAAgnQAAgJgEgEQgCgEgJgDIAAgBIAAgQIADAAQAUAAAKACQALABAIAFIACABIACABQAMAGAFALQAHALAAANQAAAMgFAKQgEAJgIAGIAAAAIgBABIgGAEIgIADIgGAEIgKABIADAAIABAAIAPAEIAJAEIACABIAAAAQAIAFAEAHQAFAHAAAHIAAAeIABAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIABAAIABgBIABgBIACgCIACgCIABgBIACgBIACAAIABAAIABAAIADACIACAEIABABIAAABIgCAFIgDAHIgHAGIgHAHQgEADgHABQgGACgJAAQgTAAgLgLgAgPBiIhCAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgDADAAIACgBIACgBIAEgDIABgHIAAiRIgBgHQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDgBIgCgBIgEgDQgCgCAAgDQAAgEADgCQADgCAFAAIAEAAIBCAAIAACrIABAIQABABAEACIADAAIACABQADABABACQACACAAADQAAAEgDACQgCACgIAAg");
	this.shape_1.setTransform(1170,588.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASBTQARgCAJgMQAJgMAAgTIAAhfQAAgKgEgHQgDgGgIgEIgDgDIgCgBIgCgCIAAgDQAAgEADgCQACgCAGAAIAlAAIAFABIADAAIABAAIAAABIADACIABAEIAAACIgBACIgDACIgFADQgGADgEAIQgEAHAAAKIAABdQAAAbgNARQgOARgYAEgAACBmQgMAAgJgCQgJgBgJgDIgEgBIgDgCQgSgIgHgMQgHgMAAgVIAAhyIgBgHQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEADgDQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgCAAIgDACIgBABIgFACIAAAHIAAB5IAAAQIACAJQADAFACACQADACAGACIAAATg");
	this.shape_2.setTransform(1148.9,588.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgFAAQgHAAgDgCQgDgCAAgEQAAgDACgCQACgCADgBIACAAIACgBQAFgBABgCQABgDAAgEIAAisIBAAAIAACrQAAAGACACQABACAFABIACABIACAAQADABACACQACACAAADQAAAEgDACQgEACgGAAgAhQggQgCgCAAgEIAAg9IAmAAIAAASQgHAFgFAIQgFAIgCANIgCAJQAAAEgDADQgCADgEAAQgDgBgDgDgABEggQgCgCgBgEIgBgKQgDgMgEgJQgFgIgIgEIAAgSIAnAAIAAA8QAAAFgCACQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(1130,588);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgJAGgSIABgCIABgBIACgEIAEgBQAFAAABACQACADAAAFIAAA0gAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAIACgBIACgBQABAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgHIAAiRIgBgHQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgCgBIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAlIgDgIQgCgKgFgFQgEgGgIgBIAAgQQAJgEAEgFQAEgEACgJQABgFACgDQACgCADAAQAFABABACQACACAAAIIAAA2QAAAHgCADQgBACgFAAQgDAAgCgBgAA/gnIgDgEIAAAAIAAgBQgGgSgLgIQgKgKgSgBIAAgSIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_4.setTransform(1112.4,588);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgZQAAgMgEgGQgDgGgIgBIAAgPQAIgBADgEQAEgFAAgKIAAgnQAAgJgEgEQgCgEgJgDIAAgBIAAgQIADAAQAUAAAKACQALABAIAFIACABIACABQAMAGAFALQAHALAAANQAAAMgFAKQgEAJgIAGIAAAAIAAABIgHAEIgIADIgGAEIgKABIADAAIACAAIAOAEIAJAEIACABIABAAQAHAFAEAHQAEAHABAHIAAAeIABAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAABABAAIAAAAIABgBIABgBIABgCIADgCIACgBIABgBIACAAIABAAIABAAIAEACIABAEIABABIAAABIgCAFIgDAHIgGAGIgIAHQgEADgHABQgGACgJAAQgTAAgLgLgAgPBiIhCAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgDADAAIACgBIACgBIAEgDIABgHIAAiRIgBgHQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDgBIgCgBIgEgDQgCgCAAgDQAAgEADgCQADgCAFAAIAEAAIBCAAIAACrIABAIQABABAEACIADAAIACABQADABABACQABACABADQgBAEgCACQgCACgIAAg");
	this.shape_5.setTransform(1093.4,588.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgCIAAgBIADgCIAEgDQAHgEADgHQAEgHAAgKIAAhnIAPAZIAABOQAAAKAEAHQADAGAIAEIAEADIADADIABAEQAAAEgDACQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgEIgBgBIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgEQAAgEADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_6.setTransform(955.9,589);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGBYQAHgCADgFQAEgGAAgMIAAiCQAAgIgEgFQgDgFgHgCIAAgQQAlACAYAdQAWAdAAArQAAAtgWAcQgWAcgnADgAhCBJQgWgcAAgtQAAgrAXgdQAXgdAlgCIAAAQQgHACgDAFQgEAFAAAIIAACCQAAANAEAFQADAFAHACIAAAQQgmgDgXgcg");
	this.shape_7.setTransform(936,589);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgDADAAIACgBIACgBQAEgCAAgBIABgHIAAiRIgBgHQAAgBgEgBIgCgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIADAAQAGAAADACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgDABIgDABIgBABIgFACIAAAHIAACRIAAAHIAFADIABABIADABQADAAABADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDACQgDACgGAAg");
	this.shape_8.setTransform(920.5,589);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgFAAQgHAAgDgCQgDgCAAgEQAAgDACgCQACgCADgBIACAAIACgBQAFgBABgCQABgDAAgEIAAisIBAAAIAACrQAAAGACACQABACAFABIACABIACAAQADABACACQACACAAADQAAAEgDACQgEACgGAAgAhQggQgCgCAAgEIAAg9IAmAAIAAASQgHAFgFAIQgFAIgCANIgCAJQAAAEgDADQgCADgEAAQgDAAgDgEgABEggQgCgCgBgEIgBgJQgDgNgEgJQgFgIgIgEIAAgSIAnAAIAAA9QAAADgCADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(905.7,589);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATBWQAPAAAMgLQAMgJAFgPQABgFACgCQACgCAEAAQADAAACADQADADAAADQAAAEgCAGIgGALIgGAIIgHAIIgDACIgCABQgIAHgJADQgIADgKAAgAg4BMQgXgaAAgvQAAgTAFgSQAFgSAJgNQAIgLALgJQALgIAMgFIALgDIAKgCIAEAAIAAARQgHACgFAGQgEAHAAALIAAB5IAAAFQABAKAEAFQAEAEAHABIAAASQgogBgXgbgABBgYQgCgCgBgFQgGgYgMgOQgLgOgOgCIAAgBIAAgRIABABIACAAIACABIADAAIAHACIANAEIAGADIADAAIABAAIABAAIADgBIACgDIACgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAEgCQAEABACACQACACAAAEIAAA9QAAAGgCACQgCADgEAAQgDAAgDgCg");
	this.shape_10.setTransform(887.9,589);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgCIAAgBIADgCIAEgDQAHgEADgHQAEgHAAgKIAAhnIAPAZIAABOQAAAKAEAHQADAGAIAEIAEADIADADIABAEQAAAEgDACQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgEIgBgBIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgEQAAgEADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_11.setTransform(869.5,589);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASBTQARgCAJgMQAJgMAAgTIAAhfQAAgKgEgHQgDgGgIgEIgDgDIgCgBIgCgDIAAgCQAAgFADgBQACgCAGAAIAlAAIAFABIADAAIABAAIAAAAIADADIABAEIAAACIgBACIgDACIgFADQgGADgEAIQgEAHAAAKIAABdQAAAbgNARQgOARgYAEgAACBmQgMAAgJgCQgJAAgJgEIgEgBIgDgBQgSgJgHgMQgHgMAAgVIAAhyIgBgHQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgCABIgDABIgBABIgFACIAAAHIAAB5IAAAQIACAJQADAFACACQADADAGABIAAATg");
	this.shape_12.setTransform(849,589.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEBkIhAAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgDADAAIACgBIADgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIABgHIAAiRIgBgHQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAACrQAAAGACACQABACAFABIACABIACAAQADABABACQACACAAADQAAAEgDACQgDACgHAAgAAmAkQgCgCAAgFQgDgKgFgFQgEgFgHgCIAAgQQAIgFAEgEQAEgEACgJQABgFACgCQACgDAEAAQAEAAABADQACACAAAIIAAA2QAAAHgCADQgBACgEAAQgDAAgDgCgABAgoQgCgBgBgDQgFgRgLgKQgLgJgRgBIAAgSIA7AAIAAA0QAAAFgCACQgBACgEAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_13.setTransform(830.7,589);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTBgQgJgJAAgLQAAgMAJgIQAIgJALABQAMgBAIAJQAJAIAAAMQAAALgJAJQgIAIgMAAQgLAAgIgIgAgEAhIgCgHIAAgEIgBgEIAAgDIgBgDIAAgEIgBgFIgFgOIgFgSIgEgKIgCgIIgCgDIAAgFIgCgHIAAgGQAAgQAIgJQAJgKAMAAQANAAAJAKQAIAKAAAQIAAAAIAAABIAAABIgCAOQgBAIgFAMQgGATgDAMQgDANgBALQAAAGgCADQgCACgEAAQgDAAgCgCg");
	this.shape_14.setTransform(957.3,459.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgEIABgCIACgBIACgBIABgBIABAAIADgEIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgEAEgGQAFgFADgLIAhh5IAHAfIgaBdIAAADIAAACIgBABIAAACQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAADgDACQgDACgFAAg");
	this.shape_15.setTransform(943,459.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgYQAAgNgDgGQgFgGgHgBIAAgPQAIgBAEgFQADgEAAgKIAAgnQAAgJgDgEQgEgFgIgDIAAAAIAAgQIAEAAQATAAAKABQAKADAJADIACABIACACQAMAGAGALQAFALAAANQAAAMgDAJQgFAKgIAGIAAAAIgBAAIgFAFIgIADIgHADIgKACIACABIACAAIAOADIAKAEIABABIABABQAIAEAFAHQADAHAAAIIAAAeIABADQABAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACAAIAAAAIACgBIABgCIABgBIACgCIADgBIACAAIAAAAIABAAIADADIADADIAAAAIAAABIgCAGIgEAHIgGAHIgGAFQgGADgGACQgHACgHAAQgUAAgLgLgAgQBiIhBAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQACgCADAAIACgBIACgBIAEgDIABgGIAAiTIgBgFQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAIgFgDQgBgCAAgDQAAgEADgCQACgCAGAAIAEAAIBBAAIAACrIABAHQACACAFACIACABIABAAQAEABABACQABACAAADQABAEgCACQgEACgGAAg");
	this.shape_16.setTransform(923.7,459.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAGBXQAIgBADgGQACgFAAgMIAAiBQAAgJgCgFQgDgEgIgDIAAgQQAmACAXAdQAWAdAAArQAAAtgWAcQgXAcgmADgAhBBJQgXgcAAgtQAAgrAXgdQAXgdAlgCIAAAQQgHADgEAEQgDAFAAAJIAACBQAAAMADAGQAEAFAHACIAAAQQgmgDgWgcg");
	this.shape_17.setTransform(903.3,459.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABTBkIhBAAIgEAAQgFAAgDgCQgDgBAAgEQAAgEACgCIAEgCIAFgCQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIABgGIAAhEIgXAAIAAgPIAXAAIAAg/IgBgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBAAAAgBIgFgBIgEgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAgEADgCQADgCAFAAIAEAAIBBAAIAEAAQAGABACABQADACAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgDABIgCAAIgCABQgDACgBACIgBAGIAACSIABAGQAAAAABABQAAAAAAABQABAAAAAAQABABABAAIACABIACABQADAAACACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAEgDACQgCACgGAAgAgRBkIhBAAIgEAAQgGAAgDgCQgCgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACgBIACgBQADgBABgCIABgGIAAiTIgBgFQgBgCgDgCIgCgBIgCAAQgDgBgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBBAAIAEAAQAFABADABQADACAAAEQAAADgCACQgBACgDABIgFABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBABIgBAGIAACSIABAGQABABAAABQAAAAABAAQAAABAAAAQABAAAAABIAFABIAEACQACACAAAEQAAAEgDABQgDACgFAAg");
	this.shape_18.setTransform(882.5,459.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgEIABgCIACgBIACgBIABgBIABAAIADgEIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgEAEgGQAFgFADgLIAhh5IAHAfIgaBdIAAADIAAACIgBABIAAACQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAADgDACQgDACgFAAg");
	this.shape_19.setTransform(861.9,459.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVBeQgIgKAAgQIAAgBIAAgBIACgOIAGgTIAJghQADgMAAgLQABgGACgCQACgDAEAAQADAAACACQACACAAAFIAAAEIABADIAAAFIAAACIABAEIABAFIAFAPIAFARIAEALIACAHIABAEIABAEIACAHIAAAHQAAAPgIAJQgJAKgNAAQgMAAgJgKgAgTg3QgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMgBQgLABgIgJg");
	this.shape_20.setTransform(847.5,459.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfBkIhBAAIgFAAQgGAAgDgCQgDgCgBgEQAAgDACgCQADgCADgBIACAAIABgBQAGgBABgCIAAgHIAAgzIgphhIgDgFIgDgDIgDgCIgCgBIgCgCIAAgDQABgEACgCQADgCAFAAIBIAAQAGAAACACQADACAAAEIgBAEIgDADIgDADIgCACIgBADIAAABIABADIAAABIAAABIAAAAIAAABIAiBNIAABAQAAAGABACQACACAFABIABABIACAAQADABACACQACACAAADQAAAEgDACQgDACgHAAgAAcgYIAQgjIABgCIABgDIAAgDIAAgDQAAgEgCgDQgCgDgGgCIgCgCIgDgBIgCgCIgBgDQAAgFADgCQADgCAIAAIAkAAQAFAAADACQADADAAAEIgBADIgDACIgBABIgCACQgHADgEADQgEAFgDAFIgDAHIgYA2g");
	this.shape_21.setTransform(1123.1,422);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgCIABgCIACgCIACgCIABAAIABgBIADgCIABgFIgBgEIgFgVIgnAAIADgSIAgAAIgah2IAEgOIA6AAIApCrIAAACIABABIACAHIAFADIABAAIABAAIAEAEIABAEQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgLIAhh3IAHAdIgaBeIAAACIAAACIgBACIAAADQAAAEADADQACADAEACIAFACIAEAEIABAEQAAADgDACQgDACgFAAg");
	this.shape_22.setTransform(1104.8,422);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASBkIAAgRIAJgBIAGgCIAAgBIABAAQAHgFAGgJQAGgJAEgMIABgFIACgCIADgFIAEgBQAEAAABACQACACAAAFIAAA8gAg6BkIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgDADAAIACgBIACgBQAEgCAAgBIABgHIAAiRIgBgGQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgCgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIAFAAQAHAAADACQADACAAAFQAAACgCACQgCACgDACIgCAAIgCABQgFABgBACIgBAHIAACrg");
	this.shape_23.setTransform(1088.2,422);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFBkIhBAAIgEAAQgGAAgDgCQgCgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAIACgBIACgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIABgHIAAiRIgBgGQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgCgBIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBBAAIAACrQAAAGACACQABACAEABIACABIABAAQAEABABACQACACAAADQAAAEgDACQgDACgGAAgAAGAIQAKgCADgFQAEgEAAgMIAAgvQAAgKgEgFQgEgFgJgBIAAgQIADAAIADAAIADABIANAAIALACQAWAEANAPQAMAQAAAYQAAAXgNAPQgNAQgXAEIgOACIgRABg");
	this.shape_24.setTransform(1070.3,422);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgCIABgCIACgCIACgCIABAAIABgBIADgCIABgFIgBgEIgFgVIgnAAIADgSIAgAAIgah2IAEgOIA6AAIApCrIAAACIABABIACAHIAFADIABAAIABAAIAEAEIABAEQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgLIAhh3IAHAdIgaBeIAAACIAAACIgBACIAAADQAAAEADADQACADAEACIAFACIAEAEIABAEQAAADgDACQgDACgFAAg");
	this.shape_25.setTransform(1042.9,422);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgBIAAgCIADgCIAEgDQAHgEADgHQAEgHAAgKIAAhoIAPAaIAABOQAAAKAEAHQADAHAIADIAEADIADADIABAEQAAAEgDACQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgEQAAgEADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_26.setTransform(1023.8,422);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAGBYQAHgCADgFQAEgGAAgLIAAiDQAAgIgEgFQgDgEgHgDIAAgQQAlACAYAdQAWAdAAAsQAAAsgWAcQgXAcgmADgAhCBJQgWgcAAgsQAAgsAXgdQAXgdAlgCIAAAQQgHADgDAEQgEAFAAAIIAACDQAAAMAEAFQADAFAHACIAAAQQgmgDgXgcg");
	this.shape_27.setTransform(1004,422);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgDADAAIACgBIACgBQAEgCAAgBIABgHIAAiRIgBgGQAAgCgEgBIgCgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIADAAQAGAAADACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgDABIgDABIgBABIgFADIAAAGIAACRIAAAHIAFADIABABIADABQADAAABADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDACQgDACgGAAg");
	this.shape_28.setTransform(988.5,422);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAABXQAMgCAFgGQAGgFAAgKQAAgFgCgEQgCgFgFgDIgJgGIgNgGIgWgLIgPgIQgOgKgGgNQgIgNAAgQQAAgdATgTQASgRAhgCIAAARQgKADgFAEQgFAFAAAIQAAAHAEAGQADAFAHAFIAHACIALAGIANAFIAKAFIAHAEIAFAEIAFADIACACIABACQALAJAFALQAGALgBAOQAAAdgUATQgVAUggABgAgSBnIgHgBIgGgCIgHgCIgHgEIgDgBIgBAAIgBAAIgCAAIgBAAIgDACIgCAEIgBABIgBAAIgCABIgCABQgEAAgDgDQgCgEAAgFIAAg2QABgEACgDQACgCAEAAQAEAAABABQACACABAGQAEAMAFAJQAFAKAIAIIACABIABABQAEAEAFADIALAEIAAAQIgHgBgAA0giQgDgCgBgGQgDgRgMgLQgLgNgPgDIAAgRIAGABIAFACIAJACIAOAFIAEABIADAAIABgCIADgEIADgCIAEgBQADAAACADQACACAAAHIAAAvQAAAFgDADQgCADgEgBQgDABgCgDg");
	this.shape_29.setTransform(974.1,422);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgJAGgSIABgCIABgBIACgEIAEgBQAFAAABACQACADAAAFIAAA0gAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAIACgBIACgBQABAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgHIAAiRIgBgGQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgCgBIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAlIgDgIQgCgKgFgFQgEgGgIgBIAAgQQAJgEAEgFQAEgEACgJQABgFACgDQACgCADAAQAFABABACQACACAAAIIAAA2QAAAHgCADQgBACgFAAQgDAAgCgBgAA/gnIgDgEIAAAAIAAgBQgGgSgLgIQgKgKgSgBIAAgSIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_30.setTransform(956.9,422);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgZQAAgMgDgGQgEgGgIgBIAAgPQAIgBAEgEQADgFAAgKIAAgnQAAgJgDgEQgDgEgJgDIAAgBIAAgQIADAAQAUAAAKACQAKABAJAFIACABIACABQAMAGAGALQAFALABANQgBAMgEAKQgEAJgHAGIgBAAIAAABIgGAEIgJADIgHAEIgJABIADAAIACAAIANAEIAKAEIACABIABAAQAHAFAEAHQAEAHAAAHIAAAeIACAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAABABAAIABAAIAAgBIABgBIABgCIACgCIADgBIACgBIABgBIABAAIABABIAEACIACAEIAAABIAAABIgBAFIgFAHIgFAHIgHAGQgFADgHABQgGACgIAAQgUAAgLgLgAgQBiIhBAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgDADAAIACgBIACgBIAEgDIABgHIAAiRIgBgGQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDgBIgCgBIgEgDQgCgCAAgDQAAgEADgCQACgCAGAAIAEAAIBBAAIAACrIABAIQACABAEACIACAAIADABQADABABACQABACAAADQAAAEgCACQgDACgGAAg");
	this.shape_31.setTransform(938,422.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFBkIhBAAIgEAAQgGAAgDgCQgCgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAIACgBIACgBQADgCABgBIABgHIAAiRIgBgGQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgCgBIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBBAAIAACrQAAAGACACQABACAEABIACABIABAAQAEABABACQACACAAADQAAAEgDACQgDACgGAAgAAGAIQAKgCADgFQAEgEAAgMIAAgvQAAgKgEgFQgEgFgJgBIAAgQIADAAIADAAIADABIANAAIALACQAWAEANAPQAMAQAAAYQAAAXgNAPQgNAQgXAEIgOACIgRABg");
	this.shape_32.setTransform(917.8,422);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgJAGgSIABgCIABgBIACgEIAEgBQAFAAABACQACADAAAFIAAA0gAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAIACgBIACgBQABAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgHIAAiRIgBgGQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgCgBIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAlIgDgIQgCgKgFgFQgEgGgIgBIAAgQQAJgEAEgFQAEgEACgJQABgFACgDQACgCADAAQAFABABACQACACAAAIIAAA2QAAAHgCADQgBACgFAAQgDAAgCgBgAA/gnIgDgEIAAAAIAAgBQgGgSgLgIQgKgKgSgBIAAgSIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_33.setTransform(890.9,422);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AASBTQARgCAJgMQAJgMAAgTIAAhfQAAgKgEgHQgDgGgIgEIgDgDIgCgBIgCgCIAAgDQAAgEADgCQACgCAGAAIAlAAIAFABIADAAIABAAIAAABIADACIABAEIAAACIgBACIgDACIgFADQgGADgEAIQgEAHAAAKIAABdQAAAbgNARQgOARgYAEgAACBmQgMAAgJgCQgJgBgJgDIgEgBIgDgCQgSgIgHgMQgHgMAAgVIAAhyIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgDgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEADgDQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgCAAIgDACIgBABIgFADIAAAGIAAB5IAAAQIACAJQADAFACACQADADAGABIAAATg");
	this.shape_34.setTransform(871.8,422.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAoBoQgGgCgGgGIgCABIgEABIgHABIgKACIAAgRIAEAAIADgCIABgBIAAAAIgBgCIgDgEIgEgDIgCgBIgDgBQgEgBgDgBQgBgCAAgDQAAgEADgDQAEgCAEAAIAHABIAGABIABABIACABIAAiAQAAgIgDgFQgDgFgIgCIAAgQQAmACAWAdQAYAcAAAtQgBAagHAVQgIAVgRAOIAAAAIAAAAIAAAAIAGAEIAIABIAFAAIAFgBIAEgCIAEACQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIgBABIAAACQgCAFgIAFQgJAEgIACIgEAAIgCAAQgIAAgIgDgAhCBGQgXgcABgsQAAgtAWgcQAXgdAlgCIAAAQQgHADgDAEQgDAFAAAIIAACCQAAAMADAGQADAFAHACIAAAQQglgDgXgcgAA4BQIAAAAIAAAAgAA4BQg");
	this.shape_35.setTransform(852.2,422.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAhCAIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQABgCADAAIACgBIADgBQABgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIABgHIAAiSIgBgGQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgBIgCAAQgDgBgBgCQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEADgCQADgCAFAAIAEAAIBBAAIAEAAQAFAAADACQADACAAAEQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgBACgDABIgDAAIgBABIgFADIAAAHIAACRIAAAHIAFADIABABIADABQADAAABACQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAEgDACQgDACgFAAgAgChTIgCAAIgKAAIgDgBIgBgBIAAgDIAVghIACgCIABgCIADgBIAEgBIAdAAIAEACQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAABIAAAAIgBACIgDACIAAgBIgoAfIgDADIAAABIgBABg");
	this.shape_36.setTransform(1186,381.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAABXQAMgDAFgFQAGgGAAgJQAAgFgCgFQgCgEgFgEIgJgFIgNgHIgWgKIgPgIQgOgKgGgNQgIgNAAgQQAAgeATgRQASgSAhgCIAAARQgKACgFAFQgFAGAAAIQAAAGADAFQAEAGAHAEIAHAEIALAFIANAGIAKAEIAHAEIAFADIAFAEIACACIABABQALAKAFAKQAGAMgBAOQAAAdgUAUQgVATggABgAgSBoIgHgCIgGgCIgHgDIgHgCIgDgCIgBAAIgBAAIgCABIgBAAIgDACIgCADIgBAAIgBABIgCACIgDAAQgDAAgDgDQgCgDAAgHIAAg1QABgEACgCQACgEAEAAQAEAAABACQACADABAEQAEAMAFAKQAFAKAIAJIACABIABABQAEADAFADIALADIAAARIgHAAgAA0giQgDgCgBgGQgDgQgMgNQgLgMgPgDIAAgQIAGABIAFAAIAJADIAOAFIAEABIACAAIACgBIADgFIADgDIAEAAQADAAACACQACADAAAGIAAAxQAAAEgDADQgCADgEAAQgEAAgBgDg");
	this.shape_37.setTransform(1171.6,384.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgEIABgCIACgBIACgBIABgBIABAAIADgEIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgFADgLIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAAEgDABQgDACgFAAg");
	this.shape_38.setTransform(1153.9,384.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAuQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgDIAIgEIAGgFIADgCIACgCIABgBIAAAAIAEgFIABgEIgBgCIgDgBIgCgBIgCAAQgJgBgGgGQgGgIAAgKQAAgMAIgIQAIgIAMAAQAMAAAJAKQAJAJAAAOIAAAEIAAAEQgCALgJAMQgJAMgMAJIgMAGQgFACgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_39.setTransform(1131.3,394);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgZQAAgMgEgGQgEgGgHgBIAAgPQAIgBADgFQAEgEAAgKIAAgnQAAgJgEgEQgDgFgIgDIAAAAIAAgQIAEAAQATAAAKABQAKACAJAEIACABIACACQAMAGAFALQAHAKgBAOQAAALgDAKQgFAKgIAGIAAAAIgBAAIgGAFIgHAEIgHACIgKACIACABIACAAIAPADIAJAEIABABIABABQAIAEAFAHQADAHABAHIAAAfIAAADQABAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIABAAIACgBIABgCIABgBIACgCIACgBIADgBIAAAAIABABIADADIACADIABAAIAAABIgCAGIgDAHIgHAGIgHAGQgFADgGACQgHACgIAAQgTAAgLgLgAgPBiIhCAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQACgCADAAIACgBIACgBIAEgDIABgHIAAiSIgBgGQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAIgFgDQgBgCAAgDQAAgEADgCQACgCAGAAIAEAAIBCAAIAACrIABAHQABACAFACIACABIABAAQAEABABACQACACAAADQAAAEgCACQgEACgHAAg");
	this.shape_40.setTransform(1116.2,384.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgEIABgCIACgBIACgBIABgBIABAAIADgEIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgFADgLIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAAEgDABQgDACgFAAg");
	this.shape_41.setTransform(1096,384.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgFAAQgHAAgDgCQgDgCAAgEQAAgDACgCQACgCADAAIACgBIACAAQAFgCABgCQABgDAAgFIAAirIBAAAIAACrQAAAFACADQABACAFACIACAAIACABQADAAACACQACACAAADQAAAEgDACQgEACgGAAgAhQgfQgCgDAAgEIAAg9IAmAAIAAASQgHAEgFAJQgFAIgCANIgCAJQAAAFgDACQgCACgEABQgDgBgDgCgABEgfQgCgDgBgEIgBgJQgDgNgEgIQgFgJgIgEIAAgSIAnAAIAAA9QAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_42.setTransform(1077.9,384.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AASBTQARgDAJgLQAJgMAAgTIAAhfQAAgKgEgHQgDgHgIgEIgDgBIgCgCIgCgDIAAgDQAAgDADgCQACgCAGAAIAlAAIAFAAIADABIABAAIAAAAIADADIABADIAAADIgBACIgDACIgFADQgGAEgEAGQgEAIAAAJIAABfQAAAagNARQgOARgYAEgAACBmQgMAAgJgBQgJgBgJgEIgEgBIgDgBQgSgJgHgMQgHgMAAgVIAAhzIgBgGQAAAAAAAAQAAgBgBAAQAAAAgBgBQgBAAAAgBIgDgBIgCAAQgDgBgBgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDADgDQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQgBACgCABIgDAAIgBABIgFADIAAAHIAAB6IAAAQIACAIQADAFACACQADACAGACIAAATg");
	this.shape_43.setTransform(1058.8,384.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATBWQAPgBAMgJQAMgKAFgPQABgFACgCQACgCAEAAQADAAACADQADACAAAEQAAAFgCAFIgGAKIgGAJIgHAHIgDADIgCABQgIAHgJADQgIACgKABgAg4BNQgXgcAAgtQAAgVAFgRQAFgRAJgOQAIgLALgJQALgIAMgFIALgDIAKgBIAEgBIAAASQgHABgFAHQgEAGAAAMIAAB4IAAAGQABAIAEAFQAEAGAHAAIAAASQgogBgXgagABBgYQgCgCgBgFQgGgYgMgOQgLgOgOgCIAAAAIAAgRIABAAIACAAIACABIADAAIAHACIANAFIAGACIADAAIABAAIABAAIADgBIACgCIACgFQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAEgBQAEAAACABQACADAAAFIAAA9QAAAEgCADQgCAEgEAAQgDgBgDgCg");
	this.shape_44.setTransform(1039.8,384.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgKAGgRIABgCIABgCIACgDIAEgBQAFAAABACQACACAAAHIAAAzgAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAQgDgBgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAkIgDgGQgCgKgFgGQgEgFgIgDIAAgQQAJgDAEgFQAEgFACgHQABgHACgBQACgCADAAQAFAAABACQACADAAAHIAAA2QAAAHgCACQgBADgFAAQgDAAgCgCgAA/gnIgDgEIAAgBIAAgBQgGgRgLgJQgKgIgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_45.setTransform(1022.5,384.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEBmIgCAAIgDAAIgEAAIAAgRQAGgCADgFQACgFAAgIIAAiKIgBgHQgCgCgDgBIgFgCIgGgCQgCgCABgDQgBgEAEgDQADgBAGgBIAGAAIBAAAIAEAAQAFABADABQACADABADIgBAFQgCACgDABIgCAAIgBABQgFABgBACIAAAHIAAB6QAAAagSANQgRAPgeAAIgBAAgAgqBhQgHgCgGgEQgKgGgFgKQgGgJABgLQgBgOAKgKQAJgJAMAAQANAAAJAJQAIAIAAAMQAAAJgFAHQgEAGgKAEIgCABIAAACIAAAAIAAACIAFACIAFABIAAAQQgJgCgHgCg");
	this.shape_46.setTransform(1005.1,384.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgKAGgRIABgCIABgCIACgDIAEgBQAFAAABACQACACAAAHIAAAzgAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAQgDgBgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAkIgDgGQgCgKgFgGQgEgFgIgDIAAgQQAJgDAEgFQAEgFACgHQABgHACgBQACgCADAAQAFAAABACQACADAAAHIAAA2QAAAHgCACQgBADgFAAQgDAAgCgCgAA/gnIgDgEIAAgBIAAgBQgGgRgLgJQgKgIgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_47.setTransform(988.8,384.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgEIABgCIACgBIACgBIABgBIABAAIADgEIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgFADgLIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAAEgDABQgDACgFAAg");
	this.shape_48.setTransform(962.2,384.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgEIABgCIACgBIACgBIABgBIABAAIADgEIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgFADgLIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAAEgDABQgDACgFAAg");
	this.shape_49.setTransform(935.3,384.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVBkIg0iuIgBgCIgBgBIgBgDIgDgCIgCgBIgCgBIgDgCIAAgEQAAgEADgDQAEgCAHAAIBBAAIAHAAIADABIADAEIABADIgBAFIgEADQgDACgBACQgBACAAAEIAAADIAhB3IgOAzgAAcAAIARg9IABgGQAAgGgCgDQgDgEgEgCIgEgBIgEgDQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDADgDQAEgCAFAAIAkAAQAHAAADACQACACAAAEIgBAEIgEADIgHADIgBABIgBAAQgEAEgEAGQgDAGgDAIIgXBTg");
	this.shape_50.setTransform(917.1,384.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgKAGgRIABgCIABgCIACgDIAEgBQAFAAABACQACACAAAHIAAAzgAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAQgDgBgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAkIgDgGQgCgKgFgGQgEgFgIgDIAAgQQAJgDAEgFQAEgFACgHQABgHACgBQACgCADAAQAFAAABACQACADAAAHIAAA2QAAAHgCACQgBADgFAAQgDAAgCgCgAA/gnIgDgEIAAgBIAAgBQgGgRgLgJQgKgIgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_51.setTransform(890.9,384.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AASBTQARgDAJgLQAJgMAAgTIAAhfQAAgKgEgHQgDgHgIgEIgDgBIgCgCIgCgDIAAgDQAAgDADgCQACgCAGAAIAlAAIAFAAIADABIABAAIAAAAIADADIABADIAAADIgBACIgDACIgFADQgGAEgEAGQgEAIAAAJIAABfQAAAagNARQgOARgYAEgAACBmQgMAAgJgBQgJgBgJgEIgEgBIgDgBQgSgJgHgMQgHgMAAgVIAAhzIgBgGQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBIgDgBIgCAAQgDgBgBgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgDADgDQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQgBACgCABIgDAAIgBABIgFADIAAAHIAAB6IAAAQIACAIQADAFACACQADACAGACIAAATg");
	this.shape_52.setTransform(871.8,384.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAoBoQgGgCgGgGIgCABIgEABIgHABIgKACIAAgRIAEAAIADgCIABgBIAAAAIgBgCIgDgEIgEgDIgCgBIgDgBQgEgBgDgBQgBgCAAgDQAAgEADgDQAEgCAEAAIAHABIAGABIABABIACABIAAiAQAAgIgDgFQgDgFgIgCIAAgQQAmACAWAdQAYAcAAAtQgBAagHAVQgIAVgRAOIAAAAIAAAAIAAAAIAGAEIAIABIAFAAIAFgBIAEgCIAEACQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIgBABIAAACQgCAFgIAFQgJAEgIACIgEAAIgCAAQgIAAgIgDgAhCBGQgXgcABgsQAAgtAWgcQAXgdAlgCIAAAQQgHADgDAEQgDAFAAAIIAACCQAAAMADAGQADAFAHACIAAAQQglgDgXgcgAA4BQIAAAAIAAAAgAA4BQg");
	this.shape_53.setTransform(852.2,384.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAABXQALgDAHgFQAFgFAAgJQAAgGgCgEQgCgFgGgDIgJgGIgLgGIgYgLIgOgIQgNgKgIgMQgGgOAAgQQAAgdASgTQATgRAfgCIAAARQgJADgFAFQgFAFAAAHQAAAHAEAGQADAFAIAFIAGACIALAGIAMAFIAKAGIAIADIAGAEIAEADIACACIACABQAKAKAFALQAFALAAAOQABAdgVAUQgVATggABgAgSBnIgGgBIgHgCIgHgCIgGgEIgEgBIgBAAIgBAAIgCAAIgBAAIgCACIgEAEIAAABIgBABIgCAAIgCABQgEAAgCgDQgCgEAAgFIAAg2QAAgEACgCQADgDADAAQADAAACACQACABABAGQAEAMAFAJQAFAKAJAIIAAABIACABQAEAEAEADIALADIAAARIgGgBgAAzgiQgCgCgBgGQgDgQgLgMQgLgMgPgEIAAgRIAFABIAFABIAKADIAMAFIAFABIACAAIACgCIAEgEIACgDIADAAQAEAAACADQACACAAAHIAAAvQAAAFgCADQgDACgEAAQgEABgCgDg");
	this.shape_54.setTransform(1175.7,347.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgJAGgSIABgCIABgCIACgDIAEgBQAFAAABACQACADAAAFIAAA0gAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgBADgBIACgBIACgBQABAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIAAiSIgBgGQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgCgCIgCAAQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAlIgDgHQgCgLgFgFQgEgFgIgDIAAgPQAJgFAEgEQAEgEACgJQABgGACgCQACgCADAAQAFABABACQACADAAAGIAAA3QAAAHgCADQgBACgFAAQgDAAgCgBgAA/gnIgDgEIAAAAIAAgBQgGgSgLgIQgKgKgSgBIAAgSIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_55.setTransform(1158.6,347.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgBIAAgCIADgCIAEgDQAHgEADgGQAEgIAAgKIAAhoIAPAaIAABOQAAALAEAGQADAHAIAEIAEACIADADIABAEQAAAEgDACQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgFQAAgDADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_56.setTransform(1139.9,347.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAGBXQAHgBAEgFQACgGAAgLIAAiDQAAgIgCgFQgEgEgHgDIAAgQQAmACAWAdQAXAcAAAtQAAAsgWAcQgXAcgmADgAhCBJQgWgcAAgsQAAgtAXgcQAXgdAlgCIAAAQQgIADgDAEQgCAFAAAIIAACDQAAAMACAFQADAFAIACIAAAQQgmgDgXgcg");
	this.shape_57.setTransform(1120,347.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQABgBADgBIACgBIACgBQABAAABgBQABAAAAgBQABAAAAAAQAAgBAAAAIABgGIAAiSIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAIgCgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIADAAQAGAAADACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgDABIgDAAIgBACIgFADIAAAGIAACSIAAAGIAFADIABABIADABQADABABABQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDACQgDACgGAAg");
	this.shape_58.setTransform(1104.5,347.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AATBWQAPAAAMgLQAMgKAFgOQABgFACgCQACgCAEAAQADAAACADQADACAAAEQAAAEgCAFIgGAMIgGAIIgHAHIgDADIgCACQgIAGgJADQgIADgKAAgAg4BMQgXgaAAgvQAAgTAFgSQAFgSAJgOQAIgKALgJQALgIAMgFIALgEIAKgBIAEAAIAAARQgHADgFAFQgEAHAAAMIAAB3IAAAGQABAJAEAGQAEAFAHAAIAAASQgogBgXgbgABBgYQgCgCgBgFQgGgYgMgOQgLgOgOgCIAAgBIAAgRIABABIACAAIACAAIADABIAHACIANAEIAGACIADABIABAAIABAAIADgBIACgCIACgEQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIAEgBQAEAAACACQACADAAAEIAAA9QAAAFgCAEQgCACgEAAQgDABgDgDg");
	this.shape_59.setTransform(1089.6,347.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgBIAAgCIADgCIAEgDQAHgEADgGQAEgIAAgKIAAhoIAPAaIAABOQAAALAEAGQADAHAIAEIAEACIADADIABAEQAAAEgDACQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgFQAAgDADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_60.setTransform(1071.3,347.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AASBTQARgDAJgLQAJgMAAgTIAAhfQAAgKgEgHQgDgGgIgFIgDgCIgCgBIgCgCIAAgEQAAgEADgBQACgCAGAAIAlAAIAFABIADAAIABAAIAAABIADACIABADIAAADIgBACIgDACIgFADQgGADgEAIQgEAHAAAKIAABdQAAAbgNARQgOARgYAEgAACBmQgMAAgJgCQgJgBgJgDIgEgBIgDgCQgSgIgHgMQgHgMAAgVIAAhyIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgDgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEADgDQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgCAAIgDABIgBACIgFADIAAAGIAAB5IAAAQIACAJQADAFACACQADACAGACIAAATg");
	this.shape_61.setTransform(1050.7,347.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAEBkIhAAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQACgBADgBIACgBIACgBQABAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIABgGIAAiSIgBgGQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgCgCIgCAAQgDgBgCgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAACrQABAGABACQABACAFACIACAAIABAAQAEABACACQABACAAADQAAAEgCACQgEACgGAAgAAnAlQgCgDgCgEQgCgLgEgFQgFgFgIgDIAAgPQAJgFAEgEQAEgEACgJQABgGACgCQACgCADAAQAEABACACQABADAAAGIAAA3QAAAHgBADQgCACgEAAQgDAAgBgBgABAgoQgCgBgBgDQgFgSgLgIQgLgKgSgBIAAgSIA8AAIAAAzQAAAFgCADQgBACgFAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_62.setTransform(1032.4,347.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAABXQAMgDAFgFQAGgFAAgJQAAgGgCgEQgCgFgFgDIgJgGIgNgGIgWgLIgPgIQgOgKgGgMQgIgOABgQQgBgdATgTQASgRAhgCIAAARQgKADgFAFQgFAFAAAHQAAAHAEAGQADAFAHAFIAHACIALAGIANAFIAKAGIAHADIAFAEIAFADIACACIABABQALAKAFALQAGALgBAOQAAAdgUAUQgVATggABgAgSBnIgHgBIgGgCIgHgCIgHgEIgDgBIgBAAIgBAAIgCAAIgBAAIgCACIgDAEIgBABIgBABIgCAAIgCABQgEAAgDgDQgBgEAAgFIAAg2QAAgEACgCQACgDAEAAQAEAAABACQACABABAGQAEAMAFAJQAFAKAIAIIABABIACABQAEAEAFADIALADIAAARIgHgBgAA0giQgDgCgBgGQgDgQgLgMQgMgMgPgEIAAgRIAGABIAFABIAJADIAOAFIAEABIACAAIACgCIADgEIADgDIAEAAQADAAACADQACACAAAHIAAAvQAAAFgDADQgCACgEAAQgDABgCgDg");
	this.shape_63.setTransform(1006.8,347.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgCIABgDIACgBIACgCIABAAIABAAIADgDIABgFIgBgEIgFgVIgnAAIADgSIAgAAIgah2IAEgOIA6AAIApCrIAAACIABABIACAHIAFADIABAAIABAAIAEAEIABAEQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgLIAhh3IAHAdIgaBeIAAADIAAABIgBACIAAADQAAAEADADQACADAEACIAFACIAEAEIABAEQAAAEgDABQgDACgFAAg");
	this.shape_64.setTransform(989.1,347.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AASBkIAAgQIAJgCIAGgCIAAgBIABAAQAHgFAGgJQAGgJAEgMIABgFIACgCIADgFIAEgBQAEAAABACQACADAAAEIAAA8gAg6BkIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQABgBADgBIACgBIACgBQABAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIABgGIAAiSIgBgGQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgCgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIAFAAQAHABADACQADABAAAFQAAADgCABQgCACgDABIgCABIgCABQgFABgBACIgBAHIAACrg");
	this.shape_65.setTransform(972.4,347.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgYQAAgNgEgGQgDgGgIgBIAAgPQAIgBADgEQAEgFAAgKIAAgnQAAgJgEgEQgDgFgIgDIAAAAIAAgQIADAAQAUAAAKACQALABAIAEIACACIACABQAMAHAFAKQAHALAAANQAAAMgFAKQgEAJgIAGIAAAAIgBAAIgGAFIgIADIgGAEIgKABIADAAIABAAIAPAEIAJAEIACABIAAAAQAIAFAEAHQAFAHAAAIIAAAdIABAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIABAAIABgBIABgBIACgCIACgCIABgBIACgBIACAAIABAAIABAAIADACIACAEIABABIAAABIgCAFIgDAHIgHAHIgHAGQgEACgHACQgGACgJAAQgTAAgLgLgAgPBiIhCAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQABgBADgBIACgBIACgBIAEgDIABgGIAAiSIgBgGQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDgCIgCAAIgEgDQgCgCAAgDQAAgEADgCQADgCAFAAIAEAAIBCAAIAACrIABAIQABABAEACIADAAIACABQADABABACQACACAAADQAAAEgDACQgCACgIAAg");
	this.shape_66.setTransform(945.5,347.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgCIABgDIACgBIACgCIABAAIABAAIADgDIABgFIgBgEIgFgVIgnAAIADgSIAgAAIgah2IAEgOIA6AAIApCrIAAACIABABIACAHIAFADIABAAIABAAIAEAEIABAEQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgLIAhh3IAHAdIgaBeIAAADIAAABIgBACIAAADQAAAEADADQACADAEACIAFACIAEAEIABAEQAAAEgDABQgDACgFAAg");
	this.shape_67.setTransform(925.3,347.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQABgBADgBIACgBIACgBQAEgCAAgBIABgGIAAiSIgBgGQAAgCgEgBIgCgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIADAAQAGAAADACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgDABIgDAAIgBACIgFADIAAAGIAACSIAAAGIAFADIABABIADABQADABABABQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDACQgDACgGAAg");
	this.shape_68.setTransform(910,347.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AATBWQAPAAAMgLQAMgKAFgOQABgFACgCQACgCAEAAQADAAACADQADACAAAEQAAAEgCAFIgGAMIgGAIIgHAHIgDADIgCACQgIAGgJADQgIADgKAAgAg4BMQgXgaAAgvQAAgTAFgSQAFgSAJgOQAIgKALgJQALgIAMgFIALgEIAKgBIAEAAIAAARQgHADgFAFQgEAHAAAMIAAB3IAAAGQABAJAEAGQAEAFAHAAIAAASQgogBgXgbgABBgYQgCgCgBgFQgGgYgMgOQgLgOgOgCIAAgBIAAgRIABABIACAAIACAAIADABIAHACIANAEIAGACIADABIABAAIABAAIADgBIACgCIACgEQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIAEgBQAEAAACACQACADAAAEIAAA9QAAAFgCAEQgCACgEAAQgDABgDgDg");
	this.shape_69.setTransform(895.1,347.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQABgBADgBIACgBIACgBQAEgCAAgBIABgGIAAiSIgBgGQAAgCgEgBIgCgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIADAAQAGAAADACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgDABIgDAAIgBACIgFADIAAAGIAACSIAAAGIAFADIABABIADABQADABABABQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDACQgDACgGAAg");
	this.shape_70.setTransform(880.6,347.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgBIAAgCIADgCIAEgDQAHgEADgGQAEgIAAgKIAAhoIAPAaIAABOQAAALAEAGQADAHAIAEIAEACIADADIABAEQAAAEgDACQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgFQAAgDADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_71.setTransform(864.8,347.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQABgBADgBIACgBIACgBQABAAABgBQABAAAAgBQABAAAAAAQAAgBAAAAIABgGIAAiSIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAIgCgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIADAAQAGAAADACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgDABIgDAAIgBACIgFADIAAAGIAACSIAAAGIAFADIABABIADABQADABABABQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDACQgDACgGAAg");
	this.shape_72.setTransform(848.5,347.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgKAGgRIABgCIABgBIACgEIAEgBQAFAAABACQACACAAAHIAAAzgAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCADgBIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCAAIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAkIgDgHQgCgJgFgGQgEgFgIgCIAAgRQAJgDAEgFQAEgFACgHQABgHACgBQACgCADAAQAFAAABACQACADAAAHIAAA2QAAAHgCACQgBADgFAAQgDAAgCgCgAA/gnIgDgEIAAgBIAAgBQgGgRgLgJQgKgIgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_73.setTransform(1189.6,309.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAEBUQALgCADgFQADgFAAgNIAAh0QAAgMgEgGQgDgGgKgBIAAgRIAPABIAMADIAFACIAFADQAYAMAMAXQALAYAAAfQAAAggMAYQgNAZgYAMIgEACIgEACQgGACgGAAIgPABgAhIBkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCADgBIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCAAIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBBAAIAADHg");
	this.shape_74.setTransform(1171.3,309.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAGBYQAHgCAEgGQACgFAAgMIAAiBQAAgJgCgFQgEgFgHgCIAAgQQAmACAWAdQAXAdAAArQAAAtgWAcQgXAcgmADgAhBBJQgXgcAAgtQAAgrAXgdQAXgdAlgCIAAAQQgIACgDAFQgCAFAAAJIAACBQAAAMACAGQADAFAIACIAAAQQgmgDgWgcg");
	this.shape_75.setTransform(1143.4,309.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgFAAQgHAAgDgCQgDgCAAgEQAAgDACgCQACgCADAAIACgBIACgBQAFgBABgCQABgDAAgFIAAirIBAAAIAACrQAAAFACADQABACAFABIACABIACABQADAAACACQACACAAADQAAAEgDACQgEACgGAAgAhQgfQgCgDAAgEIAAg9IAmAAIAAASQgHAEgFAJQgFAJgCAMIgCAJQAAAFgDACQgCACgEABQgDAAgDgDgABEgfQgCgDgBgEIgBgJQgDgNgEgJQgFgIgIgEIAAgSIAnAAIAAA9QAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_76.setTransform(1125.1,309.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgCACgBIAFgBIAIAAIBAAAIBNCGIAABBgAhOBkQgGAAgEgCQgDgCAAgEIABgCIAAgBIADgCIAEgCQAHgFADgHQAEgGAAgLIAAhnIAPAaIAABNQAAAKAEAHQADAGAIAEIAEADIADADIABAEQAAADgDACQgDACgHAAgAA2gNIAAgpQAAgMgEgHQgDgGgJgEIgBgBIgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgEQAAgEADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAAKIAABCg");
	this.shape_77.setTransform(1106.4,309.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AASBTQARgDAJgLQAJgMAAgTIAAhfQAAgKgEgHQgDgHgIgDIgDgCIgCgCIgCgDIAAgCQAAgEADgCQACgCAGAAIAlAAIAFAAIADABIABAAIAAAAIADADIABAEIAAACIgBACIgDACIgFADQgGAEgEAGQgEAIAAAJIAABfQAAAagNARQgOARgYAEgAACBmQgMAAgJgBQgJgCgJgDIgEgBIgDgBQgSgJgHgMQgHgMAAgVIAAhzIgBgGQAAAAAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgDgBIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEADgDQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgCABIgDABIgBABIgFACIAAAHIAAB6IAAAPIACAJQADAFACACQADADAGABIAAATg");
	this.shape_78.setTransform(1085.8,310);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgFBkIhBAAIgEAAQgGAAgDgCQgCgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCADgBIACgBIACgBQADgBABgCIABgHIAAiSIgBgGQgBgBgDgCIgCAAIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBBAAIAACrQAAAFACADQABACAEABIACABIABABQAEAAABACQACACAAADQAAAEgDACQgDACgGAAgAAGAIQAKgCADgGQAEgDAAgMIAAgvQAAgKgEgFQgEgFgJgBIAAgQIADAAIADAAIADAAIANABIALACQAWAEANAQQAMAPAAAYQAAAXgNAPQgNAQgXAFIgOABIgRABg");
	this.shape_79.setTransform(1066.4,309.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgDIABgBIACgCIACgBIABgBIABgBIADgDIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEADIABAEQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgKIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEADIABAEQAAADgDACQgDACgFAAg");
	this.shape_80.setTransform(1039,309.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgDIABgBIACgCIACgBIABgBIABgBIADgDIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEADIABAEQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgKIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEADIABAEQAAADgDACQgDACgFAAg");
	this.shape_81.setTransform(1012.1,309.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgFAAQgHAAgDgCQgDgCAAgEQAAgDACgCQACgCADAAIACgBIACgBQAFgBABgCQABgDAAgFIAAirIBAAAIAACrQAAAFACADQABACAFABIACABIACABQADAAACACQACACAAADQAAAEgDACQgEACgGAAgAhQgfQgCgDAAgEIAAg9IAmAAIAAASQgHAEgFAJQgFAJgCAMIgCAJQAAAFgDACQgCACgEABQgDAAgDgDgABEgfQgCgDgBgEIgBgJQgDgNgEgJQgFgIgIgEIAAgSIAnAAIAAA9QAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_82.setTransform(994,309.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAABXQALgCAHgGQAFgFAAgKQAAgFgCgFQgCgEgGgEIgJgFIgLgHIgYgKIgOgIQgNgKgIgNQgGgNgBgQQABgeASgRQASgSAggCIAAARQgJACgFAFQgFAGAAAIQAAAGADAFQAEAGAIAEIAGAEIALAFIAMAGIAKAEIAIAEIAGADIAEAEIACACIABACQALAJAFAKQAFAMABAOQgBAdgUATQgVAUggABgAgSBoIgGgCIgHgCIgHgCIgGgDIgEgCIgBAAIgBAAIgBABIgCAAIgDACIgDADIAAAAIgBABIgCABIgDABQgDAAgCgDQgDgEAAgGIAAg1QAAgEADgDQADgDADAAQADAAACACQACACABAFQADAMAGAKQAFAKAJAJIABABIABABIAIAGIALAEIAAAQIgGAAgAAzgiQgCgCgBgGQgDgQgMgNQgKgMgQgDIAAgQIAGABIAFABIAKACIAMAFIAFABIADAAIABgBIADgFIADgCIADgBQAEAAACACQACAEAAAFIAAAwQAAAFgCADQgDADgEAAQgEAAgCgDg");
	this.shape_83.setTransform(976.6,309.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgKAGgRIABgCIABgBIACgEIAEgBQAFAAABACQACACAAAHIAAAzgAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCADgBIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCAAIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAkIgDgHQgCgJgFgGQgEgFgIgCIAAgRQAJgDAEgFQAEgFACgHQABgHACgBQACgCADAAQAFAAABACQACADAAAHIAAA2QAAAHgCACQgBADgFAAQgDAAgCgCgAA/gnIgDgEIAAgBIAAgBQgGgRgLgJQgKgIgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_84.setTransform(959.5,309.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgDIABgBIACgCIACgBIABgBIABgBIADgDIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEADIABAEQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgKIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEADIABAEQAAADgDACQgDACgFAAg");
	this.shape_85.setTransform(932.9,309.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgZQAAgMgEgGQgEgGgHgBIAAgPQAIgBADgFQAEgEAAgKIAAgnQAAgJgEgEQgDgEgIgDIAAgBIAAgQIADAAQAUAAAKABQALADAIAEIACABIACABQAMAGAFALQAHAKgBAOQAAALgDAKQgFAKgIAGIAAAAIgBABIgGAEIgHAEIgHACIgKACIACAAIACAAIAPAEIAJAEIABABIABAAQAIAFAEAHQAFAHAAAHIAAAfIAAADQABAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIABAAIACgBIABgCIACgBIABgCIACgBIADgBIAAAAIABABIADADIACADIABAAIAAABIgCAGIgDAHIgHAGIgHAHQgFACgGACQgHACgIAAQgTAAgLgLgAgPBiIhCAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQACgCADgBIACgBIACgBIAEgDIABgHIAAiSIgBgGQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgDgBIgCgBIgFgDQgBgCAAgDQAAgEADgCQACgCAGAAIAEAAIBCAAIAACrIABAHQABADAFABIACAAIABABQAEABABACQACACAAADQAAAEgDACQgCACgIAAg");
	this.shape_86.setTransform(913.6,310);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAGBYQAIgCADgGQACgFAAgMIAAiBQAAgJgCgFQgEgFgHgCIAAgQQAmACAWAdQAXAdAAArQAAAtgWAcQgXAcgmADgAhBBJQgXgcAAgtQAAgrAXgdQAXgdAlgCIAAAQQgIACgDAFQgCAFAAAJIAACBQAAAMACAGQADAFAIACIAAAQQgmgDgWgcg");
	this.shape_87.setTransform(893.2,309.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("ABTBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgDACgBIAEgDIAFgCQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAgBIABgHIAAhCIgXAAIAAgQIAXAAIAAg/IgBgHQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAgBIgFgBIgEgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIAEAAQAGABACABQADACAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgCACgDABIgCABIgCAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgBAHIAACRIABAHQAAAAABABQAAAAAAABQABAAAAAAQABABABAAIACABIACABQADABACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAEgDACQgCACgGAAgAgRBkIhBAAIgEAAQgGAAgDgCQgCgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCADgBIACgBIACgBQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBIgCAAIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBBAAIAEAAQAFABADABQADACAAAEQAAADgCACQgBACgDABIgFABQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgBAHIAACRIABAHQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAIAFACIAEADQACABAAADQAAAEgDACQgDACgFAAg");
	this.shape_88.setTransform(872.4,309.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgDIABgBIACgCIACgBIABgBIABgBIADgDIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEADIABAEQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgKIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEADIABAEQAAADgDACQgDACgFAAg");
	this.shape_89.setTransform(851.8,309.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgbAuQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgDIAIgEIAGgFIADgCIACgCIABgBIAAAAIAEgFIABgEIgBgCIgDgBIgCgBIgCAAQgJgBgGgGQgGgIAAgKQAAgMAIgIQAIgIAMAAQAMAAAJAKQAJAJAAAOIAAAEIAAAEQgCALgJAMQgJAMgMAJIgMAGQgFACgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_90.setTransform(1166.8,281.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAGBXQAHgBAEgFQACgGAAgLIAAiDQAAgIgCgFQgEgEgHgDIAAgQQAlACAXAdQAXAcAAAtQAAAsgWAcQgXAcgmADgAhCBJQgWgcAAgsQAAgtAXgcQAXgdAlgCIAAAQQgIADgCAEQgDAFAAAIIAACDQAAAMADAFQACAFAIACIAAAQQgmgDgXgcg");
	this.shape_91.setTransform(1152.3,272.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AADBkIAAgPQAKgBAFgFQAEgGAAgLIAAghQAAgMgEgFQgFgHgKgBIAAgOQALAAAFgGQADgGAAgNIAAgZQAAgLgEgFQgGgGgJgBIAAgQIAQAAQAhAAARANQARAMAAAYQAAAMgEAJQgGALgKAFIgBABIgCABIgGADIgIADIgGABIgHACIAJABIAFABIAGACIAEABIACABIADABQAMAGAGALQAHALAAAPQAAANgGAMQgGAKgLAHIgBABIgCABQgJAFgJABQgKACgQAAgAhKBkIgDAAQgGAAgDgCQgCgCAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQACgBACgBIADgBIACgBQABAAAAgBQABAAAAgBQABAAAAAAQAAgBAAAAIABgGIAAiTIgBgFQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBIgCgBIgDAAQgCgBgCgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgEACgCQADgCAGAAIADAAIBCAAIAADHg");
	this.shape_92.setTransform(1132.9,272.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgDIABgDIACgBIACgCIABAAIABAAIADgDIABgFIgBgEIgFgVIgnAAIADgSIAgAAIgah2IAEgOIA6AAIApCrIAAACIABABIACAHIAFADIABAAIABAAIAEADIABAFQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgFADgMIAhh3IAHAeIgaBdIAAADIAAABIgBACIAAACQAAAEADAEQACADAEACIAFACIAEADIABAFQAAAEgDABQgDACgFAAg");
	this.shape_93.setTransform(1113.4,272.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AATBWQAPAAAMgLQAMgKAFgOQABgFACgCQACgCAEAAQADAAACADQADADAAADQAAAEgCAFIgGAMIgGAIIgHAHIgDADIgCACQgIAGgJADQgIADgKAAgAg4BMQgXgbAAguQAAgTAFgSQAFgSAJgOQAIgLALgIQALgJAMgEIALgEIAKgBIAEAAIAAARQgHACgFAHQgEAGAAAMIAAB3IAAAGQABAJAEAGQAEAFAHAAIAAASQgogBgXgbgABBgYQgCgCgBgFQgGgYgMgOQgLgOgOgCIAAgBIAAgRIABABIACAAIACAAIADABIAHACIANAEIAGACIADABIABAAIABAAIADgBIACgCIACgFQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIAEgBQAEAAACACQACADAAAEIAAA+QAAAFgCADQgCACgEAAQgDABgDgDg");
	this.shape_94.setTransform(1095.2,272.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgJAGgSIABgCIABgCIACgDIAEgBQAFAAABACQACADAAAFIAAA0gAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgBADgBIACgBIACgBQABAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIAAiTIgBgFQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAQgDgBgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAlIgDgHQgCgLgFgFQgEgGgIgCIAAgQQAJgEAEgEQAEgEACgJQABgFACgDQACgCADAAQAFABABACQACADAAAGIAAA3QAAAHgCADQgBACgFAAQgDAAgCgBgAA/gnIgDgEIAAAAIAAgBQgGgSgLgIQgKgJgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_95.setTransform(1069.6,272.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAhBkIhBAAIgFAAQgHAAgDgCQgDgCAAgEQAAgDACgCQACgCADgBIACAAIACAAQAFgCABgCQABgCAAgFIAAisIBAAAIAACrQAAAFACADQABACAFACIACAAIACAAQADABACACQACACAAADQAAAEgDACQgEACgGAAgAhQgfQgCgDAAgEIAAg9IAmAAIAAASQgHAEgFAJQgFAJgCAMIgCAJQAAAEgDADQgCACgEAAQgDAAgDgCgABEgfQgCgDgBgEIgBgKQgDgMgEgIQgFgJgIgEIAAgSIAnAAIAAA8QAAAEgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_96.setTransform(1051.9,272.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgDIABgCIAAgCIADgCIAEgDQAHgEADgGQAEgIAAgKIAAhoIAPAaIAABOQAAALAEAGQADAHAIAEIAEACIADADIABAEQAAADgDADQgDABgHAAgAA2gOIAAgoQAAgMgEgHQgDgGgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgFQAAgDADgCQACgCAGAAIAlAAQAGAAADACQADACAAAEIgBADIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_97.setTransform(1033.2,272.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAPBkIAAgQQASgCALgJQALgJAGgSIABgCIABgCIACgDIAEgBQAFAAABACQACADAAAFIAAA0gAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgBADgBIACgBIACgBQABAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIAAiTIgBgFQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAQgDgBgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAlIgDgHQgCgLgFgFQgEgGgIgCIAAgQQAJgEAEgEQAEgEACgJQABgFACgDQACgCADAAQAFABABACQACADAAAGIAAA3QAAAHgCADQgBACgFAAQgDAAgCgBgAA/gnIgDgEIAAAAIAAgBQgGgSgLgIQgKgJgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_98.setTransform(1014.1,272.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAWBbQgLgLAAgUIAAgYQAAgNgDgGQgFgGgHgBIAAgPQAIgBAEgEQADgFAAgKIAAgnQAAgJgDgEQgEgEgIgEIAAAAIAAgQIAEAAQATAAAKACQAKACAJADIACABIACACQAMAHAFAKQAHALgBANQAAAMgDAKQgFAJgIAGIAAAAIgBAAIgFAFIgIADIgHAEIgKABIACABIACAAIAPADIAJAEIABABIABABQAIAEAFAHQADAHAAAIIAAAdIABAEQABAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIABAAIABgBIACgBIABgCIABgCIACgBIACgBIADAAIAAAAIABAAIADACIACAEIABABIAAABIgCAFIgDAHIgHAHIgHAFQgFAEgGABQgHACgHAAQgUAAgLgLgAgPBiIhCAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQACgBADgBIACgBIACgBIAEgDIABgGIAAiTIgBgFQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAIgFgDQgBgCAAgDQAAgEADgCQACgCAGAAIAEAAIBCAAIAACrIAAAHQACADAFABIACABIABAAQAEABABACQACACAAADQAAAEgCACQgEACgHAAg");
	this.shape_99.setTransform(995.2,272.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAFBkIhBAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQACgBADgBIACgBIACgBQABAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIABgGIAAiTIgBgFQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBgBIgCgBIgCAAQgDgBgCgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBBAAIAACrQAAAFABADQABACAFACIACAAIABAAQAEABACACQABACAAADQAAAEgCACQgEACgGAAgAAnAlQgCgDgCgEQgCgLgEgFQgFgGgIgCIAAgQQAJgEAEgEQAEgEACgJQABgFACgDQACgCADAAQAFABABACQACADgBAGIAAA3QABAHgCADQgBACgFAAQgDAAgBgBgABAgoQgCgBgBgDQgFgSgLgIQgLgJgSgDIAAgRIA8AAIAAAzQAAAFgCADQgCACgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_100.setTransform(976.1,272.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AASBkIAAgQIAJgCIAGgDIAAAAIABAAQAHgFAGgJQAGgJAEgMIABgFIACgCIADgFIAEgBQAEAAABACQACADAAAEIAAA8gAg6BkIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQABgBADgBIACgBIACgBQABAAABgBQABAAAAgBQAAAAABAAQAAgBAAAAIABgGIAAiTIgBgFQAAgCgEgCIgCgBIgCAAQgDgBgBgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEADgCQADgCAFAAIAEAAIBBAAIAFAAQAHABADACQADACAAADQAAAEgCABQgCACgDABIgCABIgCAAQgFACgBACIgBAHIAACrg");
	this.shape_101.setTransform(951.5,272.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgDIABgDIACgBIACgCIABAAIABAAIADgDIABgFIgBgEIgFgVIgnAAIADgSIAgAAIgah2IAEgOIA6AAIApCrIAAACIABABIACAHIAFADIABAAIABAAIAEADIABAFQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgFADgMIAhh3IAHAeIgaBdIAAADIAAABIgBACIAAACQAAAEADAEQACADAEACIAFACIAEADIABAFQAAAEgDABQgDACgFAAg");
	this.shape_102.setTransform(933.7,272.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAGBXQAIgBACgFQADgGAAgLIAAiDQAAgIgDgFQgCgEgIgDIAAgQQAlACAYAdQAWAcAAAtQAAAsgWAcQgWAcgnADgAhBBJQgXgcAAgsQAAgtAXgcQAXgdAlgCIAAAQQgHADgEAEQgDAFAAAIIAACDQAAAMADAFQAEAFAHACIAAAQQgmgDgWgcg");
	this.shape_103.setTransform(906.6,272.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAABXQALgDAHgFQAFgGAAgIQAAgGgCgEQgCgFgGgDIgJgGIgLgHIgYgKIgOgIQgNgKgIgMQgGgOAAgQQAAgdASgTQATgRAfgCIAAARQgJADgFAFQgFAFAAAHQAAAIAEAFQADAFAIAFIAGACIALAGIAMAFIAKAGIAIADIAGAEIAEADIACACIACABQAKAKAFALQAFALABAOQAAAdgVAUQgVATggABgAgSBnIgHgBIgGgCIgHgDIgGgDIgEgBIgBAAIgBAAIgCAAIgBAAIgCACIgEAEIAAABIgBABIgCABIgCAAQgEAAgCgDQgCgDAAgGIAAg2QAAgEACgCQADgDADAAQADAAACACQACABABAGQAEALAFAKQAFAKAIAIIABABIACABQAEAFAEACIALADIAAARIgGgBgAA0giQgDgCgBgGQgDgQgLgMQgLgMgPgEIAAgRIAFABIAFABIAKADIAMAFIAFABIACAAIACgCIAEgEIACgDIADAAQAEAAACADQACACAAAHIAAAwQAAAEgCADQgDACgEABQgEgBgBgCg");
	this.shape_104.setTransform(888.6,272.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgDIABgDIACgBIACgCIABAAIABAAIADgDIABgFIgBgEIgFgVIgnAAIADgSIAgAAIgah2IAEgOIA6AAIApCrIAAACIABABIACAHIAFADIABAAIABAAIAEADIABAFQAAAEgDABQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgFADgMIAhh3IAHAeIgaBdIAAADIAAABIgBACIAAACQAAAEADAEQACADAEACIAFACIAEADIABAFQAAAEgDABQgDACgFAAg");
	this.shape_105.setTransform(870.9,272.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgFBkIhBAAIgEAAQgGAAgDgCQgCgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgBADgBIACgBIACgBQABAAAAgBQABAAABgBQAAAAAAAAQABgBAAAAIABgGIAAiTIgBgFQgBgCgDgCIgCgBIgCAAQgDgBgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBBAAIAACrQAAAFACADQABACAEACIACAAIABAAQAEABABACQACACAAADQAAAEgDACQgDACgGAAgAAGAHQAKgCADgEQAEgEAAgLIAAgwQAAgKgEgFQgEgFgJgBIAAgQIADAAIADAAIADABIANAAIALACQAWAEANAQQAMAQAAAWQAAAYgNAPQgNAQgXAEIgOACIgRABg");
	this.shape_106.setTransform(852.3,272.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3E4418").s().p("AgTBgQgJgIAAgMQAAgMAJgIQAIgJALABQAMgBAIAJQAJAIAAAMQAAAMgJAIQgIAIgMAAQgLAAgIgIgAgEAhIgCgHIAAgEIgBgEIAAgDIgBgDIAAgEIgBgFIgFgOIgFgSIgEgKIgCgIIgCgDIAAgFIgCgHIAAgGQAAgPAIgKQAJgKAMAAQANAAAJAKQAIAKAAAQIAAAAIAAABIAAACIgCANQgBAIgFAMQgGATgDAMQgDANgBAMQAAAFgCADQgCADgEgBQgDAAgCgCg");
	this.shape_107.setTransform(227.9,636.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3E4418").s().p("AAIBkQgEAAgDgCQgBgCAAgDIAAgEIABgCIACgBIACgBIABgBIABAAIADgEIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgEAEgGQAFgFADgLIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAADgDACQgDACgFAAg");
	this.shape_108.setTransform(213.6,636.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3E4418").s().p("AAfBkIhAAAIgGAAQgGAAgDgCQgEgCABgEQAAgDABgCQACgCAEAAIACgBIABAAQAFgCACgCIABgIIAAgxIgqhiIgCgFIgFgDIgCgCIgCgBIgBgDIAAgDQgBgDADgCQADgCAFAAIBIAAQAFAAADACQADACAAAEIgBAEIgDADIgDACIgCADIgBADIAAACIABABIAAABIAAABIAAABIAAABIAiBNIAABAQAAAFABADQACACAFACIABAAIACABQAEAAACACQABACAAADQAAAEgDACQgDACgHAAgAAcgYIAPgiIACgDIABgDIAAgDIAAgDQAAgEgDgDQgBgDgGgCIgDgBIgCgBIgCgDIgBgEQAAgEADgCQADgCAIAAIAkAAQAFAAADACQACADAAADIgBAEIgCADIgBABIgCABQgHACgEAFQgEADgDAHIgDAHIgYA2g");
	this.shape_109.setTransform(195.4,636.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3E4418").s().p("AAABXQALgDAHgFQAFgFAAgJQAAgGgCgEQgCgFgGgDIgJgGIgLgGIgYgLIgOgIQgNgKgIgMQgGgOAAgQQAAgdASgTQATgRAfgCIAAARQgJACgFAGQgFAFAAAHQAAAHAEAGQADAFAIAFIAGACIALAGIAMAFIAKAGIAIADIAGAEIAEADIACACIACABQAKAKAFALQAFALAAAOQABAdgVAUQgVATggABgAgSBnIgGgBIgHgCIgHgCIgGgEIgEgBIgBAAIgBAAIgCAAIgBAAIgCACIgEAEIAAABIgBABIgCAAIgCABQgEAAgCgDQgCgEAAgFIAAg2QAAgEACgDQADgCADAAQADAAACACQACABABAGQAEAMAFAJQAFAKAJAIIAAABIACABQAEAEAEADIALADIAAARIgGgBgAA0giQgDgCgBgGQgDgQgLgMQgLgMgPgEIAAgRIAFABIAFABIAKADIAMAFIAFABIACAAIACgCIAEgEIACgDIADAAQAEAAACADQACACAAAHIAAAvQAAAFgCADQgDACgEAAQgEAAgBgCg");
	this.shape_110.setTransform(281.6,599.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3E4418").s().p("AAPBkIAAgQQASgCALgJQALgJAGgSIABgCIABgCIACgDIAEgBQAFAAABACQACADAAAFIAAA0gAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIACgBIACgBQABAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAIABgGIAAiSIgBgGQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgCgCIgCAAQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAlIgDgIQgCgKgFgFQgEgFgIgDIAAgPQAJgFAEgEQAEgEACgJQABgGACgCQACgCADAAQAFABABACQACADAAAGIAAA3QAAAHgCADQgBACgFAAQgDAAgCgBgAA/gnIgDgEIAAAAIAAgBQgGgSgLgIQgKgKgSgBIAAgSIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_111.setTransform(264.4,599.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3E4418").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgBIAAgCIADgCIAEgDQAHgEADgGQAEgIAAgKIAAhoIAPAaIAABOQAAALAEAGQADAHAIAEIAEACIADADIABAEQAAADgDADQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgFQAAgDADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_112.setTransform(245.7,599.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3E4418").s().p("AAGBXQAIgBADgFQACgGAAgLIAAiDQAAgIgCgFQgDgEgIgDIAAgQQAmACAWAdQAXAcAAAtQAAAsgWAcQgXAcgmADgAhBBJQgXgcAAgsQAAgtAXgcQAXgdAlgCIAAAQQgIADgDAEQgCAFAAAIIAACDQAAAMACAFQADAFAIACIAAAQQgmgDgWgcg");
	this.shape_113.setTransform(225.9,599.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3E4418").s().p("AAhBkIhBAAIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQABgCADAAIACgBIACgBQABAAABgBQABAAAAgBQABAAAAAAQAAgBAAAAIABgGIAAiSIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAIgCgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBBAAIADAAQAGAAADACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgDABIgDAAIgBACIgFADIAAAGIAACSIAAAGIAFADIABABIADABQADAAABACQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAEgDACQgDACgGAAg");
	this.shape_114.setTransform(210.4,599.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3E4418").s().p("AATBWQAPAAAMgLQAMgKAFgOQABgFACgCQACgCAEAAQADAAACADQADACAAAEQAAAEgCAFIgGAMIgGAIIgHAHIgDADIgCACQgIAGgJADQgIADgKAAgAg4BMQgXgbAAguQAAgTAFgSQAFgSAJgOQAIgLALgIQALgIAMgFIALgEIAKgBIAEAAIAAARQgHADgFAFQgEAHAAALIAAB4IAAAGQABAJAEAGQAEAEAHABIAAASQgogBgXgbgABBgYQgCgCgBgFQgGgYgMgOQgLgOgOgCIAAgBIAAgRIABABIACAAIACAAIADABIAHACIANAEIAGACIADABIABAAIABAAIADgBIACgCIACgEQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIAEgBQAEAAACACQACADAAAEIAAA9QAAAFgCAEQgCACgEAAQgDABgDgDg");
	this.shape_115.setTransform(195.5,599.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3E4418").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgDACAAIAFAAIAIgBIBAAAIBNCHIAABAgAhOBkQgGAAgEgCQgDgCAAgEIABgBIAAgCIADgCIAEgDQAHgEADgGQAEgIAAgKIAAhoIAPAaIAABOQAAALAEAGQADAHAIAEIAEACIADADIABAEQAAADgDADQgDABgHAAgAA2gOIAAgoQAAgMgEgGQgDgHgJgFIgBAAIgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgFQAAgDADgCQACgCAGAAIAlAAQAGAAADACQADACAAAFIgBACIgBACIgCACIgFACQgHAEgDAHQgEAHAAALIAABBg");
	this.shape_116.setTransform(177.1,599.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3E4418").s().p("AASBTQARgDAJgLQAJgMAAgTIAAhfQAAgKgEgHQgDgGgIgFIgDgCIgCgBIgCgCIAAgEQAAgEADgBQACgCAGAAIAlAAIAFABIADAAIABAAIAAABIADACIABADIAAADIgBACIgDACIgFADQgGADgEAIQgEAHAAAKIAABdQAAAbgNARQgOARgYAEgAACBmQgMAAgJgCQgJgBgJgDIgEgBIgDgCQgSgIgHgMQgHgMAAgVIAAhyIgBgGQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgDgCIgCAAQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgFADgCQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQgBACgCAAIgDABIgBACIgFADIAAAGIAAB5IAAARIACAIQADAFACACQADACAGACIAAATg");
	this.shape_117.setTransform(156.6,599.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3E4418").s().p("AAEBkIhAAAIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQACgCADAAIACgBIACgBQABAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIABgGIAAiSIgBgGQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgCgCIgCAAQgDgBgCgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFADgCQACgCAGAAIAEAAIBAAAIAACrQABAGABACQABACAFACIACAAIABAAQAEABACACQABACAAADQAAAEgCACQgDACgHAAgAAnAlQgCgDgBgFQgDgKgEgFQgFgFgIgDIAAgPQAJgFAEgEQAEgEACgJQABgGACgCQACgCADAAQAEABACACQACADgBAGIAAA3QABAHgCADQgCACgEAAQgDAAgBgBgABAgoQgCgBgBgDQgFgSgLgIQgLgKgSgBIAAgSIA8AAIAAAzQAAAFgCADQgBACgFAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_118.setTransform(138.3,599.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3E4418").s().p("AAABXQAMgCAFgGQAGgFAAgKQAAgFgCgFQgCgEgFgEIgJgFIgNgGIgWgLIgPgIQgOgKgGgNQgIgNAAgQQAAgeATgRQASgSAhgCIAAARQgKACgFAFQgFAGAAAIQAAAGADAFQAEAGAHAEIAHAEIALAFIANAGIAKAEIAHAEIAFADIAFAEIACACIABACQALAJAFAKQAGAMgBAOQAAAdgUATQgVAUggABgAgSBoIgHgCIgGgCIgHgCIgHgDIgDgCIgBAAIgBAAIgCABIgBAAIgDACIgCADIgBAAIgBABIgCABIgDABQgDAAgDgDQgCgEAAgGIAAg1QABgEACgDQACgDAEAAQAEAAABACQACACABAFQAEAMAFAKQAFAKAIAJIACABIABABQAEAEAFACIALAEIAAAQIgHAAgAA0giQgDgCgBgGQgDgQgMgNQgLgMgPgDIAAgQIAGABIAFABIAJACIAOAFIAEABIADAAIABgBIADgFIADgCIAEgBQADAAACACQACAEAAAFIAAAwQAAAFgDADQgCADgEAAQgEAAgBgDg");
	this.shape_119.setTransform(295.5,561.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3E4418").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgDIABgBIACgCIACgBIABgBIABgBIADgDIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgKIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAADgDACQgDACgFAAg");
	this.shape_120.setTransform(277.7,561.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3E4418").s().p("AASBkIAAgRIAJgBIAGgCIAAgBIABAAQAHgFAGgJQAGgJAEgMIABgEIACgEIADgEIAEgBQAEAAABACQACADAAAFIAAA7gAg6BkIgEAAQgFAAgDgCQgDgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCADgBIACgBIACgBQABAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIABgHIAAiSIgBgGQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBgBIgCAAIgCgBQgDgBgBgCQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAgEADgCQADgCAFAAIAEAAIBBAAIAFAAQAHABADABQADACAAAEQAAADgCADQgCACgDABIgCAAIgCAAQgFACgBACIgBAHIAACrg");
	this.shape_121.setTransform(261.1,561.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3E4418").s().p("AAIBkQgEAAgDgCQgBgCAAgEIAAgDIABgBIACgCIACgBIABgBIABgBIADgDIABgDIgBgFIgFgVIgnAAIADgSIAgAAIgah1IAEgPIA6AAIApCrIAAACIABACIACAGIAFADIABABIABAAIAEACIABAFQAAADgDACQgDACgFAAgAhQBkQgFAAgDgCQgEgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCAEgBQAJgFAEgFQAFgGADgKIAhh5IAHAfIgaBdIAAACIAAADIgBACIAAABQAAAEADAEQACAEAEABIAFADIAEACIABAFQAAADgDACQgDACgFAAg");
	this.shape_122.setTransform(234.9,561.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3E4418").s().p("AAPBkIAAgQQASgCALgJQALgKAGgRIABgCIABgBIACgEIAEgBQAFAAABACQACACAAAHIAAAzgAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCADgBIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCAAIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAkIgDgHQgCgJgFgGQgEgFgIgCIAAgQQAJgEAEgFQAEgFACgHQABgHACgBQACgCADAAQAFAAABACQACACAAAIIAAA2QAAAHgCACQgBADgFAAQgDAAgCgCgAA/gnIgDgEIAAgBIAAgBQgGgRgLgJQgKgIgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_123.setTransform(200.2,561.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3E4418").s().p("AAhBkIhBAAIgFAAQgHAAgDgCQgDgCAAgEQAAgDACgCQACgCADAAIACgBIACgBQAFgBABgCQABgDAAgFIAAirIBAAAIAACrQAAAFACADQABACAFABIACABIACABQADAAACACQACACAAADQAAAEgDACQgEACgGAAgAhQgfQgCgDAAgEIAAg9IAmAAIAAASQgHAEgFAJQgFAJgCAMIgCAJQAAAFgDACQgCACgEABQgDAAgDgDgABEgfQgCgDgBgEIgBgJQgDgNgEgJQgFgIgIgEIAAgSIAnAAIAAA9QAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_124.setTransform(182.5,561.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3E4418").s().p("AAPBkIAAgQQASgCALgJQALgKAGgRIABgCIABgBIACgEIAEgBQAFAAABACQACACAAAHIAAAzgAg9BkIgEAAQgGAAgCgCQgDgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCADgBIACgBIACgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgHIAAiSIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgCAAIgCgBQgDgBgCgCQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEADgCQACgCAGAAIAEAAIBAAAIAADHgAAlAkIgDgHQgCgJgFgGQgEgFgIgCIAAgQQAJgEAEgFQAEgFACgHQABgHACgBQACgCADAAQAFAAABACQACACAAAIIAAA2QAAAHgCACQgBADgFAAQgDAAgCgCgAA/gnIgDgEIAAgBIAAgBQgGgRgLgJQgKgIgSgDIAAgRIA8AAIAAA0QAAAFgCACQgBACgEAAIgFgBg");
	this.shape_125.setTransform(164.9,561.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3E4418").s().p("AAdBkIhiiqIgDgFIgDgDIgCgCIgDgBIgFgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDABgCQACgCACgBIAFgBIAIAAIBAAAIBNCGIAABBgAhOBkQgGAAgEgCQgDgCAAgEIABgCIAAgBIADgCIAEgCQAHgFADgHQAEgGAAgLIAAhnIAPAaIAABNQAAAKAEAHQADAGAIAEIAEADIADADIABAEQAAADgDACQgDACgHAAgAA2gNIAAgpQAAgMgEgHQgDgGgJgEIgBgBIgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgEQAAgEADgCQACgCAGAAIAlAAQAGAAADACQADACAAAEIgBADIgBACIgCACIgFACQgHAEgDAHQgEAHAAAKIAABCg");
	this.shape_126.setTransform(146.2,561.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3E4418").s().p("AASBvQARgDAJgLQAJgMAAgTIAAhfQAAgKgEgHQgDgHgIgEIgDgCIgCgBIgCgDIAAgDQAAgEADgBQACgCAGAAIAlAAIAGAAIACABIABAAIAAAAIADADIABADIAAADIgBACIgDACIgFADQgGADgEAHQgEAIAAAJIAABeQAAAbgNARQgOARgYAEgAACCCQgMAAgJgCQgJgBgJgDIgDgBIgEgCQgSgIgHgMQgHgMAAgVIAAhzIAAgGIgEgDIgCgBIgDAAQgDgBgBgCQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEADgCQADgCAFAAIAEAAIBCAAIAEAAQAFAAACACQADACAAAEQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgBACgCABIgCAAIgCABQgEACAAABIgBAHIAAB5IAAARIACAIIAAAAQADAFADACQACACAGACIAAATgAgChVIgBAAIgLAAIgDgBIgBgBIABgDIAVghIABgCIABgCIADgBIAFgBIAdAAIADACQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAABIgBAAIgBACIgCACIAAgBIgpAfIgCADIgBABIgBABg");
	this.shape_127.setTransform(125.6,559.2);

	this.instance = new lib.badge4();
	this.instance.parent = this;
	this.instance.setTransform(230,297.4);

	this.instance_1 = new lib.badge3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,297.4);

	this.instance_2 = new lib.badge2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(230,90.4);

	this.instance_3 = new lib.badge1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,90.4);

	this.instance_4 = new lib.cover();
	this.instance_4.parent = this;
	this.instance_4.setTransform(435,391.5,0.75,0.75,0,0,0,-34,-8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#8D8D54").ss(1,1,1).p("A+M9QMA8ZAAAQBkAAAABkMAAAAlsQAABkhkAAMg8ZAAAQhkAAAAhkMAAAglsQAAhkBkAAgA+MWtIVtAAQBkAAAABkIAADcQAABkhkAAI1tAAQhkAAAAhkIAAjcQAAhkBkAAgAIfWjIVuAAQBkAAAABkIAADcQAABkhkAAI1uAAQhkAAAAhkIAAjcQAAhkBkAAg");
	this.shape_128.setTransform(1017.2,423.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8D8D54").s().p("A+MdRQhkAAAAhkIAAjcQAAhkBkAAIVuAAQBjAAABBkIAADcQgBBkhjAAgAIgdHQhlAAAAhkIAAjcQAAhkBlAAIVtAAQBkAAAABkIAADcQAABkhkAAgA+MLkQhkAAAAhkMAAAglsQAAhkBkAAMA8ZAAAQBkAAAABkMAAAAlsQAABkhkAAg");
	this.shape_129.setTransform(1017.2,423.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.intro1, new cjs.Rectangle(0,0,1221.5,799.5), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.lastReturn = new lib.lastReturn();
	this.lastReturn.name = "lastReturn";
	this.lastReturn.parent = this;
	this.lastReturn.setTransform(-180.7,111);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBSIAAgNIAFAAQAUAAAAgTIAAgfQAAgUASgDQgSgCAAgWIAAgUQAAgUgUAAIgFAAIAAgNIAGAAQARAAAIAIQAIAIgBARIAAAUIABAIQABADADACQACADAEABQAFABAFAAIAFAAIAAALIgFAAIgKABQgEABgCADQgDACgBADIgBAIIAAAfQABAHgCAGQgCAGgEAEQgDAEgGADQgGACgKAAg");
	this.shape.setTransform(-303,366.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AggA6IAAgNIALAAQAMAAAIgCQAHgDAFgEQAGgFACgGQADgGABgIIAAgEQgFADgHACQgHACgIAAQgIAAgHgCQgGgDgFgFQgEgEgCgFQgCgHgBgHQAAgIADgHQADgHAGgFQAEgFAIgDQAHgDAIAAQAIAAAIADQAHACAFAHQAGAGADAKQACAKAAAOQAAAQgDAMQgFAMgIAIQgHAIgMAEQgLADgPAAgAgJgrQgEACgDADQgDADgCAEQgCAFAAAGIABAJQACAFADADQACADAFAAQADACAHAAIAFgBIAHgBIAHgCIAEgDQAAgLgBgIQgCgIgDgEQgDgFgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_1.setTransform(-333.1,365.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_2.setTransform(-342.8,365.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAwIAIgBQAFAAADgCQADgCABgEQACgCAAgDIgBgGIgCgFIgDgEIgBgGIAAgEIADgDIACgDQACgBAEgBIAGACQACABADADQACACABAEQABAFAAAFQAAAHgCAHQgDAGgFAFQgGAGgHADQgIADgKAAgAABghIgDgDIgDgEIgBgFIABgGIADgEIADgDQACgBADAAIAFABIAFADIADAEIABAGIgBAFIgDAEIgFADIgFABIgFgBg");
	this.shape_3.setTransform(-185.2,345.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9AE57").s().p("AgQA4QgIgEgFgHQgGgIgDgLQgDgKAAgQQAAgMADgLQADgLAFgHQAFgIAIgFQAIgEAKAAQAJAAAIADQAHAEAGAHQAFAIADAKQADAMAAAOQAAAOgDAKQgCALgGAIQgFAHgIAFQgIAEgKAAQgJAAgHgDgAgWAZIAEAIIAEAHQADADAEABQAEACADAAQAGAAAFgDQAFgDADgGQAEgFACgIQACgJAAgMIgBgEIAAgGgAgKgqQgEADgEAGQgDAFgCAJQgCAJAAAKIAAAFIAAAGIAwgjIgDgJIgFgGQgDgDgEgCQgDgBgFAAQgFAAgFADg");
	this.shape_4.setTransform(-194.5,342.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D695C6").s().p("AAUAtIAAg4QAAgJgDgGQgFgEgHAAIgFAAIgGADIgFAGIgIAJIAAA5IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAQIAAA4g");
	this.shape_5.setTransform(-214.2,343.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_6.setTransform(-223.7,343.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D695C6").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_7.setTransform(-234,343.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D695C6").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_8.setTransform(-244.4,342.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D695C6").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_9.setTransform(-253.8,343.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_10.setTransform(-263.3,343.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgQA5QgIgCgEgEQgFgEgCgFQgDgFAAgGQAAgLAGgHQAFgIANgGQgLgFgGgHQgEgHAAgJQAAgFABgGQADgFAFgEQAEgEAHgDQAHgCAIAAQAKAAAGACQAHACAEAEQAFADADAFQABAFAAAGQAAAKgFAHQgGAHgKAFIAKAFQAEADADAEQADADACAFQACAFAAAGQAAAHgDAFQgDAGgFAEQgFAEgIACQgHACgIAAQgJAAgHgCgAgKALIgHAGIgDAGIgCAHQAAADACADIAFAGIAHADIAIABIAJgBIAHgDQADgCABgDQACgDAAgEIgBgHQgBgCgCgEIgIgFIgKgHIgKAGgAgPgpQgFAEAAAHQAAAEACACIADAFIAHAGIAJAEQAKgEAFgFQAFgFAAgHQAAgIgFgDQgGgEgKAAQgJAAgGAEg");
	this.shape_11.setTransform(-333,342.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_12.setTransform(-342.8,342.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgaA6IAxhkIg9AAIAAgOIBNAAIAAAOIgvBkg");
	this.shape_13.setTransform(-333.1,319.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_14.setTransform(-342.8,319.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgRA3QgGgDgFgGQgGgGgCgKQgCgJAAgOIABgQQAAgIADgHQADgHAEgHQAFgGAGgEQAHgEAJgDQAIgCALAAIALAAIAAANIgMAAQgKAAgIADQgGACgFAFQgFAEgDAGQgDAHgBAIIAAADQAFgDAIgCQAHgCAIAAQAIAAAHADQAGACAFAFQAEADACAGQACAHAAAHQAAAIgDAHQgCAHgGAFQgFAFgHADQgHADgJAAQgJAAgIgDgAgFAAIgGABIgHACIgFADQAAAMACAHQACAIACAEQADAFAFACQAFACAEAAQAGAAAEgCQAEgBADgEQADgDACgEQACgFAAgGIgBgJQgCgEgDgDQgDgDgEgCQgEgBgGAAIgGABg");
	this.shape_15.setTransform(-332.9,296.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_16.setTransform(-342.8,296.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F97B57").s().p("AglAWIAAgNIBLAAIAAANgAglgIIAAgNIBLAAIAAANg");
	this.shape_17.setTransform(-184.5,274.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiAsIAAgLIAwg/IgvAAIAAgNIBBAAIAAALIgvA/IAyAAIAAANg");
	this.shape_18.setTransform(-204.3,274.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_19.setTransform(-223.8,273.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_20.setTransform(-233.9,274.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_21.setTransform(-244,274.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D695C6").s().p("AgRA8QgGgCgCgEQgDgFAAgHQAAgIACgLIARhUIAPAAIgQBUIgCAOIAAAIQABADADAAIAGABIANgBIASgGIAAAOIgRAFIgQACQgIgBgFgCg");
	this.shape_22.setTransform(-253.7,272.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D695C6").s().p("Ag1BRIgFAAIADgNIAIAAQAKAAAGgGQAGgFACgMIAOg/IgdAAIADgMIAcAAIADgPQADgRAKgKQAKgIASAAIAKAAIALACIgCANIgKgCIgKgBQgLAAgGAGQgHAGgCALIgCAPIAmAAIgCAMIgnAAIgMA/QgCAJgDAIQgDAGgFAEQgGAEgHADQgHACgJAAIgEAAg");
	this.shape_23.setTransform(-263.7,274.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgSA6IgFAAIgGgBIgFAAIAAgOIALACIANAAQAGAAAFgCQAFgBAEgDQAFgEACgEQACgEAAgGQAAgLgIgEQgIgFgNAAIgWAAIAAg6IA9AAIAAANIgvAAIAAAgIAKAAQAIAAAIACQAIABAFAEQAGAEAFAFQADAHAAAJQAAAJgDAHQgEAHgHAFQgGAFgJADQgHACgLAAIgGAAg");
	this.shape_24.setTransform(-332.9,273.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_25.setTransform(-342.8,273.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F97B57").s().p("AglAWIAAgNIBLAAIAAANgAglgIIAAgNIBLAAIAAANg");
	this.shape_26.setTransform(-184.5,251.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnA+IgEAAIAAgOIAFABIAEAAIAIgBIAHgEQAEgDACgFIAGgKIgjhXIARAAIAXA6IADANIAFgNIAVg6IARAAIgeBNQgFAMgFAJQgEAJgGAGQgGAFgHADQgHACgIAAIgFAAg");
	this.shape_27.setTransform(-204.4,253.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_28.setTransform(-223.8,250.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_29.setTransform(-233.9,251.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_30.setTransform(-244,251.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D695C6").s().p("AgRA8QgGgCgCgEQgDgFAAgHQAAgIACgLIARhUIAPAAIgQBUIgCAOIAAAHQABAEADABIAGAAIANgBIASgGIAAAOIgRAFIgQABQgIAAgFgCg");
	this.shape_31.setTransform(-253.7,249.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D695C6").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgMIAOg+IgdAAIADgOIAcAAIADgOQADgRAKgJQAKgJASAAIAKAAIALACIgCANIgKgCIgKgBQgLAAgGAGQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA+QgCAKgDAHQgDAGgFAFQgGADgHADQgHACgJAAIgEAAg");
	this.shape_32.setTransform(-263.7,251.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AAKA5IAAgZIg2AAIAAgOIAvhKIAWAAIAABKIAUAAIAAAOIgUAAIAAAZgAgdASIAnAAIAAg8g");
	this.shape_33.setTransform(-333.1,250.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_34.setTransform(-342.8,250.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F97B57").s().p("AglAWIAAgNIBLAAIAAANgAglgIIAAgNIBLAAIAAANg");
	this.shape_35.setTransform(-184.5,228.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAYAsIgYghIgXAhIgUAAIAjgsIghgrIAUAAIAWAiIAXgiIASAAIghArIAjAsg");
	this.shape_36.setTransform(-204.3,228.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_37.setTransform(-223.8,227.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_38.setTransform(-233.9,228.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_39.setTransform(-244,228.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D695C6").s().p("AgRA8QgGgCgCgEQgDgEAAgIQAAgHACgLIARhWIAPAAIgQBWIgCAMIAAAIQABAEADABIAGABIANgCIASgGIAAAOIgRAFIgQABQgIAAgFgCg");
	this.shape_40.setTransform(-253.7,226.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D695C6").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgLIAOg/IgdAAIADgOIAcAAIADgOQADgSAKgIQAKgJASAAIAKABIALABIgCANIgKgCIgKgBQgLABgGAFQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA/QgCAJgDAHQgDAGgFAFQgGADgHADQgHACgJAAIgEAAg");
	this.shape_41.setTransform(-263.7,228.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgZA6IgKgBIAAgNIALACIANAAQAJAAAEgBIAKgFQAEgDACgEQACgEAAgGQAAgFgCgDQgDgDgDgCQgEgDgFgBQgFgCgGAAIgNAAIAAgLIANAAQAGAAACgBQAFgBADgEQADgCABgDQADgEAAgFQgBgJgGgFQgFgDgKAAIgMABIgNADIAAgNIAGgCIAHgCIAHgBIAGAAQAJAAAGACQAIACAEADQAEAEADAFQACAGAAAGQAAAKgEAHQgFAGgKAEIAJADQAEACAEADQADADADAEQACAFAAAFQAAAIgDAHQgEAHgFAEQgHAGgJACQgIADgMAAIgNgBg");
	this.shape_42.setTransform(-332.9,227.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_43.setTransform(-342.8,227);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_44.setTransform(-332.9,204);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_45.setTransform(-342.8,204);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAaBSQgRAAgIgIQgIgIABgQIAAgfIgBgHQgBgEgDgCQgCgCgEgBQgFgCgGAAIgEAAIAAgLIAEAAIALgBIAGgDQACgCACgEIABgIIAAgUQgBgIACgGQACgGADgEQAEgEAHgCQAFgDAKAAIAGAAIAAANIgFAAQgUAAAAAUIAAAUQAAAVgSADQASACAAAVIAAAeQAAAUAUAAIAFAAIAAANg");
	this.shape_46.setTransform(-204.6,182.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgYBLQARgRAIgSQAIgTAAgUQAAgpghgiIAJgJQAoAmAAAtQAAAJgCAKQgCAKgFALQgEALgIALQgHALgMALg");
	this.shape_47.setTransform(-214.4,182.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYABQAAgKACgKQACgLAFgKQAFgLAIgLQAHgLALgKIAJAJQghAiAAAoQAAAUAIATQAIATARARIgJAJQgogmAAgtg");
	this.shape_48.setTransform(-224,182.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#60CAE1").s().p("AAUAtIAAg4QAAgKgDgEQgFgGgHAAIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAPIAAA5g");
	this.shape_49.setTransform(-234,182.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#60CAE1").s().p("AgjA/IAAgNIAdAAIAAg+IgaAAIAAgNIApAAIAABLIAaAAIAAANgAgFgmIgEgDIgCgEIgBgFIABgEIACgEIAEgDIAFgBIADABIAFADIACAEIABAEIgBAFIgCAEIgFADIgDABIgFgBg");
	this.shape_50.setTransform(-243.8,180.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#60CAE1").s().p("AgUAsQgFgCgEgDQgDgEgCgEQgCgFAAgFQABgOAJgHQALgHASAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAHgCIAHgCIAJgBIAHgBQAIAAAGACQAHACAEAEQAEADADAGQACAFAAAHIAAA8IgNAAIAAgMQgIAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIAAAFIADAEIAFADIAHABQAEAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_51.setTransform(-254,182.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#60CAE1").s().p("AAbAtIAAg/IAAgGIAAgFIgCgCIgDAAIgDABIgDADIgEAGIgFAKIAAA4IgNAAIAAg8IgBgIIgBgFIgBgDIgCAAIgEABIgCADIgFAGIgEAKIAAA4IgPAAIAAhXIAMAAIABARIAEgJIAFgGIAEgDIAHgBQAGAAADAFQAEAEAAAKIAEgIIAEgGQADgDACAAQADgCAEAAQAQAAABAaIAAA/g");
	this.shape_52.setTransform(-263.7,182.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_53.setTransform(-283.2,181);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D695C6").s().p("AAOAtIALg4QACgKgCgFQgDgEgHgBQgFABgGADQgEAEgFAHQgFAFgEAIQgDAHgCAIIgGAhIgQAAIAKgvIABgEIABgHIABgMIACgRIAOAAIgCAUQAGgKAIgGQAIgGAKAAQAOAAAGAIQAGAJgDAQIgMA4g");
	this.shape_54.setTransform(-293.7,182.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D695C6").s().p("AgCA+QgEgCgCgEQgDgEAAgGQAAgGACgIIAFgeIACgHIgCgGIgCgCIgEgBQgGAAgGACQgGACgGAEIAAgOQAHgDAGgCQAHgCAHAAQAGAAAEACQAEABACAEQACAEABAGIgCAOIgGAdIgBAJIABAFIADADIAEABQAGAAAFgDIANgFIAAANQgHAEgGABQgHACgHAAQgHAAgDgBgAAFgnIgEgDIgBgDIgBgFIABgFIACgEIAEgDIAFAAIAFAAIADADIACAEIABAEIgBAFIgDAEIgDADIgGABIgEgBg");
	this.shape_55.setTransform(-303.3,180.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_56.setTransform(-333,181);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_57.setTransform(-342.8,180.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgQA4QgIgEgFgHQgGgIgDgLQgDgKAAgQQAAgMADgLQADgLAFgHQAFgIAIgFQAIgEAKAAQAJAAAIADQAHAEAGAIQAFAGADAMQADALAAAOQAAANgDALQgCALgGAIQgFAHgIAFQgIAEgKAAQgJAAgHgDgAgWAZIAEAIIAEAHQADADAEABQAEACADAAQAGAAAFgDQAFgDADgGQAEgFACgIQACgJAAgLIgBgFIAAgGgAgKgqQgEADgEAGQgDAFgCAJQgCAJAAAKIAAAFIAAAGIAwgjIgDgJIgFgGQgDgDgEgBQgDgCgFAAQgFAAgFADg");
	this.shape_58.setTransform(-333.1,158);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_59.setTransform(-342.8,157.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfBSIAAgNIAFAAQAUAAAAgTIAAgfQAAgUASgDQgSgCAAgWIAAgUQAAgUgUAAIgFAAIAAgNIAGAAQARAAAIAIQAIAIgBARIAAAUIABAIQABADADACQACADAEABQAFABAFAAIAFAAIAAALIgFAAIgKABQgEABgCADQgDACgBADIgBAIIAAAfQABAHgCAGQgCAGgEAEQgDAEgGADQgGACgKAAg");
	this.shape_60.setTransform(-303,136.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AggA6IAAgNIALAAQAMAAAIgCQAHgDAFgEQAGgFACgGQADgGABgIIAAgEQgFADgHACQgHACgIAAQgIAAgHgCQgGgDgFgFQgEgEgCgFQgCgHgBgHQAAgIADgHQADgHAGgFQAEgFAIgDQAHgDAIAAQAIAAAIADQAHACAFAHQAGAGADAKQACAKAAAOQAAAQgDAMQgFAMgIAIQgHAIgMAEQgLADgPAAgAgJgrQgEACgDADQgDADgCAEQgCAFAAAGIABAJQACAFADADQACADAFAAQADACAHAAIAFgBIAHgBIAHgCIAEgDQAAgLgBgIQgCgIgDgEQgDgFgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_61.setTransform(-333.1,134.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_62.setTransform(-342.9,134.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D695C6").s().p("AAUAtIAAg3QAAgKgDgGQgFgEgHAAIgFAAIgGADIgFAGIgIAJIAAA5IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAQIAAA4g");
	this.shape_63.setTransform(-234,113.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAKIAAA3g");
	this.shape_64.setTransform(-243.5,113.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D695C6").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_65.setTransform(-253.8,113.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D695C6").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_66.setTransform(-264.2,111.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D695C6").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgCgFgCgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_67.setTransform(-273.6,113.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAKIAAA3g");
	this.shape_68.setTransform(-283.1,113.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AgQA5QgIgCgEgEQgFgDgCgGQgDgFAAgGQAAgLAGgHQAFgIANgGQgLgFgGgHQgEgHAAgJQAAgFABgGQADgFAFgEQAEgEAHgDQAHgCAIAAQAKAAAGACQAHACAEAEQAFADADAFQABAFAAAGQAAAKgFAHQgGAHgKAFIAKAFQAEADADAEQADADACAFQACAFAAAFQAAAIgDAGQgDAFgFAEQgFAEgIACQgHACgIAAQgJAAgHgCgAgKALIgHAGIgDAGIgCAHQAAADACADIAFAGIAHADIAIABIAJgBIAHgDQADgCABgDQACgDAAgEIgBgGQgBgEgCgDIgIgFIgKgGIgKAFgAgPgpQgFAEAAAHQAAAEACACIADAFIAHAGIAJAEQAKgEAFgFQAFgFAAgGQAAgJgFgDQgGgEgKAAQgJAAgGAEg");
	this.shape_69.setTransform(-333,111.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_70.setTransform(-342.9,111.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAaBSQgRAAgIgIQgIgIABgQIAAgfIgBgHQgBgEgDgCQgCgCgEgBQgFgCgGAAIgEAAIAAgLIAEAAIALgBIAGgDQACgCACgEIABgIIAAgUQgBgIACgGQACgGADgEQAEgEAHgCQAFgDAKAAIAGAAIAAANIgFAAQgUAAAAAUIAAAUQAAAVgSADQASACAAAVIAAAeQAAAUAUAAIAFAAIAAANg");
	this.shape_71.setTransform(13.2,90);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgYBLQARgRAIgTQAIgSAAgUQAAgpghghIAJgKQAoAlAAAuQAAAJgCAKQgCALgFAKQgEALgIALQgHALgMALg");
	this.shape_72.setTransform(-6.5,89.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYABQAAgJACgLQACgLAFgLQAFgKAIgLQAHgKALgLIAJAJQghAiAAAoQAAAUAIATQAIATARAQIgJAKQgoglAAgug");
	this.shape_73.setTransform(-194.3,89.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#60CAE1").s().p("AgUAsQgFgCgEgDQgDgEgCgEQgCgFAAgFQABgOAJgHQALgHASAAIASAAIAAgHQAAgIgFgFQgFgFgKAAQgHAAgHACIgPAFIAAgOIAHgCIAHgCIAJgBIAHgBQAIAAAGACQAHACAEAEQAEADADAGQACAFAAAHIAAA8IgNAAIAAgMQgIAIgHADQgHADgIAAQgIAAgFgCgAgHAFQgEABgDACIgEAGIgBAGIAAAFIADAEIAFADIAHABQAEAAAHgDQAHgDAHgHIAAgQIgUAAIgIABg");
	this.shape_74.setTransform(-214.4,90.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#60CAE1").s().p("AAbAtIAAg/IAAgGIAAgEIgCgCIgDgBIgDABIgDADIgEAHIgFAKIAAA3IgNAAIAAg9IgBgIIgBgEIgBgCIgCgBIgEABIgCADIgFAGIgEALIAAA3IgPAAIAAhXIAMAAIABAQIAEgIIAFgFIAEgEIAHgBQAGAAADAFQAEAEAAAKIAEgIIAEgGQADgDACgBQADgBAEAAQAQAAABAaIAAA/g");
	this.shape_75.setTransform(-224.1,90.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#60CAE1").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_76.setTransform(-234,90.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#60CAE1").s().p("AgSAtIgPgDIAAgOQAIADAHABIAPABQALAAAFgDQAFgDAAgGIgBgEIgDgDIgHgEIgLgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAFgEQAEgEAHgCQAHgDAKAAIALABIANACIAAAOIgOgDIgKgBIgJABQgFABgCACIgDADIgBAFIABAEQAAACADACIAHADIALAEIANAFQAGABADADQADAEABADQACAEAAAFQAAAFgCAEQgBADgDADIgGAFIgIADIgJACIgHABIgQgBg");
	this.shape_77.setTransform(-243.9,90.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_78.setTransform(-263.4,88.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_79.setTransform(-273.5,90.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_80.setTransform(-283.6,90.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D695C6").s().p("AgRA8QgGgBgCgFQgDgFAAgHQAAgIACgLIARhUIAPAAIgQBUIgCAOIAAAIQABACADABIAGABIANgBIASgGIAAAOIgRAFIgQACQgIAAgFgDg");
	this.shape_81.setTransform(-293.3,88.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D695C6").s().p("Ag1BRIgFgBIADgMIAIAAQAKAAAGgGQAGgFACgMIAOg/IgdAAIADgMIAcAAIADgPQADgSAKgJQAKgIASAAIAKAAIALACIgCANIgKgCIgKAAQgLgBgGAGQgHAGgCALIgCAPIAmAAIgCAMIgnAAIgMA/QgCAJgDAHQgDAHgFAEQgGAFgHACQgHACgJAAIgEAAg");
	this.shape_82.setTransform(-303.3,90.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#666666").s().p("AgaA6IAxhkIg9AAIAAgOIBNAAIAAAOIgvBkg");
	this.shape_83.setTransform(-333.1,88.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_84.setTransform(-342.9,88.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#666666").s().p("AgRA3QgGgDgFgGQgGgGgCgKQgCgJAAgOIABgQQAAgIADgHQADgHAEgHQAFgGAGgEQAHgEAJgDQAIgCALAAIALAAIAAANIgMAAQgKAAgIADQgGACgFAFQgFAEgDAGQgDAHgBAIIAAADQAFgDAIgCQAHgCAIAAQAIAAAHADQAGACAFAFQAEADACAGQACAHAAAHQAAAIgDAHQgCAHgGAFQgFAFgHADQgHADgJAAQgJAAgIgDgAgFAAIgGABIgHACIgFADQAAAMACAHQACAIACAEQADAFAFACQAFACAEAAQAGAAAEgCQAEgBADgEQADgDACgEQACgFAAgGIgBgJQgCgEgDgDQgDgDgEgCQgEgBgGAAIgGABg");
	this.shape_85.setTransform(-332.9,65.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_86.setTransform(-342.9,65.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgfBSIAAgNIAFAAQAUAAAAgTIAAgfQAAgUASgDQgSgCAAgWIAAgUQAAgUgUAAIgFAAIAAgNIAGAAQARAAAIAIQAIAIgBARIAAAUIABAIQABADADACQACADAEABQAFABAFAAIAFAAIAAALIgFAAIgKABQgEABgCADQgDACgBADIgBAIIAAAfQABAHgCAGQgCAGgEAEQgDAEgGADQgGACgKAAg");
	this.shape_87.setTransform(-303,43.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#666666").s().p("AgSA6IgFAAIgGgBIgFAAIAAgOIALACIANAAQAGAAAFgCQAFgBAEgDQAFgEACgEQACgEAAgGQAAgLgIgEQgIgFgNAAIgWAAIAAg6IA9AAIAAANIgvAAIAAAgIAKAAQAIAAAIACQAIABAFAEQAGAEAFAFQADAHAAAJQAAAJgDAHQgEAHgHAFQgGAFgJADQgHACgLAAIgGAAg");
	this.shape_88.setTransform(-332.9,42.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_89.setTransform(-342.9,42.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgUAwIAIgBQAFgBADgCQADgCABgCQACgDAAgEIgBgGIgCgEIgDgEIgBgGIAAgEIADgEIACgCQACgBAEAAIAGABQACABADADQACADABAEQABADAAAGQAAAHgCAHQgDAGgFAGQgGAFgHADQgIADgKAAgAABghIgDgDIgDgEIgBgGIABgEIADgFIADgCQACgCADAAIAFACIAFACIADAFIABAEIgBAGIgDAEIgFADIgFABIgFgBg");
	this.shape_90.setTransform(-185.2,22.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D695C6").s().p("AAUAtIAAg4QAAgJgDgFQgFgGgHAAIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgHIAHgGIAGgCIAIgBQAOAAAGAJQAIAHAAAQIAAA5g");
	this.shape_91.setTransform(-234,20.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_92.setTransform(-243.5,20.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D695C6").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_93.setTransform(-253.8,21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D695C6").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_94.setTransform(-264.2,19.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D695C6").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgCgFgCgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_95.setTransform(-273.6,21);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_96.setTransform(-283.1,20.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AAKA5IAAgZIg2AAIAAgNIAvhMIAWAAIAABMIAUAAIAAANIgUAAIAAAZgAgdATIAnAAIAAg9g");
	this.shape_97.setTransform(-333.1,19.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_98.setTransform(-342.9,19.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgUAwIAIgBQAFgBADgCQADgCABgCQACgDAAgDIgBgHIgCgEIgDgEIgBgGIAAgEIADgDIACgDQACgCAEAAIAGACQACABADADQACACABAFQABAEAAAFQAAAHgCAHQgDAGgFAGQgGAFgHADQgIADgKAAgAABghIgDgDIgDgEIgBgGIABgEIADgFIADgCQACgCADAAIAFACIAFACIADAFIABAEIgBAGIgDAEIgFADIgFABIgFgBg");
	this.shape_99.setTransform(-145.6,-0.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgYBLQARgRAIgSQAIgTAAgUQAAgpghgiIAJgJQAoAlAAAuQAAAJgCALQgCAKgFAKQgEALgIALQgHALgMALg");
	this.shape_100.setTransform(-155,-2.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgnA+IgEAAIAAgOIAFABIAEAAIAIgBIAHgEQAEgDACgFIAGgKIgjhXIARAAIAXA6IADANIAFgNIAVg6IARAAIgeBNQgFAMgFAJQgEAJgGAGQgGAFgHADQgHACgIAAIgFAAg");
	this.shape_101.setTransform(-164.8,-0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F97B57").s().p("AgaA7QgHgCgEgEQgEgFgCgGQgDgGAAgHQAAgGACgGQABgFADgEIAHgHIAJgFIgCgDQgFgGgCgGQgDgGAAgGQAAgGACgGQACgFAEgEQAEgEAGgCQAFgCAHAAQAHAAAFACQAFACAEADQAEAEABAEQACAFAAAFQABAHgDAFQgCAFgEADIgIAHIgJAGIAWAbQAEgKgBgPIAQAAQAAAMgCAJQgCAKgFAHIASAWIgUAAIgIgJQgHAFgHADQgHACgJAAQgIAAgHgCgAgWAJIgEAFIgDAGIgBAHQAAAFABAEIAFAHIAHAEQADABAGAAQAKAAAJgIIgbgjIgGAEgAgMguIgEADIgEAFIAAAFQAAAFACAEIAFAJIACADIAHgEIAGgFIADgFQACgDAAgEQAAgHgEgEQgDgDgGAAIgGABg");
	this.shape_102.setTransform(-174.4,-3.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#666666").s().p("AgUARIAIgBQAFAAADgCQADgCABgDQACgDAAgDIgBgFIgCgFIgDgEIgBgGIAAgEIADgDIACgDQACgBADAAQAEAAACABQADABACADQADADABAEQABAEAAAFQAAAHgDAGQgCAHgGAFQgFAFgHADQgIADgKAAg");
	this.shape_103.setTransform(-185.3,2.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6C99BB").s().p("AAKAVIgCgpIATAAIgCApgAgYAVIgCgpIATAAIgCApg");
	this.shape_104.setTransform(-194.4,-8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D695C6").s().p("AgNA+IAAg+IgdAAIAAgMIAdAAIAAgPQAAgiAjgBQAKAAALACIAAAOQgMgDgJAAQgVAAAAAVIAAAQIAnAAIAAAMIgnAAIAAA+g");
	this.shape_105.setTransform(-204.3,-3.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D695C6").s().p("AAMA+QgDgCgDgDQgEgDgBgFQgBgFAAgGQAAgGABgFQABgFAEgDQADgEAEgCQAFgCAFAAQAFAAAFACQAEABADAEQADADACAFQABAFAAAGQAAAGgBAEQgCAFgDAEQgEADgEACQgEACgGAAQgFAAgFgBgAASAXIgDADIgDAFIAAAGQAAAIADAEQACADAFAAIAFgBIADgDIADgFIABgGQAAgIgEgDQgCgEgGAAIgEABgAguA+IBPh7IAOAAIhQB7gAgggLQgEgCgDgDQgDgEgCgEQgBgFAAgHQAAgFABgFQACgFAEgEQADgDAEgCQAEgCAFAAQAGAAAFACQADABADADQAEAEABAFQABAEAAAHQAAAFgBAFQgBAFgEAEQgDADgEACQgFACgFAAQgGAAgEgBgAgagyIgDADIgDAFIgBAGQAAAIAEAEQADADAEAAIAFgBIADgDIACgFIABgGQAAgIgDgDQgCgEgGAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAg");
	this.shape_106.setTransform(-214.2,-3.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6C99BB").s().p("AAKAVIgCgpIATAAIgCApgAgYAVIgCgpIATAAIgCApg");
	this.shape_107.setTransform(-224.1,-8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgYABQAAgKACgKQACgLAFgKQAFgLAIgLQAHgLALgKIAJAJQghAiAAAoQAAAUAIATQAIATARARIgJAJQgogmAAgtg");
	this.shape_108.setTransform(-233.9,-2.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6C99BB").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgLIAOg/IgdAAIADgOIAcAAIADgOQADgSAKgIQAKgJASAAIAKABIALABIgCANIgKgCIgKgBQgLABgGAFQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA/QgCAIgDAIQgDAGgFAFQgGAEgHACQgHACgJAAIgEAAg");
	this.shape_109.setTransform(-243.9,-2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6C99BB").s().p("AAOAtIALg4QACgKgCgFQgDgEgHgBQgFABgGADQgEAEgFAHQgFAFgEAIQgDAHgCAIIgGAhIgQAAIAKgvIABgEIABgIIABgLIACgRIAOAAIgCAUQAGgLAIgFQAIgGAKAAQAOAAAGAJQAGAIgDAQIgMA4g");
	this.shape_110.setTransform(-254.1,-2.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6C99BB").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_111.setTransform(-263.6,-2.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6C99BB").s().p("AgcAlQgKgIAAgQQAAgNAEgKQAEgLAIgHQAHgIAJgEQAJgEAMAAIAMABIAMADIgDAOIgLgEIgLgBQgJAAgGADQgHAEgEAGQgFAGgCAIQgDAHAAAIQAAALAGAFQAFAGALAAIAMgCQAGgBAGgCIAAANIgOADIgLABQgSAAgJgIg");
	this.shape_112.setTransform(-273.4,-2.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6C99BB").s().p("AgXAtIgOgCIAAgPIAPAEIAQABQALAAAGgEQAGgDAAgIIgBgDIgDgDIgGgDIgIgDIgKgEIgIgEQgDgCgBgEQgCgEAAgFQAAgGACgFQADgFAFgDQAFgEAHgCQAHgDAKAAIAFABIAGAAIAHABIAGABIAAAOIgOgDIgLgBIgLABIgGADIgEAEQgCADAAADIACAEIADADIAFADIAJADIALAEIAHAEQADADABAEIABAIQAAAGgDAGQgDAFgFAEQgFADgIACQgHACgIAAIgQgBg");
	this.shape_113.setTransform(-283.8,-2.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#666666").s().p("AgZA6IgKgBIAAgNIALACIANAAQAJAAAEgBIAKgFQAEgDACgEQACgEAAgGQAAgFgCgDQgDgDgDgCQgEgDgFgBQgFgBgGgBIgNAAIAAgLIANAAQAGAAACgBQAFgCADgDQADgCABgDQADgFAAgEQgBgJgGgFQgFgDgKAAIgMABIgNADIAAgNIAGgDIAHgBIAHgBIAGAAQAJAAAGACQAIACAEADQAEAFADAEQACAGAAAGQAAAKgEAHQgFAGgKAEIAJADQAEACAEADQADADADAEQACAFAAAFQAAAIgDAHQgEAHgFAEQgHAFgJAEQgIACgMAAIgNgBg");
	this.shape_114.setTransform(-332.9,-3.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_115.setTransform(-342.9,-3.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUAwIAIgBQAFgBADgCQADgBABgDQACgDAAgDIgBgHIgCgEIgDgEIgBgGIAAgEIADgDIACgDQACgCAEAAIAGACQACABADADQACADABAEQABAEAAAFQAAAHgCAHQgDAGgFAGQgGAFgHADQgIADgKAAgAABghIgDgDIgDgEIgBgGIABgFIADgEIADgCQACgCADAAIAFACIAFACIADAEIABAFIgBAGIgDAEIgFADIgFABIgFgBg");
	this.shape_116.setTransform(62.3,-23.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgYBLQARgRAIgSQAIgTAAgUQAAgpghgiIAJgJQAoAmAAAtQAAAJgCAKQgCAKgFALQgEALgIALQgHALgMALg");
	this.shape_117.setTransform(52.9,-25.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6C99BB").s().p("AAKAVIgCgpIATAAIgCApgAgYAVIgCgpIATAAIgCApg");
	this.shape_118.setTransform(43.2,-31);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#66A76F").s().p("AgRArQgHgDgFgGQgGgFgCgJQgEgIAAgLQAAgKAEgIQADgJAFgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAEAGQAGAGACAIQADAJABAKQgBAKgDAIQgDAJgFAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgKgdQgGADgCAEQgEAFgCAGQgBAGAAAFQAAAIACAGQACAHADAEQAEAEAFACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEACgGIABgNQgBgHgBgGQgCgGgDgEQgEgEgFgCQgEgDgGAAQgGAAgEADg");
	this.shape_119.setTransform(33.3,-25.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#66A76F").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgEQAGgEAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_120.setTransform(23.8,-25.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFADAIQACAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_121.setTransform(13.5,-25.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#66A76F").s().p("AAbAtIAAg/IAAgGIAAgFIgCgCIgDAAIgDABIgDADIgEAGIgFAKIAAA4IgNAAIAAg8IgBgIIAAgFIgCgDIgCAAIgEABIgCADIgFAGIgEAKIAAA4IgPAAIAAhXIAMAAIABARIAEgJIAFgGIAEgDIAHgBQAGAAADAFQAEAEAAAKIAEgIIAEgGQADgDADAAQACgCAEAAQAQAAABAaIAAA/g");
	this.shape_122.setTransform(3.6,-25.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#66A76F").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_123.setTransform(-6.3,-25);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#66A76F").s().p("AAUAtIAAg4QAAgKgDgEQgFgGgHAAIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAPIAAA5g");
	this.shape_124.setTransform(-16.2,-25.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#66A76F").s().p("AgRArQgHgDgFgGQgGgFgCgJQgEgIAAgLQAAgKAEgIQADgJAFgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAEAGQAGAGACAIQADAJABAKQgBAKgDAIQgDAJgFAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgKgdQgGADgCAEQgEAFgCAGQgBAGAAAFQAAAIACAGQACAHADAEQAEAEAFACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEACgGIABgNQgBgHgBgGQgCgGgDgEQgEgEgFgCQgEgDgGAAQgGAAgEADg");
	this.shape_125.setTransform(-36,-25.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#66A76F").s().p("AgTA8QgGgDgDgGQgEgGgDgIQgCgIAAgKQAAgLADgIQAEgJAFgGQAGgGAIgDQAIgDAJAAIAIAAIAIACIAAglIAPAAIAAB7IgNAAIgBgQQgGAJgIAEQgHAFgIAAQgIAAgFgDgAgNgGQgIAHAAARQAAAQAFAIQAFAIAIAAQAFAAAGgFQAHgGAHgKIAAgoQgDgCgFAAIgJgBQgMAAgGAIg");
	this.shape_126.setTransform(-46.2,-26.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#66A76F").s().p("AAUAtIAAg4QAAgKgDgEQgFgGgHAAIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAPIAAA5g");
	this.shape_127.setTransform(-55.8,-25.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#66A76F").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_128.setTransform(-65.7,-25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#66A76F").s().p("AgTA+QgIgCgFgDQgFgDgCgEQgCgEAAgFQAAgHADgFQADgFAGgEIgEgDIgCgDIgCgEIgBgEQAAgGADgDIAGgJIgCgFIgDgEIgBgFIgBgGQAAgGADgGQACgGAFgEQAFgEAGgCQAGgCAIgBIAFABIAGABIAgAAIAAANIgPAAIAEAHQACAEAAAEQAAAHgDAHQgCAFgFAEQgFAEgGADQgGACgHAAIgKgBIgIgEIgDAFIgBAEQAAADADACQADADAGAAIAWAAIAMADQAGABAEACQAEADACAFQACAEAAAFQAAAGgCAFQgDAFgFAEQgGAEgIADQgIADgKgBQgLAAgHgBgAgUAcIgDAEIgBADIgBAEQAAAGAHADQAGADAMAAIALgBIAIgEQADgCABgCIACgGQAAgGgFgCQgEgDgJAAIgWgBIgFAEgAgJgxIgGAEQgDADgBADIgBAHQAAAFABADIAEAGQADADADAAQAEACAEAAQAEAAADgCIAGgDQADgDABgEQABgDAAgEQAAgEgBgDIgEgGIgGgFQgEgBgDAAQgFAAgDACg");
	this.shape_129.setTransform(-75.6,-23.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_130.setTransform(-85.5,-25.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#66A76F").s().p("AgSAtIgPgDIAAgOQAIADAHABIAPABQALAAAFgDQAFgDAAgGIgBgEIgDgDIgHgEIgLgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAFgEQAEgEAHgCQAHgDAKAAIALABIANACIAAAOIgOgDIgKgBIgJABQgFABgCACIgDADIgBAFIABAEQAAACADACIAHADIALAEIANAFQAGABADADQADAEABADQACAEAAAFQAAAFgCAEQgBADgDADIgGAFIgIADIgJACIgHABIgQgBg");
	this.shape_131.setTransform(-95.4,-25.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#66A76F").s().p("AgjA+IAAgNIAdAAIAAhiIgaAAIAAgMIApAAIAABuIAaAAIAAANg");
	this.shape_132.setTransform(-115.1,-26.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_133.setTransform(-125.1,-25.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_134.setTransform(-144.9,-25.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#66A76F").s().p("AgSAtIgPgDIAAgOQAIADAHABIAPABQALAAAFgDQAFgDAAgGIgBgEIgDgDIgHgEIgLgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAFgEQAEgEAHgCQAHgDAKAAIALABIANACIAAAOIgOgDIgKgBIgJABQgFABgCACIgDADIgBAFIABAEQAAACADACIAHADIALAEIANAFQAGABADADQADAEABADQACAEAAAFQAAAFgCAEQgBADgDADIgGAFIgIADIgJACIgHABIgQgBg");
	this.shape_135.setTransform(-154.8,-25.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_136.setTransform(-164.7,-25.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#66A76F").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgEQAGgEAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_137.setTransform(-174.2,-25.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#66A76F").s().p("AgTA+QgIgCgFgDQgFgDgCgEQgCgEAAgFQAAgHADgFQADgFAGgEIgEgDIgCgDIgCgEIgBgEQAAgGADgDIAGgJIgCgFIgDgEIgBgFIgBgGQAAgGADgGQACgGAFgEQAFgEAGgCQAGgCAIgBIAFABIAGABIAgAAIAAANIgPAAIAEAHQACAEAAAEQAAAHgDAHQgCAFgFAEQgFAEgGADQgGACgHAAIgKgBIgIgEIgDAFIgBAEQAAADADACQADADAGAAIAWAAIAMADQAGABAEACQAEADACAFQACAEAAAFQAAAGgCAFQgDAFgFAEQgGAEgIADQgIADgKgBQgLAAgHgBgAgUAcIgDAEIgBADIgBAEQAAAGAHADQAGADAMAAIALgBIAIgEQADgCABgCIACgGQAAgGgFgCQgEgDgJAAIgWgBIgFAEgAgJgxIgGAEQgDADgBADIgBAHQAAAFABADIAEAGQADADADAAQAEACAEAAQAEAAADgCIAGgDQADgDABgEQABgDAAgEQAAgEgBgDIgEgGIgGgFQgEgBgDAAQgFAAgDACg");
	this.shape_138.setTransform(-184.5,-23.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#66A76F").s().p("AAUAtIAAg4QAAgKgDgEQgFgGgHAAIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAPIAAA5g");
	this.shape_139.setTransform(-194.4,-25.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#66A76F").s().p("AgiA5IAAgNIAbAAIAAhXIgbAAIAAgOIBFAAIAAAOIgbAAIAABXIAbAAIAAANg");
	this.shape_140.setTransform(-204.3,-26.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6C99BB").s().p("AAKAVIgCgpIATAAIgCApgAgYAVIgCgpIATAAIgCApg");
	this.shape_141.setTransform(-214.2,-31);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgYABQAAgKACgKQACgLAFgKQAFgLAIgLQAHgLALgKIAJAJQghAiAAAoQAAAUAIATQAIATARARIgJAJQgogmAAgtg");
	this.shape_142.setTransform(-224,-25.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6C99BB").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgLIAOg/IgdAAIADgOIAcAAIADgOQADgSAKgIQAKgJASAAIAKABIALABIgCANIgKgCIgKgBQgLABgGAFQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA/QgCAIgDAHQgDAHgFAFQgGAEgHACQgHACgJAAIgEAAg");
	this.shape_143.setTransform(-234,-25.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6C99BB").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_144.setTransform(-243.6,-26.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6C99BB").s().p("AAOAtIALg4QACgKgCgFQgDgEgHgBQgFABgGADQgEAEgFAHQgFAFgEAIQgDAHgCAIIgGAhIgQAAIAKgvIABgEIABgHIABgMIACgRIAOAAIgCAUQAGgKAIgGQAIgGAKAAQAOAAAGAIQAGAJgDAQIgMA4g");
	this.shape_145.setTransform(-254.1,-25.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6C99BB").s().p("AgCA+QgEgCgCgEQgDgEAAgGQAAgGACgIIAFgeIACgHIgCgGIgCgCIgEgBQgGAAgGACQgGACgGAEIAAgOQAHgDAGgCQAHgCAHAAQAGAAAEACQAEABACAEQADAEAAAGIgCAOIgGAdIgBAJIABAFIADADIAEABQAGAAAFgDIANgFIAAANQgHAEgGABQgHACgHAAQgHAAgDgBgAAFgnIgEgDIgBgDIgBgFIABgFIACgEIAEgDIAFAAIAFAAIADADIACAEIABAEIgBAFIgDAEIgDADIgGABIgEgBg");
	this.shape_146.setTransform(-263.7,-26.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6C99BB").s().p("AgqAtIAKgvIABgEIABgHIABgMIACgRIAOAAIgCAUIAHgJIAIgHQADgDAFgBQAFgCAGAAQAPAAAFAJQAGAKgEAQIgQAAIACgKIgBgGQgCgEgCgBIgGgBQgGABgGADQgFAEgFAGQgFAGgDAIQgEAHgBAIIgHAhg");
	this.shape_147.setTransform(-273.5,-25.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6C99BB").s().p("AgtA/IAQhTIABgEIABgHIABgMIADgRIAOAAIgCAUQAGgKAIgGQAIgGAKAAQAHAAAEADQAFABADAEQADAEABAGQACAFAAAHQAAANgDAKQgEALgGAIQgHAIgJAFQgKAFgKAAIgLAAIgIgCIgIAlgAALgvQgEACgDADIgHAIIgGAJIgEAKIgDAKIgEARIAJACIAIABQAGABAFgDQAGgDAEgDQADgEADgFIAEgKIACgKIABgJQAAgIgEgFQgCgEgHgBQgEAAgDACg");
	this.shape_148.setTransform(-284,-23.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_149.setTransform(-332.9,-26.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_150.setTransform(-342.9,-26.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgUAwIAIgBQAFAAADgDQADgBABgEQACgCAAgDIgBgHIgCgEIgDgEIgBgGIAAgEIADgDIACgDQACgBAEgBIAGACQACABADADQACADABAEQABAEAAAFQAAAHgCAHQgDAGgFAFQgGAGgHADQgIADgKAAgAABghIgDgDIgDgEIgBgFIABgGIADgEIADgCQACgCADAAIAFACIAFACIADAEIABAGIgBAFIgDAEIgFADIgFABIgFgBg");
	this.shape_151.setTransform(-214.9,-46.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgnA+IgEAAIAAgOIAFABIAEAAIAIgBIAHgEQAEgDACgFIAGgKIgjhXIARAAIAXA6IADANIAFgNIAVg6IARAAIgeBNQgFAMgFAJQgEAJgGAGQgGAFgHADQgHACgIAAIgFAAg");
	this.shape_152.setTransform(-224.2,-46.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_153.setTransform(-243.6,-49.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_154.setTransform(-253.7,-48.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_155.setTransform(-263.8,-48.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D695C6").s().p("AgRA9QgGgCgCgFQgDgFAAgHQAAgIACgKIARhWIAPAAIgQBWIgCAMIAAAIQABADADABIAGACIANgCIASgGIAAANIgRAGIgQABQgIAAgFgBg");
	this.shape_156.setTransform(-273.5,-49.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D695C6").s().p("Ag1BRIgFgBIADgNIAIABQAKAAAGgGQAGgFACgLIAOhAIgdAAIADgNIAcAAIADgOQADgRAKgKQAKgIASAAIAKABIALABIgCANIgKgCIgKAAQgLAAgGAFQgHAGgCALIgCAOIAmAAIgCANIgnAAIgMBAQgCAIgDAHQgDAHgFAFQgGAEgHACQgHACgJAAIgEAAg");
	this.shape_157.setTransform(-283.5,-48.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_158.setTransform(-333,-49.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_159.setTransform(-342.9,-49.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAaBSQgRAAgIgIQgIgIABgQIAAgfIgBgHQgBgEgDgCQgCgCgEgBQgFgCgGAAIgEAAIAAgLIAEAAIALgBIAGgDQACgCACgEIABgIIAAgUQgBgIACgGQACgGADgEQAEgEAHgCQAFgDAKAAIAGAAIAAANIgFAAQgUAAAAAUIAAAUQAAAVgSADQASACAAAVIAAAeQAAAUAUAAIAFAAIAAANg");
	this.shape_160.setTransform(-75.9,-71.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgYBLQARgRAIgTQAIgSAAgUQAAgpghghIAJgKQAoAmAAAtQAAAJgCAKQgCAKgFALQgEALgIALQgHALgMALg");
	this.shape_161.setTransform(-95.6,-71.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgYABQAAgKACgKQACgLAFgLQAFgKAIgLQAHgKALgLIAJAJQghAiAAAoQAAAUAIATQAIATARAQIgJAKQgogmAAgtg");
	this.shape_162.setTransform(-105.2,-71.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#60CAE1").s().p("AgRArQgHgDgFgGQgGgFgCgJQgEgIAAgLQAAgKAEgIQADgJAFgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAEAGQAGAGACAIQADAJABAKQgBAKgDAIQgDAJgFAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgKgdQgGADgCAEQgEAFgCAGQgBAGAAAFQAAAIACAGQACAHADAEQAEAEAFACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEACgGIABgNQgBgHgBgGQgCgGgDgEQgEgEgFgCQgEgDgGAAQgGAAgEADg");
	this.shape_163.setTransform(-125.1,-71.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#60CAE1").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgDQAGgFAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgGQgEgEgHAAIgGABIgGADIgHAGIgIAJIAAA4g");
	this.shape_164.setTransform(-134.6,-71.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#60CAE1").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_165.setTransform(-144.9,-71.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#60CAE1").s().p("AAbAtIAAg/IAAgGIAAgFIgCgBIgDgBIgDABIgDADIgEAHIgFAJIAAA4IgNAAIAAg9IgBgHIgBgFIgBgCIgCgBIgEABIgCADIgFAGIgEAKIAAA4IgPAAIAAhXIAMAAIABAQIAEgIIAFgFIAEgEIAHgBQAGAAADAFQAEAFAAAJIAEgIIAEgGQADgCACgCQADgBAEAAQAQAAABAaIAAA/g");
	this.shape_166.setTransform(-154.8,-71.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#60CAE1").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_167.setTransform(-164.7,-71.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#60CAE1").s().p("AASA6IgghHIgKgXIAAA5IAAAlIgOAAIAAhzIAUAAIAfBEIAMAaIAAg9IAAghIAOAAIAABzg");
	this.shape_168.setTransform(-174.6,-72.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#60CAE1").s().p("AgRArQgHgDgFgGQgGgFgCgJQgEgIAAgLQAAgKAEgIQADgJAFgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAEAGQAGAGACAIQADAJABAKQgBAKgDAIQgDAJgFAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgKgdQgGADgCAEQgEAFgCAGQgBAGAAAFQAAAIACAGQACAHADAEQAEAEAFACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEACgGIABgNQgBgHgBgGQgCgGgDgEQgEgEgFgCQgEgDgGAAQgGAAgEADg");
	this.shape_169.setTransform(-184.5,-71.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#60CAE1").s().p("AgTA8QgGgDgDgGQgEgGgDgIQgCgIAAgKQAAgLADgIQAEgJAFgGQAGgGAIgDQAIgDAJAAIAIAAIAIACIAAglIAPAAIAAB7IgNAAIgBgQQgGAJgIAEQgHAFgIAAQgIAAgFgDgAgNgGQgIAHAAARQAAAQAFAIQAFAIAIAAQAFAAAGgFQAHgGAHgKIAAgoQgDgCgFAAIgJgBQgMAAgGAIg");
	this.shape_170.setTransform(-194.7,-72.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#60CAE1").s().p("AAUAtIAAg4QAAgJgDgGQgFgEgHAAIgFAAIgGADIgFAGIgIAJIAAA5IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAQIAAA4g");
	this.shape_171.setTransform(-204.3,-71.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#60CAE1").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_172.setTransform(-214.2,-71.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#60CAE1").s().p("AgTA+QgIgCgFgDQgFgDgCgEQgCgEAAgGQAAgGADgFQADgEAGgFIgEgCIgCgEIgCgEIgBgEQAAgGADgEIAGgJIgCgDIgDgFIgBgEIgBgHQAAgGADgGQACgGAFgEQAFgEAGgCQAGgDAIABIAFAAIAGABIAgAAIAAAMIgPAAIAEAIQACAEAAAEQAAAIgDAGQgCAFgFAEQgFAEgGACQgGACgHABIgKgCIgIgDIgDAFIgBAEQAAAEADACQADACAGAAIAWAAIAMACQAGACAEADQAEACACAFQACAEAAAFQAAAGgCAGQgDAFgFAEQgGADgIADQgIACgKABQgLAAgHgCgAgUAcIgDADIgBAFIgBADQAAAGAHADQAGADAMAAIALgBIAIgEQADgBABgEIACgFQAAgFgFgDQgEgDgJAAIgWgBIgFAEgAgJgxIgGAEQgDACgBAEIgBAHQAAAEABAEIAEAGQADACADABQAEACAEAAQAEAAADgCIAGgDQADgEABgDQABgDAAgEQAAgEgBgEIgEgFIgGgFQgEgBgDAAQgFAAgDACg");
	this.shape_173.setTransform(-224.1,-69.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#60CAE1").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_174.setTransform(-234,-71.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#60CAE1").s().p("AgSAtIgPgDIAAgOQAIADAHABIAPABQALAAAFgDQAFgDAAgGIgBgEIgDgDIgHgEIgLgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAFgEQAEgEAHgCQAHgDAKAAIALABIANACIAAAOIgOgDIgKgBIgJABQgFABgCACIgDADIgBAFIABAEQAAACADACIAHADIALAEIANAFQAGABADADQADAEABADQACAEAAAFQAAAFgCAEQgBADgDADIgGAFIgIADIgJACIgHABIgQgBg");
	this.shape_175.setTransform(-243.9,-71.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_176.setTransform(-263.4,-72.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_177.setTransform(-273.5,-71.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_178.setTransform(-283.6,-71.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D695C6").s().p("AgRA9QgGgCgCgFQgDgEAAgIQAAgIACgKIARhWIAPAAIgQBWIgCAMIAAAJQABACADABIAGABIANgBIASgGIAAANIgRAGIgQACQgIAAgFgCg");
	this.shape_179.setTransform(-293.3,-72.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D695C6").s().p("Ag1BRIgFgBIADgMIAIAAQAKAAAGgGQAGgFACgMIAOg/IgdAAIADgMIAcAAIADgPQADgSAKgJQAKgIASAAIAKAAIALACIgCANIgKgCIgKAAQgLgBgGAGQgHAGgCALIgCAPIAmAAIgCAMIgnAAIgMA/QgCAKgDAGQgDAHgFAEQgGAEgHADQgHACgJAAIgEAAg");
	this.shape_180.setTransform(-303.3,-71.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#666666").s().p("AgQA4QgIgEgFgHQgGgIgDgLQgDgKAAgQQAAgMADgLQADgLAFgHQAFgIAIgFQAIgEAKAAQAJAAAIADQAHAEAGAHQAFAIADAKQADAMAAAOQAAAOgDAKQgCALgGAIQgFAHgIAFQgIAEgKAAQgJAAgHgDgAgWAZIAEAIIAEAHQADADAEABQAEACADAAQAGAAAFgDQAFgDADgGQAEgFACgIQACgJAAgMIgBgEIAAgGgAgKgqQgEADgEAGQgDAFgCAJQgCAJAAAKIAAAFIAAAGIAwgjIgDgJIgFgGQgDgDgEgCQgDgBgFAAQgFAAgFADg");
	this.shape_181.setTransform(-333.1,-72.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_182.setTransform(-342.9,-72.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#666666").s().p("AggA6IAAgNIALAAQAMAAAIgCQAHgDAFgEQAGgFACgGQADgGABgIIAAgEQgFADgHACQgHACgIAAQgIAAgHgCQgGgDgFgFQgEgEgCgFQgCgHgBgHQAAgIADgHQADgHAGgFQAEgFAIgDQAHgDAIAAQAIAAAIADQAHACAFAHQAGAGADAKQACAKAAAOQAAAQgDAMQgFAMgIAIQgHAIgMAEQgLADgPAAgAgJgrQgEACgDADQgDADgCAEQgCAFAAAGIABAJQACAFADADQACADAFAAQADACAHAAIAFgBIAHgBIAHgCIAEgDQAAgLgBgIQgCgIgDgEQgDgFgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_183.setTransform(-343,-95.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgfBSIAAgNIAFAAQAUAAAAgTIAAgfQAAgUASgDQgSgCAAgWIAAgUQAAgUgUAAIgFAAIAAgNIAGAAQARAAAIAIQAIAIgBARIAAAUIABAIQABADADACQACADAEABQAFABAFAAIAFAAIAAALIgFAAIgKABQgEABgCADQgDACgBADIgBAIIAAAfQABAHgCAGQgCAGgEAEQgDAEgGADQgGACgKAAg");
	this.shape_184.setTransform(-303,-117.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#666666").s().p("AgQA5QgIgCgEgEQgFgDgCgGQgDgFAAgGQAAgLAGgHQAFgIANgGQgLgFgGgHQgEgHAAgJQAAgFABgGQADgFAFgEQAEgEAHgCQAHgDAIAAQAKAAAGACQAHACAEADQAFAEADAFQABAFAAAGQAAAKgFAHQgGAHgKAGIAKAEQAEADADAEQADAEACAEQACAFAAAFQAAAIgDAGQgDAFgFAEQgFAEgIACQgHACgIAAQgJAAgHgCgAgKALIgHAGIgDAGIgCAGQAAAFACACIAFAGIAHADIAIABIAJgBIAHgDQADgCABgDQACgDAAgEIgBgGQgBgDgCgEIgIgGIgKgFIgKAFgAgPgqQgFAFAAAHQAAADACADIADAFIAHAGIAJAEQAKgEAFgFQAFgFAAgGQAAgIgFgFQgGgDgKAAQgJAAgGADg");
	this.shape_185.setTransform(-342.9,-118.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgUAwIAIgBQAFgBADgBQADgDABgDQACgCAAgEIgBgFIgCgFIgDgEIgBgGIAAgEIADgEIACgCQACgCAEABIAGABQACABADADQACADABADQABAEAAAGQAAAHgCAHQgDAHgFAEQgGAGgHADQgIADgKAAgAABghIgDgDIgDgEIgBgGIABgEIADgFIADgDQACgBADAAIAFABIAFADIADAFIABAEIgBAGIgDAEIgFADIgFABIgFgBg");
	this.shape_186.setTransform(-185.2,-138.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D695C6").s().p("AAUAtIAAg3QAAgLgDgFQgFgEgHgBIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgHIAHgGIAGgCIAIgBQAOAAAGAJQAIAHAAARIAAA4g");
	this.shape_187.setTransform(-234,-140.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_188.setTransform(-243.5,-140.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D695C6").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_189.setTransform(-253.8,-140.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D695C6").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_190.setTransform(-264.2,-141.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D695C6").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgCgFgCgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_191.setTransform(-273.6,-140.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D695C6").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgGQgEgEgHgBIgGACIgGADIgHAGIgIAKIAAA3g");
	this.shape_192.setTransform(-283.1,-140.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#666666").s().p("AgaA5IAxhjIg9AAIAAgOIBNAAIAAAOIgvBjg");
	this.shape_193.setTransform(-343,-141.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgUAwIAIgBQAFAAADgDQADgCABgCQACgDAAgEIgBgFIgCgFIgDgEIgBgGIAAgEIADgEIACgCQACgBAEAAIAGABQACABADADQACADABADQABAEAAAGQAAAHgCAHQgDAHgFAFQgGAFgHADQgIADgKAAgAABghIgDgDIgDgEIgBgGIABgEIADgFIADgDQACgBADAAIAFABIAFADIADAFIABAEIgBAGIgDAEIgFADIgFABIgFgBg");
	this.shape_194.setTransform(-145.6,-162);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgYBLQARgRAIgTQAIgSAAgUQAAgpghgiIAJgJQAoAmAAAtQAAAJgCALQgCAKgFAKQgEALgIALQgHALgMALg");
	this.shape_195.setTransform(-155,-163.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAYAsIgYgiIgXAiIgUAAIAjgsIghgrIAUAAIAWAiIAXgiIASAAIghArIAjAsg");
	this.shape_196.setTransform(-164.7,-163.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F97B57").s().p("AgaA7QgHgCgEgEQgEgFgCgGQgDgGAAgHQAAgGACgGQABgFADgEIAHgHIAJgFIgCgDQgFgGgCgGQgDgGAAgGQAAgGACgGQACgFAEgEQAEgEAGgCQAFgCAHAAQAHAAAFACQAFACAEADQAEAEABAEQACAFAAAFQABAHgDAFQgCAFgEADIgIAHIgJAGIAWAbQAEgKgBgPIAQAAQAAAMgCAJQgCAKgFAHIASAWIgUAAIgIgJQgHAFgHADQgHACgJAAQgIAAgHgCgAgWAJIgEAFIgDAGIgBAHQAAAFABAEIAFAHIAHAEQADABAGAAQAKAAAJgIIgbgjIgGAEgAgMguIgEADIgEAFIAAAFQAAAFACAEIAFAJIACADIAHgEIAGgFIADgFQACgDAAgEQAAgHgEgEQgDgDgGAAIgGABg");
	this.shape_197.setTransform(-174.4,-165);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#666666").s().p("AgUARIAIgBQAFAAADgCQADgCABgDQACgDAAgDIgBgFIgCgFIgDgEIgBgGIAAgEIADgDIACgDQACgBADAAQAEAAACABQADABACADQADADABAEQABAEAAAFQAAAHgDAGQgCAHgGAFQgFAFgHADQgIADgKAAg");
	this.shape_198.setTransform(-185.3,-158.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#6C99BB").s().p("AAKAUIgCgnIATAAIgCAngAgYAUIgCgnIATAAIgCAng");
	this.shape_199.setTransform(-194.4,-169.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D695C6").s().p("AgNA+IAAg+IgdAAIAAgMIAdAAIAAgPQAAgiAjgBQAKABALACIAAAMQgMgCgJAAQgVAAAAAVIAAAQIAnAAIAAAMIgnAAIAAA+g");
	this.shape_200.setTransform(-204.3,-165.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D695C6").s().p("AAMA+QgDgCgDgDQgEgDgBgFQgBgFAAgGQAAgGABgFQABgFAEgDQADgEAEgCQAFgCAFAAQAFAAAFACQAEABADAEQADADACAFQABAFAAAGQAAAGgBAEQgCAFgDAEQgEADgEACQgEACgGAAQgFAAgFgBgAASAXIgDADIgDAFIAAAGQAAAIADAEQACADAFAAIAFgBIADgDIADgFIABgGQAAgIgEgDQgCgEgGAAIgEABgAguA+IBPh7IAOAAIhQB7gAgggLQgEgCgDgDQgDgEgCgEQgBgFAAgHQAAgFABgFQACgFAEgEQADgDAEgCQAEgCAFAAQAGAAAFACQADABADADQAEAEABAFQABAEAAAHQAAAFgBAFQgBAFgEAEQgDADgEACQgFACgFAAQgGAAgEgBgAgagyIgDADIgDAFIgBAGQAAAIAEAEQADADAEAAIAFgBIADgDIACgFIABgGQAAgIgDgDQgCgEgGAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAg");
	this.shape_201.setTransform(-214.2,-165.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6C99BB").s().p("AAKAUIgCgnIATAAIgCAngAgYAUIgCgnIATAAIgCAng");
	this.shape_202.setTransform(-224.1,-169.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgYABQAAgKACgKQACgLAFgLQAFgKAIgLQAHgKALgLIAJAJQghAiAAAoQAAAUAIATQAIATARARIgJAJQgoglAAgug");
	this.shape_203.setTransform(-233.9,-163.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#6C99BB").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgMIAOg+IgdAAIADgOIAcAAIADgOQADgRAKgJQAKgJASAAIAKAAIALACIgCANIgKgCIgKgBQgLAAgGAGQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA+QgCAJgDAIQgDAGgFAEQgGAEgHADQgHACgJAAIgEAAg");
	this.shape_204.setTransform(-243.9,-163.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#6C99BB").s().p("AAOAtIALg3QACgLgCgFQgDgFgHAAQgFAAgGAEQgEAEgFAHQgFAFgEAIQgDAHgCAHIgGAiIgQAAIAKguIABgFIABgIIABgLIACgRIAOAAIgCAUQAGgLAIgFQAIgGAKAAQAOAAAGAJQAGAIgDARIgMA3g");
	this.shape_205.setTransform(-254.1,-163.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#6C99BB").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_206.setTransform(-263.6,-163.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#6C99BB").s().p("AgcAlQgKgIAAgQQAAgNAEgKQAEgLAIgHQAHgIAJgEQAJgEAMAAIAMABIAMADIgDAOIgLgEIgLgBQgJAAgGADQgHAEgEAGQgFAGgCAIQgDAHAAAIQAAALAGAFQAFAGALAAIAMgCQAGgBAGgCIAAANIgOADIgLABQgSAAgJgIg");
	this.shape_207.setTransform(-273.4,-163.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#6C99BB").s().p("AgXAtIgOgCIAAgPIAPAEIAQABQALAAAGgEQAGgDAAgIIgBgDIgDgDIgGgDIgIgDIgKgEIgIgEQgDgCgBgEQgCgEAAgFQAAgGACgFQADgFAFgDQAFgEAHgCQAHgDAKAAIAFABIAGAAIAHABIAGABIAAAOIgOgDIgLgBIgLABIgGADIgEAEQgCADAAADIACAEIADADIAFADIAJADIALAEIAHAEQADADABAEIABAIQAAAGgDAGQgDAFgFAEQgFADgIACQgHACgIAAIgQgBg");
	this.shape_208.setTransform(-283.8,-163.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#666666").s().p("AgRA3QgGgDgFgGQgGgGgCgKQgCgJAAgOIABgQQAAgIADgHQADgHAEgHQAFgGAGgEQAHgEAJgDQAIgCALAAIALAAIAAANIgMAAQgKAAgIADQgGACgFAFQgFAEgDAGQgDAHgBAIIAAADQAFgDAIgCQAHgCAIAAQAIAAAHADQAGACAFAFQAEADACAGQACAHAAAHQAAAIgDAHQgCAHgGAFQgFAFgHADQgHADgJAAQgJAAgIgDgAgFAAIgGABIgHACIgFADQAAAMACAHQACAIACAEQADAFAFACQAFACAEAAQAFAAAFgCQAEgBADgEQADgDACgEQACgFAAgGIgBgJQgCgEgDgDQgDgDgEgCQgEgBgGAAIgGABg");
	this.shape_209.setTransform(-342.8,-164.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgUAwIAIgBQAFgBADgCQADgCABgCQACgDAAgEIgBgGIgCgEIgDgEIgBgGIAAgEIADgEIACgCQACgBAEAAIAGABQACABADADQACADABAEQABADAAAGQAAAHgCAHQgDAGgFAGQgGAFgHADQgIADgKAAgAABghIgDgDIgDgEIgBgGIABgEIADgFIADgCQACgCADAAIAFACIAFACIADAFIABAEIgBAGIgDAEIgFADIgFABIgFgBg");
	this.shape_210.setTransform(52.4,-185);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgYBLQARgRAIgSQAIgTAAgUQAAgpghgiIAJgJQAoAlAAAuQAAAJgCALQgCAJgFALQgEALgIALQgHALgMALg");
	this.shape_211.setTransform(43,-186.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#6C99BB").s().p("AAKAUIgCgoIATAAIgCAogAgYAUIgCgoIATAAIgCAog");
	this.shape_212.setTransform(33.3,-192.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#66A76F").s().p("AgRArQgHgDgFgGQgGgFgCgJQgEgIAAgLQAAgKAEgIQADgJAFgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAEAGQAGAGACAIQADAJABAKQgBAKgDAIQgDAJgFAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgKgdQgGADgCAEQgEAFgCAGQgBAGAAAFQAAAIACAGQACAHADAEQAEAEAFACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEACgGIABgNQgBgHgBgGQgCgGgDgEQgEgEgFgCQgEgDgGAAQgGAAgEADg");
	this.shape_213.setTransform(23.4,-186.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#66A76F").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_214.setTransform(13.9,-186.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_215.setTransform(3.6,-186.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#66A76F").s().p("AAbAtIAAg+IAAgHIAAgFIgCgCIgDAAIgDABIgDAEIgEAFIgFAKIAAA4IgNAAIAAg8IgBgJIgBgEIgBgDIgCAAIgEABIgCADIgFAGIgEAKIAAA4IgPAAIAAhXIAMAAIABARIAEgJIAFgGIAEgDIAHgBQAGAAADAFQAEAFAAAJIAEgIIAEgGQADgCACgBQADgCAEAAQAQAAABAaIAAA/g");
	this.shape_216.setTransform(-6.3,-186.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#66A76F").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_217.setTransform(-16.2,-186.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#66A76F").s().p("AAUAtIAAg4QAAgJgDgFQgFgGgHAAIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgHIAHgGIAGgCIAIgBQAOAAAGAJQAIAHAAAQIAAA5g");
	this.shape_218.setTransform(-26.1,-186.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#66A76F").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_219.setTransform(-45.5,-186.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_220.setTransform(-55.8,-186.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#66A76F").s().p("AAbAtIAAg+IAAgHIAAgFIgCgCIgDAAIgDABIgDAEIgEAFIgFAKIAAA4IgNAAIAAg8IgBgJIgBgEIgBgDIgCAAIgEABIgCADIgFAGIgEAKIAAA4IgPAAIAAhXIAMAAIABARIAEgJIAFgGIAEgDIAHgBQAGAAADAFQAEAFAAAJIAEgIIAEgGQADgCACgBQADgCAEAAQAQAAABAaIAAA/g");
	this.shape_221.setTransform(-65.7,-186.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#66A76F").s().p("AgjA+IAAgMIAdAAIAAg+IgaAAIAAgNIApAAIAABLIAaAAIAAAMgAgFgmIgEgDIgCgEIgBgEIABgGIACgDIAEgDIAFgBIADABIAFADIACADIABAGIgBAEIgCAEIgFADIgDAAIgFAAg");
	this.shape_222.setTransform(-75.5,-188.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#66A76F").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_223.setTransform(-85.1,-186.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#66A76F").s().p("AglA/IAAh7IAOAAIABAPQAGgKAIgDQAHgEAIAAQAIAAAFADQAGAEAEAFQAEAGACAIQACAJAAAKQAAALgEAIQgDAIgGAHQgFAGgIACQgIADgJAAIgIAAIgIgCIAAAlgAgBgwIgGAEQgDACgEADIgHAJIAAAqIAIACIAKABQALAAAHgHQAHgIAAgRIgBgNQgBgFgCgFQgCgEgEgCQgDgCgFgBIgFABg");
	this.shape_224.setTransform(-95.2,-184.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#66A76F").s().p("AgjA+IAAgNIAdAAIAAhiIgaAAIAAgMIApAAIAABuIAaAAIAAANg");
	this.shape_225.setTransform(-115.1,-188.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_226.setTransform(-125.1,-186.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_227.setTransform(-144.9,-186.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#66A76F").s().p("AgSAtIgPgDIAAgOQAIADAHABIAPABQALAAAFgDQAFgDAAgGIgBgEIgDgDIgHgEIgLgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAFgEQAEgEAHgCQAHgDAKAAIALABIANACIAAAOIgOgDIgKgBIgJABQgFABgCACIgDADIgBAFIABAEQAAACADACIAHADIALAEIANAFQAGABADADQADAEABADQACAEAAAFQAAAFgCAEQgBADgDADIgGAFIgIADIgJACIgHABIgQgBg");
	this.shape_228.setTransform(-154.8,-186.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#66A76F").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_229.setTransform(-164.7,-186.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#66A76F").s().p("AgjAtIAAhXIAOAAIAAAQQAIgJAIgFQAGgEAIAAQAOAAAHAJQAHAJgBASIgPAAQAAgMgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_230.setTransform(-174.2,-186.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#66A76F").s().p("AgTA9QgIgBgFgDQgFgDgCgEQgCgFAAgEQAAgHADgEQADgGAGgEIgEgDIgCgDIgCgEIgBgEQAAgGADgDIAGgJIgCgFIgDgEIgBgFIgBgFQAAgIADgFQACgGAFgEQAFgEAGgCQAGgCAIgBIAFABIAGABIAgAAIAAANIgPAAIAEAHQACAEAAAFQAAAHgDAFQgCAGgFAEQgFAEgGADQgGABgHAAIgKAAIgIgDIgDAEIgBAEQAAADADACQADACAGABIAWABIAMACQAGABAEACQAEADACAEQACAFAAAFQAAAGgCAFQgDAGgFADQgGAEgIADQgIACgKAAQgLAAgHgCgAgUAcIgDAEIgBADIgBAEQAAAGAHAEQAGACAMAAIALgBIAIgEQADgCABgCIACgGQAAgGgFgCQgEgCgJgBIgWgBIgFAEgAgJgxIgGAEQgDADgBADIgBAHQAAAEABAEIAEAGQADACADACQAEABAEAAQAEAAADgBIAGgFQADgDABgDQABgDAAgEQAAgEgBgDIgEgHIgGgDQgEgCgDAAQgFAAgDACg");
	this.shape_231.setTransform(-184.5,-184.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#66A76F").s().p("AAUAtIAAg4QAAgJgDgFQgFgGgHAAIgFABIgGADIgFAFIgIAJIAAA6IgQAAIAAhXIAOAAIABAOIAHgHIAHgGIAGgCIAIgBQAOAAAGAJQAIAHAAAQIAAA5g");
	this.shape_232.setTransform(-194.4,-186.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#66A76F").s().p("AgiA5IAAgNIAbAAIAAhXIgbAAIAAgOIBFAAIAAAOIgbAAIAABXIAbAAIAAANg");
	this.shape_233.setTransform(-204.3,-187.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#6C99BB").s().p("AAKAUIgCgoIATAAIgCAogAgYAUIgCgoIATAAIgCAog");
	this.shape_234.setTransform(-214.2,-192.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgYABQAAgJACgLQACgLAFgKQAFgLAIgLQAHgLALgKIAJAJQghAiAAAoQAAAUAIATQAIATARARIgJAJQgoglAAgug");
	this.shape_235.setTransform(-224,-186.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#6C99BB").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgLIAOg/IgdAAIADgOIAcAAIADgOQADgSAKgIQAKgJASAAIAKABIALABIgCANIgKgCIgKgBQgLABgGAFQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA/QgCAJgDAHQgDAGgFAFQgGADgHADQgHACgJAAIgEAAg");
	this.shape_236.setTransform(-234,-186.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#6C99BB").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_237.setTransform(-243.6,-187.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#6C99BB").s().p("AAOAtIALg4QACgKgCgFQgDgEgHgBQgFABgGADQgEAEgFAHQgFAFgEAIQgDAHgCAHIgGAiIgQAAIAKgvIABgEIABgIIABgLIACgRIAOAAIgCAUQAGgLAIgFQAIgGAKAAQAOAAAGAJQAGAIgDAQIgMA4g");
	this.shape_238.setTransform(-254.1,-186.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#6C99BB").s().p("AgCA+QgEgCgCgEQgDgEAAgGQAAgGACgIIAFgeIACgHIgCgGIgCgCIgEgBQgGAAgGACQgGACgGAEIAAgOQAHgDAGgCQAHgCAHAAQAGAAAEACQAEABACAEQADAEAAAGIgCAOIgGAdIgBAJIABAFIADADIAEABQAGAAAFgDIANgFIAAANQgHAEgGABQgHACgHAAQgHAAgDgBgAAFgnIgEgDIgBgDIgBgFIABgFIACgEIAEgDIAFAAIAFAAIADADIACAEIABAEIgBAFIgDAEIgDADIgGABIgEgBg");
	this.shape_239.setTransform(-263.7,-188.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#6C99BB").s().p("AgqAtIAKgvIABgEIABgIIABgLIACgRIAOAAIgCAUIAHgJIAIgHQADgCAFgCQAFgCAGAAQAPAAAFAJQAGAJgEASIgQAAIACgLIgBgGQgCgDgCgCIgGgBQgGABgGADQgFAEgFAGQgFAHgDAHQgEAHgBAHIgHAig");
	this.shape_240.setTransform(-273.5,-186.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#6C99BB").s().p("AgtA/IAQhTIABgEIABgIIABgLIADgRIAOAAIgCAUQAGgLAIgFQAIgGAKAAQAHAAAEACQAFACADAFQADADABAGQACAFAAAHQAAAMgDAMQgEAKgGAIQgHAIgJAFQgKAFgKAAIgLAAIgIgCIgIAlgAALgvQgEACgDADIgHAIIgGAJIgEAKIgDAJIgEASIAJACIAIABQAGAAAFgCQAGgDAEgDQADgEADgFIAEgKIACgKIABgJQAAgIgEgFQgCgEgHgBQgEAAgDACg");
	this.shape_241.setTransform(-284,-184.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#666666").s().p("AgSA6IgFAAIgGgBIgFAAIAAgOIALACIANAAQAGAAAFgCQAFgBAEgDQAFgEACgEQACgEAAgGQAAgLgIgEQgIgFgNAAIgWAAIAAg6IA9AAIAAANIgvAAIAAAgIAKAAQAIAAAIACQAHABAGAEQAGAEAFAFQADAHAAAJQAAAJgDAHQgEAHgHAFQgGAFgJADQgHACgLAAIgGAAg");
	this.shape_242.setTransform(-342.8,-187.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgUAwIAIgBQAFgBADgCQADgCABgCQACgDAAgEIgBgGIgCgEIgDgEIgBgGIAAgEIADgDIACgDQACgCAEAAIAGACQACABADADQACACABAFQABAEAAAFQAAAHgCAHQgDAGgFAGQgGAFgHADQgIADgKAAgAABghIgDgDIgDgEIgBgGIABgEIADgFIADgCQACgCADAAIAFACIAFACIADAFIABAEIgBAGIgDAEIgFADIgFABIgFgBg");
	this.shape_243.setTransform(-214.9,-208.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAYAsIgYghIgXAhIgUAAIAjgsIghgrIAUAAIAWAiIAXgiIASAAIghArIAjAsg");
	this.shape_244.setTransform(-224.1,-209.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_245.setTransform(-243.6,-210.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_246.setTransform(-253.7,-209.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_247.setTransform(-263.8,-209.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#D695C6").s().p("AgRA8QgGgCgCgEQgDgFAAgHQAAgHACgLIARhWIAPAAIgQBWIgCAMIAAAIQABADADACIAGABIANgCIASgGIAAANIgRAGIgQABQgIAAgFgCg");
	this.shape_248.setTransform(-273.5,-211.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D695C6").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgLIAOg/IgdAAIADgOIAcAAIADgOQADgSAKgIQAKgJASAAIAKABIALABIgCANIgKgCIgKgBQgLABgGAFQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA/QgCAIgDAIQgDAGgFAFQgGAEgHACQgHACgJAAIgEAAg");
	this.shape_249.setTransform(-283.5,-209.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#666666").s().p("AAKA5IAAgZIg2AAIAAgNIAvhMIAWAAIAABMIAUAAIAAANIgUAAIAAAZgAgdATIAnAAIAAg9g");
	this.shape_250.setTransform(-343,-210.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAaBSQgRAAgIgIQgIgIABgQIAAgfIgBgHQgBgEgDgCQgCgCgEgBQgFgCgGAAIgEAAIAAgLIAEAAIALgBIAGgDQACgCACgEIABgIIAAgUQgBgIACgGQACgGADgEQAEgEAHgCQAFgDAKAAIAGAAIAAANIgFAAQgUAAAAAUIAAAUQAAAVgSADQASACAAAVIAAAeQAAAUAUAAIAFAAIAAANg");
	this.shape_251.setTransform(-85.8,-232.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgYBLQARgRAIgSQAIgTAAgUQAAgpghgiIAJgJQAoAmAAAtQAAAJgCAKQgCAKgFALQgEALgIALQgHALgMALg");
	this.shape_252.setTransform(-105.5,-232.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgYABQAAgKACgKQACgLAFgKQAFgLAIgLQAHgLALgKIAJAJQghAiAAAoQAAAUAIATQAIATARARIgJAJQgogmAAgtg");
	this.shape_253.setTransform(-115.1,-232.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#60CAE1").s().p("AgRArQgHgDgFgGQgGgFgCgJQgEgIAAgLQAAgKAEgIQADgJAFgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAEAGQAGAGACAIQADAJABAKQgBAKgDAIQgDAJgFAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgKgdQgGADgCAEQgEAFgCAGQgBAGAAAFQAAAIACAGQACAHADAEQAEAEAFACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEACgGIABgNQgBgHgBgGQgCgGgDgEQgEgEgFgCQgEgDgGAAQgGAAgEADg");
	this.shape_254.setTransform(-135,-232.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#60CAE1").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgEQAGgEAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_255.setTransform(-144.5,-232.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#60CAE1").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_256.setTransform(-154.8,-232.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#60CAE1").s().p("AAbAtIAAg/IAAgGIAAgFIgCgCIgDAAIgDABIgDADIgEAGIgFAKIAAA4IgNAAIAAg8IgBgIIgBgFIgBgDIgCAAIgEABIgCADIgFAGIgEAKIAAA4IgPAAIAAhXIAMAAIABARIAEgJIAFgGIAEgDIAHgBQAGAAADAFQAEAEAAAKIAEgIIAEgGQADgDACAAQADgCAEAAQAQAAABAaIAAA/g");
	this.shape_257.setTransform(-164.7,-232.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#60CAE1").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_258.setTransform(-174.6,-232.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#60CAE1").s().p("AASA5IgghGIgKgXIAAA5IAAAkIgOAAIAAhyIAUAAIAfBEIAMAaIAAg9IAAghIAOAAIAAByg");
	this.shape_259.setTransform(-184.5,-233.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#60CAE1").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgEQAGgEAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_260.setTransform(-194,-232.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#60CAE1").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_261.setTransform(-204.3,-232.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#60CAE1").s().p("AAbAtIAAg/IAAgGIAAgFIgCgCIgDAAIgDABIgDADIgEAGIgFAKIAAA4IgNAAIAAg8IgBgIIgBgFIgBgDIgCAAIgEABIgCADIgFAGIgEAKIAAA4IgPAAIAAhXIAMAAIABARIAEgJIAFgGIAEgDIAHgBQAGAAADAFQAEAEAAAKIAEgIIAEgGQADgDACAAQADgCAEAAQAQAAABAaIAAA/g");
	this.shape_262.setTransform(-214.2,-232.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#60CAE1").s().p("AgjA+IAAgMIAdAAIAAg+IgaAAIAAgNIApAAIAABLIAaAAIAAAMgAgFgmIgEgDIgCgEIgBgFIABgEIACgEIAEgDIAFgBIADABIAFADIACAEIABAEIgBAFIgCAEIgFADIgDABIgFgBg");
	this.shape_263.setTransform(-224,-234.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#60CAE1").s().p("AgjAtIAAhXIAOAAIAAAQQAIgKAIgEQAGgEAIAAQAOAAAHAJQAHAJgBARIgPAAQAAgLgDgFQgEgGgHAAIgGABIgGAEIgHAGIgIAJIAAA4g");
	this.shape_264.setTransform(-233.6,-232.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#60CAE1").s().p("AglA/IAAh7IAOAAIABAOQAGgIAIgEQAHgEAIAAQAIAAAFAEQAGACAEAHQAEAFACAIQACAJAAAJQAAAMgEAIQgDAJgGAFQgFAHgIACQgIADgJAAIgIAAIgIgCIAAAlgAgBgwIgGADQgDADgEADIgHAJIAAAqIAIACIAKABQALABAHgJQAHgHAAgRIgBgNQgBgFgCgFQgCgEgEgCQgDgCgFgBIgFABg");
	this.shape_265.setTransform(-243.7,-230.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#D695C6").s().p("AgKA5QgGgCgEgEQgEgFgBgGQAAgHACgKIAIgoIgZAAIACgMIAZAAIAFgZIAPgEIgGAdIAoAAIgDAMIgmAAIgIApQgCAGABAEQAAAEACADQACADADABQADABAFAAIAIgBIALgCIAAAOIgLABIgKABQgHAAgHgCg");
	this.shape_266.setTransform(-263.4,-233.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D695C6").s().p("AgcAsQgFgCgDgEQgDgEgBgGQgCgFAAgHQAAgMAEgLQADgLAGgIQAHgIAJgFQAKgFALAAIALABIAKACIAOgEIgKAxIgBAEIgBAIIgBALIgCARIgPAAIADgUQgGAKgJAGQgIAGgKAAQgGAAgFgCgAgEgdQgFACgEAEQgEAEgDAFIgEALIgCAJIAAAJQAAAIADAFQADAFAGAAQAEAAAEgCIAGgFIAHgHIAGgJIAEgKIADgKIAEgSIgIgDIgJgBQgHAAgEADg");
	this.shape_267.setTransform(-273.5,-232.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D695C6").s().p("AggAmQgJgIAAgRIABgNQACgHADgHQADgGAEgGQAFgGAFgEQAGgEAHgCQAGgDAIAAQAIAAAGADQAGACAFAEQAEAEACAGQACAGAAAIQAAAHgBAGQgCAIgDAGQgDAHgEAFIgKAKQgGAEgHADQgGACgIAAQgQAAgIgIgAgCgeQgFACgDAEQgEADgDAEIgFAJIgDAKIgBAKQAAAKAFAGQAFAFAKAAQAGAAADgCQAFgCAEgDIAGgIIAFgJIADgJIABgKQAAgLgFgFQgFgGgKAAQgFAAgEACg");
	this.shape_268.setTransform(-283.6,-232.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#D695C6").s().p("AgRA9QgGgCgCgFQgDgFAAgHQAAgHACgLIARhWIAPAAIgQBWIgCAMIAAAIQABADADACIAGABIANgCIASgGIAAANIgRAGQgIACgIgBQgIAAgFgBg");
	this.shape_269.setTransform(-293.3,-234.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#D695C6").s().p("Ag1BRIgFAAIADgOIAIABQAKAAAGgFQAGgGACgLIAOg/IgdAAIADgOIAcAAIADgOQADgSAKgIQAKgJASAAIAKABIALABIgCANIgKgCIgKgBQgLABgGAFQgHAGgCALIgCAOIAmAAIgCAOIgnAAIgMA/QgCAIgDAHQgDAHgFAFQgGAEgHACQgHACgJAAIgEAAg");
	this.shape_270.setTransform(-303.3,-232.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#666666").s().p("AgZA6IgKgBIAAgNIALACIANAAQAJAAAEgBIAKgFQAEgDACgEQACgFAAgFQAAgEgCgEQgDgDgDgCQgEgDgFgBQgEgBgHgBIgNAAIAAgLIANAAQAGAAACgBQAFgCADgDQADgCABgEQADgEAAgEQgBgJgGgFQgFgDgKAAIgMABIgNADIAAgNIAGgDIAHgBIAHgBIAGAAQAJAAAGACQAIACAEAEQAEAEADAFQACAFAAAGQAAAKgEAHQgFAGgKAEIAJADQAEABAEAEQADADADAEQACAFAAAFQAAAIgDAHQgEAHgFAEQgHAFgJAEQgIACgMAAIgNgBg");
	this.shape_271.setTransform(-342.8,-233.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#666666").s().p("AglA6IAAgNIAegeIALgMIAHgJIADgIIABgJIgBgIIgDgGQgDgDgEgCQgDgCgFAAQgHAAgGAEQgGADgFAFIgIgKQAGgHAJgEQAIgEALAAQAHAAAGACQAHACAEAFQAFAEACAGQADAGAAAIQAAAHgCAFQgCAGgDAGIgJAKIgNANIgUAVIA3AAIAAAOg");
	this.shape_272.setTransform(-342.8,-257);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#60CAE1").s().p("AghAnIAvgnIgvgnIAJgJIA6AwIg6Axg");
	this.shape_273.setTransform(-134.7,-279);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#99C7B6").s().p("AAUA+IAAg5QAAgIgDgGQgFgEgGAAIgGAAIgFADIgGAGIgIAIIAAA6IgQAAIAAh7IAQAAIAAAkIAAANIAGgHIAHgEIAGgDIAIgBQANAAAHAIQAIAJAAAPIAAA5g");
	this.shape_274.setTransform(-144.9,-280.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#99C7B6").s().p("AgFANIgEgDIgDgFQgCgCAAgDQAAgCACgDIADgEIAEgEIAFgBIAGABIAEAEIADAEQACADAAACQAAADgCACIgDAFIgEADIgGABIgFgBg");
	this.shape_275.setTransform(-154.9,-275.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#99C7B6").s().p("AgRArQgHgDgFgGQgGgFgCgJQgEgIAAgLQAAgKAEgIQADgJAFgGQAGgGAHgDQAIgEAJAAQAJAAAIADQAIADAEAGQAGAGACAIQADAJABAKQgBAKgDAIQgDAJgFAGQgGAGgHADQgIAEgJAAQgJAAgIgDgAgKgdQgGADgCAEQgEAFgCAGQgBAGAAAFQAAAIACAGQACAHADAEQAEAEAFACQAEACAFAAQAHAAAFgDQAEgCAEgFQADgEACgGIABgNQgBgHgBgGQgCgGgDgEQgEgEgFgCQgEgDgGAAQgGAAgEADg");
	this.shape_276.setTransform(-164.7,-278.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#99C7B6").s().p("AgjA/IAAgNIAdAAIAAg+IgaAAIAAgNIApAAIAABLIAaAAIAAANgAgFgnIgEgCIgCgEIgBgFIABgEIACgEIAEgDIAFAAIADAAIAFADIACAEIABAEIgBAFIgCAEIgFACIgDACIgFgCg");
	this.shape_277.setTransform(-174.5,-280.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#99C7B6").s().p("AgTA8QgGgDgDgGQgEgGgDgIQgCgIAAgKQAAgLADgIQAEgJAFgGQAGgGAIgDQAIgDAJAAIAIAAIAIACIAAglIAPAAIAAB7IgNAAIgBgQQgGAJgIAEQgHAFgIAAQgIAAgFgDgAgNgGQgIAHAAARQAAAQAFAIQAFAIAIAAQAFAAAGgFQAHgGAHgKIAAgoQgDgCgFAAIgJgBQgMAAgGAIg");
	this.shape_278.setTransform(-184.8,-280.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#99C7B6").s().p("AgGA0QgIgIAAgQIAAgtIgZAAIAAgMIAZAAIAAgZIAOgEIAAAdIAoAAIAAAMIgoAAIAAAsQAAAKAFAEQAFAFAKAAIAJgBIALgCIAAAOIgLABIgLABQgRAAgHgHg");
	this.shape_279.setTransform(-194.9,-280);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#99C7B6").s().p("AgSAtIgPgDIAAgOQAIADAHABIAPABQALAAAFgDQAFgDAAgGIgBgEIgDgDIgHgEIgLgEIgLgEQgGgCgDgDIgGgHQgCgEAAgGQAAgDACgFQABgEAFgEQAEgEAHgCQAHgDAKAAIALABIANACIAAAOIgOgDIgKgBIgJABQgFABgCACIgDADIgBAFIABAEQAAACADACIAHADIALAEIANAFQAGABADADQADAEABADQACAEAAAFQAAAFgCAEQgBADgDADIgGAFIgIADIgJACIgHABIgQgBg");
	this.shape_280.setTransform(-204.3,-278.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#60CAE1").s().p("AghAAIA6gwIAJAJIguAnIAuAnIgJAKg");
	this.shape_281.setTransform(-214.6,-279);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#D695C6").s().p("AgPArQgHgDgGgGQgFgGgCgIQgDgJAAgLQAAgIADgIQACgJAGgGQAEgGAIgEQAHgEAJAAQAJAAAHADQAIADAEAGQAFAFACAIQADAHAAAJIAAAFIgBAEIg8AAQAAAOAHAHQAIAHANAAIAIAAIAHgBIAHgBIAHgCIAAANIgPADIgQABQgKAAgJgDgAgIgeQgEACgDADIgFAIQgCAFAAAGIAtAAQAAgGgBgEQgBgFgDgEQgEgDgEgCQgEgCgGAAQgEAAgEACg");
	this.shape_282.setTransform(-234,-278.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D695C6").s().p("AgTA8QgGgDgDgGQgEgGgDgIQgCgIAAgKQAAgLADgIQAEgJAFgGQAGgGAIgDQAIgDAJAAIAIAAIAIACIAAglIAPAAIAAB7IgNAAIgBgQQgGAJgIAEQgHAFgIAAQgIAAgFgDgAgNgGQgIAHAAARQAAAQAFAIQAFAIAIAAQAFAAAGgFQAHgGAHgKIAAgoQgDgCgFAAIgJgBQgMAAgGAIg");
	this.shape_283.setTransform(-244.2,-280.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#D695C6").s().p("AgbAlQgIgIAAgQIAAg5IAQAAIAAA3QAAAVAPAAIAEgBIAHgDIAFgGIAIgIIAAg6IAQAAIAABXIgOAAIgBgOIgHAIIgHAEIgHADIgHABQgOAAgGgIg");
	this.shape_284.setTransform(-253.8,-278.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#D695C6").s().p("AgjA+IAAgMIAdAAIAAhiIgaAAIAAgNIApAAIAABvIAaAAIAAAMg");
	this.shape_285.setTransform(-263.6,-280.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#D695C6").s().p("AgWAiQgLgLAAgWQAAgJADgJQADgJAGgGQAGgGAIgDQAHgDAKAAIANABIALADIAAAOIgLgEQgGgBgHAAQgFAAgFACQgFACgEAEQgEAFgCAGQgCAGAAAGQAAAQAHAIQAIAIANAAQAGAAAGgBQAGgBAFgDIAAAOIgMADIgNABQgUAAgLgLg");
	this.shape_286.setTransform(-273.8,-278.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#D695C6").s().p("AAUAtIAAg4QAAgJgDgGQgEgEgIAAIgFAAIgGADIgFAGIgIAJIAAA5IgQAAIAAhXIAOAAIABAOIAHgIIAHgEIAGgDIAIgBQAOAAAGAIQAIAJAAAQIAAA4g");
	this.shape_287.setTransform(-283.5,-278.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#D695C6").s().p("AgjA/IAAgNIAdAAIAAg+IgaAAIAAgNIApAAIAABLIAaAAIAAANgAgFgnIgEgCIgCgEIgBgFIABgEIACgEIAEgDIAFAAIADAAIAFADIACAEIABAEIgBAFIgCAEIgFACIgDACIgFgCg");
	this.shape_288.setTransform(-293.3,-280.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#D695C6").s().p("AAFA6IAEghIgWAAIgDAhIgNAAIADghIgSAAIAAgLIATAAIADgeIgSAAIAAgMIAUAAIADgdIAMAAIgDAdIAWAAIADgdIANAAIgDAdIASAAIAAAMIgTAAIgEAeIATAAIAAALIgUAAIgDAhgAgMAOIAVAAIADgeIgVAAg");
	this.shape_289.setTransform(-303.3,-280);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#666666").s().p("AghA6IAAgOIAdAAIAAhTIgbAPIgGgNIAlgUIAMAAIAABlIAaAAIAAAOg");
	this.shape_290.setTransform(-342.9,-280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.lastReturn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-349.9,-292.8,696,670.5), null);


(lib.mainRightHeli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mainLeft = new lib.leftHeli_1();
	this.mainLeft.name = "mainLeft";
	this.mainLeft.parent = this;
	this.mainLeft.setTransform(-31.5,-43,0.15,0.15,0,0,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAKimIFrGTQgOB+heBeQgZAagcATQhcBBh4AAQhjAAhQgtQgugagognQhdhegOh+gAAKo2IAAGQ");
	this.shape.setTransform(-15.1,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mainLeft}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainRightHeli, new cjs.Rectangle(-108.9,-89.1,166.7,179.5), null);


(lib.mainLeftHeli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.mainLeft = new lib.leftHeli_1();
	this.mainLeft.name = "mainLeft";
	this.mainLeft.parent = this;
	this.mainLeft.setTransform(0.1,-50.8,0.15,0.15,0,0,0,-39,-48.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAKimIFrGTQgOB+heBeQgZAagcATQhcBBh4AAQhjAAhQgtQgugagognQhdhegOh+gAAKo2IAAGQ");
	this.shape.setTransform(-15.1,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mainLeft}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainLeftHeli, new cjs.Rectangle(-83.3,-89.7,166.6,180.1), null);


// stage content:
(lib.functions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var root = this;
		
		
		
		this.botonPlayPause.addEventListener("click", toggle);
		this.botonPlayPause.addEventListener("mouseover", mover);
		this.botonPlayPause.addEventListener("mouseout", mout);
		
		function mover(){
			if(!isPlaying){
				root.txtControl.color = "#0F0";		
			}else{
				root.txtControl.color = "#0F0";
			}
		}
		
		function mout(){
			if(!isPlaying){
				root.txtControl.color = "#282923";		
			}else{
				root.txtControl.color = "#282923";
			}
		}
		
		function toggle(){
		
				root.txtInicio.text = "";
		
				
				if (!isPlaying){
					root.play();
					isPlaying = true;
					root.txtControl.text = "PAUSE";
					root.txtControl.x = 1022;
					}
					else {
						root.stop();
						isPlaying = false;
						root.txtControl.text = "PLAY";
						root.txtControl.x = 1027;
						}
			}
	}
	this.frame_47 = function() {
		this.stop();
		isPlaying = false;
		this.txtControl.text = "PLAY";
		this.txtControl.x = 1027;
	}
	this.frame_239 = function() {
		this.stop();
		isPlaying = false;
		this.txtControl.text = "PLAY";
		this.txtControl.x = 1027;
	}
	this.frame_908 = function() {
		this.stop();
		var root = this;
		var flag = true;
		txtboxNumero.focus();
		var box = document.getElementById("txtboxNumero");
		box.setAttribute("placeholder", "Presione enter");
		box.value = "";
		//root.mc4.txtOrden.text = "\"Número:\" ";
		
		window.addEventListener("keydown", keyPressed);
		
		
		function keyPressed(evt) {
		
		    var k = evt.key.toLowerCase();
		    //alert(k);
			if( k == "enter" && !isNaN(box.value) && box.value != "" && flag){
				flag = false;
				//alert(box.value);
				xValue = box.value.toString();
				root.xNum.text = box.value.toString();
				root.mc_returnX.firstX.text = box.value.toString();
				root.play();
				//root.mcDividendo1.txtDividendo.text = box.value.toString();
				//root.mcDividendo2.txtDividendo.text = box.value.toString();
			}else if( k == "enter" && isNaN(box.value) ){
				alert("Ingrese un valor numerico");
			}else if( k == "enter" && box.value == ""){
				alert("Ingrese un dato");
			}else if( k != "enter" && box.value.length >= 200){
				alert("Presione enter");
			}/*else{
				alert("Ingrese un valor");
			}*/
		
		}
	}
	this.frame_1233 = function() {
		this.xNum.text += ";";
	}
	this.frame_1943 = function() {
		this.stop();
		var root = this;
		var flag = true;
		txtboxNumero2.focus();
		var box = document.getElementById("txtboxNumero2");
		box.setAttribute("placeholder", "Presione enter");
		box.value = "";
		//root.mc4.txtOrden.text = "\"Número:\" ";
		
		window.addEventListener("keydown", keyPressed);
		
		
		function keyPressed(evt) {
		
		    var k = evt.key.toLowerCase();
		    //alert(k);
			if( k == "enter" && !isNaN(box.value) && box.value != "" && flag){
				flag = false;
				//alert(box.value);
				yValue = box.value.toString();
				root.yNum.text = box.value.toString();
				root.mc_returnY.firstY.text = box.value.toString();
				root.play();
				//root.mcDividendo1.txtDividendo.text = box.value.toString();
				//root.mcDividendo2.txtDividendo.text = box.value.toString();
			}else if( k == "enter" && isNaN(box.value) ){
				alert("Ingrese un valor numerico");
			}else if( k == "enter" && box.value == ""){
				alert("Ingrese un dato");
			}else if( k != "enter" && box.value.length >= 200){
				alert("Presione enter");
			}/*else{
				alert("Ingrese un valor");
			}*/
		
		}
	}
	this.frame_2229 = function() {
		this.yNum.text += ";";
	}
	this.frame_2554 = function() {
		this.xNum.text = xValue;
		this.xNum2.text = xValue + ";";
		console.log(xValue)
		console.log(yValue)
		this.yNum.text = yValue;
		this.yNum2.text = yValue + ";";
	}
	this.frame_2805 = function() {
		this.mc_lastX.xFinal.text = xValue;
		this.mc_lastY.yFinal.text = yValue;
	}
	this.frame_2842 = function() {
		this.mc_total.result.text = (Number(xValue) + Number(yValue)).toString();
		this.mc_plus.plus.text = "";
		this.mc_lastX.xFinal.text = this.mc_total.result.text + ";";
		this.mc_lastY.yFinal.text = "";
	}
	this.frame_3069 = function() {
		this.mc_total.result.text += ";"
	}
	this.frame_3225 = function() {
		this.mc_printf.f1.text = xValue;
		this.mc_printf.f2.text = yValue;
		this.mc_printf.f3.text = (Number(xValue) + Number(yValue)).toString();
	}
	this.frame_3293 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var root = this;
		var isPlaying2 = true;
		
		
		this.botonPlayPause2.addEventListener("click", toggle);
		this.botonPlayPause2.addEventListener("mouseover", mover);
		this.botonPlayPause2.addEventListener("mouseout", mout);
		
		function mover(){
			if(!isPlaying2){
				root.txtControl2.color = "#0F0";		
			}else{
				root.txtControl2.color = "#0F0";
			}
		}
		
		function mout(){
			if(!isPlaying2){
				root.txtControl2.color = "#282923";		
			}else{
				root.txtControl2.color = "#282923";
			}
		}
		
		function toggle(){
			
				//root.txtInicio2.text = "";
				//root.gotoAndPlay(1);
				location.reload();
			
			}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(192).call(this.frame_239).wait(669).call(this.frame_908).wait(325).call(this.frame_1233).wait(710).call(this.frame_1943).wait(286).call(this.frame_2229).wait(325).call(this.frame_2554).wait(251).call(this.frame_2805).wait(37).call(this.frame_2842).wait(227).call(this.frame_3069).wait(156).call(this.frame_3225).wait(68).call(this.frame_3293).wait(2));

	// BackToStart
	this.txtControl2 = new cjs.Text("RESTART", "12px 'Arial'", "#282923");
	this.txtControl2.name = "txtControl2";
	this.txtControl2.lineHeight = 15;
	this.txtControl2.lineWidth = 59;
	this.txtControl2.parent = this;
	this.txtControl2.setTransform(1015,61.1);

	this.botonPlayPause2 = new lib.BotonPlayPause();
	this.botonPlayPause2.name = "botonPlayPause2";
	this.botonPlayPause2.parent = this;
	this.botonPlayPause2.setTransform(1040.9,67.7,0.579,0.583,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.botonPlayPause2, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(1,1,1).p("AgciQIAAgZIA5AAIAAAZAgciQIhgAAIB8ibIB9CbIhgAAIAAG8Ig5AAg");
	this.shape.setTransform(1044.4,131.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgcEsIAAm8IAAgaIA4AAIAAAaIAAG8gAAciQIAAgaIg4AAIAAAaIhgAAIB8ibIB9Cbg");
	this.shape_1.setTransform(1044.4,131.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},3293).wait(2));

	// ActionStopPlay
	this.txtInicio = new cjs.Text("presiona play PARA INICIAR LA ANIMACIÓN", "20px 'Army'", "#8D8D54");
	this.txtInicio.name = "txtInicio";
	this.txtInicio.lineHeight = 26;
	this.txtInicio.lineWidth = 441;
	this.txtInicio.parent = this;
	this.txtInicio.setTransform(847.1,101.9);

	this.txtControl = new cjs.Text("PLAY", "12px 'Arial'", "#282923");
	this.txtControl.name = "txtControl";
	this.txtControl.lineHeight = 15;
	this.txtControl.lineWidth = 37;
	this.txtControl.parent = this;
	this.txtControl.setTransform(1025,61.1);

	this.botonPlayPause = new lib.BotonPlayPause();
	this.botonPlayPause.name = "botonPlayPause";
	this.botonPlayPause.parent = this;
	this.botonPlayPause.setTransform(1040.9,67.7,0.579,0.583,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.botonPlayPause, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio}]}).to({state:[]},3294).wait(1));

	// Fin
	this.instance = new lib.Fin();
	this.instance.parent = this;
	this.instance.setTransform(1095.8,352.9,1,1,0,0,0,0,-2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3293).to({_off:false},0).to({_off:true},1).wait(1));

	// IndicadorGo
	this.instance_1 = new lib.IndicadorGo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(440.6,15.6);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:15.3,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:15.6,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:25.1,alpha:0.3},0).wait(1).to({y:34.9},0).wait(1).to({y:44.8},0).wait(1).to({y:54.6},0).wait(1).to({y:64.4},0).wait(1).to({y:74.2},0).wait(1).to({y:84.1},0).wait(1).to({y:93.9},0).wait(1).to({y:103.7},0).wait(1).to({y:113.5},0).wait(1).to({y:123.4},0).wait(1).to({y:133.2},0).wait(1).to({y:143},0).wait(1).to({y:152.8},0).wait(1).to({y:162.7},0).wait(1).to({y:172.5},0).wait(1).to({y:182.3},0).wait(1).to({y:192.1},0).wait(1).to({y:201.9},0).wait(1).to({y:211.8},0).wait(1).to({y:221.6},0).wait(1).to({y:231.4},0).wait(1).to({y:241.2},0).wait(1).to({y:251.1},0).wait(1).to({y:260.9},0).wait(1).to({y:270.7},0).wait(1).to({y:280.5},0).wait(1).to({y:290.3},0).wait(1).to({y:300.2},0).wait(1).to({y:310},0).wait(1).to({y:319.8},0).wait(1).to({y:329.6},0).wait(1).to({y:339.5},0).wait(1).to({y:349.3},0).wait(1).to({y:359.1},0).wait(1).to({y:368.9},0).wait(1).to({y:378.8},0).wait(1).to({y:388.6},0).wait(1).to({y:398.4},0).wait(1).to({y:408.2},0).wait(1).to({y:418.1},0).wait(1).to({y:427.9},0).wait(1).to({y:437.7},0).wait(1).to({y:447.5},0).wait(1).to({y:457.4},0).wait(1).to({y:467.2},0).wait(1).to({y:477},0).wait(1).to({regX:0,regY:0,x:440.6,y:477.3,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:477,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:477.3,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:479,alpha:0.3},0).wait(1).to({y:480.9},0).wait(1).to({y:482.9},0).wait(1).to({y:484.8},0).wait(1).to({y:486.8},0).wait(1).to({y:488.7},0).wait(1).to({y:490.7},0).wait(1).to({y:492.7},0).wait(1).to({y:494.6},0).wait(1).to({y:496.6},0).wait(1).to({y:498.5},0).wait(1).to({y:500.5},0).wait(1).to({y:502.4},0).wait(1).to({y:504.4},0).wait(1).to({y:506.3},0).wait(1).to({y:508.3},0).wait(1).to({y:510.3},0).wait(1).to({y:512.2},0).wait(1).to({y:514.2},0).wait(1).to({y:516.1},0).wait(1).to({y:518.1},0).wait(1).to({y:520},0).wait(1).to({y:522},0).wait(1).to({regX:0,regY:0,x:440.6,y:522.3,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:522,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:-3.6,regY:-42.3,x:930.9,y:480.9,alpha:0.301},0).wait(60).to({regX:0,regY:0,x:934.5,y:523.2},0).wait(1).to({regX:3.4,regY:-0.3,x:948.8,y:514.5,alpha:0.3},0).wait(1).to({x:959.6,y:505.8},0).wait(1).to({x:970.2,y:497},0).wait(1).to({x:980.7,y:488},0).wait(1).to({x:991,y:478.8},0).wait(1).to({x:1001,y:469.3},0).wait(1).to({x:1010.8,y:459.6},0).wait(1).to({x:1020.4,y:449.6},0).wait(1).to({x:1029.6,y:439.3},0).wait(1).to({x:1038.4,y:428.7},0).wait(1).to({x:1046.8,y:417.7},0).wait(1).to({x:1054.6,y:406.4},0).wait(1).to({x:1061.8,y:394.6},0).wait(1).to({x:1068.2,y:382.3},0).wait(1).to({x:1073.6,y:369.6},0).wait(1).to({x:1077.9,y:356.5},0).wait(1).to({x:1080.8,y:343},0).wait(1).to({x:1082.1,y:329.3},0).wait(1).to({x:1081.6,y:315.5},0).wait(1).to({x:1079.3,y:301.9},0).wait(1).to({x:1075.1,y:288.8},0).wait(1).to({x:1069.3,y:276.2},0).wait(1).to({x:1062.1,y:264.5},0).wait(1).to({x:1053.7,y:253.5},0).wait(1).to({x:1044.4,y:243.3},0).wait(1).to({x:1034.4,y:233.8},0).wait(1).to({x:1023.8,y:224.9},0).wait(1).to({x:1012.8,y:216.7},0).wait(1).to({x:1001.3,y:208.9},0).wait(1).to({x:989.6,y:201.7},0).wait(1).to({x:977.6,y:194.9},0).wait(1).to({x:965.3,y:188.4},0).wait(1).to({x:953,y:182.3},0).wait(1).to({x:940.4,y:176.6},0).wait(1).to({x:927.7,y:171.1},0).wait(1).to({x:915,y:165.8},0).wait(1).to({x:902.1,y:160.8},0).wait(1).to({x:889.1,y:156},0).wait(1).to({x:876.1,y:151.4},0).wait(1).to({x:863,y:147.1},0).wait(1).to({x:849.9,y:142.8},0).wait(1).to({x:836.7,y:138.8},0).wait(1).to({x:823.4,y:134.9},0).wait(1).to({x:810.2,y:131.1},0).wait(1).to({x:796.9,y:127.5},0).wait(1).to({x:783.5,y:123.9},0).wait(1).to({x:770.1,y:120.6},0).wait(1).to({x:756.7,y:117.3},0).wait(1).to({x:743.3,y:114.1},0).wait(1).to({x:729.8,y:111},0).wait(1).to({x:716.3,y:108},0).wait(1).to({x:702.8,y:105.1},0).wait(1).to({x:689.3,y:102.3},0).wait(1).to({x:675.8,y:99.6},0).wait(1).to({x:662.2,y:97},0).wait(1).to({x:648.6,y:94.4},0).wait(1).to({x:635.1,y:91.9},0).wait(1).to({x:621.5,y:89.4},0).wait(1).to({x:607.9,y:87.1},0).wait(1).to({x:594.3,y:84.8},0).wait(1).to({x:580.6,y:82.5},0).wait(1).to({x:567,y:80.3},0).wait(1).to({x:553.4,y:78.2},0).wait(1).to({x:539.7,y:76.1},0).wait(1).to({x:526.1,y:74.1},0).wait(1).to({x:512.4,y:72.1},0).wait(1).to({x:498.7,y:70.2},0).wait(1).to({x:485,y:68.3},0).wait(1).to({x:471.3,y:66.5},0).wait(1).to({x:457.7,y:64.7},0).wait(1).to({x:444,y:63},0).wait(1).to({regX:0,regY:0,x:440.6,y:63.3,alpha:0.301},0).wait(76).to({regX:3.4,regY:-0.3,x:459.4,y:63,alpha:0.3},0).wait(1).to({x:474.8},0).wait(1).to({x:490.3},0).wait(1).to({x:505.7},0).wait(1).to({x:521.1},0).wait(1).to({x:536.6},0).wait(1).to({x:552},0).wait(1).to({x:567.4},0).wait(1).to({x:582.9},0).wait(1).to({x:598.3},0).wait(1).to({x:613.7},0).wait(1).to({x:629.2},0).wait(1).to({x:644.6},0).wait(1).to({x:660},0).wait(1).to({x:675.5},0).wait(1).to({x:690.9},0).wait(1).to({x:706.4},0).wait(1).to({x:721.8},0).wait(1).to({x:737.2},0).wait(1).to({x:752.7},0).wait(1).to({x:768.1},0).wait(1).to({x:783.5},0).wait(1).to({x:799},0).wait(1).to({x:814.4},0).wait(1).to({x:829.8},0).wait(1).to({x:845.3},0).wait(1).to({x:860.7},0).wait(1).to({x:876.1},0).wait(1).to({x:891.6},0).wait(1).to({x:907},0).wait(1).to({x:922.4},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:63.3,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:63.9,alpha:0.3},0).wait(1).to({y:64.9},0).wait(1).to({y:65.8},0).wait(1).to({y:66.8},0).wait(1).to({y:67.7},0).wait(1).to({y:68.6},0).wait(1).to({y:69.6},0).wait(1).to({y:70.5},0).wait(1).to({y:71.5},0).wait(1).to({y:72.4},0).wait(1).to({y:73.3},0).wait(1).to({y:74.3},0).wait(1).to({y:75.2},0).wait(1).to({y:76.1},0).wait(1).to({y:77.1},0).wait(1).to({y:78},0).wait(1).to({y:79},0).wait(1).to({y:79.9},0).wait(1).to({y:80.8},0).wait(1).to({y:81.8},0).wait(1).to({y:82.7},0).wait(1).to({y:83.7},0).wait(1).to({y:84.6},0).wait(1).to({regX:0,regY:0,x:440.6,y:84.9,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:84.6,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:84.9,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:85.6,alpha:0.3},0).wait(1).to({y:86.7},0).wait(1).to({y:87.7},0).wait(1).to({y:88.8},0).wait(1).to({y:89.8},0).wait(1).to({y:90.9},0).wait(1).to({y:91.9},0).wait(1).to({y:92.9},0).wait(1).to({y:94},0).wait(1).to({y:95},0).wait(1).to({y:96.1},0).wait(1).to({y:97.1},0).wait(1).to({y:98.2},0).wait(1).to({y:99.2},0).wait(1).to({y:100.3},0).wait(1).to({y:101.3},0).wait(1).to({y:102.3},0).wait(1).to({y:103.4},0).wait(1).to({y:104.4},0).wait(1).to({y:105.5},0).wait(1).to({y:106.5},0).wait(1).to({y:107.6},0).wait(1).to({y:108.6},0).wait(1).to({regX:0,regY:0,x:440.6,y:108.9,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:108.6,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:108.9,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:109.6,alpha:0.3},0).wait(1).to({y:110.6},0).wait(1).to({y:111.6},0).wait(1).to({y:112.6},0).wait(1).to({y:113.6},0).wait(1).to({y:114.5},0).wait(1).to({y:115.5},0).wait(1).to({y:116.5},0).wait(1).to({y:117.5},0).wait(1).to({y:118.5},0).wait(1).to({y:119.5},0).wait(1).to({y:120.5},0).wait(1).to({y:121.5},0).wait(1).to({y:122.5},0).wait(1).to({y:123.5},0).wait(1).to({y:124.5},0).wait(1).to({y:125.5},0).wait(1).to({y:126.4},0).wait(1).to({y:127.4},0).wait(1).to({y:128.4},0).wait(1).to({y:129.4},0).wait(1).to({y:130.4},0).wait(1).to({y:131.4},0).wait(1).to({regX:0,regY:0,x:440.6,y:131.7,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:131.4,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:131.7,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:132.4,alpha:0.3},0).wait(1).to({y:133.4},0).wait(1).to({y:134.4},0).wait(1).to({y:135.4},0).wait(1).to({y:136.4},0).wait(1).to({y:137.4},0).wait(1).to({y:138.4},0).wait(1).to({y:139.4},0).wait(1).to({y:140.4},0).wait(1).to({y:141.4},0).wait(1).to({y:142.4},0).wait(1).to({y:143.4},0).wait(1).to({y:144.4},0).wait(1).to({y:145.4},0).wait(1).to({y:146.4},0).wait(1).to({y:147.4},0).wait(1).to({y:148.4},0).wait(1).to({y:149.4},0).wait(1).to({y:150.4},0).wait(1).to({y:151.4},0).wait(1).to({y:152.4},0).wait(1).to({y:153.4},0).wait(1).to({y:154.4},0).wait(1).to({regX:0,regY:0,x:440.6,y:154.7,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:154.4,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:154.7,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:155.4,alpha:0.3},0).wait(1).to({y:156.4},0).wait(1).to({y:157.4},0).wait(1).to({y:158.4},0).wait(1).to({y:159.4},0).wait(1).to({y:160.4},0).wait(1).to({y:161.4},0).wait(1).to({y:162.4},0).wait(1).to({y:163.4},0).wait(1).to({y:164.4},0).wait(1).to({y:165.4},0).wait(1).to({y:166.4},0).wait(1).to({y:167.4},0).wait(1).to({y:168.4},0).wait(1).to({y:169.4},0).wait(1).to({y:170.4},0).wait(1).to({y:171.4},0).wait(1).to({y:172.4},0).wait(1).to({y:173.4},0).wait(1).to({y:174.4},0).wait(1).to({y:175.4},0).wait(1).to({y:176.4},0).wait(1).to({y:177.4},0).wait(1).to({regX:0,regY:0,x:440.6,y:177.7,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:177.4,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:177.7,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:177.4,alpha:0.3},0).wait(107).to({regX:0,regY:0,x:440.6,y:177.7,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:440.4,y:180.4,alpha:0.3},0).wait(1).to({x:436.8,y:183.4},0).wait(1).to({x:433.3,y:186.5},0).wait(1).to({x:429.8,y:189.6},0).wait(1).to({x:426.3,y:192.7},0).wait(1).to({x:422.8,y:195.8},0).wait(1).to({x:419.4,y:199},0).wait(1).to({x:416,y:202.2},0).wait(1).to({x:412.7,y:205.5},0).wait(1).to({x:409.3,y:208.7},0).wait(1).to({x:406,y:212},0).wait(1).to({x:402.8,y:215.4},0).wait(1).to({x:399.5,y:218.8},0).wait(1).to({x:396.4,y:222.2},0).wait(1).to({x:393.2,y:225.6},0).wait(1).to({x:390.1,y:229.1},0).wait(1).to({x:387,y:232.6},0).wait(1).to({x:384,y:236.2},0).wait(1).to({x:381,y:239.8},0).wait(1).to({x:378.1,y:243.4},0).wait(1).to({x:375.2,y:247.1},0).wait(1).to({x:372.4,y:250.8},0).wait(1).to({x:369.7,y:254.6},0).wait(1).to({x:367,y:258.4},0).wait(1).to({x:364.3,y:262.3},0).wait(1).to({x:361.8,y:266.2},0).wait(1).to({x:359.3,y:270.1},0).wait(1).to({x:356.8,y:274.1},0).wait(1).to({x:354.5,y:278.1},0).wait(1).to({x:352.2,y:282.2},0).wait(1).to({x:350,y:286.3},0).wait(1).to({x:347.9,y:290.5},0).wait(1).to({x:345.9,y:294.7},0).wait(1).to({x:344,y:299},0).wait(1).to({x:342.2,y:303.3},0).wait(1).to({x:340.4,y:307.6},0).wait(1).to({x:338.8,y:312},0).wait(1).to({x:337.4,y:316.4},0).wait(1).to({x:336,y:320.9},0).wait(1).to({x:334.7,y:325.4},0).wait(1).to({x:333.6,y:329.9},0).wait(1).to({x:332.6,y:334.5},0).wait(1).to({x:331.8,y:339.1},0).wait(1).to({x:331,y:343.7},0).wait(1).to({x:330.5,y:348.3},0).wait(1).to({x:330,y:353},0).wait(1).to({x:329.7,y:357.7},0).wait(1).to({x:329.6,y:362.3},0).wait(1).to({y:367},0).wait(1).to({x:329.7,y:371.7},0).wait(1).to({x:330,y:376.3},0).wait(1).to({x:330.4,y:381},0).wait(1).to({x:331,y:385.6},0).wait(1).to({x:331.7,y:390.2},0).wait(1).to({x:332.6,y:394.8},0).wait(1).to({x:333.6,y:399.4},0).wait(1).to({x:334.7,y:403.9},0).wait(1).to({x:336,y:408.4},0).wait(1).to({x:337.4,y:412.8},0).wait(1).to({x:338.9,y:417.3},0).wait(1).to({x:340.5,y:421.6},0).wait(1).to({x:342.3,y:426},0).wait(1).to({x:344.2,y:430.2},0).wait(1).to({x:346.1,y:434.5},0).wait(1).to({x:348.2,y:438.7},0).wait(1).to({x:350.4,y:442.8},0).wait(1).to({x:352.6,y:446.9},0).wait(1).to({x:355,y:450.9},0).wait(1).to({x:357.4,y:454.9},0).wait(1).to({x:359.9,y:458.9},0).wait(1).to({x:362.5,y:462.7},0).wait(1).to({x:365.2,y:466.6},0).wait(1).to({x:367.9,y:470.4},0).wait(1).to({x:370.7,y:474.1},0).wait(1).to({x:373.5,y:477.8},0).wait(1).to({x:376.5,y:481.4},0).wait(1).to({x:379.4,y:485},0).wait(1).to({x:382.5,y:488.6},0).wait(1).to({x:385.6,y:492.1},0).wait(1).to({x:388.7,y:495.6},0).wait(1).to({x:391.9,y:499},0).wait(1).to({x:395.1,y:502.4},0).wait(1).to({x:398.4,y:505.7},0).wait(1).to({x:401.7,y:509},0).wait(1).to({x:405,y:512.3},0).wait(1).to({x:408.4,y:515.5},0).wait(1).to({x:411.8,y:518.7},0).wait(1).to({x:415.3,y:521.8},0).wait(1).to({x:418.7,y:524.9},0).wait(1).to({x:422.3,y:528},0).wait(1).to({x:425.8,y:531},0).wait(1).to({x:429.4,y:534},0).wait(1).to({x:433,y:537},0).wait(1).to({x:436.6,y:540},0).wait(1).to({x:440.3,y:542.9},0).wait(1).to({x:444,y:545.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:546.1,alpha:0.301},0).wait(132).to({regX:3.4,regY:-0.3,x:458.1,y:545.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:934.5,y:546.1,alpha:0.301},0).wait(74).to({regX:3.4,regY:-0.3,x:935.3,y:537.3,alpha:0.3},0).wait(1).to({x:932.6,y:528.9},0).wait(1).to({x:929.7,y:520.5},0).wait(1).to({x:926.7,y:512.1},0).wait(1).to({x:923.6,y:503.9},0).wait(1).to({x:920.3,y:495.6},0).wait(1).to({x:916.9,y:487.4},0).wait(1).to({x:913.3,y:479.3},0).wait(1).to({x:909.6,y:471.2},0).wait(1).to({x:905.8,y:463.2},0).wait(1).to({x:901.8,y:455.3},0).wait(1).to({x:897.6,y:447.5},0).wait(1).to({x:893.3,y:439.8},0).wait(1).to({x:888.8,y:432.1},0).wait(1).to({x:884.2,y:424.5},0).wait(1).to({x:879.4,y:417.1},0).wait(1).to({x:874.4,y:409.7},0).wait(1).to({x:869.3,y:402.5},0).wait(1).to({x:864,y:395.4},0).wait(1).to({x:858.6,y:388.4},0).wait(1).to({x:853,y:381.5},0).wait(1).to({x:847.2,y:374.8},0).wait(1).to({x:841.3,y:368.2},0).wait(1).to({x:835.2,y:361.7},0).wait(1).to({x:829,y:355.4},0).wait(1).to({x:822.6,y:349.3},0).wait(1).to({x:816,y:343.3},0).wait(1).to({x:809.4,y:337.4},0).wait(1).to({x:802.6,y:331.7},0).wait(1).to({x:795.6,y:326.2},0).wait(1).to({x:788.6,y:320.9},0).wait(1).to({x:781.4,y:315.7},0).wait(1).to({x:774.1,y:310.6},0).wait(1).to({x:766.6,y:305.8},0).wait(1).to({x:759.1,y:301.1},0).wait(1).to({x:751.5,y:296.6},0).wait(1).to({x:743.8,y:292.2},0).wait(1).to({x:735.9,y:288},0).wait(1).to({x:728,y:284},0).wait(1).to({x:720.1,y:280.1},0).wait(1).to({x:712,y:276.4},0).wait(1).to({x:703.9,y:272.9},0).wait(1).to({x:695.7,y:269.5},0).wait(1).to({x:687.4,y:266.2},0).wait(1).to({x:679.1,y:263.2},0).wait(1).to({x:670.8,y:260.2},0).wait(1).to({x:662.3,y:257.4},0).wait(1).to({x:653.9,y:254.7},0).wait(1).to({x:645.4,y:252.2},0).wait(1).to({x:636.8,y:249.8},0).wait(1).to({x:628.3,y:247.5},0).wait(1).to({x:619.7,y:245.4},0).wait(1).to({x:611,y:243.3},0).wait(1).to({x:602.4,y:241.4},0).wait(1).to({x:593.7,y:239.6},0).wait(1).to({x:585,y:237.9},0).wait(1).to({x:576.3,y:236.4},0).wait(1).to({x:567.5,y:234.9},0).wait(1).to({x:558.8,y:233.5},0).wait(1).to({x:550,y:232.3},0).wait(1).to({x:541.2,y:231.1},0).wait(1).to({x:532.4,y:230},0).wait(1).to({x:523.6,y:229},0).wait(1).to({x:514.8,y:228.1},0).wait(1).to({x:505.9,y:227.3},0).wait(1).to({x:497.1,y:226.6},0).wait(1).to({x:488.2,y:225.9},0).wait(1).to({x:479.4,y:225.3},0).wait(1).to({x:470.5,y:224.8},0).wait(1).to({x:461.7,y:224.4},0).wait(1).to({x:452.8,y:224},0).wait(1).to({x:444,y:223.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:224.1,alpha:0.301},0).wait(181).to({regX:3.4,regY:-0.3,x:458.1,y:223.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:224.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:224.8,alpha:0.3},0).wait(1).to({y:225.8},0).wait(1).to({y:226.8},0).wait(1).to({y:227.8},0).wait(1).to({y:228.8},0).wait(1).to({y:229.8},0).wait(1).to({y:230.8},0).wait(1).to({y:231.8},0).wait(1).to({y:232.8},0).wait(1).to({y:233.8},0).wait(1).to({y:234.8},0).wait(1).to({y:235.8},0).wait(1).to({y:236.8},0).wait(1).to({y:237.8},0).wait(1).to({y:238.8},0).wait(1).to({y:239.8},0).wait(1).to({y:240.8},0).wait(1).to({y:241.8},0).wait(1).to({y:242.8},0).wait(1).to({y:243.8},0).wait(1).to({y:244.8},0).wait(1).to({y:245.8},0).wait(1).to({y:246.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:247.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:246.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:247.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:247.8,alpha:0.3},0).wait(1).to({y:248.8},0).wait(1).to({y:249.8},0).wait(1).to({y:250.8},0).wait(1).to({y:251.8},0).wait(1).to({y:252.8},0).wait(1).to({y:253.8},0).wait(1).to({y:254.8},0).wait(1).to({y:255.8},0).wait(1).to({y:256.8},0).wait(1).to({y:257.8},0).wait(1).to({y:258.8},0).wait(1).to({y:259.8},0).wait(1).to({y:260.8},0).wait(1).to({y:261.8},0).wait(1).to({y:262.8},0).wait(1).to({y:263.8},0).wait(1).to({y:264.8},0).wait(1).to({y:265.8},0).wait(1).to({y:266.8},0).wait(1).to({y:267.8},0).wait(1).to({y:268.8},0).wait(1).to({y:269.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:270.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:269.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:270.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:270.8,alpha:0.3},0).wait(1).to({y:271.7},0).wait(1).to({y:272.7},0).wait(1).to({y:273.6},0).wait(1).to({y:274.6},0).wait(1).to({y:275.5},0).wait(1).to({y:276.5},0).wait(1).to({y:277.5},0).wait(1).to({y:278.4},0).wait(1).to({y:279.4},0).wait(1).to({y:280.3},0).wait(1).to({y:281.3},0).wait(1).to({y:282.2},0).wait(1).to({y:283.2},0).wait(1).to({y:284.1},0).wait(1).to({y:285.1},0).wait(1).to({y:286.1},0).wait(1).to({y:287},0).wait(1).to({y:288},0).wait(1).to({y:288.9},0).wait(1).to({y:289.9},0).wait(1).to({y:290.8},0).wait(1).to({y:291.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:292.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:291.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:292.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:292.9,alpha:0.3},0).wait(1).to({y:294.1},0).wait(1).to({y:295.2},0).wait(1).to({y:296.4},0).wait(1).to({y:297.5},0).wait(1).to({y:298.7},0).wait(1).to({y:299.8},0).wait(1).to({y:300.9},0).wait(1).to({y:302.1},0).wait(1).to({y:303.2},0).wait(1).to({y:304.4},0).wait(1).to({y:305.5},0).wait(1).to({y:306.7},0).wait(1).to({y:307.8},0).wait(1).to({y:308.9},0).wait(1).to({y:310.1},0).wait(1).to({y:311.2},0).wait(1).to({y:312.4},0).wait(1).to({y:313.5},0).wait(1).to({y:314.7},0).wait(1).to({y:315.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:316.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:315.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:316.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:316.8,alpha:0.3},0).wait(1).to({y:317.7},0).wait(1).to({y:318.7},0).wait(1).to({y:319.6},0).wait(1).to({y:320.6},0).wait(1).to({y:321.5},0).wait(1).to({y:322.5},0).wait(1).to({y:323.5},0).wait(1).to({y:324.4},0).wait(1).to({y:325.4},0).wait(1).to({y:326.3},0).wait(1).to({y:327.3},0).wait(1).to({y:328.2},0).wait(1).to({y:329.2},0).wait(1).to({y:330.1},0).wait(1).to({y:331.1},0).wait(1).to({y:332.1},0).wait(1).to({y:333},0).wait(1).to({y:334},0).wait(1).to({y:334.9},0).wait(1).to({y:335.9},0).wait(1).to({y:336.8},0).wait(1).to({y:337.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:338.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:464.5,y:337.8,alpha:0.3},0).wait(1).to({x:485.1},0).wait(1).to({x:505.7},0).wait(1).to({x:526.3},0).wait(1).to({x:546.9},0).wait(1).to({x:567.4},0).wait(1).to({x:588},0).wait(1).to({x:608.6},0).wait(1).to({x:629.2},0).wait(1).to({x:649.8},0).wait(1).to({x:670.3},0).wait(1).to({x:690.9},0).wait(1).to({x:711.5},0).wait(1).to({x:732.1},0).wait(1).to({x:752.7},0).wait(1).to({x:773.3},0).wait(1).to({x:793.8},0).wait(1).to({x:814.4},0).wait(1).to({x:835},0).wait(1).to({x:855.6},0).wait(1).to({x:876.2},0).wait(1).to({x:896.7},0).wait(1).to({x:917.3},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:338.1,alpha:0.301},0).wait(108).to({regX:3.4,regY:-0.3,x:439.8,y:339.5,alpha:0.3},0).wait(1).to({x:435.7,y:341.3},0).wait(1).to({x:431.6,y:343.1},0).wait(1).to({x:427.5,y:344.9},0).wait(1).to({x:423.4,y:346.7},0).wait(1).to({x:419.4,y:348.5},0).wait(1).to({x:415.3,y:350.4},0).wait(1).to({x:411.3,y:352.4},0).wait(1).to({x:407.2,y:354.3},0).wait(1).to({x:403.2,y:356.3},0).wait(1).to({x:399.2,y:358.3},0).wait(1).to({x:395.2,y:360.4},0).wait(1).to({x:391.3,y:362.5},0).wait(1).to({x:387.4,y:364.6},0).wait(1).to({x:383.4,y:366.8},0).wait(1).to({x:379.6,y:369},0).wait(1).to({x:375.7,y:371.3},0).wait(1).to({x:371.9,y:373.6},0).wait(1).to({x:368.1,y:376},0).wait(1).to({x:364.3,y:378.4},0).wait(1).to({x:360.6,y:380.9},0).wait(1).to({x:356.9,y:383.4},0).wait(1).to({x:353.3,y:386.1},0).wait(1).to({x:349.7,y:388.7},0).wait(1).to({x:346.2,y:391.5},0).wait(1).to({x:342.8,y:394.4},0).wait(1).to({x:339.4,y:397.3},0).wait(1).to({x:336.1,y:400.4},0).wait(1).to({x:332.9,y:403.5},0).wait(1).to({x:329.9,y:406.7},0).wait(1).to({x:326.9,y:410.1},0).wait(1).to({x:324.1,y:413.6},0).wait(1).to({x:321.5,y:417.2},0).wait(1).to({x:319,y:420.9},0).wait(1).to({x:316.8,y:424.8},0).wait(1).to({x:314.8,y:428.8},0).wait(1).to({x:313.1,y:432.9},0).wait(1).to({x:311.7,y:437.2},0).wait(1).to({x:310.6,y:441.5},0).wait(1).to({x:310,y:446},0).wait(1).to({x:309.7,y:450.4},0).wait(1).to({x:309.8,y:454.9},0).wait(1).to({x:310.4,y:459.3},0).wait(1).to({x:311.3,y:463.7},0).wait(1).to({x:312.5,y:468},0).wait(1).to({x:314.1,y:472.2},0).wait(1).to({x:316,y:476.3},0).wait(1).to({x:318.1,y:480.2},0).wait(1).to({x:320.4,y:484},0).wait(1).to({x:322.9,y:487.7},0).wait(1).to({x:325.6,y:491.3},0).wait(1).to({x:328.5,y:494.8},0).wait(1).to({x:331.4,y:498.1},0).wait(1).to({x:334.5,y:501.4},0).wait(1).to({x:337.7,y:504.5},0).wait(1).to({x:340.9,y:507.6},0).wait(1).to({x:344.3,y:510.6},0).wait(1).to({x:347.7,y:513.5},0).wait(1).to({x:351.1,y:516.3},0).wait(1).to({x:354.7,y:519},0).wait(1).to({x:358.2,y:521.7},0).wait(1).to({x:361.9,y:524.3},0).wait(1).to({x:365.5,y:526.9},0).wait(1).to({x:369.2,y:529.4},0).wait(1).to({x:373,y:531.9},0).wait(1).to({x:376.7,y:534.3},0).wait(1).to({x:380.5,y:536.7},0).wait(1).to({x:384.3,y:539},0).wait(1).to({x:388.2,y:541.3},0).wait(1).to({x:392.1,y:543.5},0).wait(1).to({x:396,y:545.7},0).wait(1).to({x:399.9,y:547.9},0).wait(1).to({x:403.8,y:550},0).wait(1).to({x:407.8,y:552.1},0).wait(1).to({x:411.7,y:554.2},0).wait(1).to({x:415.7,y:556.3},0).wait(1).to({x:419.7,y:558.3},0).wait(1).to({x:423.7,y:560.3},0).wait(1).to({x:427.7,y:562.2},0).wait(1).to({x:431.8,y:564.1},0).wait(1).to({x:435.8,y:566.1},0).wait(1).to({x:439.9,y:567.9},0).wait(1).to({x:444,y:569.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:570.1,alpha:0.301},0).wait(169).to({regX:3.4,regY:-0.3,x:458.1,y:569.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:570.1,alpha:0.301},0).wait(289).to({regX:3.4,regY:-0.3,x:444,y:564.6,alpha:0.3},0).wait(1).to({y:559.5},0).wait(1).to({y:554.3},0).wait(1).to({y:549.1},0).wait(1).to({y:544},0).wait(1).to({y:538.8},0).wait(1).to({y:533.6},0).wait(1).to({y:528.5},0).wait(1).to({y:523.3},0).wait(1).to({y:518.1},0).wait(1).to({y:513},0).wait(1).to({y:507.8},0).wait(1).to({y:502.6},0).wait(1).to({y:497.5},0).wait(1).to({y:492.3},0).wait(1).to({y:487.1},0).wait(1).to({y:482},0).wait(1).to({y:476.8},0).wait(1).to({y:471.6},0).wait(1).to({y:466.5},0).wait(1).to({y:461.3},0).wait(1).to({y:456.1},0).wait(1).to({y:451},0).wait(1).to({y:445.8},0).wait(1).to({y:440.6},0).wait(1).to({y:435.5},0).wait(1).to({y:430.3},0).wait(1).to({y:425.1},0).wait(1).to({y:420},0).wait(1).to({y:414.8},0).wait(1).to({y:409.6},0).wait(1).to({y:404.5},0).wait(1).to({y:399.3},0).wait(1).to({y:394.1},0).wait(1).to({y:389},0).wait(1).to({y:383.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:384.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.5,y:383.8,alpha:0.3},0).wait(1).to({x:473},0).wait(1).to({x:487.5},0).wait(1).to({x:502.1},0).wait(1).to({x:516.6},0).wait(1).to({x:531.1},0).wait(1).to({x:545.6},0).wait(1).to({x:560.2},0).wait(1).to({x:574.7},0).wait(1).to({x:589.2},0).wait(1).to({x:603.8},0).wait(1).to({x:618.3},0).wait(1).to({x:632.8},0).wait(1).to({x:647.3},0).wait(1).to({x:661.9},0).wait(1).to({x:676.4},0).wait(1).to({x:690.9},0).wait(1).to({x:705.5},0).wait(1).to({x:720},0).wait(1).to({x:734.5},0).wait(1).to({x:749},0).wait(1).to({x:763.6},0).wait(1).to({x:778.1},0).wait(1).to({x:792.6},0).wait(1).to({x:807.1},0).wait(1).to({x:821.7},0).wait(1).to({x:836.2},0).wait(1).to({x:850.7},0).wait(1).to({x:865.3},0).wait(1).to({x:879.8},0).wait(1).to({x:894.3},0).wait(1).to({x:908.8},0).wait(1).to({x:923.4},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:384.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:384.8,alpha:0.3},0).wait(1).to({y:385.9},0).wait(1).to({y:386.9},0).wait(1).to({y:388},0).wait(1).to({y:389},0).wait(1).to({y:390.1},0).wait(1).to({y:391.1},0).wait(1).to({y:392.1},0).wait(1).to({y:393.2},0).wait(1).to({y:394.2},0).wait(1).to({y:395.3},0).wait(1).to({y:396.3},0).wait(1).to({y:397.4},0).wait(1).to({y:398.4},0).wait(1).to({y:399.5},0).wait(1).to({y:400.5},0).wait(1).to({y:401.5},0).wait(1).to({y:402.6},0).wait(1).to({y:403.6},0).wait(1).to({y:404.7},0).wait(1).to({y:405.7},0).wait(1).to({y:406.8},0).wait(1).to({y:407.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:408.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.1,y:407.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:441.6,y:408.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444.9,y:408.7,alpha:0.3},0).wait(1).to({y:409.6},0).wait(1).to({x:444.8,y:410.6},0).wait(1).to({y:411.5},0).wait(1).to({x:444.7,y:412.4},0).wait(1).to({y:413.3},0).wait(1).to({y:414.2},0).wait(1).to({x:444.6,y:415.1},0).wait(1).to({y:416.1},0).wait(1).to({x:444.5,y:417},0).wait(1).to({y:417.9},0).wait(1).to({y:418.8},0).wait(1).to({x:444.4,y:419.7},0).wait(1).to({y:420.6},0).wait(1).to({x:444.3,y:421.6},0).wait(1).to({y:422.5},0).wait(1).to({x:444.2,y:423.4},0).wait(1).to({y:424.3},0).wait(1).to({y:425.2},0).wait(1).to({x:444.1,y:426.1},0).wait(1).to({y:427.1},0).wait(1).to({x:444,y:428},0).wait(1).to({y:428.9},0).wait(1).to({y:429.8},0).to({_off:true},1).wait(405));

	// IndicadorGo2
	this.instance_2 = new lib.IndicadorGo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(440.6,430.1);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2890).to({_off:false},0).wait(1).to({regX:3.4,regY:-0.3,x:458.5,y:429.8,alpha:0.3},0).wait(1).to({x:473},0).wait(1).to({x:487.5},0).wait(1).to({x:502.1},0).wait(1).to({x:516.6},0).wait(1).to({x:531.1},0).wait(1).to({x:545.6},0).wait(1).to({x:560.2},0).wait(1).to({x:574.7},0).wait(1).to({x:589.2},0).wait(1).to({x:603.8},0).wait(1).to({x:618.3},0).wait(1).to({x:632.8},0).wait(1).to({x:647.3},0).wait(1).to({x:661.9},0).wait(1).to({x:676.4},0).wait(1).to({x:690.9},0).wait(1).to({x:705.5},0).wait(1).to({x:720},0).wait(1).to({x:734.5},0).wait(1).to({x:749},0).wait(1).to({x:763.6},0).wait(1).to({x:778.1},0).wait(1).to({x:792.6},0).wait(1).to({x:807.1},0).wait(1).to({x:821.7},0).wait(1).to({x:836.2},0).wait(1).to({x:850.7},0).wait(1).to({x:865.3},0).wait(1).to({x:879.8},0).wait(1).to({x:894.3},0).wait(1).to({x:908.8},0).wait(1).to({x:923.4},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:430.1,alpha:0.301},0).wait(73).to({regX:3.4,regY:-0.3,x:440.1,y:431.3,alpha:0.3},0).wait(1).to({x:436.2,y:432.8},0).wait(1).to({x:432.4,y:434.4},0).wait(1).to({x:428.6,y:436},0).wait(1).to({x:424.7,y:437.6},0).wait(1).to({x:420.9,y:439.2},0).wait(1).to({x:417.1,y:440.8},0).wait(1).to({x:413.3,y:442.5},0).wait(1).to({x:409.5,y:444.2},0).wait(1).to({x:405.8,y:446},0).wait(1).to({x:402,y:447.7},0).wait(1).to({x:398.3,y:449.5},0).wait(1).to({x:394.6,y:451.4},0).wait(1).to({x:390.9,y:453.3},0).wait(1).to({x:387.2,y:455.2},0).wait(1).to({x:383.6,y:457.1},0).wait(1).to({x:379.9,y:459.2},0).wait(1).to({x:376.3,y:461.2},0).wait(1).to({x:372.8,y:463.4},0).wait(1).to({x:369.3,y:465.6},0).wait(1).to({x:365.8,y:467.8},0).wait(1).to({x:362.3,y:470.1},0).wait(1).to({x:359,y:472.5},0).wait(1).to({x:355.6,y:475},0).wait(1).to({x:352.4,y:477.6},0).wait(1).to({x:349.3,y:480.3},0).wait(1).to({x:346.2,y:483.1},0).wait(1).to({x:343.3,y:486},0).wait(1).to({x:340.5,y:489.1},0).wait(1).to({x:337.9,y:492.3},0).wait(1).to({x:335.5,y:495.7},0).wait(1).to({x:333.4,y:499.3},0).wait(1).to({x:331.7,y:503.1},0).wait(1).to({x:330.4,y:507},0).wait(1).to({x:329.5,y:511.1},0).wait(1).to({x:329.3,y:515.2},0).wait(1).to({x:329.6,y:519.3},0).wait(1).to({x:330.5,y:523.4},0).wait(1).to({x:331.9,y:527.3},0).wait(1).to({x:333.8,y:531},0).wait(1).to({x:336,y:534.5},0).wait(1).to({x:338.5,y:537.8},0).wait(1).to({x:341.2,y:540.9},0).wait(1).to({x:344.1,y:543.8},0).wait(1).to({x:347.2,y:546.6},0).wait(1).to({x:350.4,y:549.3},0).wait(1).to({x:353.7,y:551.8},0).wait(1).to({x:357.1,y:554.2},0).wait(1).to({x:360.5,y:556.5},0).wait(1).to({x:364,y:558.7},0).wait(1).to({x:367.6,y:560.8},0).wait(1).to({x:371.2,y:562.9},0).wait(1).to({x:374.8,y:564.9},0).wait(1).to({x:378.5,y:566.8},0).wait(1).to({x:382.2,y:568.6},0).wait(1).to({x:385.9,y:570.4},0).wait(1).to({x:389.7,y:572.2},0).wait(1).to({x:393.5,y:573.9},0).wait(1).to({x:397.3,y:575.6},0).wait(1).to({x:401.1,y:577.2},0).wait(1).to({x:404.9,y:578.7},0).wait(1).to({x:408.8,y:580.3},0).wait(1).to({x:412.6,y:581.8},0).wait(1).to({x:416.5,y:583.3},0).wait(1).to({x:420.4,y:584.7},0).wait(1).to({x:424.3,y:586.1},0).wait(1).to({x:428.2,y:587.5},0).wait(1).to({x:432.1,y:588.9},0).wait(1).to({x:436.1,y:590.2},0).wait(1).to({x:440,y:591.5},0).wait(1).to({x:444,y:592.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:593.1,alpha:0.301},0).wait(121).to({regX:3.4,regY:-0.3,x:458.1,y:592.8,alpha:0.3},0).wait(1).to({x:472.2},0).wait(1).to({x:486.3},0).wait(1).to({x:500.4},0).wait(1).to({x:514.5},0).wait(1).to({x:528.6},0).wait(1).to({x:542.7},0).wait(1).to({x:556.9},0).wait(1).to({x:571},0).wait(1).to({x:585.1},0).wait(1).to({x:599.2},0).wait(1).to({x:613.3},0).wait(1).to({x:627.4},0).wait(1).to({x:641.5},0).wait(1).to({x:655.6},0).wait(1).to({x:669.8},0).wait(1).to({x:683.9},0).wait(1).to({x:698},0).wait(1).to({x:712.1},0).wait(1).to({x:726.2},0).wait(1).to({x:740.3},0).wait(1).to({x:754.4},0).wait(1).to({x:768.5},0).wait(1).to({x:782.7},0).wait(1).to({x:796.8},0).wait(1).to({x:810.9},0).wait(1).to({x:825},0).wait(1).to({x:839.1},0).wait(1).to({x:853.2},0).wait(1).to({x:867.3},0).wait(1).to({x:881.4},0).wait(1).to({x:895.6},0).wait(1).to({x:909.7},0).wait(1).to({x:923.8},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:593.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:444,y:594.7,alpha:0.3},0).wait(1).to({y:596.6},0).wait(1).to({y:598.6},0).wait(1).to({y:600.5},0).wait(1).to({y:602.4},0).wait(1).to({y:604.3},0).wait(1).to({y:606.2},0).wait(1).to({y:608.1},0).wait(1).to({y:610.1},0).wait(1).to({y:612},0).wait(1).to({y:613.9},0).wait(1).to({y:615.8},0).wait(1).to({y:617.7},0).wait(1).to({y:619.6},0).wait(1).to({y:621.6},0).wait(1).to({y:623.5},0).wait(1).to({y:625.4},0).wait(1).to({y:627.3},0).wait(1).to({y:629.2},0).wait(1).to({y:631.1},0).wait(1).to({y:633.1},0).wait(1).to({y:635},0).wait(1).to({y:636.9},0).wait(1).to({y:638.8},0).wait(1).to({regX:0,regY:0,x:440.6,y:639.1,alpha:0.301},0).wait(1).to({regX:3.4,regY:-0.3,x:458.5,y:638.8,alpha:0.3},0).wait(1).to({x:473},0).wait(1).to({x:487.5},0).wait(1).to({x:502.1},0).wait(1).to({x:516.6},0).wait(1).to({x:531.1},0).wait(1).to({x:545.6},0).wait(1).to({x:560.2},0).wait(1).to({x:574.7},0).wait(1).to({x:589.2},0).wait(1).to({x:603.8},0).wait(1).to({x:618.3},0).wait(1).to({x:632.8},0).wait(1).to({x:647.3},0).wait(1).to({x:661.9},0).wait(1).to({x:676.4},0).wait(1).to({x:690.9},0).wait(1).to({x:705.5},0).wait(1).to({x:720},0).wait(1).to({x:734.5},0).wait(1).to({x:749},0).wait(1).to({x:763.6},0).wait(1).to({x:778.1},0).wait(1).to({x:792.6},0).wait(1).to({x:807.1},0).wait(1).to({x:821.7},0).wait(1).to({x:836.2},0).wait(1).to({x:850.7},0).wait(1).to({x:865.3},0).wait(1).to({x:879.8},0).wait(1).to({x:894.3},0).wait(1).to({x:908.8},0).wait(1).to({x:923.4},0).wait(1).to({x:937.9},0).wait(1).to({regX:0,regY:0,x:440.6,y:639.1,alpha:0.301},0).to({_off:true},9).wait(1));

	// Indicador
	this.instance_3 = new lib.Indicador();
	this.instance_3.parent = this;
	this.instance_3.setTransform(441.6,15.6);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(309).to({_off:false},0).wait(1).to({regX:235.3,regY:-0.3,x:676.9,y:15.3,alpha:0.3},0).wait(36).to({y:25.1},0).wait(1).to({y:34.9},0).wait(1).to({y:44.8},0).wait(1).to({y:54.6},0).wait(1).to({y:64.4},0).wait(1).to({y:74.2},0).wait(1).to({y:84.1},0).wait(1).to({y:93.9},0).wait(1).to({y:103.7},0).wait(1).to({y:113.5},0).wait(1).to({y:123.4},0).wait(1).to({y:133.2},0).wait(1).to({y:143},0).wait(1).to({y:152.8},0).wait(1).to({y:162.7},0).wait(1).to({y:172.5},0).wait(1).to({y:182.3},0).wait(1).to({y:192.1},0).wait(1).to({y:201.9},0).wait(1).to({y:211.8},0).wait(1).to({y:221.6},0).wait(1).to({y:231.4},0).wait(1).to({y:241.2},0).wait(1).to({y:251.1},0).wait(1).to({y:260.9},0).wait(1).to({y:270.7},0).wait(1).to({y:280.5},0).wait(1).to({y:290.3},0).wait(1).to({y:300.2},0).wait(1).to({y:310},0).wait(1).to({y:319.8},0).wait(1).to({y:329.6},0).wait(1).to({y:339.5},0).wait(1).to({y:349.3},0).wait(1).to({y:359.1},0).wait(1).to({y:368.9},0).wait(1).to({y:378.8},0).wait(1).to({y:388.6},0).wait(1).to({y:398.4},0).wait(1).to({y:408.2},0).wait(1).to({y:418.1},0).wait(1).to({y:427.9},0).wait(1).to({y:437.7},0).wait(1).to({y:447.5},0).wait(1).to({y:457.4},0).wait(1).to({y:467.2},0).wait(1).to({y:477},0).wait(38).to({y:479},0).wait(1).to({y:480.9},0).wait(1).to({y:482.9},0).wait(1).to({y:484.8},0).wait(1).to({y:486.8},0).wait(1).to({y:488.7},0).wait(1).to({y:490.7},0).wait(1).to({y:492.7},0).wait(1).to({y:494.6},0).wait(1).to({y:496.6},0).wait(1).to({y:498.5},0).wait(1).to({y:500.5},0).wait(1).to({y:502.4},0).wait(1).to({y:504.4},0).wait(1).to({y:506.3},0).wait(1).to({y:508.3},0).wait(1).to({y:510.3},0).wait(1).to({y:512.2},0).wait(1).to({y:514.2},0).wait(1).to({y:516.1},0).wait(1).to({y:518.1},0).wait(1).to({y:520},0).wait(1).to({y:522},0).wait(98).to({y:515.5},0).wait(1).to({y:509.1},0).wait(1).to({y:502.6},0).wait(1).to({y:496.1},0).wait(1).to({y:489.7},0).wait(1).to({y:483.2},0).wait(1).to({y:476.7},0).wait(1).to({y:470.3},0).wait(1).to({y:463.8},0).wait(1).to({y:457.4},0).wait(1).to({y:450.9},0).wait(1).to({y:444.4},0).wait(1).to({y:438},0).wait(1).to({y:431.5},0).wait(1).to({y:425},0).wait(1).to({y:418.6},0).wait(1).to({y:412.1},0).wait(1).to({y:405.6},0).wait(1).to({y:399.2},0).wait(1).to({y:392.7},0).wait(1).to({y:386.2},0).wait(1).to({y:379.8},0).wait(1).to({y:373.3},0).wait(1).to({y:366.8},0).wait(1).to({y:360.4},0).wait(1).to({y:353.9},0).wait(1).to({y:347.5},0).wait(1).to({y:341},0).wait(1).to({y:334.5},0).wait(1).to({y:328.1},0).wait(1).to({y:321.6},0).wait(1).to({y:315.1},0).wait(1).to({y:308.7},0).wait(1).to({y:302.2},0).wait(1).to({y:295.7},0).wait(1).to({y:289.3},0).wait(1).to({y:282.8},0).wait(1).to({y:276.3},0).wait(1).to({y:269.9},0).wait(1).to({y:263.4},0).wait(1).to({y:256.9},0).wait(1).to({y:250.5},0).wait(1).to({y:244},0).wait(1).to({y:237.5},0).wait(1).to({y:231.1},0).wait(1).to({y:224.6},0).wait(1).to({y:218.2},0).wait(1).to({y:211.7},0).wait(1).to({y:205.2},0).wait(1).to({y:198.8},0).wait(1).to({y:192.3},0).wait(1).to({y:185.8},0).wait(1).to({y:179.4},0).wait(1).to({y:172.9},0).wait(1).to({y:166.4},0).wait(1).to({y:160},0).wait(1).to({y:153.5},0).wait(1).to({y:147},0).wait(1).to({y:140.6},0).wait(1).to({y:134.1},0).wait(1).to({y:127.6},0).wait(1).to({y:121.2},0).wait(1).to({y:114.7},0).wait(1).to({y:108.3},0).wait(1).to({y:101.8},0).wait(1).to({y:95.3},0).wait(1).to({y:88.9},0).wait(1).to({y:82.4},0).wait(1).to({y:75.9},0).wait(1).to({y:69.5},0).wait(1).to({y:63},0).wait(110).to({y:63.9},0).wait(1).to({y:64.9},0).wait(1).to({y:65.8},0).wait(1).to({y:66.8},0).wait(1).to({y:67.7},0).wait(1).to({y:68.6},0).wait(1).to({y:69.6},0).wait(1).to({y:70.5},0).wait(1).to({y:71.5},0).wait(1).to({y:72.4},0).wait(1).to({y:73.3},0).wait(1).to({y:74.3},0).wait(1).to({y:75.2},0).wait(1).to({y:76.1},0).wait(1).to({y:77.1},0).wait(1).to({y:78},0).wait(1).to({y:79},0).wait(1).to({y:79.9},0).wait(1).to({y:80.8},0).wait(1).to({y:81.8},0).wait(1).to({y:82.7},0).wait(1).to({y:83.7},0).wait(1).to({y:84.6},0).wait(38).to({y:85.6},0).wait(1).to({y:86.7},0).wait(1).to({y:87.7},0).wait(1).to({y:88.8},0).wait(1).to({y:89.8},0).wait(1).to({y:90.9},0).wait(1).to({y:91.9},0).wait(1).to({y:92.9},0).wait(1).to({y:94},0).wait(1).to({y:95},0).wait(1).to({y:96.1},0).wait(1).to({y:97.1},0).wait(1).to({y:98.2},0).wait(1).to({y:99.2},0).wait(1).to({y:100.3},0).wait(1).to({y:101.3},0).wait(1).to({y:102.3},0).wait(1).to({y:103.4},0).wait(1).to({y:104.4},0).wait(1).to({y:105.5},0).wait(1).to({y:106.5},0).wait(1).to({y:107.6},0).wait(1).to({y:108.6},0).wait(38).to({y:109.6},0).wait(1).to({y:110.6},0).wait(1).to({y:111.6},0).wait(1).to({y:112.6},0).wait(1).to({y:113.6},0).wait(1).to({y:114.5},0).wait(1).to({y:115.5},0).wait(1).to({y:116.5},0).wait(1).to({y:117.5},0).wait(1).to({y:118.5},0).wait(1).to({y:119.5},0).wait(1).to({y:120.5},0).wait(1).to({y:121.5},0).wait(1).to({y:122.5},0).wait(1).to({y:123.5},0).wait(1).to({y:124.5},0).wait(1).to({y:125.5},0).wait(1).to({y:126.4},0).wait(1).to({y:127.4},0).wait(1).to({y:128.4},0).wait(1).to({y:129.4},0).wait(1).to({y:130.4},0).wait(1).to({y:131.4},0).wait(38).to({y:132.4},0).wait(1).to({y:133.4},0).wait(1).to({y:134.4},0).wait(1).to({y:135.4},0).wait(1).to({y:136.4},0).wait(1).to({y:137.4},0).wait(1).to({y:138.4},0).wait(1).to({y:139.4},0).wait(1).to({y:140.4},0).wait(1).to({y:141.4},0).wait(1).to({y:142.4},0).wait(1).to({y:143.4},0).wait(1).to({y:144.4},0).wait(1).to({y:145.4},0).wait(1).to({y:146.4},0).wait(1).to({y:147.4},0).wait(1).to({y:148.4},0).wait(1).to({y:149.4},0).wait(1).to({y:150.4},0).wait(1).to({y:151.4},0).wait(1).to({y:152.4},0).wait(1).to({y:153.4},0).wait(1).to({y:154.4},0).wait(38).to({y:155.4},0).wait(1).to({y:156.4},0).wait(1).to({y:157.4},0).wait(1).to({y:158.4},0).wait(1).to({y:159.4},0).wait(1).to({y:160.4},0).wait(1).to({y:161.4},0).wait(1).to({y:162.4},0).wait(1).to({y:163.4},0).wait(1).to({y:164.4},0).wait(1).to({y:165.4},0).wait(1).to({y:166.4},0).wait(1).to({y:167.4},0).wait(1).to({y:168.4},0).wait(1).to({y:169.4},0).wait(1).to({y:170.4},0).wait(1).to({y:171.4},0).wait(1).to({y:172.4},0).wait(1).to({y:173.4},0).wait(1).to({y:174.4},0).wait(1).to({y:175.4},0).wait(1).to({y:176.4},0).wait(1).to({y:177.4},0).wait(146).to({y:181.2},0).wait(1).to({y:185.1},0).wait(1).to({y:188.9},0).wait(1).to({y:192.8},0).wait(1).to({y:196.6},0).wait(1).to({y:200.4},0).wait(1).to({y:204.3},0).wait(1).to({y:208.1},0).wait(1).to({y:211.9},0).wait(1).to({y:215.8},0).wait(1).to({y:219.6},0).wait(1).to({y:223.5},0).wait(1).to({y:227.3},0).wait(1).to({y:231.1},0).wait(1).to({y:235},0).wait(1).to({y:238.8},0).wait(1).to({y:242.6},0).wait(1).to({y:246.5},0).wait(1).to({y:250.3},0).wait(1).to({y:254.2},0).wait(1).to({y:258},0).wait(1).to({y:261.8},0).wait(1).to({y:265.7},0).wait(1).to({y:269.5},0).wait(1).to({y:273.3},0).wait(1).to({y:277.2},0).wait(1).to({y:281},0).wait(1).to({y:284.9},0).wait(1).to({y:288.7},0).wait(1).to({y:292.5},0).wait(1).to({y:296.4},0).wait(1).to({y:300.2},0).wait(1).to({y:304},0).wait(1).to({y:307.9},0).wait(1).to({y:311.7},0).wait(1).to({y:315.6},0).wait(1).to({y:319.4},0).wait(1).to({y:323.2},0).wait(1).to({y:327.1},0).wait(1).to({y:330.9},0).wait(1).to({y:334.7},0).wait(1).to({y:338.6},0).wait(1).to({y:342.4},0).wait(1).to({y:346.3},0).wait(1).to({y:350.1},0).wait(1).to({y:353.9},0).wait(1).to({y:357.8},0).wait(1).to({y:361.6},0).wait(1).to({y:365.4},0).wait(1).to({y:369.3},0).wait(1).to({y:373.1},0).wait(1).to({y:377},0).wait(1).to({y:380.8},0).wait(1).to({y:384.6},0).wait(1).to({y:388.5},0).wait(1).to({y:392.3},0).wait(1).to({y:396.1},0).wait(1).to({y:400},0).wait(1).to({y:403.8},0).wait(1).to({y:407.7},0).wait(1).to({y:411.5},0).wait(1).to({y:415.3},0).wait(1).to({y:419.2},0).wait(1).to({y:423},0).wait(1).to({y:426.8},0).wait(1).to({y:430.7},0).wait(1).to({y:434.5},0).wait(1).to({y:438.4},0).wait(1).to({y:442.2},0).wait(1).to({y:446},0).wait(1).to({y:449.9},0).wait(1).to({y:453.7},0).wait(1).to({y:457.5},0).wait(1).to({y:461.4},0).wait(1).to({y:465.2},0).wait(1).to({y:469.1},0).wait(1).to({y:472.9},0).wait(1).to({y:476.7},0).wait(1).to({y:480.6},0).wait(1).to({y:484.4},0).wait(1).to({y:488.2},0).wait(1).to({y:492.1},0).wait(1).to({y:495.9},0).wait(1).to({y:499.8},0).wait(1).to({y:503.6},0).wait(1).to({y:507.4},0).wait(1).to({y:511.3},0).wait(1).to({y:515.1},0).wait(1).to({y:518.9},0).wait(1).to({y:522.8},0).wait(1).to({y:526.6},0).wait(1).to({y:530.5},0).wait(1).to({y:534.3},0).wait(1).to({y:538.1},0).wait(1).to({y:542},0).wait(1).to({y:545.8},0).wait(242).to({y:541.3},0).wait(1).to({y:536.9},0).wait(1).to({y:532.4},0).wait(1).to({y:527.9},0).wait(1).to({y:523.4},0).wait(1).to({y:519},0).wait(1).to({y:514.5},0).wait(1).to({y:510},0).wait(1).to({y:505.6},0).wait(1).to({y:501.1},0).wait(1).to({y:496.6},0).wait(1).to({y:492.1},0).wait(1).to({y:487.7},0).wait(1).to({y:483.2},0).wait(1).to({y:478.7},0).wait(1).to({y:474.2},0).wait(1).to({y:469.8},0).wait(1).to({y:465.3},0).wait(1).to({y:460.8},0).wait(1).to({y:456.4},0).wait(1).to({y:451.9},0).wait(1).to({y:447.4},0).wait(1).to({y:442.9},0).wait(1).to({y:438.5},0).wait(1).to({y:434},0).wait(1).to({y:429.5},0).wait(1).to({y:425.1},0).wait(1).to({y:420.6},0).wait(1).to({y:416.1},0).wait(1).to({y:411.6},0).wait(1).to({y:407.2},0).wait(1).to({y:402.7},0).wait(1).to({y:398.2},0).wait(1).to({y:393.7},0).wait(1).to({y:389.3},0).wait(1).to({y:384.8},0).wait(1).to({y:380.3},0).wait(1).to({y:375.9},0).wait(1).to({y:371.4},0).wait(1).to({y:366.9},0).wait(1).to({y:362.4},0).wait(1).to({y:358},0).wait(1).to({y:353.5},0).wait(1).to({y:349},0).wait(1).to({y:344.6},0).wait(1).to({y:340.1},0).wait(1).to({y:335.6},0).wait(1).to({y:331.1},0).wait(1).to({y:326.7},0).wait(1).to({y:322.2},0).wait(1).to({y:317.7},0).wait(1).to({y:313.2},0).wait(1).to({y:308.8},0).wait(1).to({y:304.3},0).wait(1).to({y:299.8},0).wait(1).to({y:295.4},0).wait(1).to({y:290.9},0).wait(1).to({y:286.4},0).wait(1).to({y:281.9},0).wait(1).to({y:277.5},0).wait(1).to({y:273},0).wait(1).to({y:268.5},0).wait(1).to({y:264.1},0).wait(1).to({y:259.6},0).wait(1).to({y:255.1},0).wait(1).to({y:250.6},0).wait(1).to({y:246.2},0).wait(1).to({y:241.7},0).wait(1).to({y:237.2},0).wait(1).to({y:232.7},0).wait(1).to({y:228.3},0).wait(1).to({y:223.8},0).wait(218).to({y:224.8},0).wait(1).to({y:225.8},0).wait(1).to({y:226.8},0).wait(1).to({y:227.8},0).wait(1).to({y:228.8},0).wait(1).to({y:229.8},0).wait(1).to({y:230.8},0).wait(1).to({y:231.8},0).wait(1).to({y:232.8},0).wait(1).to({y:233.8},0).wait(1).to({y:234.8},0).wait(1).to({y:235.8},0).wait(1).to({y:236.8},0).wait(1).to({y:237.8},0).wait(1).to({y:238.8},0).wait(1).to({y:239.8},0).wait(1).to({y:240.8},0).wait(1).to({y:241.8},0).wait(1).to({y:242.8},0).wait(1).to({y:243.8},0).wait(1).to({y:244.8},0).wait(1).to({y:245.8},0).wait(1).to({y:246.8},0).wait(38).to({y:247.8},0).wait(1).to({y:248.8},0).wait(1).to({y:249.8},0).wait(1).to({y:250.8},0).wait(1).to({y:251.8},0).wait(1).to({y:252.8},0).wait(1).to({y:253.8},0).wait(1).to({y:254.8},0).wait(1).to({y:255.8},0).wait(1).to({y:256.8},0).wait(1).to({y:257.8},0).wait(1).to({y:258.8},0).wait(1).to({y:259.8},0).wait(1).to({y:260.8},0).wait(1).to({y:261.8},0).wait(1).to({y:262.8},0).wait(1).to({y:263.8},0).wait(1).to({y:264.8},0).wait(1).to({y:265.8},0).wait(1).to({y:266.8},0).wait(1).to({y:267.8},0).wait(1).to({y:268.8},0).wait(1).to({y:269.8},0).wait(38).to({y:270.8},0).wait(1).to({y:271.7},0).wait(1).to({y:272.7},0).wait(1).to({y:273.6},0).wait(1).to({y:274.6},0).wait(1).to({y:275.5},0).wait(1).to({y:276.5},0).wait(1).to({y:277.5},0).wait(1).to({y:278.4},0).wait(1).to({y:279.4},0).wait(1).to({y:280.3},0).wait(1).to({y:281.3},0).wait(1).to({y:282.2},0).wait(1).to({y:283.2},0).wait(1).to({y:284.1},0).wait(1).to({y:285.1},0).wait(1).to({y:286.1},0).wait(1).to({y:287},0).wait(1).to({y:288},0).wait(1).to({y:288.9},0).wait(1).to({y:289.9},0).wait(1).to({y:290.8},0).wait(1).to({y:291.8},0).wait(38).to({y:292.9},0).wait(1).to({y:294.1},0).wait(1).to({y:295.2},0).wait(1).to({y:296.4},0).wait(1).to({y:297.5},0).wait(1).to({y:298.7},0).wait(1).to({y:299.8},0).wait(1).to({y:300.9},0).wait(1).to({y:302.1},0).wait(1).to({y:303.2},0).wait(1).to({y:304.4},0).wait(1).to({y:305.5},0).wait(1).to({y:306.7},0).wait(1).to({y:307.8},0).wait(1).to({y:308.9},0).wait(1).to({y:310.1},0).wait(1).to({y:311.2},0).wait(1).to({y:312.4},0).wait(1).to({y:313.5},0).wait(1).to({y:314.7},0).wait(1).to({y:315.8},0).wait(38).to({y:316.8},0).wait(1).to({y:317.7},0).wait(1).to({y:318.7},0).wait(1).to({y:319.6},0).wait(1).to({y:320.6},0).wait(1).to({y:321.5},0).wait(1).to({y:322.5},0).wait(1).to({y:323.5},0).wait(1).to({y:324.4},0).wait(1).to({y:325.4},0).wait(1).to({y:326.3},0).wait(1).to({y:327.3},0).wait(1).to({y:328.2},0).wait(1).to({y:329.2},0).wait(1).to({y:330.1},0).wait(1).to({y:331.1},0).wait(1).to({y:332.1},0).wait(1).to({y:333},0).wait(1).to({y:334},0).wait(1).to({y:334.9},0).wait(1).to({y:335.9},0).wait(1).to({y:336.8},0).wait(1).to({y:337.8},0).wait(134).to({y:340.6},0).wait(1).to({y:343.4},0).wait(1).to({y:346.2},0).wait(1).to({y:349},0).wait(1).to({y:351.8},0).wait(1).to({y:354.6},0).wait(1).to({y:357.4},0).wait(1).to({y:360.2},0).wait(1).to({y:363},0).wait(1).to({y:365.8},0).wait(1).to({y:368.5},0).wait(1).to({y:371.3},0).wait(1).to({y:374.1},0).wait(1).to({y:376.9},0).wait(1).to({y:379.7},0).wait(1).to({y:382.5},0).wait(1).to({y:385.3},0).wait(1).to({y:388.1},0).wait(1).to({y:390.9},0).wait(1).to({y:393.7},0).wait(1).to({y:396.5},0).wait(1).to({y:399.3},0).wait(1).to({y:402.1},0).wait(1).to({y:404.9},0).wait(1).to({y:407.7},0).wait(1).to({y:410.5},0).wait(1).to({y:413.3},0).wait(1).to({y:416.1},0).wait(1).to({y:418.9},0).wait(1).to({y:421.7},0).wait(1).to({y:424.5},0).wait(1).to({y:427.2},0).wait(1).to({y:430},0).wait(1).to({y:432.8},0).wait(1).to({y:435.6},0).wait(1).to({y:438.4},0).wait(1).to({y:441.2},0).wait(1).to({y:444},0).wait(1).to({y:446.8},0).wait(1).to({y:449.6},0).wait(1).to({y:452.4},0).wait(1).to({y:455.2},0).wait(1).to({y:458},0).wait(1).to({y:460.8},0).wait(1).to({y:463.6},0).wait(1).to({y:466.4},0).wait(1).to({y:469.2},0).wait(1).to({y:472},0).wait(1).to({y:474.8},0).wait(1).to({y:477.6},0).wait(1).to({y:480.4},0).wait(1).to({y:483.1},0).wait(1).to({y:485.9},0).wait(1).to({y:488.7},0).wait(1).to({y:491.5},0).wait(1).to({y:494.3},0).wait(1).to({y:497.1},0).wait(1).to({y:499.9},0).wait(1).to({y:502.7},0).wait(1).to({y:505.5},0).wait(1).to({y:508.3},0).wait(1).to({y:511.1},0).wait(1).to({y:513.9},0).wait(1).to({y:516.7},0).wait(1).to({y:519.5},0).wait(1).to({y:522.3},0).wait(1).to({y:525.1},0).wait(1).to({y:527.9},0).wait(1).to({y:530.7},0).wait(1).to({y:533.5},0).wait(1).to({y:536.3},0).wait(1).to({y:539.1},0).wait(1).to({y:541.8},0).wait(1).to({y:544.6},0).wait(1).to({y:547.4},0).wait(1).to({y:550.2},0).wait(1).to({y:553},0).wait(1).to({y:555.8},0).wait(1).to({y:558.6},0).wait(1).to({y:561.4},0).wait(1).to({y:564.2},0).wait(1).to({y:567},0).wait(1).to({y:569.8},0).wait(494).to({y:564.6},0).wait(1).to({y:559.5},0).wait(1).to({y:554.3},0).wait(1).to({y:549.1},0).wait(1).to({y:544},0).wait(1).to({y:538.8},0).wait(1).to({y:533.6},0).wait(1).to({y:528.5},0).wait(1).to({y:523.3},0).wait(1).to({y:518.1},0).wait(1).to({y:513},0).wait(1).to({y:507.8},0).wait(1).to({y:502.6},0).wait(1).to({y:497.5},0).wait(1).to({y:492.3},0).wait(1).to({y:487.1},0).wait(1).to({y:482},0).wait(1).to({y:476.8},0).wait(1).to({y:471.6},0).wait(1).to({y:466.5},0).wait(1).to({y:461.3},0).wait(1).to({y:456.1},0).wait(1).to({y:451},0).wait(1).to({y:445.8},0).wait(1).to({y:440.6},0).wait(1).to({y:435.5},0).wait(1).to({y:430.3},0).wait(1).to({y:425.1},0).wait(1).to({y:420},0).wait(1).to({y:414.8},0).wait(1).to({y:409.6},0).wait(1).to({y:404.5},0).wait(1).to({y:399.3},0).wait(1).to({y:394.1},0).wait(1).to({y:389},0).wait(1).to({y:383.8},0).wait(37).to({y:384.8},0).wait(1).to({y:385.9},0).wait(1).to({y:386.9},0).wait(1).to({y:388},0).wait(1).to({y:389},0).wait(1).to({y:390.1},0).wait(1).to({y:391.1},0).wait(1).to({y:392.1},0).wait(1).to({y:393.2},0).wait(1).to({y:394.2},0).wait(1).to({y:395.3},0).wait(1).to({y:396.3},0).wait(1).to({y:397.4},0).wait(1).to({y:398.4},0).wait(1).to({y:399.5},0).wait(1).to({y:400.5},0).wait(1).to({y:401.5},0).wait(1).to({y:402.6},0).wait(1).to({y:403.6},0).wait(1).to({y:404.7},0).wait(1).to({y:405.7},0).wait(1).to({y:406.8},0).wait(1).to({y:407.8},0).wait(38).to({y:408.7},0).wait(1).to({y:409.6},0).wait(1).to({y:410.6},0).wait(1).to({y:411.5},0).wait(1).to({y:412.4},0).wait(1).to({y:413.3},0).wait(1).to({y:414.2},0).wait(1).to({y:415.1},0).wait(1).to({y:416.1},0).wait(1).to({y:417},0).wait(1).to({y:417.9},0).wait(1).to({y:418.8},0).wait(1).to({y:419.7},0).wait(1).to({y:420.6},0).wait(1).to({y:421.6},0).wait(1).to({y:422.5},0).wait(1).to({y:423.4},0).wait(1).to({y:424.3},0).wait(1).to({y:425.2},0).wait(1).to({y:426.1},0).wait(1).to({y:427.1},0).wait(1).to({y:428},0).wait(1).to({y:428.9},0).wait(1).to({y:429.8},0).wait(109).to({y:432.1},0).wait(1).to({y:434.4},0).wait(1).to({y:436.7},0).wait(1).to({y:439},0).wait(1).to({y:441.3},0).wait(1).to({y:443.6},0).wait(1).to({y:445.9},0).wait(1).to({y:448.2},0).wait(1).to({y:450.5},0).wait(1).to({y:452.8},0).wait(1).to({y:455.1},0).wait(1).to({y:457.3},0).wait(1).to({y:459.6},0).wait(1).to({y:461.9},0).wait(1).to({y:464.2},0).wait(1).to({y:466.5},0).wait(1).to({y:468.8},0).wait(1).to({y:471.1},0).wait(1).to({y:473.4},0).wait(1).to({y:475.7},0).wait(1).to({y:478},0).wait(1).to({y:480.3},0).wait(1).to({y:482.6},0).wait(1).to({y:484.9},0).wait(1).to({y:487.2},0).wait(1).to({y:489.5},0).wait(1).to({y:491.8},0).wait(1).to({y:494.1},0).wait(1).to({y:496.4},0).wait(1).to({y:498.7},0).wait(1).to({y:501},0).wait(1).to({y:503.3},0).wait(1).to({y:505.6},0).wait(1).to({y:507.9},0).wait(1).to({y:510.2},0).wait(1).to({y:512.4},0).wait(1).to({y:514.7},0).wait(1).to({y:517},0).wait(1).to({y:519.3},0).wait(1).to({y:521.6},0).wait(1).to({y:523.9},0).wait(1).to({y:526.2},0).wait(1).to({y:528.5},0).wait(1).to({y:530.8},0).wait(1).to({y:533.1},0).wait(1).to({y:535.4},0).wait(1).to({y:537.7},0).wait(1).to({y:540},0).wait(1).to({y:542.3},0).wait(1).to({y:544.6},0).wait(1).to({y:546.9},0).wait(1).to({y:549.2},0).wait(1).to({y:551.5},0).wait(1).to({y:553.8},0).wait(1).to({y:556.1},0).wait(1).to({y:558.4},0).wait(1).to({y:560.7},0).wait(1).to({y:563},0).wait(1).to({y:565.3},0).wait(1).to({y:567.5},0).wait(1).to({y:569.8},0).wait(1).to({y:572.1},0).wait(1).to({y:574.4},0).wait(1).to({y:576.7},0).wait(1).to({y:579},0).wait(1).to({y:581.3},0).wait(1).to({y:583.6},0).wait(1).to({y:585.9},0).wait(1).to({y:588.2},0).wait(1).to({y:590.5},0).wait(1).to({y:592.8},0).wait(158).to({y:594.7},0).wait(1).to({y:596.6},0).wait(1).to({y:598.6},0).wait(1).to({y:600.5},0).wait(1).to({y:602.4},0).wait(1).to({y:604.3},0).wait(1).to({y:606.2},0).wait(1).to({y:608.1},0).wait(1).to({y:610.1},0).wait(1).to({y:612},0).wait(1).to({y:613.9},0).wait(1).to({y:615.8},0).wait(1).to({y:617.7},0).wait(1).to({y:619.6},0).wait(1).to({y:621.6},0).wait(1).to({y:623.5},0).wait(1).to({y:625.4},0).wait(1).to({y:627.3},0).wait(1).to({y:629.2},0).wait(1).to({y:631.1},0).wait(1).to({y:633.1},0).wait(1).to({y:635},0).wait(1).to({y:636.9},0).wait(1).to({y:638.8},0).wait(44).to({_off:true},1).wait(1));

	// leftHeliMoving
	this.instance_4 = new lib.mainLeftHeli();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1238.9,589.1,1,1,0,0,0,0,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(489).to({_off:false},0).wait(1).to({regY:0,x:1230.9,y:585.2},0).wait(1).to({x:1222.9,y:581.4},0).wait(1).to({x:1214.9,y:577.6},0).wait(1).to({x:1206.9,y:573.8},0).wait(1).to({x:1198.9,y:570.1},0).wait(1).to({x:1190.9,y:566.3},0).wait(1).to({x:1182.9,y:562.5},0).wait(1).to({x:1174.9,y:558.7},0).wait(1).to({x:1166.9,y:555},0).wait(1).to({x:1158.9,y:551.2},0).wait(1).to({x:1150.9,y:547.4},0).wait(1).to({x:1142.9,y:543.6},0).wait(1).to({x:1134.9,y:539.8},0).wait(1).to({x:1126.9,y:536.1},0).wait(1).to({x:1118.9,y:532.3},0).wait(1).to({x:1110.9,y:528.5},0).wait(1).to({x:1102.9,y:524.7},0).wait(1).to({x:1094.9,y:521},0).wait(1).to({x:1086.9,y:517.2},0).wait(1).to({x:1078.9,y:513.4},0).wait(1).to({x:1070.9,y:509.6},0).wait(1).to({x:1062.9,y:505.8},0).wait(1).to({x:1054.9,y:502.1},0).wait(1).to({x:1046.9,y:498.3},0).wait(1).to({x:1038.9,y:494.5},0).wait(1).to({x:1030.9,y:490.7},0).wait(1).to({x:1022.9,y:487},0).wait(1).to({x:1014.9,y:483.2},0).wait(1).to({x:1006.9,y:479.4},0).wait(1).to({x:998.9,y:475.6},0).wait(1).to({x:990.9,y:471.8},0).wait(1).to({x:982.9,y:468.1},0).wait(1).to({x:974.9,y:464.3},0).wait(1).to({x:966.9,y:460.5},0).wait(1).to({x:958.9,y:456.7},0).wait(1).to({x:950.9,y:453},0).wait(25).to({x:961.9,y:444.5},0).wait(1).to({x:972.9,y:436},0).wait(1).to({x:983.7,y:427.2},0).wait(1).to({x:994.3,y:418.2},0).wait(1).to({x:1004.7,y:409},0).wait(1).to({x:1014.9,y:399.6},0).wait(1).to({x:1024.9,y:390},0).wait(1).to({x:1034.6,y:380},0).wait(1).to({x:1044,y:369.8},0).wait(1).to({x:1053,y:359.2},0).wait(1).to({x:1061.6,y:348.3},0).wait(1).to({x:1069.6,y:336.9},0).wait(1).to({x:1077,y:325.2},0).wait(1).to({x:1083.6,y:313},0).wait(1).to({x:1089.3,y:300.3},0).wait(1).to({x:1093.8,y:287.2},0).wait(1).to({x:1097,y:273.6},0).wait(1).to({x:1098.5,y:259.9},0).wait(1).to({x:1098.3,y:246},0).wait(1).to({x:1096.1,y:232.3},0).wait(1).to({x:1092.1,y:219},0).wait(1).to({x:1086.4,y:206.3},0).wait(1).to({x:1079.2,y:194.4},0).wait(1).to({x:1070.8,y:183.3},0).wait(1).to({x:1061.5,y:173},0).wait(1).to({x:1051.5,y:163.5},0).wait(1).to({x:1040.8,y:154.6},0).wait(1).to({x:1029.7,y:146.3},0).wait(1).to({x:1018.1,y:138.5},0).wait(1).to({x:1006.3,y:131.2},0).wait(1).to({x:994.2,y:124.3},0).wait(1).to({x:981.9,y:117.9},0).wait(1).to({x:969.5,y:111.8},0).wait(1).to({x:956.8,y:105.9},0).wait(1).to({x:944.1,y:100.4},0).wait(1).to({x:931.2,y:95.2},0).wait(1).to({x:918.3,y:90.1},0).wait(1).to({x:905.2,y:85.3},0).wait(1).to({x:892.1,y:80.7},0).wait(1).to({x:879,y:76.3},0).wait(1).to({x:865.7,y:72.1},0).wait(1).to({x:852.5,y:68},0).wait(1).to({x:839.1,y:64.1},0).wait(1).to({x:825.7,y:60.3},0).wait(1).to({x:812.3,y:56.7},0).wait(1).to({x:798.9,y:53.1},0).wait(1).to({x:785.4,y:49.7},0).wait(1).to({x:771.9,y:46.4},0).wait(1).to({x:758.4,y:43.2},0).wait(1).to({x:744.9,y:40.1},0).wait(1).to({x:731.3,y:37.2},0).wait(1).to({x:717.7,y:34.2},0).wait(1).to({x:704.1,y:31.4},0).wait(1).to({x:690.5,y:28.7},0).wait(1).to({x:676.9,y:26},0).wait(1).to({x:663.2,y:23.4},0).wait(1).to({x:649.6,y:20.9},0).wait(1).to({x:635.9,y:18.5},0).wait(1).to({x:622.2,y:16.1},0).wait(1).to({x:608.5,y:13.8},0).wait(1).to({x:594.8,y:11.5},0).wait(1).to({x:581.1,y:9.3},0).wait(1).to({x:567.3,y:7.2},0).wait(1).to({x:553.6,y:5.1},0).wait(1).to({x:539.9,y:3},0).wait(1).to({x:526.1,y:1},0).wait(1).to({x:512.4,y:-0.9},0).wait(1).to({x:498.6,y:-2.8},0).wait(1).to({x:484.8,y:-4.6},0).wait(1).to({x:471,y:-6.4},0).wait(1).to({x:457.3,y:-8.2},0).wait(2).to({skewY:180},0).wait(1).to({x:473.3,y:-0.4},0).wait(1).to({x:489.3,y:7.4},0).wait(1).to({x:505.3,y:15.2},0).wait(1).to({x:521.3,y:23.1},0).wait(1).to({x:537.3,y:31},0).wait(1).to({x:553.3,y:38.9},0).wait(1).to({x:569.2,y:46.8},0).wait(1).to({x:585.1,y:54.8},0).wait(1).to({x:601.1,y:62.8},0).wait(1).to({x:617,y:70.8},0).wait(1).to({x:632.9,y:78.8},0).wait(1).to({x:648.8,y:86.9},0).wait(1).to({x:664.7,y:95},0).wait(1).to({x:680.6,y:103.1},0).wait(1).to({x:696.4,y:111.2},0).wait(1).to({x:712.3,y:119.4},0).wait(1).to({x:728.1,y:127.5},0).wait(1).to({x:743.9,y:135.7},0).wait(1).to({x:759.7,y:144},0).wait(1).to({x:775.5,y:152.2},0).wait(1).to({x:791.3,y:160.5},0).wait(1).to({x:807.1,y:168.8},0).wait(1).to({x:822.8,y:177.2},0).wait(1).to({x:838.6,y:185.5},0).wait(1).to({x:854.3,y:193.9},0).wait(1).to({x:870,y:202.4},0).wait(1).to({x:885.7,y:210.8},0).wait(1).to({x:901.4,y:219.3},0).wait(1).to({x:917,y:227.8},0).wait(1).to({x:932.6,y:236.4},0).wait(1).to({x:948.3,y:245},0).wait(1).to({x:963.8,y:253.6},0).wait(1).to({x:979.4,y:262.3},0).wait(1).to({x:995,y:271.1},0).wait(1).to({x:1010.5,y:279.8},0).wait(1).to({x:1025.9,y:288.6},0).wait(1).to({x:1041.4,y:297.5},0).wait(1).to({x:1056.8,y:306.4},0).wait(1).to({x:1072.2,y:315.4},0).wait(1).to({x:1087.6,y:324.5},0).wait(1).to({x:1102.9,y:333.6},0).wait(1).to({x:1118.2,y:342.7},0).wait(1).to({x:1133.4,y:352},0).wait(1).to({x:1148.6,y:361.3},0).wait(1).to({x:1163.7,y:370.7},0).wait(1).to({x:1178.8,y:380.2},0).wait(1).to({x:1193.8,y:389.9},0).wait(1).to({x:1208.8,y:399.6},0).wait(1).to({x:1223.6,y:409.4},0).wait(1).to({x:1238.4,y:419.5},0).wait(1).to({x:1253,y:429.6},0).wait(1).to({x:1267.5,y:440},0).wait(1).to({x:1281.9,y:450.5},0).wait(1).to({x:1296,y:461.4},0).wait(1).to({x:1310,y:472.5},0).wait(1).to({x:1323.6,y:484},0).wait(1).to({x:1336.7,y:496},0).wait(1).to({x:1349.3,y:508.7},0).wait(1).to({x:1360.8,y:522.3},0).wait(1).to({x:1370.3,y:537.3},0).wait(1).to({x:1374.5,y:554.4},0).wait(1).to({x:1366.5,y:569.7},0).wait(1).to({x:1350.7,y:577.7},0).wait(1).to({x:1333.3,y:581.5},0).wait(1).to({x:1315.6,y:583.2},0).wait(1).to({x:1297.7,y:583.7},0).wait(1).to({x:1280,y:583.3},0).wait(1).to({x:1262.1,y:582.3},0).wait(1).to({x:1244.5,y:580.9},0).wait(1).to({x:1226.8,y:579.1},0).wait(1).to({x:1208.9,y:577},0).wait(2).to({skewY:0,x:1238.9,y:589},0).to({_off:true},1).wait(333).to({_off:false,regY:0.1,y:589.1},0).wait(15).to({regY:0,x:1241.1,y:574.6},0).wait(1).to({x:1243,y:560.1},0).wait(1).to({x:1244.5,y:545.6},0).wait(1).to({x:1245.8,y:531.1},0).wait(1).to({x:1246.7,y:516.6},0).wait(1).to({x:1247.3,y:502},0).wait(1).to({x:1247.6,y:487.4},0).wait(1).to({x:1247.4,y:472.8},0).wait(1).to({x:1246.9,y:458.2},0).wait(1).to({x:1246.1,y:443.7},0).wait(1).to({x:1244.8,y:429.1},0).wait(1).to({x:1243.1,y:414.7},0).wait(1).to({x:1241.1,y:400.2},0).wait(1).to({x:1238.6,y:385.9},0).wait(1).to({x:1235.6,y:371.6},0).wait(1).to({x:1232.3,y:357.4},0).wait(1).to({x:1228.5,y:343.3},0).wait(1).to({x:1224.3,y:329.3},0).wait(1).to({x:1219.7,y:315.5},0).wait(1).to({x:1214.6,y:301.8},0).wait(1).to({x:1209.1,y:288.3},0).wait(1).to({x:1203.1,y:275},0).wait(1).to({x:1196.8,y:261.9},0).wait(1).to({x:1190,y:249},0).wait(1).to({x:1182.8,y:236.3},0).wait(1).to({x:1175.3,y:223.8},0).wait(1).to({x:1167.4,y:211.6},0).wait(1).to({x:1159.1,y:199.6},0).wait(1).to({x:1150.4,y:187.8},0).wait(1).to({x:1141.4,y:176.3},0).wait(1).to({x:1132.1,y:165.1},0).wait(1).to({x:1122.5,y:154.2},0).wait(1).to({x:1112.6,y:143.4},0).wait(1).to({x:1102.4,y:133},0).wait(1).to({x:1091.9,y:122.9},0).wait(1).to({x:1081.2,y:113},0).wait(1).to({x:1070.3,y:103.3},0).wait(1).to({x:1059.1,y:93.9},0).wait(1).to({x:1047.7,y:84.8},0).wait(1).to({x:1036.2,y:75.9},0).wait(1).to({x:1024.4,y:67.3},0).wait(1).to({x:1012.5,y:58.9},0).wait(1).to({x:1000.4,y:50.8},0).wait(1).to({x:988.2,y:42.8},0).wait(1).to({x:975.8,y:35.2},0).wait(1).to({regY:0.1,y:35.3},0).wait(1).to({regY:0,y:36.5},0).wait(1).to({y:37.9},0).wait(1).to({y:39.3},0).wait(1).to({y:40.6},0).wait(1).to({y:42},0).wait(1).to({y:43.4},0).wait(1).to({y:44.8},0).wait(1).to({y:46.1},0).wait(1).to({y:47.5},0).wait(1).to({y:48.9},0).wait(1).to({y:50.3},0).wait(1).to({y:51.6},0).wait(1).to({y:53},0).wait(1).to({y:54.4},0).wait(1).to({y:55.7},0).wait(1).to({y:57.1},0).wait(1).to({y:58.5},0).wait(1).to({y:59.9},0).wait(1).to({y:61.2},0).wait(1).to({y:62.6},0).wait(1).to({y:64},0).wait(1).to({y:65.4},0).wait(1).to({y:66.7},0).wait(1).to({y:68.1},0).wait(1).to({y:69.5},0).wait(1).to({y:70.8},0).wait(1).to({y:72.2},0).wait(1).to({y:73.6},0).wait(1).to({y:75},0).wait(1).to({y:76.3},0).wait(1).to({y:77.7},0).wait(1).to({y:79.1},0).wait(1).to({y:80.5},0).wait(1).to({y:81.8},0).wait(1).to({y:83.2},0).wait(1).to({regY:0.1,y:83.3},0).wait(1).to({regY:0,y:81.1},0).wait(1).to({y:79},0).wait(1).to({y:77},0).wait(1).to({y:79},0).wait(1).to({y:81.1},0).wait(1).to({y:83.2},0).wait(7).to({x:988.5,y:90.7},0).wait(1).to({x:1001.1,y:98.5},0).wait(1).to({x:1013.5,y:106.7},0).wait(1).to({x:1025.6,y:115.2},0).wait(1).to({x:1037.4,y:124.2},0).wait(1).to({x:1048.8,y:133.8},0).wait(1).to({x:1059.6,y:143.9},0).wait(1).to({x:1069.6,y:154.9},0).wait(1).to({x:1078.6,y:166.6},0).wait(1).to({x:1086.2,y:179.4},0).wait(1).to({x:1091.5,y:193.2},0).wait(1).to({x:1093.9,y:207.8},0).wait(1).to({x:1092.8,y:222.6},0).wait(1).to({x:1088.2,y:236.7},0).wait(1).to({x:1080.9,y:249.5},0).wait(1).to({x:1071.5,y:261.1},0).wait(1).to({x:1060.9,y:271.4},0).wait(1).to({x:1049.4,y:280.7},0).wait(1).to({x:1037.2,y:289.2},0).wait(1).to({x:1024.6,y:297.1},0).wait(1).to({x:1011.7,y:304.3},0).wait(1).to({x:998.5,y:311},0).wait(1).to({x:985,y:317.3},0).wait(1).to({x:971.4,y:323.3},0).wait(1).to({x:957.7,y:328.9},0).wait(1).to({x:943.9,y:334.3},0).wait(1).to({x:929.9,y:339.4},0).wait(1).to({x:915.9,y:344.2},0).wait(1).to({x:901.8,y:348.9},0).wait(1).to({x:887.7,y:353.4},0).wait(1).to({x:873.5,y:357.7},0).wait(1).to({x:859.2,y:361.8},0).wait(1).to({x:845,y:365.8},0).wait(1).to({x:830.6,y:369.7},0).wait(1).to({x:816.3,y:373.4},0).wait(1).to({x:801.9,y:377.1},0).wait(1).to({x:787.5,y:380.6},0).wait(1).to({x:773.1,y:384},0).wait(1).to({x:758.6,y:387.3},0).wait(1).to({x:744.1,y:390.6},0).wait(1).to({x:729.6,y:393.7},0).wait(1).to({x:715.1,y:396.8},0).wait(1).to({x:700.6,y:399.8},0).wait(1).to({x:686,y:402.7},0).wait(1).to({x:671.4,y:405.6},0).wait(1).to({x:656.9,y:408.4},0).wait(1).to({x:642.3,y:411.1},0).wait(25).to({regY:0.1,y:411.2},0).wait(1).to({regY:0,y:412.7},0).wait(1).to({y:414.3},0).wait(1).to({y:415.8},0).wait(1).to({y:417.4},0).wait(1).to({y:419},0).wait(1).to({y:420.6},0).wait(1).to({y:422.1},0).wait(1).to({y:423.7},0).wait(1).to({y:425.3},0).wait(1).to({y:426.9},0).wait(1).to({y:428.4},0).wait(1).to({y:430},0).wait(1).to({y:431.6},0).wait(1).to({y:433.2},0).wait(1).to({y:434.7},0).wait(1).to({y:436.3},0).wait(1).to({y:437.9},0).wait(1).to({y:439.5},0).wait(1).to({y:441},0).wait(1).to({y:442.6},0).wait(1).to({y:444.2},0).wait(1).to({y:445.8},0).wait(1).to({y:447.3},0).wait(1).to({y:448.9},0).wait(13).to({y:447.3},0).wait(1).to({y:445.7},0).wait(1).to({y:444},0).wait(1).to({y:442.4},0).wait(1).to({y:440.8},0).wait(1).to({y:439.2},0).wait(1).to({y:437.5},0).wait(1).to({y:435.9},0).wait(1).to({y:434.3},0).wait(1).to({y:432.7},0).wait(1).to({y:431},0).wait(1).to({y:429.4},0).wait(1).to({y:427.8},0).wait(1).to({y:426.2},0).wait(1).to({y:424.5},0).wait(1).to({y:422.9},0).wait(1).to({y:421.3},0).wait(1).to({y:419.7},0).wait(1).to({y:418},0).wait(1).to({y:416.4},0).wait(1).to({y:414.8},0).wait(1).to({y:413.2},0).wait(1).to({y:411.5},0).wait(1).to({regY:0.1,y:410},0).wait(1).to({regY:0,x:653.8,y:403},0).wait(1).to({x:665.5,y:396.3},0).wait(1).to({x:677.3,y:389.8},0).wait(1).to({x:689.2,y:383.5},0).wait(1).to({x:701.2,y:377.4},0).wait(1).to({x:713.3,y:371.5},0).wait(1).to({x:725.5,y:365.9},0).wait(1).to({x:737.9,y:360.6},0).wait(1).to({x:750.3,y:355.4},0).wait(1).to({x:762.9,y:350.6},0).wait(1).to({x:775.6,y:346},0).wait(1).to({x:788.3,y:341.7},0).wait(1).to({x:801.2,y:337.8},0).wait(1).to({x:814.1,y:334.1},0).wait(1).to({x:827.1,y:330.7},0).wait(1).to({x:840.2,y:327.7},0).wait(1).to({x:853.4,y:324.9},0).wait(1).to({x:866.7,y:322.6},0).wait(1).to({x:880,y:320.5},0).wait(1).to({x:893.3,y:318.9},0).wait(1).to({x:906.7,y:317.6},0).wait(1).to({x:920.2,y:316.7},0).wait(1).to({x:933.6,y:316.1},0).wait(1).to({x:947.1,y:315.9},0).wait(1).to({x:960.5,y:316.1},0).wait(1).to({x:974,y:316.7},0).wait(1).to({x:987.4,y:317.7},0).wait(1).to({x:1000.8,y:319},0).wait(1).to({x:1014.1,y:320.8},0).wait(1).to({x:1027.4,y:322.9},0).wait(1).to({x:1040.7,y:325.4},0).wait(1).to({x:1053.8,y:328.3},0).wait(1).to({x:1066.9,y:331.5},0).wait(1).to({x:1079.8,y:335.1},0).wait(1).to({x:1092.7,y:339},0).wait(1).to({x:1105.5,y:343.3},0).wait(1).to({x:1118.1,y:347.9},0).wait(1).to({x:1130.6,y:352.8},0).wait(1).to({x:1143.1,y:358},0).wait(1).to({x:1155.3,y:363.5},0).wait(1).to({x:1167.5,y:369.4},0).wait(1).to({x:1179.4,y:375.5},0).wait(1).to({x:1191.3,y:381.9},0).wait(1).to({x:1203,y:388.5},0).wait(1).to({x:1214.6,y:395.4},0).wait(1).to({x:1226,y:402.5},0).wait(1).to({x:1237.3,y:409.9},0).wait(1).to({regY:0.1,y:410},0).wait(1).to({regY:0,x:1237.2,y:413.7},0).wait(1).to({y:417.6},0).wait(1).to({y:421.4},0).wait(1).to({y:425.2},0).wait(1).to({y:429},0).wait(1).to({y:432.9},0).wait(1).to({y:436.7},0).wait(1).to({y:440.5},0).wait(1).to({y:444.4},0).wait(1).to({y:448.2},0).wait(1).to({y:452},0).wait(1).to({y:455.9},0).wait(1).to({y:459.7},0).wait(1).to({y:463.5},0).wait(1).to({y:467.3},0).wait(1).to({x:1237.1,y:471.2},0).wait(1).to({y:475},0).wait(1).to({y:478.8},0).wait(1).to({y:482.7},0).wait(1).to({y:486.5},0).wait(1).to({y:490.3},0).wait(1).to({y:494.2},0).wait(1).to({y:498},0).wait(1).to({y:501.8},0).wait(1).to({y:505.6},0).wait(1).to({y:509.5},0).wait(1).to({y:513.3},0).wait(1).to({y:517.1},0).wait(1).to({y:521},0).wait(1).to({y:524.8},0).wait(1).to({y:528.6},0).wait(1).to({x:1237,y:532.5},0).wait(1).to({y:536.3},0).wait(1).to({y:540.1},0).wait(1).to({y:543.9},0).wait(1).to({y:547.8},0).wait(1).to({y:551.6},0).wait(1).to({y:555.4},0).wait(1).to({y:559.3},0).wait(1).to({y:563.1},0).wait(1).to({y:566.9},0).wait(1).to({y:570.7},0).wait(1).to({y:574.6},0).wait(1).to({y:578.4},0).wait(1).to({y:582.2},0).wait(1).to({y:586.1},0).wait(1).to({y:589.9},0).to({_off:true},1).wait(36).to({_off:false,regY:0.1,y:590},0).wait(1).to({regY:0,x:1233.2,y:580.9},0).wait(1).to({x:1229.1,y:572.1},0).wait(1).to({x:1224.7,y:563.4},0).wait(1).to({x:1219.9,y:554.9},0).wait(1).to({x:1214.8,y:546.6},0).wait(1).to({x:1209.3,y:538.5},0).wait(1).to({x:1203.5,y:530.7},0).wait(1).to({x:1197.3,y:523.2},0).wait(1).to({x:1190.8,y:515.9},0).wait(1).to({x:1183.9,y:509},0).wait(1).to({x:1176.8,y:502.4},0).wait(1).to({x:1169.3,y:496.1},0).wait(1).to({x:1161.6,y:490.2},0).wait(1).to({x:1153.6,y:484.6},0).wait(1).to({x:1145.4,y:479.3},0).wait(1).to({x:1137,y:474.4},0).wait(1).to({x:1128.3,y:469.9},0).wait(1).to({x:1119.5,y:465.7},0).wait(1).to({x:1110.6,y:461.9},0).wait(1).to({x:1101.5,y:458.3},0).wait(1).to({x:1092.3,y:455.1},0).wait(1).to({x:1083,y:452.2},0).wait(1).to({x:1073.6,y:449.6},0).wait(1).to({x:1064.2,y:447.3},0).wait(1).to({x:1054.6,y:445.2},0).wait(1).to({x:1045,y:443.4},0).wait(1).to({x:1035.4,y:441.8},0).wait(1).to({x:1025.8,y:440.5},0).wait(1).to({x:1016.1,y:439.4},0).wait(1).to({x:1006.4,y:438.5},0).wait(1).to({x:996.7,y:437.8},0).wait(1).to({x:986.9,y:437.2},0).wait(1).to({x:977.2,y:436.9},0).wait(1).to({x:967.5,y:436.7},0).wait(1).to({x:957.7},0).wait(1).to({x:948,y:436.9},0).wait(1).to({regY:0.1,y:437},0).wait(1).to({regY:0,y:438.5},0).wait(1).to({y:440},0).wait(1).to({y:441.6},0).wait(1).to({y:443.2},0).wait(1).to({y:444.7},0).wait(1).to({y:446.3},0).wait(1).to({y:447.9},0).wait(1).to({y:449.4},0).wait(1).to({y:451},0).wait(1).to({y:452.6},0).wait(1).to({y:454.1},0).wait(1).to({y:455.7},0).wait(1).to({y:457.2},0).wait(1).to({y:458.8},0).wait(1).to({y:460.4},0).wait(1).to({y:461.9},0).wait(1).to({y:463.5},0).wait(1).to({y:465.1},0).wait(1).to({y:466.6},0).wait(1).to({y:468.2},0).wait(1).to({y:469.8},0).wait(1).to({y:471.3},0).wait(1).to({y:472.9},0).wait(14).to({x:945.7,y:464.3},0).wait(1).to({x:943.3,y:455.7},0).wait(1).to({x:940.7,y:447.2},0).wait(1).to({x:938,y:438.7},0).wait(1).to({x:935.1,y:430.2},0).wait(1).to({x:932.1,y:421.9},0).wait(1).to({x:928.9,y:413.6},0).wait(1).to({x:925.5,y:405.3},0).wait(1).to({x:922,y:397.1},0).wait(1).to({x:918.2,y:389},0).wait(1).to({x:914.3,y:381},0).wait(1).to({x:910.2,y:373.1},0).wait(1).to({x:906,y:365.3},0).wait(1).to({x:901.5,y:357.6},0).wait(1).to({x:896.9,y:350},0).wait(1).to({x:892,y:342.5},0).wait(1).to({x:887,y:335.1},0).wait(1).to({x:881.8,y:327.9},0).wait(1).to({x:876.5,y:320.8},0).wait(1).to({x:870.9,y:313.8},0).wait(1).to({x:865.2,y:307},0).wait(1).to({x:859.2,y:300.3},0).wait(1).to({x:853.2,y:293.8},0).wait(1).to({x:846.9,y:287.4},0).wait(1).to({x:840.5,y:281.2},0).wait(1).to({x:834,y:275.2},0).wait(1).to({x:827.2,y:269.4},0).wait(1).to({x:820.4,y:263.7},0).wait(1).to({x:813.4,y:258.1},0).wait(1).to({x:806.3,y:252.8},0).wait(1).to({x:799,y:247.6},0).wait(1).to({x:791.7,y:242.6},0).wait(1).to({x:784.2,y:237.7},0).wait(1).to({x:776.6,y:233},0).wait(1).to({x:768.9,y:228.5},0).wait(1).to({x:761.1,y:224.2},0).wait(1).to({x:753.3,y:220},0).wait(1).to({x:745.3,y:216},0).wait(1).to({x:737.3,y:212.1},0).wait(1).to({x:729.2,y:208.3},0).wait(1).to({x:721.1,y:204.8},0).wait(1).to({x:712.8,y:201.3},0).wait(1).to({x:704.6,y:198},0).wait(1).to({x:696.2,y:194.9},0).wait(1).to({x:687.8,y:191.8},0).wait(1).to({x:679.4,y:188.9},0).wait(1).to({x:670.9,y:186.2},0).wait(1).to({x:662.4,y:183.5},0).wait(1).to({x:653.9,y:181},0).wait(1).to({x:645.3,y:178.6},0).wait(1).to({x:636.7,y:176.2},0).wait(1).to({x:628.1,y:174},0).wait(1).to({x:619.4,y:171.9},0).wait(1).to({x:610.7,y:169.9},0).wait(1).to({x:602,y:168},0).wait(1).to({x:593.3,y:166.2},0).wait(1).to({x:584.6,y:164.5},0).wait(1).to({x:575.8,y:162.9},0).wait(1).to({x:567,y:161.4},0).wait(1).to({x:558.2,y:159.9},0).wait(1).to({x:549.4,y:158.5},0).wait(1).to({x:540.6,y:157.2},0).wait(1).to({x:531.8,y:156},0).wait(1).to({x:523,y:154.8},0).wait(1).to({x:514.1,y:153.7},0).wait(1).to({x:505.3,y:152.7},0).wait(1).to({x:496.4,y:151.8},0).wait(1).to({x:487.5,y:150.9},0).wait(1).to({x:478.6,y:150},0).wait(1).to({x:469.8,y:149.3},0).wait(1).to({x:460.9,y:148.6},0).wait(1).to({x:452,y:147.9},0).wait(1).to({regY:0.1,y:148},0).wait(23).to({skewY:180},0).wait(1).to({regY:0,x:464,y:146.7},0).wait(1).to({x:476.1,y:145.5},0).wait(1).to({x:488.2,y:144.5},0).wait(1).to({x:500.3,y:143.5},0).wait(1).to({x:512.4,y:142.6},0).wait(1).to({x:524.5,y:141.9},0).wait(1).to({x:536.6,y:141.2},0).wait(1).to({x:548.8,y:140.7},0).wait(1).to({x:560.9,y:140.3},0).wait(1).to({x:573,y:140},0).wait(1).to({x:585.1,y:139.8},0).wait(1).to({x:597.3,y:139.7},0).wait(1).to({x:609.4},0).wait(1).to({x:621.5,y:139.9},0).wait(1).to({x:633.7,y:140.2},0).wait(1).to({x:645.8,y:140.6},0).wait(1).to({x:657.9,y:141.2},0).wait(1).to({x:670,y:141.8},0).wait(1).to({x:682.1,y:142.6},0).wait(1).to({x:694.2,y:143.6},0).wait(1).to({x:706.3,y:144.7},0).wait(1).to({x:718.4,y:145.9},0).wait(1).to({x:730.4,y:147.3},0).wait(1).to({x:742.5,y:148.8},0).wait(1).to({x:754.5,y:150.5},0).wait(1).to({x:766.5,y:152.4},0).wait(1).to({x:778.4,y:154.4},0).wait(1).to({x:790.4,y:156.5},0).wait(1).to({x:802.3,y:158.8},0).wait(1).to({x:814.2,y:161.3},0).wait(1).to({x:826,y:164},0).wait(1).to({x:837.8,y:166.8},0).wait(1).to({x:849.6,y:169.8},0).wait(1).to({x:861.3,y:172.9},0).wait(1).to({x:872.9,y:176.3},0).wait(1).to({x:884.6,y:179.8},0).wait(1).to({x:896.1,y:183.5},0).wait(1).to({x:907.6,y:187.4},0).wait(1).to({x:919,y:191.4},0).wait(1).to({x:930.4,y:195.7},0).wait(1).to({x:941.7,y:200.1},0).wait(1).to({x:952.9,y:204.7},0).wait(1).to({x:964,y:209.5},0).wait(1).to({x:975.1,y:214.5},0).wait(1).to({x:986.1,y:219.7},0).wait(1).to({x:997,y:225.1},0).wait(1).to({x:1007.7,y:230.6},0).wait(1).to({x:1018.4,y:236.4},0).wait(1).to({x:1029,y:242.3},0).wait(1).to({x:1039.5,y:248.4},0).wait(1).to({x:1049.8,y:254.7},0).wait(1).to({x:1060.1,y:261.2},0).wait(1).to({x:1070.2,y:267.9},0).wait(1).to({x:1080.2,y:274.8},0).wait(1).to({x:1090.1,y:281.8},0).wait(1).to({x:1099.9,y:289},0).wait(1).to({x:1109.5,y:296.4},0).wait(1).to({x:1119,y:303.9},0).wait(1).to({x:1128.4,y:311.6},0).wait(1).to({x:1137.6,y:319.5},0).wait(1).to({x:1146.7,y:327.6},0).wait(1).to({x:1155.6,y:335.8},0).wait(1).to({x:1164.4,y:344.1},0).wait(1).to({x:1173.1,y:352.6},0).wait(1).to({x:1181.6,y:361.3},0).wait(1).to({x:1189.9,y:370.1},0).wait(1).to({x:1198.1,y:379},0).wait(1).to({x:1206.2,y:388.1},0).wait(1).to({x:1214.1,y:397.3},0).wait(1).to({x:1221.9,y:406.6},0).wait(1).to({x:1229.5,y:416},0).wait(1).to({x:1237,y:425.6},0).wait(1).to({regY:0.1,skewY:0,x:1238,y:425.7},0).wait(1).to({regY:0,y:428.4},0).wait(1).to({y:431.1},0).wait(1).to({y:433.9},0).wait(1).to({y:436.7},0).wait(1).to({y:439.5},0).wait(1).to({y:442.2},0).wait(1).to({y:445},0).wait(1).to({y:447.8},0).wait(1).to({y:450.5},0).wait(1).to({y:453.3},0).wait(1).to({y:456.1},0).wait(1).to({y:458.9},0).wait(1).to({y:461.6},0).wait(1).to({y:464.4},0).wait(1).to({y:467.2},0).wait(1).to({y:469.9},0).wait(1).to({y:472.7},0).wait(1).to({y:475.5},0).wait(1).to({y:478.3},0).wait(1).to({y:481},0).wait(1).to({y:483.8},0).wait(1).to({y:486.6},0).wait(1).to({y:489.3},0).wait(1).to({y:492.1},0).wait(1).to({y:494.9},0).wait(1).to({y:497.7},0).wait(1).to({y:500.4},0).wait(1).to({y:503.2},0).wait(1).to({y:506},0).wait(1).to({y:508.7},0).wait(1).to({y:511.5},0).wait(1).to({y:514.3},0).wait(1).to({y:517},0).wait(1).to({y:519.8},0).wait(1).to({y:522.6},0).wait(1).to({y:525.4},0).wait(1).to({y:528.1},0).wait(1).to({y:530.9},0).wait(1).to({y:533.7},0).wait(1).to({y:536.4},0).wait(1).to({y:539.2},0).wait(1).to({y:542},0).wait(1).to({y:544.8},0).wait(1).to({y:547.5},0).wait(1).to({y:550.3},0).wait(1).to({y:553.1},0).wait(1).to({y:555.8},0).wait(1).to({y:558.6},0).wait(1).to({y:561.4},0).wait(1).to({y:564.2},0).wait(1).to({y:566.9},0).wait(1).to({y:569.7},0).wait(1).to({y:572.5},0).wait(1).to({y:575.2},0).wait(1).to({y:578},0).wait(1).to({y:580.8},0).wait(1).to({y:583.6},0).wait(1).to({y:586.3},0).wait(1).to({y:589.1},0).wait(1).to({regY:0.1,y:589.2},0).to({_off:true},24).wait(323).to({_off:false},0).wait(12).to({regY:0,x:1237.7,y:578.4},0).wait(1).to({x:1237.3,y:567.8},0).wait(1).to({x:1236.6,y:557.1},0).wait(1).to({x:1235.7,y:546.5},0).wait(1).to({x:1234.6,y:535.9},0).wait(1).to({x:1233.3,y:525.3},0).wait(1).to({x:1231.7,y:514.7},0).wait(1).to({x:1229.9,y:504.2},0).wait(1).to({x:1227.8,y:493.7},0).wait(1).to({x:1225.4,y:483.3},0).wait(1).to({x:1222.8,y:473},0).wait(1).to({x:1219.9,y:462.7},0).wait(1).to({x:1216.7,y:452.5},0).wait(1).to({x:1213.2,y:442.4},0).wait(1).to({x:1209.5,y:432.4},0).wait(1).to({x:1205.4,y:422.6},0).wait(1).to({x:1201.1,y:412.8},0).wait(1).to({x:1196.5,y:403.2},0).wait(1).to({x:1191.6,y:393.7},0).wait(1).to({x:1186.5,y:384.3},0).wait(1).to({x:1181,y:375.2},0).wait(1).to({x:1175.3,y:366.2},0).wait(1).to({x:1169.3,y:357.3},0).wait(1).to({x:1163,y:348.7},0).wait(1).to({x:1156.5,y:340.2},0).wait(1).to({x:1149.8,y:332},0).wait(1).to({x:1142.8,y:323.9},0).wait(1).to({x:1135.5,y:316.1},0).wait(1).to({x:1128.1,y:308.4},0).wait(1).to({x:1120.4,y:301},0).wait(1).to({x:1112.5,y:293.8},0).wait(1).to({x:1104.5,y:286.8},0).wait(1).to({x:1096.2,y:280},0).wait(1).to({x:1087.8,y:273.4},0).wait(1).to({x:1079.3,y:267.1},0).wait(1).to({x:1070.5,y:260.9},0).wait(1).to({x:1061.7,y:255},0).wait(1).to({x:1052.7,y:249.2},0).wait(1).to({x:1043.6,y:243.7},0).wait(1).to({x:1034.3,y:238.4},0).wait(1).to({x:1025,y:233.2},0).wait(1).to({x:1015.5,y:228.3},0).wait(1).to({x:1006,y:223.5},0).wait(1).to({x:996.3,y:218.9},0).wait(1).to({x:986.6,y:214.5},0).wait(1).to({x:976.8,y:210.2},0).wait(1).to({x:967,y:206.2},0).wait(1).to({regY:0.1,y:206.3},0).wait(1).to({regY:0,y:207.2},0).wait(1).to({y:208.3},0).wait(1).to({y:209.4},0).wait(1).to({y:210.5},0).wait(1).to({y:211.6},0).wait(1).to({y:212.7},0).wait(1).to({y:213.8},0).wait(1).to({y:214.9},0).wait(1).to({y:215.9},0).wait(1).to({y:217},0).wait(1).to({y:218.1},0).wait(1).to({y:219.2},0).wait(1).to({y:220.3},0).wait(1).to({y:221.4},0).wait(1).to({y:222.5},0).wait(1).to({y:223.6},0).wait(1).to({y:224.7},0).wait(1).to({y:225.7},0).wait(1).to({y:226.8},0).wait(1).to({y:227.9},0).wait(1).to({y:229},0).wait(1).to({y:230.1},0).wait(1).to({y:231.2},0).wait(1).to({y:232.3},0).wait(1).to({y:233.4},0).wait(1).to({y:234.4},0).wait(1).to({y:235.5},0).wait(1).to({y:236.6},0).wait(1).to({y:237.7},0).wait(1).to({y:238.8},0).wait(1).to({y:239.9},0).wait(1).to({y:241},0).wait(1).to({y:242.1},0).wait(1).to({y:243.2},0).wait(1).to({regY:0.1,y:243.3},0).wait(14).to({regY:0,x:974.3,y:250.3},0).wait(1).to({x:981.3,y:257.9},0).wait(1).to({x:987.8,y:265.9},0).wait(1).to({x:993.6,y:274.4},0).wait(1).to({x:998.6,y:283.5},0).wait(1).to({x:1002.3,y:293.1},0).wait(1).to({x:1004.3,y:303.2},0).wait(1).to({x:1004.4,y:313.5},0).wait(1).to({x:1002.2,y:323.6},0).wait(1).to({x:998.1,y:333},0).wait(1).to({x:992.4,y:341.6},0).wait(1).to({x:985.6,y:349.3},0).wait(1).to({x:978,y:356.2},0).wait(1).to({x:969.8,y:362.6},0).wait(1).to({x:961.3,y:368.3},0).wait(1).to({x:952.4,y:373.5},0).wait(1).to({x:943.3,y:378.3},0).wait(1).to({x:934,y:382.8},0).wait(1).to({x:924.6,y:387},0).wait(1).to({x:915,y:390.9},0).wait(1).to({x:905.4,y:394.6},0).wait(1).to({x:895.7,y:398.1},0).wait(1).to({x:885.9,y:401.4},0).wait(1).to({x:876.1,y:404.6},0).wait(1).to({x:866.3,y:407.6},0).wait(1).to({x:856.3,y:410.4},0).wait(1).to({x:846.4,y:413.1},0).wait(1).to({x:836.4,y:415.7},0).wait(1).to({x:826.4,y:418.2},0).wait(1).to({x:816.4,y:420.6},0).wait(1).to({x:806.4,y:423},0).wait(1).to({x:796.3,y:425.2},0).wait(1).to({x:786.2,y:427.3},0).wait(1).to({x:776.1,y:429.4},0).wait(1).to({x:766,y:431.4},0).wait(1).to({x:755.9,y:433.3},0).wait(1).to({x:745.7,y:435.2},0).wait(1).to({x:735.6,y:437},0).wait(1).to({x:725.4,y:438.8},0).wait(1).to({x:715.3,y:440.5},0).wait(1).to({x:705.1,y:442.2},0).wait(1).to({x:694.9,y:443.8},0).wait(1).to({x:684.7,y:445.3},0).wait(1).to({x:674.5,y:446.8},0).wait(1).to({x:664.3,y:448.3},0).wait(1).to({x:654.1,y:449.8},0).wait(1).to({x:643.9,y:451.2},0).wait(1).to({regY:0.1,y:451.3},0).wait(12).to({y:453.1},0).wait(1).to({regY:0,y:453.9},0).wait(1).to({y:454.8},0).wait(1).to({y:455.8},0).wait(1).to({y:456.7},0).wait(1).to({y:457.6},0).wait(1).to({y:458.5},0).wait(1).to({y:459.4},0).wait(1).to({y:460.3},0).wait(1).to({y:461.3},0).wait(1).to({y:462.2},0).wait(1).to({y:463.1},0).wait(1).to({y:464},0).wait(1).to({y:464.9},0).wait(1).to({y:465.9},0).wait(1).to({y:466.8},0).wait(1).to({y:467.7},0).wait(1).to({y:468.6},0).wait(1).to({y:469.5},0).wait(1).to({y:470.5},0).wait(1).to({y:471.4},0).wait(1).to({y:472.3},0).wait(1).to({y:473.2},0).wait(1).to({y:474.1},0).wait(24).to({regY:0.1,y:451.3},0).wait(1).to({regY:0,y:449.7},0).wait(1).to({y:448.2},0).wait(1).to({y:446.8},0).wait(1).to({y:445.3},0).wait(1).to({y:443.9},0).wait(1).to({y:442.4},0).wait(1).to({y:440.9},0).wait(1).to({y:439.5},0).wait(1).to({y:438},0).wait(1).to({y:436.6},0).wait(1).to({y:435.1},0).wait(1).to({y:433.7},0).wait(1).to({y:432.2},0).wait(1).to({y:430.7},0).wait(1).to({y:429.3},0).wait(1).to({y:427.8},0).wait(1).to({y:426.4},0).wait(1).to({y:424.9},0).wait(1).to({y:423.4},0).wait(1).to({y:422},0).wait(1).to({y:420.5},0).wait(1).to({y:419.1},0).wait(1).to({y:417.6},0).wait(1).to({y:416.2},0).wait(13).to({regY:0.1,skewY:180,y:416.3},0).wait(1).to({regY:0,x:652.6,y:409.4},0).wait(1).to({x:661.4,y:402.9},0).wait(1).to({x:670.4,y:396.4},0).wait(1).to({x:679.4,y:390.1},0).wait(1).to({x:688.5,y:383.9},0).wait(1).to({x:697.8,y:377.9},0).wait(1).to({x:707.1,y:372},0).wait(1).to({x:716.5,y:366.3},0).wait(1).to({x:726.1,y:360.8},0).wait(1).to({x:735.7,y:355.4},0).wait(1).to({x:745.5,y:350.3},0).wait(1).to({x:755.3,y:345.3},0).wait(1).to({x:765.3,y:340.6},0).wait(1).to({x:775.3,y:336},0).wait(1).to({x:785.5,y:331.7},0).wait(1).to({x:795.7,y:327.7},0).wait(1).to({x:806.1,y:323.8},0).wait(1).to({x:816.5,y:320.3},0).wait(1).to({x:827,y:317},0).wait(1).to({x:837.6,y:313.9},0).wait(1).to({x:848.3,y:311.2},0).wait(1).to({x:859,y:308.7},0).wait(1).to({x:869.8,y:306.6},0).wait(1).to({x:880.7,y:304.7},0).wait(1).to({x:891.6,y:303.2},0).wait(1).to({x:902.6,y:301.9},0).wait(1).to({x:913.6,y:301},0).wait(1).to({x:924.6,y:300.4},0).wait(1).to({x:935.6,y:300.1},0).wait(1).to({x:946.6,y:300.2},0).wait(1).to({x:957.6,y:300.6},0).wait(1).to({x:968.6,y:301.3},0).wait(1).to({x:979.6,y:302.3},0).wait(1).to({x:990.6,y:303.6},0).wait(1).to({x:1001.5,y:305.2},0).wait(1).to({x:1012.3,y:307.2},0).wait(1).to({x:1023.1,y:309.4},0).wait(1).to({x:1033.9,y:311.9},0).wait(1).to({x:1044.5,y:314.7},0).wait(1).to({x:1055.1,y:317.8},0).wait(1).to({x:1065.6,y:321.2},0).wait(1).to({x:1076,y:324.8},0).wait(1).to({x:1086.4,y:328.6},0).wait(1).to({x:1096.6,y:332.7},0).wait(1).to({x:1106.8,y:337},0).wait(1).to({x:1116.8,y:341.5},0).wait(1).to({x:1126.8,y:346.2},0).wait(1).to({x:1136.7,y:351.1},0).wait(1).to({x:1146.4,y:356.2},0).wait(1).to({x:1156.1,y:361.5},0).wait(1).to({x:1165.7,y:367},0).wait(1).to({x:1175.1,y:372.6},0).wait(1).to({x:1184.5,y:378.4},0).wait(1).to({x:1193.8,y:384.4},0).wait(1).to({x:1203,y:390.5},0).wait(1).to({x:1212.1,y:396.7},0).wait(1).to({x:1221.1,y:403.1},0).wait(1).to({x:1230,y:409.5},0).wait(1).to({x:1238.9,y:416.2},0).wait(1).to({regY:0.1,skewY:0,y:416.3},0).wait(1).to({regY:0,y:419.8},0).wait(1).to({y:423.5},0).wait(1).to({y:427.2},0).wait(1).to({y:430.9},0).wait(1).to({y:434.6},0).wait(1).to({y:438.3},0).wait(1).to({y:442},0).wait(1).to({y:445.7},0).wait(1).to({y:449.4},0).wait(1).to({y:453.1},0).wait(1).to({y:456.8},0).wait(1).to({y:460.4},0).wait(1).to({y:464.1},0).wait(1).to({y:467.8},0).wait(1).to({y:471.5},0).wait(1).to({y:475.2},0).wait(1).to({y:478.9},0).wait(1).to({y:482.6},0).wait(1).to({y:486.3},0).wait(1).to({y:490},0).wait(1).to({y:493.7},0).wait(1).to({y:497.4},0).wait(1).to({y:501.1},0).wait(1).to({y:504.7},0).wait(1).to({y:508.4},0).wait(1).to({y:512.1},0).wait(1).to({y:515.8},0).wait(1).to({y:519.5},0).wait(1).to({y:523.2},0).wait(1).to({y:526.9},0).wait(1).to({y:530.6},0).wait(1).to({y:534.3},0).wait(1).to({y:538},0).wait(1).to({y:541.7},0).wait(1).to({y:545.4},0).wait(1).to({y:549},0).wait(1).to({y:552.7},0).wait(1).to({y:556.4},0).wait(1).to({y:560.1},0).wait(1).to({y:563.8},0).wait(1).to({y:567.5},0).wait(1).to({y:571.2},0).wait(1).to({y:574.9},0).wait(1).to({y:578.6},0).wait(1).to({y:582.3},0).wait(1).to({y:586},0).wait(1).to({y:589.7},0).to({_off:true},1).wait(36).to({_off:false,regY:0.1,y:589.8},0).wait(13).to({regY:0,x:1225.5,y:585.6},0).wait(1).to({x:1212.1,y:581.5},0).wait(1).to({x:1198.7,y:577.4},0).wait(1).to({x:1185.4,y:573.3},0).wait(1).to({x:1172,y:569.3},0).wait(1).to({x:1158.6,y:565.2},0).wait(1).to({x:1145.3,y:561.1},0).wait(1).to({x:1131.9,y:557},0).wait(1).to({x:1118.5,y:553},0).wait(1).to({x:1105.1,y:548.9},0).wait(1).to({x:1091.8,y:544.8},0).wait(1).to({x:1078.4,y:540.7},0).wait(1).to({x:1065,y:536.6},0).wait(1).to({x:1051.7,y:532.6},0).wait(1).to({x:1038.3,y:528.5},0).wait(1).to({x:1024.9,y:524.4},0).wait(1).to({x:1011.5,y:520.3},0).wait(1).to({x:998.2,y:516.3},0).wait(1).to({x:984.8,y:512.2},0).wait(1).to({x:971.4,y:508.1},0).wait(1).to({x:958.1,y:504},0).wait(1).to({x:944.7,y:500},0).wait(1).to({x:931.3,y:495.9},0).wait(1).to({x:917.9,y:491.8},0).wait(1).to({x:904.6,y:487.7},0).wait(1).to({x:891.2,y:483.6},0).wait(1).to({x:877.8,y:479.6},0).wait(1).to({x:864.5,y:475.5},0).wait(1).to({x:851.1,y:471.4},0).wait(1).to({x:837.7,y:467.3},0).wait(1).to({x:824.3,y:463.3},0).wait(1).to({x:811,y:459.2},0).wait(1).to({x:797.6,y:455.1},0).wait(1).to({x:784.2,y:451},0).wait(1).to({x:770.9,y:447},0).wait(1).to({regY:0.1,y:447.1},0).wait(15).to({regY:0,x:767,y:447.7},0).wait(1).to({x:763.2,y:448.5},0).wait(1).to({x:759.4,y:449.3},0).wait(1).to({x:755.6,y:450.1},0).wait(1).to({x:751.8,y:450.9},0).wait(1).to({x:747.9,y:451.7},0).wait(1).to({x:744.1,y:452.5},0).wait(1).to({x:740.3,y:453.3},0).wait(1).to({x:736.5,y:454},0).wait(1).to({x:732.7,y:454.8},0).wait(1).to({x:728.9,y:455.6},0).wait(1).to({x:725,y:456.4},0).wait(1).to({x:721.2,y:457.2},0).wait(1).to({x:717.4,y:458},0).wait(1).to({x:713.6,y:458.8},0).wait(1).to({x:709.8,y:459.6},0).wait(1).to({x:705.9,y:460.3},0).wait(1).to({x:702.1,y:461.1},0).wait(1).to({x:698.3,y:461.9},0).wait(1).to({x:694.5,y:462.7},0).wait(1).to({x:690.7,y:463.5},0).wait(1).to({x:686.9,y:464.3},0).wait(1).to({x:683,y:465.1},0).wait(1).to({x:679.2,y:465.9},0).wait(1).to({x:675.4,y:466.6},0).wait(1).to({x:671.6,y:467.4},0).wait(1).to({x:667.8,y:468.2},0).wait(1).to({x:663.9,y:469},0).wait(1).to({x:660.1,y:469.8},0).wait(1).to({x:656.3,y:470.6},0).wait(1).to({x:652.5,y:471.4},0).wait(1).to({x:648.7,y:472.2},0).wait(1).to({x:644.9,y:473},0).wait(1).to({regY:0.1,y:473.1},0).wait(14).to({regY:0,x:652.5,y:473.9},0).wait(1).to({x:660.1,y:474.8},0).wait(1).to({x:667.8,y:475.6},0).wait(1).to({x:675.5,y:476.3},0).wait(1).to({x:683.2,y:477},0).wait(1).to({x:690.9,y:477.5},0).wait(1).to({x:698.5,y:477.9},0).wait(1).to({x:706.2,y:478.2},0).wait(1).to({x:713.9,y:478.3},0).wait(1).to({x:721.7},0).wait(1).to({x:729.4,y:478.2},0).wait(1).to({x:737.1,y:477.8},0).wait(1).to({x:744.7,y:477.3},0).wait(1).to({x:752.4,y:476.5},0).wait(1).to({x:760,y:475.4},0).wait(1).to({x:767.6,y:474},0).wait(1).to({x:775.1,y:472.2},0).wait(1).to({x:782.5,y:470},0).wait(1).to({x:789.7,y:467.2},0).wait(1).to({x:796.6,y:463.8},0).wait(1).to({x:803.1,y:459.6},0).wait(1).to({x:808.8,y:454.5},0).wait(1).to({x:813.5,y:448.4},0).wait(1).to({x:816.9,y:441.5},0).wait(1).to({x:818.6,y:434},0).wait(1).to({x:818.9,y:426.3},0).wait(1).to({x:817.9,y:418.7},0).wait(1).to({x:816,y:411.2},0).wait(1).to({x:813.3,y:404},0).wait(1).to({x:810,y:397},0).wait(1).to({x:806.3,y:390.3},0).wait(1).to({x:802.3,y:383.7},0).wait(1).to({x:797.9,y:377.3},0).wait(1).to({x:793.3,y:371.2},0).wait(1).to({x:788.5,y:365.1},0).wait(1).to({x:783.6,y:359.2},0).wait(1).to({x:778.5,y:353.5},0).wait(1).to({x:773.2,y:347.8},0).wait(1).to({x:767.9,y:342.3},0).wait(1).to({x:762.4,y:336.8},0).wait(1).to({x:756.8,y:331.5},0).wait(1).to({x:751.2,y:326.2},0).wait(1).to({x:745.5,y:321.1},0).wait(1).to({x:739.7,y:316},0).wait(1).to({x:733.9,y:310.9},0).wait(1).to({x:728,y:306},0).wait(1).to({regY:0.1,y:306.1},0).wait(12).to({skewY:180},0).wait(1).to({regY:0,x:740.5,y:305},0).wait(1).to({x:753,y:304.2},0).wait(1).to({x:765.5,y:303.5},0).wait(1).to({x:778,y:303},0).wait(1).to({x:790.5,y:302.7},0).wait(1).to({x:803.1,y:302.6},0).wait(1).to({x:815.6},0).wait(1).to({x:828.1,y:302.9},0).wait(1).to({x:840.7,y:303.3},0).wait(1).to({x:853.2,y:304},0).wait(1).to({x:865.7,y:304.9},0).wait(1).to({x:878.1,y:305.9},0).wait(1).to({x:890.6,y:307.3},0).wait(1).to({x:903,y:308.9},0).wait(1).to({x:915.4,y:310.7},0).wait(1).to({x:927.8,y:312.7},0).wait(1).to({x:940.1,y:315.1},0).wait(1).to({x:952.3,y:317.7},0).wait(1).to({x:964.5,y:320.6},0).wait(1).to({x:976.7,y:323.8},0).wait(1).to({x:988.7,y:327.2},0).wait(1).to({x:1000.6,y:331},0).wait(1).to({x:1012.5,y:335.1},0).wait(1).to({x:1024.2,y:339.5},0).wait(1).to({x:1035.8,y:344.3},0).wait(1).to({x:1047.2,y:349.3},0).wait(1).to({x:1058.6,y:354.7},0).wait(1).to({x:1069.7,y:360.5},0).wait(1).to({x:1080.7,y:366.5},0).wait(1).to({x:1091.4,y:372.9},0).wait(1).to({x:1102,y:379.7},0).wait(1).to({x:1112.3,y:386.7},0).wait(1).to({x:1122.5,y:394.1},0).wait(1).to({x:1132.3,y:401.8},0).wait(1).to({x:1141.9,y:409.9},0).wait(1).to({x:1151.3,y:418.2},0).wait(1).to({x:1160.4,y:426.9},0).wait(1).to({x:1169.1,y:435.8},0).wait(1).to({x:1177.7,y:445},0).wait(1).to({x:1185.9,y:454.4},0).wait(1).to({x:1193.8,y:464.2},0).wait(1).to({x:1201.4,y:474.1},0).wait(1).to({x:1208.7,y:484.3},0).wait(1).to({x:1215.7,y:494.7},0).wait(1).to({x:1222.4,y:505.2},0).wait(1).to({x:1228.8,y:516},0).wait(1).to({x:1235,y:527},0).wait(1).to({regY:0.1,skewY:0,y:527.1},0).wait(1).to({regY:0,y:528.3},0).wait(1).to({x:1235.1,y:529.6},0).wait(1).to({x:1235.2,y:530.9},0).wait(1).to({x:1235.3,y:532.3},0).wait(1).to({x:1235.4,y:533.6},0).wait(1).to({x:1235.5,y:534.9},0).wait(1).to({y:536.3},0).wait(1).to({x:1235.6,y:537.6},0).wait(1).to({x:1235.7,y:538.9},0).wait(1).to({x:1235.8,y:540.2},0).wait(1).to({x:1235.9,y:541.6},0).wait(1).to({x:1236,y:542.9},0).wait(1).to({x:1236.1,y:544.2},0).wait(1).to({y:545.6},0).wait(1).to({x:1236.2,y:546.9},0).wait(1).to({x:1236.3,y:548.2},0).wait(1).to({x:1236.4,y:549.6},0).wait(1).to({x:1236.5,y:550.9},0).wait(1).to({x:1236.6,y:552.2},0).wait(1).to({x:1236.7,y:553.5},0).wait(1).to({y:554.9},0).wait(1).to({x:1236.8,y:556.2},0).wait(1).to({x:1236.9,y:557.5},0).wait(1).to({x:1237,y:558.9},0).wait(1).to({x:1237.1,y:560.2},0).wait(1).to({x:1237.2,y:561.5},0).wait(1).to({y:562.9},0).wait(1).to({x:1237.3,y:564.2},0).wait(1).to({x:1237.4,y:565.5},0).wait(1).to({x:1237.5,y:566.8},0).wait(1).to({x:1237.6,y:568.2},0).wait(1).to({x:1237.7,y:569.5},0).wait(1).to({x:1237.8,y:570.8},0).wait(1).to({y:572.2},0).wait(1).to({x:1237.9,y:573.5},0).wait(1).to({x:1238,y:574.8},0).wait(1).to({x:1238.1,y:576.2},0).wait(1).to({x:1238.2,y:577.5},0).wait(1).to({x:1238.3,y:578.8},0).wait(1).to({x:1238.4,y:580.1},0).wait(1).to({y:581.5},0).wait(1).to({x:1238.5,y:582.8},0).wait(1).to({x:1238.6,y:584.1},0).wait(1).to({x:1238.7,y:585.5},0).wait(1).to({x:1238.8,y:586.8},0).wait(1).to({x:1238.9,y:588.1},0).wait(1).to({x:1239,y:589.5},0).to({_off:true},1).wait(216).to({_off:false,regY:0.1,y:589.6},0).wait(13).to({regY:0,x:1239.5,y:580.6},0).wait(1).to({x:1239.8,y:571.7},0).wait(1).to({x:1240,y:562.8},0).wait(1).to({x:1239.9,y:554},0).wait(1).to({x:1239.7,y:545.1},0).wait(1).to({x:1239.3,y:536.2},0).wait(1).to({x:1238.6,y:527.4},0).wait(1).to({x:1237.7,y:518.5},0).wait(1).to({x:1236.5,y:509.7},0).wait(1).to({x:1235.1,y:501},0).wait(1).to({x:1233.3,y:492.3},0).wait(1).to({x:1231.3,y:483.6},0).wait(1).to({x:1229,y:475.1},0).wait(1).to({x:1226.3,y:466.6},0).wait(1).to({x:1223.2,y:458.3},0).wait(1).to({x:1219.8,y:450.1},0).wait(1).to({x:1216,y:442.1},0).wait(1).to({x:1211.8,y:434.2},0).wait(1).to({x:1207.3,y:426.6},0).wait(1).to({x:1202.3,y:419.2},0).wait(1).to({x:1197,y:412.2},0).wait(1).to({x:1191.3,y:405.4},0).wait(1).to({x:1185.2,y:398.9},0).wait(1).to({x:1178.8,y:392.8},0).wait(1).to({x:1172,y:387},0).wait(1).to({x:1165,y:381.6},0).wait(1).to({x:1157.7,y:376.5},0).wait(1).to({x:1150.1,y:371.9},0).wait(1).to({x:1142.4,y:367.6},0).wait(1).to({x:1134.4,y:363.6},0).wait(1).to({x:1126.3,y:360},0).wait(1).to({x:1118.1,y:356.8},0).wait(1).to({x:1109.7,y:353.8},0).wait(1).to({x:1101.2,y:351.2},0).wait(1).to({x:1092.6,y:348.8},0).wait(1).to({x:1084,y:346.8},0).wait(1).to({x:1075.3,y:345},0).wait(1).to({x:1066.6,y:343.4},0).wait(1).to({x:1057.8,y:342.1},0).wait(1).to({x:1049,y:341},0).wait(1).to({x:1040.2,y:340.1},0).wait(1).to({x:1031.3,y:339.4},0).wait(1).to({x:1022.5,y:338.8},0).wait(1).to({x:1013.6,y:338.5},0).wait(1).to({x:1004.7,y:338.3},0).wait(1).to({x:995.8},0).wait(1).to({x:987,y:338.4},0).wait(1).to({regY:0.1,y:338.5},0).wait(12).to({x:995.8,y:345.5},0).wait(1).to({regY:0,x:1001.5,y:350.1},0).wait(1).to({x:1007.1,y:355},0).wait(1).to({x:1012.6,y:360},0).wait(1).to({x:1017.9,y:365.2},0).wait(1).to({x:1023,y:370.6},0).wait(1).to({x:1027.8,y:376.3},0).wait(1).to({x:1032.3,y:382.2},0).wait(1).to({x:1036.4,y:388.4},0).wait(1).to({x:1040,y:394.9},0).wait(1).to({x:1042.8,y:401.7},0).wait(1).to({x:1044.6,y:408.9},0).wait(1).to({x:1045.2,y:416.3},0).wait(1).to({x:1044.2,y:423.7},0).wait(1).to({x:1041.7,y:430.6},0).wait(1).to({x:1037.9,y:437},0).wait(1).to({x:1033.1,y:442.6},0).wait(1).to({x:1027.5,y:447.6},0).wait(1).to({x:1021.5,y:451.9},0).wait(1).to({x:1015.2,y:455.8},0).wait(1).to({x:1008.6,y:459.2},0).wait(1).to({x:1001.9,y:462.3},0).wait(1).to({x:995,y:465.1},0).wait(1).to({x:988,y:467.6},0).wait(1).to({x:980.9,y:469.9},0).wait(1).to({x:973.8,y:472},0).wait(1).to({x:966.6,y:474},0).wait(1).to({x:959.4,y:475.8},0).wait(1).to({x:952.2,y:477.4},0).wait(1).to({x:944.9,y:479},0).wait(1).to({x:937.6,y:480.4},0).wait(1).to({x:930.3,y:481.7},0).wait(1).to({x:923,y:482.9},0).wait(1).to({x:915.7,y:484.1},0).wait(1).to({x:908.3,y:485.1},0).wait(1).to({x:901,y:486.1},0).wait(1).to({x:893.6,y:487},0).wait(1).to({x:886.2,y:487.9},0).wait(1).to({x:878.8,y:488.7},0).wait(1).to({x:871.4,y:489.4},0).wait(1).to({x:864,y:490.1},0).wait(1).to({x:856.6,y:490.7},0).wait(1).to({x:849.2,y:491.3},0).wait(1).to({x:841.8,y:491.9},0).wait(1).to({x:834.4,y:492.3},0).wait(1).to({x:827,y:492.8},0).wait(1).to({x:819.6,y:493.2},0).wait(1).to({x:812.2,y:493.6},0).wait(1).to({x:804.8,y:493.9},0).wait(1).to({x:797.3,y:494.3},0).wait(1).to({x:789.9,y:494.5},0).wait(1).to({x:782.5,y:494.8},0).wait(1).to({x:775.1,y:495},0).wait(1).to({x:767.6,y:495.2},0).wait(1).to({x:760.2,y:495.3},0).wait(1).to({x:752.8,y:495.5},0).wait(1).to({x:745.4,y:495.6},0).wait(1).to({x:737.9,y:495.7},0).wait(1).to({x:730.5},0).wait(1).to({x:723.1},0).wait(1).to({x:715.7,y:495.8},0).wait(1).to({x:708.2,y:495.7},0).wait(1).to({x:700.8},0).wait(1).to({x:693.4},0).wait(1).to({x:685.9,y:495.6},0).wait(1).to({x:678.5,y:495.5},0).wait(1).to({x:671.1,y:495.4},0).wait(1).to({x:663.7,y:495.3},0).wait(1).to({x:656.3,y:495.1},0).wait(1).to({x:648.8,y:495},0).wait(1).to({x:641.4,y:494.8},0).wait(1).to({x:634,y:494.6},0).wait(1).to({regY:0.1,x:650,y:494.7},0).wait(13).to({skewY:180},0).wait(1).to({regY:0,x:660.6,y:486.6},0).wait(1).to({x:671.3,y:478.9},0).wait(1).to({x:682.2,y:471.4},0).wait(1).to({x:693.3,y:464.1},0).wait(1).to({x:704.5,y:457},0).wait(1).to({x:715.9,y:450.2},0).wait(1).to({x:727.4,y:443.7},0).wait(1).to({x:739,y:437.4},0).wait(1).to({x:750.8,y:431.4},0).wait(1).to({x:762.8,y:425.6},0).wait(1).to({x:774.8,y:420.1},0).wait(1).to({x:787,y:414.9},0).wait(1).to({x:799.3,y:410},0).wait(1).to({x:811.7,y:405.5},0).wait(1).to({x:824.3,y:401.2},0).wait(1).to({x:836.9,y:397.2},0).wait(1).to({x:849.6,y:393.5},0).wait(1).to({x:862.4,y:390.2},0).wait(1).to({x:875.3,y:387.2},0).wait(1).to({x:888.3,y:384.5},0).wait(1).to({x:901.3,y:382.2},0).wait(1).to({x:914.4,y:380.2},0).wait(1).to({x:927.6,y:378.6},0).wait(1).to({x:940.8,y:377.3},0).wait(1).to({x:954,y:376.3},0).wait(1).to({x:967.2,y:375.7},0).wait(1).to({x:980.4,y:375.4},0).wait(1).to({x:993.7,y:375.5},0).wait(1).to({x:1006.9,y:375.9},0).wait(1).to({x:1020.2,y:376.7},0).wait(1).to({x:1033.3,y:377.8},0).wait(1).to({x:1046.5,y:379.3},0).wait(1).to({x:1059.6,y:381.1},0).wait(1).to({x:1072.7,y:383.2},0).wait(1).to({x:1085.7,y:385.7},0).wait(1).to({x:1098.7,y:388.4},0).wait(1).to({x:1111.5,y:391.5},0).wait(1).to({x:1124.3,y:394.9},0).wait(1).to({x:1137.1,y:398.6},0).wait(1).to({x:1149.7,y:402.6},0).wait(1).to({x:1162.2,y:406.9},0).wait(1).to({x:1174.6,y:411.5},0).wait(1).to({x:1186.9,y:416.4},0).wait(1).to({x:1199.1,y:421.5},0).wait(1).to({x:1211.2,y:427},0).wait(1).to({x:1223.2,y:432.6},0).wait(1).to({x:1235.1,y:438.6},0).to({_off:true},1).wait(165));

	// leftHeliMoving2
	this.instance_5 = new lib.mainLeftHeli();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1235.1,438.7,1,1,0,0,0,0,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3130).to({_off:false},0).wait(1).to({regY:0,y:441.8},0).wait(1).to({x:1235.2,y:445.1},0).wait(1).to({x:1235.3,y:448.4},0).wait(1).to({x:1235.4,y:451.7},0).wait(1).to({y:455},0).wait(1).to({x:1235.5,y:458.2},0).wait(1).to({x:1235.6,y:461.5},0).wait(1).to({x:1235.7,y:464.8},0).wait(1).to({y:468.1},0).wait(1).to({x:1235.8,y:471.4},0).wait(1).to({x:1235.9,y:474.7},0).wait(1).to({x:1236,y:477.9},0).wait(1).to({y:481.2},0).wait(1).to({x:1236.1,y:484.5},0).wait(1).to({x:1236.2,y:487.8},0).wait(1).to({x:1236.3,y:491.1},0).wait(1).to({y:494.4},0).wait(1).to({x:1236.4,y:497.6},0).wait(1).to({x:1236.5,y:500.9},0).wait(1).to({x:1236.6,y:504.2},0).wait(1).to({y:507.5},0).wait(1).to({x:1236.7,y:510.8},0).wait(1).to({x:1236.8,y:514.1},0).wait(1).to({x:1236.9,y:517.3},0).wait(1).to({x:1237,y:520.6},0).wait(1).to({y:523.9},0).wait(1).to({x:1237.1,y:527.2},0).wait(1).to({x:1237.2,y:530.5},0).wait(1).to({x:1237.3,y:533.7},0).wait(1).to({y:537},0).wait(1).to({x:1237.4,y:540.3},0).wait(1).to({x:1237.5,y:543.6},0).wait(1).to({x:1237.6,y:546.9},0).wait(1).to({y:550.2},0).wait(1).to({x:1237.7,y:553.4},0).wait(1).to({x:1237.8,y:556.7},0).wait(1).to({x:1237.9,y:560},0).wait(1).to({y:563.3},0).wait(1).to({x:1238,y:566.6},0).wait(1).to({x:1238.1,y:569.9},0).wait(1).to({x:1238.2,y:573.1},0).wait(1).to({y:576.4},0).wait(1).to({x:1238.3,y:579.7},0).wait(1).to({x:1238.4,y:583},0).wait(1).to({x:1238.5,y:586.3},0).wait(1).to({x:1238.6,y:589.6},0).wait(1).to({regY:0.1,y:589.7},0).to({_off:true},12).wait(106));

	// leftHeli
	this.instance_6 = new lib.Symbol1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1245,546.5,1,1,0,0,0,75,31.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(287).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(12).to({_off:true},180).wait(207).to({_off:false},0).to({_off:true},347).wait(322).to({_off:false},0).to({_off:true},36).wait(326).to({_off:false},0).to({_off:true},323).wait(359).to({_off:false},0).to({_off:true},36).wait(264).to({_off:false},0).to({_off:true},216).wait(264).to({_off:false},0).to({_off:true},105).wait(1));

	// rightHeliMoving
	this.instance_7 = new lib.mainRightHeli();
	this.instance_7.parent = this;
	this.instance_7.setTransform(154,590.1,1,1,0,0,0,-25.7,0.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1029).to({_off:false},0).wait(15).to({regX:-25.6,x:154.3,y:576.4},0).wait(1).to({x:154.7,y:562.8},0).wait(1).to({x:155.3,y:549.1},0).wait(1).to({x:156.3,y:535.4},0).wait(1).to({x:157.5,y:521.8},0).wait(1).to({x:159,y:508.2},0).wait(1).to({x:160.7,y:494.6},0).wait(1).to({x:162.8,y:481.1},0).wait(1).to({x:165.1,y:467.6},0).wait(1).to({x:167.7,y:454.2},0).wait(1).to({x:170.6,y:440.9},0).wait(1).to({x:173.8,y:427.6},0).wait(1).to({x:177.3,y:414.3},0).wait(1).to({x:181.2,y:401.2},0).wait(1).to({x:185.3,y:388.2},0).wait(1).to({x:189.7,y:375.2},0).wait(1).to({x:194.4,y:362.4},0).wait(1).to({x:199.4,y:349.6},0).wait(1).to({x:204.7,y:337},0).wait(1).to({x:210.3,y:324.6},0).wait(1).to({x:216.2,y:312.2},0).wait(1).to({x:222.3,y:300},0).wait(1).to({x:228.8,y:287.9},0).wait(1).to({x:235.5,y:276},0).wait(1).to({x:242.5,y:264.3},0).wait(1).to({x:249.8,y:252.7},0).wait(1).to({x:257.3,y:241.3},0).wait(1).to({x:265.1,y:230},0).wait(1).to({x:273.1,y:218.9},0).wait(1).to({x:281.4,y:208},0).wait(1).to({x:289.9,y:197.3},0).wait(1).to({x:298.6,y:186.8},0).wait(1).to({x:307.5,y:176.4},0).wait(1).to({x:316.7,y:166.2},0).wait(1).to({x:326,y:156.2},0).wait(1).to({x:335.5,y:146.4},0).wait(1).to({x:345.2,y:136.8},0).wait(1).to({x:355.1,y:127.3},0).wait(1).to({x:365.2,y:118},0).wait(1).to({x:375.4,y:108.9},0).wait(1).to({x:385.8,y:100},0).wait(1).to({x:396.3,y:91.3},0).wait(1).to({x:407,y:82.7},0).wait(1).to({x:417.8,y:74.3},0).wait(1).to({x:428.7,y:66.1},0).wait(1).to({regX:-25.7,x:428.6},0).wait(1).to({regX:-25.6,x:428.7,y:66.9},0).wait(1).to({y:67.8},0).wait(1).to({y:68.6},0).wait(1).to({y:69.4},0).wait(1).to({y:70.3},0).wait(1).to({y:71.1},0).wait(1).to({y:71.9},0).wait(1).to({y:72.8},0).wait(1).to({y:73.6},0).wait(1).to({y:74.4},0).wait(1).to({y:75.3},0).wait(1).to({y:76.1},0).wait(1).to({y:76.9},0).wait(1).to({y:77.8},0).wait(1).to({y:78.6},0).wait(1).to({y:79.4},0).wait(1).to({y:80.3},0).wait(1).to({y:81.1},0).wait(1).to({y:81.9},0).wait(1).to({y:82.8},0).wait(1).to({y:83.6},0).wait(1).to({y:84.4},0).wait(1).to({y:85.3},0).wait(1).to({y:86.1},0).wait(1).to({y:86.9},0).wait(1).to({y:87.8},0).wait(1).to({y:88.6},0).wait(1).to({y:89.4},0).wait(1).to({y:90.3},0).wait(1).to({y:91.1},0).wait(1).to({y:91.9},0).wait(1).to({y:92.8},0).wait(1).to({y:93.6},0).wait(1).to({y:94.4},0).wait(1).to({y:95.3},0).wait(1).to({y:96.1},0).wait(1).to({y:96.9},0).wait(1).to({y:97.8},0).wait(1).to({y:98.6},0).wait(1).to({y:99.4},0).wait(1).to({y:100.3},0).wait(1).to({y:101.1},0).wait(1).to({y:101.9},0).wait(1).to({y:102.8},0).wait(1).to({y:103.6},0).wait(1).to({y:104.4},0).wait(1).to({y:105.3},0).wait(1).to({regX:-25.7,x:428.6},0).wait(1).to({regX:-25.6,x:425,y:108.3},0).wait(1).to({x:421.4,y:111.3},0).wait(1).to({x:417.8,y:114.4},0).wait(1).to({x:414.2,y:117.4},0).wait(1).to({x:410.7,y:120.6},0).wait(1).to({x:407.1,y:123.7},0).wait(1).to({x:403.6,y:126.9},0).wait(1).to({x:400.1,y:130.1},0).wait(1).to({x:396.7,y:133.3},0).wait(1).to({x:393.3,y:136.6},0).wait(1).to({x:389.9,y:139.9},0).wait(1).to({x:386.5,y:143.2},0).wait(1).to({x:383.2,y:146.6},0).wait(1).to({x:379.9,y:150},0).wait(1).to({x:376.7,y:153.4},0).wait(1).to({x:373.4,y:156.9},0).wait(1).to({x:370.3,y:160.4},0).wait(1).to({x:367.1,y:164},0).wait(1).to({x:364.1,y:167.6},0).wait(1).to({x:361,y:171.2},0).wait(1).to({x:358,y:174.9},0).wait(1).to({x:355.1,y:178.6},0).wait(1).to({x:352.2,y:182.3},0).wait(1).to({x:349.4,y:186.1},0).wait(1).to({x:346.7,y:190},0).wait(1).to({x:344,y:193.9},0).wait(1).to({x:341.3,y:197.8},0).wait(1).to({x:338.8,y:201.8},0).wait(1).to({x:336.3,y:205.8},0).wait(1).to({x:333.9,y:209.9},0).wait(1).to({x:331.5,y:214},0).wait(1).to({x:329.3,y:218.2},0).wait(1).to({x:327.1,y:222.4},0).wait(1).to({x:325.1,y:226.6},0).wait(1).to({x:323.1,y:230.9},0).wait(1).to({x:321.2,y:235.3},0).wait(1).to({x:319.5,y:239.7},0).wait(1).to({x:317.9,y:244.1},0).wait(1).to({x:316.4,y:248.6},0).wait(1).to({x:315,y:253.1},0).wait(1).to({x:313.7,y:257.7},0).wait(1).to({x:312.6,y:262.3},0).wait(1).to({x:311.6,y:266.9},0).wait(1).to({x:310.7,y:271.6},0).wait(1).to({x:310,y:276.2},0).wait(1).to({x:309.5,y:280.9},0).wait(1).to({x:309.1,y:285.7},0).wait(1).to({x:308.9,y:290.4},0).wait(1).to({x:308.8,y:295.1},0).wait(1).to({x:308.9,y:299.8},0).wait(1).to({x:309.1,y:304.6},0).wait(1).to({x:309.5,y:309.3},0).wait(1).to({x:310,y:314},0).wait(1).to({x:310.8,y:318.7},0).wait(1).to({x:311.6,y:323.3},0).wait(1).to({x:312.6,y:327.9},0).wait(1).to({x:313.8,y:332.5},0).wait(1).to({x:315.1,y:337.1},0).wait(1).to({x:316.6,y:341.6},0).wait(1).to({x:318.2,y:346},0).wait(1).to({x:319.9,y:350.4},0).wait(1).to({x:321.7,y:354.8},0).wait(1).to({x:323.7,y:359.1},0).wait(1).to({x:325.8,y:363.4},0).wait(1).to({x:327.9,y:367.5},0).wait(1).to({x:330.2,y:371.7},0).wait(1).to({x:332.6,y:375.8},0).wait(1).to({x:335.1,y:379.8},0).wait(1).to({x:337.7,y:383.8},0).wait(1).to({x:340.3,y:387.7},0).wait(1).to({x:343.1,y:391.5},0).wait(1).to({x:345.9,y:395.3},0).wait(1).to({x:348.8,y:399.1},0).wait(1).to({x:351.7,y:402.8},0).wait(1).to({x:354.8,y:406.4},0).wait(1).to({x:357.8,y:410},0).wait(1).to({x:361,y:413.6},0).wait(1).to({x:364.2,y:417},0).wait(1).to({x:367.4,y:420.5},0).wait(1).to({x:370.7,y:423.9},0).wait(1).to({x:374.1,y:427.2},0).wait(1).to({x:377.5,y:430.5},0).wait(1).to({x:380.9,y:433.8},0).wait(1).to({x:384.4,y:437},0).wait(1).to({x:387.9,y:440.1},0).wait(1).to({x:391.5,y:443.3},0).wait(1).to({x:395.1,y:446.3},0).wait(1).to({x:398.7,y:449.4},0).wait(1).to({x:402.3,y:452.4},0).wait(1).to({x:406,y:455.4},0).wait(1).to({x:409.7,y:458.3},0).wait(1).to({x:413.5,y:461.2},0).wait(1).to({x:417.2,y:464.1},0).wait(1).to({x:421,y:466.9},0).wait(1).to({x:424.9,y:469.7},0).wait(1).to({x:428.7,y:472.5},0).wait(1).to({regX:-25.7,x:428.6},0).wait(1).to({regX:-25.6,x:426,y:470.2},0).wait(1).to({x:423.2,y:467.9},0).wait(1).to({x:420.4,y:465.7},0).wait(1).to({x:417.6,y:463.5},0).wait(1).to({x:414.8,y:461.4},0).wait(1).to({x:411.9,y:459.3},0).wait(1).to({x:409,y:457.2},0).wait(1).to({x:406.1,y:455.2},0).wait(1).to({x:403.2,y:453.2},0).wait(1).to({x:400.2,y:451.3},0).wait(1).to({x:397.2,y:449.4},0).wait(1).to({x:394.2,y:447.5},0).wait(1).to({x:391.2,y:445.7},0).wait(1).to({x:388.1,y:443.9},0).wait(1).to({x:385,y:442.1},0).wait(1).to({x:381.9,y:440.4},0).wait(1).to({x:378.7,y:438.8},0).wait(1).to({x:375.6,y:437.1},0).wait(1).to({x:372.4,y:435.5},0).wait(1).to({x:369.2,y:434},0).wait(1).to({x:366,y:432.5},0).wait(1).to({x:362.8,y:431},0).wait(1).to({x:359.5,y:429.6},0).wait(1).to({x:356.2,y:428.2},0).wait(1).to({x:352.9,y:426.9},0).wait(1).to({x:349.6,y:425.6},0).wait(1).to({x:346.3,y:424.3},0).wait(1).to({x:343,y:423.1},0).wait(1).to({x:339.6,y:421.9},0).wait(1).to({x:336.3,y:420.8},0).wait(1).to({x:332.9,y:419.7},0).wait(1).to({x:329.5,y:418.7},0).wait(1).to({x:326.1,y:417.6},0).wait(1).to({x:322.7,y:416.7},0).wait(1).to({x:319.2,y:415.7},0).wait(1).to({x:315.8,y:414.8},0).wait(1).to({x:312.4,y:414},0).wait(1).to({x:308.9,y:413.2},0).wait(1).to({x:305.4,y:412.4},0).wait(1).to({x:302,y:411.6},0).wait(1).to({x:298.5,y:410.9},0).wait(1).to({x:295,y:410.3},0).wait(1).to({x:291.5,y:409.6},0).wait(1).to({x:288,y:409},0).wait(1).to({x:284.5,y:408.5},0).wait(1).to({x:281,y:408},0).wait(1).to({x:277.5,y:407.5},0).wait(1).to({x:273.9,y:407},0).wait(1).to({x:270.4,y:406.6},0).wait(1).to({x:266.9,y:406.2},0).wait(1).to({x:263.3,y:405.9},0).wait(1).to({x:259.8,y:405.6},0).wait(1).to({x:256.3,y:405.3},0).wait(1).to({x:252.7,y:405},0).wait(1).to({x:249.2,y:404.8},0).wait(1).to({x:245.6,y:404.6},0).wait(1).to({x:242.1,y:404.5},0).wait(1).to({x:238.5,y:404.3},0).wait(1).to({x:235},0).wait(1).to({x:231.4,y:404.2},0).wait(1).to({x:227.9},0).wait(1).to({x:224.3},0).wait(1).to({x:220.8},0).wait(1).to({x:217.2},0).wait(1).to({x:213.7,y:404.3},0).wait(1).to({x:210.1,y:404.4},0).wait(1).to({x:206.6,y:404.6},0).wait(1).to({x:203,y:404.8},0).wait(1).to({x:199.5,y:404.9},0).wait(1).to({x:195.9,y:405.2},0).wait(1).to({x:192.4,y:405.4},0).wait(1).to({x:188.8,y:405.7},0).wait(1).to({x:185.3,y:406},0).wait(1).to({x:181.8,y:406.3},0).wait(1).to({x:178.2,y:406.7},0).wait(1).to({x:174.7,y:407},0).wait(1).to({x:171.2,y:407.4},0).wait(1).to({x:167.6,y:407.8},0).wait(1).to({x:164.1,y:408.3},0).wait(1).to({x:160.6,y:408.8},0).wait(1).to({x:157.1,y:409.2},0).wait(1).to({x:153.6,y:409.8},0).wait(1).to({regX:-25.7,x:153.5},0).wait(1).to({regX:-25.6,x:153.6,y:413.6},0).wait(1).to({y:417.4},0).wait(1).to({y:421.2},0).wait(1).to({y:425},0).wait(1).to({y:428.8},0).wait(1).to({y:432.6},0).wait(1).to({y:436.4},0).wait(1).to({y:440.2},0).wait(1).to({y:444},0).wait(1).to({y:447.8},0).wait(1).to({y:451.6},0).wait(1).to({y:455.4},0).wait(1).to({y:459.3},0).wait(1).to({y:463.1},0).wait(1).to({y:466.9},0).wait(1).to({y:470.7},0).wait(1).to({y:474.5},0).wait(1).to({y:478.3},0).wait(1).to({y:482.1},0).wait(1).to({y:485.9},0).wait(1).to({y:489.7},0).wait(1).to({y:493.5},0).wait(1).to({y:497.3},0).wait(1).to({y:501.2},0).wait(1).to({y:505},0).wait(1).to({y:508.8},0).wait(1).to({y:512.6},0).wait(1).to({y:516.4},0).wait(1).to({y:520.2},0).wait(1).to({y:524},0).wait(1).to({y:527.8},0).wait(1).to({y:531.6},0).wait(1).to({y:535.4},0).wait(1).to({y:539.2},0).wait(1).to({y:543},0).wait(1).to({y:546.9},0).wait(1).to({y:550.7},0).wait(1).to({y:554.5},0).wait(1).to({y:558.3},0).wait(1).to({y:562.1},0).wait(1).to({y:565.9},0).wait(1).to({y:569.7},0).wait(1).to({y:573.5},0).wait(1).to({y:577.3},0).wait(1).to({y:581.1},0).wait(1).to({y:584.9},0).wait(1).to({y:588.8},0).to({_off:true},1).wait(685).to({_off:false,regX:-25.7,x:153.5},0).wait(12).to({regX:-25.6,x:153.3,y:578.4},0).wait(1).to({y:568},0).wait(1).to({x:153.5,y:557.6},0).wait(1).to({x:153.9,y:547.2},0).wait(1).to({x:154.6,y:536.9},0).wait(1).to({x:155.6,y:526.5},0).wait(1).to({x:156.8,y:516.2},0).wait(1).to({x:158.4,y:506},0).wait(1).to({x:160.2,y:495.7},0).wait(1).to({x:162.3,y:485.6},0).wait(1).to({x:164.8,y:475.5},0).wait(1).to({x:167.5,y:465.5},0).wait(1).to({x:170.6,y:455.5},0).wait(1).to({x:174,y:445.7},0).wait(1).to({x:177.7,y:436},0).wait(1).to({x:181.8,y:426.5},0).wait(1).to({x:186.2,y:417.1},0).wait(1).to({x:191,y:407.9},0).wait(1).to({x:196.1,y:398.8},0).wait(1).to({x:201.5,y:389.9},0).wait(1).to({x:207.2,y:381.3},0).wait(1).to({x:213.2,y:372.8},0).wait(1).to({x:219.6,y:364.6},0).wait(1).to({x:226.2,y:356.6},0).wait(1).to({x:233.1,y:348.8},0).wait(1).to({x:240.2,y:341.3},0).wait(1).to({x:247.7,y:334},0).wait(1).to({x:255.3,y:327},0).wait(1).to({x:263.2,y:320.2},0).wait(1).to({x:271.3,y:313.7},0).wait(1).to({x:279.5,y:307.4},0).wait(1).to({x:288,y:301.4},0).wait(1).to({x:296.6,y:295.6},0).wait(1).to({x:305.4,y:290},0).wait(1).to({x:314.3,y:284.7},0).wait(1).to({x:323.3,y:279.6},0).wait(1).to({x:332.5,y:274.7},0).wait(1).to({x:341.7,y:270},0).wait(1).to({x:351.1,y:265.5},0).wait(1).to({x:360.6,y:261.3},0).wait(1).to({x:370.1,y:257.2},0).wait(1).to({x:379.7,y:253.3},0).wait(1).to({x:389.5,y:249.6},0).wait(1).to({x:399.2,y:246.1},0).wait(1).to({x:409,y:242.7},0).wait(1).to({x:418.9,y:239.5},0).wait(1).to({x:428.9,y:236.5},0).wait(1).to({regX:-25.7,x:428.8},0).wait(1).to({regX:-25.6,x:428.9,y:237.2},0).wait(1).to({y:238},0).wait(1).to({y:238.8},0).wait(1).to({y:239.6},0).wait(1).to({y:240.3},0).wait(1).to({y:241.1},0).wait(1).to({y:241.9},0).wait(1).to({y:242.7},0).wait(1).to({y:243.4},0).wait(1).to({y:244.2},0).wait(1).to({y:245},0).wait(1).to({y:245.8},0).wait(1).to({y:246.5},0).wait(1).to({y:247.3},0).wait(1).to({y:248.1},0).wait(1).to({y:248.9},0).wait(1).to({y:249.7},0).wait(1).to({y:250.4},0).wait(1).to({y:251.2},0).wait(1).to({y:252},0).wait(1).to({y:252.8},0).wait(1).to({y:253.5},0).wait(1).to({y:254.3},0).wait(1).to({y:255.1},0).wait(1).to({y:255.9},0).wait(1).to({y:256.6},0).wait(1).to({y:257.4},0).wait(1).to({y:258.2},0).wait(1).to({y:259},0).wait(1).to({y:259.7},0).wait(1).to({y:260.5},0).wait(1).to({y:261.3},0).wait(1).to({y:262.1},0).wait(1).to({y:262.9},0).wait(1).to({regX:-25.7,x:428.8,y:262.8},0).wait(14).to({regX:-25.6,x:425.2,y:264.8},0).wait(1).to({x:421.5,y:266.9},0).wait(1).to({x:417.8,y:269},0).wait(1).to({x:414.2,y:271.1},0).wait(1).to({x:410.5,y:273.2},0).wait(1).to({x:406.9,y:275.4},0).wait(1).to({x:403.3,y:277.6},0).wait(1).to({x:399.7,y:279.8},0).wait(1).to({x:396.1,y:282},0).wait(1).to({x:392.6,y:284.3},0).wait(1).to({x:389,y:286.6},0).wait(1).to({x:385.5,y:288.9},0).wait(1).to({x:382,y:291.3},0).wait(1).to({x:378.6,y:293.7},0).wait(1).to({x:375.1,y:296.1},0).wait(1).to({x:371.7,y:298.6},0).wait(1).to({x:368.3,y:301.1},0).wait(1).to({x:364.9,y:303.7},0).wait(1).to({x:361.6,y:306.3},0).wait(1).to({x:358.3,y:308.9},0).wait(1).to({x:355.1,y:311.6},0).wait(1).to({x:351.8,y:314.3},0).wait(1).to({x:348.7,y:317.1},0).wait(1).to({x:345.5,y:319.9},0).wait(1).to({x:342.5,y:322.8},0).wait(1).to({x:339.5,y:325.8},0).wait(1).to({x:336.5,y:328.8},0).wait(1).to({x:333.7,y:331.9},0).wait(1).to({x:330.9,y:335},0).wait(1).to({x:328.2,y:338.3},0).wait(1).to({x:325.6,y:341.6},0).wait(1).to({x:323.1,y:345},0).wait(1).to({x:320.7,y:348.5},0).wait(1).to({x:318.5,y:352.1},0).wait(1).to({x:316.4,y:355.7},0).wait(1).to({x:314.5,y:359.5},0).wait(1).to({x:312.8,y:363.3},0).wait(1).to({x:311.3,y:367.3},0).wait(1).to({x:310,y:371.3},0).wait(1).to({x:309,y:375.4},0).wait(1).to({x:308.3,y:379.6},0).wait(1).to({x:307.9,y:383.8},0).wait(1).to({x:307.8,y:388},0).wait(1).to({x:308,y:392.2},0).wait(1).to({x:308.6,y:396.4},0).wait(1).to({x:309.4,y:400.5},0).wait(1).to({x:310.6,y:404.5},0).wait(1).to({x:312.1,y:408.5},0).wait(1).to({x:313.8,y:412.3},0).wait(1).to({x:315.7,y:416.1},0).wait(1).to({x:317.9,y:419.7},0).wait(1).to({x:320.3,y:423.2},0).wait(1).to({x:322.8,y:426.6},0).wait(1).to({x:325.5,y:429.8},0).wait(1).to({x:328.3,y:433},0).wait(1).to({x:331.2,y:436},0).wait(1).to({x:334.2,y:439},0).wait(1).to({x:337.3,y:441.8},0).wait(1).to({x:340.5,y:444.6},0).wait(1).to({x:343.8,y:447.2},0).wait(1).to({x:347.1,y:449.8},0).wait(1).to({x:350.5,y:452.3},0).wait(1).to({x:353.9,y:454.8},0).wait(1).to({x:357.4,y:457.1},0).wait(1).to({x:360.9,y:459.4},0).wait(1).to({x:364.5,y:461.7},0).wait(1).to({x:368.1,y:463.9},0).wait(1).to({x:371.7,y:466},0).wait(1).to({x:375.4,y:468.1},0).wait(1).to({x:379.1,y:470.2},0).wait(1).to({x:382.8,y:472.2},0).wait(1).to({x:386.6,y:474.1},0).wait(1).to({x:390.3,y:476},0).wait(1).to({x:394.1,y:477.9},0).wait(1).to({x:397.9,y:479.7},0).wait(1).to({x:401.7,y:481.5},0).wait(1).to({x:405.6,y:483.3},0).wait(1).to({x:409.4,y:485},0).wait(1).to({x:413.3,y:486.7},0).wait(1).to({x:417.1,y:488.4},0).wait(1).to({x:421,y:490},0).wait(1).to({x:424.9,y:491.6},0).wait(1).to({x:428.9,y:493.2},0).wait(24).to({regX:-25.7,x:428.8},0).wait(1).to({regX:-25.6,x:428.9,y:489.3},0).wait(1).to({y:485.4},0).wait(1).to({y:481.5},0).wait(1).to({y:477.6},0).wait(1).to({y:473.7},0).wait(1).to({y:469.8},0).wait(1).to({y:465.9},0).wait(1).to({y:462},0).wait(1).to({y:458.1},0).wait(1).to({y:454.2},0).wait(1).to({y:450.3},0).wait(1).to({y:446.4},0).wait(1).to({y:442.5},0).wait(1).to({y:438.6},0).wait(1).to({y:434.7},0).wait(1).to({y:430.8},0).wait(1).to({y:426.9},0).wait(1).to({y:423},0).wait(1).to({y:419.1},0).wait(1).to({y:415.2},0).wait(1).to({y:411.3},0).wait(1).to({y:407.4},0).wait(1).to({y:403.5},0).wait(1).to({y:399.6},0).wait(13).to({regX:-8.1,regY:0,skewY:180},0).wait(1).to({regX:-25.6,regY:0.4,x:442.8,y:396.3},0).wait(1).to({x:439.2,y:392.7},0).wait(1).to({x:435.5,y:389.2},0).wait(1).to({x:431.8,y:385.7},0).wait(1).to({x:428,y:382.3},0).wait(1).to({x:424.2,y:378.9},0).wait(1).to({x:420.3,y:375.6},0).wait(1).to({x:416.3,y:372.4},0).wait(1).to({x:412.3,y:369.2},0).wait(1).to({x:408.3,y:366.1},0).wait(1).to({x:404.1,y:363.1},0).wait(1).to({x:400,y:360.2},0).wait(1).to({x:395.7,y:357.4},0).wait(1).to({x:391.4,y:354.7},0).wait(1).to({x:387,y:352.1},0).wait(1).to({x:382.6,y:349.6},0).wait(1).to({x:378,y:347.2},0).wait(1).to({x:373.5,y:345},0).wait(1).to({x:368.8,y:342.9},0).wait(1).to({x:364.1,y:341},0).wait(1).to({x:359.3,y:339.2},0).wait(1).to({x:354.5,y:337.5},0).wait(1).to({x:349.6,y:336.1},0).wait(1).to({x:344.7,y:334.8},0).wait(1).to({x:339.7,y:333.8},0).wait(1).to({x:334.7,y:332.9},0).wait(1).to({x:329.6,y:332.2},0).wait(1).to({x:324.5,y:331.7},0).wait(1).to({x:319.4,y:331.5},0).wait(1).to({x:314.3,y:331.4},0).wait(1).to({x:309.2,y:331.6},0).wait(1).to({x:304.2,y:332},0).wait(1).to({x:299.1,y:332.6},0).wait(1).to({x:294.1,y:333.4},0).wait(1).to({x:289.1,y:334.4},0).wait(1).to({x:284.1,y:335.7},0).wait(1).to({x:279.2,y:337.1},0).wait(1).to({x:274.4,y:338.6},0).wait(1).to({x:269.6,y:340.4},0).wait(1).to({x:264.9,y:342.3},0).wait(1).to({x:260.2,y:344.4},0).wait(1).to({x:255.6,y:346.6},0).wait(1).to({x:251.1,y:349},0).wait(1).to({x:246.7,y:351.5},0).wait(1).to({x:242.3,y:354.1},0).wait(1).to({x:238,y:356.8},0).wait(1).to({x:233.8,y:359.6},0).wait(1).to({x:229.6,y:362.6},0).wait(1).to({x:225.5,y:365.6},0).wait(1).to({x:221.4,y:368.7},0).wait(1).to({x:217.5,y:371.9},0).wait(1).to({x:213.6,y:375.2},0).wait(1).to({x:209.7,y:378.6},0).wait(1).to({x:205.9,y:382},0).wait(1).to({x:202.2,y:385.5},0).wait(1).to({x:198.5,y:389},0).wait(1).to({x:194.9,y:392.6},0).wait(1).to({x:191.4,y:396.2},0).wait(1).to({x:187.8,y:400},0).wait(1).to({regX:0,regY:0,skewY:0,x:170.4,y:399.6},0).wait(1).to({regX:-25.6,regY:0.4,x:145,y:404},0).wait(1).to({x:145.2,y:408.1},0).wait(1).to({x:145.4,y:412.1},0).wait(1).to({x:145.6,y:416.2},0).wait(1).to({x:145.8,y:420.2},0).wait(1).to({x:145.9,y:424.3},0).wait(1).to({x:146.1,y:428.3},0).wait(1).to({x:146.3,y:432.3},0).wait(1).to({x:146.5,y:436.4},0).wait(1).to({x:146.7,y:440.4},0).wait(1).to({x:146.9,y:444.5},0).wait(1).to({x:147.1,y:448.5},0).wait(1).to({x:147.3,y:452.6},0).wait(1).to({x:147.5,y:456.6},0).wait(1).to({x:147.7,y:460.6},0).wait(1).to({x:147.9,y:464.7},0).wait(1).to({x:148.1,y:468.7},0).wait(1).to({x:148.2,y:472.8},0).wait(1).to({x:148.4,y:476.8},0).wait(1).to({x:148.6,y:480.9},0).wait(1).to({x:148.8,y:484.9},0).wait(1).to({x:149,y:488.9},0).wait(1).to({x:149.2,y:493},0).wait(1).to({x:149.4,y:497},0).wait(1).to({x:149.6,y:501.1},0).wait(1).to({x:149.8,y:505.1},0).wait(1).to({x:150,y:509.1},0).wait(1).to({x:150.2,y:513.2},0).wait(1).to({x:150.4,y:517.2},0).wait(1).to({x:150.5,y:521.3},0).wait(1).to({x:150.7,y:525.3},0).wait(1).to({x:150.9,y:529.4},0).wait(1).to({x:151.1,y:533.4},0).wait(1).to({x:151.3,y:537.4},0).wait(1).to({x:151.5,y:541.5},0).wait(1).to({x:151.7,y:545.5},0).wait(1).to({x:151.9,y:549.6},0).wait(1).to({x:152.1,y:553.6},0).wait(1).to({x:152.3,y:557.7},0).wait(1).to({x:152.5,y:561.7},0).wait(1).to({x:152.7,y:565.7},0).wait(1).to({x:152.8,y:569.8},0).wait(1).to({x:153,y:573.8},0).wait(1).to({x:153.2,y:577.9},0).wait(1).to({x:153.4,y:581.9},0).wait(1).to({x:153.6,y:586},0).wait(1).to({x:153.8,y:590},0).to({_off:true},1).wait(36).to({_off:false,regX:0,regY:0,x:179.5,y:589.7},0).wait(13).to({regX:-25.6,regY:0.4,x:160,y:586.1},0).wait(1).to({x:166.2,y:582.1},0).wait(1).to({x:172.4,y:578.2},0).wait(1).to({x:178.5,y:574.2},0).wait(1).to({x:184.7,y:570.2},0).wait(1).to({x:190.9,y:566.3},0).wait(1).to({x:197.1,y:562.3},0).wait(1).to({x:203.2,y:558.3},0).wait(1).to({x:209.4,y:554.4},0).wait(1).to({x:215.6,y:550.4},0).wait(1).to({x:221.7,y:546.4},0).wait(1).to({x:227.9,y:542.5},0).wait(1).to({x:234.1,y:538.5},0).wait(1).to({x:240.3,y:534.6},0).wait(1).to({x:246.4,y:530.6},0).wait(1).to({x:252.6,y:526.6},0).wait(1).to({x:258.8,y:522.7},0).wait(1).to({x:264.9,y:518.7},0).wait(1).to({x:271.1,y:514.7},0).wait(1).to({x:277.3,y:510.8},0).wait(1).to({x:283.4,y:506.8},0).wait(1).to({x:289.6,y:502.8},0).wait(1).to({x:295.8,y:498.9},0).wait(1).to({x:302,y:494.9},0).wait(1).to({x:308.1,y:490.9},0).wait(1).to({x:314.3,y:487},0).wait(1).to({x:320.5,y:483},0).wait(1).to({x:326.7,y:479.1},0).wait(1).to({x:332.8,y:475.1},0).wait(1).to({x:339,y:471.1},0).wait(1).to({x:345.2,y:467.2},0).wait(1).to({x:351.3,y:463.2},0).wait(1).to({x:357.5,y:459.2},0).wait(1).to({x:363.7,y:455.3},0).wait(1).to({x:369.9,y:451.3},0).wait(1).to({regX:0,regY:0,x:395.5,y:451},0).wait(49).to({regX:-25.6,regY:0.4,x:377,y:451.4},0).wait(1).to({x:384.2},0).wait(1).to({x:391.3},0).wait(1).to({x:398.4},0).wait(1).to({x:405.5},0).wait(1).to({x:412.7},0).wait(1).to({x:419.8},0).wait(1).to({x:426.9},0).wait(1).to({x:434.1},0).wait(1).to({x:441.2},0).wait(1).to({x:448.3},0).wait(1).to({x:455.4},0).wait(1).to({x:462.6},0).wait(1).to({x:469.7},0).wait(1).to({x:476.8},0).wait(1).to({x:484},0).wait(1).to({x:491.1},0).wait(1).to({x:498.2},0).wait(1).to({x:505.3},0).wait(1).to({x:512.5},0).wait(1).to({x:519.6},0).wait(1).to({x:526.7},0).wait(1).to({x:533.9},0).wait(1).to({x:541},0).wait(1).to({x:548.1},0).wait(1).to({x:555.2},0).wait(1).to({x:562.4},0).wait(1).to({x:569.5},0).wait(1).to({x:576.6},0).wait(1).to({x:583.8},0).wait(1).to({x:590.9},0).wait(1).to({x:598},0).wait(1).to({x:605.1},0).wait(1).to({x:612.3},0).wait(1).to({x:619.4},0).wait(1).to({regX:0,regY:0,x:645.1,y:451.1},0).wait(13).to({regX:-25.6,regY:0.4,x:614.3,y:449.6},0).wait(1).to({x:609.1,y:447.7},0).wait(1).to({x:604,y:445.7},0).wait(1).to({x:598.9,y:443.7},0).wait(1).to({x:593.7,y:441.7},0).wait(1).to({x:588.6,y:439.7},0).wait(1).to({x:583.6,y:437.6},0).wait(1).to({x:578.5,y:435.4},0).wait(1).to({x:573.5,y:433.2},0).wait(1).to({x:568.5,y:430.9},0).wait(1).to({x:563.5,y:428.6},0).wait(1).to({x:558.6,y:426.1},0).wait(1).to({x:553.7,y:423.6},0).wait(1).to({x:548.8,y:420.9},0).wait(1).to({x:544.1,y:418.1},0).wait(1).to({x:539.4,y:415.2},0).wait(1).to({x:534.9,y:412},0).wait(1).to({x:530.6,y:408.7},0).wait(1).to({x:526.5,y:405},0).wait(1).to({x:522.8,y:401},0).wait(1).to({x:519.6,y:396.5},0).wait(1).to({x:517.3,y:391.5},0).wait(1).to({x:516.2,y:386.2},0).wait(1).to({x:516.6,y:380.7},0).wait(1).to({x:518.3,y:375.5},0).wait(1).to({x:521,y:370.7},0).wait(1).to({x:524.4,y:366.4},0).wait(1).to({x:528.2,y:362.4},0).wait(1).to({x:532.3,y:358.8},0).wait(1).to({x:536.6,y:355.3},0).wait(1).to({x:541.1,y:352.1},0).wait(1).to({x:545.6,y:349},0).wait(1).to({x:550.3,y:346.1},0).wait(1).to({x:555,y:343.3},0).wait(1).to({x:559.8,y:340.5},0).wait(1).to({x:564.6,y:337.9},0).wait(1).to({x:569.5,y:335.3},0).wait(1).to({x:574.4,y:332.8},0).wait(1).to({x:579.3,y:330.4},0).wait(1).to({x:584.3,y:328},0).wait(1).to({x:589.2,y:325.7},0).wait(1).to({x:594.2,y:323.4},0).wait(1).to({x:599.2,y:321.2},0).wait(1).to({x:604.3,y:318.9},0).wait(1).to({x:609.3,y:316.7},0).wait(1).to({x:614.4,y:314.6},0).wait(1).to({x:619.5,y:312.5},0).wait(1).to({regX:0,regY:0,skewY:180,x:615.1,y:318},0).wait(1).to({regX:-25.6,regY:0.4,x:630.1,y:316},0).wait(1).to({x:619.6,y:313.8},0).wait(1).to({x:608.9,y:311.7},0).wait(1).to({x:598.3,y:309.7},0).wait(1).to({x:587.7,y:307.9},0).wait(1).to({x:577,y:306.2},0).wait(1).to({x:566.2,y:304.7},0).wait(1).to({x:555.5,y:303.4},0).wait(1).to({x:544.7,y:302.2},0).wait(1).to({x:534,y:301.2},0).wait(1).to({x:523.2,y:300.4},0).wait(1).to({x:512.4,y:299.8},0).wait(1).to({x:501.6,y:299.4},0).wait(1).to({x:490.8,y:299.1},0).wait(1).to({x:479.9},0).wait(1).to({x:469.1,y:299.2},0).wait(1).to({x:458.3,y:299.6},0).wait(1).to({x:447.5,y:300.2},0).wait(1).to({x:436.7,y:301},0).wait(1).to({x:425.9,y:302.1},0).wait(1).to({x:415.2,y:303.3},0).wait(1).to({x:404.5,y:304.8},0).wait(1).to({x:393.8,y:306.6},0).wait(1).to({x:383.2,y:308.6},0).wait(1).to({x:372.6,y:310.8},0).wait(1).to({x:362.1,y:313.3},0).wait(1).to({x:351.6,y:316},0).wait(1).to({x:341.2,y:319},0).wait(1).to({x:330.8,y:322.2},0).wait(1).to({x:320.6,y:325.7},0).wait(1).to({x:310.4,y:329.4},0).wait(1).to({x:300.4,y:333.4},0).wait(1).to({x:290.4,y:337.7},0).wait(1).to({x:280.6,y:342.1},0).wait(1).to({x:270.9,y:346.9},0).wait(1).to({x:261.2,y:351.8},0).wait(1).to({x:251.8,y:357},0).wait(1).to({x:242.4,y:362.5},0).wait(1).to({x:233.2,y:368.1},0).wait(1).to({x:224.1,y:374},0).wait(1).to({x:215.2,y:380.1},0).wait(1).to({x:206.4,y:386.5},0).wait(1).to({x:197.8,y:393},0).wait(1).to({x:189.3,y:399.7},0).wait(1).to({x:180.9,y:406.6},0).wait(1).to({x:172.8,y:413.7},0).wait(1).to({x:164.8,y:421},0).wait(1).to({regX:0,regY:0,skewY:0,x:182.3,y:420.6},0).wait(1).to({regX:-25.6,regY:0.4,x:156.7,y:424.6},0).wait(1).to({y:428.2},0).wait(1).to({y:431.8},0).wait(1).to({y:435.4},0).wait(1).to({y:439},0).wait(1).to({y:442.6},0).wait(1).to({y:446.2},0).wait(1).to({y:449.8},0).wait(1).to({y:453.4},0).wait(1).to({y:457},0).wait(1).to({y:460.6},0).wait(1).to({y:464.1},0).wait(1).to({y:467.7},0).wait(1).to({y:471.3},0).wait(1).to({y:474.9},0).wait(1).to({y:478.5},0).wait(1).to({y:482.1},0).wait(1).to({y:485.7},0).wait(1).to({y:489.3},0).wait(1).to({y:492.9},0).wait(1).to({y:496.5},0).wait(1).to({y:500.1},0).wait(1).to({y:503.7},0).wait(1).to({y:507.3},0).wait(1).to({y:510.9},0).wait(1).to({y:514.5},0).wait(1).to({y:518.1},0).wait(1).to({y:521.7},0).wait(1).to({y:525.3},0).wait(1).to({y:528.9},0).wait(1).to({y:532.5},0).wait(1).to({y:536.1},0).wait(1).to({y:539.7},0).wait(1).to({y:543.3},0).wait(1).to({y:546.9},0).wait(1).to({y:550.4},0).wait(1).to({y:554},0).wait(1).to({y:557.6},0).wait(1).to({y:561.2},0).wait(1).to({y:564.8},0).wait(1).to({y:568.4},0).wait(1).to({y:572},0).wait(1).to({y:575.6},0).wait(1).to({y:579.2},0).wait(1).to({y:582.8},0).wait(1).to({y:586.4},0).wait(1).to({y:590},0).to({_off:true},1).wait(562));

	// rightHeliMoving2
	this.instance_8 = new lib.mainRightHeli();
	this.instance_8.parent = this;
	this.instance_8.setTransform(182.3,589.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2925).to({_off:false},0).wait(13).to({regX:-25.6,regY:0.4,x:157.1,y:581.6},0).wait(1).to({x:157.7,y:573.2},0).wait(1).to({x:158.6,y:564.9},0).wait(1).to({x:159.8,y:556.5},0).wait(1).to({x:161.2,y:548.2},0).wait(1).to({x:162.9,y:540},0).wait(1).to({x:164.9,y:531.8},0).wait(1).to({x:167.3,y:523.7},0).wait(1).to({x:169.9,y:515.7},0).wait(1).to({x:172.9,y:507.8},0).wait(1).to({x:176.2,y:500.1},0).wait(1).to({x:179.9,y:492.5},0).wait(1).to({x:183.8,y:485},0).wait(1).to({x:188.2,y:477.8},0).wait(1).to({x:192.8,y:470.7},0).wait(1).to({x:197.7,y:463.9},0).wait(1).to({x:202.9,y:457.3},0).wait(1).to({x:208.4,y:450.9},0).wait(1).to({x:214.2,y:444.8},0).wait(1).to({x:220.3,y:438.9},0).wait(1).to({x:226.6,y:433.3},0).wait(1).to({x:233.1,y:427.9},0).wait(1).to({x:239.8,y:422.8},0).wait(1).to({x:246.6,y:418},0).wait(1).to({x:253.7,y:413.4},0).wait(1).to({x:260.9,y:409},0).wait(1).to({x:268.2,y:404.9},0).wait(1).to({x:275.7,y:401},0).wait(1).to({x:283.3,y:397.3},0).wait(1).to({x:291,y:393.8},0).wait(1).to({x:298.7,y:390.5},0).wait(1).to({x:306.6,y:387.5},0).wait(1).to({x:314.5,y:384.6},0).wait(1).to({x:322.5,y:381.9},0).wait(1).to({x:330.5,y:379.4},0).wait(1).to({x:338.6,y:377},0).wait(1).to({x:346.8,y:374.8},0).wait(1).to({x:354.9,y:372.7},0).wait(1).to({x:363.1,y:370.8},0).wait(1).to({x:371.4,y:369.1},0).wait(1).to({x:379.6,y:367.4},0).wait(1).to({x:387.9,y:365.9},0).wait(1).to({x:396.2,y:364.5},0).wait(1).to({x:404.6,y:363.2},0).wait(1).to({x:412.9,y:362.1},0).wait(1).to({x:421.3,y:361},0).wait(1).to({x:429.7,y:360.1},0).wait(1).to({regX:0,regY:0,x:455.3,y:359.7},0).wait(12).to({y:359.8},0).wait(1).to({regX:-25.6,regY:0.4,x:426,y:361.6},0).wait(1).to({x:422.2,y:363},0).wait(1).to({x:418.5,y:364.5},0).wait(1).to({x:414.8,y:366},0).wait(1).to({x:411.1,y:367.5},0).wait(1).to({x:407.4,y:369.1},0).wait(1).to({x:403.7,y:370.6},0).wait(1).to({x:400.1,y:372.2},0).wait(1).to({x:396.4,y:373.8},0).wait(1).to({x:392.8,y:375.5},0).wait(1).to({x:389.2,y:377.2},0).wait(1).to({x:385.6,y:378.9},0).wait(1).to({x:382,y:380.7},0).wait(1).to({x:378.4,y:382.5},0).wait(1).to({x:374.9,y:384.3},0).wait(1).to({x:371.3,y:386.2},0).wait(1).to({x:367.8,y:388.1},0).wait(1).to({x:364.4,y:390.1},0).wait(1).to({x:360.9,y:392.1},0).wait(1).to({x:357.5,y:394.2},0).wait(1).to({x:354.1,y:396.4},0).wait(1).to({x:350.8,y:398.6},0).wait(1).to({x:347.6,y:400.9},0).wait(1).to({x:344.4,y:403.3},0).wait(1).to({x:341.2,y:405.8},0).wait(1).to({x:338.2,y:408.3},0).wait(1).to({x:335.2,y:411},0).wait(1).to({x:332.4,y:413.9},0).wait(1).to({x:329.7,y:416.8},0).wait(1).to({x:327.2,y:419.9},0).wait(1).to({x:325,y:423.2},0).wait(1).to({x:323,y:426.7},0).wait(1).to({x:321.3,y:430.3},0).wait(1).to({x:320.1,y:434.1},0).wait(1).to({x:319.3,y:438},0).wait(1).to({x:319.1,y:442},0).wait(1).to({x:319.5,y:446},0).wait(1).to({x:320.4,y:449.9},0).wait(1).to({x:321.8,y:453.6},0).wait(1).to({x:323.6,y:457.2},0).wait(1).to({x:325.8,y:460.5},0).wait(1).to({x:328.2,y:463.7},0).wait(1).to({x:330.9,y:466.7},0).wait(1).to({x:333.7,y:469.5},0).wait(1).to({x:336.6,y:472.2},0).wait(1).to({x:339.7,y:474.8},0).wait(1).to({x:342.9,y:477.2},0).wait(1).to({x:346.1,y:479.5},0).wait(1).to({x:349.4,y:481.8},0).wait(1).to({x:352.8,y:483.9},0).wait(1).to({x:356.2,y:486},0).wait(1).to({x:359.7,y:488},0).wait(1).to({x:363.2,y:489.9},0).wait(1).to({x:366.8,y:491.7},0).wait(1).to({x:370.3,y:493.5},0).wait(1).to({x:373.9,y:495.3},0).wait(1).to({x:377.5,y:497},0).wait(1).to({x:381.2,y:498.7},0).wait(1).to({x:384.8,y:500.3},0).wait(1).to({x:388.5,y:501.9},0).wait(1).to({x:392.2,y:503.4},0).wait(1).to({x:395.9,y:504.9},0).wait(1).to({x:399.6,y:506.4},0).wait(1).to({x:403.3,y:507.8},0).wait(1).to({x:407.1,y:509.2},0).wait(1).to({x:410.8,y:510.6},0).wait(1).to({x:414.6,y:512},0).wait(1).to({x:418.3,y:513.3},0).wait(1).to({x:422.1,y:514.6},0).wait(1).to({x:425.9,y:515.9},0).wait(1).to({x:429.7,y:517.2},0).wait(1).to({regX:0,regY:0,x:455.4,y:516.8},0).wait(13).to({skewY:180,x:427.4},0).wait(1).to({regX:-25.6,regY:0.4,x:449.5,y:511.1},0).wait(1).to({x:445.9,y:505.1},0).wait(1).to({x:442.2,y:499.1},0).wait(1).to({x:438.4,y:493.3},0).wait(1).to({x:434.4,y:487.5},0).wait(1).to({x:430.3,y:481.8},0).wait(1).to({x:426,y:476.3},0).wait(1).to({x:421.6,y:470.8},0).wait(1).to({x:417.1,y:465.5},0).wait(1).to({x:412.3,y:460.3},0).wait(1).to({x:407.5,y:455.2},0).wait(1).to({x:402.4,y:450.4},0).wait(1).to({x:397.2,y:445.7},0).wait(1).to({x:391.9,y:441.1},0).wait(1).to({x:386.4,y:436.8},0).wait(1).to({x:380.7,y:432.7},0).wait(1).to({x:374.9,y:428.8},0).wait(1).to({x:368.9,y:425.2},0).wait(1).to({x:362.7,y:421.8},0).wait(1).to({x:356.5,y:418.6},0).wait(1).to({x:350.1,y:415.7},0).wait(1).to({x:343.6,y:413.1},0).wait(1).to({x:337,y:410.8},0).wait(1).to({x:330.3,y:408.8},0).wait(1).to({x:323.5,y:407},0).wait(1).to({x:316.6,y:405.5},0).wait(1).to({x:309.7,y:404.3},0).wait(1).to({x:302.8,y:403.4},0).wait(1).to({x:295.8,y:402.7},0).wait(1).to({x:288.8,y:402.3},0).wait(1).to({x:281.8,y:402.1},0).wait(1).to({x:274.8,y:402.2},0).wait(1).to({x:267.8,y:402.5},0).wait(1).to({x:260.8,y:403.1},0).wait(1).to({x:253.8,y:403.8},0).wait(1).to({x:246.9,y:404.8},0).wait(1).to({x:240,y:405.9},0).wait(1).to({x:233.1,y:407.2},0).wait(1).to({x:226.3,y:408.7},0).wait(1).to({x:219.4,y:410.4},0).wait(1).to({x:212.7,y:412.2},0).wait(1).to({x:205.9,y:414.2},0).wait(1).to({x:199.3,y:416.3},0).wait(1).to({x:192.6,y:418.5},0).wait(1).to({x:186,y:420.9},0).wait(1).to({x:179.5,y:423.4},0).wait(1).to({x:173,y:426},0).wait(1).to({regX:0,regY:0,skewY:0,x:179.5,y:425.7},0).wait(1).to({regX:-25.6,regY:0.4,x:153.9,y:429.6},0).wait(1).to({y:433.2},0).wait(1).to({y:436.7},0).wait(1).to({y:440.3},0).wait(1).to({y:443.8},0).wait(1).to({y:447.4},0).wait(1).to({y:450.9},0).wait(1).to({y:454.5},0).wait(1).to({y:458},0).wait(1).to({y:461.6},0).wait(1).to({y:465.1},0).wait(1).to({y:468.7},0).wait(1).to({y:472.3},0).wait(1).to({y:475.8},0).wait(1).to({y:479.4},0).wait(1).to({y:482.9},0).wait(1).to({y:486.5},0).wait(1).to({y:490},0).wait(1).to({y:493.6},0).wait(1).to({y:497.1},0).wait(1).to({y:500.7},0).wait(1).to({y:504.2},0).wait(1).to({y:507.8},0).wait(1).to({y:511.4},0).wait(1).to({y:514.9},0).wait(1).to({y:518.5},0).wait(1).to({y:522},0).wait(1).to({y:525.6},0).wait(1).to({y:529.1},0).wait(1).to({y:532.7},0).wait(1).to({y:536.2},0).wait(1).to({y:539.8},0).wait(1).to({y:543.3},0).wait(1).to({y:546.9},0).wait(1).to({y:550.5},0).wait(1).to({y:554},0).wait(1).to({y:557.6},0).wait(1).to({y:561.1},0).wait(1).to({y:564.7},0).wait(1).to({y:568.2},0).wait(1).to({y:571.8},0).wait(1).to({y:575.3},0).wait(1).to({y:578.9},0).wait(1).to({y:582.4},0).wait(1).to({y:586},0).wait(1).to({y:589.6},0).wait(1).to({regX:0,regY:0,x:179.5,y:589.2},0).to({_off:true},12).wait(106));

	// rightHeli
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(148,546.5,1,1,0,0,0,75,31.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(287).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(12).to({_off:true},734).wait(322).to({_off:false},0).to({_off:true},685).wait(359).to({_off:false},0).to({_off:true},36).wait(288).to({_off:false},0).to({_off:true},192).wait(264).to({_off:false},0).to({_off:true},105).wait(1));

	// total
	this.mc_total = new lib.Total();
	this.mc_total.name = "mc_total";
	this.mc_total.parent = this;
	this.mc_total.setTransform(660,405.2);
	this.mc_total._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_total).wait(2842).to({_off:false},0).wait(1).to({regX:6.5,regY:2.3,x:680.6,y:407.5},0).wait(1).to({x:694.7},0).wait(1).to({x:708.8},0).wait(1).to({x:722.9},0).wait(1).to({x:737},0).wait(1).to({x:751},0).wait(1).to({x:765.1},0).wait(1).to({x:779.2},0).wait(1).to({x:793.3},0).wait(1).to({x:807.4},0).wait(1).to({x:821.5},0).wait(1).to({x:835.6},0).wait(1).to({x:849.7},0).wait(1).to({x:863.8},0).wait(1).to({x:877.8},0).wait(1).to({x:892},0).wait(1).to({x:906},0).wait(1).to({x:920.1},0).wait(1).to({x:934.2},0).wait(1).to({x:948.3},0).wait(1).to({x:962.4},0).wait(1).to({x:976.5},0).wait(1).to({regX:0,regY:0,x:970,y:405.2},0).wait(133).to({regX:6.5,regY:2.3,x:982.3,y:412.2},0).wait(1).to({x:988,y:416.9},0).wait(1).to({x:993.5,y:421.8},0).wait(1).to({x:999,y:426.8},0).wait(1).to({x:1004.3,y:432},0).wait(1).to({x:1009.5,y:437.3},0).wait(1).to({x:1014.4,y:442.8},0).wait(1).to({x:1019.2,y:448.6},0).wait(1).to({x:1023.5,y:454.5},0).wait(1).to({x:1027.5,y:460.8},0).wait(1).to({x:1030.9,y:467.4},0).wait(1).to({x:1033.5,y:474.3},0).wait(1).to({x:1035.1,y:481.5},0).wait(1).to({x:1035.4,y:488.9},0).wait(1).to({x:1034.2,y:496.2},0).wait(1).to({x:1031.4,y:503.1},0).wait(1).to({x:1027.3,y:509.2},0).wait(1).to({x:1022.3,y:514.7},0).wait(1).to({x:1016.6,y:519.4},0).wait(1).to({x:1010.5,y:523.6},0).wait(1).to({x:1004.1,y:527.3},0).wait(1).to({x:997.4,y:530.6},0).wait(1).to({x:990.6,y:533.5},0).wait(1).to({x:983.7,y:536.2},0).wait(1).to({x:976.7,y:538.6},0).wait(1).to({x:969.6,y:540.8},0).wait(1).to({x:962.5,y:542.8},0).wait(1).to({x:955.3,y:544.6},0).wait(1).to({x:948.1,y:546.4},0).wait(1).to({x:940.8,y:547.9},0).wait(1).to({x:933.6,y:549.4},0).wait(1).to({x:926.3,y:550.8},0).wait(1).to({x:919,y:552.1},0).wait(1).to({x:911.7,y:553.3},0).wait(1).to({x:904.3,y:554.4},0).wait(1).to({x:897,y:555.4},0).wait(1).to({x:889.6,y:556.4},0).wait(1).to({x:882.3,y:557.3},0).wait(1).to({x:874.9,y:558.1},0).wait(1).to({x:867.5,y:558.9},0).wait(1).to({x:860.2,y:559.6},0).wait(1).to({x:852.8,y:560.3},0).wait(1).to({x:845.4,y:561},0).wait(1).to({x:838,y:561.6},0).wait(1).to({x:830.6,y:562.2},0).wait(1).to({x:823.2,y:562.7},0).wait(1).to({x:815.8,y:563.2},0).wait(1).to({x:808.4,y:563.6},0).wait(1).to({x:801,y:564},0).wait(1).to({x:793.6,y:564.4},0).wait(1).to({x:786.2,y:564.8},0).wait(1).to({x:778.8,y:565.1},0).wait(1).to({x:771.4,y:565.4},0).wait(1).to({x:764,y:565.7},0).wait(1).to({x:756.6,y:566},0).wait(1).to({x:749.2,y:566.2},0).wait(1).to({x:741.8,y:566.4},0).wait(1).to({x:734.4,y:566.6},0).wait(1).to({x:727,y:566.8},0).wait(1).to({x:719.6,y:566.9},0).wait(1).to({x:712.1,y:567},0).wait(1).to({x:704.7,y:567.1},0).wait(1).to({x:697.3,y:567.2},0).wait(1).to({x:689.9,y:567.3},0).wait(1).to({x:682.5},0).wait(1).to({x:675.1,y:567.4},0).wait(1).to({x:667.7},0).wait(1).to({x:660.2},0).wait(1).to({x:652.8},0).wait(1).to({x:645.4,y:567.3},0).wait(1).to({x:638},0).wait(1).to({regX:0,regY:0,x:631.5,y:565},0).wait(120).to({_off:true},105).wait(1));

	// printfFinal
	this.instance_10 = new lib.printf();
	this.instance_10.parent = this;
	this.instance_10.setTransform(699.4,591.2,1,1,0,0,0,92.8,0);

	this.mc_printf = new lib.printf();
	this.mc_printf.name = "mc_printf";
	this.mc_printf.parent = this;
	this.mc_printf.setTransform(699.4,591.2,1,1,0,0,0,92.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},287).to({state:[{t:this.mc_printf}]},2902).to({state:[{t:this.mc_printf}]},36).to({state:[]},69).wait(1));

	// yFinal
	this.mc_lastY = new lib.yFinal();
	this.mc_lastY.name = "mc_lastY";
	this.mc_lastY.parent = this;
	this.mc_lastY.setTransform(634,406);
	this.mc_lastY._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_lastY).wait(287).to({_off:false},0).wait(2446).to({_off:true},561).wait(1));

	// xFinal
	this.mc_lastX = new lib.xFinal();
	this.mc_lastX.name = "mc_lastX";
	this.mc_lastX.parent = this;
	this.mc_lastX.setTransform(574.6,406);
	this.mc_lastX._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_lastX).wait(287).to({_off:false},0).wait(2446).to({_off:true},561).wait(1));

	// plus
	this.mc_plus = new lib.plus();
	this.mc_plus.name = "mc_plus";
	this.mc_plus.parent = this;
	this.mc_plus.setTransform(595.5,405.9);
	this.mc_plus._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_plus).wait(287).to({_off:false},0).to({_off:true},3007).wait(1));

	// floatY
	this.instance_11 = new lib.floatY();
	this.instance_11.parent = this;
	this.instance_11.setTransform(734.9,382,1,1,0,0,0,-38,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(287).to({_off:false},0).wait(2268).to({alpha:0.978},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.717},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.239},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(694));

	// coma
	this.instance_12 = new lib.coma();
	this.instance_12.parent = this;
	this.instance_12.setTransform(680.9,384,1,1,0,0,0,-69.5,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(287).to({_off:false},0).to({_off:true},3007).wait(1));

	// floatX
	this.instance_13 = new lib.floatX();
	this.instance_13.parent = this;
	this.instance_13.setTransform(634.8,383,1,1,0,0,0,-38,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(287).to({_off:false},0).wait(2268).to({alpha:0.978},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.848},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.717},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.63},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.413},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.239},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.152},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(694));

	// suma()
	this.instance_14 = new lib.suma();
	this.instance_14.parent = this;
	this.instance_14.setTransform(750,568,1,1,0,0,0,63.5,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(287).to({_off:false},0).wait(2711).to({regX:37.5,x:724,alpha:0.979},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(250));

	// segundoNumero()
	this.instance_15 = new lib.segundoNum();
	this.instance_15.parent = this;
	this.instance_15.setTransform(685.8,544.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(287).to({_off:false},0).wait(1931).to({regX:3.5,x:689.3,alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(1066));

	// primerNumero()
	this.instance_16 = new lib.primerNum();
	this.instance_16.parent = this;
	this.instance_16.setTransform(687.8,520.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(287).to({_off:false},0).wait(923).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2074));

	// yNumber
	this.yNum = new cjs.Text("", "21px 'Consolas'");
	this.yNum.name = "yNum";
	this.yNum.lineHeight = 27;
	this.yNum.lineWidth = 28;
	this.yNum.parent = this;
	this.yNum.setTransform(564.9,303.3);
	this.yNum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.yNum).wait(1974).to({_off:false},0).wait(1).to({x:579.3},0).wait(1).to({x:593.7},0).wait(1).to({x:608.1},0).wait(1).to({x:622.5},0).wait(1).to({x:636.9},0).wait(1).to({x:651.4},0).wait(1).to({x:665.8},0).wait(1).to({x:680.2},0).wait(1).to({x:694.6},0).wait(1).to({x:709},0).wait(1).to({x:723.4},0).wait(1).to({x:737.9},0).wait(1).to({x:752.3,y:303.4},0).wait(1).to({x:766.7},0).wait(1).to({x:781.1},0).wait(1).to({x:795.5},0).wait(1).to({x:809.9},0).wait(1).to({x:824.3},0).wait(1).to({x:838.8},0).wait(1).to({x:853.2},0).wait(1).to({x:867.6},0).wait(1).to({x:882},0).wait(1).to({x:896.4},0).wait(1).to({x:910.9},0).wait(1).to({x:925.3},0).wait(1).to({x:939.7},0).wait(158).to({x:948.6,y:309.2},0).wait(1).to({x:957.3,y:315.4},0).wait(1).to({x:965.6,y:322},0).wait(1).to({x:973.3,y:329.3},0).wait(1).to({x:980.3,y:337.4},0).wait(1).to({x:986,y:346.4},0).wait(1).to({x:989.7,y:356.3},0).wait(1).to({x:990.6,y:366.9},0).wait(1).to({x:988.3,y:377.2},0).wait(1).to({x:983.3,y:386.6},0).wait(1).to({x:976.6,y:394.9},0).wait(1).to({x:968.9,y:402.2},0).wait(1).to({x:960.5,y:408.7},0).wait(1).to({x:951.6,y:414.6},0).wait(1).to({x:942.4,y:420},0).wait(1).to({x:933,y:425},0).wait(1).to({x:923.4,y:429.6},0).wait(1).to({x:913.7,y:434},0).wait(1).to({x:903.9,y:438.1},0).wait(1).to({x:894,y:442},0).wait(1).to({x:884,y:445.7},0).wait(1).to({x:873.9,y:449.2},0).wait(1).to({x:863.8,y:452.6},0).wait(1).to({x:853.7,y:455.8},0).wait(1).to({x:843.5,y:458.9},0).wait(1).to({x:833.3,y:462},0).wait(1).to({x:823.1,y:464.9},0).wait(1).to({x:812.8,y:467.7},0).wait(1).to({x:802.5,y:470.4},0).wait(1).to({x:792.2,y:473.1},0).wait(1).to({x:781.9,y:475.7},0).wait(1).to({x:771.6,y:478.2},0).wait(1).to({x:761.2,y:480.6},0).wait(1).to({x:750.8,y:483},0).wait(1).to({x:740.4,y:485.3},0).wait(1).to({x:730,y:487.6},0).wait(1).to({x:719.6,y:489.8},0).wait(1).to({x:709.2,y:492},0).wait(1).to({x:698.8,y:494.2},0).wait(1).to({x:688.3,y:496.2},0).wait(1).to({x:677.9,y:498.3},0).wait(1).to({x:667.4,y:500.3},0).wait(1).to({x:657,y:502.3},0).wait(1).to({x:646.5,y:504.2},0).wait(1).to({x:636,y:506.1},0).wait(1).to({x:625.6,y:508},0).wait(1).to({x:615.1,y:509.8},0).wait(13).to({y:511.7},0).wait(1).to({y:512.5},0).wait(1).to({y:513.4},0).wait(1).to({y:514.3},0).wait(1).to({y:515.2},0).wait(1).to({y:516},0).wait(1).to({y:516.9},0).wait(1).to({y:517.8},0).wait(1).to({y:518.7},0).wait(1).to({y:519.5},0).wait(1).to({y:520.4},0).wait(1).to({y:521.3},0).wait(1).to({y:522.2},0).wait(1).to({y:523},0).wait(1).to({y:523.9},0).wait(1).to({y:524.8},0).wait(1).to({y:525.7},0).wait(1).to({y:526.5},0).wait(1).to({y:527.4},0).wait(1).to({y:528.3},0).wait(1).to({y:529.2},0).wait(1).to({y:530},0).wait(1).to({y:530.9},0).wait(1).to({y:531.8},0).wait(315).to({x:622.1},0).wait(1).to({x:629.1},0).wait(1).to({x:636.1},0).wait(1).to({x:643.1,y:531.6},0).wait(1).to({x:650.1,y:531.5},0).wait(1).to({x:657.1,y:531.2},0).wait(1).to({x:664.1,y:530.8},0).wait(1).to({x:671.1,y:530.4},0).wait(1).to({x:678.1,y:529.9},0).wait(1).to({x:685.1,y:529.2},0).wait(1).to({x:692.1,y:528.4},0).wait(1).to({x:699,y:527.5},0).wait(1).to({x:706,y:526.5},0).wait(1).to({x:712.9,y:525.2},0).wait(1).to({x:719.7,y:523.8},0).wait(1).to({x:726.5,y:522.1},0).wait(1).to({x:733.3,y:520.2},0).wait(1).to({x:739.9,y:518},0).wait(1).to({x:746.5,y:515.4},0).wait(1).to({x:752.8,y:512.3},0).wait(1).to({x:758.8,y:508.7},0).wait(1).to({x:764.4,y:504.5},0).wait(1).to({x:769.3,y:499.5},0).wait(1).to({x:773.3,y:493.7},0).wait(1).to({x:776,y:487.3},0).wait(1).to({x:777.4,y:480.4},0).wait(1).to({y:473.4},0).wait(1).to({x:776.4,y:466.5},0).wait(1).to({x:774.4,y:459.8},0).wait(1).to({x:771.8,y:453.3},0).wait(1).to({x:768.8,y:447},0).wait(1).to({x:765.3,y:440.8},0).wait(1).to({x:761.5,y:435},0).wait(1).to({x:757.4,y:429.2},0).wait(1).to({x:753.2,y:423.6},0).wait(1).to({x:748.8,y:418.2},0).wait(1).to({x:744.2,y:412.9},0).wait(1).to({x:739.5,y:407.6},0).wait(1).to({x:734.7,y:402.5},0).wait(1).to({x:729.8,y:397.5},0).wait(1).to({x:724.9,y:392.5},0).wait(1).to({x:719.8,y:387.7},0).wait(1).to({x:714.7,y:382.9},0).wait(1).to({x:709.5,y:378.1},0).wait(1).to({x:704.3,y:373.4},0).wait(1).to({x:699.1,y:368.8},0).wait(1).to({_off:true},693).wait(1));

	// staticY
	this.yNum2 = new cjs.Text("", "21px 'Consolas'");
	this.yNum2.name = "yNum2";
	this.yNum2.lineHeight = 27;
	this.yNum2.lineWidth = 28;
	this.yNum2.parent = this;
	this.yNum2.setTransform(615.1,531.8);
	this.yNum2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.yNum2).wait(2554).to({_off:false},0).to({_off:true},740).wait(1));

	// returnY
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA8Ig6hmIgCgCIgCgCIgBgBIgBgBIgDgCIgDgBIgBgCIABgDIADgDIADAAIAEAAIAnAAIAuBQIAAAngAguA8IgGgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgBIABAAIABgCIADgBQAEgDACgEQACgEAAgGIAAg+IAKAPIAAAvQAAAGACAEQACAEAEACIADACIABACIABABQAAABAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgGABgAAhgIIAAgYQAAgHgCgEQgDgEgFgDIAAAAIgBgBIgCgBIgBgCQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIgBACIgBABIgCABQgFADgCADQgDAFABAGIAAAng");
	this.shape_2.setTransform(502.9,136.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADBEQAFgBACgDQABgEAAgHIAAhNQAAgFgBgDQgCgDgFgBIAAgBIAAgJQAXABAOARQANASABAZQgBAbgNARQgNARgYACgAgnA7QgOgRAAgbQABgZAOgSQANgRAXgBIAAAJQgFACgCADQgCADABAFIAABNQgBAIACADQACADAFABIAAAKQgYgCgNgRgAgBgzIgHAAIgCAAIAAgBIAAgCIAMgUIABgBIAAgBIADgBIACAAIASAAIABABIABABIAAABIAAAAIgBABIgBABIAAAAIgYASIgCACIAAABIAAAAIgBAAg");
	this.shape_3.setTransform(491,134.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgCIADgCIABAAIACgBIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIACAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBAAIgDADIAAADIAABXIAAAEIADACIABABIABAAIADACIABACQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_4.setTransform(481.7,136.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMA0QAJgBAHgGQAHgFADgKIACgDIADgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAGIgEAHIgDAFIgFAFIgBABIgBABQgFAEgFACIgLACgAghAuQgOgQAAgcQAAgLADgLQADgKAGgJQAFgGAGgGQAHgFAHgDIAHgCIAFAAIACAAIAAAKQgEABgCAEQgDAEAAAHIAABHIAAAEQABAFACADQACAEAEAAIAAALQgXgBgOgQgAAngOIgCgEQgDgPgHgIQgHgJgIgBIAAAAIAAgKIAAAAIABAAIACAAIABAAIAFACIAHADIAEABIACAAIABAAIACAAIABgCIABgDIACgBIACAAIAEABIABAFIAAAkQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_5.setTransform(472.8,136.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIACgBIABgBIABgBIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAAAIACAEIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_6.setTransform(462.1,136.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA3A8IgnAAIgEAAIgFgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgDIADgBIABAAIABgBIAEgCIABgEIAAhnIAnAAIACAAIAFABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgCABIgCABIgCAAIgCADIAAADIAABXIAAAEIACACIACABIACAAIACACIABACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFABgAgPA8IgjhkIAAgCIgBgBIgCgEIgFgCIgDgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAqAAIAQAxIAIgaIAAAdIgUBDgAg3A8IgFgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAgBIABgBIABAAIAAgBQAFgDADgEQACgFAAgGIAAg0IAJAZIAAAbQABAFABAFQABADAEACIADACIADADIABACQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgGABg");
	this.shape_7.setTransform(449.4,136.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgCIADgCIABAAIACgBIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIACAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBAAIgDADIAAADIAABXIAAAEIADACIABABIABAAIADACIABACQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_8.setTransform(438.8,136.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASA8Ig7hmIgBgCIgCgCIgCgBIgCgBIgCgCIgCgBIgBgCIABgDIACgDIACAAIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgBIAAAAIACgCIACgBQAEgDACgEQACgEAAgGIAAg+IAJAPIAAAvQAAAGACAEQACAEAFACIACACIACACIABABQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgGABgAAggIIAAgYQAAgHgCgEQgCgEgFgDIgBAAIAAgBIgCgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAACABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIAAACIgCABIgDABQgEADgCADQgCAFgBAGIAAAng");
	this.shape_9.setTransform(429.4,136.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIACgBIABgBIABgBIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAAAIACAEIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_10.setTransform(417.6,136.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgCIACgBIABgBIABAAIACgBIAAgDIAAgDIgDgNIgXAAIACgKIATAAIgPhGIACgJIAiAAIAZBmIAAACIAAABIACADIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCQAGgDACgDQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_11.setTransform(601.1,113.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALA8IAAgKIAFgBIAEgBIAAAAQAFgDAEgGQADgGACgGIABgEIABgBIACgDIACAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAAAkgAgiA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgEIACgBIABgBIACAAIACgCIABgEIAAhXIgBgEIgCgCIgCAAIgBAAIgCgCIgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIACAAIAmAAIADAAIAGABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCACIgBAAIgBAAIgFACIAAAFIAABmg");
	this.shape_12.setTransform(591.1,113.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABIgGABg");
	this.shape_13.setTransform(556,113.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgCIACgBIABgBIABAAIACgBIAAgDIAAgDIgDgNIgXAAIACgKIATAAIgPhGIACgJIAiAAIAZBmIAAACIAAABIACADIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCQAGgDACgDQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_14.setTransform(543.9,113.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADA8IADgJQAMgCAGgEQAFgFAEgJIAAgBIABgCIAAgBIABgCIACgCIACgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgqA8IAAgJIAvhuIAmAAIAAAKIgvBtgAgngYIAAgEIAAgfIAmAAIgEAKQgJACgHAFQgGAGgDAJIgCAEIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_15.setTransform(533.6,113.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJA8IAAgKQALgBAGgGQAHgFAEgKIAAgBIABgCIACgCIABgBQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAIACAFIAAAfgAgkA8IgDAAIgFgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgEIAEgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBAAIgEgCIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBADAAIADAAIAmAAIAAB3gAAXAWIgCgEQgCgHgDgCQgCgEgFgBIAAgJQAGgCACgEQADgCABgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAfIgBAGQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgCIAAgBIAAAAQgEgKgGgGQgHgFgKgCIAAgKIAkAAIAAAfIgBAFIgDAAIgDAAg");
	this.shape_16.setTransform(523.7,113.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCA8IgoAAIgCAAIgFgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIABgEIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBAAIgDgCIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIACAAIAoAAIAABmIAAAFIADACIABAAIABAAIADACIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgGABgAAEAEQAFgBADgCQACgDAAgGIAAgdQAAgGgCgDQgDgDgFAAIAAgKIABAAIACAAIACAAIAIAAIAHABQANADAHAJQAIAKAAAOQAAAOgIAJQgIAJgOADIgIABIgKAAg");
	this.shape_17.setTransform(512.8,113.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA3A8IgnAAIgEAAIgFgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgDIADgCIABAAIABAAIAEgCIABgFIAAhmIAnAAIACAAIAFABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgCACIgCAAIgCAAIgCACIAAAEIAABXIAAAEIACACIACAAIACABIACABIABAEQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFABgAgQA8IgihkIAAgBIgBgBIgCgFIgFgCIgDgBQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIApAAIARAxIAIgbIAAAeIgUBDgAg3A8IgGgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIABgBIAAgBIABAAQAFgDADgEQACgFAAgHIAAg0IAJAaIAAAaQABAHABADQABAEAEACIADACIADADIABACQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgGABg");
	this.shape_18.setTransform(499.8,113.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAJA8IAAgKQALgBAGgGQAHgFAEgKIAAgBIAAgCIADgCIACgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgEIAEgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBAAIgEgCIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIACAAIAmAAIAAB3gAAXAWIgCgEQgCgHgDgCQgCgEgFgBIAAgJQAFgCADgEQACgCACgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAfIgBAGQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgCIAAgBIAAAAQgDgKgHgGQgHgFgKgCIAAgKIAkAAIAAAfIgBAFIgDAAIgDAAg");
	this.shape_19.setTransform(487.6,113.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgCIACgBIABgBIABAAIACgBIAAgDIAAgDIgDgNIgXAAIACgKIATAAIgPhGIACgJIAiAAIAZBmIAAACIAAABIACADIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCQAGgDACgDQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_20.setTransform(452.8,113.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAAAAAABQgBABAAAAQAAAAAAABIgGABg");
	this.shape_21.setTransform(441.2,113.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgCIACgBIABgBIABAAIACgBIAAgDIAAgDIgDgNIgXAAIACgKIATAAIgPhGIACgJIAiAAIAZBmIAAACIAAABIACADIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCQAGgDACgDQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_22.setTransform(429.1,113.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCA8IgoAAIgCAAIgFgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIABgEIADgBIABgBIABAAIADgCIAAgEIAAhXIAAgEIgDgCIgBAAIgBAAIgDgCIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABgBAEAAIACAAIAoAAIAABmIAAAFIADACIABAAIABAAIADACIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgGABgAAEAEQAGgBACgCQACgDAAgGIAAgdQAAgGgCgDQgDgDgFAAIAAgKIABAAIACAAIACAAIAIAAIAGABQAOADAHAJQAIAKAAAOQAAAOgIAJQgIAJgOADIgIABIgKAAg");
	this.shape_23.setTransform(418,113.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASA8Ig7hlIgBgEIgCgCIgCAAIgCgBIgCgBIgCgCIgBgDIABgCIACgCIACgBIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgBIAAgBIACgBIABgBQAFgDACgEQACgEAAgGIAAg+IAJAQIAAAuQAAAGACAEQACAEAFACIACABIACACIABACQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgGABgAAggIIAAgYQAAgHgCgEQgCgEgFgCIgBgBIAAAAIgCgCIAAgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAACACQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIAAACIgCABIgDABQgEACgCAEQgDAFAAAHIAAAmg");
	this.shape_24.setTransform(600.9,89.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAEBEQAEgBACgDQACgEAAgHIAAhNQAAgFgCgDQgCgDgEgBIAAgBIAAgJQAWABAOARQANASAAAZQAAAbgNARQgOARgWACgAgnA7QgOgRAAgbQAAgZAOgSQAOgRAWgBIAAAJQgEACgCADQgBADgBAFIAABNQABAIABADQACADAEABIAAAKQgXgCgNgRgAgCgzIgGAAIgCAAIgBgBIABgCIAMgUIABgBIABgBIABgBIADAAIARAAIACABIACABIAAABIgBAAIgBABIgBABIAAAAIgYASIgCACIAAABIgBAAIAAAAg");
	this.shape_25.setTransform(589,88.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUA8IgnAAIgDAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDIAEgBIABAAIABgBIADgCIABgFIAAhmIAnAAIAABmIABAFIADACIABABIABAAIAEABIABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgHABgAApgTIgCgDIgBgGQgBgIgDgEQgDgFgEgDIAAgLIAXAAIAAAkQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgwgTQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAglIAXAAIAAALQgEADgDAFQgDAEgCAIIgBAGQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgDABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_26.setTransform(577.9,89.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AADA0QAFgBACgCQACgEgBgHIAAhNQABgGgCgCQgCgDgFgCIAAAAIAAgKQAXACAOARQAOARAAAaQAAAbgOAQQgNARgYACgAgnArQgNgQAAgbQgBgaAOgRQAOgRAWgCIAAAKQgEACgCADQgBACAAAGIAABNQAAAHABAEQACADAEABIAAAJQgWgCgOgRg");
	this.shape_27.setTransform(566.9,89.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AACA8IAAgJQAGgBADgCQADgEAAgHIAAgUQAAgHgDgDQgDgEgGAAIAAgIQAHgBACgEQADgDAAgHIAAgQQAAgGgDgEQgDgDgGAAIAAgKIAKAAQATAAALAIQAKAIAAANQAAAHgDAGQgDAGgGADIgBABIgBABIgEACIgEABIgEABIgEABIAFABIADAAIADABIADABIABABIACAAQAHADAEAIQAEAGAAAIQAAAJgEAGQgDAGgGAFIgBAAIgCABQgFADgGABIgPABgAgrA8IgDAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgDIADgBIABAAIACgBIACgCIABgEIAAhXIgBgEIgCgBIgCgBIgBAAIgDgCIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQACgCADAAIADAAIAnAAIAAB3g");
	this.shape_28.setTransform(555.2,89.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIAAgBIACgBIABAAIABgBIACgBIAAgDIAAgDIgDgMIgXAAIACgMIATAAIgPhFIACgJIAiAAIAZBmIAAABIAAABIACAEIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgCIADgCQAGgDACgDQADgDACgHIAUhIIAEASIgQA4IAAACIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_29.setTransform(493,89.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AARA8Ig6hlIgCgEIgCgCIAAAAIgCgBIgEgBIgCgCIAAgDIAAgCIADgCIADgBIAEAAIAnAAIAuBQIAAAngAguA8IgGgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgBIAAgBIABgBIACgBQAFgDACgEQACgEAAgGIAAg+IAJAQIAAAuQABAGACAEQACAEAEACIADABIACACIAAACQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGABgAAhgIIAAgYQAAgHgDgEQgCgEgFgCIAAgBIgBAAIgCgCIgBgDQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABACQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIgBACIgBABIgCABQgFACgCAEQgCAFAAAHIAAAmg");
	this.shape_30.setTransform(481.6,89.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AADA0QAFgBACgCQACgEgBgHIAAhNQABgGgCgCQgCgDgFgCIAAAAIAAgKQAXACAOARQAOARAAAaQAAAbgOAQQgNARgYACgAgnArQgNgQAAgbQgBgaAOgRQAOgRAWgCIAAAKQgEACgCADQgBACAAAGIAABNQAAAHABAEQACADAEABIAAAJQgWgCgOgRg");
	this.shape_31.setTransform(469.7,89.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDIADgBIABAAIACgBIACgCIAAgEIAAhXIAAgEIgCgBIgCgBIgBAAIgDgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQACgCADAAIACAAIAnAAIACAAIAFACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDACIgBAAIgBABIgDABIAAAEIAABXIAAAEIADACIABABIABAAIADABIABADQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_32.setTransform(460.4,89.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAA0QAHgBAEgDQADgEAAgFIgBgGQgBgDgEgCIgFgDIgHgEIgOgGIgJgGQgHgGgFgGQgEgIAAgKQAAgSAMgKQALgMASgBIAAAKQgFADgDACQgDADAAAFQAAAEACAEQACACAFADIADACIAGAEIAIACIAGAEIAEACIAEACIADACIABABIABABQAGAGADAGQADAGAAAJQAAARgMAMQgNALgTABgAgKA+IgEgBIgEgBIgEgBIgEgCIgCgBIgBAAIgBAAIAAAAIgBAAIgBACIgDACIAAAAIgBAAIgBABIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgCgCAAgFIAAgfIACgFQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADABIACAEQACAIADAFQADAGAFAFIABABIABAAIAFAFIAHABIAAAKIgEAAgAAfgUQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQgCgJgGgIQgHgHgJgCIAAgBIAAgJIADAAIADABIAFACIAIADIADAAIACAAIABgBIACgCIABgCIACgBQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIABAEIAAAdIgBAFQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_33.setTransform(451.7,89.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAKA8IAAgJQAKgCAGgGQAHgFAEgLIAAgBIABgBIACgBIABgBQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAIABAFIAAAfgAgkA8IgDAAIgEgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDIAEgBIABAAIABgBIACgCIABgEIAAhXIgBgEIgCgBIgBgBIgBAAIgEgCIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQABgCADAAIADAAIAmAAIAAB3gAAWAWIgBgFQgCgGgDgDQgCgDgEgBIAAgJQAFgDACgCQADgDABgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABAFIAAAgIgBAHQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgDgBgAAmgXIgBgDIgBAAIAAgBQgEgKgGgFQgHgFgJgBIAAgLIAjAAIAAAfIgBAFIgEABIgCgBg");
	this.shape_34.setTransform(441.5,89.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgGABg");
	this.shape_35.setTransform(430,89.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCA8IgoAAIgCAAIgFgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABAAIABgBIADgCIAAgEIAAhXIAAgEIgDgBIgBgBIgBAAIgDgCIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQABgCAEAAIACAAIAoAAIAABmIAAAFIADACIABABIABAAIADABIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgGABgAAEAFQAGgBACgEQACgBAAgIIAAgcQAAgGgCgDQgDgDgFAAIAAgKIABAAIACAAIACABIAIAAIAGABQAOACAHAJQAIAKAAAOQAAAOgIAIQgIALgOACIgIABIgKABg");
	this.shape_36.setTransform(418,89.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVA5QgFgEAAgIQAAgHAFgEQAFgGAHAAQAHAAAEAGQAFAEAAAHQAAAIgFAEQgEAGgHAAQgHAAgFgGgAgOAVQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgfQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQABgBABAAQAJAAAFgGQAGgFAAgKQAAgEgCgDQgBgEgDgCIAAgBIAAgJQAPACAJAJQAJALAAAOQAAAPgLAKQgKAJgQACQgFAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAABIgBAEIgDABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgfgdQgFgFAAgGQAAgJAJgGQAJgGAOgBIACAAIAAAKIgEABIgBADIABACIABACIAAACIAAACQAAAGgEAFQgFAEgGAAQgGAAgFgEg");
	this.shape_37.setTransform(601.9,66.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAEA1QAEgBACgEQABgDABgHIAAhOQgBgEgBgDQgCgEgEgBIAAAAIAAgKQAWACAOARQANARAAAaQAAAbgNARQgNARgXACgAgnAsQgNgRAAgbQAAgaANgRQAOgRAWgCIAAAKQgEABgCAEQgBADgBAEIAABOQABAHABADQACAEAEABIAAAKQgXgCgNgRg");
	this.shape_38.setTransform(591.3,66.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AADAzQAGgCACgDQACgDAAgIIAAhFQAAgHgCgDQgDgEgFgBIAAgKIAJAAIAHADIADABIADABQAOAIAHANQAHAOAAATQAAATgIAPQgHAOgPAIIgCABIgDABQgDACgDAAIgJAAgAgqA8IgDAAIgFgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCIADgCIABAAIABgBIACgCIACgEIAAhXIgCgDIgCgDIgBAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABgBAEAAIADAAIAnAAIAAB3g");
	this.shape_39.setTransform(580,66.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIACgBIABgBIABgBIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAAAIACAEIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_40.setTransform(568.4,66.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AACAzQAHgCACgDQACgDAAgIIAAhFQAAgHgDgDQgBgEgHgBIAAgKIAJAAIAIADIADABIADABQAOAIAHANQAHAOAAATQAAATgIAPQgHAOgOAIIgDABIgDABQgDACgDAAIgKAAgAgrA8IgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCIABAAIACgBIABgCIABgEIAAhXIgBgDIgBgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABgBAEAAIACAAIAoAAIAAB3g");
	this.shape_41.setTransform(557.2,66.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKA8IAAgKIAGgBIADgCIABAAQAFgDADgFQAEgGACgGIABgDIABgCIABgDIADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAFIAAAjgAgjA8IgBAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgCIADgCIACAAIABgBIACgCIAAgEIAAhXIAAgDIgCgDIgBAAIgCgBIgDgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIABAAIAnAAIADAAIAGABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgDACIgBAAIAAAAIgFADIAAAEIAABmg");
	this.shape_42.setTransform(546.7,66.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAEA1QAEgBACgEQACgDAAgHIAAhOQAAgEgCgDQgCgEgEgBIAAAAIAAgKQAWACAOARQANARAAAaQAAAbgNARQgOARgWACgAgnAsQgOgRAAgbQAAgaAOgRQAOgRAWgCIAAAKQgEABgCAEQgBADgBAEIAABOQABAHABADQACAEAEABIAAAKQgXgCgNgRg");
	this.shape_43.setTransform(535.9,66.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAA1QAHgDAEgDQADgDAAgGIgBgFQgBgDgEgCIgFgDIgHgEIgOgGIgJgFQgHgGgFgIQgEgHAAgLQAAgRAMgLQALgKASgCIAAAKQgFACgDAEQgDADAAAEQAAAEACADQACAEAFADIADABIAGAEIAIADIAGACIAEADIAEACIADACIABABIABABQAGAGADAGQADAGAAAJQAAARgMAMQgMAMgUABgAgKA+IgEgBIgEgBIgEgCIgEgCIgCAAIgBAAIAAAAIgBAAIgBAAIgBABIgDADIAAAAIgBAAIgBABIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgCgDAAgDIAAghIACgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIADABIACAEQACAHADAGQADAGAFAFIABABIABAAIAFAFIAHACIAAAKIgEgBgAAfgUQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQgCgKgGgHQgHgHgJgCIAAgBIAAgJIADAAIADABIAFABIAIAEIADAAIACAAIABgBIACgDIABgBIACgBQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAIABAGIAAAcIgBAFQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_44.setTransform(525.1,66.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AARA8Ig6hmIgCgCIgCgCIgBgBIgBgBIgDgCIgDgBIgBgCIABgDIADgDIADAAIAEAAIAnAAIAuBQIAAAngAguA8IgGgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgBIABAAIABgCIADgBQAEgDACgEQACgEAAgGIAAg+IAKAPIAAAvQAAAGACAEQACAEAEACIADACIABACIABABQAAABAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgGABgAAhgIIAAgYQAAgHgCgEQgDgEgFgDIAAAAIgBgBIgCgBIgBgCQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBABIgBABIgCABQgFADgCADQgDAFABAGIAAAng");
	this.shape_45.setTransform(481.8,66.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AADBEQAFgBACgDQABgEAAgHIAAhNQAAgFgBgDQgCgDgFgBIAAgBIAAgJQAXABAOARQANASAAAZQAAAbgNARQgOARgXACgAgnA7QgOgRAAgbQABgZAOgSQANgRAXgBIAAAJQgFACgCADQgCADABAFIAABNQgBAIACADQACADAFABIAAAKQgYgCgNgRgAgBgzIgHAAIgCAAIAAgBIAAgCIAMgUIABgBIAAgBIADgBIACAAIASAAIABABIABABIAAABIAAAAIgBABIgBABIAAAAIgYASIgCACIAAABIAAAAIgBAAg");
	this.shape_46.setTransform(469.9,65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgCIADgCIABAAIACgBIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIACAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBAAIgDADIAAADIAABXIAAAEIADACIABABIABAAIADACIABACQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_47.setTransform(460.6,66.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAMA0QAJgBAHgGQAHgFADgKIACgDIADgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAGIgEAHIgDAFIgFAFIgBABIgBABQgFAEgFACIgLACgAghAuQgOgQAAgcQAAgLADgLQADgKAGgJQAFgGAGgGQAHgFAHgDIAHgCIAFAAIACgBIAAALQgEABgCAEQgDAEAAAHIAABHIAAAEQABAFACADQACAEAEAAIAAALQgXgBgOgQgAAngOIgCgEQgDgPgHgIQgHgJgIgBIAAAAIAAgKIAAAAIABAAIACAAIABAAIAFACIAHADIAEABIACAAIABAAIACAAIABgCIABgDIACgBIACAAIAEABIABAFIAAAkQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_48.setTransform(451.6,66.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AASA8Ig7hmIgBgCIgCgCIgCgBIgCgBIgCgCIgCgBIgBgCIABgDIACgDIACAAIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIABgBIAAAAIACgCIACgBQAEgDACgEQACgEAAgGIAAg+IAJAPIAAAvQAAAGACAEQACAEAFACIACACIACACIABABQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgGABgAAggIIAAgYQAAgHgCgEQgCgEgFgDIgBAAIAAgBIgCgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAACABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAABIgCABIgDABQgEADgCADQgCAFgBAGIAAAng");
	this.shape_49.setTransform(440.7,66.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AALAyQAKgCAFgHQAGgHAAgLIAAg5QAAgGgCgEQgDgEgEgCIgCgCIgBAAIgBgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAFgBIAWAAIAEAAIABAAIABAAIAAABIABABIABACIAAACIgBABIgBABIgDACQgEACgCAEQgCAFAAAFIAAA4QAAAQgIALQgJAKgOACgAABA9IgMgBQgGAAgFgCIgCgBIgCgBQgLgFgEgHQgEgHAAgNIAAhEIgBgEIgCgCIgBAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIADAAIAnAAIADAAQADAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBADIgBABIgCABIgBAAIgCACIgBAEIAABIIABAKIABAFIADAEIAFADIAAALg");
	this.shape_50.setTransform(428.3,66.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AADA8IgmAAIgDAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCIABAAIACgBIACgCIABgEIAAhXIgBgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIADAAIAmAAIAABnIABAEIADACIABABIABAAIADABIACADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgGABgAAXAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgHgDgCQgDgEgEgBIAAgKQAFgBACgDQADgDABgFIACgFQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIAAAGIAAAhIAAAFQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBgAAmgXIgBgDQgDgLgHgFQgHgFgKgCIAAgKIAkAAIAAAfIgBAEIgEABIgDAAg");
	this.shape_51.setTransform(417.3,66.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgCIACgBIABgBIABAAIACgCIAAgCIAAgDIgDgNIgXAAIACgKIATAAIgPhGIACgJIAiAAIAZBmIAAACIAAABIACADIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCQAGgCACgEQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_52.setTransform(601.1,43.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AALA8IAAgKIAFgBIAEgBIAAAAQAFgDAEgGQADgGACgGIABgEIABgBIACgDIACAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAAAkgAgiA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgEIACgBIABgBIACAAIACgCIABgEIAAhXIgBgEIgCgCIgCAAIgBAAIgCgCIgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIACAAIAmAAIADAAIAGABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCACIgBAAIgBAAIgFACIAAAFIAABmg");
	this.shape_53.setTransform(591.1,43.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgCIACgBIABgBIABAAIACgCIAAgCIAAgDIgDgNIgXAAIACgKIATAAIgPhGIACgJIAiAAIAZBmIAAACIAAABIACADIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCQAGgCACgEQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_54.setTransform(545.9,43.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAAAAAABQAAABgBAAQAAAAAAABIgGABg");
	this.shape_55.setTransform(534.3,43.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgCIACgBIABgBIABAAIACgCIAAgCIAAgDIgDgNIgXAAIACgKIATAAIgPhGIACgJIAiAAIAZBmIAAACIAAABIACADIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCQAGgCACgEQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_56.setTransform(522.2,43.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgDA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgEIADgBIABgBIACAAIACgCIAAgEIAAhXIAAgEIgCgCIgCAAIgBAAIgDgCIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIAABmIACAFIACACIABAAIABAAIADACIACADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABgAADAEQAHgBABgCQACgDAAgGIAAgdQAAgGgCgDQgCgDgGAAIAAgKIACAAIADAAIABAAIAIAAIAGABQANADAJAJQAHAKAAAOQAAAOgIAJQgIAJgOADIgJABIgKAAg");
	this.shape_57.setTransform(511.1,43.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AADA0QAFgBACgDQABgDAAgHIAAhOQAAgFgBgDQgCgCgFgBIAAgBIAAgJQAXABAOARQAOASAAAZQAAAbgOAQQgNARgYADgAgnArQgNgQAAgbQgBgZAOgSQAOgRAWgBIAAAJQgEABgCADQgCADAAAFIAABOQAAAIACACQACADAEACIAAAKQgWgDgOgRg");
	this.shape_58.setTransform(465.1,43.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AATA8IglAAIgEAAIgFgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgCIABAAIABAAIAEgCIABgFIAAhmIAlAAIAABmIABAFIAEACIABAAIABAAIADACIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgGABgAApgTIgCgDIgBgGQgBgIgDgFQgDgEgEgDIAAgLIAXAAIAAAkQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgvgTQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAglIAXAAIAAALQgEADgDAEQgDAFgBAIIgBAGQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_59.setTransform(454,43.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAA0QAHgCAEgCQADgEAAgFIgBgGQgBgDgDgCIgGgEIgHgDIgNgHIgJgEQgIgHgFgHQgEgHAAgLQAAgRALgKQALgMAUAAIAAAKQgGACgDACQgDAEAAAEQAAAEACADQACADAEAEIAFABIAFADIAIAEIAGADIAEACIAEACIACACIABABIACABQAGAGADAFQADAIAAAIQAAASgMALQgMALgUACgAgKA+IgEgBIgEgBIgEgCIgEgBIgCgBIgBAAIgBAAIgBAAIgBAAIgBABIgBACIgBABIAAAAIgBABIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgBgCAAgDIAAggIABgEQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAEABIABAEQACAHAEAGQACAGAGAFIAAABIABABIAFADIAGACIAAALIgDgBgAAfgUQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgKgHgIQgGgHgKgCIAAAAIAAgKIAEABIADAAIAGABIAIADIADABIABAAIAAgBIADgDIACgBIABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABAGIAAAdIgBAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_60.setTransform(443.6,43.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgEIADgBIABgBIACAAIACgCIAAgEIAAhXIAAgEIgCgCIgCAAIgBAAIgDgCIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIACAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDACIgBAAIgBAAIgDACIAAAEIAABXIAAAEIADACIABAAIABABIADABIABAEQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_61.setTransform(434.9,43.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAKA8IAAgKIAGgBIAEgBIAAAAQAFgDAEgGQADgGACgGIABgEIABgBIABgDIADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAEIAAAkgAgiA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgEIADgBIABgBIACAAIACgCIABgEIAAhXIgBgEIgCgCIgCAAIgBAAIgDgCIAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIACAAIAmAAIADAAIAGABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgDACIAAAAIgBAAIgFACIAAAFIAABmg");
	this.shape_62.setTransform(426.9,43.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AADA/IAAgLIAEgBIABgCIgBgCIgBgCIAAgCIgBgDQAAgFAFgFQAFgDAGAAQAGgBAFAFQAEAEABAGQgBAJgIAHQgKAFgNABgAgaAyQgJgKAAgNQAAgPAKgKQALgKAPgCIABAAIAAAAIAEgCQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIABgEQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIACAEIAAAdIgCAEIgEABQgJAAgFAGQgGAGABAJIABAIIAEAFIAAAKQgPgBgIgLgAgCggQgEgFAAgHQAAgHAEgGQAFgEAHAAQAHAAAFAEQAFAGAAAHQAAAHgFAFQgFAEgHAAQgHAAgFgEg");
	this.shape_63.setTransform(416.9,43.3);

	this.instance_17 = new lib.cloud();
	this.instance_17.parent = this;
	this.instance_17.setTransform(499.4,99.8,1,1,0,0,0,-3.6,-15.3);

	this.instance_18 = new lib.yReturn();
	this.instance_18.parent = this;
	this.instance_18.setTransform(578.9,313);

	this.mc_returnY = new lib.yReturn();
	this.mc_returnY.name = "mc_returnY";
	this.mc_returnY.parent = this;
	this.mc_returnY.setTransform(578.9,313);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},239).to({state:[{t:this.instance_18}]},48).to({state:[{t:this.mc_returnY}]},1657).to({state:[]},1350).wait(1));

	// ActionsTextbox2
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8D8D54").s().p("AAEA1QAEgBACgEQACgDAAgHIAAhNQAAgGgCgCQgCgEgEgBIAAAAIAAgKQAWACAOARQANASAAAZQAAAbgNARQgOAQgWACgAgnAsQgOgRAAgbQAAgZAOgSQAOgRAXgCIAAAKQgFABgCAEQgBACgBAGIAABNQABAHABADQACAEAFABIAAAJQgYgCgNgQg");
	this.shape_64.setTransform(774.8,453.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8D8D54").s().p("AASA8Ig7hmIgCgCIgBgCIgBgBIgCgBIgEgCIgCgBIgBgDIABgCIADgDIADAAIAEAAIAnAAIAuBQIAAAngAguA8IgGgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgBIABAAIABgCIACgBQAFgDACgEQACgEAAgGIAAg+IAJAQIAAAuQAAAGADAEQACAEAEACIADACIACACIAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGABgAAhgIIAAgYQAAgHgDgEQgCgEgFgDIAAAAIgBgBIgCgBIgBgCQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABACQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIgBACIgBABIgCABQgFACgCAEQgCAFAAAGIAAAng");
	this.shape_65.setTransform(763.3,453.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABIgGABg");
	this.shape_66.setTransform(751,453.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8D8D54").s().p("AADA1QAFgBACgEQACgDgBgHIAAhNQABgGgCgCQgCgEgFgBIAAAAIAAgKQAXACAOARQAOASAAAZQAAAbgOARQgNAQgYACgAgnAsQgNgRAAgbQgBgZAOgSQAOgRAWgCIAAAKQgEABgCAEQgBACAAAGIAABNQAAAHABADQACAEAEABIAAAJQgWgCgOgQg");
	this.shape_67.setTransform(738.8,453.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8D8D54").s().p("AATA8IglAAIgDAAIgGgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIACgBIACAAIABgBIAEgCIABgEIAAhnIAlAAIAABnIABAEIAEACIABABIABAAIADABIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABgAApgSIgCgFIgBgFQgBgHgDgGQgDgFgFgCIAAgLIAYAAIAAAkQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgvgSQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgkIAXAAIAAALQgFACgCAFQgDAGgBAHIgBAFQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_68.setTransform(727.7,453.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8D8D54").s().p("AAKA8IAAgJQAKgCAHgFQAGgGAEgLIAAgBIAAAAIACgCIACgBQABAAABAAQABAAAAAAQABAAAAAAQAAABABAAIAAAFIAAAfgAgkA8IgDAAIgEgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIACgCIABAAIACgBIACgCIABgEIAAhXIgBgDIgCgCIgCgBIgBgBIgCgBIgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQABgCADAAIADAAIAmAAIAAB3gAAWAWIgCgFQgBgFgCgDQgEgEgDgBIAAgKQAEgCADgCQACgDABgFQABgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAGIAAAhIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgEgBgAAmgXIgBgDIgBAAIAAgBQgDgKgHgFQgGgGgKAAIAAgLIAjAAIAAAfIgBAEIgEABIgCAAg");
	this.shape_69.setTransform(717.2,453.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABIgGABg");
	this.shape_70.setTransform(705.7,453.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8D8D54").s().p("AAJA8IAAgJQALgCAGgFQAHgGAEgLIAAgBIAAAAIACgCIADgBQAAAAABAAQABAAAAAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIACgCIABAAIACgBIACgCIABgEIAAhXIgBgDIgCgCIgCgBIgBgBIgCgBIgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIACAAIAmAAIAAB3gAAXAWIgDgFQgBgFgCgDQgEgEgEgBIAAgKQAFgCADgCQADgDAAgFQABgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAGIAAAhIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgDgBgAAmgXIgCgDIAAAAIAAgBQgEgKgGgFQgGgGgLAAIAAgLIAkAAIAAAfIgBAEIgDABIgDAAg");
	this.shape_71.setTransform(689,453.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8D8D54").s().p("AACAzQAHgCACgDQACgDAAgIIAAhFQAAgHgDgDQgBgEgHgBIAAgKIAJAAIAIADIADABIADABQAOAHAHAOQAHAPAAASQAAATgHAPQgJAOgOAIIgCABIgCABQgDACgEAAIgKAAgAgrA8IgCAAIgFgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgCIADgCIABAAIACgBIACgCIAAgEIAAhXIAAgDIgCgCIgCgBIgBgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQACgCADAAIACAAIAnAAIAAB3g");
	this.shape_72.setTransform(678,453.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABIgGABg");
	this.shape_73.setTransform(660.9,453.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8D8D54").s().p("AAEA1QAEgBACgEQACgDAAgHIAAhNQAAgGgCgCQgCgEgEgBIAAAAIAAgKQAWACAOARQANASAAAZQAAAbgNARQgOAQgWACgAgnAsQgOgRAAgbQAAgZAPgSQANgRAXgCIAAAKQgFABgCAEQgBACgBAGIAABNQABAHABADQACAEAFABIAAAJQgYgCgNgQg");
	this.shape_74.setTransform(648.7,453.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8D8D54").s().p("AALA8IAAgKIAFgBIAEgCIAAAAQAFgDAEgFQADgGACgHIABgCIAAgCIADgDIACgBQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIABAFIAAAjgAgiA8IgDAAIgEgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIADgCIAAAAIACgBIACgCIABgEIAAhXIgBgDIgCgCIgCgBIAAgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQABgCADAAIADAAIAmAAIADAAIAGACQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCACIgBAAIgCABIgDACIgBAEIAABmg");
	this.shape_75.setTransform(638.6,453.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAAgBIACgBIABgBIABgBIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAAAIACAEIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgCIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_76.setTransform(627.8,453.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8D8D54").s().p("AgMA8IgfhoIgBgBIAAgBIgBgBIgCgBIgBgBIgCgBIgBgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQACgCAEAAIAnAAIAEAAIACABIACACIAAACIAAADIgDABIgCADIgBADIABACIATBHIgIAfgAARAAIAKgkIAAgEIgBgFIgEgDIgCgCIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQACgCAEAAIAVAAIAGABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAACIgDACIgEACIgBABIAAAAQgDABgCAEIgDAIIgOAzg");
	this.shape_77.setTransform(616.9,453.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8D8D54").s().p("AgxABIAgAAIAAkJIAjAAIAAEJIAgAAIgyEIg");
	this.shape_78.setTransform(702.9,408.4,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},215).to({state:[]},72).to({state:[]},1657).wait(1351));

	// textbox2
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgDIAAgBIACgBIABAAIABgBIACgBIAAgDIAAgDIgDgMIgXAAIACgLIATAAIgPhGIACgJIAiAAIAZBmIAAABIAAABIACAEIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCQAGgDACgDQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_79.setTransform(1318.2,346);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8D8D54").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgEIADgBIABAAIACgBIACgCIAAgEIAAhXIAAgEIgCgBIgCgBIgBAAIgDgCIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQACgCADAAIACAAIAnAAIACAAIAFACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDACIgBAAIgBABIgDABIAAAEIAABXIAAAEIADACIABABIABAAIADABIABAEQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_80.setTransform(1309,346);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8D8D54").s().p("AAMAzQAJAAAHgGQAHgGADgIIACgFIADgBQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAFIgEAHIgDAFIgFAEIgBACIgBABQgFAEgFABIgLACgAghAuQgOgQAAgcQAAgMADgKQADgKAGgJQAFgGAGgFQAHgGAHgCIAHgCIAFgBIACgBIAAALQgEABgCAEQgDAEAAAGIAABIIAAAEQABAFACAEQACACAEAAIAAALQgXAAgOgQgAAngOIgCgEQgDgOgHgJQgHgIgIgBIAAgBIAAgKIAAAAIABAAIACABIABAAIAFABIAHACIAEACIACAAIABAAIACgBIABgBIABgCIACgBIACgBIAEABIABAEIAAAlQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_81.setTransform(1300.1,346);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8D8D54").s().p("AASA8Ig7hlIgBgEIgCgCIgBAAIgDgBIgDgBIgBgCIgBgDIABgDIACgBIACgBIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgCIAAgBIABgBIACgBQAFgDACgEQACgEAAgHIAAg9IAJAQIAAAtQAAAHACAEQADAEAEACIACABIADACIAAADQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGABgAAggIIAAgYQAAgHgCgEQgCgEgFgCIgBgBIAAAAIgCgCIgBgDQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAACACQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIAAACIgCABIgDABQgEADgCAEQgDAEAAAHIAAAmg");
	this.shape_82.setTransform(1289.1,346);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8D8D54").s().p("AAJA8IAAgJQALgCAGgGQAHgFAEgLIAAgBIAAgBIADgCIACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgEIADgBIACAAIABgBIACgCIABgEIAAhXIgBgEIgCgBIgBgBIgCAAIgDgCIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIACAAIAmAAIAAB3gAAXAWIgDgFQgBgFgDgEQgDgDgEgBIAAgJQAFgDADgDQACgCABgFQABgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABAFIAAAgIgBAHQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgDgBgAAmgXIgCgDIAAAAIAAgBQgEgJgGgGQgHgFgKgBIAAgLIAkAAIAAAfIgBAFIgDABIgDgBg");
	this.shape_83.setTransform(1277.7,346);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8D8D54").s().p("AATA8IgmAAIgCAAIgHgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIADgBIACAAIABgBIADgCIABgFIAAhmIAmAAIAABmIACAFIADACIABABIABAAIADABIACADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABgAApgTIgCgDIgBgGQgBgIgDgEQgDgGgFgCIAAgLIAYAAIAAAkQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAgvgTQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAglIAXAAIAAALQgFACgCAGQgDAEgBAIIgBAGQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_84.setTransform(1267,346);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8D8D54").s().p("AASA8Ig7hlIgCgEIgBgCIgBAAIgDgBIgDgBIgBgCIgBgDIABgDIACgBIACgBIAFAAIAnAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgCIAAgBIABgBIACgBQAFgDACgEQACgEAAgHIAAg9IAJAQIAAAtQAAAHACAEQADAEAEACIACABIADACIAAADQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGABgAAggIIAAgYQAAgHgCgEQgCgEgFgCIgBgBIAAAAIgCgCIAAgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAACACQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAABIAAACIgCABIgDABQgEADgCAEQgDAEAAAHIAAAmg");
	this.shape_85.setTransform(1255.8,346);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8D8D54").s().p("AAJA8IAAgJQALgCAGgGQAHgFAEgLIAAgBIAAgBIACgCIADAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgEIADgBIACAAIABgBIACgCIABgEIAAhXIgBgEIgCgBIgBgBIgCAAIgDgCIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIACAAIAmAAIAAB3gAAXAWIgDgFQgBgFgDgEQgCgDgFgBIAAgJQAGgDACgDQADgCAAgFQABgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABAFIAAAgIgBAHQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgDIAAAAIAAgBQgEgJgGgGQgHgFgKgBIAAgLIAkAAIAAAfIgBAFIgDABIgDgBg");
	this.shape_86.setTransform(1244.4,346);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8D8D54").s().p("AAAA0QAHgCADgCQAEgEAAgFIgBgGQgCgDgDgCIgFgEIgHgDIgOgHIgJgFQgIgGgDgGQgFgIAAgKQAAgSALgKQALgLAUgCIAAALQgGACgDACQgDADAAAFQAAAEACAEQACACAEADIAFACIAGADIAHADIAGAEIAFACIADACIACACIABABIACABQAGAGADAGQADAHAAAIQAAASgMALQgMALgUABgAgKA+IgEgBIgEgBIgEgBIgEgCIgCgBIgBAAIAAAAIgBAAIgCAAIgBACIgCABIAAABIgBAAIAAABIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgBgBAAgFIAAgfIABgFQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADABIACAEQACAHAEAGQACAGAGAFIAAABIABABIAFAEIAGABIAAAKIgDAAgAAfgUQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgKgHgIQgHgHgIgCIAAAAIAAgKIADABIADAAIAGACIAIACIACABIACAAIAAgBIADgCIACgCIABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIABAEIAAAeIgBAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_87.setTransform(1234,346);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8D8D54").s().p("AgxABIAgAAIAAkJIAjAAIAAEJIAgAAIgyEIg");
	this.shape_88.setTransform(1186.8,346.5,1,1,90);

	this.text = new cjs.Text("Segundo número: ", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 127;
	this.text.parent = this;
	this.text.setTransform(848.6,261.6);

	this.txtboxNumero2 = new lib.an_TextInput({'id': 'txtboxNumero2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero2.setTransform(1036.8,269.4,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},191).to({state:[]},96).to({state:[{t:this.txtboxNumero2},{t:this.text}]},1655).to({state:[]},2).wait(1351));

	// xNumber
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8D8D54").s().p("AgxABIAgAAIAAkJIAjAAIAAEJIAgAAIgyEIg");
	this.shape_89.setTransform(582.9,325.4,1,1,-90);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8D8D54").s().p("AALA8IAAgKIAFgBIAEgBIAAAAQAFgEAEgFQADgFACgIIABgDIABgBIACgDIACgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIABAEIAAAkgAgiA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgEIACgBIABAAIACgBIACgCIABgEIAAhXIgBgEIgCgBIgCgBIgBAAIgCgCIgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIACAAIAmAAIADAAIAGACQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgCACIgBAAIgBABIgFABIAAAFIAABmg");
	this.shape_90.setTransform(519.1,339.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgDIAAgBIACgBIABAAIABgBIACgBIAAgDIAAgDIgDgMIgXAAIACgLIATAAIgPhGIACgJIAiAAIAZBmIAAABIAAABIACAEIADACIAAAAIABAAIACACIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCQAGgDACgDQADgDACgHIAUhIIAEASIgQA5IAAABIAAABIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAABQACACACABIADABIACACIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_91.setTransform(508.3,339.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8D8D54").s().p("AAMAzQAJAAAHgGQAHgGADgIIACgFIADgBQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAFIgEAHIgDAFIgFAEIgBACIgBABQgFAEgFABIgLACgAghAuQgOgQAAgcQAAgMADgKQADgKAGgJQAFgGAGgFQAHgGAHgCIAHgCIAFgBIACgBIAAALQgEABgCAEQgDAEAAAGIAABIIAAAEQABAFACAEQACACAEAAIAAALQgXAAgOgQgAAngOIgCgEQgDgOgHgJQgHgIgIgBIAAgBIAAgKIAAAAIABAAIACABIABAAIAFABIAHACIAEACIACAAIABAAIACgBIABgBIABgCIACgBIACgBIAEABIABAEIAAAlQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_92.setTransform(497.4,339.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8D8D54").s().p("AADA0QAFgBACgCQABgEABgHIAAhNQgBgGgBgCQgCgDgFgBIAAgBIAAgKQAXACAOARQAOARAAAaQAAAbgOAQQgNARgYACgAgnArQgNgQAAgbQAAgaANgRQAOgRAWgCIAAAKQgEACgCADQgCADAAAFIAABNQAAAIACADQACADAEABIAAAJQgXgCgNgRg");
	this.shape_93.setTransform(486.6,339.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8D8D54").s().p("AAKA8IAAgKIAGgBIAEgBIAAAAQAFgEAEgFQADgFACgIIABgDIABgBIABgDIADgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIABAEIAAAkgAgiA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgEIADgBIABAAIACgBIACgCIABgEIAAhXIgBgEIgCgBIgCgBIgBAAIgDgCIAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIACAAIAmAAIADAAIAGACQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgDACIAAAAIgBABIgFABIAAAFIAABmg");
	this.shape_94.setTransform(476.4,339.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8D8D54").s().p("AAJA8IAAgJQALgCAGgFQAHgGAEgLIAAAAIAAgBIADgCIACgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgCIADgCIACAAIABgBIACgCIABgEIAAhXIgBgDIgCgCIgBgBIgCgBIgDgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQACgCAEAAIACAAIAmAAIAAB3gAAXAWIgDgFQgBgFgDgEQgCgDgFgBIAAgKQAFgCADgCQACgDABgFQABgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAGIAAAhIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgDIAAAAIAAgBQgEgKgGgFQgHgGgKAAIAAgLIAkAAIAAAfIgBAEIgDABIgDAAg");
	this.shape_95.setTransform(534.8,316);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8D8D54").s().p("AAKA8IAAgKIAGgBIADgCIABAAQAEgDAEgFQAEgGACgGIABgDIAAgCIACgDIADgBQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIABAFIAAAjgAgjA8IgCAAIgEgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgCIAEgCIABAAIABgBIACgCIAAgEIAAhXIAAgDIgCgCIgBgBIgBgBIgEgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQABgCADAAIACAAIAnAAIADAAIAGACQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgEACIgBAAIgBABIgDACIgBAEIAABmg");
	this.shape_96.setTransform(525,316);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8D8D54").s().p("AACA8IAAgJQAGAAADgEQADgDAAgHIAAgUQAAgGgDgEQgDgEgGgBIAAgIQAHAAACgDQADgEAAgHIAAgQQAAgGgDgDQgDgEgGgBIAAgJIAKAAQATAAALAIQAKAHAAAOQAAAHgDAGQgDAGgGADIgBABIgBABIgEABIgEACIgEABIgEABIAFABIADAAIADABIADABIABAAIACABQAHADAEAIQAEAGAAAIQAAAJgEAHQgDAFgGAFIgBAAIgCABQgFADgGABIgPABgAgrA8IgDAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCIABAAIACgBIACgCIABgEIAAhXIgBgDIgCgCIgCgBIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQACgCADAAIADAAIAnAAIAAB3g");
	this.shape_97.setTransform(513.8,316);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIAAAAIACgBIABgBIABgBIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAAAIAAABIACAEIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIABgCIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_98.setTransform(502.2,316);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8D8D54").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCIABAAIACgBIACgCIAAgEIAAhXIAAgDIgCgCIgCgBIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQACgCADAAIACAAIAnAAIACAAIAFACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBABIgDACIAAADIAABXIAAAEIADACIABABIABAAIADACIABACQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_99.setTransform(493,316);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABIgGABg");
	this.shape_100.setTransform(483.4,316.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIAAAAIACgBIABgBIABgBIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAAAIAAABIACAEIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_101.setTransform(471.3,316);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#8D8D54").s().p("AgMA8IgfhoIgBgBIAAgBIgBgBIgCgBIgBgBIgCgBIgBgCIAAgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQACgCAEAAIAnAAIAEAAIACABIACACIAAACIAAADIgDABIgCADIgBADIABACIATBHIgIAfgAARAAIAKgkIAAgEIgBgFIgEgDIgCgCIgDgBIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQACgCAEAAIAVAAIAGABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAACIgDACIgEACIgBABIAAAAQgDABgCAEIgDAIIgOAzg");
	this.shape_102.setTransform(460.3,316);

	this.xNum = new cjs.Text("", "21px 'Consolas'");
	this.xNum.name = "xNum";
	this.xNum.lineHeight = 27;
	this.xNum.lineWidth = 28;
	this.xNum.parent = this;
	this.xNum.setTransform(564.9,141.3);
	this.xNum._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},167).to({state:[]},120).to({state:[{t:this.xNum}]},653).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},157).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[{t:this.xNum}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.xNum).wait(940).to({_off:false},0).wait(1).to({x:578.7},0).wait(1).to({x:592.6},0).wait(1).to({x:606.5},0).wait(1).to({x:620.4},0).wait(1).to({x:634.3},0).wait(1).to({x:648.2},0).wait(1).to({x:662},0).wait(1).to({x:675.9},0).wait(1).to({x:689.8},0).wait(1).to({x:703.7},0).wait(1).to({x:717.6},0).wait(1).to({x:731.5},0).wait(1).to({x:745.3},0).wait(1).to({x:759.2,y:141.4},0).wait(1).to({x:773.1},0).wait(1).to({x:787},0).wait(1).to({x:800.9},0).wait(1).to({x:814.8},0).wait(1).to({x:828.6},0).wait(1).to({x:842.5},0).wait(1).to({x:856.4},0).wait(1).to({x:870.3},0).wait(1).to({x:884.2},0).wait(1).to({x:898.1},0).wait(1).to({x:911.9},0).wait(1).to({x:925.8},0).wait(1).to({x:939.7},0).wait(1).to({x:953.9,y:141.3},0).wait(158).to({y:138.7},0).wait(1).to({y:136.1},0).wait(1).to({y:133.6},0).wait(1).to({y:136.1},0).wait(1).to({y:138.7},0).wait(1).to({y:141.3},0).wait(7).to({x:966.7,y:148.5},0).wait(1).to({x:979.5,y:156},0).wait(1).to({x:992,y:163.9},0).wait(1).to({x:1004.2,y:172.2},0).wait(1).to({x:1016.1,y:181},0).wait(1).to({x:1027.6,y:190.3},0).wait(1).to({x:1038.4,y:200.4},0).wait(1).to({x:1048.4,y:211.3},0).wait(1).to({x:1057.3,y:223.1},0).wait(1).to({x:1064.4,y:236.1},0).wait(1).to({x:1068.9,y:250.1},0).wait(1).to({x:1070.1,y:264.8},0).wait(1).to({x:1067.5,y:279.3},0).wait(1).to({x:1061.6,y:292.8},0).wait(1).to({x:1053.3,y:305},0).wait(1).to({x:1043.4,y:316},0).wait(1).to({x:1032.3,y:325.8},0).wait(1).to({x:1020.6,y:334.7},0).wait(1).to({x:1008.3,y:342.9},0).wait(1).to({x:995.6,y:350.5},0).wait(1).to({x:982.6,y:357.5},0).wait(1).to({x:969.3,y:364.2},0).wait(1).to({x:955.9,y:370.4},0).wait(1).to({x:942.4,y:376.3},0).wait(1).to({x:928.7,y:381.9},0).wait(1).to({x:914.9,y:387.2},0).wait(1).to({x:901,y:392.3},0).wait(1).to({x:887.1,y:397.2},0).wait(1).to({x:873.1,y:401.9},0).wait(1).to({x:859,y:406.5},0).wait(1).to({x:844.9,y:410.9},0).wait(1).to({x:830.7,y:415.1},0).wait(1).to({x:816.5,y:419.2},0).wait(1).to({x:802.3,y:423.2},0).wait(1).to({x:788,y:427},0).wait(1).to({x:773.7,y:430.8},0).wait(1).to({x:759.4,y:434.4},0).wait(1).to({x:745,y:438},0).wait(1).to({x:730.6,y:441.5},0).wait(1).to({x:716.3,y:444.9},0).wait(1).to({x:701.8,y:448.2},0).wait(1).to({x:687.4,y:451.4},0).wait(1).to({x:673,y:454.6},0).wait(1).to({x:658.5,y:457.7},0).wait(1).to({x:644,y:460.7},0).wait(1).to({x:629.6,y:463.7},0).wait(1).to({x:615.1,y:466.6},0).wait(26).to({y:468.4},0).wait(1).to({y:470.2},0).wait(1).to({y:472},0).wait(1).to({y:473.8},0).wait(1).to({y:475.6},0).wait(1).to({y:477.4},0).wait(1).to({y:479.2},0).wait(1).to({y:481},0).wait(1).to({y:482.8},0).wait(1).to({y:484.6},0).wait(1).to({y:486.4},0).wait(1).to({y:488.2},0).wait(1).to({y:490},0).wait(1).to({y:491.8},0).wait(1).to({y:493.6},0).wait(1).to({y:495.4},0).wait(1).to({y:497.2},0).wait(1).to({y:499},0).wait(1).to({y:500.8},0).wait(1).to({y:502.6},0).wait(1).to({y:504.4},0).wait(1).to({y:506.2},0).wait(1).to({y:508},0).wait(1).to({y:509.8},0).wait(1357).to({x:610,y:508},0).wait(1).to({x:605,y:506.1},0).wait(1).to({x:600,y:504.2},0).wait(1).to({x:595,y:502.2},0).wait(1).to({x:590.1,y:500.2},0).wait(1).to({x:585.2,y:498.1},0).wait(1).to({x:580.3,y:496},0).wait(1).to({x:575.4,y:493.8},0).wait(1).to({x:570.6,y:491.5},0).wait(1).to({x:565.8,y:489.1},0).wait(1).to({x:561.1,y:486.6},0).wait(1).to({x:556.4,y:484},0).wait(1).to({x:551.8,y:481.2},0).wait(1).to({x:547.3,y:478.4},0).wait(1).to({x:542.9,y:475.3},0).wait(1).to({x:538.6,y:472.1},0).wait(1).to({x:534.5,y:468.7},0).wait(1).to({x:530.6,y:465.1},0).wait(1).to({x:527,y:461.1},0).wait(1).to({x:523.8,y:456.8},0).wait(1).to({x:521.2,y:452.2},0).wait(1).to({x:519.3,y:447.2},0).wait(1).to({x:518.3,y:441.9},0).wait(1).to({x:518.4,y:436.6},0).wait(1).to({x:519.5,y:431.4},0).wait(1).to({x:521.6,y:426.5},0).wait(1).to({x:524.3,y:421.9},0).wait(1).to({x:527.5,y:417.6},0).wait(1).to({x:531.1,y:413.7},0).wait(1).to({x:535,y:410},0).wait(1).to({x:539.1,y:406.6},0).wait(1).to({x:543.3,y:403.3},0).wait(1).to({x:547.7,y:400.3},0).wait(1).to({x:552.2,y:397.3},0).wait(1).to({x:556.8,y:394.5},0).wait(1).to({x:561.4,y:391.9},0).wait(1).to({x:566.1,y:389.3},0).wait(1).to({x:570.9,y:386.9},0).wait(1).to({x:575.7,y:384.5},0).wait(1).to({x:580.5,y:382.2},0).wait(1).to({x:585.4,y:380},0).wait(1).to({x:590.3,y:377.8},0).wait(1).to({x:595.2,y:375.7},0).wait(1).to({x:600.1,y:373.7},0).wait(1).to({x:605.1,y:371.7},0).wait(1).to({x:610,y:369.7},0).wait(1).to({x:615.1,y:367.8},0).wait(657).to({_off:true},1).wait(1));

	// staticX
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8D8D54").s().p("AARA8Ig6hmIgCgCIgCgCIgBgCIgBAAIgDgCIgDgBIgBgCIABgEIADgCIADAAIAEAAIAnAAIAuBQIAAAngAguA8IgGgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgCIABAAIABgCIADgCQAEgCACgEQACgEAAgGIAAg+IAKAPIAAAvQAAAGACAEQACAEAEACIADACIABACIABACQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGABgAAhgHIAAgZQAAgHgCgEQgDgEgFgDIAAAAIgBgBIgCgBIgBgCQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBABIgBABIgCABQgFADgCADQgDAFABAGIAAAng");
	this.shape_103.setTransform(1213.5,188);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8D8D54").s().p("AADBEQAFgBACgDQABgEAAgHIAAhNQAAgFgBgDQgCgDgFgBIAAgBIAAgJQAXABAOARQANASABAZQgBAbgNARQgNARgYACgAgnA7QgOgRAAgbQABgZAOgSQANgRAXgBIAAAJQgFACgCADQgCADABAFIAABNQgBAIACADQACADAFABIAAAKQgYgCgNgRgAgBgzIgHAAIgCAAIAAgBIAAgCIAMgUIABgBIAAgBIADgBIACAAIASAAIABABIABABIAAABIAAAAIgBABIgBABIAAAAIgYASIgCACIAAABIAAAAIgBAAg");
	this.shape_104.setTransform(1201.6,186.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#8D8D54").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCIABgBIACAAIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIACAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBAAIgDADIAAADIAABXIAAAEIADACIABAAIABABIADACIABADQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_105.setTransform(1192.3,188);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#8D8D54").s().p("AAMA0QAJgBAHgGQAHgFADgKIACgDIADgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAHIgEAGIgDAFIgFAFIgBABIgBABQgFAEgFACIgLACgAghAuQgOgQAAgcQAAgLADgLQADgKAGgJQAFgHAGgFQAHgFAHgDIAHgBIAFgBIACAAIAAAKQgEABgCAEQgDAEAAAHIAABIIAAADQABAFACADQACADAEABIAAALQgXgBgOgQgAAngOIgCgEQgDgPgHgIQgHgJgIgBIAAAAIAAgKIAAAAIABAAIACABIABAAIAFABIAHACIAEACIACAAIABAAIACAAIABgCIABgDIACAAIACgBIAEABIABAFIAAAkQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_106.setTransform(1183.3,188);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8D8D54").s().p("AARA8Ig6hmIgBgCIgCgCIgCgCIgCAAIgCgCIgCgBIgBgCIABgEIACgCIACAAIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgCIAAAAIACgCIABgCQAFgCACgEQACgEAAgGIAAg+IAJAPIAAAvQABAGABAEQACAEAFACIACACIACACIABACQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgGABgAAggHIAAgZQAAgHgBgEQgDgEgFgDIgBAAIAAgBIgCgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAABIgCABIgDABQgEADgCADQgCAFgBAGIAAAng");
	this.shape_107.setTransform(1172.4,188);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8D8D54").s().p("AALAyQAKgCAFgHQAGgHAAgLIAAg5QAAgGgCgEQgDgEgEgCIgCgCIgBAAIgBgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAFgBIAWAAIAEAAIABAAIABAAIAAABIABABIABACIAAACIgBABIgBABIgDACQgEACgCAEQgCAFAAAFIAAA4QAAAQgIALQgJAKgOACgAABA9IgMgBQgGAAgFgCIgCgBIgCgBQgLgFgEgHQgEgHAAgNIAAhEIgBgEIgCgCIgBAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIADAAIAnAAIADAAQADAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBADIgBABIgCABIgBAAIgCACIgBAEIAABIIABAKIABAFIADAEIAFADIAAALg");
	this.shape_108.setTransform(1160,188.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#8D8D54").s().p("AADA8IgmAAIgDAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIACAAIACgCIABgEIAAhXIgBgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIADAAIAmAAIAABnIABAEIADACIABAAIABAAIADACIACADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgGABgAAXAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgHgDgCQgDgEgEgBIAAgKQAFgBACgDQADgDABgFIACgFQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIAAAHIAAAgIAAAFQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBgAAmgXIgBgDQgDgLgHgFQgHgGgKgBIAAgKIAkAAIAAAfIgBAEIgEABIgDAAg");
	this.shape_109.setTransform(1149,188);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgBIACgBIABgCIABAAIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAABIACADIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_110.setTransform(1133.2,188);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#8D8D54").s().p("AAKA8IAAgKIAGgBIADgCIABAAQAFgDADgFQAEgGACgGIABgEIABgBIABgDIADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAFIAAAjgAgjA8IgBAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgDIADgCIABgBIACAAIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIABAAIAnAAIADAAIAGABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgDACIgBAAIAAAAIgFADIAAAEIAABmg");
	this.shape_111.setTransform(1123.2,188);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8D8D54").s().p("AAJA8IAAgKQALgBAGgFQAHgGAEgKIAAgBIABgBIACgDIABgBQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgDAAIgFgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgDIAEgCIABgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgBgBIgEgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBADAAIADAAIAmAAIAAB3gAAXAWIgCgEQgCgHgDgCQgCgEgFgBIAAgKQAGgBACgDQADgDABgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAgIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgCIAAgBIAAAAQgEgLgGgFQgHgGgKgBIAAgKIAkAAIAAAfIgBAEIgDABIgDAAg");
	this.shape_112.setTransform(1107.8,188);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8D8D54").s().p("AACAyQAHgBACgDQACgDAAgIIAAhEQAAgIgDgDQgBgEgHgBIAAgKIAJAAIAIACIADACIADABQAOAIAHANQAHAOAAATQAAATgIAPQgHAOgOAIIgDABIgDABQgDABgDAAIgKABgAgrA8IgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIACAAIABgCIABgEIAAhXIgBgDIgBgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABgBAEAAIACAAIAoAAIAAB3g");
	this.shape_113.setTransform(1096.8,188);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8D8D54").s().p("AAAA1QAHgCADgEQAEgDAAgGIgBgFQgCgDgDgCIgFgDIgHgEIgOgHIgJgEQgHgHgEgHQgFgHAAgLQAAgRAMgLQAKgLATAAIAAAJQgFACgDAEQgDADAAAEQAAAEACADQACADAFAEIADABIAHADIAHAEIAGACIAFADIADACIADACIABABIABABQAGAGADAFQADAIAAAIQAAARgMAMQgNAMgTABgAgKA+IgEgBIgEgBIgEgCIgEgCIgCAAIgBAAIAAAAIgBAAIgBAAIgCABIgCACIAAABIgBAAIgBABIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQgBgCAAgDIAAghIABgDQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADABIACAEQACAHADAGQAEAGAFAFIAAABIABAAIAFAEIAGADIAAAKIgDgBgAAfgUQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBQgCgKgGgHQgIgHgIgCIAAgBIAAgJIADABIADAAIAFABIAJAEIACAAIACAAIABgBIACgDIABgBIACAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAGIAAAcIgBAFQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_114.setTransform(1080.7,188);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8D8D54").s().p("AADA1QAFgCACgDQABgDAAgHIAAhOQABgEgCgEQgCgDgFgBIAAAAIAAgJQAXABAOARQAOASAAAZQAAAbgOARQgNARgYACgAgnAsQgNgRAAgbQgBgZAOgSQAOgRAWgBIAAAJQgEACgCACQgBAEAAAEIAABOQAAAHABADQACADAEACIAAAKQgWgCgOgRg");
	this.shape_115.setTransform(1070,188);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABIgGABg");
	this.shape_116.setTransform(1058.2,188.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#8D8D54").s().p("AATA8IglAAIgDAAIgGgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIACgCIACAAIABAAIAEgCIABgEIAAhnIAlAAIAABnIABAEIAEACIABAAIABAAIADACIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABgAApgSIgCgFIgBgFQgBgHgDgGQgDgEgFgDIAAgLIAYAAIAAAkQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgvgSQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgkIAXAAIAAALQgFADgCAEQgDAGgBAHIgBAFQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_117.setTransform(1046.3,188);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8D8D54").s().p("AAKA8IAAgKQAKgBAHgFQAGgGAEgKIAAgBIABgBIABgDIACgBQABAAABABQABAAAAAAQABAAAAAAQAAABABAAIABAFIAAAfgAgkA8IgDAAIgEgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgDIACgCIABgBIACAAIACgCIABgEIAAhXIgBgDIgCgDIgCAAIgBgBIgCgBIgBgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQABgBADAAIADAAIAmAAIAAB3gAAWAWIgCgEQgBgHgCgCQgEgEgDgBIAAgKQAEgBADgDQACgDABgFQABgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAgIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgEgBgAAmgXIgBgCIgBgBIAAAAQgDgLgHgFQgGgGgKgBIAAgKIAjAAIAAAfIgBAEIgEABIgCAAg");
	this.shape_118.setTransform(1035.8,188);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8D8D54").s().p("AA3A8IgoAAIgCAAIgHgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgCIABAAIABAAIAEgCIAAgEIAAhnIAoAAIADAAIAEABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBAAIgDADIAAADIAABXIAAAEIADACIABAAIABABIADACIABADQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABgAgPA8IgjhkIAAgCIAAgBIgEgEIgDgCIgEgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAqAAIAQAxIAHgaIAAAdIgTBDgAg4A8IgEgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIABgCIABgBIABAAIABgBQAEgDADgEQACgFAAgGIAAg0IAKAZIAAAbQgBAFACAFQACADADACIAEACIACADIABACQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgFABg");
	this.shape_119.setTransform(1023.3,188);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgBIACgBIABgCIABAAIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAABIACADIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_120.setTransform(1010.7,188);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABIgGABg");
	this.shape_121.setTransform(999.1,188.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgBIACgBIABgCIABAAIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAABIACADIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgEABg");
	this.shape_122.setTransform(987,188);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8D8D54").s().p("AgCA8IgoAAIgCAAIgFgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIABgDIADgCIABgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABgBAEAAIACAAIAoAAIAABnIAAAEIADACIABAAIABAAIADACIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgGABgAAEAEQAFgBADgCQACgDAAgGIAAgcQAAgHgCgDQgDgDgFgBIAAgJIABAAIACAAIACAAIAIAAIAHABQANADAHAKQAIAJAAAOQAAAOgIAJQgIAKgOACIgIABIgKAAg");
	this.shape_123.setTransform(975.9,188);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8D8D54").s().p("AgxABIAgAAIAAkJIAjAAIAAEJIAgAAIgyEIg");
	this.shape_124.setTransform(1041.9,244.5);

	this.xNum2 = new cjs.Text("", "21px 'Consolas'");
	this.xNum2.name = "xNum2";
	this.xNum2.lineHeight = 27;
	this.xNum2.lineWidth = 28;
	this.xNum2.parent = this;
	this.xNum2.setTransform(615.1,509.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},143).to({state:[]},144).to({state:[{t:this.xNum2}]},2267).to({state:[]},740).wait(1));

	// returnX
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8D8D54").s().p("AARA8Ig6hmIgCgCIgCgCIgBgCIgBAAIgDgCIgDgBIgBgCIABgEIADgCIADAAIAEAAIAnAAIAuBQIAAAngAguA8IgGgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgCIABAAIABgCIADgCQAEgCACgEQACgEAAgGIAAg+IAKAPIAAAvQAAAGACAEQACAEAEACIADACIABACIABACQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgGABgAAhgHIAAgZQAAgHgCgEQgDgEgFgDIAAAAIgBgBIgCgBIgBgCQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBABIgBABIgCABQgFADgCADQgDAFABAGIAAAng");
	this.shape_125.setTransform(818.4,188);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8D8D54").s().p("AADBEQAFgBACgDQABgEAAgHIAAhNQAAgFgBgDQgCgDgFgBIAAgBIAAgJQAXABAOARQANASAAAZQAAAbgNARQgOARgXACgAgnA7QgOgRAAgbQABgZAOgSQANgRAXgBIAAAJQgFACgCADQgCADABAFIAABNQgBAIACADQACADAFABIAAAKQgYgCgNgRgAgBgzIgHAAIgCAAIAAgBIAAgCIAMgUIABgBIAAgBIADgBIACAAIASAAIABABIABABIAAABIAAAAIgBABIgBABIAAAAIgYASIgCACIAAABIAAAAIgBAAg");
	this.shape_126.setTransform(806.5,186.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8D8D54").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCIABgBIACAAIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIACAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBAAIgDADIAAADIAABXIAAAEIADACIABAAIABABIADACIABADQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_127.setTransform(797.2,188);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8D8D54").s().p("AAMA0QAJgBAHgGQAHgFADgKIACgDIADgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAHIgEAGIgDAFIgFAFIgBABIgBABQgFAEgFACIgLACgAghAuQgOgQAAgcQAAgLADgLQADgKAGgJQAFgHAGgFQAHgFAHgDIAHgBIAFgBIACAAIAAAKQgEABgCAEQgDAEAAAHIAABIIAAADQABAFACADQACADAEABIAAALQgXgBgOgQgAAngOIgCgEQgDgPgHgIQgHgJgIgBIAAAAIAAgKIAAAAIABAAIACABIABAAIAFABIAHACIAEACIACAAIABAAIACAAIABgCIABgDIACAAIACgBIAEABIABAFIAAAkQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_128.setTransform(788.2,188);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8D8D54").s().p("AASA8Ig7hmIgBgCIgCgCIgCgCIgCAAIgCgCIgCgBIgBgCIABgEIACgCIACAAIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIABgCIAAAAIACgCIACgCQAEgCACgEQACgEAAgGIAAg+IAJAPIAAAvQAAAGACAEQACAEAFACIACACIACACIABACQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgGABgAAggHIAAgZQAAgHgCgEQgCgEgFgDIgBAAIAAgBIgCgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAACABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAABIgCABIgDABQgEADgCADQgDAFAAAGIAAAng");
	this.shape_129.setTransform(777.3,188);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8D8D54").s().p("AALAyQAKgCAFgHQAGgHAAgLIAAg5QAAgGgCgEQgDgEgEgCIgCgCIgBAAIgBgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAFgBIAWAAIAEAAIABAAIABAAIAAABIABABIABACIAAACIgBABIgBABIgDACQgEACgCAEQgCAFAAAFIAAA4QAAAQgIALQgJAKgOACgAABA9IgMgBQgGAAgFgCIgCgBIgCgBQgLgFgEgHQgEgHAAgNIAAhEIgBgEIgCgCIgBAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIADAAIAnAAIADAAQADAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBADIgBABIgCABIgBAAIgCACIgBAEIAABIIABAKIABAFIADAEIAFADIAAALg");
	this.shape_130.setTransform(764.9,188.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8D8D54").s().p("AADA8IgmAAIgDAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIACAAIACgCIABgEIAAhXIgBgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIADAAIAmAAIAABnIABAEIADACIABAAIABAAIADACIACADQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgGABgAAXAWQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgHgDgCQgDgEgEgBIAAgKQAFgBACgDQADgDABgFIACgFQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIAAAHIAAAgIAAAFQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBgAAmgXIgBgDQgDgLgHgFQgHgGgKgBIAAgKIAkAAIAAAfIgBAEIgEABIgDAAg");
	this.shape_131.setTransform(753.9,188);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#8D8D54").s().p("AAFA8IgEgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgCIAAgBIACgBIABgCIABAAIACgCIAAgCIAAgDIgDgNIgXAAIACgLIATAAIgPhGIACgIIAiAAIAZBnIAAABIAAABIACADIADACIAAABIABAAIACABIABADQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgFABgAgwA8IgFgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgDIADgCQAGgCACgEQADgDACgHIAUhHIAEASIgQA3IAAABIAAACIAAABIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACADACABIADABIACACIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgEABg");
	this.shape_132.setTransform(738.1,188);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8D8D54").s().p("AAKA8IAAgKIAGgBIADgCIABAAQAFgDADgFQAEgGACgGIABgEIABgBIABgDIADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIABAFIAAAjgAgiA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgDIADgCIACgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgCgBIgDgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIACAAIAmAAIADAAIAGABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgDACIAAAAIgBAAIgFADIAAAEIAABmg");
	this.shape_133.setTransform(728.1,188);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8D8D54").s().p("AAJA8IAAgKQALgBAGgFQAHgGAEgKIAAgBIABgBIACgDIABgBQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAIACAFIAAAfgAgkA8IgDAAIgFgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgDIAEgCIABgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgBgBIgEgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBADAAIADAAIAmAAIAAB3gAAXAWIgCgEQgCgHgDgCQgCgEgFgBIAAgKQAGgBACgDQADgDABgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAgIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgCIAAgBIAAAAQgDgLgHgFQgHgGgKgBIAAgKIAkAAIAAAfIgBAEIgDABIgDAAg");
	this.shape_134.setTransform(712.7,188);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8D8D54").s().p("AACAyQAHgBACgDQACgDAAgIIAAhEQAAgIgDgDQgBgEgHgBIAAgKIAJAAIAIACIADACIADABQAOAIAHANQAHAOAAATQAAATgIAPQgHAOgOAIIgDABIgDABQgDABgDAAIgKABgAgrA8IgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABgBAEAAIACAAIAoAAIAAB3g");
	this.shape_135.setTransform(701.7,188);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8D8D54").s().p("AAJA8IAAgKQALgBAGgFQAHgGAEgKIAAgBIAAgBIADgDIACgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgDIADgCIACgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgCgBIgDgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIACAAIAmAAIAAB3gAAXAWIgDgEQgBgHgDgCQgCgEgFgBIAAgKQAFgBADgDQACgDABgFQABgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAgIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgCIAAgBIAAAAQgEgLgGgFQgHgGgKgBIAAgKIAkAAIAAAfIgBAEIgDABIgDAAg");
	this.shape_136.setTransform(685.5,188);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABIgGABg");
	this.shape_137.setTransform(674.1,188.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#8D8D54").s().p("AACA8IAAgJQAGgBADgDQADgDAAgHIAAgUQAAgGgDgEQgDgDgGgCIAAgIQAHAAACgDQADgEAAgIIAAgPQAAgGgDgDQgDgEgGgBIAAgJIAKAAQATAAALAIQAKAHAAAOQAAAHgDAGQgDAGgGAEIgBAAIgBABIgEABIgEACIgEABIgEABIAFABIADAAIADABIADABIABAAIACABQAHAEAEAGQAEAHAAAJQAAAIgEAHQgDAFgGAFIgBABIgCAAQgFADgGABIgPABgAgrA8IgDAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIACAAIACgCIABgEIAAhXIgBgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIADAAIAnAAIAAB3g");
	this.shape_138.setTransform(661.6,188);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#8D8D54").s().p("AA3A8IgnAAIgEAAIgFgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgDIADgCIABAAIABAAIAEgCIABgEIAAhnIAnAAIACAAIAFABQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABIgBADIgCABIgCABIgCAAIgCADIgBADIAABXIABAEIACACIACAAIACABIACACIABADQAAAAAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgFABgAgQA8IgihkIAAgCIgBgBIgCgEIgFgCIgEgCQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIApAAIARAxIAIgaIAAAdIgUBDgAg3A8IgGgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIABgBIAAAAIABgBQAFgDADgEQACgFAAgGIAAg0IAJAZIAAAbQAAAFACAFQABADAEACIADACIADADIABACQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgGABg");
	this.shape_139.setTransform(648.4,188);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8D8D54").s().p("AADA1QAFgCACgDQACgDgBgHIAAhOQABgEgCgEQgCgDgFgBIAAAAIAAgJQAXABAOARQAOASAAAZQAAAbgOARQgNARgYACgAgnAsQgNgRAAgbQgBgZAOgSQAOgRAWgBIAAAJQgEACgCACQgBAEAAAEIAABOQAAAHABADQACADAEACIAAAKQgWgCgOgRg");
	this.shape_140.setTransform(635.7,188);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8D8D54").s().p("AARA8Ig6hmIgBgCIgDgCIgBgCIgCAAIgCgCIgCgBIgCgCIACgEIACgCIACAAIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgCIABAAIACgCIACgCQAEgCACgEQACgEAAgGIAAg+IAKAPIAAAvQAAAGABAEQACAEAFACIACACIACACIABACQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgGABgAAggHIAAgZQAAgHgBgEQgDgEgFgDIgBAAIAAgBIgCgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAABIgCABIgDABQgEADgCADQgCAFgBAGIAAAng");
	this.shape_141.setTransform(624.2,188);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#8D8D54").s().p("AgxABIAgAAIAAkJIAjAAIAAEJIAgAAIgyEIg");
	this.shape_142.setTransform(689.9,244.5);

	this.instance_19 = new lib.xReturn();
	this.instance_19.parent = this;
	this.instance_19.setTransform(578.9,152);

	this.mc_returnX = new lib.xReturn();
	this.mc_returnX.name = "mc_returnX";
	this.mc_returnX.parent = this;
	this.mc_returnX.setTransform(578.9,152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},119).to({state:[{t:this.instance_19}]},168).to({state:[{t:this.mc_returnX}]},623).to({state:[]},2384).wait(1));

	// ActionsTextbox
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8D8D54").s().p("AADA1QAFgCACgDQACgDgBgHIAAhOQABgEgCgEQgCgDgFgBIAAAAIAAgJQAXABAOARQAOASAAAZQAAAbgOARQgNARgYACgAgnAsQgNgRAAgbQgBgZAOgSQAOgRAWgBIAAAJQgEACgCACQgBAEAAAEIAABOQAAAHABADQACADAEACIAAAKQgWgCgOgRg");
	this.shape_143.setTransform(588.5,188);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#8D8D54").s().p("AARA8Ig6hmIgBgCIgDgCIgBgCIgCAAIgCgCIgCgBIgCgCIACgEIACgCIACAAIAGAAIAmAAIAtBQIAAAngAguA8IgGgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgCIABAAIACgCIACgCQAEgCACgEQACgEAAgGIAAg+IAKAPIAAAvQAAAGABAEQACAEAFACIACACIACACIABACQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgGABgAAggHIAAgZQAAgHgBgEQgDgEgFgDIgBAAIAAgBIgCgBIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAWAAQAEAAABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIAAABIgCABIgDABQgEADgCADQgCAFgBAGIAAAng");
	this.shape_144.setTransform(576.9,188);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABIgGABg");
	this.shape_145.setTransform(564.6,188.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#8D8D54").s().p("AAEA1QAEgCACgDQACgDAAgHIAAhOQAAgEgCgEQgCgDgEgBIAAAAIAAgJQAWABAOARQANASAAAZQAAAbgNARQgOARgWACgAgnAsQgOgRAAgbQAAgZAPgSQANgRAXgBIAAAJQgFACgCACQgBAEAAAEIAABOQAAAHABADQACADAFACIAAAKQgYgCgNgRg");
	this.shape_146.setTransform(552.4,188);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#8D8D54").s().p("AAUA8IgnAAIgDAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDIAEgCIABAAIABAAIADgCIABgEIAAhnIAnAAIAABnIABAEIADACIABAAIABAAIAEACIABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgHABgAApgSIgCgFIgBgFQgBgHgDgGQgDgEgFgDIAAgLIAYAAIAAAkQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgwgSQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgkIAXAAIAAALQgFADgCAEQgDAGgCAHIgBAFQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAIgDABQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_147.setTransform(541.4,188);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#8D8D54").s().p("AAJA8IAAgKQALgBAGgFQAHgGAEgKIAAgBIAAgBIADgDIACgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIABAFIAAAfgAgkA8IgCAAIgGgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgDIAEgCIABgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgBgBIgEgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQACgBAEAAIACAAIAmAAIAAB3gAAXAWIgCgEQgCgHgDgCQgCgEgFgBIAAgKQAFgBADgDQACgDACgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAgIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgCgBgAAmgXIgCgCIAAgBIAAAAQgDgLgHgFQgHgGgKgBIAAgKIAkAAIAAAfIgBAEIgDABIgDAAg");
	this.shape_148.setTransform(530.8,188);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#8D8D54").s().p("AANA3QgGgHAAgMIAAgPQAAgHgCgEQgDgDgEgBIAAgJQAEAAADgDQACgDAAgGIAAgXQAAgFgCgDQgCgDgFgBIAAgBIAAgJIACAAIASABQAGABAFACIABABIABABQAHAEAEAGQADAGAAAIQAAAHgCAGQgDAGgEAEIgBAAIgDADIgFACIgEABIgGABIABAAIACAAIAIACIAGADIABAAIAAABQAFACACAFQADAEAAAEIAAASIAAACIACABIAAAAIABAAIAAgBIABgBIABgBIACgBIABAAIABgBIAAABIABAAIACABIABACIAAABIAAAAIgBAEIgCAEIgDAEIgFADIgHADIgIABQgMAAgHgGgAgJA7IgnAAIgCAAIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIADgBIABgBIABAAIACgCIABgEIAAhXIgBgEIgCgCIgBAAIgBgBIgDgCIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgBAEAAIACAAIAnAAIAABmIABAFIAEACIABAAIABAAIACACIABADQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABIgGABg");
	this.shape_149.setTransform(519.4,188.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#8D8D54").s().p("AAKA8IAAgKQAKgBAGgFQAHgGAEgKIAAgBIABgBIACgDIABgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAIABAFIAAAfgAgkA8IgDAAIgEgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIABgDIAEgCIABgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgBgBIgEgBIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQABgBADAAIADAAIAmAAIAAB3gAAWAWIgBgEQgCgHgDgCQgDgEgDgBIAAgKQAFgBACgDQADgDABgFQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAHIAAAgIgBAFQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgDgBgAAmgXIgBgCIgBgBIAAAAQgEgLgGgFQgHgGgJgBIAAgKIAjAAIAAAfIgBAEIgDABIgDAAg");
	this.shape_150.setTransform(502.7,188);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#8D8D54").s().p("AADAyQAGgBACgDQACgDAAgIIAAhEQAAgIgDgDQgCgEgFgBIAAgKIAJAAIAHACIADACIADABQAOAIAHANQAHAOAAATQAAATgIAPQgHAOgOAIIgDABIgDABQgDABgDAAIgJABgAgrA8IgCAAIgFgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIABAAIACgCIABgEIAAhXIgBgDIgCgDIgBAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQABgBAEAAIACAAIAoAAIAAB3g");
	this.shape_151.setTransform(491.7,188);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#8D8D54").s().p("AADA1QAFgCACgDQABgDABgHIAAhOQgBgEgBgEQgCgDgFgBIAAAAIAAgJQAXABAOARQAOASAAAZQAAAbgOARQgNARgYACgAgnAsQgNgRAAgbQgBgZAOgSQAOgRAWgBIAAAJQgEACgCACQgCAEAAAEIAABOQAAAHACADQACADAEACIAAAKQgWgCgOgRg");
	this.shape_152.setTransform(475,188);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#8D8D54").s().p("AgDA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIACAAIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIAABnIABAEIADACIABAAIABAAIADACIACADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABgAADAEQAHgBACgCQABgDAAgGIAAgcQAAgHgBgDQgDgDgGgBIAAgJIACAAIADAAIABAAIAIAAIAGABQANADAJAKQAHAJAAAOQAAAOgIAJQgIAKgOACIgJABIgKAAg");
	this.shape_153.setTransform(463.7,188);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#8D8D54").s().p("AAUA8IgnAAIgCAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgDIADgCIABgBIACAAIACgCIAAgEIAAhXIAAgDIgCgDIgCAAIgBgBIgDgBIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBADAAIACAAIAnAAIACAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgDABIgBABIgBAAIgDADIAAADIAABXIAAAEIADACIABAAIABABIADACIABADQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgFABg");
	this.shape_154.setTransform(454.2,188);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#8D8D54").s().p("AATA8IgmAAIgCAAIgHgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIACgCIACAAIABAAIADgCIABgEIAAhnIAmAAIAABnIACAEIADACIABAAIABAAIAEACIABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgFABgAApgSIgCgFIgBgFQgBgHgDgGQgDgEgFgDIAAgLIAYAAIAAAkQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAgvgSQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgkIAXAAIAAALQgFADgCAEQgDAGgCAHIAAAFQAAABgBABQAAABAAAAQAAABAAAAQgBABAAAAIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_155.setTransform(445.3,188);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8D8D54").s().p("AgxABIAgAAIAAkJIAjAAIAAEJIAgAAIgyEIg");
	this.shape_156.setTransform(511.9,244.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]},95).to({state:[]},192).to({state:[]},622).wait(2386));

	// textbox
	this.instance_20 = new lib.intro3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(866,267.6,1,1,0,0,0,424.1,239.3);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.instance_21 = new lib.funcionEjemplo();
	this.instance_21.parent = this;
	this.instance_21.setTransform(913.7,346,1,1,0,0,0,40.5,91);

	this.text_1 = new cjs.Text("Primer número: ", "15px 'Arial'");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 105;
	this.text_1.parent = this;
	this.text_1.setTransform(841.6,99.6);

	this.txtboxNumero = new lib.an_TextInput({'id': 'txtboxNumero', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero.setTransform(1012.8,107.4,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},23).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},216).to({state:[{t:this.txtboxNumero},{t:this.text_1}]},620).to({state:[]},2).wait(2386));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(23).to({_off:false},0).wait(1).to({regY:239.4,y:267.7,alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1).to({regY:239.3,y:267.6},0).wait(1).to({regY:239.4,y:267.7,alpha:0.957},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(3224));

	// Bases
	this.instance_22 = new lib.intro2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(286,347.8,1,1,0,0,0,225,399.8);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.instance_23 = new lib.soldier3();
	this.instance_23.parent = this;
	this.instance_23.setTransform(47,-52,0.75,0.75);

	this.instance_24 = new lib.Symbol1_2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(698.9,591.3,1,1,0,0,0,633.9,81.3);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.instance_25 = new lib.base();
	this.instance_25.parent = this;
	this.instance_25.setTransform(1128,510,0.2,0.2);

	this.instance_26 = new lib.base();
	this.instance_26.parent = this;
	this.instance_26.setTransform(65,510,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},23).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},192).to({state:[{t:this.instance_24}]},48).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_26},{t:this.instance_25}]},1).to({state:[]},2985).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(23).to({_off:false},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},192).wait(3056));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(287).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(11).to({_off:true},1).wait(2986));

	// Background
	this.instance_27 = new lib.intro1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(678.5,341.4,1,1,0,0,0,610.5,399.8);

	this.instance_28 = new lib.background();
	this.instance_28.parent = this;
	this.instance_28.setTransform(777.9,337.1,1,1,0,0,0,-1.9,42.4);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.mc_bg = new lib.background();
	this.mc_bg.name = "mc_bg";
	this.mc_bg.parent = this;
	this.mc_bg.setTransform(777.9,337.1,1,1,0,0,0,-1.9,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).to({state:[{t:this.instance_28}]},264).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.mc_bg}]},1).to({state:[]},2985).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({regY:399.7,y:341.3,alpha:0.955},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(3272));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(287).to({_off:false},0).wait(1).to({regX:-141.5,regY:44,x:638.3,y:338.7,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(11).to({_off:true},1).wait(2986));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(751,325.6,1222.5,799.5);
// library properties:
lib.properties = {
	id: '02EB32D4EF9B4143AEB9617926898AAC',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/functions_atlas_.png", id:"functions_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
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
an.compositions['02EB32D4EF9B4143AEB9617926898AAC'] = {
	getStage: function() { return exportRoot.getStage(); },
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;