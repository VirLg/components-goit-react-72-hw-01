import PropTypes from 'prop-types'
import css from "./BaseTitle.module.css";

export const  BaseTitle = function ({title}){
    return(
        <>
        {title && <h2 className={css.title}>{title}</h2>}
        </>) 

}

BaseTitle.propTypes={
    title:PropTypes.string,
}






