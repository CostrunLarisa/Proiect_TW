var mancare=[
	{
		nume:"Pasta Bolognese",
		tag:"pastabolognese",
		pret:30,
		selectat:0
	}
	,
	{
		nume:"Pasta Carbonara",
		tag:"pastacarbonara",
		pret:29,
		selectat:0
	},
	{
		nume:"Rigattoni",
		tag:"rigattoni",
		pret:26,
		selectat:0
	},
	{
		nume:"Chicken Pasta",
		tag:"chickenpasta",
		pret:25,
		selectat:0
	},
	{
		nume:"Penne Gorgonzola",
		tag:"pennegorgonzola",
		pret:35,
		selectat:0
	},
	{
		nume:"Spaghetti Amatriciana",
		tag:"spaghettiamatriciana",
		pret:40,
		selectat:0
	},
	{
		nume:"Pesto Pasta",
		tag:"pestopasta",
		pret:38,
		selectat:0
	},
	{
		nume:"Spaghetti Aglio",
		tag:"spaghettiaglio",
		pret:45,
		selectat:0
	},
	{
		nume:"Spaghetti",
		tag:"spaghetti",
		pret:21,
		selectat:0
	},
	{
		nume:"Quattro Stagioni.",
		tag:"quattrostagioni.",
		pret:30,
		selectat:0
	},
	{
		nume:"Quattro Formaggi",
		tag:"quattroformaggi",
		pret:0,
		selectat:0
	},
	{
		nume:"Romana",
		tag:"romana",
		pret:0,
		selectat:0
	},
	{
		nume:"Americana",
		tag:"americana",
		pret:,
		selectat:0
	},
	{
		nume:"Gorgonzola",
		tag:"gorgonzola",
		pret:,
		selectat:0
	},
	{
		nume:"Calzone",
		tag:"calzone",
		pret:,
		selectat:0
	},
	{
		nume:"Mediterranea",
		tag:"mediterranea",
		pret:,
		selectat:0
	},
	{
		nume:"Parmigiana",
		tag:"parmigiana",
		pret:,
		selectat:0
	},
	{
		nume:"Campagnola",
		tag:"campagnola",
		pret:,
		selectat:0
	},
	{
		nume:"Summer Farro ",
		tag:"summerfarro ",
		pret:,
		selectat:0
	},
	{
		nume:"Curtido",
		tag:"curtido",
		pret:,
		selectat:0
	},
	{
		nume:"Mimosa",
		tag:"mimosa",
		pret:,
		selectat:0
	},
	{
		nume:"Greek Salad",
		tag:"greeksalad",
		pret:,
		selectat:0
	},
	{
		nume:"Tuna Salad",
		tag:"tunasalad",
		pret:,
		selectat:0
	},
	{
		nume:"Broad Bean",
		tag:"broadbean",
		pret:,
		selectat:0
	},
	{
		nume:"Bresaola",
		tag:"bresaola",
		pret:,
		selectat:0
	},
	{
		nume:"Quinoa Salad",
		tag:"quinoasalad",
		pret:,
		selectat:0
	},
	{
		nume:"Sweet Potato Salad",
		tag:"sweetpotatosalad",
		pret:,
		selectat:0
	},
	{
		nume:"Lasagna",
		tag:"lasagna",
		pret:,
		selectat:0
	},
	{
		nume:"Paella",
		tag:"paella",
		pret:,
		selectat:0
	},
	{
		nume:"Pork Steak",
		tag:"porksteak",
		pret:,
		selectat:0
	},
	{
		nume:"Veneto",
		tag:"veneto",
		pret:,
		selectat:0
	},
	{
		nume:"Braciole",
		tag:"braciole",
		pret:,
		selectat:0
	},
	{
		nume:"Goulash",
		tag:"goulash",
		pret:,
		selectat:0
	},
	{
		nume:"Ciambotta",
		tag:"ciambotta",
		pret:,
		selectat:0
	},
	{
		nume:"Vitello",
		tag:"vitello",
		pret:,
		selectat:0
	},
	{
		nume:"Tortellini",
		tag:"tortellini",
		pret:,
		selectat:0
	},
	{
		nume:"Cheesecake",
		tag:"cheesecake",
		pret:,
		selectat:0
	},
	{
		nume:"Waffles",
		tag:"waffles",
		pret:,
		selectat:0
	},
	{
		nume:"Cake In a Pot",
		tag:"cakeinapot",
		pret:,
		selectat:0
	},
	{
		nume:"Chocolate Canolli",
		tag:"chocolatecanolli",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	},
	{
		nume:"",
		tag:"",
		pret:,
		selectat:0
	}
];
window.onload=function(){
/*resize()
function resize(){
	var content=document.querySelectorAll(".grid_content");
	var imagini=document.querySelectorAll(".meniu")[0];
	var c=imagini.getBoundingClientRect();
	for(var ob=0;ob<content.length;ob++)
	{content[ob].style.width=""+c.width-100+"px";
	}
}*/
var produse=document.querySelectorAll(".add-cart");
onLoadNumarItem();
comanda();
function onLoadNumarItem(){								/*pastram nr.de produse chiar daca dam refresh paginii*/
	var numarProduse=localStorage.getItem("numarItem");
	numarProduse=parseInt(numarProduse);
		if(numarProduse)
		{
		document.querySelector(" .cos span").textContent=numarProduse;
		}
	}
function setItems(alegere){
		var dejaPuse=localStorage.getItem("ProduseInCos");
		if(dejaPuse)
		{	dejaPuse=JSON.parse(dejaPuse);
			if(dejaPuse[alegere.tag]!=undefined)
			{
				dejaPuse[alegere.tag].selectat+=1;}
			else{
					alegere.selectat=1;
					dejaPuse={
						...dejaPuse,
					[alegere.tag]:alegere
					}
			}
		}
		else {
			alegere.selectat=1;
			dejaPuse={
				[alegere.tag]:alegere
			}
		}

		localStorage.setItem("ProduseInCos",JSON.stringify(dejaPuse));
	}
function numarItem(alegere){
	var numarProduse=localStorage.getItem("numarItem");
	numarProduse=parseInt(numarProduse);
	if(numarProduse)
	{
	localStorage.setItem("numarItem",numarProduse+1);
	document.querySelector(" .cos span").textContent=numarProduse+1;
	}
	else{
		localStorage.setItem("numarItem",1);
		document.querySelector(" .cos span").textContent=1;
		}
	setItems(alegere)
}
	
function total(alegere){
	let pret=localStorage.getItem("total");
	if(pret==null)
	{
		localStorage.setItem("total",alegere.pret);}
	else{
		pret=parseInt(pret);
		localStorage.setItem("total",pret+alegere.pret);
		}
}
for(let i=0;i<produse.length;i++)
{
	produse[i].addEventListener("click",() => 
	{numarItem(mancare[i]) ;
	total(mancare[i]);} )
}


function comanda(){
	var x=localStorage.getItem("ProduseInCos");
	var cos=document.querySelector(".products");
	if(x && cos){
			x=JSON.parse(x);
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
				imagine2.src="../Proiect.v2/resurse/Imagini/"+item.tag+".jpg";
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
						item.selectat=parseInt(item.selectat)-1;
						var update=localStorage.getItem("ProduseInCos");
						update=JSON.parse(update);
						update[item.tag].selectat-=1;
						localStorage.setItem("ProduseInCos",JSON.stringify(update));
						txt.innerHTML=item.selectat;
						total.innerHTML=valoare+" lei";	
						var nrCos=localStorage.getItem("numarItem");
						nrCos=parseInt(nrCos);
						localStorage.setItem("numarItem",nrCos-1);
						document.querySelector(" .cos span").textContent=nrCos-1;
						let pret=localStorage.getItem("total");
						pret=parseInt(pret);
						localStorage.setItem("total",pret-item.pret);
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
						var val=localStorage.getItem("ProduseInCos");
						localStorage.removeItem("ProduseInCos"); 
						val=JSON.parse(val);
						if(val.length==1)localStorage.removeItem("ProduseInCos");     /*daca e singurul element din cos,in momentul in care o sa itereze
																						itereazaprin proprietatile obiectului,asa ca il stergem*/
						else{for(var i of Object.values(val))
							{	if(i.tag!=item.tag)
								{
									var aux=localStorage.getItem("ProduseInCos");
									if(aux)
									{
										aux=JSON.parse(aux);
										aux={... aux, [i.tag]:i}
									}
									else{
										aux={[i.tag]:i}
									}
									localStorage.setItem("ProduseInCos",JSON.stringify(aux));
								}
							}
						}
						var nrCos=localStorage.getItem("numarItem");
						nrCos=parseInt(nrCos);
						if(nrCos==0)
						{
						cos.innerHTML="Cosul dumneavoastra este gol.";
						localStorage.removeItem("ProduseInCos");
						}
					}
						
				}
				greater.onclick=function(){
						valoare=valoare+parseInt(item.pret);
						item.selectat=parseInt(item.selectat)+1;
						var update=localStorage.getItem("ProduseInCos");
						update=JSON.parse(update);
						update[item.tag].selectat+=1;
						localStorage.setItem("ProduseInCos",JSON.stringify(update));
						txt.innerHTML=item.selectat;
						total.innerHTML=valoare+" lei";
						var nrCos=localStorage.getItem("numarItem");
						nrCos=parseInt(nrCos);
						localStorage.setItem("numarItem",nrCos+1);
						document.querySelector(" .cos span").textContent=nrCos+1;
						let pret=localStorage.getItem("total");
						pret=parseInt(pret);
						localStorage.setItem("total",pret+item.pret);
					}
				var nrCos=localStorage.getItem("numarItem");
				nrCos=parseInt(nrCos);
				if(nrCos==0)
				{
				cos.innerHTML="Cosul dumneavoastra este gol.";
				localStorage.removeItem("ProduseInCos");
				}
				imagine.onclick=function(){
					
				}
				
				});
				var nrCos=localStorage.getItem("numarItem");
				nrCos=parseInt(nrCos);
				if(nrCos!=0)
				{
					var container=document.querySelector(".container");
					var finalizare=document.createElement("button");
					finalizare.style.padding="10px";
					finalizare.style.float="right";
					finalizare.innerHTML+="Plaseaza comanda";
					container.appendChild(finalizare);
					finalizare.onclick=function(){
						cos.innerHTML="Cosul dumneavostra este gol.";
						localStorage.clear();
					}
				}
				
			
	}
	else if(cos && x==null){cos.innerHTML="Cosul dumneavoastra este gol.";}
}
}
