const cur_page = document.querySelector('input[name="bot_nav_but"]:checked').value;
const background_block = document.getElementById('selected');

background_block.style.left = cur_page * 25 + '%';