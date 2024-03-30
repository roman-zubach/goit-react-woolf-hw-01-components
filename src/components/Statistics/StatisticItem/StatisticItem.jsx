import {
  StatisticBox,
  StatisticText,
  StatisticValue,
} from './StatisticItem.styled';

export const StatisticItem = ({ title, value }) => {
  return (
    <StatisticBox>
      <StatisticText>{title}</StatisticText>
      <StatisticValue>{value}%</StatisticValue>
    </StatisticBox>
  );
};
