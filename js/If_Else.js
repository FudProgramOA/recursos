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

}).prototype = getMCSymbolPrototype(lib.TxtSi, new cjs.Rectangle(-9,-34.9,19.1,20.8), null);


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

}).prototype = getMCSymbolPrototype(lib.TxtNo, new cjs.Rectangle(-9,-34.9,27.1,20.8), null);


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
	this.shape.graphics.f("#000000").s().p("AAIATIgDgUIAAgRIAPAAIAAARIgEAUgAgPATIgEgUIAAgRIAQAAIAAARIgEAUg");
	this.shape.setTransform(30.1,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_1.setTransform(25.5,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_2.setTransform(18.2,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_3.setTransform(10.1,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_4.setTransform(-0.5,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_5.setTransform(-8.5,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_6.setTransform(-18.1,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_7.setTransform(-26,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_8.setTransform(-38.5,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(-44.6,-4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_10.setTransform(-51.9,-4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_11.setTransform(-62.2,-4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRA0QgGgDgDgEQgCgEgBgGIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEADAGAAQAFAAAFgDQAFgDACgGQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDgAgHgiIAJgUIARAAIgQAUg");
	this.shape_12.setTransform(-72.7,-5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_13.setTransform(-81,-4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_14.setTransform(-91.1,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_15.setTransform(-97.5,-5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAJATIgFgUIAAgRIAPAAIAAARIgDAUgAgPATIgDgUIAAgRIAOAAIAAARIgDAUg");
	this.shape_16.setTransform(-105.3,-9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAnIAAgPIAPAAIAAAPgAgHgXIAAgPIAPAAIAAAPg");
	this.shape_17.setTransform(55.9,-23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_18.setTransform(51.8,-23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFA2IAAhNIAMAAIAABNgAgFglIAAgQIAMAAIAAAQg");
	this.shape_19.setTransform(47.1,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_20.setTransform(39.2,-23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_21.setTransform(31.2,-24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_22.setTransform(27.6,-23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_23.setTransform(20.6,-21.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_24.setTransform(10,-23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_25.setTransform(2,-24.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_26.setTransform(-8,-23.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_27.setTransform(-14.1,-23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_28.setTransform(-21.4,-23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_29.setTransform(-29,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_30.setTransform(-41,-23.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_31.setTransform(-48.9,-23.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_32.setTransform(-61.3,-23.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_33.setTransform(-69.7,-23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_34.setTransform(-79.7,-24.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAzQgKgEgGgIQgFgJgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJAAQAIAAAGgCQAGgCADgFQADgDAAgGQAAgEgDgFQgDgDgGgDIgSgFQgPgDgGgDQgIgEgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKAAQALAAAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAEQgGAGAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJAEAEAGQAFAGAAAJQAAAIgFAIQgFAIgJAEQgJAEgMABQgNgBgKgEg");
	this.shape_35.setTransform(-86.4,-24.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_36.setTransform(-97.5,-20);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYArQgLgNAAgbQAAgfAMgOQAKgMAQAAQANAAAIAIQAIAGACANIgOABQgBgIgDgDQgGgGgIAAQgFAAgFAEQgGAEgEAJQgDAIAAARQAEgIAIgDQAGgEAHAAQANAAAJAKQAKAJgBAPQAAAKgEAJQgEAIgIAFQgIAFgJAAQgPAAgLgMgAgNABQgGAHAAAKQAAAHACAGQADAHAGADQAFADAEAAQAJAAAGgHQAGgGAAgMQAAgLgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_37.setTransform(-103.9,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt6, new cjs.Rectangle(-110,-34.9,172,39.6), null);


(lib.Txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIATIgDgUIAAgRIAOAAIAAARIgDAUgAgPATIgEgUIAAgRIAQAAIAAARIgEAUg");
	this.shape.setTransform(14.2,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_1.setTransform(9.6,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_2.setTransform(2.3,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_3.setTransform(-5.8,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_4.setTransform(-18.1,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_5.setTransform(-26,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_6.setTransform(-38.5,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_7.setTransform(-44.6,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_8.setTransform(-51.9,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_9.setTransform(-62.2,-4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRA0QgGgDgDgEQgCgEgBgGIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEADAGAAQAFAAAFgDQAFgDACgGQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDgAgHgiIAJgUIARAAIgQAUg");
	this.shape_10.setTransform(-72.7,-5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_11.setTransform(-81,-4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_12.setTransform(-91.1,-5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_13.setTransform(-97.5,-5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAJATIgFgUIAAgRIAPAAIAAARIgDAUgAgPATIgDgUIAAgRIAOAAIAAARIgDAUg");
	this.shape_14.setTransform(-105.3,-9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGAnIAAgPIANAAIAAAPgAgGgXIAAgPIANAAIAAAPg");
	this.shape_15.setTransform(35,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(31,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_17.setTransform(26.2,-24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_18.setTransform(18.3,-23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_19.setTransform(10.4,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_20.setTransform(6.8,-23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_21.setTransform(-0.3,-21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_22.setTransform(-10.9,-23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_23.setTransform(-18.8,-24.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_24.setTransform(-28.8,-23.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_25.setTransform(-34.9,-23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_26.setTransform(-42.2,-23.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_27.setTransform(-49.9,-23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_28.setTransform(-61.8,-23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_29.setTransform(-69.7,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_30.setTransform(-79.7,-24.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAzQgKgEgGgIQgFgJgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJAAQAIAAAGgCQAGgCADgFQADgDAAgGQAAgEgDgFQgDgDgGgDIgSgFQgPgDgGgDQgIgEgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKAAQALAAAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAEQgGAGAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJAEAEAGQAFAGAAAJQAAAIgFAIQgFAIgJAEQgJAEgMABQgNgBgKgEg");
	this.shape_31.setTransform(-86.4,-24.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_32.setTransform(-97.5,-20);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgHAAgMQAAgMgHgFQgGgHgJAAQgHABgFADQgFACgDAEIgMgCIAKg2IA1AAIAAANIgqAAIgGAdQAKgHAJAAQAOAAAKAJQAKAKAAAOQAAAPgJALQgKANgRAAQgPAAgJgJg");
	this.shape_33.setTransform(-103.8,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt5, new cjs.Rectangle(-110,-34.9,155,39.6), null);


(lib.Txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA2IAAgOIAOAAIAAAOgAgGAcIAAgEQAAgIACgFIAFgJIAJgIIAJgJQACgFAAgDQAAgIgGgGQgGgGgJAAQgHAAgGAFQgFAGgCALIgOgBQACgPAJgJQAJgHAOgBQAQAAAJAJQAKAIAAANQAAAHgEAFQgDAGgKAIQgGAGgCADIgDAFIgBAMg");
	this.shape.setTransform(28.8,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_1.setTransform(20.5,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(14.4,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_3.setTransform(7.1,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_4.setTransform(-0.6,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_5.setTransform(-12.9,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_6.setTransform(-22.9,-5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_7.setTransform(-28.8,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAlQgHgDgCgEQgDgEgCgGIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEADAGAAQAFAAAFgDQAFgDADgGQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_8.setTransform(-37.1,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANACQABAFAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgMAEgJQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLgBQgOAAgJgFgAgOglQgGAIAAANQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_9.setTransform(-45.7,-2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_10.setTransform(-51.3,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_11.setTransform(-61.3,-4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_12.setTransform(-67.4,-4.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_13.setTransform(-74.7,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_14.setTransform(-85,-4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAlQgHgDgCgEQgDgEgCgGIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEADAGAAQAFAAAFgDQAFgDADgGQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_15.setTransform(-95.5,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_16.setTransform(-103.8,-4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_17.setTransform(13.7,-23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_18.setTransform(5.1,-24.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjA2QAAgFACgEQADgHAGgIQAGgHALgIQARgPAFgIQAHgIAAgIQAAgHgGgFQgGgGgIAAQgJAAgFAGQgHAGAAAKIgNgCQABgPAKgIQAJgIAOAAQAQAAAIAJQAJAIAAANQAAAGgDAHQgCAGgGAGQgGAGgOAMIgPAOQgDAEgCAEIAzAAIAAAMg");
	this.shape_19.setTransform(-7.3,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_20.setTransform(-19.6,-23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_21.setTransform(-25.5,-24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgEgDgBgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEACgFQADgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_22.setTransform(-31.4,-23.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_23.setTransform(-40,-24.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_24.setTransform(-48,-23.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_25.setTransform(-58.4,-23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_26.setTransform(-70.6,-24.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_27.setTransform(-77,-24.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAuQgKgIAAgNQAAgHAEgGQADgFAJgIIAJgIIADgHIABgLIAMAAIAAAEQAAAIgDAFQgBAFgDAEIgJAIQgHAGgCAEQgCADAAAEQAAAIAGAGQAGAGAIAAQAIAAAGgFQAFgGACgLIAOACQgCAPgJAIQgJAIgPAAQgPAAgJgJgAgHgnIAAgPIAOAAIAAAPg");
	this.shape_28.setTransform(-86.7,-21.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_29.setTransform(-97.5,-20);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAKA2IAAgaIguAAIAAgMIAwhFIAKAAIAABFIAPAAIAAAMIgPAAIAAAagAgXAQIAhAAIAAgvg");
	this.shape_30.setTransform(-104.1,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt4, new cjs.Rectangle(-110,-34.9,151,39.6), null);


(lib.Txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape.setTransform(-43.8,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_1.setTransform(-49.6,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_2.setTransform(-55.2,-5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_3.setTransform(-63.8,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_4.setTransform(-69.6,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_5.setTransform(-73.2,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_6.setTransform(-80.5,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgOIARgvIANAAIgdBNg");
	this.shape_7.setTransform(-88.4,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_8.setTransform(-100.5,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_9.setTransform(-106.4,-5.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_10.setTransform(3.7,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(-6.5,-23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_12.setTransform(-13.8,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_13.setTransform(-19.7,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_14.setTransform(-25.5,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAnIgehNIAOAAIARAuIAEAPIAFgOIARgvIANAAIgdBNg");
	this.shape_15.setTransform(-33.4,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(-43.2,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_17.setTransform(-50.5,-23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_18.setTransform(-58.8,-23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_19.setTransform(-67.4,-21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_20.setTransform(-73,-24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_21.setTransform(-78.5,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_22.setTransform(-87.2,-24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_23.setTransform(-97.5,-20);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAuQgKgIgBgNIANgCQADALAEAFQAGAFAIAAQAIAAAHgHQAGgGAAgJQAAgKgGgFQgGgHgJAAIgIACIACgLIABAAQAIAAAHgDQAGgFAAgJQAAgHgEgFQgFgFgIAAQgHAAgFAFQgFAFgCAJIgNgCQADgNAIgHQAIgIANAAQAIAAAHAEQAIADAEAIQAEAGAAAHQAAAHgEAGQgEAGgHADQAJACAGAGQAFAHAAALQAAAOgKAJQgLAKgOAAQgOAAgJgJg");
	this.shape_24.setTransform(-103.8,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.Txt2, new cjs.Rectangle(-56,-34.9,134,20.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape.setTransform(11.1,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_1.setTransform(6.5,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAFQgHAGgKABQgMAAgHgJg");
	this.shape_2.setTransform(2.3,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_3.setTransform(-2.2,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-6.8,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_5.setTransform(-11.8,-6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("ADIAAQAABTg7A7Qg6A6hTAAQhSAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BSAAQBTAAA6A6QA7A7AABSg");
	this.shape_6.setTransform(-0.5,-4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AiNCNQg6g6AAhTQAAhSA6g6QA7g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg7g7g");
	this.shape_7.setTransform(-0.5,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inicioSym, new cjs.Rectangle(-21.5,-25.7,42,42), null);


(lib.impr3Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape.setTransform(75.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_1.setTransform(71.7,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAbQgFgFAAgHQAAgFABgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIABAKIAAANIAAATQABAEABADIgLAAIgBgHQgHAEgEADQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_2.setTransform(65.9,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAIAAAFAEQAGAEAEAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgFgCQgEgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_3.setTransform(59.4,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgCgKIgDgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgFAAgEADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_4.setTransform(50.9,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_5.setTransform(44.6,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAbQgGgFgCgJIAKgCQABAGAFADQADAEAGAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgBgFQgDgDAAgEQAAgFACgDIAFgGIAHgDIAJgBQAGAAAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIADACIAJADIAQAFQAEABADAEQACADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgMAAgGgGg");
	this.shape_6.setTransform(36.9,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_7.setTransform(30.6,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_8.setTransform(20.6,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_9.setTransform(15.7,5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_10.setTransform(9.9,5.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_11.setTransform(1.6,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAqQgFgDgCgDQgCgDgBgEIgBgKIAAgmIAKAAIAAAiIABALQABAEADADQAEACAEAAQAEAAAEgCQAEgDACgEQACgFAAgHIAAghIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCgAgFgbIAHgQIANAAIgMAQg");
	this.shape_12.setTransform(-6.8,4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_13.setTransform(-13.4,5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_14.setTransform(-21.4,4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAaIAvAAIAAAJIgvAAIAAAeIA0AAIAAAKg");
	this.shape_15.setTransform(-26.5,4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape_16.setTransform(-32.8,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkSIQcAAQAhAAAAAmIAAEeQlxAuhdA5Qj9CalygoQgiAAAAgmIAAnRQAAgmAiAAg");
	this.shape_17.setTransform(21.1,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AoNELQgiAAAAgmIAAnRQAAgmAiAAIQcAAQAhAAAAAmIAAEeQlxAuheA5QjIB6kSAAQhHAAhNgIg");
	this.shape_18.setTransform(21.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr3Sym, new cjs.Rectangle(-36.9,-16.9,117.8,57), null);


(lib.impr2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape.setTransform(70.4,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_1.setTransform(66.7,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAbQgFgFgBgHQABgFABgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIABAKIAAANIAAATQABAEABADIgLAAIgBgHQgHAEgEADQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_2.setTransform(60.9,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAIAAAFAEQAGAEAEAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgFgCQgEgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_3.setTransform(54.5,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAbQgHgFgCgJIALgCQABAGADADQAFAEAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgEQAAgFACgDIAFgGIAHgDIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACAEQADADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgMAAgFgGg");
	this.shape_4.setTransform(44.6,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_5.setTransform(38.3,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_6.setTransform(28.3,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_7.setTransform(23.4,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_8.setTransform(17.6,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_9.setTransform(9.3,5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAqQgFgDgCgDQgCgDgBgEIgBgKIAAgmIAKAAIAAAiIABALQABAEADADQAEACAEAAQAEAAAEgCQAEgDACgEQACgFAAgHIAAghIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCgAgFgbIAHgQIANAAIgMAQg");
	this.shape_10.setTransform(0.9,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_11.setTransform(-5.7,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_12.setTransform(-13.7,4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAaIAuAAIAAAJIguAAIAAAeIAzAAIAAAKg");
	this.shape_13.setTransform(-18.8,4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape_14.setTransform(-25.1,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkXIQcAAQAhAAAAAnIAAEjQlxAvheA6Qj8CclygpQgiAAAAgmIAAnZQAAgnAiAAg");
	this.shape_15.setTransform(21.1,12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AoNEPQgiAAAAgmIAAnZQAAgnAiAAIQcAAQAhAAAAAnIAAEjQlxAvheA6QjIB8kSAAQhHAAhNgJg");
	this.shape_16.setTransform(21.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr2Sym, new cjs.Rectangle(-35.9,-16.9,115,58), null);


(lib.impr1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGANIgDgNIAAgMIALAAIAAAMIgDANgAgKANIgDgNIAAgMIALAAIAAAMIgDANg");
	this.shape.setTransform(39.5,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAVQgGgHAAgOQgBgOAJgHQAHgGAJAAQALAAAIAHQAGAHAAANQAAAKgDAGQgDAGgGADQgGADgHAAQgKAAgIgHgAgLgPQgEAGAAAJQAAAKAEAGQAFAFAGAAQAHAAAFgFQAEgGAAgKQAAgJgEgGQgFgFgHAAQgGAAgFAFg");
	this.shape_1.setTransform(34.7,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAcIAAg2IAIAAIAAAJQAEgGACgCQACgCADAAQAFAAAFADIgEAJQgDgCgDAAQgDAAgCABQgCACgBADQgCAFAAAGIAAAcg");
	this.shape_2.setTransform(30.4,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAVQgHgHAAgOQAAgMAHgIQAHgHALAAQAKAAAHAHQAHAHAAANIAAACIgnAAQAAAJAEAFQAFAFAGAAQAFAAAEgDQADgCACgGIAJABQgBAIgHAFQgFAEgKAAQgLAAgHgHgAgKgQQgEAFAAAHIAdAAQAAgHgDgEQgFgFgGAAQgGAAgFAEg");
	this.shape_3.setTransform(25.3,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAkIgEgFQgBgCAAgJIAAgeIgGAAIAAgHIAGAAIAAgOIAJgFIAAATIAJAAIAAAHIgJAAIAAAfIAAAFIACACIADAAIAEAAIABAIIgHABQgFAAgCgBg");
	this.shape_4.setTransform(21,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAcIAAggIgBgJQgBgDgDgBQgCgCgEAAQgFAAgFAEQgEAEAAAKIAAAdIgJAAIAAg2IAIAAIAAAIQAGgJALAAQAEAAAFACIAGAEQACADABAEIAAAJIAAAhg");
	this.shape_5.setTransform(16.6,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAVQgHgHAAgOQAAgMAHgIQAHgHAKAAQALAAAHAHQAHAHAAANIAAACIgnAAQAAAJAEAFQAFAFAGAAQAFAAADgDQAEgCACgGIAJABQgBAIgHAFQgFAEgKAAQgLAAgHgHgAgKgQQgEAFAAAHIAdAAQgBgHgCgEQgEgFgIAAQgFAAgFAEg");
	this.shape_6.setTransform(10.7,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAVQgGgHgBgOQAAgOAJgHQAHgGAJAAQALAAAHAHQAIAHAAANQgBAKgCAGQgEAGgGADQgGADgHAAQgKAAgIgHgAgKgPQgFAGAAAJQAAAKAFAGQAEAFAGAAQAHAAAEgFQAFgGAAgKQAAgJgFgGQgEgFgHAAQgGAAgEAFg");
	this.shape_7.setTransform(2,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAcIAAg2IAIAAIAAAJQAEgGACgCQACgCADAAQAFAAAFADIgEAJQgDgCgDAAQgDAAgCABQgCACgBADQgCAFAAAGIAAAcg");
	this.shape_8.setTransform(-2.3,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAVQgHgHAAgOQAAgMAHgIQAHgHAKAAQALAAAHAHQAHAHAAANIAAACIgnAAQAAAJAEAFQAFAFAGAAQAFAAADgDQAEgCACgGIAJABQgBAIgHAFQgFAEgKAAQgLAAgHgHgAgKgQQgDAFgBAHIAdAAQgBgHgCgEQgEgFgIAAQgFAAgFAEg");
	this.shape_9.setTransform(-7.4,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcAcIAAgiIgBgHIgDgEQgDgCgDAAQgGAAgDAEQgEAEAAAIIAAAfIgIAAIAAgjQAAgGgDgDQgCgDgFAAQgEAAgDACQgEACgBAEQgCAEAAAHIAAAcIgJAAIAAg2IAIAAIAAAIQADgEAEgCQAFgDAFAAQAGAAAEADQADACABAFQAHgKAKAAQAIAAAFAFQAEAEAAAJIAAAlg");
	this.shape_10.setTransform(-14.7,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAlQgFgCgCgDQgCgDAAgEIgBgIIAAghIAJAAIAAAdIABAKQABADACACQADADAEAAQAEAAADgDQAEgCABgDQACgEAAgHIAAgcIAJAAIAAA1IgIAAIAAgIQgHAJgJAAQgFAAgEgBgAgFgXIAGgOIAMAAIgLAOg");
	this.shape_11.setTransform(-22,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAcIAAggIgBgJQgBgDgDgBQgCgCgFAAQgFAAgEAEQgEAEAAAKIAAAdIgJAAIAAg2IAIAAIAAAIQAGgJAKAAQAGAAADACIAHAEQACADAAAEIABAJIAAAhg");
	this.shape_12.setTransform(-27.8,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAcIAAggIgBgJQgBgDgDgBQgCgCgEAAQgFAAgFAEQgEAEAAAKIAAAdIgJAAIAAg2IAIAAIAAAIQAGgJALAAQAEAAAFACIAGAEQACADABAEIAAAJIAAAhg");
	this.shape_13.setTransform(19.7,-5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAaQgFgCgCgCQgCgDAAgEIgBgJIAAghIAJAAIAAAdIABAKQABAEACACQADACAEAAQAEAAADgCQAEgCABgEQACgEAAgHIAAgcIAJAAIAAA2IgIAAIAAgIQgHAJgJAAQgFAAgEgCg");
	this.shape_14.setTransform(13.8,-5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAVQgHgHAAgOQAAgMAHgIQAHgHAKAAQALAAAHAHQAHAHAAANIAAACIgoAAQABAJAEAFQAFAFAGAAQAFAAADgDQAEgCACgGIAKABQgDAIgFAFQgHAEgJAAQgLAAgHgHgAgKgQQgDAFgBAHIAeAAQgCgHgCgEQgEgFgIAAQgFAAgFAEg");
	this.shape_15.setTransform(5.1,-5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAYQgGgEgCgJIAKgBQAAAFAEADQADADAGAAQAGAAADgDQADgCAAgEQAAgDgDgCIgJgDQgJgCgEgCQgEgBgCgDQgCgEAAgEQAAgDACgDQABgEADgCIAGgCIAIgBQAFAAAFABQAFACACADQADAEABAFIgJABQgBgEgDgCQgDgDgFAAQgGAAgCACQgDACAAADIABADIAEADIAHACQAKADADACQAEAAACADQADAEAAAEQAAAFgDAEQgDAEgFACQgFACgGAAQgKAAgFgEg");
	this.shape_16.setTransform(-0.5,-5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAVQgHgHAAgOQAAgMAHgIQAHgHALAAQAKAAAHAHQAHAHAAANIAAACIgoAAQABAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAKABQgDAIgFAFQgHAEgJAAQgLAAgHgHgAgJgQQgFAFAAAHIAeAAQgCgHgCgEQgFgFgGAAQgGAAgEAEg");
	this.shape_17.setTransform(-6,-5.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAcIAAg2IAIAAIAAAJQAEgGACgCQACgCADAAQAFAAAFADIgEAJQgDgCgDAAQgDAAgCABQgCACgBADQgCAFAAAGIAAAcg");
	this.shape_18.setTransform(-10.2,-5.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAiQgFgEAAgJIAJACQAAAEADACQADACAGAAQAGAAADgCQADgDACgFIABgLQgHAHgIAAQgLAAgGgIQgGgIAAgLQAAgIADgGQADgHAFgDQAFgEAHAAQAJAAAGAIIAAgHIAJAAIAAAuQAAANgCAFQgEAGgFADQgFADgIAAQgKAAgGgFgAgKgZQgDAFAAAKQAAAKADAEQAFAFAFAAQAHAAAEgFQAEgEAAgKQAAgKgEgFQgFgFgGAAQgFAAgFAFg");
	this.shape_19.setTransform(-15.5,-4.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AANAcIAAggIgBgJQgBgDgDgBQgDgCgEAAQgEAAgFAEQgEAEAAAKIAAAdIgJAAIAAg2IAIAAIAAAIQAGgJAKAAQAGAAADACIAHAEQACADAAAEIABAJIAAAhg");
	this.shape_20.setTransform(-21.2,-5.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_21.setTransform(-25.5,-6.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAGANIgDgNIAAgMIALAAIAAAMIgDANgAgKANIgDgNIAAgMIALAAIAAAMIgDANg");
	this.shape_22.setTransform(-28.9,-8.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0066FF").ss(1,1,1).p("AmmjgINNAAQAbAAAAAfIAADqQkpAmhLAuQjLB+kpghQgbAAAAgfIAAl8QAAgfAbAAg");
	this.shape_23.setTransform(10.1,6.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AmmDaQgbAAAAgfIAAl8QAAgfAbAAINNAAQAbAAAAAfIAADqQkpAmhLAuQihBkjcAAQg6AAg9gHg");
	this.shape_24.setTransform(10.1,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr1Sym, new cjs.Rectangle(-35.9,-16.9,92,47), null);


(lib.IfSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAjQgJgLAAgYQAAgOADgKQAEgJAFgFQAHgFAIAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAAMQAAAPgDAJQgDAKgGAFQgHAFgJAAQgLAAgHgJgAgKgcQgGAIAAAUQAAAVAFAHQAEAHAHAAQAHAAAFgHQAFgHAAgVQAAgUgFgHQgFgHgHAAQgGAAgEAGg");
	this.shape.setTransform(31.9,-6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA4AAIAAAKgAgcgHIAAgKIA4AAIAAAKg");
	this.shape_1.setTransform(21.8,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA5AAIAAAKgAgcgHIAAgKIA5AAIAAAKg");
	this.shape_2.setTransform(14.8,-6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbArQgBgEACgDQACgGAFgGQAFgFAIgIQANgLAFgGQAGgGAAgGQgBgHgEgEQgEgEgIAAQgGAAgFAEQgEAEgBAJIgLgBQACgMAHgHQAHgGALAAQANAAAHAHQAHAGAAALQABAFgDAFQgCAFgFAEQgFAGgLAKIgLAKIgFAGIApAAIAAAKg");
	this.shape_3.setTransform(4.5,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAoQgFgGAAgMQAAgJAFgHQAFgGAIAAQAIAAAGAGQAFAGAAALQAAALgFAGQgGAFgIAAQgHAAgGgFgAAVALQgDADAAAJQAAAIADAEQADADAEAAQAEAAACgDQADgEAAgJQAAgIgDgDQgCgEgEAAQgEAAgDAEgAgbAtIAuhZIAJAAIguBZgAgogFQgFgFAAgMQAAgJAEgHQAFgGAJAAQAIAAAFAGQAFAFAAAMQAAALgFAFQgFAFgIAAQgIAAgFgFgAghghQgDADAAAJQAAAIADAEQACADAEAAQAEAAADgDQACgEAAgJQAAgIgCgDQgDgEgEAAQgEAAgCAEg");
	this.shape_4.setTransform(-4.1,-6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_5.setTransform(-12.7,-5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_6.setTransform(-17.6,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_7.setTransform(-23.4,-5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_8.setTransform(-31.7,-5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_9.setTransform(-40.1,-5.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_10.setTransform(-46.7,-5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0066FF").ss(1,1,1).p("AHbAAInbHbInanaIHanbg");
	this.shape_11.setTransform(-7,-4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AnaABIHanbIHbHaInbHbg");
	this.shape_12.setTransform(-7,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IfSym, new cjs.Rectangle(-55.5,-53.3,102,97), null);


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
	this.shape.setTransform(-104.2,-103.6,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("AKJlRI0RAAIAAKj");
	this.shape_1.setTransform(-39.3,-126.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaIzqSym, new cjs.Rectangle(-107.7,-161.4,134.3,73.1), null);


(lib.flechaFinalSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhSAjIhGgjIBGgiIAYAAIg/AgIESAAIAAAFIkSAAIA/Agg");
	this.shape.setTransform(-38,-171.1,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("Ab4qJIAAUJA75pXIAAThMA3zAAA");
	this.shape_1.setTransform(-39.3,-251.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaFinalSym, new cjs.Rectangle(-218.9,-317.3,359.3,161.6), null);


(lib.flechaDerSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhSAjIhGgjIBGgiIAYAAIg/AgIESAAIAAAFIkSAAIA/Agg");
	this.shape.setTransform(25.5,-103.6,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("AqIlRIURAAIAAKj");
	this.shape_1.setTransform(-39.3,-126.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaDerSym, new cjs.Rectangle(-105.2,-161.4,134.3,73.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHABgOQgBgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape.setTransform(19.1,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAlIAAhHIALAAIAAAKQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgCgEgBQgFABgCACQgDADgBADQgCAHAAAIIAAAlg");
	this.shape_1.setTransform(13.4,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAJAAQAGAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_2.setTransform(6.6,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlAlIAAgsQAAgIgBgDQgBgEgDgCQgEgBgEAAQgHAAgGAEQgFAGAAALIAAApIgLAAIAAguQAAgIgDgFQgDgDgHAAQgFgBgEADQgFADgCAFQgCAGAAAJIAAAlIgMAAIAAhHIALAAIAAAKQADgFAGgEQAGgDAHAAQAIAAAFADQAEAEADAFQAIgMAOAAQALAAAGAGQAFAFAAANIAAAxg");
	this.shape_3.setTransform(-3.1,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiQgGgCgDgDQgDgEgBgFIgBgMIAAgsIANAAIAAAnIABANQAAAFAEADQAEACAFAAQAGAAAEgDQAFgCACgFQACgFAAgJIAAgmIAMAAIAABHIgKAAIAAgKQgJAMgOAAQgGAAgFgDg");
	this.shape_4.setTransform(-12.8,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAlIAAgrQAAgHgBgEQgCgEgDgDQgEgBgFAAQgGAAgGAEQgGAGAAANIAAAnIgMAAIAAhHIALAAIAAAKQAIgMAOAAQAHAAAFACQAGADACAEQADADABAGIAAAMIAAArg");
	this.shape_5.setTransform(-20.6,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("Alaj5IOyAAIj2HzIu5AAg");
	this.shape_6.setTransform(1,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("ApXD6ID9nzIOyAAIj2Hzg");
	this.shape_7.setTransform(1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entradaSymb, new cjs.Rectangle(-60,-27,122,52), null);


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


// stage content:
(lib.If_Else = function(mode,startPosition,loop) {
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
	this.frame_108 = function() {
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
				//root.mcPrint.imprTxt.text += box.value.toString() + '"';
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
	this.frame_167 = function() {
		var root = this;
		this.botonSi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_207.bind(this));
		this.botonNo.addEventListener("click", incorrecto);
		
		function fl_ClickToGoToAndPlayFromFrame_207()
		{
			if(num % 2 == 0){
				this.gotoAndPlay(219);//Correcto			
			}else{
				this.gotoAndPlay(195);//Incorrecto		
			}
			
		}
		
		
		function incorrecto()
		{
			
			if(num % 2 == 0){
				root.gotoAndPlay(195);//Incorrecto			
			}else{
				root.gotoAndPlay(219);//Correcto
			}	
		}
	}
	this.frame_191 = function() {
		this.gotoAndPlay(168);
	}
	this.frame_216 = function() {
		this.gotoAndPlay(168);
	}
	this.frame_419 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(108).call(this.frame_108).wait(59).call(this.frame_167).wait(24).call(this.frame_191).wait(25).call(this.frame_216).wait(203).call(this.frame_419).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},419).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio}]}).to({state:[]},419).wait(2));

	// FinLayer
	this.instance = new lib.finSym();
	this.instance.parent = this;
	this.instance.setTransform(775.9,595.3,1,1,0,0,0,-0.5,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(336).to({_off:false},0).wait(1).to({regX:4.5,regY:4.8,x:780.9,y:600.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(71).to({_off:true},1).wait(1));

	// Paso7Layer
	this.instance_1 = new lib.Txt7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(374.9,566,1,1,0,0,0,-1.1,-13.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).wait(1).to({regX:-3.5,regY:-13.7,x:372.5,y:565.8,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(83).to({_off:true},1).wait(1));

	// Linea6Layer
	this.instance_2 = new lib.flechaFinalSym();
	this.instance_2.parent = this;
	this.instance_2.setTransform(779.2,552.6,1,1,0,0,0,-39.4,-177.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(312).to({_off:false},0).wait(1).to({regX:-39.3,regY:-236.3,x:779.3,y:493.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(95).to({_off:true},1).wait(1));

	// Impr3Layer
	this.instance_3 = new lib.impr3Sym();
	this.instance_3.parent = this;
	this.instance_3.setTransform(954.9,395.5,1,1,0,0,0,21.9,11.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(277).to({_off:false},0).wait(1).to({regX:21,x:954,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(131).to({_off:true},1).wait(1));

	// Paso6Layer
	this.instance_4 = new lib.Txt6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(437.9,493,1,1,0,0,0,-24,-15.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(252).to({_off:false},0).wait(1).to({regX:-25.4,regY:-13.8,x:436.5,y:494.3,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(153).to({_off:true},1).wait(1));

	// Impr2Layer
	this.instance_5 = new lib.impr2Sym();
	this.instance_5.parent = this;
	this.instance_5.setTransform(604.7,396,1,1,0,0,0,21.8,12.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).wait(1).to({regX:21,x:603.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(167).to({_off:true},1).wait(1));

	// Paso5Layer
	this.instance_6 = new lib.Txt5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(429.4,396,1,1,0,0,0,-32.5,-15.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(218).to({_off:false},0).wait(1).to({regX:-35.8,regY:-13.8,x:426.1,y:397.3,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(191).to({_off:true},1).wait(1));

	// Incorrecto
	this.instance_7 = new lib.Error();
	this.instance_7.parent = this;
	this.instance_7.setTransform(510.9,319.2,1,1,0,0,0,-8,-18.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(194).to({_off:false},0).wait(1).to({regY:-18.6,y:319,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(203));

	// ActionIf
	this.botonNo = new lib.BotonNo();
	this.botonNo.name = "botonNo";
	this.botonNo.parent = this;
	this.botonNo.setTransform(550,285.9,0.725,0.691);
	new cjs.ButtonHelper(this.botonNo, 0, 1, 1);

	this.botonSi = new lib.BotonSi();
	this.botonSi.name = "botonSi";
	this.botonSi.parent = this;
	this.botonSi.setTransform(483,285.9,0.725,0.691);
	new cjs.ButtonHelper(this.botonSi, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonSi},{t:this.botonNo}]},167).to({state:[]},25).to({state:[]},228).wait(1));

	// SiLayer
	this.instance_8 = new lib.TxtSi();
	this.instance_8.parent = this;
	this.instance_8.setTransform(666,285.1,1,1,0,0,0,5.5,-24.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({_off:false},0).wait(1).to({regX:-0.3,regY:-24.6,x:660.2,y:285,alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(227).to({_off:true},1).wait(1));

	// Linea5Layer
	this.instance_9 = new lib.flechaIzqSym();
	this.instance_9.parent = this;
	this.instance_9.setTransform(664,333.5,1,1,0,0,0,-40.9,-122.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(167).to({_off:false},0).wait(1).to({regY:-124.7,y:331.7,alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(227).to({_off:true},1).wait(1));

	// NoLayer
	this.instance_10 = new lib.TxtNo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(884.9,285.1,1,1,0,0,0,1.9,-24.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(167).to({_off:false},0).wait(1).to({regX:4.5,regY:-24.7,x:887.5,y:284.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(226).to({_off:true},1).wait(1));

	// Linea4Layer
	this.instance_11 = new lib.flechaDerSym();
	this.instance_11.parent = this;
	this.instance_11.setTransform(892.5,358.6,1,1,0,0,0,-37.8,-97.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(167).to({_off:false},0).wait(1).to({regY:-124.7,y:331.7,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(226).to({_off:true},1).wait(1));

	// IfLayer
	this.instance_12 = new lib.IfSym();
	this.instance_12.parent = this;
	this.instance_12.setTransform(780.7,296,1,1,0,0,0,-4.3,-4.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(143).to({_off:false},0).wait(1).to({regX:-7,x:778,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(264).to({_off:true},1).wait(1));

	// Linea3Layer
	this.instance_13 = new lib.flechaSym();
	this.instance_13.parent = this;
	this.instance_13.setTransform(779.3,234.8,1,0.171,0,0,0,-27.1,-58.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(143).to({_off:false},0).wait(1).to({regX:-28.4,regY:-58.7,x:778,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(264).to({_off:true},1).wait(1));

	// Paso4Layer
	this.instance_14 = new lib.Txt4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(427.4,282.1,1,1,0,0,0,-34.5,-15.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(119).to({_off:false},0).wait(1).to({regX:-37.8,regY:-13.7,x:422.4,y:283.5,alpha:0.083},0).wait(1).to({x:420.7,alpha:0.167},0).wait(1).to({x:419,alpha:0.25},0).wait(1).to({x:417.4,alpha:0.333},0).wait(1).to({x:415.7,alpha:0.417},0).wait(1).to({x:414,alpha:0.5},0).wait(1).to({x:412.3,alpha:0.583},0).wait(1).to({x:410.6,alpha:0.667},0).wait(1).to({x:408.9,alpha:0.75},0).wait(1).to({x:407.2,alpha:0.833},0).wait(1).to({x:405.5,alpha:0.917},0).wait(1).to({x:403.9,alpha:1},0).wait(1).to({x:402.2},0).wait(1).to({x:400.5},0).wait(1).to({x:398.8},0).wait(1).to({x:397.1},0).wait(1).to({x:395.4},0).wait(1).to({x:393.7},0).wait(1).to({x:392},0).wait(1).to({x:390.4},0).wait(1).to({x:388.7},0).wait(1).to({x:387},0).wait(1).to({x:385.3},0).wait(1).to({x:383.6},0).wait(1).to({x:381.9},0).wait(1).to({x:380.2},0).wait(1).to({x:378.5},0).wait(1).to({x:376.9},0).wait(1).to({x:375.2},0).wait(1).to({x:373.5},0).wait(1).to({x:371.8},0).wait(1).to({x:370.1},0).wait(1).to({x:368.4},0).wait(1).to({x:366.7},0).wait(1).to({x:365},0).wait(1).to({x:363.4},0).wait(1).to({x:361.7},0).wait(1).to({x:360},0).wait(1).to({x:358.3},0).wait(1).to({x:356.6},0).wait(1).to({x:354.9},0).wait(1).to({x:353.2},0).wait(1).to({x:351.5},0).wait(1).to({x:349.9},0).wait(1).to({x:348.2},0).wait(1).to({x:346.5},0).wait(1).to({x:344.8},0).wait(1).to({x:343.1},0).wait(52).to({x:351.2},0).wait(1).to({x:359.3},0).wait(1).to({x:367.4},0).wait(1).to({x:375.5},0).wait(1).to({x:383.6},0).wait(1).to({x:391.7},0).wait(1).to({x:399.8},0).wait(1).to({x:407.9},0).wait(1).to({x:416},0).wait(1).to({x:424.1},0).wait(191).to({_off:true},1).wait(1));

	// textbox
	this.text = new cjs.Text("Ingrese un número", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(578.5,173);

	this.txtboxNumero = new lib.an_TextInput({'id': 'txtboxNumero', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero.setTransform(636.6,210,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero},{t:this.text}]},107).to({state:[]},2).wait(312));

	// EntradaLayer
	this.instance_15 = new lib.entradaSymb();
	this.instance_15.parent = this;
	this.instance_15.setTransform(772.9,198.1,1,1,0,0,0,-0.5,1.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(95).to({_off:false},0).wait(1).to({regX:1,regY:-1,x:774.4,y:196,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(312).to({_off:true},1).wait(1));

	// Linea2Layer
	this.instance_16 = new lib.flechaSym();
	this.instance_16.parent = this;
	this.instance_16.setTransform(785.5,158.1,1,0.177,0,0,0,-21.7,-41.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(95).to({_off:false},0).wait(1).to({regX:-28.4,regY:-58.7,x:778.8,y:155.1,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(312).to({_off:true},1).wait(1));

	// Paso3Layer
	this.instance_17 = new lib.Txt3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(415.9,198.1,1,1,0,0,0,-46,-15.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(71).to({_off:false},0).wait(1).to({regX:-50,regY:-15.2,x:411.9,y:198,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(336).to({_off:true},1).wait(1));

	// Impr1Layer
	this.instance_18 = new lib.impr1Sym();
	this.instance_18.parent = this;
	this.instance_18.setTransform(781,120.2,1.25,1.25,0,0,0,10.1,6.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(60).to({_off:false},0).wait(1).to({regX:10,regY:6.6,x:780.9,y:120.3,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(348).to({_off:true},1).wait(1));

	// Linea1Layer
	this.instance_19 = new lib.flechaSym();
	this.instance_19.parent = this;
	this.instance_19.setTransform(779,80.8,1,0.154,0,0,0,-28.4,-52.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(60).to({_off:false},0).wait(1).to({regY:-58.7,y:79.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(348).to({_off:true},1).wait(1));

	// Paso2Layer
	this.instance_20 = new lib.Txt2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(418.9,119.5,1,1,0,0,0,11,-24.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(35).to({_off:false},0).wait(1).to({regX:10.1,regY:-24.6,x:418,y:119.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(372).to({_off:true},1).wait(1));

	// InicioLayer
	this.instance_21 = new lib.inicioSym();
	this.instance_21.parent = this;
	this.instance_21.setTransform(776.7,49.4,1.25,1.25,0,0,0,-1.9,0.3);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(23).to({_off:false},0).wait(1).to({regX:-0.5,regY:-4.7,x:778.4,y:43.1,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(384).to({_off:true},1).wait(1));

	// Paso1Layer
	this.instance_22 = new lib.Txt1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(381.8,60.5,1,1,0,0,0,-1.1,-24.5);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:-2.6,regY:-24.6,x:380.3,y:60.4,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(408).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1034.9,433.1,724.9,38.7);
// library properties:
lib.properties = {
	id: 'C731452ECC7D25409501D05CBA9ED667',
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
an.compositions['C731452ECC7D25409501D05CBA9ED667'] = {
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