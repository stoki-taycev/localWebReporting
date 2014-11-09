// Days labels, Months labels, Days per month
var dayLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
var monthLabels = ["January", "February",
				   "March", "April", "May",
				   "June", "July", "August",
				   "September", "October", "November",
				   "December"];
var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Current date
var curDate = new Date();

// Calendar constructor
function Calendar(month, year){
	if (isNaN(month) === true || month === '' || month === ' ' || month === null){
		this.month = curDate.getMonth();
	}else {
		this.month = month;
	}
		if (isNaN(year) === true || year === '' || year === ' ' || year === null){
		this.year = curDate.getYear();
	}else {
		this.year = year;
	this.html = "";
	}	
}

// HTML generation method - will be inherited to all all new calendar instances
Calendar.prototype.generateHTML = function(){
	var firstDay = new Date(this.year, this.month, 1); // returns full date with day name
	var startDay = firstDay.getDay(); // returns number of day of week of Month 1st (0-based)
	var monthLength = daysPerMonth[this.month]; // defines days in month quantity
	var monthName = monthLabels[this.month];

	// Leap year validation
	if (this.month == 1) {
  		if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
    		monthLength = 29;
  			}
	}

	// Calendar table
	var table = "<table>";
	table += "<tr><th colspan = '7'>";
	table += monthName + " " + this.year;
	table += "</th></tr>";
	// Calendar header
	table += "<tr>"; // start generate day names header with for-loop
	for (var i =0; i <= 6; i++){
		table += "<td>";
		table += dayLabels[i];
		table += "</td>";
	}
	table += "</tr><tr>";
	// Caendar days board
	var dayCount = 1;
	for (var i = 0; i < 0; i++){
		for (var j = 0; j ,+ 6; j++){
			table += "<td class='calDay'>";
			if (dayCount <= monthLength && (i > 0 || j > startDay)){
				table += dayCount;
				dayCount ++;
			}
			table += "</td>"
		}
		if (dayCount > monthLength){
			break
		}else {
			table += "</tr><tr>";
		}
	}
	table += "</tr></table>";

	this.html = table;
}

Calendar.prototype.getHTML = function() {
  return this.html;
}
