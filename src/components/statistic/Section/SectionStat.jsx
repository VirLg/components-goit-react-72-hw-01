import PropTypes from 'prop-types'
// import css from './SectionStat.module.css'
import {SectionStatCss} from './SectionStat.styled'


export const SectionStat=function({children}){
  
    return(<SectionStatCss>
      
            {children}
        
           </SectionStatCss>)
}
SectionStat.propTypes={
title:PropTypes.string,
children:PropTypes.node,
}