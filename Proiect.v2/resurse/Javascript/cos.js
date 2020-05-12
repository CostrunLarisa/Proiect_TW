window.onload=function(){
	var x=localStorage.getItem("ProduseInCos");
	x=JSON.parse(x);
	var cos=document.querySelector(".products");
	if(x && cos){	
			cos.innerHTML="";
			Object.values(x).map(item => {
				var nou=document.createElement("DIV");
				nou.classList="produs";
				nou.style.height="140px";
				nou.style.padding="0px";
				var imagine=document.createElement("IMG");
				imagine.src="../Proiect.v2/resurse/Imagini/cancel-24.ico";
				imagine.style.width="1.7vw";
				imagine.style.height="1.7vw";
				imagine.style.cursor="pointer";
				nou.appendChild(imagine);
				var imagine2=document.createElement("IMG");
				imagine2.src="../Proiect.v2/resurse/Imagini/pastabolognese.jpg";
				imagine2.style.width="150px";
				
				nou.appendChild(imagine2);
				var nume=document.createElement("span");
				var cost=document.createElement("div");
				var cantitate=document.createElement("div");
				
				cantitate.classList="cantitate";
				cost.classList="pret";
				cost.innerHTML=" "+item.pret+" lei";
				cost.style.height="80px";
				cost.style.width="6%";
				cantitate.style.height="80px";
				var less=document.createElement("img");
				var greater=document.createElement("img");
				less.src="../Proiect.v2/resurse/Imagini/icons8-less-than-25.png";
				less.style.width="24px";
				greater.src="../Proiect.v2/resurse/Imagini/icons8-greater-than-25.png";
				less.style.cursor="pointer";
				greater.style.cursor="pointer";
				cantitate.appendChild(less);
				var txt=document.createElement("span");
				txt.innerHTML=item.selectat;
				var total=document.createElement("div");
				total.classList="total";
				var valoare;
				valoare=parseInt(item.selectat)*parseInt(item.pret);
				total.innerHTML=valoare+" lei";
				total.style.height="80px";
				nume.innerHTML=item.nume;
				nou.appendChild(nume);
				cantitate.appendChild(txt);
				cantitate.appendChild(greater);
				cos.appendChild(nou);
				cos.appendChild(cost);
				cos.appendChild(cantitate);
				cos.appendChild(total);
		
				less.onclick=function(){
					if(parseInt(item.selectat) > 0)
					{valoare=valoare-parseInt(item.pret);
						/*item.selectat=parseInt(item.selectat)-1;*/
						x[item.tag].selectat=parseInt(item.selectat)-1;
						txt.innerHTML=item.selectat;
						total.innerHTML=valoare+" lei";	
					}
					if(parseInt(item.selectat) == 0)
					{
						cantitate.innerHTML="";
						nou.innerHTML="";
						cost.innerHTML="";
						total.innerHTML="";
						nou.style.display="none";
						cantitate.style.display="none";
						cost.style.display="none";
						total.style.display="none";
						item.selectat=parseInt(item.selectat)-1;
						localStorage.setItem("ProduseInCos",item.tag);
						localStorage.removeItem(item.tag);
						localStorage.removeItem(x[item.tag]);
					}
						
				}
				greater.onclick=function(){
						valoare=valoare+parseInt(item.pret);
						item.selectat=parseInt(item.selectat)+1;
						txt.innerHTML=item.selectat;
						total.innerHTML=valoare+" lei";
	
					}
				imagine.onclick=function(){
					
				}
				
				});
				
				var container=document.querySelector(".container");
				var finalizare=document.createElement("button");
				finalizare.style.padding="10px";
				finalizare.innerHTML+="Plaseaza comanda";
				container.appendChild(finalizare);
				finalizare.onclick=function(){
					cos.innerHTML="Cosul dumneavostra este gol.";
					localStorage.clear();
				}
		
	}
	if(cos && x==null){cos.innerHTML="Cosul dumneavoastra este gol.";}
}
