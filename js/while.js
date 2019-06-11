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


(lib.ProcesoSymb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAvIAAhIQgEAEgGAEIgMAGIAAgLQAJgFAHgGQAHgHADgGIAHAAIAABdg");
	this.shape.setTransform(63.1,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAiAAIAAALg");
	this.shape_1.setTransform(54.2,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_2.setTransform(44.8,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQADgDAEAAQAFAAAGAEIgEALQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_3.setTransform(39.5,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAJgJANAAQAOAAAIAJQAJAJAAAQIAAADIgxAAQAAALAGAGQAFAGAIAAQAGAAAEgDQAFgEADgHIALACQgDAKgHAGQgIAFgLAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_4.setTransform(33.2,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiAiIAAgpIgBgKQgBgDgDgBQgDgCgEgBQgHAAgFAFQgEAFAAALIAAAlIgLAAIAAgrQAAgHgCgDQgDgEgHgBQgEAAgEADQgFACgBAGQgCAEAAAJIAAAiIgMAAIAAhCIALAAIAAAKQADgGAFgCQAFgEAHAAQAHAAAFAEQAEADACAGQAIgNANAAQAKAAAFAGQAGAFAAAMIAAAtg");
	this.shape_5.setTransform(24.1,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgDQgDgEgBgFIAAgKIAAgqIALAAIAAAlIABAMQABAEADADQAEADAFAAQAEAAAFgDQAEgDACgEQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGAAgGgDg");
	this.shape_6.setTransform(15,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAiIAAgoQAAgGgBgEQgBgDgEgCQgDgCgFgBQgHAAgFAFQgFAFAAANIAAAjIgMAAIAAhCIALAAIAAAKQAHgMAOAAQAGAAAFADQAEACADADQACAEABAFIABALIAAAog");
	this.shape_7.setTransform(7.8,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAGIAAgLIAiAAIAAALg");
	this.shape_8.setTransform(-1.6,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAiAAIAAALg");
	this.shape_9.setTransform(-5.9,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAFIAAgJIA9gaIAAALIgwATIAwAVIAAALg");
	this.shape_10.setTransform(-11.9,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAaQgIgJgBgRQAAgSAKgJQAKgHALAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_11.setTransform(-22.9,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQADgDAEAAQAFAAAGAEIgEALQgEgCgEAAQgEAAgCACQgDACgBAEQgCAGAAAHIAAAig");
	this.shape_12.setTransform(-28.2,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgQQAAgQAIgKQAKgJAMAAQAOAAAIAJQAJAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAFgDQAEgEADgHIALACQgCAKgIAGQgHAFgMAAQgOAAgJgJgAgMgUQgFAGgBAJIAlAAQgBgJgEgEQgFgHgIAAQgIAAgFAFg");
	this.shape_13.setTransform(-34.5,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiAiIAAgpIgBgKQgBgDgDgBQgDgCgEgBQgHAAgFAFQgEAFAAALIAAAlIgLAAIAAgrQAAgHgCgDQgDgEgHgBQgEAAgEADQgFACgBAGQgCAEAAAJIAAAiIgMAAIAAhCIALAAIAAAKQADgGAFgCQAFgEAHAAQAHAAAFAEQAEADACAGQAIgNANAAQAKAAAFAGQAGAFAAAMIAAAtg");
	this.shape_14.setTransform(-43.6,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgDQgDgEgBgFIAAgKIAAgqIALAAIAAAlIABAMQABAEADADQAEADAFAAQAEAAAFgDQAEgDACgEQACgEAAgKIAAgjIALAAIAABDIgKAAIAAgKQgIAMgMAAQgGAAgGgDg");
	this.shape_15.setTransform(-52.7,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQAiIAAgoQAAgGgBgEQgCgDgDgCQgEgCgEgBQgHAAgEAFQgGAFAAANIAAAjIgLAAIAAhCIAKAAIAAAKQAHgMANAAQAGAAAGADQAFACACADQACAEACAFIAAALIAAAog");
	this.shape_16.setTransform(-59.9,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAaQgJgJABgRQAAgSAKgJQAIgHAMAAQAOAAAJAJQAIAJABAQQgBAMgEAIQgDAHgIAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAGgGgBgNQABgMgGgGQgGgHgIAAQgHAAgHAHg");
	this.shape_17.setTransform(107.6,-3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgCAEgBQAFABAGADIgEALQgEgDgEAAQgEAAgCADQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_18.setTransform(102.3,-3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAaQgJgJAAgQQAAgQAJgKQAIgJANAAQAOAAAJAJQAIAJAAAQIAAADIgyAAQABALAGAGQAGAGAHAAQAGAAAEgDQAFgEACgHIANACQgEAKgHAGQgIAFgLAAQgOAAgIgJgAgMgUQgFAGgBAJIAlAAQgBgJgDgEQgGgHgJAAQgGAAgGAFg");
	this.shape_19.setTransform(96,-3.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAiAjIAAgqIgBgKQgBgDgDgCQgDgCgEAAQgHABgFAEQgEAFAAAKIAAAnIgLAAIAAgrQAAgIgCgDQgDgFgHAAQgEABgEACQgFADgBAEQgCAGAAAIIAAAjIgMAAIAAhDIALAAIAAAJQADgEAFgEQAFgDAHAAQAHAAAFADQAEAEACAFQAIgMANAAQAKABAFAFQAGAGAAALIAAAug");
	this.shape_20.setTransform(87,-3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAgQgFgCgCgEQgDgDgBgFIAAgLIAAgoIALAAIAAAkIABAMQABAEADADQAEADAFgBQAEABAFgDQAEgDACgEQACgFAAgIIAAgjIALAAIAABCIgKAAIAAgKQgIALgMAAQgGAAgGgCg");
	this.shape_21.setTransform(77.9,-3.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQAjIAAgpQAAgGgCgEQgBgEgDgCQgDgCgFAAQgGABgGAEQgFAEAAAOIAAAkIgMAAIAAhDIALAAIAAAJQAIgLAMAAQAGABAFACQAFACADAEQACADABAFIACALIAAApg");
	this.shape_22.setTransform(70.7,-3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAGIgIAOIgHgGIALgMIgQgCIADgJIAPAGIgBgQIAIAAIgCAQIAPgGIADAJIgQACIALAMIgIAGIgIgOg");
	this.shape_23.setTransform(60.9,-7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAvIAAhdIAKAAIAABdg");
	this.shape_24.setTransform(49.7,-4.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_25.setTransform(44.6,-3.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_26.setTransform(39.6,-4.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgCAEgBQAFABAGADIgEALQgEgDgEAAQgEAAgCADQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_27.setTransform(36.5,-3.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAaQgIgJAAgRQgBgSAKgJQAKgHALAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_28.setTransform(30.2,-3.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgDAAgLIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAGIACACIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_29.setTransform(24.8,-4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAaQgJgJAAgRQAAgKAEgIQAEgIAHgEQAHgEAJAAQALAAAHAFQAGAGACAKIgLACQgCgHgDgDQgEgEgGAAQgIAAgGAGQgEAHAAAMQAAAOAEAGQAGAGAHAAQAHAAAEgEQAFgEABgJIAMACQgCALgIAHQgHAGgMAAQgNAAgIgJg");
	this.shape_30.setTransform(19.9,-3.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_31.setTransform(12.8,-3.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAvIAAg5IgLAAIAAgJIALAAIAAgHIABgKQABgFAFgDQADgCAHAAIALABIgCAKIgHgBQgFAAgCACQgCADAAAGIAAAGIANAAIAAAJIgNAAIAAA5g");
	this.shape_32.setTransform(7.7,-5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAiAAIAAALg");
	this.shape_33.setTransform(-0.2,-3.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_34.setTransform(-4.5,-3.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAGIAAgLIA9gZIAAALIgwATIAwAUIAAAMg");
	this.shape_35.setTransform(-10.5,-4.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_36.setTransform(-19.4,-4.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_37.setTransform(-24.5,-3.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_38.setTransform(-29.5,-4.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgCAEgBQAFABAGADIgEALQgEgDgEAAQgEAAgCADQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_39.setTransform(-32.6,-3.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_40.setTransform(-38.9,-3.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgDAAgLIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAGIACACIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_41.setTransform(-44.3,-4.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAaQgJgJABgRQAAgKADgIQAEgIAHgEQAHgEAIAAQALAAAHAFQAHAGACAKIgLACQgCgHgEgDQgEgEgGAAQgHAAgGAGQgEAHAAAMQAAAOAEAGQAGAGAHAAQAHAAAEgEQAFgEABgJIALACQgCALgHAHQgIAGgLAAQgMAAgJgJg");
	this.shape_42.setTransform(-49.2,-3.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_43.setTransform(-56.3,-3.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIAvIAAg5IgLAAIAAgJIALAAIAAgHIABgKQABgFAFgDQADgCAHAAIALABIgCAKIgHgBQgFAAgCACQgCADAAAGIAAAGIANAAIAAAJIgNAAIAAA5g");
	this.shape_44.setTransform(-61.4,-5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0066FF").ss(1,1,1).p("AvnldIfPAAIAAK7I/PAAg");
	this.shape_45.setTransform(20.5,9.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0066FF").s().p("AvnFeIAAq7IfPAAIAAK7g");
	this.shape_46.setTransform(20.5,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProcesoSymb2, new cjs.Rectangle(-80.5,-26.9,202,72), null);


(lib.ProcesoSymb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAvIAAhIQgEAEgGAEIgMAGIAAgLQAJgFAHgGQAHgHADgGIAHAAIAABdg");
	this.shape.setTransform(8.7,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAiAAIAAALg");
	this.shape_1.setTransform(-0.2,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAGIAAgLIAjAAIAAALg");
	this.shape_2.setTransform(-4.5,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAGIAAgLIA9gZIAAALIgwATIAwAUIAAAMg");
	this.shape_3.setTransform(-10.5,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_4.setTransform(-19.4,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_5.setTransform(-24.5,-3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_6.setTransform(-29.5,-4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgCAEgBQAFABAGADIgEALQgEgDgEAAQgEAAgCADQgDACgBAEQgCAGAAAHIAAAjg");
	this.shape_7.setTransform(-32.6,-3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAaQgJgJAAgRQABgSAJgJQAJgHAMAAQAOAAAIAJQAKAJgBAQQAAAMgDAIQgFAHgHAEQgHAEgJAAQgNAAgJgJgAgOgSQgFAGAAAMQAAANAFAGQAHAHAHAAQAIAAAGgHQAFgGABgNQgBgMgFgGQgGgHgIAAQgHAAgHAHg");
	this.shape_8.setTransform(-38.9,-3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgDAAgLIAAglIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAGIACACIAEABIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_9.setTransform(-44.3,-4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAaQgJgJABgRQAAgKADgIQAEgIAHgEQAHgEAIAAQALAAAHAFQAHAGACAKIgLACQgCgHgEgDQgEgEgGAAQgHAAgGAGQgEAHAAAMQAAAOAEAGQAGAGAHAAQAHAAAEgEQAFgEABgJIALACQgCALgHAHQgIAGgLAAQgMAAgJgJg");
	this.shape_10.setTransform(-49.2,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_11.setTransform(-56.3,-3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAvIAAg5IgLAAIAAgJIALAAIAAgHIABgKQABgFAFgDQADgCAHAAIALABIgCAKIgHgBQgFAAgCACQgCADAAAGIAAAGIANAAIAAAJIgNAAIAAA5g");
	this.shape_12.setTransform(-61.4,-5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0066FF").ss(1,1,1).p("AnzjgIPnAAIAAHBIvnAAg");
	this.shape_13.setTransform(-29.5,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AnzDhIAAnBIPnAAIAAHBg");
	this.shape_14.setTransform(-29.5,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProcesoSymb, new cjs.Rectangle(-80.5,-26.9,102,47), null);


(lib.Txt8 = function(mode,startPosition,loop) {
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
	this.shape_4.graphics.f("#000000").s().p("AgYAtQgKgJAAgOQgBgKAGgHQAFgGAKgDQgIgDgEgGQgEgGAAgHQAAgMAIgIQAJgIANAAQAOAAAIAIQAJAJAAALQAAAHgEAHQgEAFgIADQAKADAFAGQAGAHAAALQAAANgLAJQgJAKgQAAQgPAAgJgKgAgOAGQgHAHAAAJQAAAGADAFQACAFAFADQAGADAFAAQAKAAAFgGQAHgGAAgJQAAgKgHgHQgGgFgJgBQgJABgFAFgAgMgmQgEAFAAAGQAAAIAEAFQAFAFAHgBQAIABAEgFQAFgFABgHQgBgHgFgFQgEgFgIAAQgGAAgGAFg");
	this.shape_4.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt8, new cjs.Rectangle(-24,-23.9,42.1,20.8), null);


(lib.Txt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape.setTransform(196.4,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_1.setTransform(190.6,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_2.setTransform(184.8,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_3.setTransform(181.2,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_4.setTransform(173.9,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_5.setTransform(167.8,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_6.setTransform(162.1,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_7.setTransform(153.9,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKA3IAAhDIgMAAIAAgKIAMAAIAAgJQAAgHABgEQACgFAFgDQAEgDAIAAIANABIgCALIgIAAQgGgBgDADQgCADAAAGIAAAIIAPAAIAAAKIgPAAIAABDg");
	this.shape_8.setTransform(148,5.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_9.setTransform(139.7,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_10.setTransform(133.9,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_11.setTransform(125.3,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_12.setTransform(115.3,6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_13.setTransform(108.1,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_14.setTransform(102.2,5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_15.setTransform(96.3,6.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgOIARgvIANAAIgdBNg");
	this.shape_16.setTransform(88.5,6.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_17.setTransform(78.8,5.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_18.setTransform(73,6.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_19.setTransform(62.8,6.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_20.setTransform(58,5.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_21.setTransform(50.1,6.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_22.setTransform(42.2,5.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_23.setTransform(38.6,6.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_24.setTransform(31.5,8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_25.setTransform(20.9,6.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_26.setTransform(13,5.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_27.setTransform(3,6.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_28.setTransform(-3.1,6.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_29.setTransform(-10.4,6.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_30.setTransform(-18.1,6.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_31.setTransform(174.7,-12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRAlQgFgDgEgEQgDgDAAgHIgBgMIAAgvIANAAIAAAqIAAAOQACAFAEAEQAEACAGAAQAFAAAFgCQAFgDACgGQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_32.setTransform(166.3,-12.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAVA3IAAgnQgDAFgGADQgGADgGAAQgNAAgJgMQgKgLAAgSQAAgMAEgJQADgJAIgFQAIgFAJAAQAOAAAIAMIAAgKIALAAIAABrgAgNgkQgGAHAAAQQAAAOAGAHQAHAIAHAAQAJAAAGgHQAGgIAAgNQAAgQgGgIQgHgHgJAAQgHAAgGAHg");
	this.shape_33.setTransform(157.8,-10.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_34.setTransform(147.8,-12.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_35.setTransform(140.5,-12.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgcA1IgBgMIAIABQAEAAADgBQACgCABgDIAFgJIABgEIgehNIAPAAIAQAuIAEARQADgJADgIIARguIAMAAIgdBPQgFAMgCAFQgDAHgFADQgEADgGAAIgJgCg");
	this.shape_36.setTransform(132.7,-10.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_37.setTransform(124.6,-12.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_38.setTransform(114.3,-12.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_39.setTransform(100,-12.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_40.setTransform(92.1,-12.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_41.setTransform(79.7,-12.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_42.setTransform(71.3,-12.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_43.setTransform(58.8,-12.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_44.setTransform(52.7,-12.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_45.setTransform(45.4,-12.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_46.setTransform(35.1,-12.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgRAlQgFgDgEgEQgDgDAAgHIgBgMIAAgvIANAAIAAAqIAAAOQACAFAEAEQAEACAGAAQAFAAAFgCQAFgDACgGQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_47.setTransform(24.6,-12.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_48.setTransform(16.3,-12.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_49.setTransform(6.3,-13.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAzQgKgEgGgJQgFgIgBgLIAOgBQABAIADAFQAEAFAHADQAHADAJABQAIAAAGgDQAGgCADgEQADgFAAgEQAAgGgDgDQgDgEgGgDIgSgFQgPgDgGgCQgIgFgEgGQgDgFAAgIQAAgIAEgIQAFgGAJgEQAJgEAKABQALgBAJAEQAKAEAEAHQAFAIABAJIgOABQgBgKgGgFQgHgFgMAAQgMAAgGAFQgGAFAAAGQAAAGAEAEQAFADAQAEQARAEAHADQAJADAEAHQAFAHAAAIQAAAJgFAHQgFAIgJAEQgJAEgMAAQgNAAgKgEg");
	this.shape_50.setTransform(-0.5,-13.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_51.setTransform(-11.6,-9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTA1QABgNAEgRQAFgSAJgQQAIgRAKgLIg0AAIAAgNIBFAAIAAALQgKAKgKATQgLARgEASQgEAOgBAQg");
	this.shape_52.setTransform(-17.9,-13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt7, new cjs.Rectangle(-24,-23.9,225.1,39.6), null);


(lib.Txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape.setTransform(-28.5,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIAMAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_1.setTransform(-40.4,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_2.setTransform(-48.8,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_3.setTransform(-61.3,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_4.setTransform(-67.4,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_5.setTransform(-74.7,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_6.setTransform(-85,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAlQgHgDgCgEQgDgEgCgGIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEADAGAAQAFAAAFgDQAFgDADgGQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_7.setTransform(-95.5,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_8.setTransform(-103.8,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_9.setTransform(62.6,-23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_10.setTransform(57.9,-24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgDgDgCgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_11.setTransform(52,-23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_12.setTransform(41.6,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_13.setTransform(31.5,-23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_14.setTransform(26.2,-24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_15.setTransform(20,-24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA1IgCgMIAHABQAFAAACgBQADgCABgDIAFgJIABgEIgdhNIANAAIARAuIAFARQACgJADgIIAQguIAOAAIgeBPQgEAMgCAFQgEAHgEADQgFADgGAAIgIgCg");
	this.shape_16.setTransform(8.3,-21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_17.setTransform(-1.4,-24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_18.setTransform(-7.2,-23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_19.setTransform(-13,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_20.setTransform(-16.6,-23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_21.setTransform(-23.9,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_22.setTransform(-30,-24.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_23.setTransform(-35.7,-23.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_24.setTransform(-43.9,-23.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKA3IAAhDIgMAAIAAgKIAMAAIAAgJQAAgIABgDQACgFAFgDQAEgDAIgBIANACIgCALIgIAAQgGgBgDADQgCADAAAGIAAAIIAPAAIAAAKIgPAAIAABDg");
	this.shape_25.setTransform(-49.8,-24.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_26.setTransform(-58.3,-23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_27.setTransform(-65.6,-23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_28.setTransform(-71.6,-23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_29.setTransform(-78.9,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFABIAFgBIACAMIgKABQgHAAgDgCg");
	this.shape_30.setTransform(-85,-24.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_31.setTransform(-89.2,-24.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_32.setTransform(-97.5,-20);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYArQgLgNAAgbQAAgfAMgOQAKgMAQAAQANAAAIAIQAIAGACANIgOABQgBgIgDgDQgGgGgIAAQgFAAgFAEQgGAEgEAJQgDAIAAARQAEgIAIgDQAGgEAHAAQANAAAJAKQAKAJgBAPQAAAKgEAJQgEAIgIAFQgIAFgJAAQgPAAgLgMgAgNABQgGAHAAAKQAAAHACAGQADAHAGADQAFADAEAAQAJAAAGgHQAGgGAAgMQAAgLgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_33.setTransform(-103.9,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt6, new cjs.Rectangle(-110,-34.9,215,39.6), null);


(lib.Txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA3IAAgPIAOAAIAAAPgAgGAcIAAgEQAAgIACgFIAFgJIAJgIIAJgJQACgFAAgDQAAgIgGgGQgGgGgJAAQgHAAgGAFQgFAGgCALIgOgBQACgPAJgJQAJgHAOgBQAQAAAJAJQAKAJAAAMQAAAHgEAFQgDAHgKAHQgGAFgCAEIgDAFIgBAMg");
	this.shape.setTransform(98.7,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_1.setTransform(90.4,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_2.setTransform(82.1,-23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAlQgHgCgCgFQgDgDgCgHIgBgLIAAgwIAOAAIAAAqIABAPQABAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgLQgJANgPAAQgHAAgFgDg");
	this.shape_3.setTransform(73.7,-23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_4.setTransform(61.2,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAlQgGgCgDgFQgCgDgBgHIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQABgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_5.setTransform(52.8,-23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUA3IAAgnQgDAFgFADQgFADgHAAQgNAAgJgMQgLgLAAgSQABgMAEgJQADgJAIgFQAIgFAJAAQANAAAJAMIAAgKIAMAAIAABrgAgNgkQgGAHAAAQQAAAOAGAHQAHAIAHAAQAIAAAHgHQAGgIAAgNQAAgQgGgIQgHgHgJAAQgHAAgGAHg");
	this.shape_6.setTransform(44.3,-21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_7.setTransform(34.3,-23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_8.setTransform(27,-23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcA1IgBgMIAIABQAEAAADgBQACgCACgDIAEgJIABgEIgehNIAPAAIAQAuIAEARQACgJAEgIIARguIAMAAIgdBPQgFAMgCAFQgDAHgFADQgEADgGAAIgJgCg");
	this.shape_9.setTransform(19.2,-21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_10.setTransform(11.1,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_11.setTransform(0.8,-23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_12.setTransform(-13.8,-23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_13.setTransform(-19.9,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_14.setTransform(-27.2,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_15.setTransform(-37.6,-23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAlQgFgCgEgFQgCgDgBgHIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEACAGAAQAFAAAFgCQAFgEADgFQABgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_16.setTransform(-48.1,-23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_17.setTransform(-56.4,-23.3);

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
	this.shape_22.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgHAAgMQAAgMgHgFQgGgHgJAAQgHABgFADQgFACgDAEIgMgCIAKg2IA1AAIAAANIgqAAIgGAdQAKgHAJAAQAOAAAKAJQAKAKAAAOQAAAPgJALQgKANgRAAQgPAAgJgJg");
	this.shape_22.setTransform(-103.8,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt5, new cjs.Rectangle(-110,-34.9,223,20.8), null);


(lib.Txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape.setTransform(77.8,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_1.setTransform(71.7,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_2.setTransform(64.4,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_3.setTransform(54.1,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAlQgFgDgEgEQgDgEAAgGIgBgLIAAgwIANAAIAAAqIAAAPQACAEAEAEQAEADAGAAQAFAAAFgDQAFgDACgGQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgLQgJANgPAAQgGAAgHgDg");
	this.shape_4.setTransform(43.6,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_5.setTransform(35.3,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_6.setTransform(22.7,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_7.setTransform(16.9,-5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_8.setTransform(11.3,-5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_9.setTransform(2.7,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_10.setTransform(-3.1,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_11.setTransform(-6.7,-4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(-14,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgOIARgvIANAAIgcBNg");
	this.shape_13.setTransform(-21.9,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_14.setTransform(-34,-4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_15.setTransform(-39.9,-5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_16.setTransform(-49.9,-4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVALgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_17.setTransform(131.2,-23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_18.setTransform(122.5,-24.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_19.setTransform(114.4,-23.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_20.setTransform(106.5,-23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_21.setTransform(98.6,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_22.setTransform(92.5,-23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_23.setTransform(85,-21.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgFgCQgEgCgFAAQgHAAgGAFQgHAFABAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_24.setTransform(76.9,-23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_25.setTransform(71.1,-24.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_26.setTransform(63.3,-23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_27.setTransform(56.1,-23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_28.setTransform(50.2,-24.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_29.setTransform(44.3,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIANAAIgdBNg");
	this.shape_30.setTransform(36.5,-23.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_31.setTransform(26.8,-24.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_32.setTransform(21,-23.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_33.setTransform(10.8,-23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_34.setTransform(3.5,-23.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_35.setTransform(-4.8,-23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_36.setTransform(-13.4,-21.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_37.setTransform(-19,-24.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_38.setTransform(-24.5,-23.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_39.setTransform(-33.2,-24.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_40.setTransform(-43.5,-20);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAKA2IAAgaIguAAIAAgMIAwhFIAKAAIAABFIAPAAIAAAMIgPAAIAAAagAgXAQIAhAAIAAgvg");
	this.shape_41.setTransform(-50.1,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt4, new cjs.Rectangle(-56,-34.9,196,39.6), null);


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
	this.shape.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape.setTransform(81.9,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_1.setTransform(76.1,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_2.setTransform(70.3,-5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_3.setTransform(66.7,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_4.setTransform(59.4,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAEABIAGgBIACAMIgKABQgHAAgDgCg");
	this.shape_5.setTransform(53.3,-5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_6.setTransform(47.6,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_7.setTransform(39.4,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKA2IAAhCIgMAAIAAgKIAMAAIAAgIQAAgJABgDQACgFAFgDQAEgEAIAAIANABIgCAMIgIAAQgGAAgDACQgCADAAAGIAAAIIAPAAIAAAKIgPAAIAABCg");
	this.shape_8.setTransform(33.5,-5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_9.setTransform(22.7,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_10.setTransform(16.9,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_11.setTransform(11.3,-5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_12.setTransform(2.7,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_13.setTransform(-3.1,-5.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_14.setTransform(-6.7,-4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_15.setTransform(-14,-4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAnIgehNIAPAAIAQAuIAEAPIAFgOIARgvIANAAIgcBNg");
	this.shape_16.setTransform(-21.9,-4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_17.setTransform(-34,-4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_18.setTransform(-39.9,-5.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_19.setTransform(-49.9,-4.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_20.setTransform(93.9,-24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_21.setTransform(81.9,-23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_22.setTransform(73.3,-24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_23.setTransform(63.3,-23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQABgVAMgKQAJgJAOAAQAQAAAKALQAKAKAAATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_24.setTransform(56.1,-23.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_25.setTransform(50.2,-24.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_26.setTransform(44.3,-23.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAnIgdhNIANAAIARAuIAEAPIAFgOIARgvIANAAIgdBNg");
	this.shape_27.setTransform(36.5,-23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_28.setTransform(26.8,-24.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_29.setTransform(21,-23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_30.setTransform(10.8,-23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_31.setTransform(3.5,-23.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_32.setTransform(-4.8,-23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAyQgIgHAAgMIANABQABAGAEADQAEAEAJgBQAIABAFgEQAFgEACgGQABgFAAgMQgJAKgMAAQgQAAgJgLQgIgMAAgPQAAgLAEgKQAEgKAHgEQAIgGAKAAQANABAJAKIAAgJIAMAAIAABDQAAASgEAHQgDAIgIAEQgIAFgLAAQgOgBgJgFgAgOglQgGAIAAAOQAAAPAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgIQgHgGgJgBQgIABgGAGg");
	this.shape_33.setTransform(-13.4,-21.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_34.setTransform(-19,-24.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_35.setTransform(-24.5,-23.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_36.setTransform(-33.2,-24.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_37.setTransform(-43.5,-20);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgHAMgIQAQgPAHgIQAGgIAAgIQAAgHgFgFQgHgGgJAAQgIAAgGAGQgFAGAAAKIgOgCQACgPAIgIQAKgIAOAAQAPAAAKAJQAJAIAAANQAAAGgDAHQgDAGgGAGQgGAGgPAMIgNAOQgEAEgCAEIA0AAIAAAMg");
	this.shape_38.setTransform(-50,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt2, new cjs.Rectangle(-56,-34.9,166,39.6), null);


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


(lib.impr2Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.txtFacto = new cjs.Text("", "13px 'Arial'", "#FFFFFF");
	this.txtFacto.name = "txtFacto";
	this.txtFacto.lineHeight = 17;
	this.txtFacto.lineWidth = 31;
	this.txtFacto.parent = this;
	this.txtFacto.setTransform(-3.2,10.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape.setTransform(50.9,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeATIAAgKIA9AAIAAAKgAgegIIAAgKIA9AAIAAAKg");
	this.shape_1.setTransform(41.2,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_2.setTransform(32.3,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_3.setTransform(27.2,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAvIAAhDIALAAIAABDgAgFggIAAgOIALAAIAAAOg");
	this.shape_4.setTransform(22.2,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAjIAAhDIAKAAIAAAKQAEgHADgCQADgDAEABQAFAAAGADIgEALQgEgCgEgBQgEAAgCACQgDADgBAEQgCAGAAAHIAAAjg");
	this.shape_5.setTransform(19.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAaQgJgJABgRQAAgSAKgJQAIgHAMAAQAOAAAJAJQAIAJABAQQAAAMgFAIQgDAHgIAEQgHAEgJAAQgNAAgJgJgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIAAQAIAAAGgHQAGgGgBgNQABgMgGgGQgGgHgIAAQgIAAgFAHg");
	this.shape_6.setTransform(12.8,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAsQgDgCgCgDQgBgDAAgKIAAgmIgIAAIAAgJIAIAAIAAgRIAKgHIAAAYIAMAAIAAAJIgMAAIAAAmIABAGIACADIAEAAIAFAAIABAKIgIABQgGAAgDgCg");
	this.shape_7.setTransform(7.4,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAaQgIgJgBgRQABgKADgIQAEgIAHgEQAIgEAHAAQAMAAAGAFQAHAGACAKIgLACQgBgHgEgDQgFgEgGAAQgHAAgFAGQgFAHgBAMQABAOAFAGQAEAGAIAAQAHAAAFgEQAEgEABgJIAMACQgDALgHAHQgIAGgLAAQgMAAgJgJg");
	this.shape_8.setTransform(2.5,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAeQgGgGAAgIQAAgFACgEQACgEAEgDQAEgBAEgBIAKgCQANgCAHgCIAAgDQAAgHgDgDQgFgEgIAAQgHAAgEADQgEADgCAHIgLgBQABgIAEgEQADgEAHgDQAHgCAHAAQAJAAAFACQAGACACADQADADABAFIAAAKIAAAPQAAAPABAFQABAEACAEIgMAAQgCgEAAgFQgHAGgFACQgFACgHAAQgLAAgGgFgAgCAEIgKADQgDABgBACQgCADAAADQAAAEAEADQADADAHAAQAFAAAFgDQAGgCACgFQACgEAAgIIAAgEQgGACgMACg");
	this.shape_9.setTransform(-4.6,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIA+AAIAAALIgxAAIAAAdIAqAAIAAAKIgqAAIAAArg");
	this.shape_10.setTransform(-11.9,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAHARIgDgRIAAgQIANAAIAAAQIgDARgAgNARIgDgRIAAgQIANAAIAAAQIgDARg");
	this.shape_11.setTransform(-18.4,-4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0066FF").ss(1,1,1).p("AoNkrIQcAAQAhAAAAAqIAAE4QlxAzheA9Qj8ColygsQgiAAAAgpIAAn7QAAgqAiAAg");
	this.shape_12.setTransform(21.1,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AoNEjQgiAAAAgpIAAn7QAAgqAiAAIQcAAQAhAAAAAqIAAE4QlxAzheA9QjICFkSAAQhHAAhNgJg");
	this.shape_13.setTransform(21.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txtFacto}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr2Sym, new cjs.Rectangle(-35.9,-16.9,114,62), null);


(lib.impr1Sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape.setTransform(52.8,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(47.3,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_2.setTransform(42.5,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_3.setTransform(36.7,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBApIgEgFQgBgDAAgKIAAgiIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAJIgIABQgFAAgDgBg");
	this.shape_4.setTransform(31.7,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_5.setTransform(26.7,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_6.setTransform(20,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_7.setTransform(10,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_8.setTransform(5.2,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_9.setTransform(-0.6,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgCgKIgDgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgFAAgEADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_10.setTransform(-8.9,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAqQgFgCgCgEQgCgCgBgGIgBgJIAAgmIAKAAIAAAiIABALQABAEADADQAEACAEAAQAEAAAEgCQAEgDACgEQACgFAAgHIAAghIAKAAIAAA9IgJAAIAAgIQgHAKgMAAQgFAAgFgCgAgFgbIAHgQIANAAIgMAQg");
	this.shape_11.setTransform(-17.3,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_12.setTransform(-23.9,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_13.setTransform(30.3,-2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_14.setTransform(23.6,-2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_15.setTransform(13.6,-2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAcQgGgGgCgJIAKgCQACAGAEAEQAEACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQADAEABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADACIAJAEIAQAEQAEABADAEQACAEAAAFQAAAFgDAFQgDAEgGADQgGADgHgBQgLAAgHgEg");
	this.shape_16.setTransform(7.3,-2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_17.setTransform(1,-2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_18.setTransform(-3.9,-2.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgDABgEIABgOQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_19.setTransform(-9.9,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_20.setTransform(-16.3,-2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_21.setTransform(-21.3,-3.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHAPIgDgPIAAgOIAMAAIAAAOIgDAPgAgMAPIgDgPIAAgOIAMAAIAAAOIgCAPg");
	this.shape_22.setTransform(-25.1,-6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0066FF").ss(1,1,1).p("AnUkSIOqAAQAeAAAAAmIAAEeQlKAuhTA5QjiCZlJgnQgfAAAAgmIAAnRQAAgmAfAAg");
	this.shape_23.setTransform(15.1,11.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AnUELQgfAAAAgmIAAnRQAAgmAfAAIOqAAQAeAAAAAmIAAEeQlKAuhTA5Qi0B6j1AAQg/AAhDgIg");
	this.shape_24.setTransform(15.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.impr1Sym, new cjs.Rectangle(-35.9,-17,102,57), null);


(lib.IfSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFArIAAhCQgDADgGAEIgLAGIAAgLQAJgEAGgGQAGgGADgFIAHAAIAABVg");
	this.shape.setTransform(7.2,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcATIAsgTIgsgSIAAgKIA4AYIAAAJIg4AYg");
	this.shape_1.setTransform(-2.5,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_2.setTransform(-12.7,-17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_3.setTransform(-17.6,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_4.setTransform(-23.4,-17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_5.setTransform(-31.7,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_6.setTransform(-40.1,-17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_7.setTransform(-46.7,-17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0066FF").ss(1,1,1).p("AFeAAIleFeIldldIFdleg");
	this.shape_8.setTransform(-19.5,-17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AldABIFdleIFeFdIleFeg");
	this.shape_9.setTransform(-19.5,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IfSym, new cjs.Rectangle(-55.5,-53.3,72,72), null);


(lib.flechaSym2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiGqIAAh9IAgFAIAA11IAFAAIAAV1IAglAIAAB9IgjFgg");
	this.shape.setTransform(42,4.3,1,0.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAAroIAAXR");
	this.shape_1.setTransform(42,-63.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaSym2, new cjs.Rectangle(38.5,-138.9,7,161.6), null);


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
	this.shape.setTransform(72.9,-291,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("AqkqJIAAUTAB7KPIsfAAAKlqOI1FAA");
	this.shape_1.setTransform(13.5,-226);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaIzqSym, new cjs.Rectangle(-55.2,-294.5,143.4,135.1), null);


(lib.flechaDerSym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhSAjIhGgjIBGgiIAYAAIg/AgIESAAIAAAFIkSAAIA/Agg");
	this.shape.setTransform(70.5,38.8,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,1,1).p("AtpwZIbTAAMAAAAgz");
	this.shape_1.setTransform(-16.9,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechaDerSym, new cjs.Rectangle(-105.3,-161.4,179.4,215.5), null);


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


(lib.facto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.TxtFacto = new cjs.Text("numero - 1", "20px 'Times New Roman'", "#00FF00");
	this.TxtFacto.name = "TxtFacto";
	this.TxtFacto.lineHeight = 24;
	this.TxtFacto.lineWidth = 90;
	this.TxtFacto.parent = this;
	this.TxtFacto.setTransform(-25.9,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.TxtFacto).wait(1));

}).prototype = getMCSymbolPrototype(lib.facto, new cjs.Rectangle(-27.9,-31.7,94,26.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape.setTransform(6.8,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_1.setTransform(1.9,-6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_2.setTransform(-3.9,-6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAgIAAgmIgBgKIgDgEQgCgCgFAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQAEgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_3.setTransform(-12.2,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_4.setTransform(-20.6,-6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_5.setTransform(-27.2,-6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("AkhjHIMVAAIjNGPIsaAAg");
	this.shape_6.setTransform(-9,-6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AnzDIIDSmPIMVAAIjNGPg");
	this.shape_7.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.instance.setTransform(81.3,10.4,1,1,0,0,0,5.5,-24.5);

	this.instance_1 = new lib.flechaDerSym();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.4,62.9,1,1,0,0,0,-37.8,-122.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.4,0,178.7,243.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.flechaSym2();
	this.instance.parent = this;
	this.instance.setTransform(29.5,30,1,0.366,0,0,0,42,-56.1);

	this.instance_1 = new lib.TxtSi();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.1,22.7,1,1,0,0,0,1,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-0.2,33,60.3), null);


// stage content:
(lib._while = function(mode,startPosition,loop) {
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
	this.frame_143 = function() {
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
				//root.mc4.txtPaso4.text += box.value.toString() + '?';
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
	this.frame_191 = function() {
		var cont = num;
		var root = this;
		facto = 1;
		//alert(num)
		
		this.botonNo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_192.bind(this));
		this.botonSi.addEventListener("click", seguir);
		
		
		
		function fl_ClickToGoToAndPlayFromFrame_192()
		{
			if(cont > 1){
				//alert("Incorrecto");
				this.gotoAndPlay(217);
			}else{
				while(num>0){
					facto = facto * num;
					num--;
				}
				//alert(facto);
				root.mcFacto.txtFacto.text = facto.toString();
				this.gotoAndPlay(397);
			}
			
		}
		
		
		function seguir()
		{
		
			//this.gotoAndPlay(157);
			if(cont > 1){
				cont--;
				//alert(cont);
				root.txtIncorrecto.text = "NUMERO = ".concat(cont.toString());
				root.gotoAndPlay(243);
			}else{
				//alert("Incorrecto");
				root.gotoAndPlay(217);
			}
			
			
		}
	}
	this.frame_214 = function() {
		this.gotoAndPlay(192);
	}
	this.frame_240 = function() {
		this.gotoAndPlay(192);
	}
	this.frame_394 = function() {
		this.gotoAndPlay(192);
	}
	this.frame_480 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(48).call(this.frame_191).wait(23).call(this.frame_214).wait(26).call(this.frame_240).wait(154).call(this.frame_394).wait(86).call(this.frame_480).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},480).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl},{t:this.txtInicio}]}).to({state:[]},480).wait(2));

	// Fin
	this.instance = new lib.finSym();
	this.instance.parent = this;
	this.instance.setTransform(954,663.5,1,1,0,0,0,4.5,4.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(457).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(13).to({_off:true},1).wait(1));

	// Flecha6
	this.instance_1 = new lib.flechaSym();
	this.instance_1.parent = this;
	this.instance_1.setTransform(954.5,628.8,1,0.193,0,0,0,-28.4,-25.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(457).to({_off:false},0).wait(1).to({regY:-58.7,y:622.4,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(13).to({_off:true},1).wait(1));

	// Paso8
	this.instance_2 = new lib.Txt8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(286,661,1,1,0,0,0,-3.1,-13.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(431).to({_off:false},0).wait(1).to({regX:-3.5,regY:-13.6,x:285.6,y:660.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(37).to({_off:true},1).wait(1));

	// Impr2
	this.mcFacto = new lib.impr2Sym();
	this.mcFacto.name = "mcFacto";
	this.mcFacto.parent = this;
	this.mcFacto.setTransform(962.5,580.5,1,1,0,0,0,21.1,12.1);
	this.mcFacto.alpha = 0;
	this.mcFacto._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcFacto).wait(419).to({_off:false},0).wait(1).to({regX:21,regY:14,x:962.4,y:582.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(49).to({_off:true},1).wait(1));

	// Paso7
	this.instance_3 = new lib.Txt7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(368.1,575,1,1,0,0,0,79,-4.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(396).to({_off:false},0).wait(1).to({regX:87.8,regY:-2.8,x:376.9,y:576.3,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(74).to({_off:true},1).wait(1));

	// Facto
	this.txtIncorrecto = new cjs.Text("", "13px 'Arial'", "#00FF00");
	this.txtIncorrecto.name = "txtIncorrecto";
	this.txtIncorrecto.lineHeight = 17;
	this.txtIncorrecto.lineWidth = 109;
	this.txtIncorrecto.parent = this;
	this.txtIncorrecto.setTransform(572,320.6);
	this.txtIncorrecto._off = true;

	this.instance_4 = new lib.facto();
	this.instance_4.parent = this;
	this.instance_4.setTransform(605.5,319.4,1.32,1.32,0,0,0,19.1,-18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtIncorrecto}]},359).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.txtIncorrecto}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},2).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.txtIncorrecto).wait(359).to({_off:false},0).wait(34).to({_off:true},1).wait(88));

	// Flecha5
	this.instance_5 = new lib.flechaIzqSym();
	this.instance_5.parent = this;
	this.instance_5.setTransform(584.9,424.4,1,1,0,0,0,-39.4,-204.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(359).to({_off:false},0).wait(1).to({regX:16.8,regY:-227.2,x:641.1,y:402,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(110).to({_off:true},1).wait(1));

	// Proceso
	this.instance_6 = new lib.ProcesoSymb2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(750.5,467,1,1,0,0,0,20.5,9.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(275).to({_off:false},0).wait(1).to({regY:9,y:466.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(193).to({_off:true},1).wait(1));

	// Paso6
	this.instance_7 = new lib.Txt6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(372.6,462,1,1,0,0,0,-2.5,-15.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(242).to({_off:false},0).wait(1).to({regX:-21.4,regY:-15.3,x:353.7,y:461.8,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(225).to({_off:true},1).wait(1));

	// Incorrecto
	this.instance_8 = new lib.Error();
	this.instance_8.parent = this;
	this.instance_8.setTransform(593.1,330.2,1,1,0,0,0,-8,-18.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(216).to({_off:false},0).wait(1).to({regY:-18.5,y:330.1,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(240));

	// ActionIf
	this.botonNo = new lib.BotonNo();
	this.botonNo.name = "botonNo";
	this.botonNo.parent = this;
	this.botonNo.setTransform(909.4,312.6,0.725,0.691);
	new cjs.ButtonHelper(this.botonNo, 0, 1, 1);

	this.botonSi = new lib.BotonSi();
	this.botonSi.name = "botonSi";
	this.botonSi.parent = this;
	this.botonSi.setTransform(684.7,395.4,0.725,0.691);
	new cjs.ButtonHelper(this.botonSi, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botonSi},{t:this.botonNo}]},191).to({state:[]},24).to({state:[]},266).wait(1));

	// FlechaNo
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(846.2,402.4,1,1,0,0,0,66.5,89.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(191).to({_off:false},0).wait(1).to({regX:88.8,regY:122.3,x:868.5,y:434.9,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).wait(182).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(81).to({_off:true},1).wait(1));

	// FlechaSi
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(731.4,402.2,1,1,0,0,0,16.5,29.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(191).to({_off:false},0).wait(1).to({regX:17.9,regY:29.3,x:732.8,y:401.6,alpha:0.923},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.077},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(60).to({alpha:1},0).wait(204).to({_off:true},1).wait(1));

	// Paso5
	this.instance_11 = new lib.Txt5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(376.6,329,1,1,0,0,0,1.5,-24.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(167).to({_off:false},0).wait(1).to({regX:-2.6,regY:-23.2,x:372.5,y:330.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(301).to({_off:true},1).wait(1));

	// While
	this.instance_12 = new lib.IfSym();
	this.instance_12.parent = this;
	this.instance_12.setTransform(744.6,337.3,1,1,0,0,0,-19.6,-17.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(155).to({_off:false},0).wait(1).to({regX:-19.5,x:744.7,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(313).to({_off:true},1).wait(1));

	// Flecha4
	this.instance_13 = new lib.flechaSym();
	this.instance_13.parent = this;
	this.instance_13.setTransform(745,294.6,1,0.161,0,0,0,-28.4,-19.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(155).to({_off:false},0).wait(1).to({regY:-58.7,y:288.3,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(313).to({_off:true},1).wait(1));

	// textbox
	this.text = new cjs.Text("Ingrese un número", "15px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(542,229);

	this.txtboxNumero = new lib.an_TextInput({'id': 'txtboxNumero', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtboxNumero.setTransform(600.1,266,1.2,1,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txtboxNumero},{t:this.text}]},142).to({state:[]},2).wait(338));

	// Entrada
	this.instance_14 = new lib.entradaSymb();
	this.instance_14.parent = this;
	this.instance_14.setTransform(740,257,1,1,0,0,0,-9,-6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(132).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(337).to({_off:true},1).wait(1));

	// Flecha3
	this.instance_15 = new lib.flechaSym();
	this.instance_15.parent = this;
	this.instance_15.setTransform(745,228.7,1,0.161,0,0,0,-28.4,-26.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(132).to({_off:false},0).wait(1).to({regY:-58.7,y:223.5,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(337).to({_off:true},1).wait(1));

	// Paso4
	this.instance_16 = new lib.Txt4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(331.6,258.1,1,1,0,0,0,10.5,-15.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(107).to({_off:false},0).wait(1).to({regX:40.5,regY:-15.2,x:361.6,y:258,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(361).to({_off:true},1).wait(1));

	// Imprimir1
	this.instance_17 = new lib.impr1Sym();
	this.instance_17.parent = this;
	this.instance_17.setTransform(740,185.9,1,1,0,0,0,10.1,6.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(95).to({_off:false},0).wait(1).to({regX:15,regY:11.5,x:744.9,y:190.9,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(373).to({_off:true},1).wait(1));

	// Flecha2
	this.instance_18 = new lib.flechaSym();
	this.instance_18.parent = this;
	this.instance_18.setTransform(745,155.2,1,0.161,0,0,0,-28.4,-16.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(95).to({_off:false},0).wait(1).to({regY:-58.7,y:148.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(373).to({_off:true},1).wait(1));

	// Paso3
	this.instance_19 = new lib.Txt3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(364.6,184.1,1,1,0,0,0,43.5,-24.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(71).to({_off:false},0).wait(1).to({regX:42.4,regY:-24.6,x:363.5,y:184,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(396).to({_off:true},1).wait(1));

	// Proceso
	this.instance_20 = new lib.ProcesoSymb();
	this.instance_20.parent = this;
	this.instance_20.setTransform(742.9,115.4,1,1,0,0,0,-29.5,-3.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(60).to({_off:false},0).wait(1).to({regY:-3.4,y:115.5,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(409).to({_off:true},1).wait(1));

	// Flecha1
	this.instance_21 = new lib.flechaSym();
	this.instance_21.parent = this;
	this.instance_21.setTransform(745,84.7,1,0.161,0,0,0,-28.4,-20.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(60).to({_off:false},0).wait(1).to({regY:-58.7,y:78.6,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(409).to({_off:true},1).wait(1));

	// Paso2
	this.instance_22 = new lib.Txt2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(348.1,106.1,1,1,0,0,0,27,-24.5);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(35).to({_off:false},0).wait(1).to({regX:21.1,regY:-15.2,x:342.2,y:115.4,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(433).to({_off:true},1).wait(1));

	// Inicio
	this.instance_23 = new lib.inicioSym();
	this.instance_23.parent = this;
	this.instance_23.setTransform(744.9,42.5,1,1,0,0,0,4.5,0.3);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(23).to({_off:false},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(445).to({_off:true},1).wait(1));

	// Paso1
	this.instance_24 = new lib.Txt1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(295,39.1,1,1,0,0,0,-1.1,-24.5);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({regX:-2.6,regY:-24.6,x:293.5,y:39,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(468).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(948.1,412.7,811.8,59.2);
// library properties:
lib.properties = {
	id: 'C2532686681E3140ACC89E587A516D7A',
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
an.compositions['C2532686681E3140ACC89E587A516D7A'] = {
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