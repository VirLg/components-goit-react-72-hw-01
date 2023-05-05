import PropTypes from 'prop-types'

export default function CreateItemMarkup({label,percentage}){
    return(
    
        < >
            <span className="label">{label}</span>
            <span className="percentage"> {percentage} %</span>
        </>
        
    )
}

CreateItemMarkup.propTypes={
    
    percentage:PropTypes.number.isRequired,
    label:PropTypes.string.isRequired,
}

// const randomColor = Math.floor(Math.random()*16777215).toString(16);

// backgroundColor={randomColor()}