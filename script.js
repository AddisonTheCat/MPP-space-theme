var a=(new Date).toLocaleTimeString();setInterval(function(){a!==(new Date).toLocaleTimeString()&&(a=(new Date).toLocaleTimeString(),setTimeout(function(){document.getElementById("timebtn").childNodes[0].nodeValue=(new Date).toLocaleTimeString()},0))},0);$("body").append('<div id="timebtn" class="ugly-button" style="position: fixed; bottom: 17.5px !important; left: 1120px !important; z-index: 500;">0:0:0 PM/AM</div>');$("#timebtn").on("click",function(b){MPP.chat.send((new Date).toLocaleTimeString())});
for (let i = 0; i < 10; i = i + 0.1) {setTimeout(function() {eval('Array.from(document.querySelectorAll("*")).forEach(el => {$(el).css({"border-radius": "' + i + 'px", "-webkit-border-radius": "' + i + 'px", "-moz-border-radius": "' + i + 'px" })})')}, i)}
setInterval(() => {document.body.style = `background-image: url('https://i.ibb.co/5WztDgx/space-earth.jpg'); background-position: 25% 75%; background-size: cover; backdrop-effect: blur(0px);`}, 1);
