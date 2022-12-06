// let domnode=document.querySelector('p');//first jo milega wo utha lega

// console.log(domnode);

// domnode=document.querySelector('.error');

// console.log(domnode);

// domnode=document.querySelector('body > div:nth-child(1) > p:nth-child(1)');
// //inspect->element pr click arrow->copy->copy selector
// console.log(domnode);

// const domnodes=document.querySelectorAll('.error');
// //nodelist return, array nhi exact but can do some time like [] notation use ya foreach
// console.log(domnodes);

// domnodes.forEach(path=>
// {
//     console.log(path);
// });



//get element by iD
// const title=document.getElementById('page-title');
// console.log(title);

// //get element by class name
// const errors=document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// //html collection return use [] but not forEach loop

// //get element by tag 
// const paras=document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// HTMLCollection methods
//[]
// .item()
// .namedltem()

// Node List methods
//[]
// .item()
// .entries()
// .forEach()
// .keys()
// . ValueS()



// const para=document.querySelector('p');

// console.log(para.innerHTML);
// para.innerText='Ninjas Are Awesome';

// const paras=document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText+=' new Text';
// });

// const content=document.querySelector('.content');

// // console.log(content.innerHTML);

// const DatabaseData=['aey','bc','mc'];

// DatabaseData.forEach(data=>
// {
//  content.innerHTML += `<p>${data}</p>`;
// });
// //editing html of page on the go with data received


//getting and setting atrributes

// const link=document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.thenetninja.co.uk');
// link.innerHTML='The Net ninja site';

// const msg=document.querySelector('p');

// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');
// msg.setAttribute('style','color:green;');



// //changing css styles

// const title=document.querySelector('h1');

// // title.setAttribute('style','margin:100px');
// //this way overrides and erses all css that element has
// //and just give margin, ex: all colors and fontSize might be gone

// //so we should use .style way if want to add and not override everything

// title.style.margin='50px';
// title.style.color='crimson';
// title.style.fontSize='200px';
// title.style.margin='';//remove a style


// const content=document.querySelector('h1');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras=document.querySelectorAll('p');

// paras.forEach(p=>
//     {
//      if(p.textContent.includes('error'))//agr andr koi tag toh usko bhi lega
//      p.classList.add('error');
//      if(p.innerHTML.includes('success'))//hidden ko ignore 
//      p.classList.add('success');
//     });

//toggleclass bhi kr skte ho ,input hogi toh ht jaegi else lg jaegi



// //parent and sibling elements 

// any selection made example article tag

// then article.children return htmlcollection of them
// so no forech loop
// hecne can convert ot array by
// const arr[]=Array.from(article.children);

// can go to parent by title.parentElement
// title.next/previousSibling



// const button=document.querySelector('button');

// button.addEventListener('click',()=>{
//     console.log('you clicked me');
// });

// const items=document.querySelectorAll('li');
// //nodelist return from querySle so foreach
// //else convert to array Arrat.from(htmlcollection)

// items.forEach(item=>
//     {
//         item.addEventListener('click',(e)=>
//         {
//         //    console.log(e);
//         //    console.log(e.target);//html element mil jaega
//         //    console.log(item);//same wahi ele jo hamne pehle hi select kr liya
//          e.target.style.textDecoration='line-through';    
//     });
//     });


// const ul=document.querySelector('ul');

// const button=document.querySelector('button');

// button.addEventListener('click',()=>{
//     // ul.innerHTML+= '<li>some thing new</li>';
//     const li=document.createElement('li');
//     li.textContent='something new';
//     // ul.append(li);
//     ul.prepend(li);
// });

// const items=document.querySelectorAll('li');

// items.forEach(item=>
//     {
//         item.addEventListener('click',(e)=>
//         {
//         //    console.log(e);
//         //    console.log(e.target);//html element mil jaega
//         //    console.log(item);//same wahi ele jo hamne pehle hi select kr liya
//          e.target.remove();    
//     });
// });

//here problem remains ki jo initially li the wohi bs click pr remove 
//somthing new wale nhi




//event bubbling and delegation

// const ul=document.querySelector('ul');

// const button=document.querySelector('button');

// button.addEventListener('click',()=>{
//     // ul.innerHTML+= '<li>some thing new</li>';
//     const li=document.createElement('li');
//     li.textContent='something new';
//     ul.append(li);
// });

//now event bubbling is agr li ko click toh uske
//parent ke event listeers bhi target
//aur phir uske parent ke bhi

//we can stop them by using stop propagation---event.stopPropagation();

//aur hamko hr li element pr event chipkana tha
//so alag se add krne se better
//agr ul pr click aur wo li hai
//then uspr event attached 
//better than hr li pr lagao<<<ek ul/parent pr lagao

// const items=document.querySelectorAll('li');

// items.forEach(item=>
//     {
//         item.addEventListener('click',(e)=>
//         {
//         //    console.log(e);
//         //    console.log(e.target);//html element mil jaega
//         //    console.log(item);//same wahi ele jo hamne pehle hi select kr liya
//          e.target.remove();    
//     });
// });

// ul.addEventListener('click',e=>
// {
//     if(e.target.tagName === 'LI')
//     {
//         e.target.remove();
//     }
// })


// //there ton more events and their properties
// and we can add eventlistener to whole body or any Element
// and when any event like scroll/WheelEvent,copy,mousemove event
// we can use the data



