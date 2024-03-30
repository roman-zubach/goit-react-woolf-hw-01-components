import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { StatisticItem } from './StatisticItem/StatisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} title={label} value={percentage} />
        ))}
      </StatisticsList>
    </>
  );
};
