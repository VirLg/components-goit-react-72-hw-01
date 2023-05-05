import PropTypes from 'prop-types'

import {CreateUserMarkup} from './CreateUserMarkup'
import {Container} from './UserLisr.styled';



export const  UserList= function({items:{avatar,tag,location,username,stats,id}}){
    return (<Container key={id}>
            <CreateUserMarkup
            avatar={avatar}
            username={username}
            tag={tag}
            location={location}
            stats={stats}
            />
    </Container>)
}

UserList.propTypes={
item:PropTypes.shape({
    id:PropTypes.number.isRequired,
})
}