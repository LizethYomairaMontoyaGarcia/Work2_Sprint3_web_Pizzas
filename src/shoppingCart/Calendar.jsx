import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AiOutlineClose } from "react-icons/ai";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";

dayjs.extend(isBetweenPlugin);

export default function Calendar() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [date, setDate] = useState({});

  let infoDate = {};
  const calendarOperation = (date) => {
    infoDate = { day: date.$D, month: date.$M + 1, year: date.$y };
    setDate(infoDate);
    // Guardar la información en Session Storage
    sessionStorage.setItem("selectedDateOutcome", JSON.stringify(infoDate));

    closeModal();
  };

  return (
    <div>
      <div>
        <div>
          <span
            onClick={() => {
              openModal();
            }}
          >
            {date.day ? (
              <span>
                {date.day}/{date.month}/{date.year}
              </span>
            ) : (
              <span>20/06/2023</span>
            )}
          </span>
        </div>
      </div>
      {modalOpen && (
        <div>
          <div>
            <span onClick={closeModal}>
              <AiOutlineClose size={24} />
            </span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={dayjs(new Date())}
                onChange={(date) => calendarOperation(date)}
                minDate={dayjs(new Date())}
              />
            </LocalizationProvider>
          </div>
        </div>
      )}
    </div>
  );
}
