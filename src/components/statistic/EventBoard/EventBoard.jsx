import PropTypes from 'prop-types'
import CreateItemMarkup from "../Item/Item"

import {Item,EventCard} from './EventBoard.styled';



// console.log(data);
export const  EventBoard=function({items}){
return (
    
    <EventCard >
        {items.map(item=>(
        <Item  key={item.id}>
            <CreateItemMarkup
            label={item.label}
            percentage={item.percentage}
            background-color="red" />
        </Item>))}

    </EventCard>
)}

EventBoard.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }))
    }

  // const randomColor = Math.floor(Math.random()*16777215).toString(16);

// backgroundColor={randomColor()}