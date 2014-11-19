window.onload = function calendar(){
	var daysLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	var monthsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var daysInMonthes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	var currentDate = new Date();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();

	var firstOfThisMonth = new Date(year, month, 1);
	var firstWeekDay = firstOfThisMonth.getDay();
	var daysInThisMonth = daysInMonthes[month];

	// If Leap Year
	if (month == 1){
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
			daysInThisMonth = 29;
		}
	}


	// Start Generate
	var calendarDiv = document.getElementById('calendar');
	var createDiv = function(divClass){
		var newDiv = document.createElement('div');
		newDiv.className = divClass;
		return newDiv;
	}

	// Show Month Name
	var showMonthName = function(){
		var monthName = monthsLabels[month];
		var div = createDiv("monthname");
		var monthNameNode = document.createTextNode(monthName + ", " + year);
		div.appendChild(monthNameNode);
		calendarDiv.appendChild(div);
	}
	showMonthName();

	// Show Days Names
	var showDaysNames = function(){
		for (var i = 0; i <= 6; i++){
			var div = createDiv("dayname");
			var dayNameNode = document.createTextNode(daysLabels[i]);
			div.appendChild(dayNameNode);
			calendarDiv.appendChild(div);
		}
	}
	showDaysNames();

	// Show Date Cells
	var cellsCounter = 1;
	var showDateCells = function(){
		for (var i = 1; i <= 42; i++){
			if (i >= firstWeekDay && i < daysInThisMonth + firstWeekDay){
				var div = createDiv("cellname");
				var dateCellNode = document.createTextNode(cellsCounter);
				div.appendChild(dateCellNode);
				calendarDiv.appendChild(div);
				cellsCounter += 1
			} else {
				var div = createDiv("cellname");
				calendarDiv.appendChild(div);
			}
		}
	}
	showDateCells();

};