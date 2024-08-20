const images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7mmNmFdqySURhihlbYVRvRtoyIzjPNGKAw&s','https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/iron-man-in-comic-book-armor-art.jpg','https://ew.com/thmb/7dvGbywmpUKbrvb0GrgSCWUyTL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/0002509893242534535-2000-d9a970916e114345979cc48256338b05.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUT3puS06scewKXnlmjTJBNkOjxB-EgI7sg&s','https://wallpapers.com/images/hd/captain-america-android-0aqaztdwgpz41epy.jpg','https://cdn.marvel.com/content/1x/042_bluebayou_digital_keyart_teaser_r16_lg.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dJnP2tQa3M4Vx9Sn7UA36xcNYfleqF0VZA5MzVy3-GQJZPRBd2taLHWTGrmA0YbsmA0&usqp=CAU'];
const next=document.querySelector('.next');
let n=0 // pointer to the next image in the images array
const image=document.querySelector('.hero');
const body=document.querySelector('body');
next.addEventListener('click',(e)=>{
  n++;
  n=n%images.length; 
  image.src=images[n];
})
image.addEventListener('mouseover',()=>{
  body.style.backgroundImage='url(' + images[n] + ')';
})

