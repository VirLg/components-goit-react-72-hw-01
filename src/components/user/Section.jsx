import PropTypes from 'prop-types'

export const  Section = function({title,children}){
    
    return(<div>
            {children}
        <h2>{title}</h2>
        
           </div>)
}

Section.propTypes={
title:PropTypes.string,
children:PropTypes.node,
}