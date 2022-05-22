import { getTime, getInterval } from './date.jsx';

export const TimeOrInterval = ({
  createdAt,
  updatedAt,
}) => {
  return (
    <>
      <p className='chegada'></p>
      <p className='order-info'>{getTime(createdAt)}</p>
      {updatedAt ?
        <>
          <p className='time'>
            Tempo de Preparo:
          </p>
          <p className='order-info'>{getInterval(createdAt, updatedAt)}</p>
        </>
        : null}
    </>
  );
};