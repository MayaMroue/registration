import React, { useEffect, useState } from "react";
import "./DateInput.scss";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { Calendar } from "@amir04lm26/react-modern-calendar-date-picker";
import { CalendarFold } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

function DateInput({ setDate, disabled, date, minDate, maxDate, empty }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (date) {
      const newDate = new Date(date);
      if (!isNaN(newDate)) {
        setSelectedDay({
          year: newDate.getFullYear(),
          month: newDate.getMonth() + 1,
          day: newDate.getDate(),
        });
      }
    }
  }, [open, date]);

  function pad(number) {
    return number < 10 ? "0" + number : number;
  }

  function formatDateDisplay(day, month, year) {
    const date = new Date(year, month - 1, day);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    if (selectedDay != null) {
      const day = pad(selectedDay.day);
      const month = pad(selectedDay.month);
      const year = selectedDay.year;

      setDate(`${month}/${day}/${year}`);
      setShowDate(false);
    }
  }, [selectedDay, setDate]);

  const getValidDate = (date) => {
    const newDate = new Date(date);
    return !isNaN(newDate)
      ? {
          year: newDate.getFullYear(),
          month: newDate.getMonth() + 1,
          day: newDate.getDate(),
        }
      : null;
  };

  return (
    <div className="Calender_Main w-full ">
      <Popover onOpenChange={(e) => setOpen(e)}>
        <PopoverTrigger className="w-full">
          <div
            className={
              disabled
                ? "Calendar_Input Calendar_Input_disabled"
                : "Calendar_Input"
            }
            style={{
              border: empty ? "3px solid var(--pink)" : undefined,
            }}
            onClick={() => {
              if (!disabled) setShowDate(!showDate);
              else setShowDate(false);
            }}
          >
            <div
              className={
                disabled || !date
                  ? "Calendar_Field Calendar_Field_disabled"
                  : "Calendar_Field"
              }
              style={{
                textAlign: "left",
                fontSize: "0.9rem",
              }}
            >
              {selectedDay
                ? formatDateDisplay(
                    selectedDay.day,
                    selectedDay.month,
                    selectedDay.year
                  )
                : "DD-MM-YYYY"}
            </div>
            <CalendarFold color="var(--muted-grey)" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-fit bg-background p-0">
          <Calendar
            value={selectedDay || ""}
            onChange={setSelectedDay}
            colorPrimary="var(--primary)"
            calendarTodayClassName="selected_day"
            minimumDate={getValidDate(minDate)}
            maximumDate={getValidDate(maxDate)}
            calendarClassName="custom_calendar"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DateInput;
