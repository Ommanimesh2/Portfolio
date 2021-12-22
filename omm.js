let ben=document.getElementById("bbtn");
let gwen=document.getElementById("ele1")
let kevin=document.getElementById("ele2")

ben.addEventListener('click',function(){
   if(document.body.style.backgroundColor!="black"){
      document.body.style.backgroundColor="black"
      ben.innerHTML="Nah, I don't like it"
      document.body.style.color="yellow"
      gwen.style.borderColor="orange"
      kevin.style.borderColor="orange"
   }
   else{
      document.body.style.backgroundColor="white"
      ben.innerHTML="Try out the dark theme"
      document.body.style.color="black"
      gwen.style.borderColor="black"
      kevin.style.borderColor="black"

   }
},
// ben.addEventListener('mouseover',function(){
//   if(document.body.style.backgroundColor="black"){
//      ben.style.backgroundColor="white"
//      ben.style.color="black"
//   }
// })
)
console.log("happy");