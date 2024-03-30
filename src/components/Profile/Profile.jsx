import {
  Avatar,
  Card,
  Tag,
  UserName,
  Location,
  UserInfo,
  CardBody,
  CardFooter,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <CardBody>
        <Avatar src={avatar} alt={username} />
        <UserInfo>
          <UserName>{username}</UserName>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </UserInfo>
      </CardBody>

      <CardFooter>
        <StatsList>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{likes}</StatsQuantity>
          </StatsItem>
        </StatsList>
      </CardFooter>
    </Card>
  );
};
