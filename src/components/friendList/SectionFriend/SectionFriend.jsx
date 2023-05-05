import PropTypes from 'prop-types'
export const SectionFriend =function({children}){
return(<div>
    {children}
</div>)
}


// import PageTitle from './statistic/BaseTitle/BaseTitle'



SectionFriend.propTypes={
title:PropTypes.string,
children:PropTypes.node,
}