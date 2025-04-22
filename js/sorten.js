

let articlen = document.querySelectorAll(".sortenarticle");
const options ={
  threshold :0.2
}
let callback =(entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
let i = entry.target.id; 

articlejson(i);
}else{
 let idu =document.querySelectorAll('[data-idu="vernagir"');
 let idb =document.querySelectorAll('[data-idb="bild"');
 let idp =document.querySelectorAll('[data-idp="paragraph"');
   let I =entry.target.id;
   idu[I].classList.remove("sicht");
   idb[I].classList.remove("sicht1");
  idp[I].classList.remove("sicht1");

}

})


}
let observer = new IntersectionObserver(callback, options);


articlen.forEach((item,i)=>{
  observer.observe(item);
})

function articlejson(i){
  let idu =document.querySelectorAll('[data-idu="vernagir"');
  let idb =document.querySelectorAll('[data-idb="bild"');
  let idp =document.querySelectorAll('[data-idp="paragraph"');
  

  let url ="./json/sorten.json";
  fetch(url)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{

 sortenjson(data);
 
  })


  function sortenjson(data){
   
idu[i].innerHTML=data[i].h2;
idu[i].classList.add("sicht");
idb[i].src=data[i].bild;
idb[i].classList.add("sicht1");

idp[i].textContent=data[i].paragraph;
idp[i].classList.add("sicht1");
  }

 
}


// articlejson();


