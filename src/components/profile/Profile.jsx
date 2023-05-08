import PropTypes from 'prop-types'
import{PhotoHero,TitleCard,StatisticBlock,StaStatisticBlockticItem,SpanStat, Card} from './Profile.styled';


export const Profile=function({username,tag,location,avatar,stats}){
  
    return(<Card>
        <div>
          <PhotoHero 
            src={avatar}
            alt={username}
            // className="avatar"
          />
          <TitleCard >{username}</TitleCard>
          <TitleCard >@ {tag}</TitleCard>
          <TitleCard >{location}</TitleCard>
        </div>
      
        <StatisticBlock>
          <StaStatisticBlockticItem>
            <SpanStat className="label"> Followers </SpanStat>
            <SpanStat className="quantity">{stats.followers}</SpanStat>
          </StaStatisticBlockticItem>
          <StaStatisticBlockticItem>
            <SpanStat className="label"> Views </SpanStat>
            <SpanStat className="quantity">{stats.views}</SpanStat>
          </StaStatisticBlockticItem>
          <StaStatisticBlockticItem>
            <SpanStat className="label"> Likes </SpanStat>
            <SpanStat className="quantity">{stats.likes}</SpanStat>
          </StaStatisticBlockticItem>
        </StatisticBlock>
    </Card>)
      
};


Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}
