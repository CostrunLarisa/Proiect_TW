
const AVAILABLE_WEEK_DAYS = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
const CULORI=['Ridicat','Mediu','Foarte ridicat'];
const localStorageName = 'calendar-events';
function afiseazaCamp(){
      var loc=document.querySelectorAll("#calendar .left-side .add-event-day");
            loc[0].style.left="0px";
            loc[0].style.float="none";
}
function afiseazaCampInitial()
{
    var loc=document.querySelectorAll("#calendar .left-side .add-event-day");
            loc[0].style.left="-109%";
            loc[0].style.float="left";
}
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
 
                if(obiect==obJson.eve[i].data)
                {
                textTemplate+="Nume :"+ obJson.eve[i].nume+" Despre : "+obJson.eve[i].descriere+"  Ora : "+ obJson.eve[i].ora + "Prioritate:"+obJson.eve[i].prioritate;
			     container.innerHTML=textTemplate;
              }
            }
			//adaug textul cu afisarea studentilor in container
			
	}
}


class CALENDAR {
    constructor(options) {
        this.options = options;
        this.elements = {
            days: this.getFirstElementInsideIdByClassName('calendar-days'),
            week: this.getFirstElementInsideIdByClassName('calendar-week'),
            month: this.getFirstElementInsideIdByClassName('calendar-month'),
            year: this.getFirstElementInsideIdByClassName('calendar-current-year'),
            eventList: this.getFirstElementInsideIdByClassName('current-day-events-list'),
            eventField: this.getFirstElementInsideIdByClassName('add-event-day-field'),
            eventAddBtn: this.getFirstElementInsideIdByClassName('add-event-day-field-btn'),
            currentDay: this.getFirstElementInsideIdByClassName('calendar-left-side-day'),
            currentWeekDay: this.getFirstElementInsideIdByClassName('calendar-left-side-day-of-week'),
            prevYear: this.getFirstElementInsideIdByClassName('calendar-change-year-slider-prev'),
            nextYear: this.getFirstElementInsideIdByClassName('calendar-change-year-slider-next')
        };

        this.eventList = JSON.parse(localStorage.getItem(localStorageName)) || {};

        this.date = +new Date();
        this.options.maxDays = 37;
        this.init();
    }
// App methods
    init() {
        if (!this.options.id) return false;
        
        this.drawAll();
        this.eventsTrigger();
        this.afiseazaTot();
    }
    afiseazaTot(){
       
        var ceva = JSON.parse(localStorage.getItem(localStorageName));
       if(ceva)Object.values(ceva).map(item => {
           if(item[0].slice(1,2)=="/")
               {
                   var day=item[0].slice(0,1);
               console.log(item[0]);
                   if(item[0].slice(4,5)=="/"){
                    var month=item[0].slice(2,4);
                   var year=item[0].slice(5,9);
                   }
                    else{
                        var month=item[0].slice(2,3);
                   var year=item[0].slice(4,9);
                    }
               }
           else{
                if(item[0].slice(5,6)=="/"){
                    var day=item[0].slice(0,2);
                    var month=item[0].slice(3,5);
                   var year=item[0].slice(6,10);
                   }
              else{ var day=item[0].slice(0,2);
           console.log(item[0]);
                var month=item[0].slice(3,4);
               var year=item[0].slice(5,9);
                  }
           }
            
            console.log(month);
           console.log(year);
                var c=document.querySelectorAll(".calendar-days-list .calendar-days>li");
           if(item[1]=="Ridicata")
               {
                for(var i=0;i<c.length;i++)
                    {
                        if(c[i].getAttribute('data-day')==day && c[i].getAttribute('data-month')==month && c[i].getAttribute('data-year')==year )
                            {
                                c[i].style.backgroundColor="green";
                                c[i].style.borderRadius="50px";
                                
                                break;
                            }
                    }
               }   
           if(item[1]=="Foarte ridicata")
               {
                   for(var i=0;i<c.length;i++)
                    {
                        if(c[i].getAttribute('data-day')==day && c[i].getAttribute('data-month')==month && c[i].getAttribute('data-year')==year )
                            {
                                c[i].style.backgroundColor="red"
                                c[i].style.borderRadius="50px";
                                 
                                break;
                            }
                    }
               }
           if(item[1]=="Medie")
               {
                   for(var i=0;i<c.length;i++)
                    {
                        if(c[i].getAttribute('data-day')== day&& c[i].getAttribute('data-month')==month && c[i].getAttribute('data-year')==year )
                            {
                                c[i].style.backgroundColor="yellow";
                                c[i].style.borderRadius="50px";
                               
                                break;
                            }
                    }
               }
           
       })
          var ajaxRequest = new XMLHttpRequest();
            ajaxRequest.onreadystatechange = function() {
                    //daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
                    if (this.readyState == 4 && this.status == 200) {

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
                    var ob=document.querySelectorAll(".calendar-days-list .calendar-days>li");
                    for(var object of ob)
                        {
                         
                        var day=object.getAttribute('data-day');
                        var month=object.getAttribute('data-month');
                        var year=object.getAttribute('data-year');
                        
                        var cls= `${day}/${Number(month) + 1}/${year}`;
                        var textTemplate ="";
                    //parcurg vetorul de studenti din obJson
                    for(let i=0;i<obJson.eve.length;i++){

                        if(cls==obJson.eve[i].data)
                        {
                            var p1=document.createElement("span");
                           
                            p1.innerHTML=obJson.eve[i].nume+"<br>";
                            p1.innerHTML+=obJson.eve[i].ora ;
                            p1.style.width="10px";
                            p1.style.marginLeft="-50px";
                            
                            var nou=document.createElement("div");
                            nou.appendChild(p1);
                        
                            nou.className="ascuns";
                            nou.style.position="absolute";
                            nou.style.lineHeight="15px";
                
                         object.appendChild(nou);
                        
                        console.log(textTemplate);
                      }
                    }
                        }
            }
    }
    // draw Methods
    drawAll() {
        this.drawWeekDays();
        this.drawMonths();
        this.drawDays();
        this.drawYearAndCurrentDay();
        

    }

    drawYearAndCurrentDay() {
        let calendar = this.getCalendar();
        this.elements.year.innerHTML = calendar.active.year;
        this.elements.currentDay.innerHTML = calendar.active.day;
        this.elements.currentWeekDay.innerHTML = AVAILABLE_WEEK_DAYS[calendar.active.week];
    }

    drawDays() {
        let calendar = this.getCalendar();

        let latestDaysInPrevMonth = this.range(calendar.active.startWeek).map((day, idx) => {
            return {
                dayNumber: this.countOfDaysInMonth(calendar.pMonth) - idx,
                month: new Date(calendar.pMonth).getMonth(),
                year: new Date(calendar.pMonth).getFullYear(),
                currentMonth: false
            }
        }).reverse();


        let daysInActiveMonth = this.range(calendar.active.days).map((day, idx) => {
            let dayNumber = idx + 1;
            let today = new Date();
            return {
                dayNumber,
                today: today.getDate() === dayNumber && today.getFullYear() === calendar.active.year && today.getMonth() === calendar.active.month,
                month: calendar.active.month,
                year: calendar.active.year,
                selected: calendar.active.day === dayNumber,
                currentMonth: true
            }
        });


        let countOfDays = this.options.maxDays - (latestDaysInPrevMonth.length + daysInActiveMonth.length);
        let daysInNextMonth = this.range(countOfDays).map((day, idx) => {
            return {
                dayNumber: idx + 1,
                month: new Date(calendar.nMonth).getMonth(),
                year: new Date(calendar.nMonth).getFullYear(),
                currentMonth: false
            }
        });

        let days = [...latestDaysInPrevMonth, ...daysInActiveMonth, ...daysInNextMonth];

        days = days.map(day => {
            let newDayParams = day;
            let formatted = this.getFormattedDate(new Date(`${Number(day.month) + 1}/${day.dayNumber}/${day.year}`));
            newDayParams.hasEvent = this.eventList[formatted];
            return newDayParams;
        });
           days = days.map(day => {
            let newd= day;
            let formatted = this.getFormattedDate(new Date(`${Number(day.month) + 1}/${day.dayNumber}/${day.year}`));
            newd.hasField = this.eventField;
            return newd;
        });

        let daysTemplate = "";
        days.forEach(day => {
            daysTemplate += `<li class="${day.currentMonth ? '' : 'another-month'}${day.today ? ' active-day ' : ''}${day.selected ? 'selected-day' : ''}${day.hasEvent ? ' event-day' : ''}" data-day="${day.dayNumber}" data-month="${day.month}" data-year="${day.year}" id="tooltip"></li>`
        });

        this.elements.days.innerHTML = daysTemplate;
    }

    drawMonths() {
        let availableMonths = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Noi", "Dec"];
        let monthTemplate = "";
        let calendar = this.getCalendar();
        availableMonths.forEach((month, idx) => {
            monthTemplate += `<li class="${idx === calendar.active.month ? 'active' : ''}" data-month="${idx}">${month}</li>`
        });

        this.elements.month.innerHTML = monthTemplate;
    }

    drawWeekDays() {
        let weekTemplate = "";
        AVAILABLE_WEEK_DAYS.forEach(week => {
            weekTemplate += `<li>${week.slice(0, 3)}</li>`
        });

        this.elements.week.innerHTML = weekTemplate;
    }
    
    // Service methods
    eventsTrigger() {
        this.elements.prevYear.addEventListener('click', e => {
            let calendar = this.getCalendar();
            this.updateTime(calendar.pYear);
            this.drawAll();
            this.afiseazaTot()
        });

        this.elements.nextYear.addEventListener('click', e => {
            let calendar = this.getCalendar();
            this.updateTime(calendar.nYear);
            this.drawAll();
            this.afiseazaTot()
        });

       
        this.elements.month.addEventListener('click', e => {
            let calendar = this.getCalendar();
            let month = e.srcElement.getAttribute('data-month');
            if (!month || calendar.active.month == month) return false;

            let newMonth = new Date(calendar.active.tm).setMonth(month);
            this.updateTime(newMonth);
            this.drawAll();
            this.afiseazaTot()
        });


        this.elements.days.addEventListener('click', e => {
            let container=document.getElementById("afisEve");
            container.innerHTML="";
            let element = e.srcElement;
            let day = element.getAttribute('data-day');
            let month = element.getAttribute('data-month');
            let year = element.getAttribute('data-year');
            if (!day) return false;
            let strDate = `${Number(month) + 1}/${day}/${year}`;
            var field=document.getElementById("data");
            field.value=`${day}/${Number(month) + 1}/${year}`;
            var variabila=`${day}/${Number(month) + 1}/${year}`;
            this.updateTime(strDate);
            this.drawAll();
            this.afiseazaTot();
            if(element.className==" event-day")
                   {
                        afiseazaAjax(variabila);
                        afiseazaCampInitial();
                   }
            else{
            let container=document.getElementById("afisEve");
            container.innerHTML="";
            afiseazaCamp();
                if( this.elements.eventAddBtn)
                {this.elements.eventAddBtn.addEventListener('click', e => {
           
            let fieldValue = `${Number(month) + 1}/${day}/${year}`;
            if (!fieldValue) return false;
            let dateFormatted = this.getFormattedDate(new Date(this.date));
            if (!this.eventList[dateFormatted]) this.eventList[dateFormatted] = [];
            this.eventList[dateFormatted].push(dateFormatted);
            this.eventList[dateFormatted].push(this.elements.eventField.value);
            localStorage.setItem(localStorageName, JSON.stringify(this.eventList));
            
                var valoare= document.getElementById("optiunile");
                var ceva=document.querySelectorAll(".calendar-days-list .calendar-days>li");
                for(var i=0;i<ceva.length;i++)
                    {
                        if(ceva[i].getAttribute('data-day')==day && ceva[i].getAttribute('data-month')==month && ceva[i].getAttribute('data-year')==year )
                            {
                                 if(valoare.value=="Foarte ridicata")ceva[i].style.backgroundColor="red";
                                if(valoare.value=="Ridicata")ceva[i].style.backgroundColor="green";
                                if(valoare.value=="Medie")ceva[i].style.backgroundColor="yellow";
                                break;
                            }
                    }
                /*var nou=ceva.querySelectorAll(`[data-month='${Number(month) + 1}']`);
                var nou2=nou.querySelectorAll(`[data-year='${year}']`);
                console.log(nou2);*/
           
             afiseazaCampInitial();       
        })}
                
            }
         
        });
           /*this.elements.days.addEventListener('onMouseOver', o => {
      
            var ajaxRequest = new XMLHttpRequest();
            ajaxRequest.onreadystatechange = function() {
                    //daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
                    if (this.readyState == 4 && this.status == 200) {

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
                    var ob=document.querySelectorAll(".calendar-days-list .calendar-days>li");
                    for(var object of ob)
                        {
                         
                        var cls=""+object.getAttribute('data-day')+"/"+object.getAttribute('data-month')+"/"+object.getAttribute('data-year');
                        var textTemplate ="";
                    //parcurg vetorul de studenti din obJson
                    for(let i=0;i<obJson.eve.length;i++){
                        console.log(obiect);
                        if(obiect==obJson.eve[i].data)
                        {
                        textTemplate+="Nume :"+ obJson.eve[i].nume+ "Ora : "+ obJson.eve[i].ora ;
                         object.innerHTML=textTemplate;
                        
                      }
                    }
                        }
            }
 
           });*/


      /*this.elements.eventAddBtn.addEventListener('click', e => {
            let fieldValue = this.elements.eventField.value;
          var cev=document.querySelectorAll(".selected-day:after");
            cev[0].style.backgroundColor="#d3152f";
            if (!fieldValue) return false;
            let dateFormatted = this.getFormattedDate(new Date(this.date));
            if (!this.eventList[dateFormatted]) this.eventList[dateFormatted] = [];
            this.eventList[dateFormatted].push(fieldValue);
            localStorage.setItem(localStorageName, JSON.stringify(this.eventList));
            
        });*/


    }


    updateTime(time) {
        this.date = +new Date(time);
    }

    getCalendar() {
        let time = new Date(this.date);

        return {
            active: {
                days: this.countOfDaysInMonth(time),
                startWeek: this.getStartedDayOfWeekByTime(time),
                day: time.getDate(),
                week: time.getDay(),
                month: time.getMonth(),
                year: time.getFullYear(),
                formatted: this.getFormattedDate(time),
                tm: +time
            },
            pMonth: new Date(time.getFullYear(), time.getMonth() - 1, 1),
            nMonth: new Date(time.getFullYear(), time.getMonth() + 1, 1),
            pYear: new Date(new Date(time).getFullYear() - 1, 0, 1),
            nYear: new Date(new Date(time).getFullYear() + 1, 0, 1)
        }
    }

    countOfDaysInMonth(time) {
        let date = this.getMonthAndYear(time);
        return new Date(date.year, date.month + 1, 0).getDate();
    }

    getStartedDayOfWeekByTime(time) {
        let date = this.getMonthAndYear(time);
        return new Date(date.year, date.month, 1).getDay();
    }

    getMonthAndYear(time) {
        let date = new Date(time);
        return {
            year: date.getFullYear(),
            month: date.getMonth()
        }
    }

    getFormattedDate(date) {
    
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    range(number) {
        return new Array(number).fill().map((e, i) => i);
    }
 getFirstElementInsideIdByClassName(className) {
        return document.getElementById(this.options.id).getElementsByClassName(className)[0];
    }
    getFirstElementInsideId(className) {
        return document.getElementById(className);
    }

}

(function () {
    new CALENDAR({
        id: "calendar"
    })
})();
    