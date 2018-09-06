var date=new Date();
		var month=date.getMonth();
		function daysInMonth(month,year)
		{
			return (new Date(year,month+1,0).getDate());
		}
		function getdates()
		{
			var start;
			var end;
			var days=1;
			var d = new Date(date.getFullYear(),month,1);
			var totalDays=daysInMonth(month,date.getFullYear());
				for(var i=0;i<7;i++)
				{
					if(document.getElementById("cal").rows[0].cells[i].id==d.getDay())
						 {
					 		start=i;
					 		break;
					 	}
				}
			for(var x=1;x<7;x++)
			{
				for(var y=start;y<7;y++)
				{
					document.getElementById("cal").rows[x].cells[y].innerHTML=days;
					days++;
					if((days-1)==totalDays)
						return;
				}
				start=0;
			}
		}
		function setMonth()
		{
			var monthName = new Array();
			monthName[0] = "January";
			monthName[1] = "February";
			monthName[2] = "March";
			monthName[3] = "April";
			monthName[4] = "May";
			monthName[5] = "June";
			monthName[6] = "July";
			monthName[7] = "August";
			monthName[8] = "September";
			monthName[9] = "October";
			monthName[10] = "November";
			monthName[11] = "December";
			var n = monthName[month];
			document.getElementById("month").innerHTML=n;
		}
		function createTable()
		{
			document.getElementById("cal").innerHTML="<tr><th id=0>Sun</th><th id=1>Mon</th><th id=2>Tue</th><th id=3>Wed</th><th id=4>Thu</th><th id=5>Fri</th><th id=6>Sat</th></tr>"
			for(var row=0;row<6;row++)
				{
					var rNode=document.createElement("TR");
					for(var box=0;box<7;box++){
						var cNode=document.createElement("TD");
						rNode.appendChild(cNode);
					}
					document.getElementById("cal").appendChild(rNode);
			}
		}
		function setYear()
		{
			document.getElementById("Year").innerHTML=date.getFullYear();
		}
		function prev()
		{
			if(month==0)
				return;
			else 
			{
				month--;
				setMonth();
				setYear();
				createTable();
				getdates();
			}
		}
		function next()
		{
			if(month==11)
				return;
			else
			{
				month++;
				setMonth();
				setYear();
				createTable();
				getdates();
			}	 
		}