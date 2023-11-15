var stories=document.querySelector(".stories");
var clutter="";
var arr=[{dp:"https://images.unsplash.com/photo-1592972490115-dbfee7e1710d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1579493934830-eab45746b51b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"vijayph1.png",story:"https://images.unsplash.com/photo-1610560815255-8a738237820c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1632823803427-547b6a4c496b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1621317911160-70ee9c68750d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1580651214613-f4692d6d138f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1536129808005-fae894214c73?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]
arr.forEach(function(ele,ind){
  clutter += `<div class="story">
  <img id="${ind}" src="${ele.dp}">
</div>`;
})
stories.innerHTML=clutter;
var growth=0;
stories.addEventListener("click",function(dets){
  console.log();
  document.querySelector(".fullsc").style.display="block";
  document.querySelector(".fullsc").style.backgroundImage=`url(${arr[dets.target.id].story})`;
  setTimeout(() => {
    document.querySelector(".fullsc").style.display="none";
  },12000);
   if(growth<=100)
   {
  var endin=setInterval(function(){
    document.querySelector(".growth").style.width=`${growth++}px`
  },50);
  
  setTimeout(() => {
    document.querySelector(".growth").style.display="none";
  },12000);
}
})
var flag=0;
var icon=document.querySelector("i");
icon.addEventListener("click",function(){
  if(flag==0)
  {
  icon.style.color="red";
  flag=1;
  }
  else
  {
    icon.style.color="rgb(235, 225, 225)";
    flag=0;
  }
  
})