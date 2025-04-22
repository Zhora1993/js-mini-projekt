let url = "./json/footer.json";

async function footerjson(){
try{
  let response = await fetch(url);
let obj = await response.json();
let arr = obj.footer;
dataGeholt (arr);
}catch{(e)=>{
  console.log("Fehler"+e);
  //hier muss man gucken
}}
}
footerjson()

let boden = document.querySelector(".boden");
function dataGeholt(arr){
arr.forEach((item)=>{

  let ul = document.createElement("ul");
  ul.classList.add("footerul");
  ul.innerHTML= item.name;
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let a1 =document.createElement("a");
  a1.href="#";
  let a2 =document.createElement("a");
  a2.href="#"
  a1.innerHTML=item.werden;
  a2.innerHTML=item.kontakt;
  li1.append(a1);
  li2.append(a2);
  ul.append(li1,li2);
boden.append(ul);

})

}