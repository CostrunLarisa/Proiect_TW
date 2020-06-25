
const AVAILABLE_WEEK_DAYS = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
const localStorageName = 'calendar-events';
function afiseazaCamp(){
      var loc=document.querySelectorAll("#calendar .left-side .add-event-day");
            loc[0].style.left="0px";
            loc[0].style.float="none";
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
                {textTemplate+="<div class='templ_student'>\
			     <p>Nume : <%= eve.id%> </p>\
				<p>Despre : <%= eve.descriere %> </p>\
				<p>Data Inregistrare : <%= eve.dataInreg %> </p>\
				</div>";
                break;}
            }
			//adaug textul cu afisarea studentilor in container
			container.innerHTML=textTemplate;
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

        let daysTemplate = "";
        days.forEach(day => {
            daysTemplate += `<li class="${day.currentMonth ? '' : 'another-month'}${day.today ? ' active-day ' : ''}${day.selected ? 'selected-day' : ''}${day.hasEvent ? ' event-day' : ''}" data-day="${day.dayNumber}" data-month="${day.month}" data-year="${day.year}"></li>`
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
            this.drawAll()
        });

        this.elements.nextYear.addEventListener('click', e => {
            let calendar = this.getCalendar();
            this.updateTime(calendar.nYear);
            this.drawAll()
        });

        this.elements.month.addEventListener('click', e => {
            let calendar = this.getCalendar();
            let month = e.srcElement.getAttribute('data-month');
            if (!month || calendar.active.month == month) return false;

            let newMonth = new Date(calendar.active.tm).setMonth(month);
            this.updateTime(newMonth);
            this.drawAll()
        });


        this.elements.days.addEventListener('click', e => {
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
            if(element.className==" event-day")
                   {
                        afiseazaAjax(variabila);
                   }
            else{
            afiseazaCamp();
            this.elements.eventAddBtn.addEventListener('click', e => {
            let fieldValue = `${Number(month) + 1}/${day}/${year}`;
            var valoare= document.getElementById("optiunile");
            if(valoare.value=="rosu")document.querySelectorAll(".selected-day:after")[0].style.background="#d3152f";
            if(valoare.value=="galben")element.style.background="yellow";
            if(valoare.value=="verde")document.querySelectorAll(".selected-day:after")[0].style.background="green";
            
            if (!fieldValue) return false;
            let dateFormatted = this.getFormattedDate(new Date(this.date));
            if (!this.eventList[dateFormatted]) this.eventList[dateFormatted] = [];
            this.eventList[dateFormatted].push(fieldValue);
            localStorage.setItem(localStorageName, JSON.stringify(this.eventList));
            
        })}
        });


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

}



(function () {
    new CALENDAR({
        id: "calendar"
    })
})();
    