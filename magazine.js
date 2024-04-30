let tg=window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor='';
tg.MainButton.color='#5F9EA0';

let item="";
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");

btn1.onclick=()=>{
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали билет на этот матч!");
        item="ЦСКА:Спартак";
        tg.MainButton.show();
    }
}
btn2.onclick=()=>{
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали билет на этот матч!");
        item="Зенит:Спартак";
        tg.MainButton.show();
    }
}
btn3.onclick=()=>{
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали билет на этот матч!");
        item="Зенит:Сочи";
        tg.MainButton.show();
    }
}
btn4.onclick=()=>{
    if(tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали билет на этот матч!");
        item="Спартак:Ахмат";
        tg.MainButton.show();
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
})
