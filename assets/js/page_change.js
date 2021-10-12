const background_block = document.getElementById('selected');
const bot_menu_icon = document.querySelectorAll('.bot_menu_icon');
const pages = document.querySelectorAll('.container');
$('input[name="bot_nav_but"]:radio').change(function (){
    cur = $("input[name='bot_nav_but']:checked").val();
    // background_block.style.left = `${cur * 25}%`;
    // if(cur == 0){
    //     background_block.style.borderRadius = "0px 0px 20px 0px"
    // } else if (cur == 1 || cur == 2){
    //     background_block.style.borderRadius = "0px 0px 20px 20px"
    // } else{
    //     background_block.style.borderRadius = "0px 0px 0px 20px"
    // }
    background_block.style.left = `${2.5 + cur * 25}%`;
    for(var i = 0; i < 4; i++){
        if(i == cur){
            bot_menu_icon[i].setAttribute("src","/assets/icons/bell_white.svg");
            pages[i].style.visibility = "visible";
        }
        else{
            bot_menu_icon[i].setAttribute("src","/assets/icons/bell.svg");
            pages[i].style.visibility = "hidden";
        }
    }
});