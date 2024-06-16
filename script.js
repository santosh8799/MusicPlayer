var audio=document.querySelector("audio")
var start=document.querySelector(".start")
var pause=document.querySelector(".pause")
var previous=document.querySelector(".previous")
var next=document.querySelector(".next")
start.addEventListener("click",function(){
    audio.play();
    pause.classList.remove("hidden")
    start.classList.add("hidden")
});
pause.addEventListener("click",function(){
    audio.pause();
    pause.classList.add("hidden")
    start.classList.remove("hidden")
});
previous.addEventListener("click",function(){
    starthandle();
});
next.addEventListener("click",function(){
    audio.pause();
    audio.currentTime=10;
    audio.play();

});
function starthandle(){
    audio.pause();
    audio.currentTime=0;
    audio.play();
}