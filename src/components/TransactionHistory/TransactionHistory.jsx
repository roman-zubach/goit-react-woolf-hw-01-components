import { BaseTable, THead, Th, Tr, Td } from './TransactionHistory.styled';
import { capitalizeFirstLetter } from 'common/helpers/modifyString';

export const TransactionHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </THead>

      <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <Tr key={id}>
          <Td>{capitalizeFirstLetter(type)}</Td>
          <Td>{amount}</Td>
          <Td>{currency}</Td>
        </Tr>
      ))}
      </tbody>
    </BaseTable>
  );
};
