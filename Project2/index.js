const images=['https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/iron-man-in-comic-book-armor-art.jpg'];
const next=document.querySelector('.next');
const previous=document.querySelector('.previous');
let n=-1 // pointer to the next image in the images array
let p=-1 //pointer to the previous image in the images array
const div=document.querySelector('.main');
next.addEventListener('click',(e)=>{
  const image=document.createElement('img');
  n++;
image.src=images[n];
if(n==images.length)
{
    n=-1;
}
console.log(n);
})

previous.addEventListener('click',(e)=>{
   console.log('hi');
   
})
