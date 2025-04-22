function jsonquery (){
  let xhr = new XMLHttpRequest();
 

  xhr.onload = function(){
   if(xhr.readyState===4 & xhr.status===200){
     let obj = JSON.parse(xhr.responseText)
     let arr =obj.slide;
     slideVonJson(arr);
     //  console.log(arr);
     }
  }

  xhr.open("GET","./json/slide.json", true );
  xhr.send();

}

jsonquery();

let zaeler =0;
function slideVonJson(arr){
  let vor = document.querySelector(".vor");
  let zuruck = document.querySelector(".zuruck");
  let slidebild= document.querySelector(".slidebild");
  let ueberschrift =document.querySelector(".ueberschrift");
  let count = document.querySelector(".counter");
  let  span =document.querySelectorAll(".slidefeld  span")
    vor.addEventListener("click", ()=>{
      if(zaeler!=4){
        slidebild.src=arr[zaeler].bild;
        ueberschrift.innerHTML=arr[zaeler].title;
        count.innerHTML=arr[zaeler].counter;
        span.forEach((item)=>{
          item.classList.remove("bund");
        
        })
        span[zaeler].classList.add("bund");
        zaeler++;
        zuruck.classList.remove("unsicht");
      }else{
        vor.classList.add("unsicht");
        span[3].classList.remove("bund");
      }
    })

  zuruck.addEventListener("click", ()=>{
   if(zaeler>=1 & zaeler<=4){ 
       zaeler--;
       span.forEach((item)=>{
       item.classList.remove("bund");
      })
      span[zaeler].classList.add("bund");
      slidebild.src=arr[zaeler].bild;
      ueberschrift.innerHTML=arr[zaeler].title;
      count.innerHTML=arr[zaeler].counter;
      vor.classList.remove("unsicht");
   
    }else if(zaeler===0){
      span[0].classList.remove("bund");
    ueberschrift.innerHTML="Beliebteste";
    count.innerHTML="";
    slidebild.src="./img/instrument.png"
    zuruck.classList.add("unsicht");
    }
  })
  span.forEach((item)=>{
    item.addEventListener("click",addieren);
  })

function addieren(){
  span.forEach((item)=>{
    item.classList.remove("bund");
  })
  this.classList.add("bund");
  slidebild.src=arr[this.id].bild;
  ueberschrift.innerHTML=arr[this.id].title;
  count.innerHTML=arr[this.id].counter;
}
}