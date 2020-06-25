
window.onload=function(){

    function afiseazaAjax(obiect){
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();


	//la schimbarea starii obiectului XMLHttpRequest (la schimbarea proprietatii readyState)
	/* stari posibile:
	0 - netrimis
	1 - conexiune deschisa
	2 - s-au transmis headerele
	3 - se downleadeaza datele (datele sunt impartite in pachete si el primeste cate un astfel de pachet)
	4 - a terminat
	*/
	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
                console.log("ceva");
                	
					//in proprietatea responseText am contintul fiserului JSON
					var obJson = JSON.parse(this.responseText);
					afiseajaJsonTemplate(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	ajaxRequest.open("GET", "/json/evenimente.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

	function afiseajaJsonTemplate(obJson) { 
			//in acets div voi afisa template-urile   
			let container=document.getElementById("afisEve");

			//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
			var textTemplate ="";
			//parcurg vetorul de studenti din obJson
			for(let i=0;i<obJson.eve.length;i++){
                console.log(obiect);
                if(obiect==obJson.eve[i].data)
                {textTemplate+=(ejs.render("<div class='templ_student'>\
			     <p>Nume : <%= eve.id%> </p>\
				<p>Despre : <%= eve.descriere %> </p>\
				<p>Data Inregistrare : <%= eve.dataInreg %> </p>\
				</div>",                    
				{eve: obJson.eve[i]}));}
                break;
            }
			//adaug textul cu afisarea studentilor in container
			container.innerHTML=textTemplate;
	}
}}