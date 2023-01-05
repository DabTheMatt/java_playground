console.log("in");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

var dothis = function(whichone, color){
  whichone.onmouseover = function(){
    this.style.color = color;
    whichone.onmouseout = function(){
      this.style.color = "black";
    }
  }; 
}
dothis(div1, "red");
dothis(div2, "orange");

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if(mutation.attributeName === 'style'){
      console.log("style change");
    }
  });    
});

// Notify me of style changes
var observerConfig = {
	attributes: true, 
  attributeFilter: ["style"]
};

var targetNode = document.getElementById('div1');


observer.observe(targetNode, observerConfig);