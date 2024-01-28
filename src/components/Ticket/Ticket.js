import classes from './Ticket.module.scss';
import { add } from 'date-fns';
import React from 'react';

function Ticket(props) {
  const durationHoursFirst = Math.floor(props.segments[0].duration / 60);
  const durationMinutesFirst =
    props.segments[0].duration - durationHoursFirst * 60;

  const durationHoursSecond = Math.floor(props.segments[1].duration / 60);
  const durationMinutesSecond =
    props.segments[1].duration - durationHoursSecond * 60;

  let stopsCountFirst = props.segments[0].stops.length;
  let stopsCountSecond = props.segments[1].stops.length;

  let count = 1;
  let stopsNameFirst = props.segments[0].stops.map((el) => {
    if (count === props.segments[0].stops.length) {
      count = 1;
      return <React.Fragment>{el}</React.Fragment>;
    }
    count++;
    return <React.Fragment>{el},&nbsp;</React.Fragment>;
  });
  let stopsNameSecond = props.segments[1].stops.map((el) => {
    if (count === props.segments[1].stops.length) {
      count = 1;
      return <React.Fragment>{el}</React.Fragment>;
    }
    count++;
    return <React.Fragment>{el},&nbsp;</React.Fragment>;
  });

  let dateStringFirst = props.segments[0].date;
  let dateStringSecond = props.segments[1].date;

  let dateFirst = new Date(dateStringFirst);
  let dateSecond = new Date(dateStringSecond);

  let hoursFirst = dateFirst.getUTCHours();
  let minutesFirst = dateFirst.getUTCMinutes();
  let hoursSecond = dateSecond.getUTCHours();
  let minutesSecond = dateSecond.getUTCMinutes();

  let dateEndFirst = add(dateFirst, {
    hours: durationHoursFirst,
    minutes: durationMinutesFirst,
  });
  let dateEndSecond = add(dateSecond, {
    hours: durationHoursSecond,
    minutes: durationMinutesSecond,
  });

  let hoursEndFirst = dateEndFirst.getUTCHours();
  let minutesEndFirst = dateEndFirst.getUTCMinutes();
  let hoursEndSecond = dateEndSecond.getUTCHours();
  let minutesEndSecond = dateEndSecond.getUTCMinutes();

  const addZero = (time) => {
    if (time.toString().length === 1) {
      time = '0' + time;
      return time;
    } else return time;
  };

  let timeFirst = addZero(hoursFirst) + ':' + addZero(minutesFirst);
  let timeEndFirst = addZero(hoursEndFirst) + ':' + addZero(minutesEndFirst);
  let timeSecond = addZero(hoursSecond) + ':' + addZero(minutesSecond);
  let timeEndSecond = addZero(hoursEndSecond) + ':' + addZero(minutesEndSecond);

  return (
    <div className={classes.ticket} key={1}>
      <div className={classes['top']}>
        <h1>{props.price} Р</h1>
        <img src={`//pics.avs.io/99/36/${props.carrier}.png`} alt="asds"></img>
      </div>
      <div className={classes['info']}>
        <div className={classes['first']}>
          <div className={classes['info_route']}>
            <h2>MOW – HKT</h2>
            <h3>
              {timeFirst} – {timeEndFirst}
            </h3>
          </div>
          <div className={classes['info_length']}>
            <h2>В пути</h2>
            <h3>
              {durationHoursFirst}ч {durationMinutesFirst}м
            </h3>
          </div>
          <div className={classes['info_stops']}>
            <h2>
              {stopsCountFirst === 0
                ? 'Без пересадок'
                : stopsCountFirst === 1
                  ? '1 пересадка'
                  : `${stopsCountFirst} пересадки`}
            </h2>
            <h3>{stopsNameFirst}</h3>
          </div>
        </div>
        <div className={classes['second']}>
          <div className={classes['info_route']}>
            <h2>MOW – HKT</h2>
            <h3>
              {timeSecond} – {timeEndSecond}
            </h3>
          </div>
          <div className={classes['info_length']}>
            <h2>В пути</h2>
            <h3>
              {durationHoursSecond}ч {durationMinutesSecond}м
            </h3>
          </div>
          <div className={classes['info_stops']}>
            <h2>
              {stopsCountSecond === 0
                ? 'Без пересадок'
                : stopsCountSecond === 1
                  ? '1 пересадка'
                  : `${stopsCountSecond} пересадки`}
            </h2>
            <h3>{stopsNameSecond}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ticket;
