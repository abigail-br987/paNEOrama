export const formatLongDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export const isLeapYear = (year: number) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const dateFromYearAndDay = (year: number, day: number) => {
    const date = new Date(year, 0);
    date.setDate(day);
    return date;
};

export const formatDate = (date: Date): string => {
    if (typeof date === "string") {
        date = new Date(date);
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const getDayOfYear = (date: Date) => {
    const yearStart = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - yearStart.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
};

export const daysInYear = (year: number) => (isLeapYear(year) ? 366 : 365);
