const button=document.querySelector('button');
const popup=document.querySelector('.popup-wrapper');
const close=document.querySelector('.popup-close');
const popupcont=document.querySelector('.popup-content');

button.addEventListener('click',()=>{
    popup.style.display='block';
});

close.addEventListener('click',()=>
{
    popup.style.display='none';
});

popup.addEventListener('click',(e)=>
{
    if (e.target === popup) {
        popup.style.display = 'none';
    }
})

//ye neeche wale code se bs bahr aur x pr click se ho toh prevention code
//but better to use upper code ki click krne pr element check

// popupcont.addEventListener('click',(e)=>
// {
//     e.stopPropagation();
// })
