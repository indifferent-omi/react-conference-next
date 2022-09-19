import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDate,
  getDay, getMonth, getYear, parse, startOfToday
} from 'date-fns';
import Link from 'next/link';
import { useState } from 'react';
import classNames from '../../utils';
let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

function test(date) {
  var d = new Date(date);
  const monthName = d.toString().split(' ')[1];
  return monthName;
}

const ScheduleSection = ({ data, themes }) => {

  const fillmeup = (days) => {
    const arr = getDay(days[0]);

    if (arr && arr > 0) {
      let emp = [];
      for (let m = 0; arr > m; m++) {
        emp.push({ emptyCell: true, emptyCellCount: m, dateIndex: m })
      }
      const totalitems = [...emp, ...days];
      if (totalitems && totalitems.length < 36) {
        let remaining = 35 - totalitems.length;
        let lastDay = getDay(totalitems[totalitems.length - 1]);
        let lastEmptyCell = []
        for (let i = 0; remaining > i; i++) {
          lastEmptyCell.push({ emptyCell: true, emptyCellCount: i, dateIndex: null })
        }
        return [...totalitems, ...lastEmptyCell]
      } else if (totalitems && 36 < totalitems.length < 43) {
        let remaining = 42 - totalitems.length;
        let lastDay = getDay(totalitems[totalitems.length - 1]) + 1;

        let lastEmptyCell = []
        for (let i = 0; remaining > i; i++) {
          let lastDayCount = lastDay < 7 ? lastDay++ : lastDay;
          lastEmptyCell.push({ emptyCell: true, emptyCellCount: totalitems.length + 1, dateIndex: null })
        }
        return [...totalitems, ...lastEmptyCell]
      } else {
        return totalitems;
      }
    } else {
      let remaining = 35 - days.length;
      let lastEmptyCell = []
      for (let i = 0; remaining > i; i++) {

        lastEmptyCell.push({ emptyCell: true, emptyCellCount: days.length + 1, dateIndex: null })
      }
      return [...days, ...lastEmptyCell]
    }
  }

  let today = startOfToday()
  let [currentYear, setCurrentYear] = useState(getYear(today))
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })
  let refined = fillmeup(days);

  // console.log(days)
  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }



  const events = data.filter(obj => {
    const yearcheck = (obj.year === currentYear.toString());
    const monthCheck = test(obj.startDate) === test(today)
    return yearcheck && monthCheck;
  })[0]

  const schedules = events.schedules;
  const id = events.id.split('-');
  const newId = `${id[0]}-${id[1]}`;

  const hex2rgb = hex => ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];

  const matchTheme = (themes, elID) => {
    const getThemeId = themes.filter((el) => el.id === elID);
    const primaryColor = getThemeId[0].colors.primary;
    const rgbValue = hex2rgb(primaryColor);
    const colors = {
      primary: `rgba(${rgbValue},1)`,
      secondary: `rgba(${rgbValue},.5)`,
      background: `rgba(${rgbValue},.05)`,
      text: `rgba(${rgbValue},1)`
    }
    return colors
  }

  const colors = matchTheme(themes, newId)

  const getDateCustom = (day) => {
    const getFullDate = new Date(day);
    const date = format(getFullDate, 'd')
    return date;
  }

  const getStartAndEnd = (el) => {
    const startSession = el.intervals[0].sessions[0].begin;
    const endSession = el.intervals[el.intervals.length - 1].sessions[0]?.end;
    return `${startSession ? startSession : '00:00'} - ${endSession ? endSession : '00:00'}`
  }

  function findDate(arr, item) {
    if (!item.emptyCell, arr.length > 0) {
      const value = arr.filter((schedule) => {
        let confMonth = getMonth(new Date(schedule.day)) === getMonth(item);
        return getDateCustom(schedule.day) === String(getDate(item)) && confMonth
      })
      return value;
    }
  }
  return (
    <div className="container  overflow-x-auto pb-[6.25rem]">
      <div className='min-w-[80rem]'>
        <div className="flex items-center justify-start xl:justify-between border p-5 px-7 rounded-t-xl">
          <button
            type="button"
            onClick={previousMonth}
            disabled={currentMonth === 'Jan-2022' ? true : false}
            className={`-my-1.5 hidden xl:flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 ${currentMonth === 'Jan-2022' ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="text-xs text-black">Previous month</span>
          </button>
          <h2 className=" font-semibold text-gray-900">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </h2>
          <button
            onClick={nextMonth}
            type="button"
            disabled={currentMonth === 'Dec-2022' ? true : false}
            className={`-my-1.5 -mr-1.5 ml-2 hidden xl:flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 ${currentMonth === 'Dec-2022' ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="text-xs text-black">Next month</span>

          </button>
        </div>
        <div className="grid grid-cols-7 text-base font-bold text-center py-7 border -mt-[0.0625rem] ">
          <div className='min-w-[11rem]'>Sun</div>
          <div className='min-w-[11rem]'>Mon</div>
          <div className='min-w-[11rem]'>Tue</div>
          <div className='min-w-[11rem]'>Wed</div>
          <div className='min-w-[11rem]'>Thu</div>
          <div className='min-w-[11rem]'>Fri</div>
          <div className='min-w-[11rem]'>Sat</div>
        </div>
        <div className="grid grid-cols-7 text-sm">

          {refined.map((day, dayIdx) => {
            const result = findDate(schedules, day);

            if (!day.emptyCellCount && day.emptyCellCount !== 0) {
              return (
                <div
                  key={Number(dayIdx) * 2.4}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5 border-[0.0313rem] min-h-[10rem] min-w-[10rem]'
                  )}
                >
                  {result.length > 0

                    ? <>
                      <Link href={`/schedule/${events.id}`}>
                        <div className='p-4 cursor-pointer'>
                          <p className='font-semibold text-2xs text-center '>{result[0].day}</p>
                          <div className={`border rounded flex flex-col justify-center h-28 px-2`}
                            style={{
                              backgroundColor: `${colors.background}`,
                              borderColor: `${colors.primary}`,
                            }}>
                            <h3 className={`text-2xs mb-2`}>{result[0].intervals[0].sessions[0].title}</h3>
                            <p className='text-4xs'>
                              {getStartAndEnd(result[0])}
                            </p>
                          </div>
                        </div>
                      </Link>

                    </> : <div className="flex justify-center items-center h-full">
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </div>}
                </div>
              )
            } else {

              return (
                <div
                  key={Number(dayIdx) * 7}
                  className={classNames(
                    colStartClasses[day.dateIndex],
                    'py-1.5 border-[0.0313rem] min-h-[11rem] min-w-[11rem]'
                  )}
                ></div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ScheduleSection;