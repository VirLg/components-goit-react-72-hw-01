import PropTypes from 'prop-types'


import {Item,EventCard} from './EventBoard.styled';



// console.log(data);
export const  EventBoard=function({items}){
  
return (
    
    <EventCard >
        {items.map(({id,label,percentage})=>(
        <Item  key={id} >
             
            <span className="label">{label}</span>
            <span className="percentage"> {percentage} %</span>
        
        </Item>))}

    </EventCard>
)}

EventBoard.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
        label:PropTypes.string.isRequired,
    }))
    }

  // const randomColor = Math.floor(Math.random()*16777215).toString(16);

// backgroundColor={randomColor()}