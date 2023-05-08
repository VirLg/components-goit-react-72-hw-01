import PropTypes from 'prop-types';
import {Item} from '../listItem/ListItem';
import {ItemList,BlockUl} from './DesckList.styled';

export const DesckList=function({items=[]}){
    

return(
    
     <BlockUl>
        {items.map(({name,avatar,isOnline, id})=>(

            <ItemList key={id}>
                
                <Item 
                name={name}
                avatar={avatar}
                isOnline={isOnline}
                />
    
            </ItemList>))}
   </BlockUl>

        )
}

DesckList.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
       
    })).isRequired
    }