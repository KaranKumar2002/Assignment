const button=document.querySelectorAll('.button');
const body=document.querySelector("body");
// button.forEach((b)=>{
//   b.addEventListener('mouseover',(e)=>{
//      if(e.target.id==="YELLOW")
//      {
//         body.style.backgroundColor="yellow";
//      }
//      else if(e.target.id==="GREEN")
//      {
//            body.style.backgroundColor="green";
//      }
//      else if(e.target.id==="BLUE")
//      {
//            body.style.backgroundColor="blue";
//      }
//     else if(e.target.id==="RED")
//      {
//            body.style.backgroundColor="red";
//      }
// //      body.style.backgroundColor="black";
     
//   });
// });

button.forEach((b)=>{
      b.addEventListener('click',(e)=>{
        const h2=document.createElement('h2');
        
        
        if(e.target.id==="YELLOW")
            {  
              h2.innerHTML="YOU HAVE CHOSEN THE YELLOW ONE"
              body.style.backgroundColor="yellow"         

            }
            else if(e.target.id==="GREEN")
            {
              h2.innerHTML="YOU HAVE CHOSEN THE GREEN ONE"
              body.style.backgroundColor="green"
              
            }
            else if(e.target.id==="BLUE")
            {
               h2.innerHTML="YOU HAVE CHOSEN THE BLUE ONE"
               body.style.backgroundColor="blue"
            }
           else if(e.target.id==="RED")
            {
                h2.innerHTML="YOU HAVE CHOSEN THE RED ONE"
                body.style.backgroundColor="red"
            }
       const div=document.querySelector('.main');
       div.appendChild(h2);
       setTimeout(()=>{
        div.removeChild(h2);
       },1000)

      });
    });
