var emoji = document.querySelector("#emoji");
emoji.addEventListener('mouseover' , ()=>{
    emoji.src = "sad.jpg";
})
emoji.addEventListener('mouseout' , ()=>{
    emoji.src = "smile.jpg";
})