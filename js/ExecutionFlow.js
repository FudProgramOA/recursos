(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.facto = function() {
	this.initialize(img.facto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);// helper functions:

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


(lib.txtVariables = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("variables", "16px 'Arial'", "#999999");
	this.text.lineHeight = 20;
	this.text.lineWidth = 66;
	this.text.parent = this;
	this.text.setTransform(-32.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtVariables, new cjs.Rectangle(-34.9,-10.9,70,21.9), null);


(lib.txtSalida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("salida", "16px 'Arial'", "#999999");
	this.text.lineHeight = 20;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(-32.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtSalida, new cjs.Rectangle(-34.9,-10.9,48,21.9), null);


(lib.txtNumCont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("5", "17px 'Arial'", "#00FF00");
	this.text.lineHeight = 21;
	this.text.lineWidth = 21;
	this.text.parent = this;
	this.text.setTransform(-32.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtNumCont, new cjs.Rectangle(-34.9,-10.9,25,29), null);


(lib.txtNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("num:", "20px 'Moon 2.0'", "#006699");
	this.text.lineHeight = 26;
	this.text.lineWidth = 41;
	this.text.parent = this;
	this.text.setTransform(-32.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtNum, new cjs.Rectangle(-34.9,-10.9,45,29), null);


(lib.txtFactoCont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.factoCont = new cjs.Text("1", "17px 'Arial'", "#00FF00");
	this.factoCont.name = "factoCont";
	this.factoCont.lineHeight = 21;
	this.factoCont.lineWidth = 21;
	this.factoCont.parent = this;
	this.factoCont.setTransform(-32.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.factoCont).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtFactoCont, new cjs.Rectangle(-34.9,-10.9,25,29), null);


(lib.txtFacto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("facto:", "20px 'Moon 2.0'", "#006699");
	this.text.lineHeight = 26;
	this.text.lineWidth = 55;
	this.text.parent = this;
	this.text.setTransform(-32.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtFacto, new cjs.Rectangle(-34.9,-10.9,59,29), null);


(lib.Fin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Ejecución del codigo completado", "23px 'MAXWELL REGULAR'", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 270;
	this.text.parent = this;
	this.text.setTransform(-133.9,-22.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A2LsGMAsXAAAQB8AABYBYQBYBYAAB8IAAO1QAAB8hYBYQhYBYh8AAMgsXAAAQh8AAhYhYQhYhYAAh8IAAu1QAAh8BYhYQBYhYB8AAg");
	this.shape.setTransform(0,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282923").s().p("A2LMHQh8AAhYhYQhYhYAAh8IAAu1QAAh8BYhYQBYhYB8AAMAsXAAAQB8AABYBYQBYBYAAB8IAAO1QAAB8hYBYQhYBYh8AAg");
	this.shape_1.setTransform(0,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fin, new cjs.Rectangle(-172.9,-80.9,346,157), null);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("A+ihfMA+fAAAA/802MAAAApt");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-205.5,-134.5,411,269), null);


(lib.IndicadorGo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AiLBPIAAidICpAAIBuBOIhqBPg");
	this.shape.setTransform(-3.6,-42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AiLBPIAAidICpAAIBuBOIhpBPg");
	this.shape_1.setTransform(-3.6,-42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.IndicadorGo, new cjs.Rectangle(-18.6,-51.2,30,17.8), null);


(lib.Indicador = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5A8494").ss(1,1,1).p("AiLBPIAAidICpAAIBuBOIhqBPg");
	this.shape.setTransform(-3.6,-42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D2EFF7").ss(1,1,1).p("EgktgBLIAAgDMBJbAAAIAACdMhJbAAA");
	this.shape_1.setTransform(241.3,-42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5A8494").s().p("AiLBPIAAidICpAAIBuBOIhpBPg");
	this.shape_2.setTransform(-3.6,-42.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2EFF7").s().p("EgktABPIBphPIhphLIAAgDMBJbAAAIAACdg");
	this.shape_3.setTransform(241.3,-42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Indicador, new cjs.Rectangle(-18.6,-51.2,496,17.8), null);


(lib.BotonPlayPause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.7,1,1).p("AnakrIO1AAQCCAAAACCIAAFTQAACCiCAAIu1AAQiCAAAAiCIAAlTQAAiCCCAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#282923").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31,123,62);


(lib.BotonPlayPause_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FF00").ss(0.7,1,1).p("AnakrIO1AAQCCAAAACCIAAFTQAACCiCAAIu1AAQiCAAAAiCIAAlTQAAiCCCAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282923").s().p("AnaEsQiCAAAAiCIAAlTQAAiCCCAAIO1AAQCCAAAACCIAAFTQAACCiCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31,123,62);


// stage content:
(lib.ExecutionFlow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stage.enableMouseOver();
		this.stop();
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
	this.frame_191 = function() {
		this.factoCont.text = facto.toString();
		this.numCont.text = num.toString();
	}
	this.frame_240 = function() {
		if(num == 0){
			this.gotoAndPlay(409);
		}
	}
	this.frame_263 = function() {
		//alert("hola");
		facto = facto * num;
		this.factoCont.text = facto.toString();
	}
	this.frame_311 = function() {
		num--;
		this.numCont.text = num.toString();
	}
	this.frame_407 = function() {
		if(num > 0){
			this.gotoAndPlay(192);
		}else if (num == 0){
			this.txtWhile.text = "No es mayor que 0";
			this.gotoAndPlay(192);
		}
	}
	this.frame_431 = function() {
		this.txtPrintf.text = "El factorial de 5 es: " + facto;
	}
	this.frame_503 = function() {
		//this.stop();
	}
	this.frame_529 = function() {
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
			
				facto = 1;
				num = 5; 
				root.gotoAndPlay(1);
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(191).call(this.frame_191).wait(49).call(this.frame_240).wait(23).call(this.frame_263).wait(48).call(this.frame_311).wait(96).call(this.frame_407).wait(24).call(this.frame_431).wait(72).call(this.frame_503).wait(26).call(this.frame_529).wait(2));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.botonPlayPause2},{t:this.txtControl2}]},529).wait(2));

	// ActionStopPlay
	this.txtControl = new cjs.Text("PLAY", "12px 'Arial'", "#FFFFFF");
	this.txtControl.name = "txtControl";
	this.txtControl.lineHeight = 15;
	this.txtControl.lineWidth = 42;
	this.txtControl.parent = this;
	this.txtControl.setTransform(1026,61.1);

	this.botonPlayPause = new lib.BotonPlayPause_1();
	this.botonPlayPause.name = "botonPlayPause";
	this.botonPlayPause.parent = this;
	this.botonPlayPause.setTransform(1040.9,67.7,0.579,0.583,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.botonPlayPause, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.botonPlayPause},{t:this.txtControl}]}).to({state:[]},529).wait(2));

	// Fin
	this.instance = new lib.Fin();
	this.instance.parent = this;
	this.instance.setTransform(421,218.9,1,1,0,0,0,0,-2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(503).to({_off:false},0).to({_off:true},27).wait(1));

	// Printf
	this.txtPrintf = new cjs.Text("El factorial de 5 es:  ", "20px 'MAXWELL REGULAR'", "#FFFFFF");
	this.txtPrintf.name = "txtPrintf";
	this.txtPrintf.lineHeight = 23;
	this.txtPrintf.lineWidth = 199;
	this.txtPrintf.parent = this;
	this.txtPrintf.setTransform(758.6,260.7);
	this.txtPrintf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txtPrintf).wait(431).to({_off:false},0).to({_off:true},99).wait(1));

	// WhileText
	this.txtWhile = new cjs.Text("es mayor que 0", "20px 'MAXWELL REGULAR'", "#FFFFFF");
	this.txtWhile.name = "txtWhile";
	this.txtWhile.lineHeight = 23;
	this.txtWhile.lineWidth = 172;
	this.txtWhile.parent = this;
	this.txtWhile.setTransform(819.9,161.4);
	this.txtWhile._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txtWhile).wait(191).to({_off:false},0).to({_off:true},49).wait(291));

	// NumCont
	this.instance_1 = new lib.txtNumCont();
	this.instance_1.parent = this;
	this.instance_1.setTransform(778.9,178.7,1,1,0,0,0,-22.5,3.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.numCont = new cjs.Text("", "17px 'Arial'", "#00FF00");
	this.numCont.name = "numCont";
	this.numCont.lineHeight = 21;
	this.numCont.lineWidth = 14;
	this.numCont.parent = this;
	this.numCont.setTransform(763.9,164.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},143).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.numCont}]},1).to({state:[{t:this.numCont}]},120).to({state:[]},219).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(143).to({_off:false},0).wait(1).to({regY:3.5,y:178.6,alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:1},0).wait(35).to({regY:3.6,y:178.7,alpha:0},0).to({_off:true},120).wait(220));

	// Num
	this.instance_2 = new lib.txtNum();
	this.instance_2.parent = this;
	this.instance_2.setTransform(683.8,174,1,1,0,0,0,-12.5,3.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(143).to({_off:false},0).wait(1).to({regY:3.5,x:687,y:173.9,alpha:0.077},0).wait(1).to({x:690.2,alpha:0.154},0).wait(1).to({x:693.4,alpha:0.231},0).wait(1).to({x:696.6,alpha:0.308},0).wait(1).to({x:699.8,alpha:0.385},0).wait(1).to({x:703,alpha:0.462},0).wait(1).to({x:706.2,alpha:0.538},0).wait(1).to({x:709.4,alpha:0.615},0).wait(1).to({x:712.6,alpha:0.692},0).wait(1).to({x:715.8,alpha:0.769},0).wait(1).to({x:719,alpha:0.846},0).wait(1).to({x:722.2,alpha:0.923},0).wait(1).to({x:725.4,alpha:1},0).wait(156).to({scaleX:0.78,scaleY:0.66,x:728.2,y:172.7},0).wait(1).to({scaleX:1.22,scaleY:1.35,x:722.6,y:175},0).wait(1).to({scaleX:1,scaleY:1,x:725.4,y:173.9},0).wait(215).to({_off:true},1).wait(1));

	// FactoCont
	this.instance_3 = new lib.txtFactoCont();
	this.instance_3.parent = this;
	this.instance_3.setTransform(778.9,139.1,1,1,0,0,0,-22.5,3.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.factoCont = new cjs.Text("", "17px 'Arial'", "#00FF00");
	this.factoCont.name = "factoCont";
	this.factoCont.lineHeight = 21;
	this.factoCont.lineWidth = 19;
	this.factoCont.parent = this;
	this.factoCont.setTransform(770.1,127.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},95).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.factoCont}]},1).to({state:[{t:this.factoCont}]},72).to({state:[]},267).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).wait(1).to({regY:3.5,y:139,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(83).to({_off:true},1).wait(340));

	// Facto
	this.instance_4 = new lib.txtFacto();
	this.instance_4.parent = this;
	this.instance_4.setTransform(676.4,134.1,1,1,0,0,0,-5.5,3.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).wait(1).to({regY:3.5,x:681.1,y:134,alpha:0.083},0).wait(1).to({x:685.7,alpha:0.167},0).wait(1).to({x:690.4,alpha:0.25},0).wait(1).to({x:695.1,alpha:0.333},0).wait(1).to({x:699.7,alpha:0.417},0).wait(1).to({x:704.4,alpha:0.5},0).wait(1).to({x:709.1,alpha:0.583},0).wait(1).to({x:713.7,alpha:0.667},0).wait(1).to({x:718.4,alpha:0.75},0).wait(1).to({x:723.1,alpha:0.833},0).wait(1).to({x:727.7,alpha:0.917},0).wait(1).to({x:732.4,alpha:1},0).wait(157).to({scaleX:0.83,scaleY:0.66,x:733.4,y:132.8},0).wait(1).to({scaleX:1.17,scaleY:1.35,x:731.4,y:135.1},0).wait(1).to({scaleX:1,scaleY:1,x:732.4,y:134},0).wait(263).to({_off:true},1).wait(1));

	// IndicadorGo
	this.instance_5 = new lib.IndicadorGo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(192.1,101.3,1,1,0,0,0,-3.6,-42.3);
	this.instance_5.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:212.3,alpha:0.3},0).wait(1).to({x:232.5},0).wait(1).to({x:252.8},0).wait(1).to({x:273},0).wait(1).to({x:293.2},0).wait(1).to({x:313.4},0).wait(1).to({x:333.6},0).wait(1).to({x:353.8},0).wait(1).to({x:374.1},0).wait(1).to({x:394.3},0).wait(1).to({x:414.5},0).wait(1).to({x:434.7},0).wait(1).to({x:454.9},0).wait(1).to({x:475.1},0).wait(1).to({x:495.4},0).wait(1).to({x:515.6},0).wait(1).to({x:535.8},0).wait(1).to({x:556},0).wait(1).to({x:576.2},0).wait(1).to({x:596.4},0).wait(1).to({x:616.7},0).wait(1).to({x:636.9},0).wait(1).to({x:657.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:106.5,alpha:0.3},0).wait(1).to({y:111.6},0).wait(1).to({y:116.7},0).wait(1).to({y:121.9},0).wait(1).to({y:127.1},0).wait(1).to({y:132.2},0).wait(1).to({y:137.3},0).wait(1).to({y:142.5},0).wait(1).to({y:147.7},0).wait(1).to({y:152.8},0).wait(1).to({y:158},0).wait(12).to({alpha:0.301},0).wait(1).to({x:213.5,y:157.9,alpha:0.3},0).wait(1).to({x:235},0).wait(1).to({x:256.4,y:157.8},0).wait(1).to({x:277.9},0).wait(1).to({x:299.3,y:157.7},0).wait(1).to({x:320.8},0).wait(1).to({x:342.2,y:157.6},0).wait(1).to({x:363.7},0).wait(1).to({x:385.1},0).wait(1).to({x:406.6,y:157.5},0).wait(1).to({x:428},0).wait(1).to({x:449.5,y:157.4},0).wait(1).to({x:470.9},0).wait(1).to({x:492.4,y:157.3},0).wait(1).to({x:513.8},0).wait(1).to({x:535.3},0).wait(1).to({x:556.7,y:157.2},0).wait(1).to({x:578.2},0).wait(1).to({x:599.6,y:157.1},0).wait(1).to({x:621.1},0).wait(1).to({x:642.5,y:157},0).wait(1).to({x:664},0).wait(1).to({x:685.4},0).wait(1).to({x:192.1,y:158,alpha:0.301},0).wait(1).to({y:160.9,alpha:0.3},0).wait(1).to({y:163.8},0).wait(1).to({y:166.7},0).wait(1).to({y:169.6},0).wait(1).to({y:172.6},0).wait(1).to({y:175.5},0).wait(1).to({y:178.4},0).wait(1).to({y:181.3},0).wait(1).to({y:184.3},0).wait(1).to({y:187.2},0).wait(1).to({y:190.1},0).wait(1).to({y:193},0).wait(1).to({y:196},0).wait(11).to({alpha:0.301},0).wait(1).to({x:213.6,alpha:0.3},0).wait(1).to({x:235.1},0).wait(1).to({x:256.5},0).wait(1).to({x:278},0).wait(1).to({x:299.5},0).wait(1).to({x:321},0).wait(1).to({x:342.4},0).wait(1).to({x:363.9},0).wait(1).to({x:385.4},0).wait(1).to({x:406.9},0).wait(1).to({x:428.3},0).wait(1).to({x:449.8},0).wait(1).to({x:471.3},0).wait(1).to({x:492.8},0).wait(1).to({x:514.2},0).wait(1).to({x:535.7},0).wait(1).to({x:557.2},0).wait(1).to({x:578.7},0).wait(1).to({x:600.1},0).wait(1).to({x:621.6},0).wait(1).to({x:643.1},0).wait(1).to({x:664.6},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:197.5,alpha:0.3},0).wait(1).to({y:199.1},0).wait(1).to({y:200.6},0).wait(1).to({y:202.2},0).wait(1).to({y:203.7},0).wait(1).to({y:205.3},0).wait(1).to({y:206.9},0).wait(1).to({y:208.4},0).wait(1).to({y:210},0).wait(1).to({y:211.5},0).wait(1).to({y:213.1},0).wait(1).to({y:214.7},0).wait(12).to({y:214.6,alpha:0.301},0).wait(1).to({x:213.6,alpha:0.3},0).wait(1).to({x:235.1},0).wait(1).to({x:256.5},0).wait(1).to({x:278},0).wait(1).to({x:299.5},0).wait(1).to({x:321},0).wait(1).to({x:342.4},0).wait(1).to({x:363.9},0).wait(1).to({x:385.4},0).wait(1).to({x:406.9},0).wait(1).to({x:428.3},0).wait(1).to({x:449.8},0).wait(1).to({x:471.3},0).wait(1).to({x:492.8},0).wait(1).to({x:514.2},0).wait(1).to({x:535.7},0).wait(1).to({x:557.2},0).wait(1).to({x:578.7},0).wait(1).to({x:600.1},0).wait(1).to({x:621.6},0).wait(1).to({x:643.1},0).wait(1).to({x:664.6},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:217.5,alpha:0.3},0).wait(1).to({y:220.4},0).wait(1).to({y:223.3},0).wait(1).to({y:226.2},0).wait(1).to({y:229.1},0).wait(1).to({y:232},0).wait(1).to({y:234.9},0).wait(1).to({y:237.8},0).wait(1).to({y:240.7},0).wait(1).to({y:243.6},0).wait(1).to({y:246.5},0).wait(1).to({y:249.4},0).wait(1).to({y:252.3},0).wait(11).to({alpha:0.301},0).wait(1).to({x:202.4,alpha:0.3},0).wait(1).to({x:212.7},0).wait(1).to({x:223},0).wait(1).to({x:233.3},0).wait(1).to({x:243.6},0).wait(1).to({x:253.8},0).wait(1).to({x:264.1},0).wait(1).to({x:274.4},0).wait(1).to({x:284.7},0).wait(1).to({x:295},0).wait(1).to({x:305.3},0).wait(1).to({x:315.6},0).wait(1).to({x:325.9},0).wait(1).to({x:336.2},0).wait(1).to({x:346.5},0).wait(1).to({x:356.8},0).wait(1).to({x:367},0).wait(1).to({x:377.3},0).wait(1).to({x:387.6},0).wait(1).to({x:397.9},0).wait(1).to({x:408.2},0).wait(1).to({x:418.5},0).wait(1).to({x:428.8},0).wait(1).to({x:439.1},0).wait(1).to({x:449.4},0).wait(1).to({x:459.7},0).wait(1).to({x:469.9},0).wait(1).to({x:480.2},0).wait(1).to({x:490.5},0).wait(1).to({x:500.8},0).wait(1).to({x:511.1},0).wait(1).to({x:521.4},0).wait(1).to({x:531.7},0).wait(1).to({x:542},0).wait(1).to({x:552.3},0).wait(1).to({x:562.6},0).wait(1).to({x:572.9},0).wait(1).to({x:583.1},0).wait(1).to({x:593.4},0).wait(1).to({x:603.7},0).wait(1).to({x:614},0).wait(1).to({x:624.3},0).wait(1).to({x:634.6},0).wait(1).to({x:644.9},0).wait(1).to({x:655.2},0).wait(1).to({x:665.5},0).wait(1).to({x:675.8},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:253.9,alpha:0.3},0).wait(1).to({y:255.6},0).wait(1).to({y:257.2},0).wait(1).to({y:258.8},0).wait(1).to({y:260.4},0).wait(1).to({y:262.1},0).wait(1).to({y:263.7},0).wait(1).to({y:265.3},0).wait(1).to({y:266.9},0).wait(1).to({y:268.6},0).wait(1).to({y:270.2},0).wait(1).to({y:271.8},0).wait(11).to({alpha:0.301},0).wait(1).to({x:213.6,alpha:0.3},0).wait(1).to({x:235.1},0).wait(1).to({x:256.5},0).wait(1).to({x:278},0).wait(1).to({x:299.5},0).wait(1).to({x:321},0).wait(1).to({x:342.4},0).wait(1).to({x:363.9},0).wait(1).to({x:385.4},0).wait(1).to({x:406.9},0).wait(1).to({x:428.3},0).wait(1).to({x:449.8},0).wait(1).to({x:471.3},0).wait(1).to({x:492.8},0).wait(1).to({x:514.2},0).wait(1).to({x:535.7},0).wait(1).to({x:557.2},0).wait(1).to({x:578.7},0).wait(1).to({x:600.1},0).wait(1).to({x:621.6},0).wait(1).to({x:643.1},0).wait(1).to({x:664.6},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:273.5,alpha:0.3},0).wait(1).to({y:275.3},0).wait(1).to({y:277},0).wait(1).to({y:278.7},0).wait(1).to({y:280.5},0).wait(1).to({y:282.2},0).wait(1).to({y:283.9},0).wait(1).to({y:285.7},0).wait(1).to({y:287.4},0).wait(1).to({y:289.1},0).wait(1).to({y:290.9},0).wait(1).to({y:292.6},0).wait(12).to({alpha:0.301},0).wait(1).to({x:213.6,alpha:0.3},0).wait(1).to({x:235.1},0).wait(1).to({x:256.5},0).wait(1).to({x:278},0).wait(1).to({x:299.5},0).wait(1).to({x:321},0).wait(1).to({x:342.4},0).wait(1).to({x:363.9},0).wait(1).to({x:385.4},0).wait(1).to({x:406.9},0).wait(1).to({x:428.3},0).wait(1).to({x:449.8},0).wait(1).to({x:471.3},0).wait(1).to({x:492.8},0).wait(1).to({x:514.2},0).wait(1).to({x:535.7},0).wait(1).to({x:557.2},0).wait(1).to({x:578.7},0).wait(1).to({x:600.1},0).wait(1).to({x:621.6},0).wait(1).to({x:643.1},0).wait(1).to({x:664.6},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:294.1,alpha:0.3},0).wait(1).to({y:295.5},0).wait(1).to({y:297},0).wait(1).to({y:298.5},0).wait(1).to({y:299.9},0).wait(1).to({y:301.4},0).wait(1).to({y:302.8},0).wait(1).to({y:304.3},0).wait(1).to({y:305.8},0).wait(1).to({y:307.2},0).wait(1).to({y:308.7},0).wait(1).to({y:310.2},0).wait(12).to({alpha:0.301},0).wait(1).to({x:213.6,alpha:0.3},0).wait(1).to({x:235.1},0).wait(1).to({x:256.5},0).wait(1).to({x:278},0).wait(1).to({x:299.5},0).wait(1).to({x:321},0).wait(1).to({x:342.4},0).wait(1).to({x:363.9},0).wait(1).to({x:385.4},0).wait(1).to({x:406.9},0).wait(1).to({x:428.3},0).wait(1).to({x:449.8},0).wait(1).to({x:471.3},0).wait(1).to({x:492.8},0).wait(1).to({x:514.2},0).wait(1).to({x:535.7},0).wait(1).to({x:557.2},0).wait(1).to({x:578.7},0).wait(1).to({x:600.1},0).wait(1).to({x:621.6},0).wait(1).to({x:643.1},0).wait(1).to({x:664.6},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:305.3,alpha:0.3},0).wait(1).to({y:300.5},0).wait(1).to({y:295.7},0).wait(1).to({y:290.9},0).wait(1).to({y:286},0).wait(1).to({y:281.2},0).wait(1).to({y:276.4},0).wait(1).to({y:271.6},0).wait(1).to({y:266.8},0).wait(1).to({y:261.9},0).wait(1).to({y:257.1},0).wait(1).to({y:252.3},0).wait(12).to({alpha:0.301},0).wait(1).to({alpha:0.3},0).wait(1).to({y:258.2},0).wait(1).to({y:264.1},0).wait(1).to({y:270},0).wait(1).to({y:275.9},0).wait(1).to({y:281.8},0).wait(1).to({y:287.7},0).wait(1).to({y:293.6},0).wait(1).to({y:299.5},0).wait(1).to({y:305.4},0).wait(1).to({y:311.3},0).wait(1).to({y:317.2},0).wait(1).to({y:323.1},0).wait(1).to({y:329},0).wait(10).to({alpha:0.301},0).wait(1).to({x:213.6,alpha:0.3},0).wait(1).to({x:235.1},0).wait(1).to({x:256.5},0).wait(1).to({x:278},0).wait(1).to({x:299.5},0).wait(1).to({x:321},0).wait(1).to({x:342.4},0).wait(1).to({x:363.9},0).wait(1).to({x:385.4},0).wait(1).to({x:406.9},0).wait(1).to({x:428.3},0).wait(1).to({x:449.8},0).wait(1).to({x:471.3},0).wait(1).to({x:492.8},0).wait(1).to({x:514.2},0).wait(1).to({x:535.7},0).wait(1).to({x:557.2},0).wait(1).to({x:578.7},0).wait(1).to({x:600.1},0).wait(1).to({x:621.6},0).wait(1).to({x:643.1},0).wait(1).to({x:664.6},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).wait(1).to({y:330.8,alpha:0.3},0).wait(1).to({y:332.6},0).wait(1).to({y:334.4},0).wait(1).to({y:336.2},0).wait(1).to({y:338},0).wait(1).to({y:339.9},0).wait(1).to({y:341.7},0).wait(1).to({y:343.5},0).wait(1).to({y:345.3},0).wait(1).to({y:347.1},0).wait(1).to({y:349},0).wait(13).to({alpha:0.301},0).wait(1).to({x:213.6,alpha:0.3},0).wait(1).to({x:235.1},0).wait(1).to({x:256.5},0).wait(1).to({x:278},0).wait(1).to({x:299.5},0).wait(1).to({x:321},0).wait(1).to({x:342.4},0).wait(1).to({x:363.9},0).wait(1).to({x:385.4},0).wait(1).to({x:406.9},0).wait(1).to({x:428.3},0).wait(1).to({x:449.8},0).wait(1).to({x:471.3},0).wait(1).to({x:492.8},0).wait(1).to({x:514.2},0).wait(1).to({x:535.7},0).wait(1).to({x:557.2},0).wait(1).to({x:578.7},0).wait(1).to({x:600.1},0).wait(1).to({x:621.6},0).wait(1).to({x:643.1},0).wait(1).to({x:664.6},0).wait(1).to({x:686.1},0).wait(1).to({x:192.1,alpha:0.301},0).to({_off:true},27).wait(1));

	// Indicador
	this.instance_6 = new lib.Indicador();
	this.instance_6.parent = this;
	this.instance_6.setTransform(425,326.8,1,1,0,0,0,229.3,183.2);
	this.instance_6.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:-42.3,y:101.3,alpha:0.3},0).wait(24).to({y:106.5},0).wait(1).to({y:111.6},0).wait(1).to({y:116.7},0).wait(1).to({y:121.9},0).wait(1).to({y:127.1},0).wait(1).to({y:132.2},0).wait(1).to({y:137.3},0).wait(1).to({y:142.5},0).wait(1).to({y:147.7},0).wait(1).to({y:152.8},0).wait(1).to({y:158},0).wait(37).to({y:160.9},0).wait(1).to({y:163.8},0).wait(1).to({y:166.7},0).wait(1).to({y:169.6},0).wait(1).to({y:172.6},0).wait(1).to({y:175.5},0).wait(1).to({y:178.4},0).wait(1).to({y:181.3},0).wait(1).to({y:184.3},0).wait(1).to({y:187.2},0).wait(1).to({y:190.1},0).wait(1).to({y:193},0).wait(1).to({y:196},0).wait(36).to({y:197.5},0).wait(1).to({y:199.1},0).wait(1).to({y:200.6},0).wait(1).to({y:202.2},0).wait(1).to({y:203.7},0).wait(1).to({y:205.3},0).wait(1).to({y:206.8},0).wait(1).to({y:208.4},0).wait(1).to({y:209.9},0).wait(1).to({y:211.5},0).wait(1).to({y:213},0).wait(1).to({y:214.6},0).wait(37).to({y:217.5},0).wait(1).to({y:220.4},0).wait(1).to({y:223.3},0).wait(1).to({y:226.2},0).wait(1).to({y:229.1},0).wait(1).to({y:232},0).wait(1).to({y:234.9},0).wait(1).to({y:237.8},0).wait(1).to({y:240.7},0).wait(1).to({y:243.6},0).wait(1).to({y:246.5},0).wait(1).to({y:249.4},0).wait(1).to({y:252.3},0).wait(61).to({y:253.9},0).wait(1).to({y:255.6},0).wait(1).to({y:257.2},0).wait(1).to({y:258.8},0).wait(1).to({y:260.4},0).wait(1).to({y:262.1},0).wait(1).to({y:263.7},0).wait(1).to({y:265.3},0).wait(1).to({y:266.9},0).wait(1).to({y:268.6},0).wait(1).to({y:270.2},0).wait(1).to({y:271.8},0).wait(36).to({y:273.5},0).wait(1).to({y:275.3},0).wait(1).to({y:277},0).wait(1).to({y:278.7},0).wait(1).to({y:280.5},0).wait(1).to({y:282.2},0).wait(1).to({y:283.9},0).wait(1).to({y:285.7},0).wait(1).to({y:287.4},0).wait(1).to({y:289.1},0).wait(1).to({y:290.9},0).wait(1).to({y:292.6},0).wait(37).to({y:294.1},0).wait(1).to({y:295.5},0).wait(1).to({y:297},0).wait(1).to({y:298.5},0).wait(1).to({y:299.9},0).wait(1).to({y:301.4},0).wait(1).to({y:302.8},0).wait(1).to({y:304.3},0).wait(1).to({y:305.8},0).wait(1).to({y:307.2},0).wait(1).to({y:308.7},0).wait(1).to({y:310.2},0).wait(37).to({y:305.3},0).wait(1).to({y:300.5},0).wait(1).to({y:295.7},0).wait(1).to({y:290.9},0).wait(1).to({y:286},0).wait(1).to({y:281.2},0).wait(1).to({y:276.4},0).wait(1).to({y:271.6},0).wait(1).to({y:266.8},0).wait(1).to({y:261.9},0).wait(1).to({y:257.1},0).wait(1).to({y:252.3},0).wait(14).to({y:258.2},0).wait(1).to({y:264.1},0).wait(1).to({y:270},0).wait(1).to({y:275.9},0).wait(1).to({y:281.8},0).wait(1).to({y:287.7},0).wait(1).to({y:293.6},0).wait(1).to({y:299.5},0).wait(1).to({y:305.4},0).wait(1).to({y:311.3},0).wait(1).to({y:317.2},0).wait(1).to({y:323.1},0).wait(1).to({y:329},0).wait(35).to({y:330.8},0).wait(1).to({y:332.6},0).wait(1).to({y:334.4},0).wait(1).to({y:336.2},0).wait(1).to({y:338},0).wait(1).to({y:339.9},0).wait(1).to({y:341.7},0).wait(1).to({y:343.5},0).wait(1).to({y:345.3},0).wait(1).to({y:347.1},0).wait(1).to({y:349},0).wait(63).to({_off:true},1).wait(1));

	// Layout
	this.instance_7 = new lib.txtSalida();
	this.instance_7.parent = this;
	this.instance_7.setTransform(726.9,229.1,1,1,0,0,0,-11,0);

	this.instance_8 = new lib.txtVariables();
	this.instance_8.parent = this;
	this.instance_8.setTransform(737.9,96.1);

	this.instance_9 = new lib.lines();
	this.instance_9.parent = this;
	this.instance_9.setTransform(889.9,218.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[]},530).wait(1));

	// Background
	this.instance_10 = new lib.facto();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(531));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,1366,768);
// library properties:
lib.properties = {
	id: '4F5FC40C13FEE44092CBDF95BFBE9EB9',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/facto.jpg", id:"facto"}
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
an.compositions['4F5FC40C13FEE44092CBDF95BFBE9EB9'] = {
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