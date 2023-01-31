import { PropsTypeDay } from "@/common/model/day";

const Day = (props: PropsTypeDay) => {
  let { month, date, year, months, difference } = props;
  const dateNow: Date = new Date();
  if (props !== undefined) {
    date = props.date;
    month = props.month;
    year = props.year;
  }

  const stories = () => {
    return ""; // cal-task
  };

  const showdateNow = (
    dateNow: any,
    date: any,
    month: string,
    year: any,
    months: any
  ) => {
    if (
      dateNow.getDate() == date &&
      dateNow.getMonth() == months.indexOf(month) &&
      dateNow.getFullYear() == year
    ) {
      return "today";
    }
    return "";
  };

  return (
    <>
      <a href={difference ? "#" : ""} className={"day cal-center "+ (difference ? "" : "difference-month") + stories()}>
        <div className={showdateNow(dateNow, date, month, year, months)}>
          {date}
        </div>
      </a>
    </>
  );
};

export default Day;
