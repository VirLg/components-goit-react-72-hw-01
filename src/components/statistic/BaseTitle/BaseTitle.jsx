import PropTypes from 'prop-types'
import css from "./BaseTitle.module.css";

export const  BaseTitle = function ({text}){
    return <h2 className={css.title}>Upload stats</h2>
}

BaseTitle.propTypes={
    title:PropTypes.string,
}






