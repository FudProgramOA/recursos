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

}).prototype = getMCSymbolPrototype(lib.TxtSi, new cjs.Rectangle(-9,-34.9,22,20.8), null);


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


(lib.Txt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape.setTransform(11.3,-12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_1.setTransform(5.4,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjA2IAAhrIBHAAIAAANIg5AAIAAAhIAyAAIAAAMIgyAAIAAAxg");
	this.shape_2.setTransform(-0.5,-13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_3.setTransform(-11.6,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTA1QABgNAEgRQAFgSAJgQQAIgRAKgLIg0AAIAAgNIBFAAIAAALQgKAKgKATQgLARgEASQgEAOgBAQg");
	this.shape_4.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt7, new cjs.Rectangle(-24,-23.9,46,20.8), null);


(lib.Txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape.setTransform(81.3,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_1.setTransform(72.7,-24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_2.setTransform(64.6,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_3.setTransform(56.6,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_4.setTransform(48.7,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_5.setTransform(42.7,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_6.setTransform(35.2,-21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_7.setTransform(27.1,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_8.setTransform(21.2,-24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(13.5,-23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_10.setTransform(6.2,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_11.setTransform(0.3,-24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(-5.5,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIAOAAIgeBNg");
	this.shape_13.setTransform(-13.4,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_14.setTransform(-23,-24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_15.setTransform(-28.9,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(-39.1,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_17.setTransform(-43.8,-24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_18.setTransform(-51.7,-23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_19.setTransform(-59.7,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_20.setTransform(-63.3,-23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_21.setTransform(-70.3,-21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_22.setTransform(-80.9,-23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_23.setTransform(-89.2,-24.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_24.setTransform(-97.5,-20);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYArQgLgNAAgbQAAgfAMgOQAKgMAQAAQANAAAIAIQAIAGACANIgOABQgBgIgDgDQgGgGgIAAQgFAAgFAEQgGAEgEAJQgDAIAAARQAEgIAIgDQAGgEAHAAQANAAAJAKQAKAJgBAPQAAAKgEAJQgEAIgIAFQgIAFgJAAQgPAAgLgMgAgNABQgGAHAAAKQAAAHACAGQADAHAGADQAFADAEAAQAJAAAGgHQAGgGAAgMQAAgLgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_25.setTransform(-103.9,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt6, new cjs.Rectangle(-110,-34.9,203,20.8), null);


(lib.Txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJATIgFgTIAAgSIAPAAIAAASIgDATgAgPATIgDgTIAAgSIAOAAIAAASIgDATg");
	this.shape.setTransform(103.4,-28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_1.setTransform(96.5,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(90.4,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_3.setTransform(83.1,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_4.setTransform(75.5,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_5.setTransform(63.2,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgDgDgCgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_6.setTransform(54.8,-23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_7.setTransform(42.3,-23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_8.setTransform(36.2,-24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_9.setTransform(30.2,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_10.setTransform(22.3,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_11.setTransform(14.3,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_12.setTransform(6.4,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_13.setTransform(0.4,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_14.setTransform(-7.1,-21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_15.setTransform(-15.2,-23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_16.setTransform(-21.4,-24.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAIATIgDgTIAAgSIAPAAIAAASIgEATgAgPATIgEgTIAAgSIAQAAIAAASIgEATg");
	this.shape_17.setTransform(-26.2,-28.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAnIAAgPIAPAAIAAAPgAgHgXIAAgPIAPAAIAAAPg");
	this.shape_18.setTransform(-35,-23.2);

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

}).prototype = getMCSymbolPrototype(lib.Txt5, new cjs.Rectangle(-110,-34.9,223,20.8), null);


(lib.Txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA3IAAgPIAOAAIAAAPgAgGAcIAAgEQAAgIACgFIAFgJIAJgIIAJgJQACgFAAgDQAAgIgGgGQgGgGgJAAQgHAAgGAFQgFAGgCALIgOgBQACgPAJgJQAJgHAOgBQAQAAAJAJQAKAJAAAMQAAAHgEAFQgDAHgKAHQgGAFgCAEIgDAFIgBAMg");
	this.shape.setTransform(76.2,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_1.setTransform(67.9,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(61.8,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_3.setTransform(54.5,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_4.setTransform(46.9,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_5.setTransform(34.5,-23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_6.setTransform(24.5,-24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_7.setTransform(18.7,-23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAlQgGgCgDgFQgDgDgBgHIgCgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQABgFAAgKIAAgpIANAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_8.setTransform(10.3,-23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_9.setTransform(1.8,-21.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA2IAAhNIAMAAIAABNgAgGglIAAgQIAMAAIAAAQg");
	this.shape_10.setTransform(-3.8,-24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_11.setTransform(-13.8,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_12.setTransform(-19.9,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_13.setTransform(-27.2,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_14.setTransform(-37.6,-23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRA0QgFgCgEgFQgCgDgBgHIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQABgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDgAgHgiIAJgUIARAAIgQAUg");
	this.shape_15.setTransform(-48.1,-24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_16.setTransform(-56.4,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_17.setTransform(-68.5,-23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_18.setTransform(-77,-24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAuQgKgIAAgNQAAgHAEgGQADgFAJgIIAJgIIADgHIABgLIAMAAIAAAEQAAAIgDAFQgBAFgDAEIgJAIQgHAGgCAEQgCADAAAEQAAAIAGAGQAGAGAIAAQAIAAAGgFQAFgGACgLIAOACQgCAPgJAIQgJAIgPAAQgPAAgJgJgAgHgnIAAgPIAOAAIAAAPg");
	this.shape_19.setTransform(-86.7,-21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_20.setTransform(-97.5,-20);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAKA2IAAgaIguAAIAAgMIAwhFIAKAAIAABFIAPAAIAAAMIgPAAIAAAagAgXAQIAhAAIAAgvg");
	this.shape_21.setTransform(-104.1,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt4, new cjs.Rectangle(-110,-34.9,198,20.8), null);


(lib.Txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape.setTransform(5.4,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_1.setTransform(-0.4,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_2.setTransform(-6,-5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_3.setTransform(-14.6,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_4.setTransform(-20.4,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_5.setTransform(-24,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_6.setTransform(-31.3,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgOIARgvIAOAAIgdBNg");
	this.shape_7.setTransform(-39.2,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_8.setTransform(-51.3,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_9.setTransform(-57.2,-5.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_10.setTransform(-67.2,-4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(-77.4,-4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_12.setTransform(-84.6,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_13.setTransform(-90.5,-5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_14.setTransform(-96.4,-4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgOIARgvIANAAIgcBNg");
	this.shape_15.setTransform(-104.2,-4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_16.setTransform(-24.6,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAlQgFgCgEgFQgDgDAAgHIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_17.setTransform(-33,-23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_18.setTransform(-43.2,-23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_19.setTransform(-50.5,-23.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_20.setTransform(-58.8,-23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_21.setTransform(-67.4,-21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_22.setTransform(-73,-24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_23.setTransform(-78.5,-23.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_24.setTransform(-87.2,-24.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_25.setTransform(-97.5,-20);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAuQgKgIgBgNIANgCQADALAEAFQAGAFAIAAQAIAAAHgHQAGgGAAgJQAAgKgGgFQgGgHgJAAIgIACIACgLIABAAQAIAAAHgDQAGgFAAgJQAAgHgEgFQgFgFgIAAQgHAAgFAFQgFAFgCAJIgNgCQADgNAIgHQAIgIANAAQAIAAAHAEQAIADAEAIQAEAGAAAHQAAAHgEAGQgEAGgHADQAJACAGAGQAFAHAAALQAAAOgKAJQgLAKgOAAQgOAAgJgJg");
	this.shape_26.setTransform(-103.8,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt3, new cjs.Rectangle(-110,-34.9,128,39.6), null);


(lib.Txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape.setTransform(71.7,-23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQAAgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_1.setTransform(64.4,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_2.setTransform(58.5,-24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_3.setTransform(52.7,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgOIARgvIANAAIgcBNg");
	this.shape_4.setTransform(44.8,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_5.setTransform(32.7,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgEgDgBgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEACgFQACgFABgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgGAAgGgDg");
	this.shape_6.setTransform(24.3,-23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_7.setTransform(14.1,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_8.setTransform(6.8,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_9.setTransform(0.7,-24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_10.setTransform(-3.1,-24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_11.setTransform(-8.3,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_12.setTransform(-14,-24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_13.setTransform(-17.4,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_14.setTransform(-23.2,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAzQgKgEgGgIQgFgJgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJAAQAIAAAGgCQAGgCADgFQADgDAAgGQAAgEgDgFQgDgDgGgDIgSgFQgPgDgGgDQgIgEgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKAAQALAAAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAEQgGAGAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJAEAEAGQAFAGAAAJQAAAIgFAIQgFAIgJAEQgJAEgMABQgNgBgKgEg");
	this.shape_15.setTransform(-32.4,-24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_16.setTransform(-43.5,-20);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgHAMgIQAQgPAHgIQAGgIAAgIQAAgHgFgFQgHgGgJAAQgIAAgGAGQgFAGAAAKIgOgCQACgPAIgIQAKgIAOAAQAPAAAKAJQAJAIAAANQAAAGgDAHQgDAGgGAGQgGAGgPAMIgNAOQgEAEgCAEIA0AAIAAAMg");
	this.shape_17.setTransform(-50,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt2, new cjs.Rectangle(-56,-34.9,133,20.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQAAgSAKgJQAKgHALAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgIAAgFAHg");
	this.shape.setTransform(16.8,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgMIALAAIAAAMg");
	this.shape_1.setTransform(11.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAaQgJgJAAgRQABgKADgIQAEgIAHgEQAIgEAIAAQAKAAAIAFQAGAGACAKIgLACQgBgHgEgDQgFgEgFAAQgIAAgGAGQgEAHAAAMQAAAOAEAGQAFAGAIAAQAHAAAFgEQAEgEABgJIAMACQgCALgIAHQgHAGgMAAQgNAAgIgJg");
	this.shape_2.setTransform(7.2,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgMIALAAIAAAMg");
	this.shape_3.setTransform(2.3,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQgBgDgDgCQgEgCgEAAQgGgBgGAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAIgMANAAQAFAAAFADQAFACADADQADAEAAAFIABALIAAAog");
	this.shape_4.setTransform(-2.8,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAuIAAhbIALAAIAABbg");
	this.shape_5.setTransform(-8.2,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");
	this.shape_6.setTransform(4.5,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBJhJBnAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhnAAhJhJg");
	this.shape_7.setTransform(4.5,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inicioSym, new cjs.Rectangle(-21.5,-21.2,52,52), null);


(lib.impr2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape.setTransform(25.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_1.setTransform(19.6,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQADgCAEAAQAFAAAGADIgEALQgEgDgEABQgEAAgCABQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_2.setTransform(14.3,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAJgJANAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAGAGAHAAQAGAAAEgDQAFgEADgHIALACQgDAKgHAGQgIAFgLAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_3.setTransform(8,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAaQgJgJABgRQgBgKAEgIQAEgIAHgEQAHgEAIAAQAMAAAGAFQAHAGACAKIgLACQgBgHgFgDQgDgEgHAAQgHAAgFAGQgGAHAAAMQAAAOAGAGQAEAGAIAAQAHAAAEgEQAFgEABgJIALACQgCALgHAHQgIAGgLAAQgMAAgJgJg");
	this.shape_4.setTransform(1.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgBgDgEgCQgEgCgEAAQgHgBgEAFQgGAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAHgLAOAAQAFAAAGACQAEACADADQACAEABAFIABALIAAAog");
	this.shape_5.setTransform(-9.4,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgEQgDgDgBgFIAAgKIAAgqIALAAIAAAlIABAMQABAFADACQAEACAFABQAEgBAFgCQAEgCACgFQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGgBgGgCg");
	this.shape_6.setTransform(-16.7,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEADgHIALACQgCAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_7.setTransform(41.5,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgDAAgLIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAGIACACIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_8.setTransform(36.2,-2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAeQgHgGgCgKIALgCQABAHAFADQAEAEAHAAQAHAAAEgDQAEgEAAgEQAAgEgDgCIgMgEQgLgDgFgCQgFgCgDgEQgCgEAAgFQAAgEACgEQACgEAEgCIAHgEQAFgBAFAAQAGAAAGACQAHACACAEQAEAEABAHIgLABQgCgFgDgDQgEgDgGAAQgIAAgCADQgEACAAAEQAAAAAAABQAAAAAAABQABABAAAAQAAAAAAABQACACADABIAJADIARAFQAFABADAEQACAEAAAGQAAAGgDAFQgEAFgGADQgGACgIAAQgMAAgHgFg");
	this.shape_9.setTransform(31,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_10.setTransform(24.1,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAeQgHgGgCgKIALgCQACAHAEADQAEAEAHAAQAHAAAFgDQADgEAAgEQAAgEgDgCIgMgEQgMgDgEgCQgFgCgCgEQgDgEAAgFQAAgEACgEQACgEADgCIAIgEQAFgBAFAAQAHAAAGACQAFACAEAEQADAEAAAHIgKABQgBgFgEgDQgEgDgGAAQgHAAgDADQgEACAAAEQAAAAAAABQAAAAAAABQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAIAKADIARAFQAFABACAEQADAEAAAGQAAAGgDAFQgDAFgHADQgGACgIAAQgNAAgGgFg");
	this.shape_11.setTransform(17.3,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAIgJANAAQAOAAAJAJQAIAJAAAQIAAADIgxAAQAAALAGAGQAGAGAHAAQAGAAAEgDQAFgEACgHIAMACQgDAKgHAGQgHAFgMAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgGAAgGAFg");
	this.shape_12.setTransform(10.4,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAALQAEgIADgCQADgCAEgBQAFABAGADIgEALQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_13.setTransform(5.1,-1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_14.setTransform(-1.4,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgCgEQgBgEgDgBQgDgDgFAAQgGAAgGAFQgFAFAAANIAAAkIgLAAIAAhDIAKAAIAAAJQAIgKAMgBQAHABAEACQAFACADADQACAEACAFIABALIAAApg");
	this.shape_15.setTransform(-8.4,-1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAvIAAhcIALAAIAABcg");
	this.shape_16.setTransform(-13.8,-2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAQIgDgRIAAgOIANAAIAAAOIgDARgAgNAQIgDgRIAAgOIANAAIAAAOIgDARg");
	this.shape_17.setTransform(-17.9,-5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkSIQcAAQAhAAAAAmIAAEeQlxAuhdA5Qj9CalygoQgiAAAAgmIAAnRQAAgmAiAAg");
	this.shape_18.setTransform(21.1,11.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066FF").s().p("AoNELQgiAAAAgmIAAnRQAAgmAiAAIQcAAQAhAAAAAmIAAEeQlxAuheA5QjIB6kSAAQhHAAhNgIg");
	this.shape_19.setTransform(21.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr2Sym, new cjs.Rectangle(-35.9,-16.9,114,57), null);


(lib.impr1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape.setTransform(28.3,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgRQgBgSALgJQAJgHALAAQAOAAAJAJQAIAJABAQQAAAMgFAIQgEAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAIAAAGgHQAGgGgBgNQABgMgGgGQgGgHgIAAQgIAAgFAHg");
	this.shape_1.setTransform(22.3,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQADgCAEAAQAFAAAGADIgEALQgEgDgEABQgEAAgCABQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_2.setTransform(17,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAJgJAMAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAFAGAIAAQAGAAAFgDQAEgEACgHIANACQgDAKgIAGQgHAFgMAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgJAAQgGAAgGAFg");
	this.shape_3.setTransform(10.7,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAiIAAgpIgBgKQgBgDgDgBQgDgCgEAAQgHgBgFAFQgEAFAAALIAAAlIgLAAIAAgrQAAgHgCgEQgDgDgHAAQgEAAgEACQgFADgBAFQgCAFAAAIIAAAiIgMAAIAAhCIALAAIAAAKQADgGAFgCQAFgDAHAAQAHAAAFADQAEADACAGQAIgMANAAQAKgBAFAGQAGAFAAAMIAAAtg");
	this.shape_4.setTransform(1.7,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAtQgFgCgCgEQgDgDgBgFIAAgKIAAgqIALAAIAAAlQAAAJABADQABAFADACQAEACAFABQAEgBAFgCQAEgCACgFQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGgBgGgCgAgGgdIAHgSIAPAAIgOASg");
	this.shape_5.setTransform(-7.4,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQAAgDgEgCQgDgCgFAAQgGgBgFAFQgGAEAAANIAAAkIgLAAIAAhCIAKAAIAAAKQAIgLAMAAQAHAAAEACQAGACACADQADAEABAFIABALIAAAog");
	this.shape_6.setTransform(-14.6,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgBgEQgBgEgEgBQgDgDgFAAQgHAAgEAFQgGAFAAANIAAAkIgMAAIAAhDIALAAIAAAJQAHgKAOgBQAGABAFACQAEACADADQACAEABAFIABALIAAApg");
	this.shape_7.setTransform(44.3,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgDQgDgEgBgFIAAgKIAAgpIALAAIAAAkIABAMQABAEADADQAEACAFAAQAEAAAFgCQAEgDACgEQACgEAAgJIAAgjIALAAIAABCIgKAAIAAgKQgIAMgMAAQgGAAgGgDg");
	this.shape_8.setTransform(37,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAIgJANAAQAOAAAJAJQAIAJAAAQIAAADIgxAAQAAALAGAGQAGAGAHAAQAGAAAEgDQAFgEACgHIAMACQgDAKgHAGQgHAFgMAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgGAAgGAFg");
	this.shape_9.setTransform(26.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAeQgHgGgCgKIAMgCQABAHADADQAFAEAHAAQAHAAAFgDQADgEAAgEQAAgEgDgCIgMgEQgMgDgEgCQgFgCgCgEQgDgEAAgFQAAgEACgEQACgEADgCIAIgEQAFgBAEAAQAHAAAHACQAGACADAEQACAEABAHIgLABQgBgFgDgDQgEgDgGAAQgHAAgEADQgDACAAAEQAAAAAAABQAAAAAAABQABABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAQABABAAAAIAKADIARAFQAEABADAEQADAEAAAGQAAAGgEAFQgDAFgGADQgGACgIAAQgNAAgGgFg");
	this.shape_10.setTransform(19.3,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAIgJANAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEACgHIANACQgEAKgHAGQgIAFgLAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgGAAgGAFg");
	this.shape_11.setTransform(12.4,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAALQAEgIADgCQADgCAEgBQAFABAGADIgEALQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_12.setTransform(7.1,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_13.setTransform(0.6,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgCgEQAAgEgEgBQgEgDgEAAQgHAAgEAFQgGAFAAANIAAAkIgLAAIAAhDIAKAAIAAAJQAHgKANgBQAGABAGACQAFACACADQADAEABAFIABALIAAApg");
	this.shape_14.setTransform(-6.4,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFAvIAAhcIALAAIAABcg");
	this.shape_15.setTransform(-11.8,-2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHAQIgDgRIAAgOIANAAIAAAOIgDARgAgNAQIgDgRIAAgOIANAAIAAAOIgDARg");
	this.shape_16.setTransform(-15.9,-5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkSIQcAAQAhAAAAAlIAAEeQlxAvhdA5Qj9CZlygnQgiAAAAgmIAAnSQAAglAiAAg");
	this.shape_17.setTransform(21.1,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AoNELQgiAAAAgmIAAnSQAAglAiAAIQcAAQAhAAAAAlIAAEeQlxAvheA5QjJB6kTAAQhGAAhMgIg");
	this.shape_18.setTransform(21.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr1Sym, new cjs.Rectangle(-35.9,-16.9,114,57), null);


(lib.IfSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAmQgJgLAAgbQAAgPADgKQADgLAHgFQAHgGAJAAQAHABAGADQAGACADAHQAEAFACAIQACAIAAANQAAAQgDALQgDAJgHAGQgHAFgKABQgMgBgIgJgAgMgfQgGAJAAAWQAAAXAGAHQAFAIAHAAQAIAAAFgIQAGgHAAgXQAAgWgGgIQgFgHgIAAQgHAAgFAGg");
	this.shape.setTransform(31.7,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAUIAAgLIA9AAIAAALgAgegHIAAgLIA9AAIAAALg");
	this.shape_1.setTransform(20.7,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAUIAAgLIA9AAIAAALgAgegHIAAgLIA9AAIAAALg");
	this.shape_2.setTransform(13.1,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAJAJAAAQQAAAMgDAIQgEAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGAAgNQAAgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_3.setTransform(2.1,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAAKQAEgHADgCQADgCAEAAQAFgBAGAEIgEALQgEgCgEgBQgEAAgCACQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_4.setTransform(-3.2,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAJgJANAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAFAGAIAAQAGAAAEgDQAFgEACgHIAMACQgDAKgHAGQgIAFgLAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgHAAgFAFg");
	this.shape_5.setTransform(-9.5,-2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiAiIAAgpIgBgKQgBgDgDgCQgDgBgEAAQgHgBgFAFQgEAFAAAKIAAAmIgLAAIAAgrQAAgHgCgEQgDgDgHAAQgEgBgEADQgFADgBAFQgCAFAAAIIAAAiIgMAAIAAhCIALAAIAAAKQADgFAFgEQAFgCAHAAQAHAAAFACQAEAEACAFQAIgLANAAQAKgBAFAGQAGAFAAAMIAAAtg");
	this.shape_6.setTransform(-18.5,-2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgEQgDgDgBgFIAAgLIAAgpIALAAIAAAlIABAMQABAFADACQAEACAFABQAEgBAFgCQAEgCACgFQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGgBgGgCg");
	this.shape_7.setTransform(-27.6,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgCgDgDgDQgEgBgEAAQgHgBgFAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAHgLAOAAQAGAAAEACQAFACADAEQADADAAAFIABALIAAAog");
	this.shape_8.setTransform(-34.8,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0066FF").ss(1,1,1).p("AISAAIoSISIoRoSIISoRg");
	this.shape_9.setTransform(-1.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AoRAAIISoRIIRIRIoSISg");
	this.shape_10.setTransform(-1.6,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IfSym, new cjs.Rectangle(-55.5,-53.3,108,108.1), null);


(lib.flechaSym3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiGqIAAh9IAgFAIAA11IAFAAIAAV1IAglAIAAB9IgjFgg");
	this.shape.setTransform(-28.4,-58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ao+AAIR9AA");
	this.shape_1.setTransform(29.2,-136.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaSym3, new cjs.Rectangle(-31.9,-137.4,119.6,156.5), null);


(lib.flechaSym2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABHAjIBMggIlKAAIAAgFIFKAAIhMggIAeAAIBTAiIhTAjg");
	this.shape.setTransform(126.1,-256.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ArtAAIXbAA");
	this.shape_1.setTransform(51.6,-256.5,1.067,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAnBIAAOD");
	this.shape_2.setTransform(-28.3,-302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaSym2, new cjs.Rectangle(-29.4,-348,173.9,95.1), null);


(lib.flechaSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiGqIAAh9IAgFAIAA11IAFAAIAAV1IAglAIAAB9IgjFgg");
	this.shape.setTransform(-28.4,-58.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaSym, new cjs.Rectangle(-31.9,-136.4,7.1,155.5), null);


(lib.flechaLargaSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhSAjIhGgjIBGgiIAYAAIg/AgIESAAIAAAFIkSAAIA/Agg");
	this.shape.setTransform(-142.2,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("ANSuOIAAACIAAcbI6jAAAm/uMIURAA");
	this.shape_1.setTransform(-59.4,-69.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaLargaSym, new cjs.Rectangle(-157.5,-161.7,184.1,186.8), null);


(lib.finSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgCgEQgBgDgDgCQgDgCgFgBQgGAAgGAFQgFAFAAANIAAAkIgLAAIAAhDIAKAAIAAAKQAIgMAMAAQAHAAAEADQAFACADADQACAEACAFIABALIAAApg");
	this.shape.setTransform(10.5,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFghIAAgMIALAAIAAAMg");
	this.shape_1.setTransform(5.4,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAvIAAhcIA+AAIAAALIgxAAIAAAcIAqAAIAAAKIgqAAIAAArg");
	this.shape_2.setTransform(0.2,3);

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgWApQgLgGgFgKQgFgMgBgMQAAgWANgNQAMgNATAAQANAAAKAGQALAGAFALQAGALgBANQAAAOgFAMQgGAKgKAHQgLAFgMAAQgNAAgJgHgAgVgbQgKAIAAAUQAAARAJAKQAJAJANAAQANAAAKgJQAIgKABgSQgBgLgDgIQgEgJgIgEQgHgFgJABQgMAAgJAJg");
	this.shape.setTransform(30.4,-18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgGAuIAAhQIgeAAIAAgLIBJAAIAAALIgfAAIAABQg");
	this.shape_1.setTransform(21.4,-18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgVAqQgJgGgFgMQgFgLAAgNQAAgOAGgLQAFgLAKgGQALgFALAAQAOAAAKAHQAJAHADANIgLADQgEgKgGgFQgGgFgJABQgKAAgHAEQgIAGgCAJQgDAIgBAJQAAALAEAJQAEAJAHAEQAHAEAIAAQAKABAHgHQAIgFACgMIAMADQgEAPgJAIQgLAIgOAAQgOAAgKgGg");
	this.shape_2.setTransform(12.7,-18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AghAuIAAhbIBBAAIAAALIg2AAIAAAcIAzAAIAAAKIgzAAIAAAgIA5AAIAAAKg");
	this.shape_3.setTransform(3.8,-18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAaAuIgNgTIgJgNIgEgGIgHgDIgGAAIgOAAIAAApIgNAAIAAhbIAoAAQANAAAGACQAHADADAGQAFAGAAAIQAAAKgHAGQgGAHgNABIAHAFQAFAFAFAHIAQAZgAgbgFIAaAAQAHABAFgCQAFgCACgEQADgEAAgEQAAgHgFgEQgFgFgKABIgcAAg");
	this.shape_4.setTransform(-5,-18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAZAuIgMgTIgJgNIgFgGIgFgDIgHAAIgPAAIAAApIgMAAIAAhbIApAAQAMAAAHACQAGADAEAGQADAGAAAIQAAAKgGAGQgGAHgOABIAIAFQAFAFAFAHIAQAZgAgcgFIAbAAQAHABAFgCQAFgCADgEQACgEAAgEQAAgHgFgEQgFgFgKABIgdAAg");
	this.shape_5.setTransform(-14.4,-18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgWApQgLgGgFgKQgFgMgBgMQAAgWANgNQAMgNATAAQANAAAKAGQALAGAFALQAGALgBANQAAAOgFAMQgGAKgKAHQgLAFgMAAQgNAAgJgHgAgVgbQgKAIAAAUQAAARAJAKQAJAJANAAQANAAAKgJQAIgKABgSQgBgLgDgIQgEgJgIgEQgHgFgJABQgMAAgJAJg");
	this.shape_6.setTransform(-24.5,-18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgUAqQgKgGgFgMQgFgLAAgNQAAgOAFgLQAGgLALgGQAKgFALAAQAOAAAKAHQAJAHADANIgMADQgCgKgHgFQgGgFgKABQgJAAgIAEQgGAGgEAJQgCAIAAAJQgBALAEAJQADAJAIAEQAHAEAHAAQALABAHgHQAHgFADgMIAMADQgDAPgLAIQgKAIgPAAQgOAAgIgGg");
	this.shape_7.setTransform(-34.2,-18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAYAuIgwhHIAABHIgMAAIAAhbIANAAIAwBIIAAhIIALAAIAABbg");
	this.shape_8.setTransform(-43.7,-18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgFAuIAAhbIALAAIAABbg");
	this.shape_9.setTransform(-50.2,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Error, new cjs.Rectangle(-54,-27.7,92,18.5), null);


(lib.entradaSymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQAAgSALgJQAJgHALAAQAOAAAIAJQAJAJAAAQQAAAMgDAIQgEAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAJAAAFgHQAFgGAAgNQAAgMgFgGQgFgHgJAAQgHAAgHAHg");
	this.shape.setTransform(18.9,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAAKQAEgHADgCQADgCAEAAQAFgBAGAEIgEALQgEgCgEgBQgEAAgCACQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_1.setTransform(13.6,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAIgJANAAQAOAAAJAJQAIAJAAAQIAAADIgxAAQAAALAGAGQAGAGAHAAQAGAAAEgDQAFgEACgHIAMACQgDAKgHAGQgHAFgMAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgGAAgGAFg");
	this.shape_2.setTransform(7.3,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiAiIAAgpIgBgKQgBgDgDgCQgDgBgEAAQgHgBgFAFQgEAFAAAKIAAAmIgLAAIAAgrQAAgHgCgEQgDgDgHAAQgEgBgEADQgFADgBAFQgCAFAAAIIAAAiIgMAAIAAhCIALAAIAAAKQADgFAFgEQAFgCAHAAQAHAAAFACQAEAEACAFQAIgLANAAQAKgBAFAGQAGAFAAAMIAAAtg");
	this.shape_3.setTransform(-1.8,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgEQgDgDgBgFIAAgLIAAgpIALAAIAAAlIABAMQABAFADACQAEACAFABQAEgBAFgCQAEgCACgFQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGgBgGgCg");
	this.shape_4.setTransform(-10.9,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQgBgDgDgDQgEgBgEAAQgGgBgGAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAIgLANAAQAFAAAFACQAFACADAEQADADAAAFIABALIAAAog");
	this.shape_5.setTransform(-18.1,-2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("Alaj5IOyAAIj2HzIu5AAg");
	this.shape_6.setTransform(0.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("ApXD6ID9nzIOyAAIj2Hzg");
	this.shape_7.setTransform(0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entradaSymb, new cjs.Rectangle(-60.2,-26.1,122,52), null);


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
	this.shape_2.graphics.f().s("#00FF00").ss(0.7,1,1).p("AjCkSIGFAAQCWAAAACWIAAD5QAACWiWAAImFAAQiWAAAAiWIAAj5QAAiWCWAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCETQiWAAAAiWIAAj5QAAiWCWAAIGFAAQCWAAAACWIAAD5QAACWiWAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBAQgQgKgIgQQgJgSABgSQAAgjATgUQATgUAdAAQAUAAAQAJQAQAKAJAQQAIARAAAVQAAAWgJARQgJASgQAIQgQAJgTAAQgTAAgQgKgAghgrQgPAOAAAfQAAAaAOAPQAOAPAUAAQAVgBAOgPQAOgOAAgcQAAgQgGgOQgGgNgLgGQgMgIgOAAQgTAAgOAOg");
	this.shape_4.setTransform(9.3,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBHIhKhvIAABvIgTAAIAAiOIAUAAIBLBwIAAhwIASAAIAACOg");
	this.shape_5.setTransform(-5.8,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AjCETQiWAAAAiWIAAj5QAAiWCWAAIGFAAQCWAAAACWIAAD5QAACWiWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-28.5,71,57);


(lib.impr3Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flechaSym();
	this.instance.parent = this;
	this.instance.setTransform(20.1,-44.5,1,0.367,0,0,0,-28.4,-59);

	this.imprTxt = new cjs.Text("\"Ingresaste el valor de ", "13px 'Arial'", "#FFFFFF");
	this.imprTxt.name = "imprTxt";
	this.imprTxt.lineHeight = 17;
	this.imprTxt.lineWidth = 94;
	this.imprTxt.parent = this;
	this.imprTxt.setTransform(-23.9,-9.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkSIQcAAQAhAAAAAmIAAEeQlxAuhdA5Qj9CalygoQgiAAAAgmIAAnRQAAgmAiAAg");
	this.shape.setTransform(21.1,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AoNELQgiAAAAgmIAAnRQAAgmAiAAIQcAAQAhAAAAAmIAAEeQlxAuheA5QjIB6kSAAQhHAAhNgIg");
	this.shape_1.setTransform(21.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.imprTxt},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr3Sym, new cjs.Rectangle(-35.9,-74.2,114,114.3), null);


// stage content:
(lib.ifSimple = function(mode,startPosition,loop) {
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
	this.frame_96 = function() {
		this.stop();
		var root = this;
		txtboxNumero.focus();
		var box = document.getElementById("txtboxNumero");
		box.setAttribute("placeholder", "Presione enter");
		box.value = "";
		
		window.addEventListener("keydown", keyPressed);
		
		
		function keyPressed(evt) {
		
		    var k = evt.key.toLowerCase();
		    //alert(k);
			if( k == "enter" && !isNaN(box.value) && box.value != ""){
				//cont++;
				//alert(cont);
				//alert(box.value);
				num = box.value;
				root.play();
				root.mcPrint.imprTxt.text += box.value.toString() + '"';
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
	this.frame_133 = function() {
		var root = this;
		this.botonSi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_181.bind(this));
		this.botonNo.addEventListener("click", incorrecto);
		
		function fl_ClickToGoToAndPlayFromFrame_181()
		{
			//alert(root.mcPrint.imprTxt.text);
			if ( num == 0 ){
				this.gotoAndPlay(181);//Correct keyframe
			}else{
				this.gotoAndPlay(157);//Incorrect keyframe
			}
			
		}
		
		
		function incorrecto()
		{
			if( num == 0 ){
				root.gotoAndPlay(157);//Incorrect keyframe
			}else{
				root.gotoAndPlay(181);//Correct keyframe		
			}
			
			
			//alert("Incorrecto");
		}
	}
	this.frame_154 = function() {
		this.gotoAndPlay(134);
	}
	this.frame_178 = function() {
		this.gotoAndPlay(134);
	}
	this.frame_311 = function() {
		//location.reload();
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
				root.mcPrint.imprTxt.text = "Ingresaste el valor de ";
				location.reload();
				//root.gotoAndPlay(1);
				
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(96).call(this.frame_96).wait(37).call(this.frame_133).wait(21).call(this.frame_154).wait(24).call(this.frame_178).wait(133).call(this.frame_311).wait(1));

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
	this.shape.graphics.f().s("#009900").ss(1,1,1).p("AgciQIhgAAIB8ibIB9CbIhgAAAgciQIAAgZIA5AAIAAAZIAAG8Ig5AAg");
	this.shape.setTransform(1044.4,131.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgcEsIAAm8IAAgaIA4AAIAAAaIAAG8gAAciQIAAgaIg4AAIAAAaIhgAAIB8ibIB9Cbg");
	this.shape_1.setTransform(1044.4,131.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},311).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio}]}).to({state:[]},311).wait(1));

	// FinLayer
	this.instance = new lib.finSym();
	this.instance.parent = this;
	this.instance.setTransform(778.5,671.1,1,1,0,0,0,-0.5,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(263).to({_off:false},0).wait(1).to({regX:4.5,regY:4.8,x:783.5,y:676.1,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(35));

	// Linea7Layer
	this.instance_1 = new lib.flechaSym();
	this.instance_1.parent = this;
	this.instance_1.setTransform(783.9,632.4,1,0.255,0,0,0,-28.4,-53.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(263).to({_off:false},0).wait(1).to({regY:-58.7,y:631.2,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(35));

	// Paso7Layer
	this.instance_2 = new lib.Txt7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(337.9,666,1,1,0,0,0,-1.1,-13.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253).to({_off:false},0).wait(1).to({regX:-3.5,regY:-13.7,x:335.5,y:665.8,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(49));

	// Impr3Layer
	this.mcPrint = new lib.impr3Sym();
	this.mcPrint.name = "mcPrint";
	this.mcPrint.parent = this;
	this.mcPrint.setTransform(769.2,582.1,1,1,0,0,0,5,4.1);
	this.mcPrint.alpha = 0;
	this.mcPrint._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcPrint).wait(95).to({_off:false},0).wait(1).to({regX:21,regY:-16.7,x:785.2,y:561.3},0).wait(132).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(73));

	// Linea6Layer
	this.instance_3 = new lib.flechaSym2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(704.5,519.5,1,1,0,0,0,64.1,-240.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(227).to({_off:false},0).wait(1).to({regX:57.8,regY:-300.2,x:698.2,y:459.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(73));

	// Paso6Layer
	this.instance_4 = new lib.Txt6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(435.4,551.7,1,1,0,0,0,10.5,-24.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(215).to({_off:false},0).wait(1).to({regX:-11.3,regY:-23.1,x:413.6,y:553.1,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(85));

	// Impr2Layer
	this.instance_5 = new lib.impr2Sym();
	this.instance_5.parent = this;
	this.instance_5.setTransform(602.9,382.4,1,1,0,0,0,5,4.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(191).to({_off:false},0).wait(1).to({regX:21,regY:11.6,x:618.9,y:389.9,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(108));

	// Paso5Layer
	this.instance_6 = new lib.Txt5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(423.4,432,1,1,0,0,0,1.5,-24.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).wait(1).to({regX:-1.1,regY:-23.1,x:420.8,y:433.4,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(121));

	// Incorrecto
	this.instance_7 = new lib.Error();
	this.instance_7.parent = this;
	this.instance_7.setTransform(553.1,319.2,1,1,0,0,0,-8,-18.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).wait(1).to({regY:-18.6,y:319,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(132));

	// ActionIf
	this.botonNo = new lib.BotonNo();
	this.botonNo.name = "botonNo";
	this.botonNo.parent = this;
	this.botonNo.setTransform(921.9,296.5,0.725,0.691);
	new cjs.ButtonHelper(this.botonNo, 0, 1, 1);

	this.botonSi = new lib.BotonSi();
	this.botonSi.name = "botonSi";
	this.botonSi.parent = this;
	this.botonSi.setTransform(660,296.5,0.725,0.691);
	new cjs.ButtonHelper(this.botonSi, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonSi},{t:this.botonNo}]},133).to({state:[]},22).wait(157));

	// NoLayer
	this.instance_8 = new lib.TxtNo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(872.1,310.9,1,1,0,0,0,1.9,-24.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(133).to({_off:false},0).wait(1).to({regX:4.5,regY:-24.7,x:874.7,y:310.7,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(61).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(83));

	// Linea5Layer
	this.instance_9 = new lib.flechaLargaSym();
	this.instance_9.parent = this;
	this.instance_9.setTransform(901,472.6,1,1,0,0,0,-39.4,-9.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(133).to({_off:false},0).wait(1).to({regX:-65.7,regY:-68.1,x:874.7,y:413.7,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(61).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(83));

	// SiLayer
	this.instance_10 = new lib.TxtSi();
	this.instance_10.parent = this;
	this.instance_10.setTransform(703.9,310.6,1,1,0,0,0,1.9,-24.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(133).to({_off:false},0).wait(1).to({regX:-0.3,regY:-24.6,x:701.7,y:310.5,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(157));

	// Linea4Layer
	this.instance_11 = new lib.flechaSym3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(615.2,344.5,1,0.254,0,0,0,-28.4,-47.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(133).to({_off:false},0).wait(1).to({regX:27.6,regY:-58.9,x:671.2,y:341.6,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(157));

	// IfLayer
	this.instance_12 = new lib.IfSym();
	this.instance_12.parent = this;
	this.instance_12.setTransform(783.2,322,1,1,0,0,0,-1.6,0.7);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120).to({_off:false},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(179));

	// Linea3Layer
	this.instance_13 = new lib.flechaSym();
	this.instance_13.parent = this;
	this.instance_13.setTransform(782.9,255,1,0.19,0,0,0,-28.4,-49.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120).to({_off:false},0).wait(1).to({regY:-58.7,y:253.3,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(179));

	// Paso4Layer
	this.instance_14 = new lib.Txt4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(408.9,313,1,1,0,0,0,-11,-24.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(108).to({_off:false},0).wait(1).to({regX:-14,regY:-23.2,x:405.9,y:314.3,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(193));

	// textbox
	this.text = new cjs.Text("Ingrese un número", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(597,191.3);

	this.txtboxNumero = new lib.an_TextInput({'id': 'txtboxNumero', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero.setTransform(655.1,228.3,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero},{t:this.text}]},95).to({state:[]},2).wait(215));

	// EntradaLayer
	this.instance_15 = new lib.entradaSymb();
	this.instance_15.parent = this;
	this.instance_15.setTransform(779.9,215.6,1,1,0,0,0,-0.5,1.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(84).to({_off:false},0).wait(1).to({regX:0.8,regY:-0.1,x:781.2,y:214.4,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(217));

	// Linea2Layer
	this.instance_16 = new lib.flechaSym();
	this.instance_16.parent = this;
	this.instance_16.setTransform(783.9,173.1,1,0.209,0,0,0,-28.4,-51.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(84).to({_off:false},0).wait(1).to({regY:-58.7,y:171.6,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(217));

	// Paso3Layer
	this.instance_17 = new lib.Txt3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(419.9,206.1,1,1,0,0,0,0,-24.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(71).to({_off:false},0).wait(1).to({regX:-49.4,regY:-15.2,x:370.5,y:215.4,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(228));

	// Impr1Layer
	this.instance_18 = new lib.impr1Sym();
	this.instance_18.parent = this;
	this.instance_18.setTransform(779.4,126.4,1,1,0,0,0,5,4.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(47).to({_off:false},0).wait(1).to({regX:21,regY:11.6,x:795.4,y:133.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(253));

	// Linea1Layer
	this.instance_19 = new lib.flechaSym();
	this.instance_19.parent = this;
	this.instance_19.setTransform(784,92.7,1,0.177,0,0,0,-28.4,-58);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(47).to({_off:false},0).wait(1).to({regY:-58.7,y:92.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(253));

	// Paso2Layer
	this.instance_20 = new lib.Txt2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(370.4,121.1,1,1,0,0,0,5.5,-24.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(35).to({_off:false},0).wait(1).to({regX:10.1,regY:-24.6,x:375,y:121,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(265));

	// InicioLayer
	this.instance_21 = new lib.inicioSym();
	this.instance_21.parent = this;
	this.instance_21.setTransform(783.5,53.8,1,1,0,0,0,4.5,4.8);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(11).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(289));

	// Paso1Layer
	this.instance_22 = new lib.Txt1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(337.8,60.5,1,1,0,0,0,-1.1,-24.5);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:-2.6,regY:-24.6,x:336.3,y:60.4,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(301));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(990.9,433.1,768.9,38.7);
// library properties:
lib.properties = {
	id: '3D4EED370B643A4D96CE5DF68D907A89',
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
an.compositions['3D4EED370B643A4D96CE5DF68D907A89'] = {
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