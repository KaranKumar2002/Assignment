const images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzwUjckGH-xDozl8qWsE-p70h3CaE0kSRLA&s','https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/iron-man-in-comic-book-armor-art.jpg'];
const next=document.querySelector('.next');
let n=0 // pointer to the next image in the images array
const image=document.querySelector('.hero');
const body=document.querySelector('body');
next.addEventListener('click',(e)=>{
  n++;
  n=n%images.length; 
  image.src=images[n];
  body.style.background=image;

})

