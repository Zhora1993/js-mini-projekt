let header = document.querySelector(".headline");
let hauptmain = document.querySelector(".hauptmain");
 let ullist= document.createElement("ul");
 ullist.classList.add("sportarten");
 let lilist1  = document.createElement("li");
 let lilist2  = document.createElement("li");
 let lilist3  = document.createElement("li");
 let lilist4  = document.createElement("li");
 lilist1.classList.add("fussball");
 lilist2.classList.add("turnen");
 lilist3.classList.add("tennis");
 lilist4.classList.add("handball");
 lilist1.textContent="FOSSBALL";
 lilist2.textContent="TURNEN";
 lilist3.textContent="TENIS";
 lilist4.textContent="HANDBALL ";
 let fusdiv = document.createElement("ul");
 let turdiv = document.createElement("ul");
 let tendiv = document.createElement("ul");
 let schutzdiv = document.createElement("ul");
 fusdiv.classList.add("fusdiv");
 turdiv.classList.add("turdiv");
 tendiv.classList.add("tendiv");
 schutzdiv.classList.add("handdiv");
 let lifhome  = document.createElement("li");
 let lifmitglid  = document.createElement("li");
 let lifteams  = document.createElement("li");
 let liffans  = document.createElement("li");
 let lithome  = document.createElement("li");
 let litmitglied  = document.createElement("li");
 let litteams  = document.createElement("li");
 let litfans = document.createElement("li");
 let liThome  = document.createElement("li");
 let liTmitglied  = document.createElement("li");
 let liTteams  = document.createElement("li");
 let liTfans = document.createElement("li");
 let lishome  = document.createElement("li");
 let lismitglied  = document.createElement("li");
 let listeams  = document.createElement("li");
 let lisfans = document.createElement("li");
lifhome.innerHTML="Home";
lifmitglid.innerHTML="Mitglied"
lifteams.innerHTML="Teams";
liffans.innerHTML="Fans";
lithome.innerHTML="Home";
litmitglied.innerHTML="Mitglied";
litteams.innerHTML="Teams";
litfans.innerHTML="Fans";
liThome.innerHTML="Home";
liTmitglied.innerHTML="Mitglied";
liTteams.innerHTML="Teams";
liTfans.innerHTML="Fans";
lishome.innerHTML="Home";
lismitglied.innerHTML="Mitglied";
listeams.innerHTML="Teams";
lisfans.innerHTML="Fans";

fusdiv.append(lifhome,lifmitglid,lifteams,liffans);
turdiv.append(lithome,litmitglied,litteams,litfans);
tendiv.append(liThome,liTmitglied,liTteams,liTfans);
schutzdiv.append(lishome,lismitglied,listeams,lisfans);

lilist1.append(fusdiv);
lilist2.append(turdiv);
lilist3.append(tendiv);
lilist4.append(schutzdiv);

ullist.append(lilist1,lilist2,lilist3,lilist4);
header.append(ullist);
hauptmain.before(header);
let hamo =document.getElementById("burger");
let line1=document.querySelector(".line1");
let line2=document.querySelector(".line2");
let line3=document.querySelector(".line3");
hamo.addEventListener("click",function(){

ullist.classList.toggle("sichtbar");
line1.classList.toggle("oben");
line2.classList.toggle("mittel");
line3.classList.toggle("unten");
})

lilist1.addEventListener("click", sichtf);
let counterf=0;
function sichtf(){
  if(counterf===0){
    fusdiv.classList.toggle("sichtbar");
    counterf++;
  }else{
    fusdiv.classList.remove("sichtbar");
    counterf=0;
  }
 
}

lilist2.addEventListener("click", sichtt);
let countert=0;
function sichtt(){
  if(countert===0){
    turdiv.classList.add("sichtbar");
    countert++;
  }else{
    turdiv.classList.remove("sichtbar");
    countert=0;
  }
 
}

lilist3.addEventListener("click", sichtT);
let counterT=0;
function sichtT(){
  if(counterT===0){
    tendiv.classList.add("sichtbar");
    counterT++;
  }else{
    tendiv.classList.remove("sichtbar");
    counterT=0;
  }
 
}

lilist4.addEventListener("click", sichts);
let counters=0;
function sichts(){
  if(counters===0){
    schutzdiv.classList.add("sichtbar");
    counters++;
  }else{
    schutzdiv.classList.remove("sichtbar");
    counters=0;
  }
 
}

