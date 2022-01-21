import { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
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
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [openEvent, setOpenEvent] = useState(false);

  let events = todos.map((todo) => {
    return {
      title: todo.title,
      description: todo.description,
      start: new Date(todo.dueDate),
      end: new Date(todo.dueDate),
    };
  });
  const selectEventHandler = (slot) => {
    setEventTitle(slot.title);
    setEventDescription(slot.description);
    setOpenEvent(true);
  };

  return (
    <div className="calendar-view">
      <Dialog
        open={openEvent}
        onClose={() => setOpenEvent(false)}
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle
          id="alert-dialog-title"
          className="calendar-view-dialog-title"
        >
          {eventTitle}
        </DialogTitle>
        <DialogContent className="calendar-view-dialog-content">
          <DialogContentText id="alert-dialog-description">
            {eventDescription}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Calendar
        localizer={localizer}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        events={events}
        popup={true}
        view={Views.MONTH}
        onView={() => {}}
        onSelectEvent={selectEventHandler}
        selectable={true}
        style={{ height: 500 }}
      />
    </div>
  );
};
export default CalendarView;
