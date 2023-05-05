import PropTypes from 'prop-types'
import {StatisticBlock,StaStatisticBlockticItem,PhotoHero,SpanStat,TitleCard,Card} from './CreateUserMarkup.styled';


export const  CreateUserMarkup=function ({avatar,username,tag,location, stats}){


    return (<Card>
    <div>
      <PhotoHero 
        src={avatar}
        alt={username}
        className="avatar"
      />
      <TitleCard className="name">{username}</TitleCard>
      <TitleCard className="tag">{tag}</TitleCard>
      <TitleCard className="location">{location}</TitleCard>
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
    
}


CreateUserMarkup.propTypes={
    avatar:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    stats:PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
}