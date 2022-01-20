import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = ({ todos }) => {
  let events = todos.map((todo) => {
      return {
          title: todo.title,
          start: new Date(todo.dueDate),
          end: new Date(todo.dueDate)
      }
  });
  return (
    <div>
      <Calendar
        className="calendar-view"
        localizer={localizer}
        defaultView="month"
        view={Views.MONTH}
        onView={() => {}}
        startAccessor="start"
        endAccessor="end"
        events={events}
        style={{ height: 500 }}
        selectable={false}
      />
    </div>
  );
};
export default CalendarView;
