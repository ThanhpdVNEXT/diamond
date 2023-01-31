import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Day from "./date";
const Month = () => {
  const [stateDate, setStateDate] = useState<Date>(new Date());
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Su", // Sunday
    "Mo", // Monday
    "Tu", // Tuesday
    "We", // Wednesday
    "Th", // Thursday
    "Fr", // Friday
    "Sa", // Saturday
  ];

  let year = stateDate.getFullYear();
  let month = stateDate.getMonth();

  const day = 1;
  const days: Date[] = [];

  const today = new Date(year, month, day);
  let monthEndDate = 31;

  const decreaseMonth = () => {
    let month = stateDate.getMonth();
    if (month === 0) {
      month = 11;
      year -= 1;
    } else {
      month--;
    }
    setStateDate(new Date(year, month, day));
  };

  const increaseMonth = () => {
    let month = stateDate.getMonth();
    if (month === 11) {
      month = 0;
      year += 1;
    } else {
      month++;
    }
    setStateDate(new Date(year, month, day));
  };

  if (today.getMonth() === 1) {
    if (today.getFullYear() % 4 === 0) {
      monthEndDate = 29;
    } else {
      monthEndDate = 28;
    }
  } else {
    if (
      today.getMonth() === 4 ||
      today.getMonth() === 6 ||
      today.getMonth() === 9 ||
      today.getMonth() === 11
    ) {
      monthEndDate = 30;
    }
  }
  var rows = [0],
    i = 0,
    len = 10;
  while (++i <= len) rows.push(i);

  let startDate = new Date(year, month, day);
  startDate.setDate(1);

  let endDate = new Date(year, month, day);
  endDate.setDate(monthEndDate);

  for (
    let i = 1 - today.getDate() - startDate.getDay();
    i <= monthEndDate - today.getDate() + (6 - endDate.getDay());
    i++
  ) {
    let date = new Date(year, month, day);
    date.setDate(date.getDate() + i);

    days.push(date);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="center">
            <FontAwesomeIcon icon={faCaretLeft} onClick={decreaseMonth}/>
            <p className="name-date">
              {months[stateDate.getMonth()] + ", " + stateDate.getFullYear()}
            </p>
            <FontAwesomeIcon icon={faCaretRight} onClick={increaseMonth}/>
          </div>
        </div>
        <div className="calendar">
          <div className="row weekdays">
            {dayNames.map((day, index) => (
              <div className={"day"} key={index}>
                {day}
              </div>
            ))}
          </div>
          {rows.map(function (i) {
            return (
              <div className="row" key={i}>
                {days.map((element: Date, index: number) => {
                  if (index + 1 > 7 * i && index + 1 <= 7 * (i + 1))
                    return (
                      <Day
                        key={element.getDate() + "-" + element.getMonth()}
                        month={months[element.getMonth()]}
                        date={element.getDate()}
                        year={element.getFullYear()}
                        months={months}
                        difference={element.getMonth() === month }
                      />
                    );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Month;
