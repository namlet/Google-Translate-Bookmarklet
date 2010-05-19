javascript:(function(){
	d=document;
	function tn(x) {return d.getElementsByTagName(x);}
	function c(e) { 
		return d.createElementNS ? 
		d.createElementNS('http://www.w3.org/1999/xhtml',e): 
		d.createElement(e); 
	}
	function a(p,e) {p.appendChild(e);}
	
	var gt = c("script");
	gt.setAttribute("type","text/javascript");
	gt.setAttribute("src","http://www.google.com/jsapi");
	a(tn("head")[0],gt);
	
	function r() {
	    if (R.D) return false;
	    if (window.google) {
			clearInterval(R.t);
	        R.t = null; 
	        for (var i=0;i<R.q.length;i++)
	        	R.q[i](); 
	        R.q = null;
	        R.D = true;
	}	}
	function R(f) { 
		if (R.D) return f();
		if (R.t) R.q.push(f); else {
		    R.q = [f];
		    R.t = setInterval(r, 13);
	}	}
	
	function dT() {
		var st="";
		if (window.getSelection) { st=window.getSelection(); }
		else if (document.getSelection) { st=document.getSelection(); }
		else if (document.selection) { st=document.selection.createRange().text; }
		else return;
		google.language.translate(st+"", "", "en", function(result) {
		  if (!result.error) {
		    alert(result.translation);
		  }
		});
	}
	
	R(function(){ google.load("language", "1", {"callback":dT}) });
						
})()