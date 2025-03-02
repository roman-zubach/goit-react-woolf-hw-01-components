import { Container, Heading, Section } from 'common/components';
import { FriendList, Profile, Statistics, TransactionHistory } from 'components';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom='50px' textAlign='center'>
          Task 1
        </Heading>
        <Profile {...user} />

        <Heading marginTop='50px' marginBottom='50px' textAlign='center'>
          Task 2
        </Heading>
        <Statistics title='Upload stats' stats={data} />

        <Heading marginTop='50px' marginBottom='50px' textAlign='center'>
          Task 3
        </Heading>
        <FriendList friends={friends} />

        <Heading marginTop='50px' marginBottom='50px' textAlign='center'>
          Task 4
        </Heading>
        <TransactionHistory items={transactions} />
      </Container>
    </Section>
  );
};
