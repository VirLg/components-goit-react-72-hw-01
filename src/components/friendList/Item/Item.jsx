import PropTypes from 'prop-types'
import {Span} from './Item.styled'

export const Item=function ({name,avatar,isOnline}){
  return(
    <>
      <Span className="">{isOnline}</Span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p  className="name" >{name}</p>
    </>
  )

}

Item.protoTypes={
  name:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
}








