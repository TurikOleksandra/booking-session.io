import {
  addDays,
  addMinutes,
  format,
  startOfDay,
  isValid,
  parseISO,
} from "date-fns";

const WEEKS_TO_SHOW = 6;
const DAYS_IN_WEEK = 7;
const MINUTES_INTERVAL = 15;
const TIME_FORMAT = "hh:mm a";
const DATE_FORMAT = "PPpp";

export type TimeString = `${number}:${number}${" AM" | " PM"}`;

interface ParsedDateTime {
  timestamp: number;
  formattedDate: string;
  error?: string;
}

export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && isValid(date);
};

export const isValidTimeString = (time: string): boolean => {
  const timeRegex = /^(1[0-2]|0?[1-9]):([0-5][0-9]) (AM|PM)$/;
  return timeRegex.test(time);
};

export const getNextSixWeeksDates = (startDate: Date = new Date()): Date[] => {
  try {
    if (!isValidDate(startDate)) {
      throw new Error("Invalid start date provided");
    }

    const today = startOfDay(startDate);
    const totalDays = WEEKS_TO_SHOW * DAYS_IN_WEEK;

    return Array.from({ length: totalDays }, (_, i) => addDays(today, i));
  } catch (error) {
    console.error("Error generating dates:", error);
    return [];
  }
};

export const getAvailableTimes = (selectedDate: Date): TimeString[] => {
  try {
    if (!isValidDate(selectedDate)) {
      throw new Error("Invalid date provided");
    }

    const times: TimeString[] = [];
    const start = startOfDay(selectedDate);
    const end = addDays(start, 1);
    const now = new Date();
    let current = start;

    while (current < end) {
      if (selectedDate.toDateString() !== now.toDateString() || current > now) {
        times.push(format(current, TIME_FORMAT) as TimeString);
      }
      current = addMinutes(current, MINUTES_INTERVAL);
    }

    return times;
  } catch (error) {
    console.error("Error generating times:", error);
    return [];
  }
};

export const parseDateTimeToTimestamp = (
  date: Date,
  timeString: string
): ParsedDateTime => {
  try {
    if (!isValidDate(date)) {
      throw new Error("Invalid date provided");
    }

    if (!isValidTimeString(timeString)) {
      throw new Error("Invalid time format");
    }

    const dateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const [timeStr, period] = timeString.split(" ");
    const [hours, minutes] = timeStr.split(":").map(Number);

    let adjustedHours = hours;
    if (period === "PM" && hours !== 12) {
      adjustedHours = hours + 12;
    } else if (period === "AM" && hours === 12) {
      adjustedHours = 0;
    }

    dateTime.setHours(adjustedHours, minutes, 0, 0);

    return {
      timestamp: Math.floor(dateTime.getTime() / 1000),
      formattedDate: format(dateTime, DATE_FORMAT),
    };
  } catch (error) {
    return {
      timestamp: 0,
      formattedDate: "",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export const isTimeInPast = (date: Date, timeString: string): boolean => {
  const now = new Date();
  const parsedTime = parseDateTimeToTimestamp(date, timeString);
  return parsedTime.timestamp < Math.floor(now.getTime() / 1000);
};

export const formatDateForDisplay = (dateStr: string | Date): string => {
  try {
    const date = typeof dateStr === "string" ? parseISO(dateStr) : dateStr;
    if (!isValidDate(date)) {
      throw new Error("Invalid date");
    }
    return format(date, DATE_FORMAT);
  } catch {
    return "";
  }
};

export const getTimeRange = (
  startTime: TimeString,
  endTime: TimeString
): TimeString[] => {
  try {
    const start = parseDateTimeToTimestamp(new Date(), startTime);
    const end = parseDateTimeToTimestamp(new Date(), endTime);

    if (start.error || end.error) {
      throw new Error("Invalid time range");
    }

    const times: TimeString[] = [];
    let current = new Date(start.timestamp * 1000);
    const endDate = new Date(end.timestamp * 1000);

    while (current <= endDate) {
      times.push(format(current, TIME_FORMAT) as TimeString);
      current = addMinutes(current, MINUTES_INTERVAL);
    }

    return times;
  } catch (error) {
    console.error("Error generating time range:", error);
    return [];
  }
};
