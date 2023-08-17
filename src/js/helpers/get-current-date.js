function getCurrentDate() {
  const monthArr = [
    "січня",
    "лтого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const currentDate = new Date();
  const currentMonth = monthArr.find(
    (_, index) => index === currentDate.getMonth()
  );
  const date = {
    currentHours: currentDate.getHours().toString().padStart(2, "0"),
    currentMinutes: currentDate.getMinutes().toString().padStart(2, "0"),
    currentDays: currentDate.getDate().toString().padStart(2, "0"),
    currentMonth: currentMonth,
    currentYear: currentDate.getFullYear(),
  };
  return date;
}

export { getCurrentDate};
