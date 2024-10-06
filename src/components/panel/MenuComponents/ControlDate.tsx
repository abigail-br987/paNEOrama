import { useContext, useEffect, useState } from "react";
import { useMemo } from "react";
import GlobalStore from "@/lib/context/GlobalStore";
import {
    dateFromYearAndDay,
    getDayOfYear,
    formatLongDate,
    daysInYear,
} from "@/lib/utils/date";
import { formatTimeSpeed } from "@/lib/utils/display";
import { ChangeEventHandler } from "react";
import CheckboxOption from "../SmallComponents/CheckboxOption";
import Dropdown from "../SmallComponents/Dropdown";
import TitleOption2 from "../SmallComponents/TitleOption2";
import { BsCalendar3, BsChevronDown } from "react-icons/bs";

export const MAX_YEAR = 2089;

const ControlDate = () => {
    const [{ controls }, updateStore] = useContext(GlobalStore);
    const [{ year, day }, setDateParams] = useState({ year: 2024, day: 1 });

    const date = useMemo(() => dateFromYearAndDay(year, day), [year, day]);

    useEffect(() => {
        updateStore({ currentDate: date });
    }, [date]);

    const handleChange = (
        ev: React.ChangeEvent<HTMLInputElement>,
        param: "year" | "day",
    ) => {
        setDateParams((prev) => ({
            ...prev,
            [param]: Number(ev.target.value),
        }));
    };

    const handleTimeSpeedChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        updateStore({ controls: { timeSpeed: Number(ev.target.value) } });
    };

    const handlePausedChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        updateStore({ controls: { isPaused: ev.target.checked } });
    };

    const handleDateInputChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        const selectedDateParts = ev.target.value.split("-");
        const selectedDate = new Date(
            Date.UTC(
                parseInt(selectedDateParts[0]),
                parseInt(selectedDateParts[1]) - 1,
                parseInt(selectedDateParts[2]),
                12,
                0,
                0,
            ),
        );
        setDateParams({
            year: selectedDate.getUTCFullYear(),
            day: getDayOfYear(selectedDate),
        });
    };

    useEffect(() => {
        if (controls.isPaused) return;

        const interval = setInterval(() => {
            setDateParams(({ year, day }) => {
                const maxDay = daysInYear(year);
                day++;

                if (day >= maxDay) {
                    year++;

                    if (year > MAX_YEAR) {
                        year = MAX_YEAR;
                        day--;
                        updateStore({ controls: { isPaused: true } });
                    } else {
                        day -= maxDay;
                    }
                }

                return { year, day };
            });
        }, 1000 / controls.timeSpeed);

        return () => clearInterval(interval);
    }, [controls.isPaused, controls.timeSpeed]);

    return (
        <>
            <div className="p-1.5 px-2 rounded-md border relative cursor-pointer text-white">
                <input
                    type="date"
                    id="date-input"
                    name="date-input"
                    value=""
                    onClick={(e) => e.currentTarget.showPicker()}
                    onChange={handleDateInputChange}
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                />
                <label htmlFor="date-input">
                    <BsCalendar3 className="inline float-right mt-0.5" />{" "}
                    {formatLongDate(date)}
                </label>
            </div>

            <Dropdown
                class="xs"
                name={
                    <TitleOption2>
                        Date controls (sliders) <BsChevronDown className="inline" />
                    </TitleOption2>
                }
                options={
                    <>
                        <div className="flex flex-col">
                            <label className="font-bold">Year: {year}</label>
                            <input
                                type="range"
                                min="1850"
                                max={MAX_YEAR}
                                value={year}
                                disabled={!controls.isPaused}
                                onChange={(e) => handleChange(e, "year")}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Day: {day}</label>
                            <input
                                type="range"
                                min="1"
                                max={daysInYear(year)}
                                value={day}
                                disabled={!controls.isPaused}
                                onChange={(e) => handleChange(e, "day")}
                            />
                        </div>
                    </>
                }
            />
            <div className="max-sm:hidden md:block">
                <Dropdown
                    class="xs"
                    name={
                        <TitleOption2>
                            Speed controls{" "}
                            {controls.isPaused
                                ? "(Paused)"
                                : formatTimeSpeed(controls.timeSpeed)}{" "}
                            <BsChevronDown className="inline" />
                            <br />
                        </TitleOption2>
                    }
                    options={
                        <form>
                            <input
                                type="range"
                                min={1}
                                max={15}
                                className="w-full"
                                id="time-speed"
                                value={controls.timeSpeed}
                                onChange={handleTimeSpeedChange}
                                disabled={controls.isPaused}
                            />
                            <CheckboxOption
                                name="Pause Motion"
                                checked={controls.isPaused}
                                onChange={handlePausedChange}
                                label="Pause Motion"
                            />
                        </form>
                    }
                />
            </div>
        </>
    );
};

export default ControlDate;
