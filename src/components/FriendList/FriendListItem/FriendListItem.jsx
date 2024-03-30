import { Avatar, AvatarContainer, FriendItem, Name, OnlineBadge } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <AvatarContainer>
        <Avatar src={avatar} alt={name} />
        <OnlineBadge isOnline={isOnline} />
      </AvatarContainer>
      <Name>{name}</Name>
    </FriendItem>
  );
};
