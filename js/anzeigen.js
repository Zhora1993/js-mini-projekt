let  zeigen = document.querySelector(".zeigen");
let jsonadresse =document.querySelector(".jsonadresse");
let addtabel =document.querySelector(".addtabel");

hallo=0;
let element =[];
let urlall=[];
let anzeige1 = ()=>{
let url ="./json/hauptanzeige.json";
  
fetch(url)
.then((response)=>{
  return response.json();
})
.then((data)=>{
  let arr =data.anzeige
  datageholt1(arr);

})

if(hallo===0){
  function datageholt1 (arr){
  

    for(let item of arr){
      jsonadresse.insertAdjacentHTML("beforeend", `<div class="${item.id}", id="${item.idpath}">${item.name}</div>`);
      // elem= document.querySelector(`.${item.id}`);
      element.push(document.querySelector(`.${item.id}`));
     let url = item.dataPath;
     urlall.push(url);
  
   
    }
    dataGeholt2(urlall,element);
    }
    
    hallo++;
}else{
  function datageholt1(arr){

  }
  jsonadresse.innerHTML="";
  addtabel.innerHTML="";
  hallo=0;
}



}
zeigen.addEventListener("click", anzeige1);

function dataGeholt2(urlall,element){
 
 for(let item of element){

let id=item.id;

item.addEventListener("click",()=>{
  // console.log(item);
  // console.log(id);
 
  addtabel.innerHTML="";
 
  let table = document.createElement("table");
  table.classList.add("tableinfo");
  let tr = document.createElement("tr");
  let tdconst1 =document.createElement("td");
  let tdconst2=document.createElement("td");
  let tdconst3=document.createElement("td");
  let tdconst4 =document.createElement("td");
  tdconst1.innerHTML="Jahrzenten";
  tdconst2.innerHTML="Entwicklung mit %";
  tdconst3.innerHTML="Verbreitung mit %";
  tdconst4.innerHTML="Kommentar";
tr.append(tdconst1,tdconst2,tdconst3,tdconst4);
table.append(tr);
 addtabel.append(table);
 
 let url =urlall[id];
 fetch(url)
 .then((response)=>{
  return response.json();
 })
 .then((data)=>{
  data.forEach((item)=>{
    let tr = document.createElement("tr");
   
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 =document.createElement("td");
    td1.innerHTML=item.Jahrzent;
    td2.innerHTML=item.Entwicklung;
    td3.innerHTML=item.Verbreitet;
    td4.innerHTML=item.kommentar
    tr.append(td1,td2,td3,td4);
    table.append(tr);
  })

 })



})
 }

}
function anzeige2 (){
 
  }
  
