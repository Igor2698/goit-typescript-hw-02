/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WorkingDays {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thirsday = "thirsday",
  Friday = "friday",
}

enum WeekDays {
  Saturday = "Suterday",
  Sunday = "sunday",
}

function isWeekend(day: WeekDays | WorkingDays): string {
  if (day === WeekDays.Saturday || day === WeekDays.Sunday) {
    return "Day off";
  } else {
    return "Work day";
  }
}
