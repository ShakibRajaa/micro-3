let interval = null ;
let total=0;
let flag=0;
function totalValue(){
    const hr=parseInt(document.getElementById("hours").value);
    const mt=parseInt(document.getElementById("minutes").value);
    const sc=parseInt(document.getElementById("seconds").value);
    
    total= hr*3600 + mt*60 + sc ;
}
function timer(){
    totalValue();
    total--;
    if(total>=0){
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const seconds= total % 60;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value=minutes;
        document.getElementById("seconds").value=seconds;
    }
    else{
        clearInterval(interval);
        document.getElementById("sound").play();
        swal("Hey Time's Up!", "Get Ready For Work");
        setTimeout(()=>{
            document.getElementById("sound").pause();
        },3000);
        reset();
    }
        
         
}
function start()
{
    interval = setInterval(timer, 1000);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    document.getElementById("hours").value = 00;
    document.getElementById("minutes").value=00;
    document.getElementById("seconds").value=00;

}
