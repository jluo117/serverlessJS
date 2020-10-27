function nextSunday(){ //should return date in String
  var todayDay = new Date();
  if (todayDay.getDay() == 0){
    return String(todayDay.getMonth()+1) + " " + String(todayDay.getDate()) + " " + String(todayDay.getFullYear());
  }
  var daysTillSunday = 7 - todayDay.getDay();
  todayDay.setDate(todayDay.getDate() + 7-todayDay.getDay());
  return String(todayDay.getMonth()+1) + " " + String(todayDay.getDate()) + " " + String(todayDay.getFullYear());
}
