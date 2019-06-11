(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dragAndDrop_atlas_", frames: [[1368,0,225,300],[1595,0,225,300],[1595,302,225,300],[0,0,1366,768],[1368,302,225,300],[1368,604,225,300]]}
];


// symbols:



(lib.boolCard = function() {
	this.spriteSheet = ss["dragAndDrop_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.doubleCard = function() {
	this.spriteSheet = ss["dragAndDrop_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.floatCard = function() {
	this.spriteSheet = ss["dragAndDrop_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.instructionsBG2 = function() {
	this.spriteSheet = ss["dragAndDrop_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.intCard = function() {
	this.spriteSheet = ss["dragAndDrop_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.stringCard = function() {
	this.spriteSheet = ss["dragAndDrop_atlas_"];
	this.gotoAndStop(5);
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


(lib.mc_dot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AkDkhID9EZIEUE0AkNEiIEHkqIEAkj");
	this.shape.setTransform(27,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_dot2, new cjs.Rectangle(-1,-1,56,62), null);


(lib.mc_box2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("ApcmKIS5AAIAAMVIy5AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ApcGLIAAsVIS5AAIAAMVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_box2, new cjs.Rectangle(-61.5,-40.5,123,81), null);


(lib.correctSquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3,1,1).p("EhcygWYMC5lAAAMAAAAsxMi5lAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.correctSquare, new cjs.Rectangle(-595.4,-144.8,1190.8,289.6), null);


(lib.BotonPlayPause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.7,1,1).p("AnakrIO1AAQCCAAAACCIAAFTQAACCiCAAIu1AAQiCAAAAiCIAAlTQAAiCCCAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31,123,62);


(lib.mc_stringFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mc_box2();
	this.box.name = "box";
	this.box.parent = this;
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_1
	this.instance = new lib.stringCard();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_stringFull, new cjs.Rectangle(-112.5,-150,225,300), null);


(lib.mc_stringEmpty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E8E8E").s().p("AARAoQgEAAAAgGIgChBQgBgIAFABIANAAQAEgBAAAIIgCBBQgBAGgEAAgAgYAoQgEAAgBgGIgChBQAAgIAEABIANAAQAFgBgBAIIgCBBQAAAGgEAAg");
	this.shape.setTransform(63.6,46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E8E8E").s().p("AAjBBQgFAAAAgGIAAhHQAAgXgIgHQgIgGgMgBQgPAAgIAKQgIAJgBAYIAABBQAAAGgFAAIgLAAQgEAAAAgGIAAh0QgBgFAGAAIAKAAQAFAAAAAFIAAAKQAJgIAJgFQAJgEAMAAQAXAAAKANQAJAMAAAVIAABNQAAAGgFAAg");
	this.shape_1.setTransform(51.7,53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E8E8E").s().p("AAjBaQgFAAAAgGIAAhIQAAgWgIgHQgIgGgMgBQgPAAgIAKQgIAJAAAXIAABCQAAAGgGAAIgKAAQgGAAAAgGIAAioQAAgFAGAAIAKAAQAGAAAAAFIAAA3IAAAHIAAAAQAIgIAJgFQAJgEANAAQAWAAAKANQAKAMAAAUIAABOQgBAGgFAAg");
	this.shape_2.setTransform(37.9,51.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E8E8E").s().p("AgsAwQgPgUAAgcQAAgcAPgTQAQgSAcAAQAdAAAPASQAQATAAAcQAAAcgQAUQgPASgdAAQgcAAgQgSgAgaglQgKAMAAAZQAAAZAKANQAKAMAQAAQARAAAKgMQAKgNAAgZQAAgZgKgMQgKgMgRgBQgQABgKAMg");
	this.shape_3.setTransform(24,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AghBSQgFgDACgFIAEgIQACgGAHAEQAKAGAJAAQALAAAEgIQADgIAAgOIAAh6QAAgGAGAAIAMAAQAGAAAAAGIAAB3QAAAYgIAOQgHAOgbAAQgPAAgOgHg");
	this.shape_4.setTransform(11.3,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E8E8E").s().p("AARAoQgEAAAAgGIgChBQgBgIAFABIANAAQAEgBAAAIIgCBBQgBAGgEAAgAgYAoQgEAAgBgGIgChBQAAgIAEABIANAAQAFgBgBAIIgCBBQAAAGgEAAg");
	this.shape_5.setTransform(1.9,46.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E8E8E").s().p("AgeBVQgLgEgEgGQgEgDAEgEIAGgGQADgCAFAEQAGAFAHADQAFADAOgBQARABAHgIQAIgHAAgWIAAgHIAAgIQgHAJgIAFQgJAEgNAAQgYABgNgVQgMgTAAgaQAAgaAMgUQANgTAYAAQANgBAJAFQAIAEAHAJIAAgKQAAgFAFgBIAKAAQAHABAAAFIAAB6QgBAYgKANQgLAOggAAQgUAAgLgGgAgXg8QgIAOAAAWQAAAXAIANQAHAOASAAQANAAAJgJQAJgJAAgRIAAgcQAAgTgJgJQgJgJgNAAQgSAAgHAOg");
	this.shape_6.setTransform(-18.7,56.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E8E8E").s().p("AAkBBQgGAAAAgGIAAhHQAAgXgIgHQgIgGgMgBQgPAAgIAKQgJAJAAAYIAABBQABAGgGAAIgKAAQgGAAAAgGIAAh0QABgFAFAAIAKAAQAGAAgBAFIAAAKQAIgIAKgFQAJgEANAAQAWAAAKANQAKAMAAAVIAABNQAAAGgGAAg");
	this.shape_7.setTransform(-32.1,53.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8E8E").s().p("AgEBWQgGABAAgGIAAh0QAAgFAGAAIAJAAQAGAAAAAFIAAB0QAAAGgGgBgAgEhAQgGAAAAgFIAAgLQAAgFAGAAIAJAAQAGAAAAAFIAAALQAAAFgGAAg");
	this.shape_8.setTransform(-41.8,51.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E8E8E").s().p("AgcBBQgFAAAAgGIAAh0QAAgFAFAAIAKAAQAGAAAAAFIAAAPQAGgLAHgFQAIgGAMAAIALABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABIgDAKQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBgBIgIgBQgOAAgJANQgJAOAAAVIAAA8QAAAGgGAAg");
	this.shape_9.setTransform(-48.3,53.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E8E8E").s().p("AgMBKQgHgJAAgRIAAhOIgPAAQgFAAAAgFIAAgHQAAgEAFAAIAPAAIAAgLIABgFIAJgQQACgEABAAIAFAAQACAAAAAEIAAAgIAaAAQAGAAAAAEIAAAHQAAAFgGAAIgaAAIAABMQAAANAEAEQAEAEAFAAQAEAAAGgCQAGgDACgCQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAEAKQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgFADgJACQgJADgJAAQgMAAgGgJg");
	this.shape_10.setTransform(-58.1,52);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E8E8E").s().p("AgdA9QgNgGgEgDQgEgDACgDIAGgIQADgEAFAEQAHAGAJADQAJADAKAAQAHAAAFgBQAFgCAEgFQAEgEAAgHQAAgFgCgEQgBgEgEgDIgIgDIgMgEIgQgEQgGgCgGgEQgGgEgFgGQgEgGAAgMQAAgMAHgIQAHgJALgDQALgDAJAAQAPAAAJAEQAKACAGAGQAEADgDADIgFAHQgDAEgFgEIgNgGQgIgDgGAAQgHAAgGACQgFACgDAEQgEAEAAAFIABAJQACACADAEIALAEIASAFIAPAFQAJAEAFAEQAEAFACAGQACAGAAAHQAAANgIAJQgHAJgKADQgKADgNAAQgRAAgNgFg");
	this.shape_11.setTransform(-68.3,53.7);

	this.dot = new lib.mc_dot2();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-0.8,-1.3,1,1,0,0,0,27,30);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8E8E8E").ss(1,1,1).p("Av0ATIgCzHQAAg8BAAAIdtAAQBAAAAAA8IgCTHQABAFAAAFQABAFAAAFIAASKQgBAkgSAQQgPAMgYAAI95AAQgXAAgOgLQgUgPgBgmIAAyKQAAgFABgFQAAgFABgFQAJgrAvAAId5AAQAvAAAJAr");
	this.shape_12.setTransform(-0.6,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Au7KFQgYAAgOgLQgUgPgBgmIAAyJIABgKIABgKQAJgsAwAAId4AAQAuAAAKAsIACAKIAAAKIAASJQgBAkgSAQQgPAMgYAAg");
	this.shape_13.setTransform(-0.6,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_stringEmpty, new cjs.Rectangle(-103.1,-127.2,205,255), null);


(lib.mc_intFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box = new lib.mc_box2();
	this.box.name = "box";
	this.box.parent = this;
	this.box.alpha = 0.012;

	this.instance = new lib.intCard();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_intFull, new cjs.Rectangle(-112.5,-150,225,300), null);


(lib.mc_intEmpty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E8E8E").s().p("AgqBMQgOgPAAgYQAAgRALgMQALgLAKgDIAAAAQgLgEgIgKQgIgJAAgQQAAgUAOgMQAPgMAWAAQAXAAAPAMQAOAMAAAUQAAAQgIAKQgJAJgLAEIAAAAQAKADALALQAMAMAAARQAAAYgOAPQgOAOgdAAQgcAAgOgOgAgXAOQgJAKAAANQAAARAJAJQAIAJAPAAQAQAAAIgJQAJgJAAgRQAAgNgJgKQgJgLgPAAQgOAAgJALgAgWg/QgGAIAAAKQAAAMAHAJQAHAIAOAAQAPAAAHgIQAHgJAAgMQAAgKgGgIQgHgIgQAAQgPAAgHAIg");
	this.shape.setTransform(27.4,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E8E8E").s().p("AgpBEQgPgXAAgoQAAg1ATgVQATgUAaAAQAPAAAJADQAJAEAHAGQAFAFgDADIgGAHQgDAEgGgFQgEgEgGgCQgHgDgMAAQgPAAgMAQQgMARAAAjQAFgIALgFQAKgGAPAAQATAAAPANQAPANAAAaQAAAbgOARQgOAQgcAAQgcAAgOgWgAgUAFQgJAKAAARQAAAPAIANQAIAMAOAAQAPAAAJgLQAIgMAAgSQAAgRgIgJQgJgIgMAAQgPAAgJAIg");
	this.shape_1.setTransform(13.8,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E8E8E").s().p("AASBYQgGAAAAgGIAAglIhBAAQgGAAAAgGIAAgLQAAgDADgFIBChmQADgFAEAAIALAAQAGAAAAAGIAABqIAUAAQAGAAAAAFIAAAJQAAAGgFAAIgVAAIAAAlQAAAGgGAAgAglAZIAxAAIAAhFIAAgIg");
	this.shape_2.setTransform(0.3,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E8E8E").s().p("AgMBKQgHgJAAgRIAAhOIgPAAQgFAAAAgFIAAgHQAAgEAFAAIAPAAIAAgLIABgFIAJgQQACgEABAAIAFAAQACAAAAAEIAAAgIAaAAQAGAAAAAEIAAAHQAAAFgGAAIgaAAIAABMQAAANAEAEQAEAEAFAAQAEAAAGgCQAGgDACgCQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAEAKQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgFADgJACQgJADgJAAQgMAAgGgJg");
	this.shape_3.setTransform(-19.5,50.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AAjBBQgFAAAAgGIAAhHQAAgXgIgHQgIgGgMgBQgPAAgIAKQgJAJABAYIAABBQAAAGgGAAIgKAAQgFAAgBgGIAAh0QAAgFAGAAIAKAAQAGAAAAAFIAAAKQAHgIAKgFQAJgEAMAAQAXAAAKANQAKAMAAAVIAABNQgBAGgFAAg");
	this.shape_4.setTransform(-31,52.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E8E8E").s().p("AgEBWQgGABAAgGIAAh0QAAgFAGgBIAJAAQAGABAAAFIAAB0QAAAGgGgBgAgEhAQgGAAAAgFIAAgLQAAgFAGgBIAJAAQAGABAAAFIAAALQAAAFgGAAg");
	this.shape_5.setTransform(-40.7,50.1);

	this.dot = new lib.mc_dot2();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-2.2,-2.7,1,1,0,0,0,27,30);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8E8E8E").ss(1,1,1).p("Av0ATIgCzHQAAg8BAAAIdtAAQBAAAAAA8IgCTHQABAFABAFQAAAEAAAGIAASKQgBAkgSAQQgOAMgZAAI94AAQgYAAgOgLQgUgPgBgmIAAyKQAAgGABgEQABgFAAgFQAKgrAvAAId4AAQAvAAAJAr");
	this.shape_6.setTransform(-1.9,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Au7KFQgYAAgOgLQgUgQgBglIAAyJIABgKIACgKQAIgsAwAAId4AAQAvAAAJAsIACAKIAAAKIAASJQgBAkgSAQQgOAMgZAAg");
	this.shape_7.setTransform(-1.9,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_intEmpty, new cjs.Rectangle(-104.4,-128.6,205,255), null);


(lib.mc_floatFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box = new lib.mc_box2();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-1.3,-1.3);
	this.box.alpha = 0.012;

	this.instance = new lib.floatCard();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_floatFull, new cjs.Rectangle(-112.5,-150,225,300), null);


(lib.mc_floatEmpty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E8E8E").s().p("AgwBYQgHABAAgGIAAgGQAAgFAEgEIAwgwQAUgUAHgMQAGgLAAgQQAAgMgHgJQgIgJgPAAQgNAAgJAGQgJAIgEAQQgBAHgGgCIgJgDQgEgBACgJQADgQAOgMQANgMAXAAQAcAAANANQANAPAAAVQAAAUgLAPQgLAOgTATIgnAmIAKAAIBBAAQAHABAAAFIAAAJQAAAGgHgBg");
	this.shape.setTransform(42.8,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E8E8E").s().p("AANBYQgGAAAAgGIAAiFIAAgHQgEAFgGAFIgNAHQgGACgBgEIgEgJQgCgDAFgCQAJgDAIgJIANgNQADgFAEAAIAKAAQAGAAAAAGIAACjQAAAGgGAAg");
	this.shape_1.setTransform(30.9,51.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E8E8E").s().p("AgGANQgFAAAAgGIAAgOQAAgFAFAAIANAAQAFAAAAAFIAAAOQAAAGgFAAg");
	this.shape_2.setTransform(22.3,58.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E8E8E").s().p("AgiBQQgMgIgGgHQgEgGADgDIAIgHQAEgEAFAHIAMALQAIAIAOgBQAQABAJgLQAJgLAAgSQAAgQgHgKQgHgJgOAAQgIAAgFACQgGACgGAFQgEADgHAAIgIAAQgHABAAgGIAAhVQAAgGAFAAIBUAAQAFAAAAAGIAAAJQAAAGgFAAIhDAAIAAAwIgBAHIABAAQAGgGAKgCQAJgCAHAAQAWAAANAPQAOAOAAAZQAAAagQAPQgQAQgagBQgUABgMgJg");
	this.shape_3.setTransform(12.1,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AgMBKQgHgJAAgRIAAhOIgPAAQgFAAAAgFIAAgHQAAgEAFAAIAPAAIAAgLIABgFIAJgQQACgEABAAIAFAAQACAAAAAEIAAAgIAaAAQAGAAAAAEIAAAHQAAAFgGAAIgaAAIAABMQAAANAEAEQAEAEAFAAQAEAAAGgCQAGgDACgCQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAEAKQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQgFADgJACQgJADgJAAQgMAAgGgJg");
	this.shape_4.setTransform(-8,52);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E8E8E").s().p("AgoA5QgKgKAAgRQAAgWAUgJQAUgKAogCIAAgIQAAgLgFgJQgGgIgPgBQgJAAgGACQgGADgEADQgFACgFAGQgDADgDgDIgGgHQgDgDAFgFQAGgGAGgDQAGgDAJgCQAKgCAIAAQAZAAALANQALANAAAXIAABKQAAAGgFAAIgMAAQgEAAAAgGIAAgGQgKAIgJADQgJADgLAAQgUAAgLgJgAgEAGQgLADgHAGQgGAHAAAJQAAAHADAEQADAFAGACIAMAAQAIABAIgCQAJgCAJgIIAAgkQgZACgJACg");
	this.shape_5.setTransform(-19.4,53.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E8E8E").s().p("AgsAwQgPgUAAgcQAAgcAPgTQAQgSAcAAQAdAAAPASQAQATAAAcQAAAcgQAUQgPASgdAAQgcAAgQgSgAgaglQgKAMAAAZQAAAZAKANQAKAMAQAAQARAAAKgMQAKgNAAgZQAAgZgKgMQgKgMgRgBQgQABgKAMg");
	this.shape_6.setTransform(-32.6,53.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E8E8E").s().p("AgEBbQgGAAAAgFIAAiYIABgEIAJgQQABgEACAAIAEAAQAEAAAAAEIAACsQAAAFgGAAg");
	this.shape_7.setTransform(-42.4,50.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8E8E").s().p("AgQBbQgGAAAAgFIAAhqIgNAAQgFAAAAgEIAAgIQAAgEAFAAIANAAIAAgSQAAgUALgIQALgIANAAIAOABIAMAEQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgEAJQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBgBIgHgCIgIgBQgKAAgFAFQgDAFAAANIAAAPIAVAAQAGAAAAAEIAAAIQAAAEgGAAIgVAAIAABqQAAAFgGAAg");
	this.shape_8.setTransform(-48.5,50.9);

	this.dot = new lib.mc_dot2();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-0.8,-1.3,1,1,0,0,0,27,30);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8E8E8E").ss(1,1,1).p("Av0ATIgCzHQAAg8BAAAIdtAAQBAAAAAA8IgCTHQABAFAAAFQABAFAAAFIAASKQgBAkgSAQQgPAMgYAAI95AAQgXAAgOgLQgUgPgBgmIAAyKQAAgFABgFQAAgFABgFQAJgrAvAAId5AAQAvAAAJAr");
	this.shape_9.setTransform(-0.6,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Au7KFQgYAAgOgLQgUgPgBgmIAAyJIABgKIABgKQAJgsAwAAId4AAQAuAAAKAsIACAKIAAAKIAASJQgBAkgSAQQgPAMgYAAg");
	this.shape_10.setTransform(-0.6,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_floatEmpty, new cjs.Rectangle(-103.1,-127.2,205,255), null);


(lib.mc_doubleFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box = new lib.mc_box2();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-1.3,-1.3);
	this.box.alpha = 0.012;

	this.instance = new lib.doubleCard();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_doubleFull, new cjs.Rectangle(-112.5,-150,225,300), null);


(lib.mc_doubleEmpty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E8E8E").s().p("AgiBTQgMgHgHgHQgEgGADgDIAGgIQAEgFAGAHQAGAIAKAFQAJAFAKAAQATAAAJgKQAIgKAAgRQAAgRgLgIQgLgIgNAAIgLAAQgGAAAAgDIAAgJQAAgFAGAAIAJAAQAMAAAKgIQAJgJAAgPQAAgLgIgGQgHgHgNAAQgNAAgIAGQgJAGgDAEQgFAGgEgEIgHgHQgDgDAGgHQAGgIAMgGQAMgFAQAAQAZAAANAMQANAMAAATQAAAQgJAKQgKAKgLADIAAAAQANACAMALQAMANAAARQAAAZgPAPQgOAOgfAAQgTAAgMgHg");
	this.shape.setTransform(71.8,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E8E8E").s().p("AgwBYQgHABAAgGIAAgGQAAgFAEgEIAwgwQAUgUAHgMQAGgLAAgQQAAgMgHgJQgIgJgPAAQgNAAgJAGQgJAIgEAQQgBAHgGgCIgJgDQgEgBACgJQADgQAOgMQANgMAXAAQAcAAANANQANAPAAAVQAAAUgLAPQgLAOgTATIgnAmIAKAAIBBAAQAHABAAAFIAAAJQAAAGgHgBg");
	this.shape_1.setTransform(58,51.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E8E8E").s().p("AgsBDQgLgYAAgrQAAgqALgYQAMgXAgAAQAhAAAMAXQALAYAAAqQAAArgLAYQgMAXghAAQggAAgMgXgAgbg1QgGAUAAAhQAAAiAGAUQAGATAVAAQAWAAAGgTQAGgUAAgiQAAghgGgUQgGgTgWAAQgVAAgGATg");
	this.shape_2.setTransform(44.5,51.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E8E8E").s().p("AgsBDQgLgYAAgrQAAgqALgYQAMgXAgAAQAhAAAMAXQALAYAAAqQAAArgLAYQgMAXghAAQggAAgMgXgAgbg1QgGAUAAAhQAAAiAGAUQAGATAVAAQAWAAAGgTQAGgUAAgiQAAghgGgUQgGgTgWAAQgVAAgGATg");
	this.shape_3.setTransform(30.9,51.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AgGANQgFAAAAgGIAAgOQAAgFAFAAIANAAQAFAAAAAFIAAAOQAAAGgFAAg");
	this.shape_4.setTransform(20.5,58.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E8E8E").s().p("AgfBXQgJgEgHgHQgFgEADgDIAGgHQADgEAGAFIAKAGQAHADAMAAQAPAAAMgQQAMgRAAgjQgFAIgLAGQgKAFgPAAQgTAAgPgNQgPgNAAgbQAAgaAOgRQAOgQAcAAQAcAAAOAWQAPAXAAAoQAAA1gTAVQgTAUgaAAQgPAAgJgDgAgYg8QgIAMAAASQAAARAIAJQAJAIAMAAQAPAAAJgJQAJgJAAgRQAAgPgIgNQgIgMgOAAQgPAAgJALg");
	this.shape_5.setTransform(10,51.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E8E8E").s().p("AgpAwQgOgSAAgeQAAgdAPgTQAPgRAbAAQAYAAAPAQQAPAQAAAkQAAAFgFAAIhUAAQACAYALAJQAKAJANAAQAOAAAIgEQAHgGAEgEQAEgFADADIAIAGQACADgCAEQgDAEgLAHQgKAIgYAAQgdAAgPgSgAgVgoQgKAJgCAYIBEAAQgBgRgIgNQgIgNgQAAQgOAAgJAKg");
	this.shape_6.setTransform(-11.9,53.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E8E8E").s().p("AgEBbQgGAAAAgFIAAiYIABgEIAJgQQABgEACAAIAEAAQAEAAAAAEIAACsQAAAFgGAAg");
	this.shape_7.setTransform(-21.4,50.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8E8E").s().p("AgRBWQgIgEgHgIIAAAJQAAAGgFAAIgLAAQgFAAAAgGIAAioQAAgFAFAAIALAAQAFAAAAAFIAAA2IAAAIIAAAAQAHgIAIgEQAJgFANAAQAYAAANAUQAMATAAAaQAAAagMAUQgNAUgYAAQgNAAgJgFgAgXgPQgJAIAAASIAAAcQAAATAJAIQAJAJANAAQARAAAIgNQAIgOAAgXQAAgXgIgMQgIgOgRgBQgNAAgJAKg");
	this.shape_8.setTransform(-30.7,51.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E8E8E").s().p("AgoA1QgKgNAAgVIAAhOQAAgFAFAAIALAAQAFAAAAAFIAABHQAAAZAIAGQAIAGAMAAQAOAAAJgJQAIgKAAgWIAAhDQAAgFAFAAIALAAQAFAAAAAFIAAB0QAAAGgFAAIgLAAQgFAAAAgGIAAgJQgIAJgJAEQgKAEgMAAQgVAAgKgMg");
	this.shape_9.setTransform(-44.7,53.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E8E8E").s().p("AgsAwQgPgUAAgcQAAgcAPgTQAQgSAcAAQAdAAAPASQAQATAAAcQAAAcgQAUQgPASgdAAQgcAAgQgSgAgaglQgKAMAAAZQAAAZAKANQAKAMAQAAQARAAAKgMQAKgNAAgZQAAgZgKgMQgKgMgRgBQgQABgKAMg");
	this.shape_10.setTransform(-58.5,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E8E8E").s().p("AgpBHQgMgUAAgaQAAgaAMgTQANgUAZAAQANAAAJAFQAIAEAHAIIABAAIgBgIIAAg2QAAgFAFAAIAKAAQAFAAABAFIAACoQgBAGgFAAIgLAAQgEAAAAgGIAAgJQgHAIgIAEQgJAFgNAAQgZAAgNgUgAgXgKQgIAMAAAXQAAAXAIAOQAIANASAAQANAAAJgJQAJgIAAgTIAAgcQAAgSgJgIQgJgKgNAAQgSABgIAOg");
	this.shape_11.setTransform(-72.7,51.2);

	this.dot = new lib.mc_dot2();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-0.8,-1.3,1,1,0,0,0,27,30);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8E8E8E").ss(1,1,1).p("Av0ATIgCzHQAAg8BAAAIdtAAQBAAAAAA8IgCTHQABAFAAAFQABAFAAAFIAASKQgBAkgSAQQgPAMgYAAI95AAQgXAAgOgLQgUgPgBgmIAAyKQAAgFABgFQAAgFABgFQAJgrAvAAId5AAQAvAAAJAr");
	this.shape_12.setTransform(-0.6,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Au7KFQgYAAgOgLQgUgPgBgmIAAyJIABgKIABgKQAJgsAwAAId4AAQAuAAAKAsIACAKIAAAKIAASJQgBAkgSAQQgPAMgYAAg");
	this.shape_13.setTransform(-0.6,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_doubleEmpty, new cjs.Rectangle(-103.1,-127.2,205,255), null);


(lib.mc_boolFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box = new lib.mc_box2();
	this.box.name = "box";
	this.box.parent = this;
	this.box.alpha = 0.012;

	this.instance = new lib.boolCard();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_boolFull, new cjs.Rectangle(-112.5,-150,225,300), null);


(lib.mc_boolEmpty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E8E8E").s().p("AgpAwQgOgSAAgeQAAgdAPgTQAPgRAbAAQAYAAAPAQQAPAQAAAkQAAAFgFAAIhUAAQACAYALAJQAKAJANAAQAOAAAIgEQAHgGAEgEQAEgFADADIAIAGQACADgCAEQgDAEgLAHQgKAIgYAAQgdAAgPgSgAgVgoQgKAJgCAYIBEAAQgBgRgIgNQgIgNgQAAQgOAAgJAKg");
	this.shape.setTransform(72.3,53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E8E8E").s().p("AgdA9QgNgGgEgDQgEgDACgDIAGgIQADgEAFAEQAHAGAJADQAJADAKAAQAHAAAFgBQAFgCAEgFQAEgEAAgHQAAgFgCgEQgBgEgEgDIgIgDIgMgEIgQgEQgGgCgGgEQgGgEgFgGQgEgGAAgMQAAgMAHgIQAHgJALgDQALgDAJAAQAPAAAJAEQAKACAGAGQAEADgDADIgFAHQgDAEgFgEIgNgGQgIgDgGAAQgHAAgGACQgFACgDAEQgEAEAAAFIABAJQACACADAEIALAEIASAFIAPAFQAJAEAFAEQAEAFACAGQACAGAAAHQAAANgIAJQgHAJgKADQgKADgNAAQgRAAgNgFg");
	this.shape_1.setTransform(60,53.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E8E8E").s().p("AgEBbQgGAAAAgFIAAiYIABgEIAJgQQABgEACAAIAEAAQAEAAAAAEIAACsQAAAFgGAAg");
	this.shape_2.setTransform(51.3,50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E8E8E").s().p("AgoA5QgKgKAAgRQAAgWAUgJQAUgKAogCIAAgIQAAgLgFgJQgGgIgPgBQgJAAgGACQgGADgEADQgFACgFAGQgDADgDgDIgGgHQgDgDAFgFQAGgGAGgDQAGgDAJgCQAKgCAIAAQAZAAALANQALANAAAXIAABKQAAAGgFAAIgMAAQgEAAAAgGIAAgGQgKAIgJADQgJADgLAAQgUAAgLgJgAgEAGQgLADgHAGQgGAHAAAJQAAAHADAEQADAFAGACIAMAAQAIABAIgCQAJgCAJgIIAAgkQgZACgJACg");
	this.shape_3.setTransform(41.6,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E8E").s().p("AgQBbQgGAAAAgFIAAhqIgNAAQgFAAAAgEIAAgIQAAgEAFAAIANAAIAAgSQAAgUALgIQALgIANAAIAOABIAMAEQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgEAJQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBgBIgHgCIgIgBQgKAAgFAFQgDAFAAANIAAAPIAVAAQAGAAAAAEIAAAIQAAAEgGAAIgVAAIAABqQAAAFgGAAg");
	this.shape_4.setTransform(32.1,50.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E8E8E").s().p("Ag+AcQgFAAAAgEIAAgHQAAgDAFAAIB9AAQAFAAAAADIAAAHQAAAEgFAAgAg+gMQgFAAAAgFIAAgGQAAgEAFAAIB9AAQAFAAAAAEIAAAGQAAAFgFAAg");
	this.shape_5.setTransform(11.3,51.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E8E8E").s().p("AgRBWQgIgEgHgIIAAAJQAAAGgFAAIgLAAQgFAAAAgGIAAioQAAgFAFAAIALAAQAFAAAAAFIAAA2IAAAIIAAAAQAHgIAIgEQAJgFANAAQAYAAANAUQAMATAAAaQAAAagMAUQgNAUgYAAQgNAAgJgFgAgXgPQgJAIAAASIAAAcQAAATAJAIQAJAJANAAQARAAAIgNQAIgOAAgXQAAgXgIgMQgIgOgRgBQgNAAgJAKg");
	this.shape_6.setTransform(-11.4,51.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E8E8E").s().p("AgEBbQgGAAAAgFIAAiYIABgEIAJgQQABgEACAAIAEAAQAEAAAAAEIAACsQAAAFgGAAg");
	this.shape_7.setTransform(-29.7,50.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E8E8E").s().p("AgsAwQgPgUAAgcQAAgcAPgTQAQgSAcAAQAdAAAPASQAQATAAAcQAAAcgQAUQgPASgdAAQgcAAgQgSgAgaglQgKAMAAAZQAAAZAKANQAKAMAQAAQARAAAKgMQAKgNAAgZQAAgZgKgMQgKgMgRgBQgQABgKAMg");
	this.shape_8.setTransform(-39.5,53.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E8E8E").s().p("AgsAwQgPgUAAgcQAAgcAPgTQAQgSAcAAQAdAAAPASQAQATAAAcQAAAcgQAUQgPASgdAAQgcAAgQgSgAgaglQgKAMAAAZQAAAZAKANQAKAMAQAAQARAAAKgMQAKgNAAgZQAAgZgKgMQgKgMgRgBQgQABgKAMg");
	this.shape_9.setTransform(-53.5,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E8E8E").s().p("AgRBWQgIgEgHgIIAAAJQAAAGgFAAIgLAAQgFAAAAgGIAAioQAAgFAFAAIALAAQAFAAAAAFIAAA2IAAAIIAAAAQAHgIAIgEQAJgFANAAQAYAAANAUQAMATAAAaQAAAagMAUQgNAUgYAAQgNAAgJgFgAgXgPQgJAIAAASIAAAcQAAATAJAIQAJAJANAAQARAAAIgNQAIgOAAgXQAAgXgIgMQgIgOgRgBQgNAAgJAKg");
	this.shape_10.setTransform(-67,51.2);

	this.dot = new lib.mc_dot2();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-0.8,-1.3,1,1,0,0,0,27,30);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8E8E8E").ss(1,1,1).p("Av0ATIgCzHQAAg8BAAAIdtAAQBAAAAAA8IgCTHQABAFAAAFQABAFAAAFIAASKQgBAkgSAQQgPAMgYAAI95AAQgXAAgOgLQgUgPgBgmIAAyKQAAgFABgFQAAgFABgFQAJgrAvAAId5AAQAvAAAJAr");
	this.shape_11.setTransform(-0.6,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Au7KFQgYAAgOgLQgUgPgBgmIAAyJIABgKIABgKQAJgsAwAAId4AAQAuAAAKAsIACAKIAAAKIAASJQgBAkgSAQQgPAMgYAAg");
	this.shape_12.setTransform(-0.6,62.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_boolEmpty, new cjs.Rectangle(-103.1,-127.2,205,255), null);


// stage content:
(lib.dragAndDrop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var root = this;
		var isPlaying = false;
		
		
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
				root.txtControl.color = "#FFF";		
			}else{
				root.txtControl.color = "#FFF";
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
		/*var my_bounds1 = this.mc_find1.getTransformedBounds()
		var my_bounds2 = this.mc_find2.getTransformedBounds()
		this.mc_find1.addEventListener("pressmove", dragMe.bind(this));
		this.mc_find2.addEventListener("pressmove", dragMe2.bind(this));
		this.mc_find2.addEventListener("pressup", mouseUp.bind(this));
		
		function dragMe(evt){
			var item1 = evt.currentTarget;
			this.my_bounds1 = item1.getTransformedBounds();
			this.addChild(evt.currentTarget);
			var p = this.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		
		function dragMe2(evt){
			var item2 = evt.currentTarget;
			this.my_bounds2 = item2.getTransformedBounds()
			this.addChild(evt.currentTarget);
			var p = this.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		
		function mouseUp(evt){
			var inter = my_bounds1.intersects(my_bounds2)
			console.log(inter)
		}*/
	}
	this.frame_120 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.card.on("mousedown", onMouseDown.bind(this));
		this.card.on("pressmove", onMouseMove.bind(this));
		this.card.on("pressup", onMouseUp.bind(this));
		this.card.objective = this.objective;
		
		this.card2.on("mousedown", onMouseDown.bind(this));
		this.card2.on("pressmove", onMouseMove.bind(this));
		this.card2.on("pressup", onMouseUp2.bind(this));
		this.card2.objective = this.objective2;
		
		this.card3.on("mousedown", onMouseDown.bind(this));
		this.card3.on("pressmove", onMouseMove.bind(this));
		this.card3.on("pressup", onMouseUp3.bind(this));
		this.card3.objective = this.objective3;
		
		this.card4.on("mousedown", onMouseDown.bind(this));
		this.card4.on("pressmove", onMouseMove.bind(this));
		this.card4.on("pressup", onMouseUp4.bind(this));
		this.card4.objective = this.objective4;
		
		this.card5.on("mousedown", onMouseDown.bind(this));
		this.card5.on("pressmove", onMouseMove.bind(this));
		this.card5.on("pressup", onMouseUp5.bind(this));
		this.card5.objective = this.objective5;
		
		
		
		function onMouseDown(evt){
			//console.log("onmousedown");
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0}
			
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		function onMouseUp(evt){//STRING
			//console.log("onmouseup");
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.dot.x, item.dot.y, item.objective.box);
			//console.log(item.objective.box.hitTest(pt.x, pt.y))
			//item.brightness = -100%
			//console.log(item);
			
			/*if(item.name == "card"){
				alert("card correcta")
			}else{
				alert("card incorrecta")
			}*/
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				card = true;
				if(card && card2 && card3 && card4 && card5){
					//alert("CORRECTO EN STRING")
					this.play();
				}
			}else{
				item.x = 890.70;
				item.y = 504.8;
				card = false;
			}
		}
		
		function onMouseUp2(evt){//INT
			//console.log("onmouseup");
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.dot.x, item.dot.y, item.objective.box);
			
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				card2 = true;
				if(card && card2 && card3 && card4 && card5){
					//alert("CORRECTO EN INT")
					this.play();
				}		
			}else{
				item.x = 665.70;
				item.y = 504.8;
				card2 = false;
			}
		}
		
		function onMouseUp3(evt){//BOOL
			//console.log("onmouseup");
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.dot.x, item.dot.y, item.objective.box);
			
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				card3 = true;
				if(card && card2 && card3 && card4 && card5){
					//alert("CORRECTO EN BOOL")
					this.play();
				}		
			}else{
				item.x = 1115.70;
				item.y = 504.8;
				card3 = false;
			}
		}
		
		function onMouseUp4(evt){//FLOAT
			//console.log("onmouseup");
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.dot.x, item.dot.y, item.objective.box);
			
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				card4 = true;
				if(card && card2 && card3 && card4 && card5){
					//alert("CORRECTO EN FLOAT")
					this.play();
				}		
			}else{
				item.x = 214.05;
				item.y = 504.8;
				card4 = false;
			}
		}
		
		function onMouseUp5(evt){//DOUBLE
			//console.log("onmouseup");
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.dot.x, item.dot.y, item.objective.box);
			
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				card5 = true;
				if(card && card2 && card3 && card4 && card5){
					//alert("CORRECTO EN DOUBLE")
					this.play();
				}		
			}else{
				item.x = 439.05;
				item.y = 504.8;
				card5 = false;
			}
		}
		
		function onMouseMove(evt){
			//console.log("onmousemove");
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
	}
	this.frame_157 = function() {
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
				root.txtControl2.color = "#FFF";		
			}else{
				root.txtControl2.color = "#FFF";
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120).call(this.frame_120).wait(37).call(this.frame_157).wait(2));

	// BackToStart
	this.txtControl2 = new cjs.Text("RESTART", "12px 'Arial'", "#FFFFFF");
	this.txtControl2.name = "txtControl2";
	this.txtControl2.lineHeight = 15;
	this.txtControl2.lineWidth = 59;
	this.txtControl2.parent = this;
	this.txtControl2.setTransform(637.9,493.9);

	this.botonPlayPause2 = new lib.BotonPlayPause();
	this.botonPlayPause2.name = "botonPlayPause2";
	this.botonPlayPause2.parent = this;
	this.botonPlayPause2.setTransform(663.8,500.5,0.579,0.583,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.botonPlayPause2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonPlayPause2},{t:this.txtControl2}]},157).wait(2));

	// ActionStopPlay
	this.text = new cjs.Text("En esta animación tendras que arrastrar y soltar las card inferiores con su correspondiente card (tipo de dato) de la parte superior. Presiona Play", "21px 'Raleway SemiBold'", "#666666");
	this.text.lineHeight = 27;
	this.text.lineWidth = 477;
	this.text.parent = this;
	this.text.setTransform(466.6,178.5);

	this.txtInicio = new cjs.Text("Tipos de datos", "italic bold 45px 'Raleway ExtraBold'");
	this.txtInicio.name = "txtInicio";
	this.txtInicio.lineHeight = 55;
	this.txtInicio.lineWidth = 320;
	this.txtInicio.parent = this;
	this.txtInicio.setTransform(520.5,104.4);

	this.txtControl = new cjs.Text("PLAY", "12px 'Arial'", "#FFFFFF");
	this.txtControl.name = "txtControl";
	this.txtControl.lineHeight = 15;
	this.txtControl.lineWidth = 37;
	this.txtControl.parent = this;
	this.txtControl.setTransform(658.4,334.3);

	this.botonPlayPause = new lib.BotonPlayPause();
	this.botonPlayPause.name = "botonPlayPause";
	this.botonPlayPause.parent = this;
	this.botonPlayPause.setTransform(674.3,340.9,0.579,0.583,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.botonPlayPause, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio},{t:this.text}]}).to({state:[]},1).wait(158));

	// correct
	this.instance = new lib.correctSquare();
	this.instance.parent = this;
	this.instance.setTransform(664.7,218);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhUBeQgdgiAAg8QAAg7AdgiQAegiA2AAQA4AAAeAiQAcAiAAA7QAAA8gcAiQgeAig4AAQg2AAgegigAg6hKQgUAbAAAvQAAAwAUAbQATAaAnAAQAoAAAUgaQATgbAAgwQAAgvgTgbQgUgagoAAQgnAAgTAag");
	this.shape.setTransform(743.8,453.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgHB7QgJAAAAgKIAAjNIhMAAQgKAAAAgIIAAgOQAAgHAKAAIC5AAQAKAAAAAHIAAAOQAAAIgKAAIhMAAIAADNQAAAKgJAAg");
	this.shape_1.setTransform(720,453.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AhJBeQgegiAAg8QAAg7AegiQAegiA2AAQAhABAVAKQAVALAJAUQAFAKgGADIgOAIQgGAEgGgLQgFgKgNgKQgNgJgYAAQgqAAgTAaQgTAbAAAvQAAAwATAbQATAaAqAAQAZAAAPgMQAOgKAHgNQAFgKAHAEIAOAIQAHAEgGAKQgKATgWANQgXAOgjAAQg2AAgegig");
	this.shape_2.setTransform(697,453.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AhNB7QgIAAAAgKIAAjhQAAgJAIAAICVAAQAJAAAAAHIAAANQAAAHgJABIh8AAIAABLIByAAQAJAAAAAIIAAAMQAAAHgJAAIhyAAIAABWICBAAQAJAAAAAHIAAANQAAAHgJABg");
	this.shape_3.setTransform(674.9,453.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("ABIB7QgHgBgEgGIgjg9QgIgNgOgNQgOgNgVAAIgeAAIAABhQAAAKgIAAIgQAAQgJAAAAgKIAAjhQAAgJAJAAIBSAAQAxAAAWASQAWATAAAdQAAAcgSARQgTASghACIAAABQARAMAGAIQAGAGAHAMIAkA+QAHAMgJAAgAg9gLIAyAAQAgABASgKQASgJAAgcQAAgVgRgHQgQgJgbABIg6AAg");
	this.shape_4.setTransform(652.4,453.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("ABIB7QgHgBgEgGIgjg9QgIgNgOgNQgOgNgVAAIgeAAIAABhQAAAKgIAAIgQAAQgJAAAAgKIAAjhQAAgJAJAAIBSAAQAxAAAWASQAWATAAAdQAAAcgSARQgTASghACIAAABQARAMAGAIQAGAGAHAMIAkA+QAHAMgJAAgAg9gLIAyAAQAgABASgKQASgJAAgcQAAgVgRgHQgQgJgbABIg6AAg");
	this.shape_5.setTransform(629,453.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AhUBeQgdgiAAg8QAAg7AdgiQAdgiA3AAQA4AAAdAiQAdAiAAA7QAAA8gdAiQgdAig4AAQg3AAgdgigAg7hKQgTAbAAAvQAAAwATAbQAUAaAnAAQAoAAAUgaQATgbAAgwQAAgvgTgbQgUgagoAAQgnAAgUAag");
	this.shape_6.setTransform(603.6,453.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AhJBeQgegiAAg8QAAg7AegiQAegiA2AAQAhABAVAKQAVALAJAUQAFAKgGADIgOAIQgGAEgGgLQgFgKgNgKQgNgJgYAAQgqAAgTAaQgTAbAAAvQAAAwATAbQATAaAqAAQAZAAAPgMQAOgKAHgNQAFgKAHAEIAOAIQAHAEgGAKQgKATgWANQgXAOgjAAQg2AAgegig");
	this.shape_7.setTransform(578.5,453.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},120).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(1));

	// cards
	this.card5 = new lib.mc_doubleEmpty();
	this.card5.name = "card5";
	this.card5.parent = this;
	this.card5.setTransform(438.5,505.1,1,1,0,0,0,-0.6,0.3);

	this.card4 = new lib.mc_floatEmpty();
	this.card4.name = "card4";
	this.card4.parent = this;
	this.card4.setTransform(213.5,505.1,1,1,0,0,0,-0.6,0.3);

	this.card3 = new lib.mc_boolEmpty();
	this.card3.name = "card3";
	this.card3.parent = this;
	this.card3.setTransform(1115.1,505.1,1,1,0,0,0,-0.6,0.3);

	this.card2 = new lib.mc_intEmpty();
	this.card2.name = "card2";
	this.card2.parent = this;
	this.card2.setTransform(663.8,503.7,1,1,0,0,0,-1.9,-1.1);

	this.card = new lib.mc_stringEmpty();
	this.card.name = "card";
	this.card.parent = this;
	this.card.setTransform(890.1,505.1,1,1,0,0,0,-0.6,0.3);

	this.objective5 = new lib.mc_doubleFull();
	this.objective5.name = "objective5";
	this.objective5.parent = this;
	this.objective5.setTransform(1115.7,217.4);

	this.objective4 = new lib.mc_floatFull();
	this.objective4.name = "objective4";
	this.objective4.parent = this;
	this.objective4.setTransform(890.7,217.4);

	this.objective3 = new lib.mc_boolFull();
	this.objective3.name = "objective3";
	this.objective3.parent = this;
	this.objective3.setTransform(665.7,217.4);

	this.objective2 = new lib.mc_intFull();
	this.objective2.name = "objective2";
	this.objective2.parent = this;
	this.objective2.setTransform(214.1,217.4);

	this.objective = new lib.mc_stringFull();
	this.objective.name = "objective";
	this.objective.parent = this;
	this.objective.setTransform(439.1,217.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.objective},{t:this.objective2},{t:this.objective3},{t:this.objective4},{t:this.objective5},{t:this.card},{t:this.card2},{t:this.card3},{t:this.card4},{t:this.card5}]},120).to({state:[]},38).wait(1));

	// CardE5
	this.card4_1 = new lib.mc_floatEmpty();
	this.card4_1.name = "card4_1";
	this.card4_1.parent = this;
	this.card4_1.setTransform(213.5,505.1,1,1,0,0,0,-0.6,0.3);
	this.card4_1.alpha = 0;
	this.card4_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card4_1).wait(107).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(39));

	// CardE4
	this.card5_1 = new lib.mc_doubleEmpty();
	this.card5_1.name = "card5_1";
	this.card5_1.parent = this;
	this.card5_1.setTransform(438.5,505.1,1,1,0,0,0,-0.6,0.3);
	this.card5_1.alpha = 0;
	this.card5_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card5_1).wait(95).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(12).to({_off:true},1).wait(39));

	// CardE3
	this.card2_1 = new lib.mc_intEmpty();
	this.card2_1.name = "card2_1";
	this.card2_1.parent = this;
	this.card2_1.setTransform(663.8,503.7,1,1,0,0,0,-1.9,-1.1);
	this.card2_1.alpha = 0;
	this.card2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card2_1).wait(83).to({_off:false},0).wait(1).to({regX:-2,x:663.7,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(24).to({_off:true},1).wait(39));

	// CardE2
	this.card_1 = new lib.mc_stringEmpty();
	this.card_1.name = "card_1";
	this.card_1.parent = this;
	this.card_1.setTransform(890.1,505.1,1,1,0,0,0,-0.6,0.3);
	this.card_1.alpha = 0;
	this.card_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card_1).wait(71).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(36).to({_off:true},1).wait(39));

	// CardE1
	this.card3_1 = new lib.mc_boolEmpty();
	this.card3_1.name = "card3_1";
	this.card3_1.parent = this;
	this.card3_1.setTransform(1115.1,505.1,1,1,0,0,0,-0.6,0.3);
	this.card3_1.alpha = 0;
	this.card3_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.card3_1).wait(59).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(48).to({_off:true},1).wait(39));

	// CardF5
	this.objective5_1 = new lib.mc_doubleFull();
	this.objective5_1.name = "objective5_1";
	this.objective5_1.parent = this;
	this.objective5_1.setTransform(1115.7,217.4);
	this.objective5_1.alpha = 0;
	this.objective5_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.objective5_1).wait(47).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(60).to({_off:true},1).wait(39));

	// CardF4
	this.objective4_1 = new lib.mc_floatFull();
	this.objective4_1.name = "objective4_1";
	this.objective4_1.parent = this;
	this.objective4_1.setTransform(890.7,217.4);
	this.objective4_1.alpha = 0;
	this.objective4_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.objective4_1).wait(35).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(72).to({_off:true},1).wait(39));

	// CardF3
	this.objective3_1 = new lib.mc_boolFull();
	this.objective3_1.name = "objective3_1";
	this.objective3_1.parent = this;
	this.objective3_1.setTransform(665.7,217.4);
	this.objective3_1.alpha = 0;
	this.objective3_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.objective3_1).wait(23).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(84).to({_off:true},1).wait(39));

	// CardF2
	this.objective_1 = new lib.mc_stringFull();
	this.objective_1.name = "objective_1";
	this.objective_1.parent = this;
	this.objective_1.setTransform(439.1,217.4);
	this.objective_1.alpha = 0;
	this.objective_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.objective_1).wait(11).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(96).to({_off:true},1).wait(39));

	// CardF1
	this.objective2_1 = new lib.mc_intFull();
	this.objective2_1.name = "objective2_1";
	this.objective2_1.parent = this;
	this.objective2_1.setTransform(214.1,217.4);
	this.objective2_1.alpha = 0;
	this.objective2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.objective2_1).wait(1).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(108).to({_off:true},1).wait(39));

	// Background
	this.instance_1 = new lib.instructionsBG2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(158));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,1366,768);
// library properties:
lib.properties = {
	id: 'CC26EB754D19FF46B7F4D2E867504429',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dragAndDrop_atlas_.png", id:"dragAndDrop_atlas_"}
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
an.compositions['CC26EB754D19FF46B7F4D2E867504429'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;