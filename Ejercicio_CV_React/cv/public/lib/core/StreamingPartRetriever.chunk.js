/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[13],{380:function(ia,ca,f){f.r(ca);var ba=f(1),y=f(0);f.n(y);var ha=f(2),ea=f(130);ia=f(45);var da=f(83),aa=f(217),x=f(61),w=f(216);f=f(338);var h=window,r=function(){function e(e,f,h){var n=-1===e.indexOf("?")?"?":"&";switch(f){case x.a.NEVER_CACHE:this.url=e+n+"_="+Object(y.uniqueId)();break;default:this.url=e}this.Re=h;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=w.a.NOT_STARTED}e.prototype.start=function(f,h){var n=this,r=this,x=this.request,y;r.rv=0;f&&Object.keys(f).forEach(function(e){n.request.setRequestHeader(e,f[e])});h&&(this.request.withCredentials=h);this.RB=setInterval(function(){var f=0===window.document.URL.indexOf("file:///");f=200===x.status||f&&0===x.status;
if(x.readyState!==w.b.DONE||f){try{x.responseText}catch(sa){return}r.rv<x.responseText.length&&(y=r.pba())&&r.trigger(e.Events.DATA,[y]);0===x.readyState&&(clearInterval(r.RB),r.trigger(e.Events.DONE))}else clearInterval(r.RB),r.trigger(e.Events.DONE,["Error received return status "+x.status])},1E3);this.request.send(null);this.status=w.a.STARTED};e.prototype.pba=function(){var f=this.request,n=f.responseText;if(0!==n.length)if(this.rv===n.length)clearInterval(this.RB),this.trigger(e.Events.DONE);
else return n=Math.min(this.rv+3E6,n.length),f=h.GQ(f,this.rv,!0,n),this.rv=n,f};e.prototype.abort=function(){clearInterval(this.RB);var f=this;this.request.onreadystatechange=function(){Object(ha.i)("StreamingRequest aborted");f.status=w.a.ABORTED;return f.trigger(e.Events.ABORTED)};this.request.abort()};e.prototype.finish=function(){var f=this;this.request.onreadystatechange=function(){f.status=w.a.SUCCESS;return f.trigger(e.Events.DONE)};this.request.abort()};e.Events={DONE:"done",DATA:"data",
ABORTED:"aborted"};return e}();Object(ia.a)(r);var e;(function(e){e[e.LOCAL_HEADER=0]="LOCAL_HEADER";e[e.FILE=1]="FILE";e[e.CENTRAL_DIR=2]="CENTRAL_DIR"})(e||(e={}));var n=function(f){function h(){var h=f.call(this)||this;h.buffer="";h.state=e.LOCAL_HEADER;h.aK=4;h.bl=null;h.Qr=ea.c;h.um={};return h}Object(ba.c)(h,f);h.prototype.jba=function(f){var n;for(f=this.buffer+f;f.length>=this.Qr;)switch(this.state){case e.LOCAL_HEADER:this.bl=n=this.tba(f.slice(0,this.Qr));if(n.ys!==ea.g)throw Error("Wrong signature in local header: "+
n.ys);f=f.slice(this.Qr);this.state=e.FILE;this.Qr=n.OE+n.kp+n.yu+this.aK;this.trigger(h.Events.HEADER,[n]);break;case e.FILE:this.bl.name=f.slice(0,this.bl.kp);this.um[this.bl.name]=this.bl;n=this.Qr-this.aK;var r=f.slice(this.bl.kp+this.bl.yu,n);this.trigger(h.Events.FILE,[this.bl.name,r,this.bl.eF]);f=f.slice(n);if(f.slice(0,this.aK)===ea.h)this.state=e.LOCAL_HEADER,this.Qr=ea.c;else return this.state=e.CENTRAL_DIR,!0}this.buffer=f;return!1};h.Events={HEADER:"header",FILE:"file"};return h}(aa.a);
Object(ia.a)(n);ia=function(e){function f(f,h,w,x,y){w=e.call(this,f,w,x)||this;w.url=f;w.stream=new r(f,h);w.Kd=new n;w.qT=window.createPromiseCapability();w.ST={};w.Re=y;return w}Object(ba.c)(f,e);f.prototype.fw=function(e){var f=this;this.request([this.Ei,this.Wj,this.Di]);this.stream.addEventListener(r.Events.DATA,function(h){try{if(f.Kd.jba(h))return f.stream.finish()}catch(ma){throw f.stream.abort(),f.vu(ma),e(ma),ma;}});this.stream.addEventListener(r.Events.DONE,function(h){f.Qaa=!0;f.qT.resolve();
h&&(f.vu(h),e(h))});this.Kd.addEventListener(n.Events.HEADER,Object(y.bind)(this.RT,this));this.Kd.addEventListener(n.Events.FILE,Object(y.bind)(this.Jba,this));return this.stream.start(this.Re,this.withCredentials)};f.prototype.DQ=function(e){var f=this;this.qT.promise.then(function(){e(Object.keys(f.Kd.um))})};f.prototype.Zm=function(){return!0};f.prototype.request=function(e){var f=this;this.Qaa&&e.forEach(function(e){f.ST[e]||f.Sfa(e)})};f.prototype.RT=function(){};f.prototype.abort=function(){this.stream&&
this.stream.abort()};f.prototype.Sfa=function(e){this.trigger(da.a.Events.PART_READY,[{ab:e,error:"Requested part not found",Ph:!1,Nf:!1}])};f.prototype.Jba=function(e,f,h){this.ST[e]=!0;this.trigger(da.a.Events.PART_READY,[{ab:e,data:f,Ph:!1,Nf:!1,error:null,Vc:h}])};return f}(da.a);Object(f.a)(ia);Object(f.b)(ia);ca["default"]=ia}}]);}).call(this || window)
