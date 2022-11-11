$(function() {
	$(this).impulse();
});

(function($) {
	$.fn.impulse = function(options) {
		var gate = $(window),
		set = $.extend(true, {
			target: $(),
			delay: false
		}, $.fn.impulse.default, options),

		selector = this, object = set.target, gist, area = {}, edge = [],
		annul, entity, brink = [], outset = [], quit = [], flow, turned = 0,
		interrupt, kinetic, morph = [], hit, way, speed, destination = [],
		momentum, initial, bound;

		if (window.requestAnimationFrame) var neoteric = true;
		elementAnalysis();
		detectOverflow();

		selector.each(function(index) {
			$(this).data('impulse', $.extend({}, set));
			this.addEventListener('wheel', function(act) {
				var use = $(this).data('impulse'),
				loom = act.deltaY/Math.abs(act.deltaY);
				hit = index;
				if (use.target) delete use.target;
				if (use.keen == false) return;
				if (annul) return denyRise(act);
				else if (use.delay == true) annul = true;
				if (gist && selector.length > 1) {
					entity = $(this);
					brink[0] = edge[hit];
				} else {
					entity = object;
					brink = edge;
				}

				entity.each(function(cue) {
					var genesis = outset[cue] = $(this).scrollTop();
					if (loom < 0 && genesis == 0 || loom > 0 && genesis == brink[cue]) quit[cue] = true;
					else quit[cue] = false;
				});

				if (ceaseOperation()) {
					annul = false;
					if (use.occur == true) return;
					else return denyRise(act);
				}

				if (flow != loom) turned = 1;
				else turned = Math.min(use.curb, turned+1);
				if (use.fluid && turned == 1) morph[hit] = 'curve';
				else if (turned) morph[hit] = use.effect;

				interrupt = false;
				kinetic = loom;
				way = loom*use.range*Math.pow(use.leap, turned-1);
				speed = use.tempo*Math.pow(use.sloth, turned-1);

				entity.each(function(order) {
					destination[order] = outset[order]+way;
				});

				if (neoteric) {
					if (momentum) cancelAnimationFrame(momentum);
					initial = Date.now();
					momentum = requestAnimationFrame(streamCore);
				} else inciteSource();
				denyRise(act);
			}, hasQuiet() ? {passive: false} : false);
		});

		gate.resize(function() {
			clearTimeout(bound);
			bound = setTimeout(detectOverflow, 100);
		});
		return this;

		function denyRise(jab) {
			jab.preventDefault();
			jab.stopPropagation();
		}

		function streamCore() {
			flow = kinetic;
			var present = Date.now(),
			elapsed = Math.min(present-initial, speed),
			advance = elapsed/speed,
			increase = $.easing[morph[hit]](advance, elapsed, 0, 1, speed);
			entity.each(function(key) {
				if (!quit[key]) {
					var goal = outset[key]+increase*way;
					$(this).scrollTop(goal);
					checkLimits($(this), key, advance);
				}
			});
			if (advance < 1 && !interrupt) momentum = requestAnimationFrame(streamCore);
			else annul = false;
		}

		function inciteSource() {
			flow = kinetic;
			entity.each(function(beat) {
				if (!quit[beat]) {
					$(this).stop().animate({scrollTop: destination[beat]}, {
						duration: speed,
						easing: morph[hit],
						progress: function(current, sequence) {checkLimits($(this), beat, sequence)},
						complete: function() {annul = false}
					});
				}
			});
		}

		function checkLimits(essence, rank, factor) {
			if (100*factor >= set.reset) turned = 0;
			if (onFringe(essence, rank)) {
				quit[rank] = true;
				if (!neoteric) essence.stop(true, true);
				if (ceaseOperation()) {
					interrupt = true;
					turned = 0;
				}
			}
		}

		function onFringe(matter, cipher) {
			var put = matter.scrollTop(),
			above = put == 0 && destination[cipher] < 0,
			below = put == brink[cipher] && destination[cipher] > brink[cipher];
			return above || below;
		}

		function ceaseOperation() {
			return quit.every(function(flag) {return flag});
		}

		function elementAnalysis() {
			var item = $(), main;
			if (!object.length) {
				gist = true;
				object = selector;
			}
			
			object.each(function() {
				if (topLevel(this)) {
					if (!main) {
						if (neoteric) item = item.add(gate);
						else item = item.add(baseTag());
						main = true;
					}
				} else item = item.add($(this));
			});
			set.target = object = item;
			object.each(function(zest) {
				if (topLevel(this)) area[zest] = 'hub';
				else area[zest] = 'sub';
			});
			if (gist && selector.length != object.length) selector = object;
		}

		function topLevel(sample) {
			var peak = [window,document,'HTML','BODY'];
			return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
		}

		function baseTag() {
			var origin = gate.scrollTop();
			gate.scrollTop(1);
			if ($('html').scrollTop()) var root = $('html');
			else if ($('body').scrollTop()) root = $('body');
			else root = $('html, body');
			gate.scrollTop(origin);
			return root;
		}

		function detectOverflow() {
			object.each(function(unit) {
				if (area[unit] == 'hub') edge[unit] = $(document).height()-gate.height();
				else edge[unit] = this.scrollHeight-$(this).height();
			});
		}

		function hasQuiet() {
			var cold = false,
			hike = function() {};
			try {
				var aid = Object.defineProperty({}, 'passive', {
					get: function() {cold = true}
				});
				window.addEventListener('test', hike, aid);
				window.removeEventListener('test', hike, aid);
			} catch(e) {}
			return cold;
		}
	};

	$.fn.impulse.default = {
		range: 250,
		leap: 1.35,
		tempo: 700,
		sloth: 1.1,
		curb: 5,
		reset: 85,
		effect: 'easeOutCubic',
		fluid: false,
		occur: true,
		keen: true
	};
}(jQuery));

jQuery.easing['curve']=jQuery.easing['swing'];
jQuery.extend(jQuery.easing,{default:'easeOutQuad',swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.default](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});