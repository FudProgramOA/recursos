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


(lib.ProcesoSymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAlQgHgHgBgKIAKgCQACAJAFAEQAEAEAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAIgGACIABgJIABAAQAGAAAGgDQAFgEAAgHQAAgGgEgEQgEgDgFAAQgGAAgEAEQgEADgCAIIgKgCQACgKAHgGQAGgGALAAQAGAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIABAEAFQAEAGAAAIQAAALgIAIQgIAIgMAAQgLAAgIgHg");
	this.shape.setTransform(102.1,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAsIAYhYIAJAAIgYBYg");
	this.shape_1.setTransform(93.8,-5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA5QAQgdAAgcQAAgKgCgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAPgGAPQgGAPgIAMg");
	this.shape_2.setTransform(86.9,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAlQgHgHgBgKIAKgCQACAJAFAEQAEAEAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAIgGACIABgJIABAAQAGAAAGgDQAFgEAAgHQAAgGgEgEQgEgDgFAAQgGAAgEAEQgEADgCAIIgKgCQACgKAHgGQAGgGALAAQAGAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIABAEAFQAEAGAAAIQAAALgIAIQgIAIgMAAQgLAAgIgHg");
	this.shape_3.setTransform(81.4,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgKAAIgCgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgEAAgHIAAgDIgQAEg");
	this.shape_4.setTransform(74.8,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_5.setTransform(69.8,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_6.setTransform(64.8,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_7.setTransform(58.1,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAcIAAgXIgYAAIAAgJIAYAAIAAgXIAJAAIAAAXIAXAAIAAAJIgXAAIAAAXg");
	this.shape_8.setTransform(48,-5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbArQAAgEABgEQACgFAFgGQAEgFAJgIQAOgLAEgGQAGgGAAgHQgBgGgEgEQgFgFgHAAQgHAAgEAFQgEAFgBAHIgKgBQABgMAHgGQAIgGAKAAQANAAAHAGQAHAHABAKQgBAGgCAEQgCAFgFAFQgEAFgMAKIgLALIgFAGIAqAAIAAAKg");
	this.shape_9.setTransform(37.7,-5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgLAAIgBgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgEAAgHIAAgDIgQAEg");
	this.shape_10.setTransform(31.1,-4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_11.setTransform(26.2,-5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_12.setTransform(21.1,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_13.setTransform(14.5,-4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAcIAAgXIgYAAIAAgJIAYAAIAAgXIAJAAIAAAXIAXAAIAAAJIgXAAIAAAXg");
	this.shape_14.setTransform(4.3,-5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAFArIAAhCQgDADgGAEIgLAFIAAgJQAJgFAGgGQAGgGADgFIAHAAIAABVg");
	this.shape_15.setTransform(-6.3,-5.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgLAAIgBgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgEAAgHIAAgDIgQAEg");
	this.shape_16.setTransform(-12.5,-4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_17.setTransform(-17.5,-5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_18.setTransform(-22.5,-4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_19.setTransform(-29.2,-4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAHA5QgIgMgGgPQgGgPAAgPQAAgNAFgNQAEgPALgPIAHAAIgJASQgEAIgBAJQgDALAAAKQABAcAQAdg");
	this.shape_20.setTransform(-34.3,-4.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbASIAAgKIA3AAIAAAKgAgbgHIAAgKIA3AAIAAAKg");
	this.shape_21.setTransform(-43.3,-5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgBgKIgEgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_22.setTransform(-55.2,-4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_23.setTransform(-63.5,-4.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_24.setTransform(-68.4,-4.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgDgEIAAAfgAgLgcQgFAGgBAMQABALAFAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgFAHg");
	this.shape_25.setTransform(-74,-3.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0066FF").ss(1,1,1).p("AumjgIdNAAIAAHBI9NAAg");
	this.shape_26.setTransform(14,-3.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066FF").s().p("AumDhIAAnBIdNAAIAAHBg");
	this.shape_27.setTransform(14,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProcesoSymb, new cjs.Rectangle(-80.5,-26.9,189,47), null);


(lib.Txt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape.setTransform(11.6,-23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_1.setTransform(5.7,-24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjA2IAAhrIBHAAIAAANIg5AAIAAAhIAyAAIAAAMIgyAAIAAAxg");
	this.shape_2.setTransform(-0.2,-24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHAIIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(-11.3,-20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_4.setTransform(-18.1,-24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_5.setTransform(-25.4,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt11, new cjs.Rectangle(-31,-34.9,52,20.8), null);


(lib.Txt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJATIgFgTIAAgSIAQAAIAAASIgEATgAgPATIgDgTIAAgSIAOAAIAAASIgDATg");
	this.shape.setTransform(112.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_1.setTransform(105.9,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_2.setTransform(97.2,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_3.setTransform(89.1,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_4.setTransform(81,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_5.setTransform(72.5,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_6.setTransform(66.4,6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_7.setTransform(59.3,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_8.setTransform(50,5.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAIATIgDgTIAAgSIAPAAIAAASIgEATgAgPATIgEgTIAAgSIAPAAIAAASIgDATg");
	this.shape_9.setTransform(42.3,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAnIAAgPIAPAAIAAAPgAgHgXIAAgPIAPAAIAAAPg");
	this.shape_10.setTransform(33.5,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(29.4,6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_12.setTransform(24.7,5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_13.setTransform(16.8,6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_14.setTransform(8.8,5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_15.setTransform(5.2,6.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_16.setTransform(-1.8,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_17.setTransform(-12.4,6.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_18.setTransform(-20.4,5.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_19.setTransform(113.4,-12.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_20.setTransform(105.5,-12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_21.setTransform(97.8,-12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_22.setTransform(89.7,-12.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_23.setTransform(81.3,-12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_24.setTransform(75.2,-13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_25.setTransform(68.8,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_26.setTransform(60.4,-12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_27.setTransform(48.3,-12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_28.setTransform(40.4,-12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQAAgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_29.setTransform(28,-12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_30.setTransform(22.1,-13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGA2IAAhNIAMAAIAABNgAgGglIAAgQIAMAAIAAAQg");
	this.shape_31.setTransform(14.6,-13.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAzQgKgEgGgJQgFgIgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJABQAIAAAGgDQAGgCADgEQADgFAAgEQAAgGgDgDQgDgEgGgDIgSgFQgPgDgGgCQgIgFgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKABQALgBAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAFQgGAFAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJADAEAHQAFAHAAAIQAAAJgFAHQgFAIgJAEQgJAEgMAAQgNAAgKgEg");
	this.shape_32.setTransform(7.9,-13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_33.setTransform(-3.2,-9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXArQgLgNAAgeQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAHAEQAGADAEAHQAFAGACAKQACAJAAAPQAAATgEAMQgEALgHAHQgIAGgMAAQgPAAgIgMgAgOgjQgGAKAAAZQAAAbAGAIQAGAJAIAAQAJAAAHgJQAFgJAAgaQAAgZgFgJQgHgJgJAAQgIAAgGAIg");
	this.shape_34.setTransform(-9.6,-13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_35.setTransform(-18.4,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt10, new cjs.Rectangle(-24,-23.9,160.1,39.6), null);


(lib.Txt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJATIgFgTIAAgSIAPAAIAAASIgDATgAgPATIgDgTIAAgSIAOAAIAAASIgDATg");
	this.shape.setTransform(121.9,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_1.setTransform(115.1,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_2.setTransform(106.4,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_3.setTransform(98.3,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_4.setTransform(90.2,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_5.setTransform(81.7,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_6.setTransform(75.6,6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_7.setTransform(68.5,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_8.setTransform(59.9,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAdA2IgOgXIgKgOQgEgGgCgCIgHgCIgIgBIgQAAIAAAwIgOAAIAAhrIAuAAQAPAAAHADQAHADAFAHQAEAIAAAJQAAALgHAIQgHAHgQACIAJAFQAGAGAFAJIATAdgAgggFIAeAAQAJAAAGgCQAFgCADgFQADgEAAgFQAAgIgGgFQgFgFgMAAIghAAg");
	this.shape_9.setTransform(50.9,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIATIgDgTIAAgSIAPAAIAAASIgEATgAgPATIgEgTIAAgSIAPAAIAAASIgDATg");
	this.shape_10.setTransform(42.3,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAnIAAgPIAPAAIAAAPgAgHgXIAAgPIAPAAIAAAPg");
	this.shape_11.setTransform(33.5,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_12.setTransform(29.4,6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_13.setTransform(24.7,5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_14.setTransform(16.8,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_15.setTransform(8.8,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(5.2,6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_17.setTransform(-1.8,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_18.setTransform(-12.4,6.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_19.setTransform(-20.4,5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_20.setTransform(125.9,-12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_21.setTransform(118,-12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_22.setTransform(110.3,-12.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_23.setTransform(102.2,-12.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_24.setTransform(93.8,-12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_25.setTransform(87.7,-13.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_26.setTransform(81.3,-12.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_27.setTransform(72.9,-12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_28.setTransform(60.8,-12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_29.setTransform(52.9,-12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQALAKgBATQAAAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_30.setTransform(40.5,-12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_31.setTransform(34.6,-13.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_32.setTransform(24.6,-12.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_33.setTransform(16.3,-12.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_34.setTransform(6.3,-13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAzQgKgEgGgJQgFgIgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJABQAIAAAGgDQAGgCADgEQADgFAAgEQAAgGgDgDQgDgEgGgDIgSgFQgPgDgGgCQgIgFgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKABQALgBAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAFQgGAFAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJADAEAHQAFAHAAAIQAAAJgFAHQgFAIgJAEQgJAEgMAAQgNAAgKgEg");
	this.shape_35.setTransform(-0.5,-13.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_36.setTransform(-11.6,-9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAwQgIgHgBgNIAMgBQACAJAEAEQAFAEAHAAQAFAAAFgDQAEgDADgEQAEgFABgIQACgHAAgJIAAgCQgEAGgGAEQgIADgHAAQgNAAgJgJQgJgIAAgRQAAgQAKgKQAJgKAOAAQAKAAAJAGQAIAFAFALQAFAKAAAUQAAATgFANQgFAMgIAHQgJAGgLAAQgMAAgJgHgAgOgkQgGAIgBALQAAAKAHAGQAFAGAJAAQAJAAAGgGQAFgGABgLQAAgMgHgGQgFgHgJAAQgIAAgGAHg");
	this.shape_37.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt9, new cjs.Rectangle(-24,-23.9,159.1,39.6), null);


(lib.Txt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA3IAAgPIAOAAIAAAPgAgGAcIAAgEQAAgIACgFIAFgJIAJgIIAJgJQACgFAAgDQAAgIgGgGQgGgGgJAAQgHAAgGAFQgFAGgCALIgOgBQACgPAJgJQAJgHAOgBQAQAAAJAJQAKAJAAAMQAAAHgEAFQgDAHgKAHQgGAFgCAEIgDAFIgBAMg");
	this.shape.setTransform(38.8,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTA1QABgMAEgSQAFgSAJgQQAIgRAKgLIg0AAIAAgNIBFAAIAAAKQgKALgKATQgLAQgEAUQgEANgBAQg");
	this.shape_1.setTransform(30.5,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_2.setTransform(18,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_3.setTransform(8,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_4.setTransform(2.1,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAlQgFgCgEgFQgCgDgBgHIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGABQAFgBAFgCQAFgEADgFQABgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_5.setTransform(-6.2,25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_6.setTransform(-14.8,26.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_7.setTransform(-20.4,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_8.setTransform(97.1,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(86.9,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKABATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_10.setTransform(79.6,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbA1IgCgMIAHABQAFAAACgBQADgCABgDIAFgJIABgEIgdhNIANAAIARAuIAFARQACgJADgIIAQguIAOAAIgeBPQgEAMgCAFQgEAHgEADQgFADgGAAIgIgCg");
	this.shape_11.setTransform(71.8,8.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(63.7,6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_13.setTransform(53.4,6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_14.setTransform(36.7,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_15.setTransform(26.3,6.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(20.2,6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_17.setTransform(13.1,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_18.setTransform(0.8,6.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_19.setTransform(-7.7,5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAuQgKgIAAgNQAAgHAEgGQADgFAJgIIAJgIIADgHIABgLIAMAAIAAAEQAAAIgDAFQgBAFgDAEIgJAIQgHAGgCAEQgCADAAAEQAAAIAGAGQAGAGAIAAQAIAAAGgFQAFgGACgLIAOACQgCAPgJAIQgJAIgPAAQgPAAgJgJgAgHgnIAAgPIAOAAIAAAPg");
	this.shape_20.setTransform(-17.4,8.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAnIAAgPIAOAAIAAAPgAgGgXIAAgPIAOAAIAAAPg");
	this.shape_21.setTransform(100.1,-12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_22.setTransform(94.2,-12.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_23.setTransform(86.3,-12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_24.setTransform(78.6,-12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_25.setTransform(70.5,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_26.setTransform(62.1,-12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_27.setTransform(56,-13.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_28.setTransform(49.6,-12.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_29.setTransform(41.2,-12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAMQAEgBACgEQABgEAAgFIgGAAIAAgPIAOAAIAAAPQAAAHgDAGQgDAEgFADg");
	this.shape_30.setTransform(30.9,-8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_31.setTransform(24.6,-12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_32.setTransform(16.3,-12.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_33.setTransform(6.3,-13.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAzQgKgEgGgJQgFgIgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJABQAIAAAGgDQAGgCADgEQADgFAAgEQAAgGgDgDQgDgEgGgDIgSgFQgPgDgGgCQgIgFgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKABQALgBAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAFQgGAFAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJADAEAHQAFAHAAAIQAAAJgFAHQgFAIgJAEQgJAEgMAAQgNAAgKgEg");
	this.shape_34.setTransform(-0.5,-13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_35.setTransform(-11.6,-9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAtQgKgJAAgOQgBgKAGgHQAFgGAKgDQgIgDgEgGQgEgGAAgHQAAgMAIgIQAJgIANAAQAOAAAIAIQAJAJAAALQAAAHgEAHQgEAFgIADQAKADAFAGQAGAHAAALQAAANgLAJQgJAKgQAAQgPAAgJgKgAgOAGQgHAHAAAJQAAAGADAFQACAFAFADQAGADAFAAQAKAAAFgGQAHgGAAgJQAAgKgHgHQgGgFgJgBQgJABgFAFgAgMgmQgEAFAAAGQAAAIAEAFQAFAFAHgBQAIABAEgFQAFgFABgHQgBgHgFgFQgEgFgIAAQgGAAgGAFg");
	this.shape_36.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt8, new cjs.Rectangle(-24,-23.9,131.1,58.4), null);


(lib.Txt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIATIgDgTIAAgSIAOAAIAAASIgDATgAgPATIgDgTIAAgSIAPAAIAAASIgEATg");
	this.shape.setTransform(120.2,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_1.setTransform(113.4,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_2.setTransform(104.7,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_3.setTransform(96.6,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_4.setTransform(90.6,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_5.setTransform(83.3,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_6.setTransform(75,6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_7.setTransform(66.6,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUAnIgQgYIgEgGIgUAeIgPAAIAcgnIgagmIAQAAIAMATIAFAIIAFgIIAOgTIAQAAIgbAlIAdAog");
	this.shape_8.setTransform(58.7,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnA2IAAhrIBNAAIAAANIg/AAIAAAhIA6AAIAAAMIg6AAIAAAkIBBAAIAAANg");
	this.shape_9.setTransform(50.2,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIATIgDgTIAAgSIAPAAIAAASIgEATgAgPATIgEgTIAAgSIAPAAIAAASIgDATg");
	this.shape_10.setTransform(42.3,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAnIAAgPIAPAAIAAAPgAgHgXIAAgPIAPAAIAAAPg");
	this.shape_11.setTransform(33.5,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_12.setTransform(29.4,6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_13.setTransform(24.7,5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_14.setTransform(16.8,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_15.setTransform(8.8,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(5.2,6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_17.setTransform(-1.8,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_18.setTransform(-12.4,6.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_19.setTransform(-20.4,5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_20.setTransform(108.6,-12.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_21.setTransform(101.3,-12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_22.setTransform(93.4,-12.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_23.setTransform(81.3,-12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_24.setTransform(68.8,-12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_25.setTransform(62.8,-12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_26.setTransform(55.5,-12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAxQgIgGAAgNIANACQABAGAEADQAEAEAJAAQAIAAAFgEQAFgEACgHQABgDAAgNQgJAKgMAAQgQAAgJgMQgIgLAAgPQAAgLAEgKQAEgKAHgFQAIgEAKgBQANAAAJAMIAAgKIAMAAIAABCQAAASgEAIQgDAIgIAEQgIAEgLABQgOAAgJgHgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJAAQgIAAgGAGg");
	this.shape_27.setTransform(46.9,-10.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_28.setTransform(38.8,-12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_29.setTransform(32.9,-13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_30.setTransform(29.6,-13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_31.setTransform(19.6,-12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_32.setTransform(13.7,-13.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_33.setTransform(6.3,-13.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAzQgKgEgGgJQgFgIgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJABQAIAAAGgDQAGgCADgEQADgFAAgEQAAgGgDgDQgDgEgGgDIgSgFQgPgDgGgCQgIgFgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKABQALgBAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAFQgGAFAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJADAEAHQAFAHAAAIQAAAJgFAHQgFAIgJAEQgJAEgMAAQgNAAgKgEg");
	this.shape_34.setTransform(-0.5,-13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_35.setTransform(-11.6,-9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTA1QABgNAEgRQAFgSAJgQQAIgRAKgLIg0AAIAAgNIBFAAIAAALQgKAKgKATQgLARgEASQgEAOgBAQg");
	this.shape_36.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt7, new cjs.Rectangle(-24,-23.9,151.1,39.6), null);


(lib.Txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA3IAAgPIAOAAIAAAPgAgGAcIAAgEQAAgIACgFIAFgJIAJgIIAJgJQACgFAAgDQAAgIgGgGQgGgGgJAAQgHAAgGAFQgFAGgCALIgOgBQACgPAJgJQAJgHAOgBQAQAAAJAJQAKAJAAAMQAAAHgEAFQgDAHgKAHQgGAFgCAEIgDAFIgBAMg");
	this.shape.setTransform(97,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAwQgIgHgCgNIAOgBQABAJAEAEQAFAEAHAAQAGAAAEgDQAFgCADgFQADgFABgIQACgIAAgIIAAgDQgEAHgHAEQgHADgGAAQgOAAgJgJQgKgIAAgRQAAgQAKgKQAKgKAPAAQAJAAAIAGQAKAGAEAKQAEALAAATQAAAUgEAMQgEAMgKAHQgJAGgKAAQgNAAgIgHgAgOgkQgHAIABALQAAAKAFAGQAGAGAJAAQAJAAAGgGQAGgGgBgLQAAgMgFgGQgHgHgIAAQgIAAgGAHg");
	this.shape_1.setTransform(88.7,-24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_2.setTransform(76.2,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_3.setTransform(66.2,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_4.setTransform(60.3,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgDgDgCgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_5.setTransform(52,-23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_6.setTransform(43.4,-21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_7.setTransform(37.8,-24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_8.setTransform(27.8,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(17.6,-23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQALAKgBATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_10.setTransform(10.3,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbA1IgCgMIAHABQAFAAACgBQADgCABgDIAFgJIABgEIgdhNIANAAIARAuIAFARQACgJADgIIAQguIAOAAIgeBPQgEAMgCAFQgEAHgEADQgFADgGAAIgIgCg");
	this.shape_11.setTransform(2.5,-21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(-5.6,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_13.setTransform(-15.9,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_14.setTransform(-32.6,-23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_15.setTransform(-43,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_16.setTransform(-49.1,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_17.setTransform(-56.2,-21.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_18.setTransform(-68.5,-23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_19.setTransform(-77,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAuQgKgIAAgNQAAgHAEgGQADgFAJgIIAJgIIADgHIABgLIAMAAIAAAEQAAAIgDAFQgBAFgDAEIgJAIQgHAGgCAEQgCADAAAEQAAAIAGAGQAGAGAIAAQAIAAAGgFQAFgGACgLIAOACQgCAPgJAIQgJAIgPAAQgPAAgJgJgAgHgnIAAgPIAOAAIAAAPg");
	this.shape_20.setTransform(-86.7,-21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_21.setTransform(-97.5,-20);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYArQgLgNAAgbQAAgfAMgOQAKgMAQAAQANAAAIAIQAIAGACANIgOABQgBgIgDgDQgGgGgIAAQgFAAgFAEQgGAEgEAJQgDAIAAARQAEgIAIgDQAGgEAHAAQANAAAJAKQAKAJgBAPQAAAKgEAJQgEAIgIAFQgIAFgJAAQgPAAgLgMgAgNABQgGAHAAAKQAAAHACAGQADAHAGADQAFADAEAAQAJAAAGgHQAGgGAAgMQAAgLgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_22.setTransform(-103.9,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt6, new cjs.Rectangle(-110,-34.9,215,20.8), null);


(lib.Txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape.setTransform(-7.4,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_1.setTransform(-17.9,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_2.setTransform(-24,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_3.setTransform(-31,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_4.setTransform(-43.8,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_5.setTransform(-49.6,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_6.setTransform(-55.2,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_7.setTransform(-63.8,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_8.setTransform(-69.6,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(-73.2,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_10.setTransform(-80.5,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgPIARguIANAAIgdBNg");
	this.shape_11.setTransform(-88.4,14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(-100.5,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_13.setTransform(-106.4,12.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_14.setTransform(66.2,-4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_15.setTransform(53.8,-4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_16.setTransform(47.9,-5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_17.setTransform(44.3,-4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_18.setTransform(37,-4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_19.setTransform(28.7,-4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANACQABAFAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgMAEgJQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLgBQgOAAgJgFgAgOglQgGAIAAANQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_20.setTransform(20.1,-2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_21.setTransform(14.5,-5.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_22.setTransform(9,-4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_23.setTransform(1.1,-4.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbA1IgCgMIAHABQAFAAACgBQADgCACgDIAEgJIABgEIgehNIAPAAIAQAuIAEARQADgJADgIIAQguIAOAAIgeBPQgEAMgCAFQgEAHgEADQgFADgGAAIgIgCg");
	this.shape_24.setTransform(-10.8,-2.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_25.setTransform(-22.6,-4.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_26.setTransform(-30.5,-4.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_27.setTransform(-36.6,-5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_28.setTransform(-43,-4.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_29.setTransform(-51.3,-4.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_30.setTransform(-63.5,-4.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_31.setTransform(-71.4,-4.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_32.setTransform(-77.4,-4.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_33.setTransform(-82.5,-5.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_34.setTransform(-92.6,-4.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_35.setTransform(-100.5,-4.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_36.setTransform(-106.4,-5.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_37.setTransform(63,-23.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_38.setTransform(54.4,-24.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_39.setTransform(42.2,-23.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_40.setTransform(36.3,-24.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_41.setTransform(30.2,-24.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_42.setTransform(22.1,-23.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_43.setTransform(11.7,-23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_44.setTransform(1.3,-23.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_45.setTransform(-4.8,-23.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_46.setTransform(-11.9,-21.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_47.setTransform(-22.1,-24.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_48.setTransform(-28,-23.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_49.setTransform(-38.2,-23.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_50.setTransform(-45.5,-23.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_51.setTransform(-51.3,-24.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRAlQgFgCgEgFQgCgDgBgHIgCgLIAAgwIAOAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQABgFAAgKIAAgpIANAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgGgDg");
	this.shape_52.setTransform(-57.2,-23.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_53.setTransform(-64.8,-23.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_54.setTransform(-70.5,-24.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_55.setTransform(-76.4,-23.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAwQgLgHgGgNQgGgOAAgOQAAgRAHgMQAGgNAMgGQAMgHANAAQARABAKAHQALAJAFAPIgPADQgDgMgHgFQgIgGgKABQgLAAgJAFQgIAGgEAKQgDAKAAALQAAAMAEALQAEAKAJAFQAIAFAJAAQALAAAJgGQAIgIADgNIAPAEQgFARgMAJQgLAKgRAAQgQAAgLgIg");
	this.shape_56.setTransform(-85.8,-24.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_57.setTransform(-97.5,-20);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgHAAgMQAAgMgHgFQgGgHgJAAQgHABgFADQgFACgDAEIgMgCIAKg2IA1AAIAAANIgqAAIgGAdQAKgHAJAAQAOAAAKAJQAKAKAAAOQAAAPgJALQgKANgRAAQgPAAgJgJg");
	this.shape_58.setTransform(-103.8,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt5, new cjs.Rectangle(-110,-34.9,192,58.4), null);


(lib.Txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape.setTransform(97.7,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_1.setTransform(91.6,-24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_2.setTransform(85.2,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_3.setTransform(76.9,-23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_4.setTransform(64.3,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_5.setTransform(58.3,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_6.setTransform(51,-23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_7.setTransform(43.3,-23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_8.setTransform(37.4,-23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_9.setTransform(30.1,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_10.setTransform(24,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(15.8,-23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(8.5,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_13.setTransform(0.5,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_14.setTransform(-7.4,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_15.setTransform(-13.4,-23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_16.setTransform(-20.9,-21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_17.setTransform(-29,-23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_18.setTransform(-35.2,-24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_19.setTransform(-43.5,-20);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAKA2IAAgaIguAAIAAgMIAwhFIAKAAIAABFIAPAAIAAAMIgPAAIAAAagAgXAQIAhAAIAAgvg");
	this.shape_20.setTransform(-50.1,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt4, new cjs.Rectangle(-56,-34.9,176,20.8), null);


(lib.Txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape.setTransform(108.6,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_1.setTransform(102.5,-24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_2.setTransform(96.1,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_3.setTransform(87.8,-23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_4.setTransform(75.2,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_5.setTransform(66.6,-24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgNAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_6.setTransform(58.6,-23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgDgDgCgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_7.setTransform(50.2,-23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_8.setTransform(41.6,-21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_9.setTransform(33.5,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_10.setTransform(25.5,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(15.8,-23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(8.5,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_13.setTransform(0.5,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_14.setTransform(-7.4,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_15.setTransform(-13.4,-23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_16.setTransform(-20.9,-21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_17.setTransform(-29,-23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_18.setTransform(-35.2,-24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_19.setTransform(-43.5,-20);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAuQgKgIgBgNIANgCQADALAEAFQAGAFAIAAQAIAAAHgHQAGgGAAgJQAAgKgGgFQgGgHgJAAIgIACIACgLIABAAQAIAAAHgDQAGgFAAgJQAAgHgEgFQgFgFgIAAQgHAAgFAFQgFAFgCAJIgNgCQADgNAIgHQAIgIANAAQAIAAAHAEQAIADAEAIQAEAGAAAHQAAAHgEAGQgEAGgHADQAJACAGAGQAFAHAAALQAAAOgKAJQgLAKgOAAQgOAAgJgJg");
	this.shape_20.setTransform(-49.8,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt3, new cjs.Rectangle(-56,-34.9,176,20.8), null);


(lib.Txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape.setTransform(101.9,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_1.setTransform(95.8,-24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_2.setTransform(89.4,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_3.setTransform(81.1,-23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_4.setTransform(68.5,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_5.setTransform(62.5,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_6.setTransform(55.2,-23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_7.setTransform(44.8,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_8.setTransform(36.9,-24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(33.3,-23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_10.setTransform(26.2,-21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(15.8,-23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(8.5,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_13.setTransform(0.5,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_14.setTransform(-7.4,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_15.setTransform(-13.4,-23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_16.setTransform(-20.9,-21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_17.setTransform(-29,-23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_18.setTransform(-35.2,-24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_19.setTransform(-43.5,-20);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgHAMgIQAQgPAHgIQAGgIAAgIQAAgHgFgFQgHgGgJAAQgIAAgGAGQgFAGAAAKIgOgCQACgPAIgIQAKgIAOAAQAPAAAKAJQAJAIAAANQAAAGgDAHQgDAGgGAGQgGAGgPAMIgNAOQgEAEgCAEIA0AAIAAAMg");
	this.shape_20.setTransform(-50,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt2, new cjs.Rectangle(-56,-34.9,166,20.8), null);


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
	this.shape.setTransform(42.8,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(37.4,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_2.setTransform(30.5,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAbQgGgFABgHQAAgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgDgDQgEgEgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGADQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgCABgCACQgCADABADQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_3.setTransform(24.1,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAFACQAGACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALADAFQAGAIAIAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgHAAgEAGg");
	this.shape_4.setTransform(17.6,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_5.setTransform(10.8,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_6.setTransform(5.9,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAFgDAFAAQAHAAAGAEQAHAEADAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgEgCQgFgCgDgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgFgGgGAAQgGAAgGAHg");
	this.shape_7.setTransform(0.3,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcArIgLgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgJAYIAbAAIgIgXIgGgSQgBAIgDAJg");
	this.shape_8.setTransform(-7.2,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape_9.setTransform(-13.3,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkSIQcAAQAhAAAAAmIAAEeQlxAuhdA5Qj9CalygoQgiAAAAgmIAAnRQAAgmAiAAg");
	this.shape_10.setTransform(21.1,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AoNELQgiAAAAgmIAAnRQAAgmAiAAIQcAAQAhAAAAAmIAAEeQlxAuheA5QjIB6kSAAQhHAAhNgIg");
	this.shape_11.setTransform(21.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr3Sym, new cjs.Rectangle(-35.9,-16.9,114,57), null);


(lib.impr2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape.setTransform(48.8,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(43.4,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_2.setTransform(36.5,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAbQgFgFgBgHQAAgFACgDQADgEADgDIAIgCIAJgCQAMgCAGgCIAAgCQAAgGgDgDQgFgEgHAAQgHAAgEADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQAAAEADADIgMAAIgCgHQgFAEgFADQgFACgGAAQgKAAgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAADQAAADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEABgGIAAgEIgRAEg");
	this.shape_3.setTransform(30.1,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAiIAAAIIgKAAIAAhVIALAAIAAAfQAGgIAKAAQAFAAAFACQAFACAEAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgGgKgAgMgGQgEAGAAALQAAALACAFQAFAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgGAAgGAGg");
	this.shape_4.setTransform(23.6,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_5.setTransform(16.8,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_6.setTransform(11.9,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAIAAAFAEQAGAEAEAIQADAHAAAJQAAAKgEAGQgDAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_7.setTransform(6.3,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_8.setTransform(-0.5,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGACADAGQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_9.setTransform(-7.8,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape_10.setTransform(-14.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkXIQcAAQAhAAAAAnIAAEjQlxAvheA6Qj8CclygpQgiAAAAgmIAAnZQAAgnAiAAg");
	this.shape_11.setTransform(21.1,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AoNEPQgiAAAAgmIAAnZQAAgnAiAAIQcAAQAhAAAAAnIAAEjQlxAvheA6QjIB8kSAAQhHAAhNgJg");
	this.shape_12.setTransform(21.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr2Sym, new cjs.Rectangle(-35.9,-16.9,114,58), null);


(lib.impr1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGANIgDgNIAAgMIALAAIAAAMIgDANgAgKANIgDgNIAAgMIALAAIAAAMIgDANg");
	this.shape.setTransform(34.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAVQgGgHAAgOQgBgOAJgHQAHgGAJAAQALAAAIAHQAGAHAAANQAAAKgCAGQgEAGgGADQgGADgHAAQgKAAgIgHgAgLgPQgEAGAAAJQAAAKAEAGQAFAFAGAAQAHAAAFgFQAEgGAAgKQAAgJgEgGQgFgFgHAAQgGAAgFAFg");
	this.shape_1.setTransform(29.3,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAjQgGgEgDgGQgDgHAAgIQAAgJADgFQADgGAFgEQAGgDAGgBQAEAAAEACQAEACACAEIAAgbIAKAAIAABKIgJAAIAAgHQgFAIgKAAQgGAAgFgDgAgJgFQgEAFAAAKQAAAKAEAGQAFAEAFAAQAGAAAEgEQAEgFAAgLQAAgKgEgFQgEgFgHAAQgFAAgEAFg");
	this.shape_2.setTransform(23.2,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgEgEAAgHQAAgEACgDQABgEADgCIAHgCIAIgBQAKgBAGgCIAAgDQgBgFgCgDQgDgDgHAAQgGAAgDADQgDACgBAGIgJgCQAAgFADgEQAEgEAEgBQAGgCAGAAQAHAAAFABQADACADACQACADABAEIAAAIIAAALIAAARQABADACADIgKAAIgCgGQgEAEgFACQgEABgFAAQgJAAgGgEgAgCADIgIACQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAADACADQADACAGAAQAEAAAEgCQAEgCACgEQABgEABgGIAAgDQgFACgKABg");
	this.shape_3.setTransform(17.6,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAcIAAg2IAIAAIAAAJQAEgGACgCQACgCADAAQAFAAAFADIgEAJQgDgCgDAAQgDAAgCABQgCACgBADQgCAFAAAGIAAAcg");
	this.shape_4.setTransform(13.3,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAVQgHgHAAgOQAAgMAHgIQAHgHALAAQAKAAAHAHQAHAHAAANIAAACIgnAAQAAAJAEAFQAFAFAGAAQAFAAAEgDQADgCACgGIAJABQgBAIgHAFQgFAEgKAAQgLAAgHgHgAgKgQQgEAFAAAHIAdAAQAAgHgDgEQgFgFgGAAQgGAAgFAEg");
	this.shape_5.setTransform(8.2,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAcIAAggIgBgJQgBgDgDgBQgCgCgEAAQgGAAgDAEQgFAEAAAKIAAAdIgJAAIAAg2IAIAAIAAAIQAGgJALAAQAEAAAEACIAHAEQACADABAEIAAAJIAAAhg");
	this.shape_6.setTransform(2.4,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAVQgIgHABgOQAAgOAIgHQAHgGAJAAQALAAAIAHQAGAHAAANQAAAKgDAGQgDAGgGADQgGADgHAAQgLAAgGgHgAgLgPQgEAGAAAJQAAAKAEAGQAFAFAGAAQAHAAAFgFQAEgGAAgKQAAgJgEgGQgFgFgHAAQgGAAgFAFg");
	this.shape_7.setTransform(-3.5,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAbIgLgRIgDgEIgNAVIgLAAIATgbIgSgaIAMAAIAIANIADAGIAEgGIAJgNIALAAIgTAZIAUAcg");
	this.shape_8.setTransform(-8.9,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAmIAAhLIA1AAIAAAJIgrAAIAAAXIAoAAIAAAIIgoAAIAAAaIAtAAIAAAJg");
	this.shape_9.setTransform(-14.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAGANIgDgNIAAgMIALAAIAAAMIgDANgAgKANIgDgNIAAgMIALAAIAAAMIgDANg");
	this.shape_10.setTransform(-20.4,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0066FF").ss(1,1,1).p("AmmjgINNAAQAbAAAAAfIAADqQkpAmhLAuQjLB+kpghQgbAAAAgfIAAl8QAAgfAbAAg");
	this.shape_11.setTransform(10.1,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AmmDaQgbAAAAgfIAAl8QAAgfAbAAINNAAQAbAAAAAfIAADqQkpAmhLAuQihBkjcAAQg6AAg9gHg");
	this.shape_12.setTransform(10.1,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr1Sym, new cjs.Rectangle(-35.9,-16.9,93,47), null);


(lib.IfSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAmQgGgFgCgLIAKgBQACAIADADQAEADAGAAQAEAAADgCQAEgCACgEQADgEABgGIACgNIAAgCQgDAFgGADQgFADgGAAQgLAAgHgIQgHgGAAgNQAAgNAHgIQAIgIAMAAQAHAAAHAFQAHAEAEAIQADAJAAAQQAAAPgDAKQgEAKgHAFQgHAFgJAAQgKAAgGgGgAgLgdQgFAGAAAJQAAAJAFAFQAEAEAHAAQAHAAAFgEQAEgFAAgKQAAgJgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape.setTransform(5.3,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA5AAIAAAKgAgcgHIAAgKIA5AAIAAAKg");
	this.shape_1.setTransform(-4.8,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbATIAsgTIgsgSIAAgKIA3AYIAAAJIg3AYg");
	this.shape_2.setTransform(-11.8,-19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgBgKIgEgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_3.setTransform(-23.7,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_4.setTransform(-32,-17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_5.setTransform(-36.9,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgDgEIAAAfgAgLgcQgFAGgBAMQABALAFAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgFAHg");
	this.shape_6.setTransform(-42.5,-16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0066FF").ss(1,1,1).p("AFeAAIleFeIldldIFdleg");
	this.shape_7.setTransform(-19.5,-17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AldABIFdleIFeFdIleFeg");
	this.shape_8.setTransform(-19.5,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IfSym, new cjs.Rectangle(-55.5,-53.3,72,72), null);


(lib.If2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAqQABgKADgOQAEgPAHgMQAGgNAJgJIgqAAIAAgKIA3AAIAAAIQgIAJgJAOQgHAOgEAPQgDALgBAMg");
	this.shape.setTransform(5.4,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcASIAAgKIA5AAIAAAKgAgcgHIAAgKIA5AAIAAAKg");
	this.shape_1.setTransform(-4.8,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbATIAsgTIgsgSIAAgKIA3AYIAAAJIg3AYg");
	this.shape_2.setTransform(-11.8,-19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgBgKIgEgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_3.setTransform(-23.7,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_4.setTransform(-32,-17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_5.setTransform(-36.9,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgDgEIAAAfgAgLgcQgFAGgBAMQABALAFAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgFAHg");
	this.shape_6.setTransform(-42.5,-16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0066FF").ss(1,1,1).p("AFeAAIleFeIldldIFdleg");
	this.shape_7.setTransform(-19.5,-17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AldABIFdleIFeFdIleFeg");
	this.shape_8.setTransform(-19.5,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.If2Sym, new cjs.Rectangle(-55.5,-53.3,72,72), null);


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
	this.shape.setTransform(146,-124.2,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("ANMDdIAAHcEAmmgOhIAAdDMgyYAAAAsHOiIAJAAIAAjdEgmlAEFIAAG0EgmlALAMAzxAAA");
	this.shape_1.setTransform(49,-232.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaFinalSym, new cjs.Rectangle(-199,-326.4,496,217.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAFArIAAhCQgDAEgGADIgLAFIAAgKQAJgEAGgGQAGgFADgGIAHAAIAABVg");
	this.shape.setTransform(3.7,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAcQgFgFgBgJQAAgEACgDQACgEAEgDIAIgDIAJgBQALgBAHgCIAAgDQAAgGgEgDQgDgEgIAAQgGAAgEACQgEAEgCAGIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIABAKIAAANIAAASQABAFABADIgLAAIgBgIQgHAGgEABQgFACgHAAQgJAAgGgEgAgBAEQgHABgDABQgDABgBADQgBABgBADQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgQAEg");
	this.shape_1.setTransform(-2.5,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_2.setTransform(-7.5,-7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-12.5,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-19.2,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0066FF").ss(1,1,1).p("AkhjHIMVAAIjNGPIsaAAg");
	this.shape_5.setTransform(-9,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AnzDIIDSmPIMVAAIjNGPg");
	this.shape_6.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entradaSymb, new cjs.Rectangle(-60,-27,102,42), null);


(lib.entrada3Symb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAlQgHgHgBgKIAKgCQACAJAFAEQAEAEAGAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAIgGACIABgJIABAAQAGAAAGgDQAFgEAAgHQAAgGgEgEQgEgDgFAAQgGAAgEAEQgEADgCAIIgKgCQACgKAHgGQAGgGALAAQAGAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIABAEAFQAEAGAAAIQAAALgIAIQgIAIgMAAQgLAAgIgHg");
	this.shape.setTransform(2.1,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAcQgGgFABgJQAAgEABgDQADgEADgDIAHgDIAKgBQALgBAHgCIAAgDQgBgGgDgDQgEgEgHAAQgHAAgDACQgEAEgCAGIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgKAAIgCgIQgHAGgFABQgEACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBABgBADQABAFADACQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg");
	this.shape_1.setTransform(-4.5,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_2.setTransform(-9.5,-7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-14.5,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-21.2,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0066FF").ss(1,1,1).p("AkhjHIMVAAIjNGPIsaAAg");
	this.shape_5.setTransform(-9,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AnzDIIDSmPIMVAAIjNGPg");
	this.shape_6.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entrada3Symb, new cjs.Rectangle(-60,-27,102,42), null);


(lib.entrada2Symb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbArQAAgEABgEQACgFAFgGQAEgFAJgIQAOgLAEgGQAGgGAAgHQgBgGgEgEQgFgFgHABQgHgBgEAFQgEAEgBAJIgKgCQABgLAHgHQAIgGAKAAQANAAAHAGQAHAIAAAJQAAAGgCAEQgCAGgFAEQgEAGgMAJIgLALIgFAGIApAAIAAAKg");
	this.shape.setTransform(3,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAcQgFgFAAgJQAAgEABgDQACgEAEgDIAIgDIAJgBQALgBAHgCIAAgDQAAgGgEgDQgDgEgIAAQgHAAgDACQgEAEgCAGIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgLAAIgBgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBABgBADQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgDAAgIIAAgDIgQAEg");
	this.shape_1.setTransform(-3.5,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_2.setTransform(-8.5,-7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_3.setTransform(-13.5,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_4.setTransform(-20.2,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0066FF").ss(1,1,1).p("AkhjHIMVAAIjNGPIsaAAg");
	this.shape_5.setTransform(-9,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AnzDIIDSmPIMVAAIjNGPg");
	this.shape_6.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.entrada2Symb, new cjs.Rectangle(-60,-27,102,42), null);


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
(lib.If_Anidado = function(mode,startPosition,loop) {
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
				num1 = box.value;
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
	this.frame_112 = function() {
		this.stop();
		var root = this;
		txtboxNumero2.focus();
		var box = document.getElementById("txtboxNumero2");
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
				num2 = box.value;
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
	this.frame_148 = function() {
		this.stop();
		var root = this;
		txtboxNumero3.focus();
		var box = document.getElementById("txtboxNumero3");
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
				num3 = box.value;
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
	this.frame_235 = function() {
		var root = this;
		prom = (Number(num1) + Number(num2) + Number(num3)) / 3;
		//alert(prom);
		this.botonSi.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_277.bind(this));
		this.botonNo.addEventListener("click", incorrecto);
		
		function fl_ClickToGoToAndPlayFromFrame_277()
		{
			if(prom >= 9){
				this.gotoAndPlay(487);//saltar hasta el keyframe de exonerado		
			}else{
				this.gotoAndPlay(259);//saltar al keyframe de incorrecto		
			}
			
		}
		
		
		function incorrecto()
		{
			if(prom >= 9){
				root.gotoAndPlay(259);// saltar al keyframe del segundo IF		
			}else{
				root.gotoAndPlay(283);// saltar al keyframe de incorrecto		
			}
			
		}
	}
	this.frame_256 = function() {
		this.gotoAndPlay(236);
	}
	this.frame_279 = function() {
		this.gotoAndPlay(236);
	}
	this.frame_366 = function() {
		var root = this;
		//alert(prom);
		this.botonSi2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_410.bind(this));
		this.botonNo2.addEventListener("click", incorrecto);
		
		function fl_ClickToGoToAndPlayFromFrame_410()
		{
			if(prom >= 7){
				this.gotoAndPlay(416);// saltar al keyframe de continuar
			}else{
				this.gotoAndPlay(392); //saltar al keyframe de incorrecto		
			}
			
		}
		
		
		function incorrecto()
		{
			if(prom >= 7){
				root.gotoAndPlay(392); //saltar al keyframe de incorrecto
			}else{
				root.gotoAndPlay(416); //saltar al keyframe de continuar		
			}
			
		}
	}
	this.frame_389 = function() {
		this.gotoAndPlay(367);
	}
	this.frame_413 = function() {
		this.gotoAndPlay(367);
	}
	this.frame_605 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(40).call(this.frame_112).wait(36).call(this.frame_148).wait(87).call(this.frame_235).wait(21).call(this.frame_256).wait(23).call(this.frame_279).wait(87).call(this.frame_366).wait(23).call(this.frame_389).wait(24).call(this.frame_413).wait(192).call(this.frame_605).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},605).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio}]}).to({state:[]},605).wait(2));

	// FinLayer
	this.instance = new lib.finSym();
	this.instance.parent = this;
	this.instance.setTransform(787.9,692.2,1,1,0,0,0,4.5,4.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(522).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(71).to({_off:true},1).wait(1));

	// Paso11Layer
	this.instance_1 = new lib.Txt11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(276,685,1,1,0,0,0,-5,-24.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(500).to({_off:false},0).wait(1).to({regX:-6.3,regY:-24.7,x:274.7,y:684.8,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(95).to({_off:true},1).wait(1));

	// Linea10Layer
	this.instance_2 = new lib.flechaFinalSym();
	this.instance_2.parent = this;
	this.instance_2.setTransform(602.4,549.4,1,1,0,0,0,-39.3,-226.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(486).to({_off:false},0).wait(1).to({regX:49,regY:-217.4,x:690.7,y:558.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(105).to({_off:true},1).wait(1));

	// Impr3Layer
	this.instance_3 = new lib.impr3Sym();
	this.instance_3.parent = this;
	this.instance_3.setTransform(778,543.5,1,1,0,0,0,21.1,11.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(474).to({_off:false},0).wait(1).to({regX:21,x:777.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(119).to({_off:true},1).wait(1));

	// Paso10Layer
	this.instance_4 = new lib.Txt10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(330,613,1,1,0,0,0,56,-4.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(451).to({_off:false},0).wait(1).to({regX:47.8,regY:-2.8,x:321.8,y:614.3,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(143).to({_off:true},1).wait(1));

	// Impr2Layer
	this.instance_5 = new lib.impr2Sym();
	this.instance_5.parent = this;
	this.instance_5.setTransform(462,544,1,1,0,0,0,21.1,12.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(438).to({_off:false},0).wait(1).to({regX:21,x:461.9,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(154).to({_off:true},1).wait(1));

	// Paso9Layer
	this.instance_6 = new lib.Txt9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(330,514,1,1,0,0,0,56,-4.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(415).to({_off:false},0).wait(1).to({regX:53.8,regY:-2.8,x:327.8,y:515.3,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(177).to({_off:true},1).wait(1));

	// Incorrecto2
	this.instance_7 = new lib.Error();
	this.instance_7.parent = this;
	this.instance_7.setTransform(370,426.2,1,1,0,0,0,-8,-18.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(391).to({_off:false},0).wait(1).to({regY:-18.6,y:426,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(192));

	// ActionIf2
	this.botonNo2 = new lib.BotonNo();
	this.botonNo2.name = "botonNo2";
	this.botonNo2.parent = this;
	this.botonNo2.setTransform(467,419.3,0.725,0.691);
	new cjs.ButtonHelper(this.botonNo2, 0, 1, 1);

	this.botonSi2 = new lib.BotonSi();
	this.botonSi2.name = "botonSi2";
	this.botonSi2.parent = this;
	this.botonSi2.setTransform(748.6,419.3,0.725,0.691);
	new cjs.ButtonHelper(this.botonSi2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonSi2},{t:this.botonNo2}]},366).to({state:[]},24).to({state:[]},216).wait(1));

	// Si2Layer
	this.instance_8 = new lib.TxtSi();
	this.instance_8.parent = this;
	this.instance_8.setTransform(701.5,433.5,1,1,0,0,0,1,-24.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(366).to({_off:false},0).wait(1).to({regX:-0.3,regY:-24.6,x:700.2,y:433.4,alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(215).to({_off:true},1).wait(1));

	// Linea9Layer
	this.instance_9 = new lib.flechaDerSym();
	this.instance_9.parent = this;
	this.instance_9.setTransform(709.8,481.5,1,1,0,0,0,-37.8,-122.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(366).to({_off:false},0).wait(1).to({regY:-124.7,y:479.7,alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(215).to({_off:true},1).wait(1));

	// No2Layer
	this.instance_10 = new lib.TxtNo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(510,433.5,1,1,0,0,0,5.5,-24.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(366).to({_off:false},0).wait(1).to({regX:4.5,regY:-24.7,x:509,y:433.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(214).to({_off:true},1).wait(1));

	// Linea8Layer
	this.instance_11 = new lib.flechaIzqSym();
	this.instance_11.parent = this;
	this.instance_11.setTransform(507,481.5,1,1,0,0,0,-40.9,-122.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(366).to({_off:false},0).wait(1).to({regY:-124.7,y:479.7,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(214).to({_off:true},1).wait(1));

	// If2Layer
	this.instance_12 = new lib.If2Sym();
	this.instance_12.parent = this;
	this.instance_12.setTransform(608.4,443.9,1,1,0,0,0,-19.6,-17.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(342).to({_off:false},0).wait(1).to({regX:-19.5,x:608.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(251).to({_off:true},1).wait(1));

	// Paso8Layer
	this.instance_13 = new lib.Txt8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(315.5,437.7,1,1,0,0,0,41.5,5.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(318).to({_off:false},0).wait(1).to({regX:39.7,regY:6.6,x:313.7,y:439,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(25).to({x:307.8},0).wait(1).to({x:301.9},0).wait(1).to({x:295.9},0).wait(1).to({x:290},0).wait(1).to({x:284.1},0).wait(1).to({x:278.2},0).wait(1).to({x:272.2},0).wait(1).to({x:266.3},0).wait(1).to({x:260.4},0).wait(1).to({x:254.5},0).wait(1).to({x:248.5},0).wait(1).to({x:242.6},0).wait(50).to({x:249.1},0).wait(1).to({x:255.5},0).wait(1).to({x:262},0).wait(1).to({x:268.5},0).wait(1).to({x:274.9},0).wait(1).to({x:281.4},0).wait(1).to({x:287.8},0).wait(1).to({x:294.3},0).wait(1).to({x:300.8},0).wait(1).to({x:307.2},0).wait(1).to({x:313.7},0).wait(179).to({_off:true},1).wait(1));

	// Impr1Layer
	this.instance_14 = new lib.impr1Sym();
	this.instance_14.parent = this;
	this.instance_14.setTransform(940.7,431.9,1,1,0,0,0,10.8,6.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(306).to({_off:false},0).wait(1).to({regX:10,regY:6.6,x:939.9,y:432,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(287).to({_off:true},1).wait(1));

	// Paso7Layer
	this.instance_15 = new lib.Txt7();
	this.instance_15.parent = this;
	this.instance_15.setTransform(435,374.5,1,1,0,0,0,51.5,-4.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(282).to({_off:false},0).wait(1).to({regX:50.4,regY:-2.8,x:433.9,y:375.8,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(312).to({_off:true},1).wait(1));

	// Incorrecto
	this.instance_16 = new lib.Error();
	this.instance_16.parent = this;
	this.instance_16.setTransform(542.6,327.2,1,1,0,0,0,-8,-18.4);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(258).to({_off:false},0).wait(1).to({regY:-18.6,y:327,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(325));

	// ActionIf
	this.botonNo = new lib.BotonNo();
	this.botonNo.name = "botonNo";
	this.botonNo.parent = this;
	this.botonNo.setTransform(633.7,313.5,0.725,0.691);
	new cjs.ButtonHelper(this.botonNo, 0, 1, 1);

	this.botonSi = new lib.BotonSi();
	this.botonSi.name = "botonSi";
	this.botonSi.parent = this;
	this.botonSi.setTransform(913.2,313.5,0.725,0.691);
	new cjs.ButtonHelper(this.botonSi, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonSi},{t:this.botonNo}]},235).to({state:[]},22).to({state:[]},349).wait(1));

	// SiLayer
	this.instance_17 = new lib.TxtSi();
	this.instance_17.parent = this;
	this.instance_17.setTransform(865.5,326,1,1,0,0,0,4.5,-24.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(235).to({_off:false},0).wait(1).to({regX:-0.3,regY:-24.6,x:860.7,y:325.9,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(348).to({_off:true},1).wait(1));

	// Linea7Layer
	this.instance_18 = new lib.flechaDerSym();
	this.instance_18.parent = this;
	this.instance_18.setTransform(874.8,373.9,1,1,0,0,0,-37.8,-122.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(235).to({_off:false},0).wait(1).to({regY:-124.7,y:372.1,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(348).to({_off:true},1).wait(1));

	// NoLayer
	this.instance_19 = new lib.TxtNo();
	this.instance_19.parent = this;
	this.instance_19.setTransform(685,326,1,1,0,0,0,0.5,-24.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(235).to({_off:false},0).wait(1).to({regX:4.5,regY:-24.7,x:689,y:325.8,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(347).to({_off:true},1).wait(1));

	// Linea6Layer
	this.instance_20 = new lib.flechaIzqSym();
	this.instance_20.parent = this;
	this.instance_20.setTransform(672,374.5,1,1,0,0,0,-40.9,-122.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(235).to({_off:false},0).wait(1).to({regY:-124.7,y:372.7,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(347).to({_off:true},1).wait(1));

	// if1Layer
	this.instance_21 = new lib.IfSym();
	this.instance_21.parent = this;
	this.instance_21.setTransform(786,349.2,1,1,0,0,0,-7,-4.9);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(210).to({_off:false},0).wait(1).to({regX:-19.5,regY:-17.4,x:773.5,y:336.7,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(384).to({_off:true},1).wait(1));

	// Linea5Layer
	this.instance_22 = new lib.flechaSym();
	this.instance_22.parent = this;
	this.instance_22.setTransform(773.6,296.1,1,0.106,0,0,0,-28.4,-27.4);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(210).to({_off:false},0).wait(1).to({regY:-58.7,y:292.8,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(384).to({_off:true},1).wait(1));

	// Paso6Layer
	this.instance_23 = new lib.Txt6();
	this.instance_23.parent = this;
	this.instance_23.setTransform(357.5,322.1,1,1,0,0,0,-2.5,-24.5);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(187).to({_off:false},0).wait(1).to({regX:-3.5,regY:-23.2,x:356.5,y:323.4,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(408).to({_off:true},1).wait(1));

	// ProcesoLayer
	this.instance_24 = new lib.ProcesoSymb();
	this.instance_24.parent = this;
	this.instance_24.setTransform(758,264.7,1,1,0,0,0,-3.5,-1);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(173).to({_off:false},0).wait(1).to({regX:14,regY:-3.4,x:775.5,y:262.3,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(418).to({_off:true},1).wait(1));

	// Linea4Layer
	this.instance_25 = new lib.flechaSym();
	this.instance_25.parent = this;
	this.instance_25.setTransform(773.7,234.8,1,0.106,0,0,0,-28.4,-9.9);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(173).to({_off:false},0).wait(1).to({regY:-58.7,y:229.6,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(418).to({_off:true},1).wait(1));

	// Paso5Layer
	this.instance_26 = new lib.Txt5();
	this.instance_26.parent = this;
	this.instance_26.setTransform(346,252.5,1,1,0,0,0,-14,-5.7);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(149).to({_off:false},0).wait(1).to({regX:-18.8,regY:-4.4,x:341.2,y:253.8,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(444).to({_off:true},1).wait(1));

	// textbox3
	this.text = new cjs.Text("Ingrese la nota 3", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(586,175.3);

	this.txtboxNumero3 = new lib.an_TextInput({'id': 'txtboxNumero3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero3.setTransform(644.1,212.3,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero3},{t:this.text}]},147).to({state:[]},2).wait(458));

	// Entrada3Layer
	this.instance_27 = new lib.entrada3Symb();
	this.instance_27.parent = this;
	this.instance_27.setTransform(771.9,203.3,1,1,0,0,0,-9,-6);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(135).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(458).to({_off:true},1).wait(1));

	// Linea3Layer
	this.instance_28 = new lib.flechaSym();
	this.instance_28.parent = this;
	this.instance_28.setTransform(773.6,175.4,1,0.106,0,0,0,-28.4,-56.1);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(135).to({_off:false},0).wait(1).to({regY:-58.7,y:175.1,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(458).to({_off:true},1).wait(1));

	// Paso4Layer
	this.instance_29 = new lib.Txt4();
	this.instance_29.parent = this;
	this.instance_29.setTransform(338,182.1,1,1,0,0,0,32,-24.5);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(113).to({_off:false},0).wait(1).to({regX:23.7,regY:-23.1,x:329.7,y:183.5,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(482).to({_off:true},1).wait(1));

	// textbox2
	this.text_1 = new cjs.Text("Ingrese la nota 2", "15px 'Arial'");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 134;
	this.text_1.parent = this;
	this.text_1.setTransform(586,118.9);

	this.txtboxNumero2 = new lib.an_TextInput({'id': 'txtboxNumero2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero2.setTransform(644.1,155.9,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero2},{t:this.text_1}]},111).to({state:[]},2).wait(494));

	// Entrada2Layer
	this.instance_30 = new lib.entrada2Symb();
	this.instance_30.parent = this;
	this.instance_30.setTransform(771.9,146.9,1,1,0,0,0,-9,-6);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(97).to({_off:false},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(494).to({_off:true},1).wait(1));

	// Linea2Layer
	this.instance_31 = new lib.flechaSym();
	this.instance_31.parent = this;
	this.instance_31.setTransform(773.7,118.6,1,0.106,0,0,0,-28.4,-56.6);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(97).to({_off:false},0).wait(1).to({regY:-58.7,y:118.4,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(494).to({_off:true},1).wait(1));

	// Paso3Layer
	this.instance_32 = new lib.Txt3();
	this.instance_32.parent = this;
	this.instance_32.setTransform(338,137.1,1,1,0,0,0,32,-24.5);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(73).to({_off:false},0).wait(1).to({regX:29.4,regY:-23.1,x:335.4,y:138.5,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(519).to({_off:true},1).wait(1));

	// textbox1
	this.text_2 = new cjs.Text("Ingrese la nota 1", "15px 'Arial'");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 134;
	this.text_2.parent = this;
	this.text_2.setTransform(586,62.4);

	this.txtboxNumero = new lib.an_TextInput({'id': 'txtboxNumero', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero.setTransform(644.1,99.4,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero},{t:this.text_2}]},71).to({state:[]},2).wait(534));

	// Entrada1Layer
	this.instance_33 = new lib.entradaSymb();
	this.instance_33.parent = this;
	this.instance_33.setTransform(781.9,95.4,1,1,0,0,0,1,-1);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(59).to({_off:false},0).wait(1).to({regX:-9,regY:-6,x:771.9,y:90.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(534).to({_off:true},1).wait(1));

	// Linea1Layer
	this.instance_34 = new lib.flechaSym();
	this.instance_34.parent = this;
	this.instance_34.setTransform(773.9,62.2,1,0.106,0,0,0,-28.2,-57.1);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(59).to({_off:false},0).wait(1).to({regX:-28.4,regY:-58.7,x:773.7,y:62,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(534).to({_off:true},1).wait(1));

	// Paso2Layer
	this.instance_35 = new lib.Txt2();
	this.instance_35.parent = this;
	this.instance_35.setTransform(317,87.1,1,1,0,0,0,11,-24.5);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(35).to({_off:false},0).wait(1).to({regX:26,regY:-23.1,x:332,y:88.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(558).to({_off:true},1).wait(1));

	// InicioLayer
	this.instance_36 = new lib.inicioSym();
	this.instance_36.parent = this;
	this.instance_36.setTransform(773.9,33.6,1,1,0,0,0,-0.5,-4.7);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(23).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(570).to({_off:true},1).wait(1));

	// Paso1Layer
	this.instance_37 = new lib.Txt1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(279.9,38,1,1,0,0,0,-1.1,-24.5);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({regX:-2.6,regY:-24.6,x:278.4,y:37.9,alpha:0.086},0).wait(1).to({alpha:0.173},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.432},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.777},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.95},0).wait(594).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(933,411.6,826.9,60.2);
// library properties:
lib.properties = {
	id: 'DB3FD9805FB62D4A9AF23D402DA0D80F',
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
an.compositions['DB3FD9805FB62D4A9AF23D402DA0D80F'] = {
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