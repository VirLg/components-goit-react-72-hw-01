import PropTypes from 'prop-types';

export const Item=function({type,amount,currency}){
    return(
    <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
    )
} 
Item.propTypes={
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}

