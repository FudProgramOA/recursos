(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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



(lib.Tapa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArKETIAAolIWVAAIAAIlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tapa, new cjs.Rectangle(-71.5,-27.5,143,55), null);


(lib.TxtSi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape.setTransform(5.1,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAzQgKgEgGgIQgFgJgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJAAQAIAAAGgCQAGgCADgFQADgDAAgGQAAgEgDgFQgDgDgGgDIgSgFQgPgDgGgDQgIgEgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKAAQALAAAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAEQgGAGAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJAEAEAGQAFAGAAAJQAAAIgFAIQgFAIgJAEQgJAEgMABQgNgBgKgEg");
	this.shape_1.setTransform(-2.1,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TxtSi, new cjs.Rectangle(-9,-34.9,20.1,20.8), null);


(lib.TxtNo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape.setTransform(9.7,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcA2Ig4hUIAABUIgNAAIAAhrIAOAAIA4BUIAAhUIANAAIAABrg");
	this.shape_1.setTransform(-1.7,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TxtNo, new cjs.Rectangle(-9,-34.9,29.1,20.8), null);


(lib.ProcesoSymb3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAmQgJgLAAgbQAAgQADgKQADgKAHgFQAHgFAJAAQAHAAAGACQAGADADAGQAEAGACAIQACAJAAAMQAAAQgDAKQgDALgHAFQgHAGgKgBQgMABgIgKgAgMgeQgGAIAAAWQAAAXAGAIQAFAHAHAAQAIAAAFgHQAGgIAAgXQAAgWgGgHQgFgIgIAAQgHAAgFAHg");
	this.shape.setTransform(32.3,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAvIAAhIQgEAEgGAEIgMAGIAAgLQAJgFAHgGQAHgHADgGIAHAAIAABdg");
	this.shape_1.setTransform(24.6,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAwIAahfIAJAAIgaBfg");
	this.shape_2.setTransform(16.1,-3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiAjIAAgqIgBgKQgBgDgDgCQgDgCgEAAQgHABgFAEQgEAFAAAKIAAAnIgLAAIAAgrQAAgIgCgDQgDgFgHAAQgEABgEACQgFACgBAFQgCAGAAAIIAAAjIgMAAIAAhDIALAAIAAAJQADgEAFgEQAFgDAHAAQAHAAAFADQAEAEACAFQAIgLANgBQAKABAFAFQAGAGAAALIAAAug");
	this.shape_3.setTransform(5.3,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgDQgDgEgBgFIAAgLIAAgoIALAAIAAAkQAAAJABADQABAEADADQAEACAFAAQAEAAAFgCQAEgDACgEQACgFAAgIIAAgjIALAAIAABCIgKAAIAAgKQgIAMgMgBQgGAAgGgCg");
	this.shape_4.setTransform(-3.8,-2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgCgEQAAgDgEgDQgDgCgFAAQgGABgFAEQgGAFAAANIAAAkIgLAAIAAhDIAKAAIAAAJQAIgKAMgBQAHABAEACQAGACACADQADAEABAFIABALIAAApg");
	this.shape_5.setTransform(-11,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAiAAIAAALg");
	this.shape_6.setTransform(-20.4,-2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_7.setTransform(-24.8,-2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAGIAAgKIA9gaIAAALIgwATIAwAUIAAAMg");
	this.shape_8.setTransform(-30.8,-3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiAjIAAgqIgBgKQgBgDgDgCQgDgCgEAAQgHABgFAEQgEAFAAAKIAAAnIgLAAIAAgrQAAgIgCgDQgDgFgHAAQgEABgEACQgFACgBAFQgCAGAAAIIAAAjIgMAAIAAhDIALAAIAAAJQADgEAFgEQAFgDAHAAQAHAAAFADQAEAEACAFQAIgLANgBQAKABAFAFQAGAGAAALIAAAug");
	this.shape_9.setTransform(-43.6,-2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgDQgDgEgBgFIAAgLIAAgoIALAAIAAAkIABAMQABAEADADQAEACAFAAQAEAAAFgCQAEgDACgEQACgFAAgIIAAgjIALAAIAABCIgKAAIAAgKQgIAMgMgBQgGAAgGgCg");
	this.shape_10.setTransform(-52.7,-2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgBgEQgCgDgDgDQgEgCgEAAQgHABgEAEQgGAFAAANIAAAkIgLAAIAAhDIAKAAIAAAJQAHgKANgBQAGABAGACQAFACACADQACAEACAFIAAALIAAApg");
	this.shape_11.setTransform(-59.9,-2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0066FF").ss(1,1,1).p("AqJj5IUTAAIAAHzI0TAAg");
	this.shape_12.setTransform(-14.5,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AqJD6IAAnzIUTAAIAAHzg");
	this.shape_13.setTransform(-14.5,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProcesoSymb3, new cjs.Rectangle(-80.5,-26.9,132,52), null);


(lib.ProcesoSymb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAmQgJgLAAgbQAAgQADgKQADgKAHgFQAHgFAJAAQAHAAAGACQAGADADAGQAEAGACAIQACAJAAAMQAAAQgDAKQgDALgHAFQgHAGgKgBQgMABgIgKgAgMgeQgGAIAAAWQAAAXAGAIQAFAHAHAAQAIAAAFgHQAGgIAAgXQAAgWgGgHQgFgIgIAAQgHAAgFAHg");
	this.shape.setTransform(64.9,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAvIAAhIQgEAEgGAEIgMAGIAAgLQAJgFAHgGQAHgHADgGIAHAAIAABdg");
	this.shape_1.setTransform(57.2,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAqQgGgGAAgNQAAgJAFgIQAGgGAJAAQAIAAAHAGQAFAGAAAMQAAAMgFAGQgHAHgIAAQgJAAgFgHgAAXALQgDAEAAAKQAAAJADAEQADADAEAAQAFAAADgDQACgEAAgKQAAgJgCgEQgDgDgFAAQgEAAgDADgAgdAxIAyhhIAJAAIgyBhgAgrgFQgGgHAAgMQAAgKAFgHQAFgHAJAAQAKAAAFAGQAGAHAAALQAAANgGAFQgGAGgJAAQgHAAgGgFgAgkgkQgDADAAAKQAAAJADADQACAEAFAAQAEAAADgEQADgDAAgKQAAgJgDgDQgDgFgEAAQgFAAgCAFg");
	this.shape_2.setTransform(44.7,-3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiAjIAAgqIgBgKQgBgDgDgCQgDgCgEAAQgHABgFAEQgEAFAAAKIAAAnIgLAAIAAgrQAAgIgCgDQgDgFgHAAQgEABgEACQgFACgBAFQgCAGAAAIIAAAjIgMAAIAAhDIALAAIAAAJQADgEAFgEQAFgDAHAAQAHAAAFADQAEAEACAFQAIgLANgBQAKABAFAFQAGAGAAALIAAAug");
	this.shape_3.setTransform(29.9,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgDQgDgEgBgFIAAgLIAAgoIALAAIAAAkIABAMQABAEADADQAEACAFAAQAEAAAFgCQAEgDACgEQACgFAAgIIAAgjIALAAIAABCIgKAAIAAgKQgIAMgMgBQgGAAgGgCg");
	this.shape_4.setTransform(20.8,-2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgBgEQgBgDgEgDQgEgCgEAAQgHABgEAEQgGAFAAANIAAAkIgLAAIAAhDIAKAAIAAAJQAHgKAOgBQAFABAGACQAEACADADQACAEABAFIABALIAAApg");
	this.shape_5.setTransform(13.6,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAGIAAgLIAiAAIAAALg");
	this.shape_6.setTransform(4.2,-2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAiAAIAAALg");
	this.shape_7.setTransform(-0.2,-2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAGIAAgKIA9gaIAAALIgwATIAwAUIAAAMg");
	this.shape_8.setTransform(-6.2,-3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_9.setTransform(-17.4,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_10.setTransform(-22.3,-3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAtQgJgFgFgHQgFgHAAgKIALgBQABAIADAEQAEAEAFADQAHADAHAAQAHAAAFgCQAGgCACgEQADgDAAgFQAAgEgDgEQgCgDgGgCIgPgFQgNgCgFgCQgHgEgEgFQgDgFAAgHQAAgGAFgGQAEgHAHgDQAIgDAJAAQAJAAAJADQAHADAEAHQAFAHAAAHIgMABQAAgIgGgFQgFgFgLAAQgLAAgFAFQgEAEgBAFQAAAFAEAEQAEADAOAEQAOADAGACQAIADAEAGQAEAFAAAIQAAAHgFAHQgDAHgJAEQgHADgLAAQgLAAgIgDg");
	this.shape_11.setTransform(-28,-3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAaQgIgJgBgRQAAgSAKgJQAKgHALAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_12.setTransform(-36,-2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgDAAgLIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAGIACACIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_13.setTransform(-41.3,-3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_14.setTransform(-44.7,-3.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_15.setTransform(-50,-1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_16.setTransform(-54.8,-3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOArQgHgFgEgIQgDgIAAgKQAAgKADgHQADgIAHgFQAHgEAIAAQAFAAAFACQAFADADAEIAAghIALAAIAABcIgKAAIAAgJQgHAKgMAAQgHAAgHgEgAgLgHQgGAHAAAMQAAANAGAGQAFAHAHAAQAHAAAGgGQAFgGAAgNQAAgNgGgGQgFgHgIAAQgGAAgFAGg");
	this.shape_17.setTransform(-60.1,-3.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0066FF").ss(1,1,1).p("Asfj5IY/AAIAAHzI4/AAg");
	this.shape_18.setTransform(0.5,-0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066FF").s().p("AsfD6IAAnzIY/AAIAAHzg");
	this.shape_19.setTransform(0.5,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProcesoSymb2, new cjs.Rectangle(-80.5,-26.9,162,52), null);


(lib.ProcesoSymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape.setTransform(8.1,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_1.setTransform(3.3,-4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAsQgJgDgFgIQgFgHAAgKIAMgBQAAAIADAEQAEAEAFADQAHADAHAAQAHAAAFgCQAGgCACgEQADgDAAgFQAAgEgDgEQgCgCgGgDIgQgEQgNgDgFgCQgGgDgEgGQgDgFAAgHQAAgHAEgFQAFgHAHgDQAIgDAJAAQAJAAAJADQAHAEAEAGQAFAHAAAHIgMABQgBgIgFgFQgGgFgKAAQgLAAgEAFQgFAEgBAGQAAAEAEAEQADADAPAEQAOADAGACQAIADAEAGQAEAGAAAHQAAAHgFAHQgDAHgJADQgIAEgKAAQgLAAgIgEg");
	this.shape_2.setTransform(-2.5,-4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgRQgBgSAKgJQAKgHALAAQAOAAAJAJQAJAJAAAQQAAAMgFAIQgEAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_3.setTransform(-10.4,-3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgDAAgLIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAGIACACIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_4.setTransform(-15.8,-4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_5.setTransform(-19.1,-4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_6.setTransform(-24.4,-2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_7.setTransform(-29.3,-4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOArQgHgFgEgIQgDgIAAgKQAAgKADgHQADgIAHgFQAHgEAIAAQAFAAAFACQAFADADAEIAAghIALAAIAABcIgKAAIAAgJQgHAKgMAAQgHAAgHgEgAgLgHQgGAHAAAMQAAANAGAGQAFAHAHAAQAHAAAGgGQAFgGAAgNQAAgNgGgGQgFgHgIAAQgGAAgFAGg");
	this.shape_8.setTransform(-34.6,-4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGALQAEgCABgDQABgDAAgFIgFAAIAAgNIAMAAIAAANQAAAGgDAFQgCAEgFADg");
	this.shape_9.setTransform(-43.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiAjIAAgqIgBgKQgBgDgDgCQgDgCgEAAQgHABgFAEQgEAFAAAKIAAAnIgLAAIAAgrQAAgIgCgDQgDgFgHAAQgEABgEACQgFADgBAEQgCAGAAAIIAAAjIgMAAIAAhDIALAAIAAAJQADgEAFgEQAFgDAHAAQAHAAAFADQAEAEACAFQAIgMANAAQAKABAFAFQAGAGAAALIAAAug");
	this.shape_10.setTransform(-50.6,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgEQgDgDgBgFIAAgLIAAgoIALAAIAAAkIABAMQABAEADADQAEADAFgBQAEABAFgDQAEgDACgEQACgFAAgIIAAgjIALAAIAABCIgKAAIAAgKQgIALgMAAQgGAAgGgCg");
	this.shape_11.setTransform(-59.7,-3.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgBgEQgBgEgEgCQgDgCgFAAQgHABgFAEQgFAEAAAOIAAAkIgMAAIAAhDIALAAIAAAJQAHgLAOAAQAGABAFACQAEACADAEQACADABAFIABALIAAApg");
	this.shape_12.setTransform(-66.9,-3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0066FF").ss(1,1,1).p("AnzjgIPnAAIAAHBIvnAAg");
	this.shape_13.setTransform(-29.5,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AnzDhIAAnBIPnAAIAAHBg");
	this.shape_14.setTransform(-29.5,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProcesoSymb, new cjs.Rectangle(-80.5,-26.9,102,47), null);


(lib.Txt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape.setTransform(19.6,-12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_1.setTransform(13.8,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjA2IAAhrIBHAAIAAANIg5AAIAAAhIAxAAIAAAMIgxAAIAAAxg");
	this.shape_2.setTransform(7.8,-13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_3.setTransform(-3.2,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXArQgLgNAAgeQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAHAEQAGADAEAHQAFAGACAKQACAJAAAPQAAATgEAMQgEALgHAHQgIAGgMAAQgPAAgIgMgAgOgjQgGAKAAAZQAAAbAGAIQAGAJAIAAQAJAAAHgJQAFgJAAgaQAAgZgFgJQgHgJgJAAQgIAAgGAIg");
	this.shape_4.setTransform(-9.6,-13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_5.setTransform(-18.4,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt10, new cjs.Rectangle(-24,-23.9,50.1,20.8), null);


(lib.Txt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA3IAAgQIAOAAIAAAQgAgGAcIAAgEQAAgIACgFIAFgJIAJgIIAJgJQACgEAAgFQAAgHgGgGQgGgGgJAAQgHAAgGAFQgFAGgCALIgOgCQACgPAJgHQAJgIAOAAQAQgBAJAJQAKAJAAAMQAAAGgEAGQgDAHgKAHQgGAGgCADIgDAGIgBALg");
	this.shape.setTransform(150.4,-13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_1.setTransform(142.1,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(136,-12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_3.setTransform(128.7,-12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_4.setTransform(121.1,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_5.setTransform(108.7,-12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_6.setTransform(98.5,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_7.setTransform(91.3,-12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcA1IgBgMIAIABQAEAAACgBQADgCACgDIAEgJIABgEIgehNIAPAAIAQAuIAEARQACgJAEgIIARguIAMAAIgdBPQgFAMgCAFQgDAHgFADQgEADgGAAIgJgCg");
	this.shape_8.setTransform(83.4,-10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_9.setTransform(75.4,-12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_10.setTransform(65,-12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_11.setTransform(48.4,-12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRAlQgFgDgEgEQgCgDgBgHIgBgMIAAgvIANAAIAAAqIAAAOQACAFAEAEQAEACAGAAQAFAAAFgCQAFgDADgGQABgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_12.setTransform(37.9,-12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_13.setTransform(29.6,-12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_14.setTransform(17.4,-12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_15.setTransform(9,-13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAuQgKgIAAgNQAAgHAEgGQADgFAJgIIAJgIIADgHIABgLIAMAAIAAAEQAAAIgDAFQgBAFgDAEIgJAIQgHAGgCAEQgCADAAAEQAAAIAGAGQAGAGAIAAQAIAAAGgFQAFgGACgLIAOACQgCAPgJAIQgJAIgPAAQgPAAgJgJgAgHgnIAAgPIAOAAIAAAPg");
	this.shape_16.setTransform(-0.8,-10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_17.setTransform(-11.6,-9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAwQgIgHgBgNIAMgBQACAJAEAEQAFAEAHAAQAFAAAFgDQAEgDADgEQAEgFABgIQACgHAAgJIAAgCQgEAGgGAEQgIADgHAAQgNAAgJgJQgJgIAAgRQAAgQAKgKQAJgKAOAAQAKAAAJAGQAIAFAFALQAFAKAAAUQAAATgFANQgFAMgIAHQgJAGgLAAQgMAAgJgHgAgOgkQgGAIgBALQAAAKAHAGQAFAGAJAAQAJAAAGgGQAFgGABgLQAAgMgHgGQgFgHgJAAQgIAAgGAHg");
	this.shape_18.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt9, new cjs.Rectangle(-24,-23.9,181.1,20.8), null);


(lib.Txt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape.setTransform(119.4,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAlQgFgDgEgEQgCgDgBgHIgCgLIAAgwIAOAAIAAAqIAAAPQACAFAEADQAEACAGAAQAFAAAFgCQAFgDADgGQABgFAAgKIAAgpIANAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgGgDg");
	this.shape_1.setTransform(108.9,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_2.setTransform(100.6,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_3.setTransform(88,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_4.setTransform(77.8,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_5.setTransform(70.6,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_6.setTransform(64.7,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_7.setTransform(58.8,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIAOAAIgeBNg");
	this.shape_8.setTransform(51,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_9.setTransform(41.3,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_10.setTransform(35.5,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(25.3,6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(18,6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_13.setTransform(9.7,6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEADAJAAQAIAAAFgDQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgFAKgBQANAAAJAMIAAgKIAMAAIAABCQAAATgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJAAQgIAAgGAGg");
	this.shape_14.setTransform(1.1,8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_15.setTransform(-4.5,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_16.setTransform(-10,6.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_17.setTransform(-17.9,6.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbA1IgCgMIAIABQAEAAACgBQADgCACgDIAEgJIABgEIgehNIAPAAIAQAuIAEARQACgJAEgIIARguIAMAAIgdBPQgEAMgCAFQgEAHgFADQgEADgGAAIgIgCg");
	this.shape_18.setTransform(136.9,-10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXArQgLgNAAgeQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAGAEQAHADAEAHQAEAGADAKQACAJAAAPQAAATgDAMQgEALgIAHQgIAGgMAAQgOAAgJgMgAgNgjQgHAKAAAZQAAAbAGAIQAGAJAIAAQAKAAAFgJQAHgJAAgaQAAgZgHgJQgFgJgKAAQgIAAgFAIg");
	this.shape_19.setTransform(124.7,-13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_20.setTransform(115.8,-13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_21.setTransform(103.8,-12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_22.setTransform(97.8,-12.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_23.setTransform(92.7,-13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_24.setTransform(86.4,-12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_25.setTransform(78,-12.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_26.setTransform(63.5,-12.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAlQgHgDgCgEQgDgDgCgHIgBgMIAAgvIAOAAIAAAqIABAOQABAFAEAEQAEACAGAAQAFAAAFgCQAFgDADgGQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgMQgJAOgPAAQgHAAgFgDg");
	this.shape_27.setTransform(53,-12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_28.setTransform(44.7,-12.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_29.setTransform(34.4,-12.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_30.setTransform(29.7,-13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_31.setTransform(23.5,-13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_32.setTransform(18,-13.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAQIAFgPIARgvIAOAAIgdBNg");
	this.shape_33.setTransform(12.6,-12.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_34.setTransform(7.1,-13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgrA2IAAhrIAlAAQALAAAHACQAJACAHAGQAIAHAEALQAFALAAAOQAAAMgEAJQgDAKgEAGQgEAGgGAEQgFADgHACQgIACgJAAgAgdApIAXAAQAJAAAHgCQAFgCAEgDQAFgGADgIQACgJAAgLQAAgRgFgJQgGgJgHgDQgGgCgLAAIgXAAg");
	this.shape_35.setTransform(0.2,-13.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_36.setTransform(-11.6,-9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAtQgKgJAAgOQgBgKAGgHQAFgGAKgDQgIgDgEgGQgEgGAAgHQAAgMAIgIQAJgIANAAQAOAAAIAIQAJAJAAALQAAAHgEAHQgEAFgIADQAKADAFAGQAGAHAAALQAAANgLAJQgJAKgQAAQgPAAgJgKgAgOAGQgHAHAAAJQAAAGADAFQACAFAFADQAGADAFAAQAKAAAFgGQAHgGAAgJQAAgKgHgHQgGgFgJgBQgJABgFAFgAgMgmQgEAFAAAGQAAAIAEAFQAFAFAHgBQAIABAEgFQAFgFABgHQgBgHgFgFQgEgFgIAAQgGAAgGAFg");
	this.shape_37.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt8, new cjs.Rectangle(-24,-23.9,168.1,39.6), null);


(lib.Txt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAxQgIgGAAgNIANACQABAGAEADQAEAEAJAAQAIAAAFgEQAFgEACgHQABgDAAgNQgJAKgMAAQgQAAgJgMQgIgLAAgPQAAgLAEgKQAEgKAHgFQAIgEAKgBQANAAAJAMIAAgKIAMAAIAABCQAAASgEAIQgDAIgIAEQgIAEgLABQgOAAgJgHgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJAAQgIAAgGAGg");
	this.shape.setTransform(106.1,-10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_1.setTransform(100.5,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAzQgKgEgGgJQgFgIgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJABQAIAAAGgDQAGgCADgEQADgFAAgEQAAgGgDgDQgDgEgGgDIgSgFQgPgDgGgCQgIgFgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKABQALgBAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAFQgGAFAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJADAEAHQAFAHAAAIQAAAJgFAHQgFAIgJAEQgJAEgMAAQgNAAgKgEg");
	this.shape_2.setTransform(93.8,-13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQAAgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_3.setTransform(84.7,-12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_4.setTransform(78.5,-13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_5.setTransform(74.7,-13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAxQgIgGAAgNIANACQABAGAEADQAEAEAJAAQAIAAAFgEQAFgEACgHQABgDAAgNQgJAKgMAAQgQAAgJgMQgIgLAAgPQAAgLAEgKQAEgKAHgFQAIgEAKgBQANAAAJAMIAAgKIAMAAIAABCQAAASgEAIQgDAIgIAEQgIAEgLABQgOAAgJgHgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJAAQgIAAgGAGg");
	this.shape_6.setTransform(68.6,-10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_7.setTransform(63,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_8.setTransform(56.8,-13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(46.9,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_10.setTransform(42.1,-13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_11.setTransform(34.2,-12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_12.setTransform(26.3,-13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_13.setTransform(22.7,-12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_14.setTransform(15.6,-10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_15.setTransform(5,-12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_16.setTransform(-3.3,-13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_17.setTransform(-11.6,-9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTA1QABgNAEgRQAFgSAJgQQAIgRAKgLIg0AAIAAgNIBFAAIAAALQgKAKgKATQgLARgEASQgEAOgBAQg");
	this.shape_18.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt7, new cjs.Rectangle(-24,-23.9,137.1,20.8), null);


(lib.Txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANACQABAFAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgMAEgJQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLgBQgOAAgJgFgAgOglQgGAIAAANQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape.setTransform(108.6,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_1.setTransform(103,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAzQgKgEgGgIQgFgJgBgLIAOgBQABAIADAFQAEAFAHAEQAHACAJAAQAIABAGgDQAGgCADgFQADgDAAgGQAAgEgDgFQgDgDgGgDIgSgFQgPgEgGgCQgIgEgEgGQgDgFAAgIQAAgIAEgHQAFgIAJgDQAJgEAKAAQALAAAJAEQAKAEAEAHQAFAIABAKIgOAAQgBgKgGgFQgHgFgMAAQgMAAgGAEQgGAGAAAGQAAAFAEAFQAFADAQAEQARAEAHADQAJADAEAHQAFAGAAAJQAAAIgFAJQgFAHgJAEQgJAFgMAAQgNAAgKgFg");
	this.shape_2.setTransform(96.3,-5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_3.setTransform(87.2,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_4.setTransform(81,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2IAAhNIAMAAIAABNgAgGglIAAgQIAMAAIAAAQg");
	this.shape_5.setTransform(77.2,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANACQABAFAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgMAEgJQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLgBQgOAAgJgFgAgOglQgGAIAAANQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_6.setTransform(71.1,-2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA2IAAhNIAMAAIAABNgAgGglIAAgQIAMAAIAAAQg");
	this.shape_7.setTransform(65.5,-5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_8.setTransform(59.3,-5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_9.setTransform(47.1,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_10.setTransform(36.9,-4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_11.setTransform(29.6,-4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_12.setTransform(23.7,-5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_13.setTransform(17.9,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIAOAAIgeBNg");
	this.shape_14.setTransform(10,-4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_15.setTransform(0.4,-5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_16.setTransform(-5.5,-4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_17.setTransform(-15.7,-4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_18.setTransform(-23,-4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_19.setTransform(-31.3,-4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANACQABAFAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgMAEgJQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLgBQgOAAgJgFgAgOglQgGAIAAANQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_20.setTransform(-39.9,-2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_21.setTransform(-45.5,-5.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_22.setTransform(-51,-4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_23.setTransform(-58.9,-4.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcA1IgBgMIAIABQAEAAADgBQACgCABgDIAFgJIABgEIgehNIAPAAIAQAuIAEARQACgJAEgIIARguIAMAAIgdBPQgFAMgCAFQgDAHgFADQgEADgGAAIgJgCg");
	this.shape_24.setTransform(-70.8,-2.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_25.setTransform(-85,-4.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAlQgHgDgCgEQgDgEgCgGIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEADAGAAQAFAAAFgDQAFgDADgGQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_26.setTransform(-95.5,-4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_27.setTransform(-103.8,-4.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_28.setTransform(80.4,-23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_29.setTransform(71.8,-24.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghAnIAAgKIAwg4IgPAAIgfAAIAAgLIA/AAIAAAJIgpAxIgIAJIARgBIAjAAIAAALg");
	this.shape_30.setTransform(60.1,-23.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_31.setTransform(52.1,-23.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_32.setTransform(46.3,-24.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_33.setTransform(40.1,-24.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_34.setTransform(27.9,-23.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_35.setTransform(22,-24.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgRAlQgFgCgDgFQgDgDgBgHIgCgLIAAgwIAOAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQABgFABgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgGgDg");
	this.shape_36.setTransform(16.2,-23.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_37.setTransform(7.6,-24.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_38.setTransform(-0.5,-23.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_39.setTransform(-10.9,-23.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_40.setTransform(-23,-24.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_41.setTransform(-28.9,-23.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_42.setTransform(-39.1,-23.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_43.setTransform(-46.4,-23.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_44.setTransform(-54.7,-23.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_45.setTransform(-63.1,-23.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_46.setTransform(-69.2,-24.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_47.setTransform(-75.3,-24.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_48.setTransform(-85.5,-24.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_49.setTransform(-97.5,-20);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYArQgLgNAAgbQAAgfAMgOQAKgMAQAAQANAAAIAIQAIAGACANIgOABQgBgIgDgDQgGgGgIAAQgFAAgFAEQgGAEgEAJQgDAIAAARQAEgIAIgDQAGgEAHAAQANAAAJAKQAKAJgBAPQAAAKgEAJQgEAIgIAFQgIAFgJAAQgPAAgLgMgAgNABQgGAHAAAKQAAAHACAGQADAHAGADQAFADAEAAQAJAAAGgHQAGgGAAgMQAAgLgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_50.setTransform(-103.9,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt6, new cjs.Rectangle(-110,-34.9,226,39.6), null);


(lib.Txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape.setTransform(111.3,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_1.setTransform(103.3,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(97.7,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_3.setTransform(90.4,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIAOAAIgeBNg");
	this.shape_4.setTransform(82.6,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_5.setTransform(74.6,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_6.setTransform(68.8,-24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_7.setTransform(58.8,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_8.setTransform(50.4,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_9.setTransform(41.8,-24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_10.setTransform(36,-23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_11.setTransform(28.7,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_12.setTransform(16.2,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_13.setTransform(7.8,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_14.setTransform(-2.4,-23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_15.setTransform(-9.6,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_16.setTransform(-15.5,-24.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_17.setTransform(-21.4,-23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIANAAIgdBNg");
	this.shape_18.setTransform(-29.2,-23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_19.setTransform(-39.1,-23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_20.setTransform(-43.8,-24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_21.setTransform(-51.7,-23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_22.setTransform(-59.7,-24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_23.setTransform(-63.3,-23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_24.setTransform(-70.3,-21.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_25.setTransform(-80.9,-23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_26.setTransform(-89.2,-24.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_27.setTransform(-97.5,-20);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgHAAgMQAAgMgHgFQgGgHgJAAQgHABgFADQgFACgDAEIgMgCIAKg2IA1AAIAAANIgqAAIgGAdQAKgHAJAAQAOAAAKAJQAKAKAAAOQAAAPgJALQgKANgRAAQgPAAgJgJg");
	this.shape_28.setTransform(-103.8,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt5, new cjs.Rectangle(-110,-34.9,229,20.8), null);


(lib.Txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape.setTransform(112.8,-23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_1.setTransform(104.4,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_2.setTransform(95.8,-24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_3.setTransform(90,-23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_4.setTransform(82.7,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_5.setTransform(70.2,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_6.setTransform(61.8,-23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_7.setTransform(51.6,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_8.setTransform(44.4,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_9.setTransform(38.5,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_10.setTransform(32.6,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIANAAIgdBNg");
	this.shape_11.setTransform(24.8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_12.setTransform(14.9,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA2IAAhNIAMAAIAABNgAgFglIAAgQIAMAAIAAAQg");
	this.shape_13.setTransform(10.2,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_14.setTransform(2.3,-23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_15.setTransform(-5.7,-24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(-9.3,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_17.setTransform(-16.3,-21.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_18.setTransform(-26.9,-23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_19.setTransform(-35.2,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_20.setTransform(-43.5,-20);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAKA2IAAgaIguAAIAAgMIAwhFIAKAAIAABFIAPAAIAAAMIgPAAIAAAagAgXAQIAhAAIAAgvg");
	this.shape_21.setTransform(-50.1,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt4, new cjs.Rectangle(-56,-34.9,178,20.8), null);


(lib.Txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape.setTransform(134.5,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_1.setTransform(128.4,-23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_2.setTransform(121.1,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_3.setTransform(115,-24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_4.setTransform(108.6,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_5.setTransform(100.2,-23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_6.setTransform(87.8,-23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_7.setTransform(81.7,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_8.setTransform(74.4,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_9.setTransform(64,-23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRA0QgFgCgEgFQgCgDgBgHIgCgLIAAgwIAOAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQABgFAAgKIAAgpIANAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgGgDgAgHgiIAJgUIARAAIgQAUg");
	this.shape_10.setTransform(53.5,-24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_11.setTransform(45.2,-23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_12.setTransform(32.7,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgEgDgBgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEACgFQACgFABgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgGAAgGgDg");
	this.shape_13.setTransform(24.3,-23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_14.setTransform(14.1,-23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_15.setTransform(6.8,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_16.setTransform(0.7,-24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_17.setTransform(-3.1,-24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_18.setTransform(-8.3,-23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_19.setTransform(-14,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_20.setTransform(-17.4,-24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_21.setTransform(-23.2,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAzQgKgEgGgIQgFgJgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJAAQAIAAAGgCQAGgCADgFQADgDAAgGQAAgEgDgFQgDgDgGgDIgSgFQgPgDgGgDQgIgEgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKAAQALAAAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAEQgGAGAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJAEAEAGQAFAGAAAJQAAAIgFAIQgFAIgJAEQgJAEgMABQgNgBgKgEg");
	this.shape_22.setTransform(-32.4,-24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_23.setTransform(-43.5,-20);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAuQgKgIgBgNIANgCQADALAEAFQAGAFAIAAQAIAAAHgHQAGgGAAgJQAAgKgGgFQgGgHgJAAIgIACIACgLIABAAQAIAAAHgDQAGgFAAgJQAAgHgEgFQgFgFgIAAQgHAAgFAFQgFAFgCAJIgNgCQADgNAIgHQAIgIANAAQAIAAAHAEQAIADAEAIQAEAGAAAHQAAAHgEAGQgEAGgHADQAJACAGAGQAFAHAAALQAAAOgKAJQgLAKgOAAQgOAAgJgJg");
	this.shape_24.setTransform(-49.8,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt3, new cjs.Rectangle(-56,-34.9,199,20.8), null);


(lib.Txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape.setTransform(79.8,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_1.setTransform(71.9,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_2.setTransform(66.1,-24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_3.setTransform(60.5,-24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_4.setTransform(51.9,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_5.setTransform(46.1,-24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_6.setTransform(42.5,-23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_7.setTransform(35.2,-23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIAOAAIgdBNg");
	this.shape_8.setTransform(27.3,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(17.5,-23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_10.setTransform(10.2,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(4.1,-23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(-3.2,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_13.setTransform(-9,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_14.setTransform(-14.2,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_15.setTransform(-22.4,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgrA2IAAhrIAlAAQALAAAGACQAKACAHAGQAIAHAEALQAFALAAAOQAAAMgEAJQgDAKgEAGQgEAGgGAEQgFADgIACQgHACgJAAgAgdApIAXAAQAJAAAHgCQAFgCAEgDQAFgGADgIQACgJAAgLQAAgRgFgJQgGgJgHgDQgGgCgLAAIgXAAg");
	this.shape_16.setTransform(-31.7,-24.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_17.setTransform(-43.5,-20);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgHAMgIQAQgPAHgIQAGgIAAgIQAAgHgFgFQgHgGgJAAQgIAAgGAGQgFAGAAAKIgOgCQACgPAIgIQAKgIAOAAQAPAAAKAJQAJAIAAANQAAAGgDAHQgDAGgGAGQgGAGgPAMIgNAOQgEAEgCAEIA0AAIAAAMg");
	this.shape_18.setTransform(-50,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt2, new cjs.Rectangle(-56,-34.9,142,20.8), null);


(lib.Txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQAAgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape.setTransform(18.5,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_1.setTransform(12.7,-24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_2.setTransform(7.5,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_3.setTransform(1.8,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_4.setTransform(-4,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_5.setTransform(-10.2,-24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_6.setTransform(-18.5,-20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_7.setTransform(-25.4,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt1, new cjs.Rectangle(-31,-34.9,60,20.8), null);


(lib.inicioSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape.setTransform(16.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_1.setTransform(11.5,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_2.setTransform(7.3,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_3.setTransform(2.8,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-1.8,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_5.setTransform(-6.8,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("AD6AAQAABohKBJQhIBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABng");
	this.shape_6.setTransform(4.5,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBnAABJBJQBKBJAABnQAABohKBIQhJBKhnAAQhnAAhJhKg");
	this.shape_7.setTransform(4.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inicioSym, new cjs.Rectangle(-21.5,-25.7,52,52), null);


(lib.impr3Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txtDigito = new cjs.Text("", "13px 'Arial'", "#FFFFFF");
	this.txtDigito.name = "txtDigito";
	this.txtDigito.lineHeight = 17;
	this.txtDigito.lineWidth = 56;
	this.txtDigito.parent = this;
	this.txtDigito.setTransform(-2.9,-2.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkSIQcAAQAhAAAAAmIAAEeQlxAuhdA5Qj9CalygoQgiAAAAgmIAAnRQAAgmAiAAg");
	this.shape.setTransform(21.1,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AoNELQgiAAAAgmIAAnRQAAgmAiAAIQcAAQAhAAAAAmIAAEeQlxAuheA5QjIB6kSAAQhHAAhNgIg");
	this.shape_1.setTransform(21.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.txtDigito}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr3Sym, new cjs.Rectangle(-35.9,-16.9,114,57), null);


(lib.impr2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAQIgDgRIAAgPIANAAIAAAPIgDARgAgNAQIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape.setTransform(61.7,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAiIAAgNIANAAIAAANgAgGgUIAAgNIANAAIAAANg");
	this.shape_1.setTransform(54,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQAAgSALgJQAJgHALAAQAOAAAIAJQAJAJAAAQQAAAMgEAIQgDAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAJAAAFgHQAFgGAAgNQAAgMgFgGQgFgHgJAAQgHAAgHAHg");
	this.shape_2.setTransform(48.6,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAeQgHgGgCgKIALgCQACAHADADQAFAEAHAAQAHAAAFgDQADgEAAgEQAAgEgDgCIgMgEQgMgDgEgCQgFgCgCgEQgDgEAAgFQAAgEACgEQACgEADgCIAIgEQAFgBAEAAQAHAAAHACQAFACAEAEQADAEAAAHIgKABQgCgFgDgDQgEgDgGAAQgHAAgEADQgDACAAAEQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQABACACABIAKADIARAFQAEABADAEQADAEAAAGQAAAGgEAFQgCAFgHADQgGACgIAAQgNAAgGgFg");
	this.shape_3.setTransform(41.7,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgCAEAAQAFAAAGADIgEALQgEgDgEAAQgEAAgCADQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_4.setTransform(36.8,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAJgJANAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAFAGAIAAQAGAAAEgDQAFgEADgHIALACQgDAKgHAGQgIAFgLAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_5.setTransform(30.5,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAiIgahDIAMAAIAOAoIAEANIAEgNIAPgoIAMAAIgaBDg");
	this.shape_6.setTransform(23.6,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgBgEQgBgEgEgCQgEgCgEAAQgHABgEAEQgGAEAAAOIAAAkIgMAAIAAhDIALAAIAAAJQAIgLANABQAFAAAGACQAEACADAEQACADACAFIAAALIAAApg");
	this.shape_7.setTransform(16.7,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_8.setTransform(11.6,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgBgEQgCgEgDgCQgEgCgEAAQgHABgFAEQgFAEAAAOIAAAkIgMAAIAAhDIALAAIAAAJQAHgLAOABQAGAAAEACQAFACADAEQADADAAAFIABALIAAApg");
	this.shape_9.setTransform(3,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAGAGAHAAQAGAAAEgDQAFgEADgHIALACQgCAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_10.setTransform(-4.3,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOArQgHgFgEgIQgDgIAAgKQAAgKADgHQADgIAHgFQAHgEAIAAQAFAAAFACQAFADADAEIAAghIALAAIAABcIgKAAIAAgJQgHAKgMAAQgHAAgHgEgAgLgHQgGAHAAAMQAAANAGAGQAFAHAHAAQAHAAAGgGQAFgGAAgNQAAgNgGgGQgFgHgIAAQgGAAgFAGg");
	this.shape_11.setTransform(-11.8,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgCAEAAQAFAAAGADIgEALQgEgDgEAAQgEAAgCADQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_12.setTransform(-16.8,14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgRQgBgSALgJQAJgHALAAQAOAAAJAJQAIAJABAQQAAAMgFAIQgEAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAIAAAGgHQAGgGgBgNQABgMgGgGQgGgHgIAAQgIAAgFAHg");
	this.shape_13.setTransform(-23.1,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgCgDgDgDQgEgBgEAAQgHgBgEAFQgGAEAAANIAAAkIgLAAIAAhCIAKAAIAAAKQAHgLANAAQAGAAAGACQAFACACAEQACADACAFIAAALIAAAog");
	this.shape_14.setTransform(38.7,-1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAJgJAMAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAFAGAIAAQAGAAAFgDQAEgEACgHIANACQgDAKgIAGQgHAFgMAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgJAAQgGAAgGAFg");
	this.shape_15.setTransform(31.4,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAJAJAAAQQAAAMgDAIQgEAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_16.setTransform(20.6,-1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAAKQAEgHADgCQADgCAEAAQAFgBAGAEIgEALQgEgCgEgBQgEAAgCACQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_17.setTransform(15.3,-1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAJgJANAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAFAGAIAAQAGAAAEgDQAFgEADgHIALACQgDAKgHAGQgIAFgLAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgIAAQgIAAgFAFg");
	this.shape_18.setTransform(9,-1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAiAiIAAgpIgBgKQgBgDgDgCQgDgBgEAAQgHgBgFAFQgEAFAAAKIAAAmIgLAAIAAgrQAAgHgCgEQgDgDgHAAQgEgBgEADQgFADgBAFQgCAFAAAIIAAAiIgMAAIAAhCIALAAIAAAKQADgFAFgEQAFgCAHAAQAHAAAFACQAEAEACAFQAIgLANAAQAKgBAFAGQAGAFAAAMIAAAtg");
	this.shape_19.setTransform(-0.1,-1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAtQgFgCgCgEQgDgDgBgFIAAgLIAAgpIALAAIAAAlIABAMQABAFADACQAEACAFABQAEgBAFgCQAEgCACgFQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIALgMAAQgGAAgGgCgAgGgdIAHgSIAPAAIgOASg");
	this.shape_20.setTransform(-9.2,-2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYAuIgwhIIAABIIgMAAIAAhcIANAAIAwBIIAAhIIALAAIAABcg");
	this.shape_21.setTransform(-17.5,-3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape_22.setTransform(-24.4,-6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0066FF").ss(1,1,1).p("AoMkrIQbAAQAhAAAAApIAAE4QlxAzhdA+Qj9ColxgsQgjAAAAgqIAAn7QAAgpAjAAg");
	this.shape_23.setTransform(21.1,14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AoMEjQgjAAAAgqIAAn7QAAgpAjAAIQbAAQAhAAAAApIAAE4QlxAzheA+QjICFkRAAQhIAAhMgJg");
	this.shape_24.setTransform(21.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr2Sym, new cjs.Rectangle(-35.9,-16.9,114,62), null);


(lib.impr1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txtOrden = new cjs.Text("\"Número: \" ", "13px 'Arial'", "#FFFFFF");
	this.txtOrden.name = "txtOrden";
	this.txtOrden.lineHeight = 17;
	this.txtOrden.lineWidth = 104;
	this.txtOrden.parent = this;
	this.txtOrden.setTransform(-29.2,-1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkrIQcAAQAhAAAAAqIAAE4QlxAyhdA+Qj9ColygsQgiAAAAgpIAAn7QAAgqAiAAg");
	this.shape.setTransform(21.1,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AoNEjQgiAAAAgpIAAn7QAAgqAiAAIQcAAQAhAAAAAqIAAE4QlxAyheA+QjICFkTAAQhHAAhMgJg");
	this.shape_1.setTransform(21.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.txtOrden}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr1Sym, new cjs.Rectangle(-35.9,-17,114,62), null);


(lib.IfSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAjQgJgLAAgYQAAgOADgKQAEgJAFgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgMAAgGgJgAgKgcQgGAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgGAAgEAGg");
	this.shape.setTransform(0.3,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbATIAsgTIgsgSIAAgKIA3AYIAAAJIg3AYg");
	this.shape_1.setTransform(-9.8,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_2.setTransform(-21.7,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_3.setTransform(-30.1,-17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-36.7,-17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0066FF").ss(1,1,1).p("AFeAAIleFeIldldIFdleg");
	this.shape_5.setTransform(-19.5,-17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AldABIFdleIFeFdIleFeg");
	this.shape_6.setTransform(-19.5,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IfSym, new cjs.Rectangle(-55.5,-53.3,72,72), null);


(lib.flechaSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiGqIAAh9IAgFAIAA11IAFAAIAAV1IAglAIAAB9IgjFgg");
	this.shape.setTransform(-28.4,-58.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaSym, new cjs.Rectangle(-31.9,-136.4,7.1,155.5), null);


(lib.flechaIzqSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhSAjIhGgjIBGgiIAYAAIg/AgIESAAIAAAFIkSAAIA/Agg");
	this.shape.setTransform(41.4,-400.5,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("ArwyvMAAAAlfALxSwI3cAAAD8yvIvoAA");
	this.shape_1.setTransform(21.1,-280.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaIzqSym, new cjs.Rectangle(-55.2,-404,152.5,244.6), null);


(lib.finSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAoIAAgvQgBgIgBgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape.setTransform(11.9,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_1.setTransform(6.1,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIBHAAIAAANIg5AAIAAAhIAyAAIAAAMIgyAAIAAAxg");
	this.shape_2.setTransform(0.1,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0066FF").ss(1,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");
	this.shape_3.setTransform(4.5,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBJhJBnAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhnAAhJhJg");
	this.shape_4.setTransform(4.5,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.finSym, new cjs.Rectangle(-21.5,-21.2,52,52), null);


(lib.Error = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txtIncorrecto = new cjs.Text("INCORRECTO", "13px 'Arial'", "#FF0000");
	this.txtIncorrecto.name = "txtIncorrecto";
	this.txtIncorrecto.lineHeight = 17;
	this.txtIncorrecto.lineWidth = 88;
	this.txtIncorrecto.parent = this;
	this.txtIncorrecto.setTransform(-52,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.txtIncorrecto).wait(1));

}).prototype = getMCSymbolPrototype(lib.Error, new cjs.Rectangle(-54,-27.7,92,18.5), null);


(lib.entradaSymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfAgIAAgmIgBgKIgDgEQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgDgDQgCgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape.setTransform(-4.2,-6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_1.setTransform(-12.6,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_2.setTransform(-19.2,-6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0066FF").ss(1,1,1).p("AkhjHIMVAAIjNGPIsaAAg");
	this.shape_3.setTransform(-9,-6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AnzDIIDSmPIMVAAIjNGPg");
	this.shape_4.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entradaSymb, new cjs.Rectangle(-60,-27,102,42), null);


(lib.BotonSi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgIBHIAAiOIASAAIAACOg");
	this.shape.setTransform(8.7,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgcBEQgNgFgHgMQgHgLgBgPIASgBQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgDADgFQAFgGAAgGQgBgHgDgFQgEgFgJgDQgGgDgTgFQgTgEgIgEQgKgFgGgIQgEgIAAgJQAAgMAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAHAKQAGAKAAANIgSABQgBgOgJgGQgIgIgQAAQgRABgHAGQgJAGABAJQAAAIAFAFQAGAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHAKQgGALgMAFQgMAGgQAAQgTAAgNgGg");
	this.shape_1.setTransform(-0.9,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(0.7,1,1).p("AjCkSIGFAAQCWAAAACWIAAD5QAACWiWAAImFAAQiWAAAAiWIAAj5QAAiWCWAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCETQiWAAAAiWIAAj5QAAiWCWAAIGFAAQCWAAAACWIAAD5QAACWiWAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBHIAAiOIASAAIAACOg");
	this.shape_4.setTransform(8.7,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBEQgNgFgHgMQgHgLgBgPIASgBQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgDADgFQAFgGAAgGQgBgHgDgFQgEgFgJgDQgGgDgTgFQgTgEgIgEQgKgFgGgIQgEgIAAgJQAAgMAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAHAKQAGAKAAANIgSABQgBgOgJgGQgIgIgQAAQgRABgHAGQgJAGABAJQAAAIAFAFQAGAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHAKQgGALgMAFQgMAGgQAAQgTAAgNgGg");
	this.shape_5.setTransform(-0.9,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AjCETQiWAAAAiWIAAj5QAAiWCWAAIGFAAQCWAAAACWIAAD5QAACWiWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-28.5,71,57);


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


(lib.BotonNo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgjBAQgQgKgIgQQgJgSABgSQAAgjATgUQATgUAdAAQAUAAAQAJQAQAKAJAQQAIARAAAVQAAAWgJARQgJASgQAIQgQAJgTAAQgTAAgQgKgAghgrQgPAOAAAfQAAAaAOAPQAOAPAUAAQAVgBAOgPQAOgOAAgcQAAgQgGgOQgGgNgLgGQgMgIgOAAQgTAAgOAOg");
	this.shape.setTransform(9.3,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAlBHIhKhvIAABvIgTAAIAAiOIAUAAIBLBwIAAhwIASAAIAACOg");
	this.shape_1.setTransform(-5.8,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(0.7,1,1).p("ADDETImFAAQiWAAAAiWIAAj5QAAiWCWAAIGFAAQCWAAAACWIAAD5QAACWiWAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCETQiWAAAAiWIAAj5QAAiWCWAAIGFAAQCWAAAACWIAAD5QAACWiWAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBAQgQgKgIgQQgJgSABgSQAAgjATgUQATgUAdAAQAUAAAQAJQAQAKAJAQQAIARAAAVQAAAWgJARQgJASgQAIQgQAJgTAAQgTAAgQgKgAghgrQgPAOAAAfQAAAaAOAPQAOAPAUAAQAVgBAOgPQAOgOAAgcQAAgQgGgOQgGgNgLgGQgMgIgOAAQgTAAgOAOg");
	this.shape_4.setTransform(9.3,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBHIhKhvIAABvIgTAAIAAiOIAUAAIBLBwIAAhwIASAAIAACOg");
	this.shape_5.setTransform(-5.8,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FF00").ss(0.7,1,1).p("AjCkSIGFAAQCWAAAACWIAAD5QAACWiWAAImFAAQiWAAAAiWIAAj5QAAiWCWAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AjCETQiWAAAAiWIAAj5QAAiWCWAAIGFAAQCWAAAACWIAAD5QAACWiWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-28.5,71,57);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TxtNo();
	this.instance.parent = this;
	this.instance.setTransform(14.6,10.4,1,1,0,0,0,5.5,-24.5);

	this.instance_1 = new lib.flechaSym();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.6,12.9,1,0.164,0,0,0,-28.4,-57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-0.6,44.1,26.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TxtSi();
	this.instance.parent = this;
	this.instance.setTransform(100.3,224.4,1,1,0,0,0,1,-24.5);

	this.instance_1 = new lib.flechaIzqSym();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.8,173.2,1,1,0,0,0,18.6,-227.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.3,-3.5,151.2,243.9), null);


// stage content:
(lib.dowhile = function(mode,startPosition,loop) {
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
	}
	this.frame_131 = function() {
		this.stop();
		var root = this;
		var flag = true;
		txtboxNumero.focus();
		var box = document.getElementById("txtboxNumero");
		box.setAttribute("placeholder", "Presione enter");
		box.value = "";
		num2 = "";
		root.mc4.txtOrden.text = "\"Número:\" ";
		
		window.addEventListener("keydown", keyPressed);
		
		
		function keyPressed(evt) {
		
		    var k = evt.key.toLowerCase();
		    //alert(k);
			if( k == "enter" && !isNaN(box.value) && box.value != "" && flag){
				flag = false;
				//cont++;
				//alert(cont);
				//alert(box.value);
				num2 = box.value;
				root.play();
				root.mc4.txtOrden.text += box.value.toString();
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
	this.frame_263 = function() {
		//var cont = 3;
		var num = num2;
		var digitoSig;
		var root = this;
		this.mcDigito.txtDigito.text = "";
		//alert(num2)
		
		//digitoSig = num % 10;
		//root.mcDigito.txtDigito.text += Math.trunc(digitoSig).toString();
		
		this.botonNo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_192.bind(this));
		this.botonSi.addEventListener("click", seguir);
		
		
		
		
		function fl_ClickToGoToAndPlayFromFrame_192()
		{
			if(num >= 1){
				//alert("Incorrecto");
				this.gotoAndPlay(457);
			}else{
				this.gotoAndPlay(517);
			}
			
		}
		
		
		function seguir()
		{
			//this.gotoAndPlay(157);
			if(num >=1){
				//cont--;
				//alert(cont);
				digitoSig = num % 10;
				root.mcDigito.txtDigito.text += Math.trunc(digitoSig).toString();
				//root.mcDigito.txtDigito.text = "";
				num = num / 10;
				root.txtNumero.text = "NUMERO = ".concat(Math.trunc(num).toString());
				//alert(num);
				root.gotoAndPlay(483);
			}else{
				//alert("Incorrecto");
				root.gotoAndPlay(457);
			}
		}
	}
	this.frame_454 = function() {
		this.gotoAndPlay(432);
	}
	this.frame_480 = function() {
		this.gotoAndPlay(432);
	}
	this.frame_514 = function() {
		this.gotoAndPlay(264);
	}
	this.frame_623 = function() {
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
				root.gotoAndPlay(1);
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(131).call(this.frame_131).wait(132).call(this.frame_263).wait(191).call(this.frame_454).wait(26).call(this.frame_480).wait(34).call(this.frame_514).wait(109).call(this.frame_623).wait(2));

	// BackToStart
	this.txtControl2 = new cjs.Text("RESTART", "12px 'Arial'", "#FFFFFF");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},623).wait(2));

	// ActionStopPlay
	this.txtInicio = new cjs.Text("HAZ CLICK EN EL BOTON PARA INICIAR LA ANIMACIÓN", "20px 'Arial'", "#009900");
	this.txtInicio.name = "txtInicio";
	this.txtInicio.lineHeight = 24;
	this.txtInicio.lineWidth = 537;
	this.txtInicio.parent = this;
	this.txtInicio.setTransform(400,61.1);

	this.txtControl = new cjs.Text("PLAY", "12px 'Arial'", "#FFFFFF");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio}]}).to({state:[]},623).wait(2));

	// Fin
	this.instance = new lib.finSym();
	this.instance.parent = this;
	this.instance.setTransform(823,722.9,1,1,0,0,0,4.5,4.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(540).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(72).to({_off:true},1).wait(1));

	// Flecha9
	this.instance_1 = new lib.flechaSym();
	this.instance_1.parent = this;
	this.instance_1.setTransform(822,684.7,1,0.164,0,0,0,-28.4,-57);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(540).to({_off:false},0).wait(1).to({regY:-58.7,y:684.4,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(72).to({_off:true},1).wait(1));

	// Paso10
	this.instance_2 = new lib.Txt10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(267.6,688,1,1,0,0,0,1,-13.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(516).to({_off:false},0).wait(1).to({regX:1.2,regY:-13.6,x:267.8,y:687.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(96).to({_off:true},1).wait(1));

	// Num
	this.txtNumero = new cjs.Text("", "13px 'Arial'", "#00FF00");
	this.txtNumero.name = "txtNumero";
	this.txtNumero.lineHeight = 17;
	this.txtNumero.lineWidth = 109;
	this.txtNumero.parent = this;
	this.txtNumero.setTransform(629,372.2);
	this.txtNumero._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txtNumero).wait(482).to({_off:false},0).wait(32).to({color:"#000000"},0).to({_off:true},2).wait(109));

	// Incorrecto
	this.instance_3 = new lib.Error();
	this.instance_3.parent = this;
	this.instance_3.setTransform(585.1,611,1,1,0,0,0,-8,-18.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(456).to({_off:false},0).wait(1).to({regY:-18.5,y:610.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(143));

	// Tapa
	this.instance_4 = new lib.Tapa();
	this.instance_4.parent = this;
	this.instance_4.setTransform(499.5,613.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(263).to({_off:false},0).wait(168).to({alpha:0},0).wait(192).to({_off:true},1).wait(1));

	// ActionIf
	this.botonNo = new lib.BotonNo();
	this.botonNo.name = "botonNo";
	this.botonNo.parent = this;
	this.botonNo.setTransform(525,612.4,0.725,0.691);
	new cjs.ButtonHelper(this.botonNo, 0, 1, 1);

	this.botonSi = new lib.BotonSi();
	this.botonSi.name = "botonSi";
	this.botonSi.parent = this;
	this.botonSi.setTransform(455.1,612.4,0.725,0.691);
	new cjs.ButtonHelper(this.botonSi, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonSi},{t:this.botonNo}]},263).to({state:[]},192).to({state:[]},169).wait(1));

	// FlechaNo
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(803.4,684.5,1,1,0,0,0,22,12.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(431).to({_off:false},0).wait(1).to({regX:23.6,x:805,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(168).to({_off:true},1).wait(1));

	// FlechaSi
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(713,516.1,1,1,0,0,0,75.3,118.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(431).to({_off:false},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(168).to({_off:true},1).wait(1));

	// If
	this.instance_7 = new lib.IfSym();
	this.instance_7.parent = this;
	this.instance_7.setTransform(821.9,636.6,1,1,0,0,0,-19.6,-17.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(407).to({_off:false},0).wait(1).to({regX:-19.5,x:822,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(203).to({_off:true},1).wait(1));

	// Flecha8
	this.instance_8 = new lib.flechaSym();
	this.instance_8.parent = this;
	this.instance_8.setTransform(822,589,1,0.164,0,0,0,-28.4,-50.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(407).to({_off:false},0).wait(1).to({regY:-58.7,y:587.7,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(203).to({_off:true},1).wait(1));

	// Paso9
	this.instance_9 = new lib.Txt9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(332.1,609,1,1,0,0,0,65.5,-13.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(383).to({_off:false},0).wait(1).to({regX:66.2,regY:-12.2,x:332.8,y:610.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(228).to({_off:true},1).wait(1));

	// Proceso2
	this.instance_10 = new lib.ProcesoSymb3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(841,551.1,1,1,0,0,0,0.5,-1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(359).to({_off:false},0).wait(1).to({regX:-14.5,regY:-0.9,x:826,y:551.2,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(252).to({_off:true},1).wait(1));

	// Flecha7
	this.instance_11 = new lib.flechaSym();
	this.instance_11.parent = this;
	this.instance_11.setTransform(822,513.5,1,0.164,0,0,0,-28.4,-47.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(359).to({_off:false},0).wait(1).to({regY:-58.7,y:511.6,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(252).to({_off:true},1).wait(1));

	// Paso8
	this.instance_12 = new lib.Txt8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(259,530,1,1,0,0,0,-3.1,-13.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(335).to({_off:false},0).wait(1).to({regX:59.5,regY:-2.7,x:321.6,y:540.8,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(276).to({_off:true},1).wait(1));

	// Impr3
	this.mcDigito = new lib.impr3Sym();
	this.mcDigito.name = "mcDigito";
	this.mcDigito.parent = this;
	this.mcDigito.setTransform(827,478.1,1,1,0,0,0,21.1,11.6);
	this.mcDigito.alpha = 0;
	this.mcDigito._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDigito).wait(311).to({_off:false},0).wait(1).to({regX:21,x:826.9,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(299).to({_off:true},1).wait(1));

	// Flecha6
	this.instance_13 = new lib.flechaSym();
	this.instance_13.parent = this;
	this.instance_13.setTransform(822,437.9,1,0.164,0,0,0,-28.4,-57.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(311).to({_off:false},0).wait(1).to({regY:-58.7,y:437.7,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(299).to({_off:true},1).wait(1));

	// Paso7
	this.instance_14 = new lib.Txt7();
	this.instance_14.parent = this;
	this.instance_14.setTransform(306.6,465,1,1,0,0,0,44.5,-13.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(287).to({_off:false},0).wait(1).to({regX:44.1,regY:-12.2,x:306.2,y:466.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(324).to({_off:true},1).wait(1));

	// Proceso1
	this.instance_15 = new lib.ProcesoSymb2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(828,400.3,1,1,0,0,0,0.5,-1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(263).to({_off:false},0).wait(1).to({regY:-0.9,y:400.4,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(346).to({_off:true},1).wait(1));

	// Flecha5
	this.instance_16 = new lib.flechaSym();
	this.instance_16.parent = this;
	this.instance_16.setTransform(822,358.3,1,0.222,0,0,0,-28.4,-57.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(263).to({_off:false},0).wait(1).to({regY:-58.7,y:358,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(346).to({_off:true},1).wait(1));

	// Paso6
	this.instance_17 = new lib.Txt6();
	this.instance_17.parent = this;
	this.instance_17.setTransform(351.1,385,1,1,0,0,0,3,-15.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(239).to({_off:false},0).wait(1).to({regX:2.3,regY:-13.8,x:350.4,y:386.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(372).to({_off:true},1).wait(1));

	// Impr2
	this.instance_18 = new lib.impr2Sym();
	this.instance_18.parent = this;
	this.instance_18.setTransform(831,314.7,1,1,0,0,0,21.1,14.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(215).to({_off:false},0).wait(1).to({regX:21,x:830.9,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(395).to({_off:true},1).wait(1));

	// Flecha4
	this.instance_19 = new lib.flechaSym();
	this.instance_19.parent = this;
	this.instance_19.setTransform(822,271,1,0.164,0,0,0,-28.4,-50.9);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(215).to({_off:false},0).wait(1).to({regY:-58.7,y:269.7,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(395).to({_off:true},1).wait(1));

	// Paso5
	this.instance_20 = new lib.Txt5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(352.6,290.1,1,1,0,0,0,4.5,-24.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(191).to({_off:false},0).wait(1).to({regX:3.8,regY:-23.2,x:351.9,y:291.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(420).to({_off:true},1).wait(1));

	// Impr1
	this.mc4 = new lib.impr1Sym();
	this.mc4.name = "mc4";
	this.mc4.parent = this;
	this.mc4.setTransform(825,229.3,1,1,0,0,0,15.1,11.5);
	this.mc4.alpha = 0;
	this.mc4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc4).wait(167).to({_off:false},0).wait(1).to({regX:21,regY:14,x:830.9,y:231.8,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(443).to({_off:true},1).wait(1));

	// Flecha3
	this.instance_21 = new lib.flechaSym();
	this.instance_21.parent = this;
	this.instance_21.setTransform(822,192.6,1,0.119,0,0,0,-28.4,-53.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(167).to({_off:false},0).wait(1).to({regY:-58.7,y:191.9,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(443).to({_off:true},1).wait(1));

	// Paso4
	this.instance_22 = new lib.Txt4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(327.1,218.1,1,1,0,0,0,33,-24.5);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(143).to({_off:false},0).wait(1).to({regX:31.1,regY:-23.2,x:325.2,y:219.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(468).to({_off:true},1).wait(1));

	// textbox
	this.text = new cjs.Text("Ingrese un número", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(635,135.3);

	this.txtboxNumero = new lib.an_TextInput({'id': 'txtboxNumero', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero.setTransform(693.1,172.3,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero},{t:this.text}]},130).to({state:[]},2).wait(493));

	// Entrada
	this.instance_23 = new lib.entradaSymb();
	this.instance_23.parent = this;
	this.instance_23.setTransform(821,163.3,1,1,0,0,0,-9,-6);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(120).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(492).to({_off:true},1).wait(1));

	// Flecha2
	this.instance_24 = new lib.flechaSym();
	this.instance_24.parent = this;
	this.instance_24.setTransform(822,134.1,1,0.119,0,0,0,-28.4,-57.6);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(120).to({_off:false},0).wait(1).to({regY:-58.7,y:133.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(492).to({_off:true},1).wait(1));

	// Paso3
	this.instance_25 = new lib.Txt3();
	this.instance_25.parent = this;
	this.instance_25.setTransform(337.6,151.1,1,1,0,0,0,43.5,-24.5);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(96).to({_off:false},0).wait(1).to({regX:42.4,regY:-24.6,x:336.5,y:151,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(515).to({_off:true},1).wait(1));

	// Declarar
	this.instance_26 = new lib.ProcesoSymb();
	this.instance_26.parent = this;
	this.instance_26.setTransform(821,101.4,1,1,0,0,0,-29.5,-3.5);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(72).to({_off:false},0).wait(1).to({regY:-3.4,y:101.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(539).to({_off:true},1).wait(1));

	// Flecha1
	this.instance_27 = new lib.flechaSym();
	this.instance_27.parent = this;
	this.instance_27.setTransform(822,69.7,1,0.119,0,0,0,-28.4,-53.4);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(72).to({_off:false},0).wait(1).to({regY:-58.7,y:69.1,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(539).to({_off:true},1).wait(1));

	// Paso2
	this.instance_28 = new lib.Txt2();
	this.instance_28.parent = this;
	this.instance_28.setTransform(309.1,85.1,1,1,0,0,0,15,-24.5);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(48).to({_off:false},0).wait(1).to({regX:14.8,regY:-24.6,x:308.9,y:85,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(562).to({_off:true},1).wait(1));

	// Inicio
	this.instance_29 = new lib.inicioSym();
	this.instance_29.parent = this;
	this.instance_29.setTransform(822,34.5,1,1,0,0,0,4.5,0.3);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(24).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(588).to({_off:true},1).wait(1));

	// Paso1
	this.instance_30 = new lib.Txt1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(268,27.1,1,1,0,0,0,-1.1,-24.5);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({regX:-2.6,regY:-24.6,x:266.5,y:27,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(612).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(921.1,400.7,838.8,71.2);
// library properties:
lib.properties = {
	id: '224C1727ACD336479877E52E46F25123',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
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
an.compositions['224C1727ACD336479877E52E46F25123'] = {
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