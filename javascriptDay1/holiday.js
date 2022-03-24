let dayWeek;
let dayYear;
let currTime;

(dayWeek = "Saturday"), (dayYear = "Dec 14th"), (currTime = "1 pm");
(dayWeek = "Monday"), (dayYear = "Jan 17th"), (currTime = "4 pm");
(dayWeek = "Wednesday"), (dayYear = "Feb 2nd"), (currTime = "10:30 am");
(dayWeek = "Thursday"), (dayYear = "Feb 17th"), (currTime = "5:05 pm");
(dayWeek = "Friday"), (dayYear = "Feb 18th"), (currTime = "9:00 pm");

if (dayWeek === "Saturday" || dayWeek === "Sunday") {
  dayWeek = true;
}

if (dayYear === "Jan 17th") {
  dayYear = true;
}

if (currTime.includes("am")) {
  currTime = parseInt(currTime);
} else if (currTime.includes("pm")) {
  currTime = parseInt(currTime) + 12;
}

if (dayWeek===true || dayYear===true) {
  console.log("The store is closed.");
} else if (currTime > 8 && currTime < 18) {
  console.log("The store is open for business.");
} else {
  console.log("The store is closed.");
}
