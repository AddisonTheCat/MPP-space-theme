//time button
var a=(new Date).toLocaleTimeString();setInterval(function(){a!==(new Date).toLocaleTimeString()&&(a=(new Date).toLocaleTimeString(),setTimeout(function(){document.getElementById("timebtn").childNodes[0].nodeValue=(new Date).toLocaleTimeString()},0))},0);$("body").append('<div id="timebtn" class="ugly-button" style="position: fixed; bottom: 17.5px !important; left: 1120px !important; z-index: 500;">0:0:0 PM/AM</div>');$("#timebtn").on("click",function(b){MPP.chat.send((new Date).toLocaleTimeString())});
//backrund and button stuff
for (let i = 0; i < 10; i = i + 0.1) {setTimeout(function() {eval('Array.from(document.querySelectorAll("*")).forEach(el => {$(el).css({"border-radius": "' + i + 'px", "-webkit-border-radius": "' + i + 'px", "-moz-border-radius": "' + i + 'px" })})')}, i)}
setInterval(() => {
setTimeout(() => {
Array.from(document.querySelectorAll("*")).forEach(el => {$(el).css({"border-radius": "10px", "-webkit-border-radius": "10px", "-moz-border-radius": "10px" });)})
}, 3000);
document.body.style = `background-image: url('https://i.ibb.co/5WztDgx/space-earth.jpg'); background-position: 45% 55%; background-size: cover; backdrop-effect: blur(0px);`
//sort names by color
var arr=$("#names .name");arr.sort(function(a,b){a=a.style.backgroundColor;b=b.style.backgroundColor;return a>b?1:a<b?-1:0});
}, 1);
//chat buffer
class ChatBuffer {
constructor() {
this.messagesInPeriod = 0;
this.maxMessagesInPeriod = 4;
this.periodDuration = 6250;
this.buffer = [];
}
sendMessage(message) {
this.buffer.push(message);
if (this.messagesInPeriod < this.maxMessagesInPeriod) {
this.sendFromBuffer();
}
}
sendFromBuffer() {
if (this.buffer.length === 0) return;
this.messagesInPeriod ;
MPP.client.sendArray([{m: 'a', message:this.buffer[0]}]);
this.buffer.shift();
setTimeout(() => {
this.messagesInPeriod--;
this.sendFromBuffer();
}, this.periodDuration);
}
setParams(params) {
this.maxMessagesInPeriod = params.max;
this.periodDuration = params.period;
}
}
const chatBuffer = new ChatBuffer();
MPP.chat.send = (msg) => {
chatBuffer.sendMessage(msg)
}
