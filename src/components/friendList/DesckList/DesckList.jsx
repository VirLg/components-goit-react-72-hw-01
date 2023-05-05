import PropTypes from 'prop-types'


import {Item} from '../Item/Item';
import {ItemList,BlockUl} from './DesckList.styled';

export const DesckList=function({items}){
return(
     <BlockUl>
        {items.map(item=>(
            <ItemList key={item.id}>
                <Item 
                name={item.name}
                avatar={item.avatar}
                isOnline={item.isOnline}
                />
            </ItemList>))}
   </BlockUl>
)}

DesckList.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
    }))
    }