const button=document.querySelectorAll('.button');
const body=document.querySelector("body");
button.forEach((b)=>{
  b.addEventListener('mouseover',(e)=>{
     if(e.target.id==="YELLOW")
     {
        body.style.backgroundColor="yellow";
     }
     if(e.target.id==="GREEN")
     {
           body.style.backgroundColor="green";
     }
     if(e.target.id==="BLUE")
     {
           body.style.backgroundColor="blue";
     }
     if(e.target.id==="RED")
     {
           body.style.backgroundColor="red";
     }
     
  });
});
