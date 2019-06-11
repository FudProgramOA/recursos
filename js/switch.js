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

}).prototype = getMCSymbolPrototype(lib.Txt7, new cjs.Rectangle(-24,-23.9,45.1,20.8), null);


(lib.Txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape.setTransform(-21.7,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_1.setTransform(-29.6,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(-35.7,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_3.setTransform(-42.9,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_4.setTransform(-48.8,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_5.setTransform(-52.4,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_6.setTransform(-59.7,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAzQgEgCgBgEQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_7.setTransform(-65.8,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_8.setTransform(-72.1,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_9.setTransform(-80.5,14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_10.setTransform(-92.6,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_11.setTransform(-100.5,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_12.setTransform(-106.4,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_13.setTransform(35.5,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_14.setTransform(26.9,-5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_15.setTransform(14.6,-4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_16.setTransform(6.3,-4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAlQgGgDgDgEQgCgEgBgGIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEADAGAAQAFAAAFgDQAFgDACgGQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_17.setTransform(-2.1,-4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANACQABAFAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgMAEgJQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLgBQgOAAgJgFgAgOglQgGAIAAANQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_18.setTransform(-10.6,-2.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_19.setTransform(-18.7,-4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_20.setTransform(-24.6,-5.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_21.setTransform(-30.4,-4.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_22.setTransform(-43,-4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_23.setTransform(-48.8,-5.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_24.setTransform(-54.4,-3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_25.setTransform(-65,-4.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAlQgFgDgEgEQgCgEgBgGIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEADAGAAQAFAAAFgDQAFgDADgGQABgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_26.setTransform(-75.5,-4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_27.setTransform(-83.2,-4.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_28.setTransform(-95.5,-4.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_29.setTransform(-103.8,-4.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_30.setTransform(37.9,-23.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAlQgFgCgEgFQgDgDAAgHIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_31.setTransform(29.5,-23.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVA3IAAgnQgDAFgGADQgFADgHAAQgNAAgJgMQgKgLAAgSQAAgMADgJQAEgJAIgFQAIgFAJAAQAOAAAIAMIAAgKIALAAIAABrgAgNgkQgGAHAAAQQAAAOAGAHQAHAIAHAAQAJAAAFgHQAHgIAAgNQAAgQgHgIQgGgHgJAAQgHAAgGAHg");
	this.shape_32.setTransform(21,-21.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_33.setTransform(8.7,-23.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_34.setTransform(0.7,-23.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_35.setTransform(-7.2,-23.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_36.setTransform(-14.8,-23.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_37.setTransform(-27.1,-23.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_38.setTransform(-35.5,-23.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_39.setTransform(-45.8,-24.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_40.setTransform(-49.7,-24.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRAlQgFgCgEgFQgDgDAAgHIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_41.setTransform(-55.5,-23.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_42.setTransform(-63.9,-23.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKA3IAAhDIgMAAIAAgKIAMAAIAAgJQAAgIABgDQACgFAFgDQAEgDAIgBIANACIgCALIgIAAQgGgBgDADQgCADAAAGIAAAIIAPAAIAAAKIgPAAIAABDg");
	this.shape_43.setTransform(-69.7,-24.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_44.setTransform(-76.4,-23.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrA2IAAhrIAlAAQALAAAGACQAKACAHAGQAIAHAEALQAFALAAAOQAAAMgEAJQgDAKgEAGQgEAGgGAEQgFADgIACQgHACgJAAgAgdApIAXAAQAJAAAHgCQAFgCAEgDQAFgGADgIQACgJAAgLQAAgRgFgJQgGgJgHgDQgGgCgLAAIgXAAg");
	this.shape_45.setTransform(-85.7,-24.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_46.setTransform(-97.5,-20);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgYArQgLgNAAgbQAAgfAMgOQAKgMAQAAQANAAAIAIQAIAGACANIgOABQgBgIgDgDQgGgGgIAAQgFAAgFAEQgGAEgEAJQgDAIAAARQAEgIAIgDQAGgEAHAAQANAAAJAKQAKAJgBAPQAAAKgEAJQgEAIgIAFQgIAFgJAAQgPAAgLgMgAgNABQgGAHAAAKQAAAHACAGQADAHAGADQAFADAEAAQAJAAAGgHQAGgGAAgMQAAgLgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_47.setTransform(-103.9,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt6, new cjs.Rectangle(-110,-34.9,156,58.4), null);


(lib.Txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape.setTransform(23,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_1.setTransform(14.7,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_2.setTransform(8.8,-5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_3.setTransform(2.9,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_4.setTransform(-3.1,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_5.setTransform(-14.5,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_6.setTransform(-22.9,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_7.setTransform(-35.4,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_8.setTransform(-41.5,-5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_9.setTransform(-47.9,-4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_10.setTransform(-56.3,-4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_11.setTransform(-62.1,-5.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(-68,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIAOAAIgeBNg");
	this.shape_13.setTransform(-75.8,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_14.setTransform(-81.3,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAlQgHgDgCgEQgEgEgBgGIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEADAGAAQAFAAAFgDQAFgDACgGQADgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_15.setTransform(-87.2,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVA3IAAgnQgDAFgGADQgFADgHAAQgMAAgLgMQgKgLABgSQAAgMADgJQAFgJAHgFQAIgFAJAAQANAAAJAMIAAgKIALAAIAABrgAgNgkQgGAHAAAQQAAAOAGAHQAHAIAHAAQAJAAAFgHQAHgIAAgNQAAgQgHgIQgGgHgIAAQgIAAgGAHg");
	this.shape_16.setTransform(-95.7,-3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_17.setTransform(-103.9,-4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAlQgFgCgEgFQgDgDgBgHIAAgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_18.setTransform(11.2,-23.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_19.setTransform(3.2,-23.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_20.setTransform(-8.8,-23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_21.setTransform(-17.4,-24.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_22.setTransform(-29.6,-23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAsQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKALAAARQABAPgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgHQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIgAgHgiIAKgUIAQAAIgPAUg");
	this.shape_23.setTransform(-38,-24.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_24.setTransform(-43.8,-24.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_25.setTransform(-49.3,-23.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_26.setTransform(-57.2,-23.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_27.setTransform(-63.3,-23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_28.setTransform(-70.3,-21.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_29.setTransform(-80.9,-23.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_30.setTransform(-89.2,-24.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_31.setTransform(-97.5,-20);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgHAAgMQAAgMgHgFQgGgHgJAAQgHABgFADQgFACgDAEIgMgCIAKg2IA1AAIAAANIgqAAIgGAdQAKgHAJAAQAOAAAKAJQAKAKAAAOQAAAPgJALQgKANgRAAQgPAAgJgJg");
	this.shape_32.setTransform(-103.8,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt5, new cjs.Rectangle(-110,-34.9,141,39.6), null);


(lib.Txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape.setTransform(82.8,-23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_1.setTransform(74.4,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_2.setTransform(66,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_3.setTransform(58.1,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_4.setTransform(46.1,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA0QgHgCgCgFQgDgDgCgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDgAgHgiIAJgUIARAAIgQAUg");
	this.shape_5.setTransform(37.7,-24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_6.setTransform(29.1,-21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_7.setTransform(21,-23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_8.setTransform(13,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_9.setTransform(1.4,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_10.setTransform(-6.5,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_11.setTransform(-14.5,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(-22.4,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAwQgLgHgGgNQgGgOAAgOQAAgRAHgMQAGgNAMgGQAMgHANAAQARABAKAHQALAJAFAPIgPADQgDgMgHgFQgIgGgKABQgLAAgJAFQgIAGgEAKQgDAKAAALQAAAMAEALQAEAKAJAFQAIAFAJAAQALAAAJgGQAIgIADgNIAPAEQgFARgMAJQgLAKgRAAQgQAAgLgIg");
	this.shape_13.setTransform(-31.8,-24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_14.setTransform(-43.5,-20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKA2IAAgaIguAAIAAgMIAwhFIAKAAIAABFIAPAAIAAAMIgPAAIAAAagAgXAQIAhAAIAAgvg");
	this.shape_15.setTransform(-50.1,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt4, new cjs.Rectangle(-56,-34.9,147,20.8), null);


(lib.Txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape.setTransform(82,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_1.setTransform(76.1,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(70.1,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_3.setTransform(62.8,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_4.setTransform(54.5,-23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_5.setTransform(46.1,-23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_6.setTransform(37.5,-21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_7.setTransform(25.3,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAsQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKALAAARQABAPgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgHQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIgAgHgiIAKgUIAQAAIgPAUg");
	this.shape_8.setTransform(16.9,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_9.setTransform(11.1,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_10.setTransform(5.9,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA2IAAhNIAMAAIAABNgAgGglIAAgQIAMAAIAAAQg");
	this.shape_11.setTransform(0.2,-24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_12.setTransform(-5.9,-24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_13.setTransform(-14,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_14.setTransform(-22.3,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAwQgLgHgGgNQgGgOAAgOQAAgRAHgMQAGgNAMgGQAMgHANAAQARABAKAHQALAJAFAPIgPADQgDgMgHgFQgIgGgKABQgLAAgJAFQgIAGgEAKQgDAKAAALQAAAMAEALQAEAKAJAFQAIAFAJAAQALAAAJgGQAIgIADgNIAPAEQgFARgMAJQgLAKgRAAQgQAAgLgIg");
	this.shape_15.setTransform(-31.8,-24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_16.setTransform(-43.5,-20);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAuQgKgIgBgNIANgCQADALAEAFQAGAFAIAAQAIAAAHgHQAGgGAAgJQAAgKgGgFQgGgHgJAAIgIACIACgLIABAAQAIAAAHgDQAGgFAAgJQAAgHgEgFQgFgFgIAAQgHAAgFAFQgFAFgCAJIgNgCQADgNAIgHQAIgIANAAQAIAAAHAEQAIADAEAIQAEAGAAAHQAAAHgEAGQgEAGgHADQAJACAGAGQAFAHAAALQAAAOgKAJQgLAKgOAAQgOAAgJgJg");
	this.shape_17.setTransform(-49.8,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt3, new cjs.Rectangle(-56,-34.9,142,20.8), null);


(lib.Txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape.setTransform(102.8,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_1.setTransform(95.1,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_2.setTransform(86.9,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_3.setTransform(81.1,-5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_4.setTransform(75.9,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbA1IgCgMIAIABQAEAAACgBQADgCACgDIAEgJIABgEIgehNIAPAAIAQAuIAEARQACgJAEgIIARguIAMAAIgdBPQgFAMgBAFQgEAHgFADQgEADgGAAIgIgCg");
	this.shape_5.setTransform(64.1,-2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_6.setTransform(51.9,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_7.setTransform(43.6,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAlQgFgDgEgEQgCgEgBgGIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEADAGAAQAFAAAFgDQAFgDADgGQABgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_8.setTransform(35.2,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_9.setTransform(22.7,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_10.setTransform(16.6,-4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_11.setTransform(11.6,-5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_12.setTransform(5.2,-4.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_13.setTransform(-3.2,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_14.setTransform(-15.6,-4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_15.setTransform(-21.7,-4.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_16.setTransform(-29,-4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_17.setTransform(-35.1,-5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_18.setTransform(-41.5,-4.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_19.setTransform(-49.9,-4.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_20.setTransform(73.3,-23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_21.setTransform(66.1,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_22.setTransform(60.2,-24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_23.setTransform(54.3,-23.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIAOAAIgeBNg");
	this.shape_24.setTransform(46.5,-23.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_25.setTransform(34.4,-23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgDgDgCgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_26.setTransform(26,-23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_27.setTransform(15.8,-23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_28.setTransform(8.5,-23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_29.setTransform(0.5,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_30.setTransform(-7.4,-23.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_31.setTransform(-13.4,-23.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_32.setTransform(-20.9,-21.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_33.setTransform(-29,-23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_34.setTransform(-35.2,-24.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_35.setTransform(-43.5,-20);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgHAMgIQAQgPAHgIQAGgIAAgIQAAgHgFgFQgHgGgJAAQgIAAgGAGQgFAGAAAKIgOgCQACgPAIgIQAKgIAOAAQAPAAAKAJQAJAIAAANQAAAGgDAHQgDAGgGAGQgGAGgPAMIgNAOQgEAEgCAEIA0AAIAAAMg");
	this.shape_36.setTransform(-50,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt2, new cjs.Rectangle(-56,-34.9,170,39.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape.setTransform(17.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_1.setTransform(12.5,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_2.setTransform(8.3,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_3.setTransform(3.8,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-0.8,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_5.setTransform(-5.8,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("AD6AAQAABohKBJQhIBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABng");
	this.shape_6.setTransform(4.5,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBnAABJBJQBKBJAABnQAABohKBIQhJBKhnAAQhnAAhJhKg");
	this.shape_7.setTransform(4.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.inicioSym, new cjs.Rectangle(-21.5,-25.7,52,52), null);


(lib.impr6Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape.setTransform(56.2,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAJAJAAAQQAAAMgDAIQgEAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_1.setTransform(50.3,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOArQgHgFgEgIQgDgIAAgKQAAgKADgHQADgIAHgFQAHgEAIAAQAFAAAFACQAFADADAEIAAghIALAAIAABcIgKAAIAAgJQgHAKgMAAQgHAAgHgEgAgLgHQgGAHAAAMQAAANAGAGQAFAHAHAAQAHAAAGgGQAFgGAAgNQAAgNgGgGQgFgHgIAAQgGAAgFAGg");
	this.shape_2.setTransform(42.8,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_3.setTransform(37.9,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_4.setTransform(35,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_5.setTransform(29.9,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAiIgahDIAMAAIAPAoIADANIAFgNIAOgoIAMAAIgZBDg");
	this.shape_6.setTransform(23.1,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAaQgIgJgBgRQAAgSAKgJQAKgHALAAQAOAAAIAJQAKAJAAAQQAAAMgEAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_7.setTransform(12.6,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgDAEABQAFAAAGADIgEALQgEgCgEgBQgEAAgCACQgDADgBAEQgCAGAAAHIAAAjg");
	this.shape_8.setTransform(7.3,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEADgHIALACQgCAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_9.setTransform(1,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiAjIAAgqIgBgKQgBgDgDgCQgDgCgEAAQgHABgFAEQgEAFAAAKIAAAnIgLAAIAAgrQAAgIgCgEQgDgEgHAAQgEABgEACQgFADgBAEQgCAFAAAJIAAAjIgMAAIAAhDIALAAIAAAJQADgFAFgDQAFgCAHAAQAHAAAFACQAEAEACAFQAIgMANABQAKAAAFAFQAGAFAAAMIAAAug");
	this.shape_10.setTransform(-8,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAtQgFgCgCgEQgDgDgBgFIAAgLIAAgoIALAAIAAAkIABAMQABAEADADQAEADAFgBQAEABAFgDQAEgDACgEQACgFAAgIIAAgjIALAAIAABCIgKAAIAAgKQgIALgMAAQgGABgGgDgAgGgdIAHgRIAPAAIgOARg");
	this.shape_11.setTransform(-17.1,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgBgEQgCgEgDgCQgEgCgEAAQgHABgEAEQgGAEAAANIAAAlIgLAAIAAhDIAKAAIAAAJQAHgLANABQAGgBAGADQAFACACAEQACADACAFIAAALIAAApg");
	this.shape_12.setTransform(-24.3,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgCgDgDgCQgEgCgEAAQgGgBgGAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAIgLANAAQAFAAAFACQAFACADADQADAEAAAFIABALIAAAog");
	this.shape_13.setTransform(34.6,-3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgEQgDgDgBgFIAAgKIAAgqIALAAIAAAlIABAMQABAFADACQAEACAFABQAEgBAFgCQAEgCACgFQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGgBgGgCg");
	this.shape_14.setTransform(27.3,-3.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAIgJANAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEACgHIANACQgEAKgHAGQgIAFgLAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgGAAgGAFg");
	this.shape_15.setTransform(16.5,-3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAeQgHgGgCgKIAMgCQABAHADADQAFAEAHAAQAIAAAEgDQADgEAAgEQAAgEgDgCIgMgEQgLgDgFgCQgFgCgDgEQgCgEAAgFQAAgEACgEQACgEAEgCIAHgEQAEgBAFAAQAIAAAGACQAFACADAEQADAEABAHIgLABQgBgFgDgDQgEgDgGAAQgHAAgEADQgDACAAAEQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQABACAEABIAJADIARAFQAEABADAEQADAEAAAGQAAAGgEAFQgDAFgGADQgGACgIAAQgNAAgGgFg");
	this.shape_16.setTransform(9.6,-3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgyAAQABALAGAGQAFAGAIAAQAGAAAFgDQAEgEADgHIAMACQgDAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_17.setTransform(2.7,-3.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQADgCAEAAQAFAAAGADIgEALQgEgDgEABQgEAAgCABQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_18.setTransform(-2.6,-3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_19.setTransform(-9.1,-2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgBgDgEgCQgEgCgEAAQgHgBgEAFQgGAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAHgLAOAAQAFAAAGACQAEACADADQACAEABAFIABALIAAAog");
	this.shape_20.setTransform(-16.1,-3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAuIAAhbIALAAIAABbg");
	this.shape_21.setTransform(-21.5,-4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape_22.setTransform(-25.6,-7.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0066FF").ss(1,1,1).p("AnUkSIOqAAQAeAAAAAmIAAEeQlKAuhTA5QjiCZlJgnQgfAAAAgmIAAnRQAAgmAfAAg");
	this.shape_23.setTransform(15.1,11.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AnUELQgfAAAAgmIAAnRQAAgmAfAAIOqAAQAeAAAAAmIAAEeQlKAuhTA5Qi0B6j1AAQg/AAhDgIg");
	this.shape_24.setTransform(15.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr6Sym, new cjs.Rectangle(-35.9,-17,102,57), null);


(lib.impr5Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape.setTransform(56.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_1.setTransform(50.9,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgEAAgJIAAgnIgIAAIAAgJIAIAAIAAgQIAKgHIAAAXIAMAAIAAAJIgMAAIAAAnIABAGIACADIAEAAIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_2.setTransform(45.6,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAeQgHgGgCgKIALgCQABAHAFADQAEAEAHAAQAHAAAEgDQAEgEAAgEQAAgEgDgCIgMgEQgLgDgFgCQgFgCgDgEQgCgEAAgFQAAgEACgEQACgEAEgCIAHgEQAFgBAFAAQAGAAAGACQAHACACAEQAEAEABAHIgLABQgCgFgDgDQgEgDgGAAQgIAAgCADQgEACAAAEQAAAAAAABQAAABAAAAQABABAAAAQAAAAAAABQACACADABIAJADIARAFQAFABADAEQACAEAAAGQAAAGgDAFQgEAFgGADQgGACgIAAQgMAAgHgFg");
	this.shape_3.setTransform(40.5,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgMIALAAIAAAMg");
	this.shape_4.setTransform(35.8,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgEAAgJIAAgnIgIAAIAAgJIAIAAIAAgQIAKgHIAAAXIAMAAIAAAJIgMAAIAAAnIABAGIACADIAEAAIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_5.setTransform(32.6,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQAAgSAKgJQAKgHALAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAGAHAIAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgIAAgGAHg");
	this.shape_6.setTransform(27.1,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQADgCAEAAQAFAAAGADIgEALQgEgDgEABQgEAAgCABQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_7.setTransform(21.8,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAuIAAhbIAiAAIAOAAQAGABAGADQAEAEADAFQADAGAAAIQAAALgIAHQgIAJgTgBIgXAAIAAAmgAgWgBIAXAAQAMgBAFgEQAFgEAAgIQAAgGgDgEQgDgFgFgBIgLgBIgXAAg");
	this.shape_8.setTransform(15.1,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQAAgSAKgJQAKgHALAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAGAHAIAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgIAAgGAHg");
	this.shape_9.setTransform(3.3,4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgBgDgEgCQgEgCgEAAQgHgBgEAFQgGAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAHgLAOAAQAFAAAGACQAEACADADQACAEABAFIABALIAAAog");
	this.shape_10.setTransform(-4,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgMIALAAIAAAMg");
	this.shape_11.setTransform(-9.1,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAIgJANAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEACgHIANACQgEAKgHAGQgIAFgLAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgGAAgGAFg");
	this.shape_12.setTransform(-14.1,4.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZAuIgMgTIgJgMIgFgHIgFgCIgHgBIgPAAIAAApIgMAAIAAhbIApAAQAMgBAHADQAGACAEAHQADAGAAAIQAAAJgGAIQgGAFgOACIAIAFQAFAEAFAIIAQAZgAgcgFIAbAAQAHAAAFgBQAFgCADgEQACgDAAgFQAAgHgFgEQgFgEgKgBIgdAAg");
	this.shape_13.setTransform(-22,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape_14.setTransform(-29.4,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0066FF").ss(1,1,1).p("AnUkSIOqAAQAeAAAAAmIAAEeQlKAuhTA5QjiCZlJgnQgfAAAAgmIAAnRQAAgmAfAAg");
	this.shape_15.setTransform(15.1,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AnUELQgfAAAAgmIAAnRQAAgmAfAAIOqAAQAeAAAAAmIAAEeQlKAuhTA5Qi0B6j1AAQg/AAhDgIg");
	this.shape_16.setTransform(15.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr5Sym, new cjs.Rectangle(-35.9,-17,102,57), null);


(lib.impr4Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape.setTransform(58,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_1.setTransform(52,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQADgCAEAAQAFAAAGADIgEALQgEgDgEABQgEAAgCABQgDADgBAEQgCAGAAAHIAAAig");
	this.shape_2.setTransform(46.8,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAJgJANAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAFAGAIAAQAGAAAEgDQAFgEACgHIAMACQgDAKgHAGQgIAFgLAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgHAAgFAFg");
	this.shape_3.setTransform(40.5,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQgBgDgDgCQgEgCgEAAQgGgBgGAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAIgLANAAQAFAAAFACQAFACADADQADAEAAAFIABALIAAAog");
	this.shape_4.setTransform(33.2,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAJAJAAAQQAAAMgDAIQgEAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGAAgNQAAgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_5.setTransform(26,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhAuIAAhMIgbBMIgKAAIgbhOIAABOIgNAAIAAhbIATAAIAWBAIADAOIAGgPIAWg/IAQAAIAABbg");
	this.shape_6.setTransform(16.9,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_7.setTransform(4.3,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgBgDgEgCQgDgCgFAAQgHgBgFAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAHgLAOAAQAGAAAFACQAEACADADQACAEABAFIABALIAAAog");
	this.shape_8.setTransform(-3,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgMIALAAIAAAMg");
	this.shape_9.setTransform(-8.1,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAJgJAMAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAFAGAIAAQAGAAAFgDQAEgEACgHIANACQgDAKgIAGQgHAFgMAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgJAAQgGAAgGAFg");
	this.shape_10.setTransform(-13.1,4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZAuIgMgTIgJgMIgFgHIgFgCIgHgBIgPAAIAAApIgMAAIAAhbIApAAQAMgBAHADQAGACAEAHQADAGAAAIQABAJgHAIQgGAFgOACIAIAFQAFAEAFAIIAQAZgAgcgFIAbAAQAIAAAEgBQAFgCADgEQACgDAAgFQAAgHgFgEQgEgEgLgBIgdAAg");
	this.shape_11.setTransform(-21,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape_12.setTransform(-28.4,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0066FF").ss(1,1,1).p("AnUkSIOqAAQAeAAAAAmIAAEeQlKAuhTA5QjiCZlJgnQgfAAAAgmIAAnRQAAgmAfAAg");
	this.shape_13.setTransform(15.1,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AnUELQgfAAAAgmIAAnRQAAgmAfAAIOqAAQAeAAAAAmIAAEeQlKAuhTA5Qi0B6j1AAQg/AAhDgIg");
	this.shape_14.setTransform(15.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr4Sym, new cjs.Rectangle(-35.9,-17,102,57), null);


(lib.impr3Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape.setTransform(50.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgMIALAAIAAAMg");
	this.shape_1.setTransform(46.6,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_2.setTransform(41.3,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQgBgDgDgCQgDgCgFAAQgGgBgGAFQgFAEAAANIAAAkIgLAAIAAhCIAKAAIAAAKQAIgLAMAAQAHAAAEACQAFACADADQACAEACAFIABALIAAAog");
	this.shape_3.setTransform(34.3,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgEQgDgDgBgFIAAgKIAAgqIALAAIAAAlIABAMQABAFADACQAEACAFABQAEgBAFgCQAEgCACgFQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGgBgGgCg");
	this.shape_4.setTransform(27,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAuIAAhbIA+AAIAAAKIgyAAIAAAdIAqAAIAAAKIgqAAIAAAqg");
	this.shape_5.setTransform(19.7,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAaQgJgJABgRQAAgSAKgJQAIgHAMAAQAOAAAJAJQAIAJABAQQAAAMgFAIQgDAHgIAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAIAAAGgHQAGgGgBgNQABgMgGgGQgGgHgIAAQgIAAgFAHg");
	this.shape_6.setTransform(8.3,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQgBgDgDgCQgDgCgFAAQgGgBgGAFQgFAEAAANIAAAkIgLAAIAAhCIAKAAIAAAKQAIgLAMAAQAHAAAEACQAFACADADQACAEACAFIABALIAAAog");
	this.shape_7.setTransform(1,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgMIALAAIAAAMg");
	this.shape_8.setTransform(-4.1,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAJgJANAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAFAGAIAAQAGAAAEgDQAFgEADgHIALACQgDAKgHAGQgIAFgLAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_9.setTransform(-9.1,4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaAuIgMgTIgJgMIgFgHIgHgCIgGgBIgOAAIAAApIgNAAIAAhbIAoAAQANgBAGADQAHACADAHQAFAGAAAIQgBAJgGAIQgGAFgNACIAHAFQAFAEAFAIIAQAZgAgbgFIAaAAQAHAAAFgBQAFgCACgEQADgDAAgFQAAgHgFgEQgFgEgKgBIgcAAg");
	this.shape_10.setTransform(-17,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgPIANAAIAAAPIgDARgAgNARIgDgRIAAgPIANAAIAAAPIgDARg");
	this.shape_11.setTransform(-24.4,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0066FF").ss(1,1,1).p("AnUkSIOqAAQAeAAAAAmIAAEeQlKAuhTA5QjiCZlJgnQgfAAAAgmIAAnRQAAgmAfAAg");
	this.shape_12.setTransform(15.1,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AnUELQgfAAAAgmIAAnRQAAgmAfAAIOqAAQAeAAAAAmIAAEeQlKAuhTA5Qi0B6j1AAQg/AAhDgIg");
	this.shape_13.setTransform(15.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr3Sym, new cjs.Rectangle(-35.9,-17,103,57), null);


(lib.impr2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape.setTransform(57.3,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAuIAAhcIAJAAIAABcg");
	this.shape_1.setTransform(53.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_2.setTransform(48.4,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgEAAgJIAAgnIgIAAIAAgJIAIAAIAAgQIAKgHIAAAXIAMAAIAAAJIgMAAIAAAnIABAGIACADIAEAAIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_3.setTransform(43.1,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAGAGAHAAQAGAAAFgDQAEgEADgHIALACQgCAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_4.setTransform(37.6,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTArQgIgGABgLIALACQABAFADACQAEAEAHAAQAHAAAFgEQAEgDABgFQABgEAAgLQgHAJgLAAQgNAAgIgKQgIgKAAgNQAAgKAEgIQADgIAHgFQAHgEAIAAQAMAAAHAJIAAgIIALAAIAAA6QAAAPgDAHQgEAGgGAEQgHAEgKAAQgMAAgHgFgAgLggQgGAHAAAMQAAANAFAFQAGAGAHAAQAIAAAFgGQAFgFAAgNQAAgMgFgGQgGgHgIAAQgGAAgFAGg");
	this.shape_5.setTransform(30.1,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEADgHIAMACQgDAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_6.setTransform(23.1,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAuIgkhcIAOAAIAYBDIAEAPIAFgPIAZhDIANAAIgkBcg");
	this.shape_7.setTransform(15.8,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_8.setTransform(4.3,5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgBgDQgBgDgEgDQgDgBgFAAQgHgBgFAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAHgLAOAAQAGAAAFACQAEACADAEQACADABAFIABALIAAAog");
	this.shape_9.setTransform(-3,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgNIALAAIAAANg");
	this.shape_10.setTransform(-8.1,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAJgJAMAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAFAGAIAAQAGAAAFgDQAEgEACgHIANACQgDAKgIAGQgHAFgMAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgJAAQgGAAgGAFg");
	this.shape_11.setTransform(-13.1,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZAuIgMgTIgJgMIgFgHIgFgCIgHgBIgPAAIAAApIgMAAIAAhcIApAAQAMABAHACQAGACAEAHQADAGAAAIQABAJgHAIQgGAFgOACIAIAFQAFAEAFAIIAQAZgAgcgEIAbAAQAIAAAEgCQAFgCADgEQACgDAAgFQAAgHgFgEQgEgEgLgBIgdAAg");
	this.shape_12.setTransform(-21,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape_13.setTransform(-28.4,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0066FF").ss(1,1,1).p("AnUkSIOqAAQAeAAAAAmIAAEeQlKAuhTA5QjiCZlJgnQgfAAAAgmIAAnRQAAgmAfAAg");
	this.shape_14.setTransform(15.1,11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AnUELQgfAAAAgmIAAnRQAAgmAfAAIOqAAQAeAAAAAmIAAEeQlKAuhTA5Qi0B6j1AAQg/AAhDgIg");
	this.shape_15.setTransform(15.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr2Sym, new cjs.Rectangle(-35.9,-17,103,57), null);


(lib.impr1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape.setTransform(54.9,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAuIAAhcIAKAAIAABcg");
	this.shape_1.setTransform(51.1,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_2.setTransform(46,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiAiIAAgpIgBgKQgBgDgDgCQgDgBgEAAQgHgBgFAFQgEAFAAAKIAAAmIgLAAIAAgrQAAgHgCgEQgDgDgHAAQgEgBgEADQgFADgBAFQgCAFAAAIIAAAiIgMAAIAAhCIALAAIAAAKQADgFAFgDQAFgDAHAAQAHAAAFADQAEADACAFQAIgLANAAQAKgBAFAGQAGAFAAAMIAAAtg");
	this.shape_3.setTransform(37,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgNIALAAIAAANg");
	this.shape_4.setTransform(30.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQAAgDgEgDQgEgBgEAAQgHgBgEAFQgGAEAAANIAAAkIgLAAIAAhCIAKAAIAAAKQAHgLANAAQAHAAAFACQAFACACAEQADADABAFIABALIAAAog");
	this.shape_5.setTransform(25.1,5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdAuIgLgcIglAAIgKAcIgOAAIAkhcIANAAIAmBcgAgGgSIgKAaIAfAAIgKgZIgFgTIgGASg");
	this.shape_6.setTransform(17.2,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQAAgSALgJQAJgHALAAQAOAAAIAJQAJAJAAAQQAAAMgDAIQgEAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAJAAAFgHQAFgGAAgNQAAgMgFgGQgFgHgJAAQgHAAgHAHg");
	this.shape_7.setTransform(6.3,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAiIAAgnQAAgIgCgDQgBgDgDgDQgEgBgEAAQgGgBgGAFQgFAEAAANIAAAkIgMAAIAAhCIALAAIAAAKQAIgLANAAQAFAAAFACQAFACADAEQADADAAAFIABALIAAAog");
	this.shape_8.setTransform(-1,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAuIAAhCIALAAIAABCgAgFghIAAgNIALAAIAAANg");
	this.shape_9.setTransform(-6.1,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEADgHIALACQgCAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_10.setTransform(-11.1,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaAuIgNgTIgJgMIgEgHIgHgCIgGgBIgOAAIAAApIgNAAIAAhcIApAAQAMABAGACQAHACADAHQAEAGABAIQAAAJgHAIQgGAFgNACIAHAFQAFAEAFAIIAQAZgAgbgEIAaAAQAHAAAFgCQAFgCADgEQACgDAAgFQAAgHgFgEQgEgEgLgBIgcAAg");
	this.shape_11.setTransform(-19,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape_12.setTransform(-26.4,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0066FF").ss(1,1,1).p("AnUkSIOqAAQAeAAAAAmIAAEeQlKAuhTA5QjiCZlJgnQgfAAAAgmIAAnRQAAgmAfAAg");
	this.shape_13.setTransform(15.1,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AnUELQgfAAAAgmIAAnRQAAgmAfAAIOqAAQAeAAAAAmIAAEeQlKAuhTA5Qi0B6j1AAQg/AAhDgIg");
	this.shape_14.setTransform(15.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr1Sym, new cjs.Rectangle(-35.9,-17,109,57), null);


(lib.IfSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape.setTransform(-9.7,-17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_1.setTransform(-16.4,-17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_2.setTransform(-21,-19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_3.setTransform(-25.7,-17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_4.setTransform(-30.5,-17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0066FF").ss(1,1,1).p("AFeAAIleFeIldldIFdleg");
	this.shape_5.setTransform(-19.5,-17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AldABIFdleIFeFdIleFeg");
	this.shape_6.setTransform(-19.5,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IfSym, new cjs.Rectangle(-55.5,-53.3,72,72), null);


(lib.DefaultCaseSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape.setTransform(7.3,-8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_1.setTransform(4.2,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_2.setTransform(-0.4,-7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAbQgFgFgBgHQAAgFACgEQACgDAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgHgEgDQgDgDgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABADABAEIgLAAIgBgHQgHAFgEACQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBACgBAEQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_3.setTransform(-7,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_4.setTransform(-11.8,-9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_5.setTransform(-17,-7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgGAAgEAGg");
	this.shape_6.setTransform(-23.9,-9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0066FF").ss(1,1,1).p("AHCAAInCHCInBnBIHCnCg");
	this.shape_7.setTransform(-9.5,-7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AnBABIHBnCIHCHBInCHCg");
	this.shape_8.setTransform(-9.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DefaultCaseSym, new cjs.Rectangle(-55.5,-53.3,92,92), null);


(lib.Case5Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAlQgHgHgBgLIALgBQABAIAFAEQAEAEAGAAQAGAAAGgFQAFgGAAgKQAAgJgFgEQgFgFgHAAQgFAAgEACQgFADgCACIgJgBIAIgrIAqAAIAAAKIgiAAIgFAXQAIgFAIAAQALgBAHAJQAJAGgBAMQABAMgIAIQgHALgOAAQgLAAgIgGg");
	this.shape.setTransform(10.7,-8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA5AAIAAAKgAgcgHIAAgKIA5AAIAAAKg");
	this.shape_1.setTransform(0.5,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbASIAAgKIA4AAIAAAKgAgbgHIAAgKIA4AAIAAAKg");
	this.shape_2.setTransform(-6.5,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-16.7,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-23.4,-7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_5.setTransform(-28,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_6.setTransform(-32.7,-7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_7.setTransform(-37.5,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0066FF").ss(1,1,1).p("AHCAAInCHCInBnBIHCnCg");
	this.shape_8.setTransform(-9.5,-7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AnBABIHBnCIHCHBInCHCg");
	this.shape_9.setTransform(-9.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Case5Sym, new cjs.Rectangle(-55.5,-53.3,92,92), null);


(lib.Case4Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIArIAAgVIglAAIAAgJIAmg3IAJAAIAAA3IAMAAIAAAJIgMAAIAAAVgAgSANIAaAAIAAgmg");
	this.shape.setTransform(14.4,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbASIAAgKIA3AAIAAAKgAgbgHIAAgKIA3AAIAAAKg");
	this.shape_1.setTransform(4.5,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA4AAIAAAKgAgcgHIAAgKIA4AAIAAAKg");
	this.shape_2.setTransform(-2.5,-10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-12.7,-8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-19.4,-8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_5.setTransform(-24,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_6.setTransform(-28.7,-8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_7.setTransform(-33.5,-8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0066FF").ss(1,1,1).p("AHCAAInCHCInBnBIHCnCg");
	this.shape_8.setTransform(-9.5,-7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AnBABIHBnCIHCHBInCHCg");
	this.shape_9.setTransform(-9.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Case4Sym, new cjs.Rectangle(-55.5,-53.3,92,92), null);


(lib.Case3Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAlQgHgHgBgKIAKgCQACAJAFAEQAEAEAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAIgGACIABgJIABAAQAGAAAGgDQAFgEAAgHQAAgGgEgEQgEgDgFAAQgGAAgEAEQgEADgCAIIgKgCQACgKAHgGQAGgGALAAQAGAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIABAEAFQAEAGAAAIQAAALgIAIQgIAIgMAAQgLAAgIgHg");
	this.shape.setTransform(14.6,-9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbASIAAgKIA3AAIAAAKgAgbgHIAAgKIA3AAIAAAKg");
	this.shape_1.setTransform(4.5,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA4AAIAAAKgAgcgHIAAgKIA4AAIAAAKg");
	this.shape_2.setTransform(-2.5,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-12.7,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-19.4,-7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_5.setTransform(-24,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_6.setTransform(-28.7,-7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_7.setTransform(-33.5,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0066FF").ss(1,1,1).p("AHCAAInCHCInBnBIHCnCg");
	this.shape_8.setTransform(-9.5,-7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AnBABIHBnCIHCHBInCHCg");
	this.shape_9.setTransform(-9.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Case3Sym, new cjs.Rectangle(-55.5,-53.3,92,92), null);


(lib.Case2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcArQAAgEACgDQACgGAFgFQAEgHAKgHQANgLAFgGQAEgHABgFQAAgHgFgEQgFgEgGgBQgIABgEAEQgEAEAAAIIgLAAQABgMAHgHQAIgGALAAQAMAAAHAHQAIAGAAALQgBAFgCAFQgCAEgFAFQgEAFgMALIgLAKIgFAGIAqAAIAAAKg");
	this.shape.setTransform(14.5,-9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbASIAAgKIA3AAIAAAKgAgbgHIAAgKIA3AAIAAAKg");
	this.shape_1.setTransform(4.5,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA4AAIAAAKgAgcgHIAAgKIA4AAIAAAKg");
	this.shape_2.setTransform(-2.5,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-12.7,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-19.4,-7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_5.setTransform(-24,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_6.setTransform(-28.7,-7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_7.setTransform(-33.5,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0066FF").ss(1,1,1).p("AHCAAInCHCInBnBIHCnCg");
	this.shape_8.setTransform(-9.5,-7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AnBABIHBnCIHCHBInCHCg");
	this.shape_9.setTransform(-9.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Case2Sym, new cjs.Rectangle(-55.5,-53.3,92,92), null);


(lib.Case1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFArIAAhCQgDADgGAEIgLAGIAAgKQAJgFAGgGQAGgGADgFIAHAAIAABVg");
	this.shape.setTransform(12.2,-9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbASIAAgKIA4AAIAAAKgAgbgHIAAgKIA4AAIAAAKg");
	this.shape_1.setTransform(2.5,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbASIAAgKIA3AAIAAAKgAgbgHIAAgKIA3AAIAAAKg");
	this.shape_2.setTransform(-4.5,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-14.7,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-21.4,-7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_5.setTransform(-26,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_6.setTransform(-30.7,-7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_7.setTransform(-35.5,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0066FF").ss(1,1,1).p("AHCAAInCHCInBnBIHCnCg");
	this.shape_8.setTransform(-9.5,-7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AnBABIHBnCIHCHBInCHCg");
	this.shape_9.setTransform(-9.5,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Case1Sym, new cjs.Rectangle(-55.5,-53.3,92,92), null);


(lib.flechaSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiGqIAAh9IAgFAIAA11IAFAAIAAV1IAglAIAAB9IgjFgg");
	this.shape.setTransform(-28.4,-58.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaSym, new cjs.Rectangle(-31.9,-136.4,7.1,155.5), null);


(lib.flechaFinalSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhSAjIhGgjIBGgiIAYAAIg/AgIESAAIAAAFIkSAAIA/Agg");
	this.shape.setTransform(181,-146.7,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("ApElnIAALZANvlxIAALjEAjXgFsIAALjEA4pgFYIAALPEg4ogFjIAALZA/pl7IAALtEg4oAF8MBxRAAA");
	this.shape_1.setTransform(164.4,-199.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaFinalSym, new cjs.Rectangle(-199.1,-238.9,727,107.5), null);


(lib.flecha5Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.7,1,1).p("ASuAAMglbAAA");
	this.shape.setTransform(0.4,-159.2,0.576,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha5Sym, new cjs.Rectangle(-69.6,-160.2,140,2), null);


(lib.flecha4Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.7,1,1).p("AMzAAI5lAA");
	this.shape.setTransform(56.9,-159.2,0.842,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha4Sym, new cjs.Rectangle(-13.1,-160.2,140,2), null);


(lib.flecha3Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.7,1,1).p("AMzAAI5lAA");
	this.shape.setTransform(54.9,-159.2,0.818,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha3Sym, new cjs.Rectangle(-13.1,-160.2,136.1,2), null);


(lib.flecha2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiBUIAAgZIAgA/IAAkSIAFAAIAAESIAgg/IAAAZIgjBFg");
	this.shape.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha2Sym, new cjs.Rectangle(-3.5,-17.1,7.1,30.6), null);


(lib.flecha1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.7,1,1).p("AdNiaIAAExAdKCbMg6WAAA");
	this.shape.setTransform(87.7,-174.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha1Sym, new cjs.Rectangle(-100.2,-191.1,375.8,33), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape.setTransform(0.3,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_1.setTransform(-6.4,-7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_2.setTransform(-11,-8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_3.setTransform(-15.7,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_4.setTransform(-20.5,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0066FF").ss(1,1,1).p("AkhjHIMVAAIjNGPIsaAAg");
	this.shape_5.setTransform(-9,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AnzDIIDSmPIMVAAIjNGPg");
	this.shape_6.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entradaSymb, new cjs.Rectangle(-60,-27,102,42), null);


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


(lib.Boton6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AggA5QgOgRAAglQAAgoAPgTQANgQAWAAQARAAALAJQALAJACASIgSABQgCgLgEgFQgHgHgLAAQgHAAgHAFQgIAGgFAMQgFALAAAVQAHgJAJgEQAJgGAJAAQASABAMANQAMALAAAVQAAAOgFALQgGAMgKAGQgLAGgNAAQgUAAgOgQgAgSACQgIAIAAAOQAAAJAEAIQAEAJAHAEQAHAFAGgBQALABAIgKQAIgIAAgQQAAgPgIgIQgHgIgMAAQgLAAgJAIg");
	this.shape.setTransform(-1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABgIAACeQAABfhXAAIjhAAQhXAAAAhfIAAieQAAhgBXAAg");
	this.shape_1.setTransform(-1.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCvQhXAAAAhfIAAieQAAhgBXAAIDhAAQBXAAAABgIAACeQAABfhXAAg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA5QgOgRAAglQAAgoAPgTQANgQAWAAQARAAALAJQALAJACASIgSABQgCgLgEgFQgHgHgLAAQgHAAgHAFQgIAGgFAMQgFALAAAVQAHgJAJgEQAJgGAJAAQASABAMANQAMALAAAVQAAAOgFALQgGAMgKAGQgLAGgNAAQgUAAgOgQgAgSACQgIAIAAAOQAAAJAEAIQAEAJAHAEQAHAFAGgBQALABAIgKQAIgIAAgQQAAgPgIgIQgHgIgMAAQgLAAgJAIg");
	this.shape_3.setTransform(-1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABfIAACfQAABfhXAAIjhAAQhXAAAAhfIAAifQAAhfBXAAg");
	this.shape_4.setTransform(-1.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhwCvQhXAAAAhgIAAidQAAhgBXAAIDhAAQBXAAAABgIAACdQAABghXAAg");
	this.shape_5.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-18.5,42,37);


(lib.Boton5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AggA9QgNgLgBgSIASgCQACAOAIAHQAHAGALAAQALAAAJgJQAJgKAAgQQAAgPgJgHQgIgJgNAAQgIAAgHAEQgHAEgEAFIgQgCIAOhJIBGAAIAAARIg4AAIgIAmQANgJANAAQATAAANANQAMAMAAAVQAAATgLAOQgOASgWAAQgUAAgMgLg");
	this.shape.setTransform(-0.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABgIAACeQAABfhXAAIjhAAQhXAAAAhfIAAieQAAhgBXAAg");
	this.shape_1.setTransform(-1.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCvQhXAAAAhfIAAieQAAhgBXAAIDhAAQBXAAAABgIAACeQAABfhXAAg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA9QgNgLgBgSIASgCQACAOAIAHQAHAGALAAQALAAAJgJQAJgKAAgQQAAgPgJgHQgIgJgNAAQgIAAgHAEQgHAEgEAFIgQgCIAOhJIBGAAIAAARIg4AAIgIAmQANgJANAAQATAAANANQAMAMAAAVQAAATgLAOQgOASgWAAQgUAAgMgLg");
	this.shape_3.setTransform(-0.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABfIAACfQAABfhXAAIjhAAQhXAAAAhfIAAifQAAhfBXAAg");
	this.shape_4.setTransform(-1.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhwCvQhXAAAAhgIAAidQAAhgBXAAIDhAAQBXAAAABgIAACdQAABghXAAg");
	this.shape_5.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-18.5,42,37);


(lib.Boton4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAMBIIAAgjIg8AAIAAgQIBAhbIAOAAIAABbIAUAAIAAAQIgUAAIAAAjgAgfAVIArAAIAAg/g");
	this.shape.setTransform(-1.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABgIAACeQAABfhXAAIjhAAQhXAAAAhfIAAieQAAhgBXAAg");
	this.shape_1.setTransform(-1.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCvQhXAAAAhfIAAieQAAhgBXAAIDhAAQBXAAAABgIAACeQAABfhXAAg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMBIIAAgjIg8AAIAAgQIBAhbIAOAAIAABbIAUAAIAAAQIgUAAIAAAjgAgfAVIArAAIAAg/g");
	this.shape_3.setTransform(-1.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABfIAACfQAABfhXAAIjhAAQhXAAAAhfIAAifQAAhfBXAAg");
	this.shape_4.setTransform(-1.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhwCvQhXAAAAhgIAAidQAAhgBXAAIDhAAQBXAAAABgIAACdQAABghXAAg");
	this.shape_5.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-18.5,42,37);


(lib.Boton3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AggA+QgMgLgCgTIASgCQADAQAHAGQAHAGALAAQALAAAJgIQAIgJAAgMQAAgNgIgHQgIgIgMAAIgLABIACgOIADAAQAKAAAJgFQAJgGAAgMQAAgKgHgGQgGgHgKAAQgKAAgHAHQgHAGgCANIgRgDQADgSAMgJQALgKARAAQALAAAKAFQAJAFAGAJQAFAIAAAKQAAAJgFAIQgFAIgKAEQANADAHAIQAHAJAAAOQAAATgOANQgNANgUAAQgTAAgNgLg");
	this.shape.setTransform(-1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABgIAACeQAABfhXAAIjhAAQhXAAAAhfIAAieQAAhgBXAAg");
	this.shape_1.setTransform(-1.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCvQhXAAAAhfIAAieQAAhgBXAAIDhAAQBXAAAABgIAACeQAABfhXAAg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA+QgMgLgCgTIASgCQADAQAHAGQAHAGALAAQALAAAJgIQAIgJAAgMQAAgNgIgHQgIgIgMAAIgLABIACgOIADAAQAKAAAJgFQAJgGAAgMQAAgKgHgGQgGgHgKAAQgKAAgHAHQgHAGgCANIgRgDQADgSAMgJQALgKARAAQALAAAKAFQAJAFAGAJQAFAIAAAKQAAAJgFAIQgFAIgKAEQANADAHAIQAHAJAAAOQAAATgOANQgNANgUAAQgTAAgNgLg");
	this.shape_3.setTransform(-1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABfIAACfQAABfhXAAIjhAAQhXAAAAhfIAAifQAAhfBXAAg");
	this.shape_4.setTransform(-1.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhwCvQhXAAAAhgIAAidQAAhgBXAAIDhAAQBXAAAABgIAACdQAABghXAAg");
	this.shape_5.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-18.5,42,37);


(lib.Boton2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg");
	this.shape.setTransform(-1.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABgIAACeQAABfhXAAIjhAAQhXAAAAhfIAAieQAAhgBXAAg");
	this.shape_1.setTransform(-1.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCvQhXAAAAhfIAAieQAAhgBXAAIDhAAQBXAAAABgIAACeQAABfhXAAg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg");
	this.shape_3.setTransform(-1.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABfIAACfQAABfhXAAIjhAAQhXAAAAhfIAAifQAAhfBXAAg");
	this.shape_4.setTransform(-1.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhwCvQhXAAAAhgIAAidQAAhgBXAAIDhAAQBXAAAABgIAACdQAABghXAAg");
	this.shape_5.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-18.5,42,37);


(lib.Boton1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAJBIIAAhvQgHAGgJAGQgKAGgIADIAAgRQAOgHALgKQAKgKAFgJIALAAIAACPg");
	this.shape.setTransform(-1.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABgIAACeQAABfhXAAIjhAAQhXAAAAhfIAAieQAAhgBXAAg");
	this.shape_1.setTransform(-1.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCvQhXAAAAhfIAAieQAAhgBXAAIDhAAQBXAAAABgIAACeQAABfhXAAg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJBIIAAhvQgHAGgJAGQgKAGgIADIAAgRQAOgHALgKQAKgKAFgJIALAAIAACPg");
	this.shape_3.setTransform(-1.7,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(0.7,1,1).p("AhwiuIDhAAQBXAAAABfIAACfQAABfhXAAIjhAAQhXAAAAhfIAAifQAAhfBXAAg");
	this.shape_4.setTransform(-1.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhwCvQhXAAAAhgIAAidQAAhgBXAAIDhAAQBXAAAABgIAACdQAABghXAAg");
	this.shape_5.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-18.5,42,37);


// stage content:
(lib._switch = function(mode,startPosition,loop) {
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
	this.frame_72 = function() {
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
	this.frame_265 = function() {
		var root = this;
		//alert(num);
		this.boton1.addEventListener("click", btn1.bind(this));
		this.boton2.addEventListener("click", btn2.bind(this));
		this.boton3.addEventListener("click", btn3.bind(this));
		this.boton4.addEventListener("click", btn4.bind(this));
		this.boton5.addEventListener("click", btn5.bind(this));
		this.boton6.addEventListener("click", btn6.bind(this));
		
		function btn1() {
			
			if(num == 1){
				this.gotoAndPlay(376); //correcto
			}else{
				this.gotoAndPlay(352); //incorrecto
			}
			
		}
		
		
		function btn2() {
			
			if(num == 2){
				this.gotoAndPlay(376); //correcto
			}else{
				this.gotoAndPlay(352); //incorrecto
			}
			
		}
		
		function btn3() {
			
			if(num == 3){
				this.gotoAndPlay(376); //correcto
			}else{
				this.gotoAndPlay(352); //incorrecto
			}
			
		}
		
		function btn4() {
			
			if(num == 4){
				this.gotoAndPlay(376); //correcto
			}else{
				this.gotoAndPlay(352); //incorrecto
			}
			
		}
		
		function btn5() {
			
			if(num == 5){
				this.gotoAndPlay(376); //correcto
			}else{
				this.gotoAndPlay(352); //incorrecto
			}
			
		}
		
		function btn6() {
			
			if(num >= 6){
				this.gotoAndPlay(376); //correcto
			}else{
				this.gotoAndPlay(352); //incorrecto
			}
			
		}
	}
	this.frame_349 = function() {
		this.gotoAndPlay(266);
	}
	this.frame_372 = function() {
		this.gotoAndPlay(266);
	}
	this.frame_639 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(193).call(this.frame_265).wait(84).call(this.frame_349).wait(23).call(this.frame_372).wait(267).call(this.frame_639).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},639).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio}]}).to({state:[]},639).wait(2));

	// FinalLayer
	this.instance = new lib.finSym();
	this.instance.parent = this;
	this.instance.setTransform(730.5,583.9,1,1,0,0,0,4.5,4.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(579).to({_off:false},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(47).to({_off:true},1).wait(1));

	// Paso7Layer
	this.instance_1 = new lib.Txt7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.8,598.9,1,1,0,0,0,-1.6,-13.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(579).to({_off:false},0).wait(1).to({regX:-3.5,regY:-13.7,x:147.9,y:598.7,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(47).to({_off:true},1).wait(1));

	// Linea19Layer
	this.instance_2 = new lib.flechaFinalSym();
	this.instance_2.parent = this;
	this.instance_2.setTransform(551,530.5,1,1,0,0,0,2,-159.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(569).to({_off:false},0).wait(1).to({regX:164.4,regY:-184.9,x:713.4,y:505.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(60).to({_off:true},1).wait(1));

	// Paso6Layer
	this.instance_3 = new lib.Txt6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(205.4,506,1,1,0,0,0,-32,-5.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(544).to({_off:false},0).wait(1).to({regX:-33,regY:-5.8,x:204.4,y:505.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(84).to({_off:true},1).wait(1));

	// Impr6Layer
	this.instance_4 = new lib.impr6Sym();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1092,429.8,1,1,0,0,0,15.1,11.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(520).to({_off:false},0).wait(1).to({regX:15,x:1091.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(108).to({_off:true},1).wait(1));

	// Linea18Layer
	this.instance_5 = new lib.flecha2Sym();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1076.4,387,1,1,0,0,0,0,-1.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(520).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(108).to({_off:true},1).wait(1));

	// Impr5Layer
	this.instance_6 = new lib.impr5Sym();
	this.instance_6.parent = this;
	this.instance_6.setTransform(949.5,430.1,1,1,0,0,0,15.1,11.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(495).to({_off:false},0).wait(1).to({regX:15,x:949.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(132).to({_off:true},1).wait(1));

	// Linea17Layer
	this.instance_7 = new lib.flecha2Sym();
	this.instance_7.parent = this;
	this.instance_7.setTransform(938.9,387.3,1,1,0,0,0,0,-1.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(495).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(132).to({_off:true},1).wait(1));

	// Impr4Layer
	this.instance_8 = new lib.impr4Sym();
	this.instance_8.parent = this;
	this.instance_8.setTransform(806.5,430.1,1,1,0,0,0,15.1,11.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(471).to({_off:false},0).wait(1).to({regX:15,x:806.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(156).to({_off:true},1).wait(1));

	// Linea16Layer
	this.instance_9 = new lib.flecha2Sym();
	this.instance_9.parent = this;
	this.instance_9.setTransform(800.9,387.3,1,1,0,0,0,0,-1.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(471).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(156).to({_off:true},1).wait(1));

	// Impr3Layer
	this.instance_10 = new lib.impr3Sym();
	this.instance_10.parent = this;
	this.instance_10.setTransform(661.5,431.5,1,1,0,0,0,15.1,11.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(447).to({_off:false},0).wait(1).to({regX:15,x:661.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(180).to({_off:true},1).wait(1));

	// Linea15Layer
	this.instance_11 = new lib.flecha2Sym();
	this.instance_11.parent = this;
	this.instance_11.setTransform(656.2,387.8,1,1,0,0,0,0,-1.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(447).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(180).to({_off:true},1).wait(1));

	// Impr2Layer
	this.instance_12 = new lib.impr2Sym();
	this.instance_12.parent = this;
	this.instance_12.setTransform(511.5,431.5,1,1,0,0,0,15.1,11.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(423).to({_off:false},0).wait(1).to({regX:15,x:511.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(204).to({_off:true},1).wait(1));

	// Linea14Layer
	this.instance_13 = new lib.flecha2Sym();
	this.instance_13.parent = this;
	this.instance_13.setTransform(510.1,387.8,1,1,0,0,0,0,-1.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(423).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(204).to({_off:true},1).wait(1));

	// Impr1Layer
	this.instance_14 = new lib.impr1Sym();
	this.instance_14.parent = this;
	this.instance_14.setTransform(352.5,426.4,1,1,0,0,0,10.1,6.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(399).to({_off:false},0).wait(1).to({regX:15,regY:11.5,x:357.4,y:431.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(228).to({_off:true},1).wait(1));

	// Linea13Layer
	this.instance_15 = new lib.flecha2Sym();
	this.instance_15.parent = this;
	this.instance_15.setTransform(355.1,387.8,1,1,0,0,0,0,-1.9);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(399).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(228).to({_off:true},1).wait(1));

	// Paso5
	this.instance_16 = new lib.Txt5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(194.9,420,1,1,0,0,0,-42.5,-15.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(375).to({_off:false},0).wait(1).to({regX:-40.4,regY:-13.8,x:197,y:421.3,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(254).to({_off:true},1).wait(1));

	// Incorrecto
	this.instance_17 = new lib.Error();
	this.instance_17.parent = this;
	this.instance_17.setTransform(400.6,229.6,1,1,0,0,0,-8,-18.4);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(351).to({_off:false},0).wait(1).to({regY:-18.6,y:229.4,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(266));

	// ActionIf
	this.boton6 = new lib.Boton6();
	this.boton6.name = "boton6";
	this.boton6.parent = this;
	this.boton6.setTransform(1042.9,276.2);
	new cjs.ButtonHelper(this.boton6, 0, 1, 1);

	this.boton5 = new lib.Boton5();
	this.boton5.name = "boton5";
	this.boton5.parent = this;
	this.boton5.setTransform(906.4,276.2);
	new cjs.ButtonHelper(this.boton5, 0, 1, 1);

	this.boton4 = new lib.Boton4();
	this.boton4.name = "boton4";
	this.boton4.parent = this;
	this.boton4.setTransform(768.4,276.2);
	new cjs.ButtonHelper(this.boton4, 0, 1, 1);

	this.boton3 = new lib.Boton3();
	this.boton3.name = "boton3";
	this.boton3.parent = this;
	this.boton3.setTransform(622.4,276.2);
	new cjs.ButtonHelper(this.boton3, 0, 1, 1);

	this.boton2 = new lib.Boton2();
	this.boton2.name = "boton2";
	this.boton2.parent = this;
	this.boton2.setTransform(476.4,276.2);
	new cjs.ButtonHelper(this.boton2, 0, 1, 1);

	this.boton1 = new lib.Boton1();
	this.boton1.name = "boton1";
	this.boton1.parent = this;
	this.boton1.setTransform(320,276.2);
	new cjs.ButtonHelper(this.boton1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.boton1},{t:this.boton2},{t:this.boton3},{t:this.boton4},{t:this.boton5},{t:this.boton6}]},265).to({state:[]},110).to({state:[]},265).wait(1));

	// DefaultLayer
	this.instance_18 = new lib.DefaultCaseSym();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1076.4,326.7,1,1,0,0,0,-9.5,-7.4);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(253).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(374).to({_off:true},1).wait(1));

	// Linea12Layer
	this.instance_19 = new lib.flecha2Sym();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1131.7,112.6,1,1,0,0,0,55.3,-155.6);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(253).to({_off:false},0).wait(1).to({regX:0,regY:-1.9,x:1076.4,y:266.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(73).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(289).to({_off:true},1).wait(1));

	// Linea11Layer
	this.instance_20 = new lib.flecha5Sym();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1058.2,251.2,1,1,0,0,0,51.1,-159.2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(253).to({_off:false},0).wait(1).to({regX:0.4,x:1007.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(374).to({_off:true},1).wait(1));

	// Case5Layer
	this.instance_21 = new lib.Case5Sym();
	this.instance_21.parent = this;
	this.instance_21.setTransform(939,326.7,1,1,0,0,0,-9.5,-7.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(231).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(398).to({_off:true},1).wait(1));

	// Linea10Layer
	this.instance_22 = new lib.flecha2Sym();
	this.instance_22.parent = this;
	this.instance_22.setTransform(994.5,113.1,1,1,0,0,0,55.3,-155.6);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(231).to({_off:false},0).wait(1).to({regX:0,regY:-1.9,x:939.2,y:266.8,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(302).to({_off:true},1).wait(1));

	// Linea9Layer
	this.instance_23 = new lib.flecha4Sym();
	this.instance_23.parent = this;
	this.instance_23.setTransform(851,251.5,1,1,0,0,0,38,-159.2);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(231).to({_off:false},0).wait(1).to({regX:56.9,x:869.9,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(398).to({_off:true},1).wait(1));

	// Case4Layer
	this.instance_24 = new lib.Case4Sym();
	this.instance_24.parent = this;
	this.instance_24.setTransform(801,326.9,1,1,0,0,0,-9.5,-7.4);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(205).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(422).to({_off:true},1).wait(1));

	// Linea8Layer
	this.instance_25 = new lib.flecha2Sym();
	this.instance_25.parent = this;
	this.instance_25.setTransform(856,112.8,1,1,0,0,0,55.3,-155.6);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(205).to({_off:false},0).wait(1).to({regX:0,regY:-1.9,x:800.7,y:266.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(97).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(313).to({_off:true},1).wait(1));

	// Linea7Layer
	this.instance_26 = new lib.flecha3Sym();
	this.instance_26.parent = this;
	this.instance_26.setTransform(735.3,251.5,1,1,0,0,0,56.8,-159.2);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(205).to({_off:false},0).wait(1).to({regX:54.9,x:733.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(422).to({_off:true},1).wait(1));

	// Case3Layer
	this.instance_27 = new lib.Case3Sym();
	this.instance_27.parent = this;
	this.instance_27.setTransform(656.5,326.9,1,1,0,0,0,-9.5,-7.4);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(182).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(446).to({_off:true},1).wait(1));

	// Linea6Layer
	this.instance_28 = new lib.flecha2Sym();
	this.instance_28.parent = this;
	this.instance_28.setTransform(712,113.3,1,1,0,0,0,55.3,-155.6);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(182).to({_off:false},0).wait(1).to({regX:0,regY:-1.9,x:656.7,y:267,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(109).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(326).to({_off:true},1).wait(1));

	// Case2Layer
	this.instance_29 = new lib.Case2Sym();
	this.instance_29.parent = this;
	this.instance_29.setTransform(510,327,1,1,0,0,0,-9.5,-7.4);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(157).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(470).to({_off:true},1).wait(1));

	// Linea5Layer
	this.instance_30 = new lib.flecha2Sym();
	this.instance_30.parent = this;
	this.instance_30.setTransform(565.4,113.1,1,1,0,0,0,55.3,-155.6);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(157).to({_off:false},0).wait(1).to({regX:0,regY:-1.9,x:510.1,y:266.8,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(121).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(338).to({_off:true},1).wait(1));

	// Case1Layer
	this.instance_31 = new lib.Case1Sym();
	this.instance_31.parent = this;
	this.instance_31.setTransform(355,327.5,1,1,0,0,0,-9.5,-7.4);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(135).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(494).to({_off:true},1).wait(1));

	// Linea4Layer
	this.instance_32 = new lib.flecha2Sym();
	this.instance_32.parent = this;
	this.instance_32.setTransform(354.8,266.5,1,1,0,0,0,0,-1.9);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(135).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(133).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(350).to({_off:true},1).wait(1));

	// Linea3Layer
	this.instance_33 = new lib.flecha1Sym();
	this.instance_33.parent = this;
	this.instance_33.setTransform(509.1,253.9,1,1,0,0,0,55.3,-156.5);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(135).to({_off:false},0).wait(1).to({regX:87.7,regY:-174.7,x:541.5,y:235.7,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(494).to({_off:true},1).wait(1));

	// Paso4Layer
	this.instance_34 = new lib.Txt4();
	this.instance_34.parent = this;
	this.instance_34.setTransform(200.9,312,1,1,0,0,0,17.5,-24.5);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(111).to({_off:false},0).wait(1).to({regX:16.1,regY:-23.2,x:199.5,y:313.3,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(518).to({_off:true},1).wait(1));

	// CaseLayer
	this.instance_35 = new lib.IfSym();
	this.instance_35.parent = this;
	this.instance_35.setTransform(727.9,186,1,1,0,0,0,-19.6,-17.4);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(97).to({_off:false},0).wait(1).to({regX:-19.5,x:728,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(528).to({_off:true},1).wait(1));

	// Linea2Layer
	this.instance_36 = new lib.flechaSym();
	this.instance_36.parent = this;
	this.instance_36.setTransform(728,143.3,1,0.103,0,0,0,-28.4,-53);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(97).to({_off:false},0).wait(1).to({regY:-58.7,y:142.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(528).to({_off:true},1).wait(1));

	// Paso3Layer
	this.instance_37 = new lib.Txt3();
	this.instance_37.parent = this;
	this.instance_37.setTransform(198.4,181.1,1,1,0,0,0,15,-24.5);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(73).to({_off:false},0).wait(1).to({regX:14.7,regY:-23.2,x:198.1,y:182.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(554).to({_off:true},1).wait(1));

	// textbox
	this.text = new cjs.Text("Ingrese un número", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(538.5,87.1);

	this.txtboxNumero = new lib.an_TextInput({'id': 'txtboxNumero', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero.setTransform(596.6,124.1,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero},{t:this.text}]},71).to({state:[]},2).wait(568));

	// EntradaLayer
	this.instance_38 = new lib.entradaSymb();
	this.instance_38.parent = this;
	this.instance_38.setTransform(724.4,115,1,1,0,0,0,-9,-6);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(59).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(568).to({_off:true},1).wait(1));

	// Linea1Layer
	this.instance_39 = new lib.flechaSym();
	this.instance_39.parent = this;
	this.instance_39.setTransform(728,87.1,1,0.103,0,0,0,-28.4,-55.9);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(59).to({_off:false},0).wait(1).to({regY:-58.7,y:86.8,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(568).to({_off:true},1).wait(1));

	// Paso2Layer
	this.instance_40 = new lib.Txt2();
	this.instance_40.parent = this;
	this.instance_40.setTransform(216.9,115.1,1,1,0,0,0,33.5,-24.5);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(36).to({_off:false},0).wait(1).to({regX:26.4,regY:-13.7,x:209.8,y:125.9,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(592).to({_off:true},1).wait(1));

	// InicioLayer
	this.instance_41 = new lib.inicioSym();
	this.instance_41.parent = this;
	this.instance_41.setTransform(722.4,49.1,1,1,0,0,0,-0.5,-4.7);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(23).to({_off:false},0).wait(1).to({regX:4.5,regY:0.3,x:727.4,y:54.1,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(603).to({_off:true},1).wait(1));

	// Paso1Layer
	this.instance_42 = new lib.Txt1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(157.3,58.7,1,1,0,0,0,-1.1,-24.5);
	this.instance_42.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({regX:-2.6,regY:-24.6,x:155.8,y:58.6,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(628).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(810.4,432.3,949.5,39.5);
// library properties:
lib.properties = {
	id: 'EEC39D20A3E02F4E9946918E70E7892E',
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
an.compositions['EEC39D20A3E02F4E9946918E70E7892E'] = {
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