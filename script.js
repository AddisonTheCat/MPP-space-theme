var a = (new Date).toLocaleTimeString();
setInterval(function() {
a !== (new Date).toLocaleTimeString() && (a = (new Date).toLocaleTimeString(), setTimeout(function() {
document.getElementById("timebtn").childNodes[0].nodeValue = (new Date).toLocaleTimeString()
}, 0))
}, 0);
$("body").append('<div id="timebtn" class="ugly-button" style="position: fixed; bottom: 17.5px !important; left: 1120px !important; z-index: 500;">0:0:0 PM/AM</div>');
$("#timebtn").on("click", function(b) {
MPP.chat.send((new Date).toLocaleTimeString())
});
setInterval(() => {
setTimeout(() => {
Array.from(document.querySelectorAll("*")).forEach(el => {
$(el).css({
"border-radius": "10px",
"-webkit-border-radius": "10px",
"-moz-border-radius": "10px"
})
})
}, 3000);
$("#room").css({
background: "rgba(0, 0, 0, 0.5)"
});
$("#room .more").css({
background: "rgba(0, 0, 0, 0.5)"
});
$("#room .expand").css({
background: "rgba(0, 0, 0, 0.5)"
});
$("#room .more .info:hover").css({
background: "rgba(0, 0, 0, 0.5)"
});
$("#room .more .new").css({
background: "rgba(0, 0, 0, 0.5)"
});
$("#room .more").css({
background: "rgba(0, 0, 0, 0.5)"
});
$("#room .more .new:hover").css({
background: "rgba(0, 0, 0, 0.5);"
});
$(".ugly-button").css({
background: "rgba(0, 0, 0, 0)"
});
$("#room .more .new:hover").css({
background: "rgba(0, 0, 0, 0.5)"
});
$("#room .more .new:hover").css({
background: "rgba(0, 0, 0, 0.5)"
});
$(".notification-body").css({
background: "rgba(0, 0, 0, 0.5)",
"backdrop-filter": "blur(2px)"
});
$(".notification .x:hover").css({
background: "rgba(0, 0, 0, 0.5)"
});
$(".notification-body").css({
background: "rgba(0, 0, 0, 0.5)",
"backdrop-filter": "blur(2px)"
});
$(".ugly-button .stuck").css({
background: "rgba(0, 0, 0, 0.5)"
});
document.body.style = `background-image: url('https://i.ibb.co/5WztDgx/space-earth.jpg'); background-position: 25% 75%; background-size: cover; backdrop-effect: blur(2px);`
}, 200);
for (let i = 0; i < 10; i = i + 0.5) {
setTimeout(function() {
eval('Array.from(document.querySelectorAll("*")).forEach(el=> {$(el).css({"border-radius": "' + i + 'px", "-webkit-border-radius": "' + i + 'px", "-moz-border-radius": "' + i + 'px" })})')
}, i)
}
