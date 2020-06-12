window.onload=function(){
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
					//in proprietatea responseText am contintul fiserului JSON
					document.getElementById("afisJson").innerHTML=this.responseText;
					var obJson = JSON.parse(this.responseText);
					afiseajaJsonTemplate(obJson);
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	ajaxRequest.open("GET", "/json/produs.json", true);
	//trimit catre server cererea
	ajaxRequest.send();

	function afiseajaJsonTemplate(obJson) { 
			//in acets div voi afisa template-urile   
			let container=document.getElementById("afisTemplate");

			//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
			let textTemplate ="";
			//parcurg vetorul de studenti din obJson
			for(let i=0;i<obJson.produs.length;i++){
				//creez un template ejs (primul parametru al lui ejs.render)
				textTemplate+=(ejs.render("<div class='templ_student'>\
				<p>Id: <%= produs.tag %></p>\
				<p>Pret: <%= produs.pret %></p>\
				<p>Nume : <%= produs.nume %> </p>\
				<p>Selectat : <%= produs.selectat %> </p>\
				<p>Stoc : <%= produs.stoc %> </p>\
				<p>Despre : <%= produs.about %> </p>\
				<p>Data Inregistrare : <%= produs.dataInreg %> </p>\
				</div>",                    
				{produs: obJson.produs[i]}));
			} 
			//adaug textul cu afisarea studentilor in container
			container.innerHTML=textTemplate;
	}
}