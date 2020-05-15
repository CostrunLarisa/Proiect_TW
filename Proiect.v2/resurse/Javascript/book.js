window.onload=function(){
	genereaza();
function genereaza(){

	var d=new Date();
	var zi=d.getDate();
	var luna=d.getDay();
	var an=d.getFullYear();
	var optiuni=document.querySelector("#data");
	var j=parseInt(zi);
	var i=parseInt(luna);
	for(i;i<=12;i++)
	{
		if(i==2 && !(an%4==0 && an%100!=0)|| (an%400==0))
		{
			while(j<=28)
			{
			var nou=document.createElement("option");
			nou.innerHTML=""+j+"/"+i+"/"+an;
			optiuni.appendChild(nou);
			j=j+1;
			}
			j=1;
		}
		else if(i==2 && (an%4==0 && an%100!=0)|| (an%400==0))
		{
			while(j<=29)
			{
			var nou=document.createElement("option");
			nou.innerHTML=""+j+"/"+i+"/"+an;
			optiuni.appendChild(nou);
			j=j+1;
			}
			j=1;
		}
		else{
			while(j<=30)
			{
				var nou=document.createElement("option");
				nou.innerHTML=""+j+"/"+i+"/"+an;
				optiuni.appendChild(nou);
				j=j+1;
			}
		}
		if(j==31 && (i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12))
		{	
			var nou=document.createElement("option");
			nou.innerHTML=""+j+"/"+i+"/"+an;
			optiuni.appendChild(nou);
		}
		j=1;
	}

}}
function numara(caractere)
	{
	var tot=0;
	for(var i in caractere.value)
		tot=tot+1;
	var curent=document.getElementById("current");
	var maxim=document.getElementById("max");
	var total=document.getElementById("the-count");
	var p=document.createElement("p");
	p=""+tot;
	curent.innerHTML=" "+p;
	console.log(total);

	}
	

	
