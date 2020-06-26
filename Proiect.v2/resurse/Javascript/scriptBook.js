window.onload=function(){
    cerere();
    function cerere(){
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();
	
	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					var obJson = JSON.parse(this.responseText);
					afiseajaJsonTemplate(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	ajaxRequest.open("GET", "/json/useri.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

	function afiseajaJsonTemplate(obJson) { 
			//in acets div voi afisa template-urile   
			let container=document.getElementById("afiseazaUtilizatori");
			var textTemplate ="";
			for(let i=0;i<obJson.useri.length;i++){
                {if(obJson.useri[i])
                if(obJson.useri[i].rol=="user"){
                    
                    textTemplate+=(ejs.render("<div class='templ_student'>\
			     <p>Id: <%= useri.id%> </p>\
				<p>Nume : <%= useri.username %> </p>\
				<p>Data Inregistrare : <%= useri.dataInreg %> </p>\
                <button class='block' onclick='blocheazaUtiliz( <%= useri.id%> )'>Blocheaza user!</button> \
                <button class='stergeMa' onclick='stergeUtiliz( <%= useri.id%> )'>Sterge user!</button> \
				</div>",                    
				{useri: obJson.useri[i]}));}
                }
            }
			container.innerHTML=textTemplate;
	}
}}