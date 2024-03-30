import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.spacing(150)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  gap: ${props => props.theme.spacing(2)};

  padding: ${props => props.theme.spacing(4)};
`;

export const CardFooter = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: ${props => props.theme.spacing(4)};
  margin-top: auto;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  position: relative;
`;

export const Location = styled.p`
  font-weight: 200;
  letter-spacing: ${props => props.theme.spacing(0.2)};
  text-align: center;
  margin-bottom: 0;
`;

export const UserName = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Tag = styled.span`
  display: table;

  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.spacing(4)};
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
  margin: 0 auto;

  background: ${props => props.theme.colors.tagBackground};
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${props => props.theme.spacing(2)};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  background: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  padding-top: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(10)};
`;

export const StatsLabel = styled.p`
  margin-bottom: 0;

  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 300;
`;

export const StatsQuantity = styled.span`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 900;
  color: ${props => props.theme.colors.accent};
`;
