/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.5 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */


function genereaza(){
	var d=new Date();
	var zi=d.getDate();
	var luna=d.getDay();
	var an=d.getFullYear();
	var optiuni=document.getElementById("data");
	var j=parseInt(zi);
	var i=parseInt(luna);
	for(i;i<=12;i++)
	{
		if(i==2 && !(an%4==0 && an%100!=0)|| (an%400==0))
		{
			while(j<=28)
			{
			var nou=document.createElement("OPTION");
            var txt=""+j+"/"+i+"/"+an;
			nou.innerHTML=txt;
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
			nou.innerHTML+=""+j+"/"+i+"/"+an;
			optiuni.appendChild(nou);
			j=j+1;
			}
			j=1;
		}
		else{
			while(j<=30)
			{
				var nou=document.createElement("option");
				nou.innerHTML+=""+j+"/"+i+"/"+an;
				optiuni.appendChild(nou);
				j=j+1;
			}
		}
		if(j==31 && (i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12))
		{	
			var nou=document.createElement("option");
            
			nou.innerHTML+=""+j+"/"+i+"/"+an;
			optiuni.appendChild(nou);
		}
		j=1;
	}
}

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
	
function blocheazaUtiliz(idUtiliz){
      var http = new XMLHttpRequest();
		var url = '/blocheaza';
		var params = `id=${idUtiliz}`;
		http.open('POST', url, true);

		http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(params);
    alert("Utilizator blocat!");
}
function stergeUtiliz(idUtiliz){
      var http = new XMLHttpRequest();
		var url = '/stergeUtiliz';
		var params = `id=${idUtiliz}`;
		http.open('POST', url, true);

		http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(params);
    alert("Utilizator sters!");
}
	
