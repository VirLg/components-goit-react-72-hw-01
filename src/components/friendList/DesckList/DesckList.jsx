import PropTypes from 'prop-types'



import {ItemList,BlockUl,Span} from './DesckList.styled';

export const DesckList=function({items}){
return(
     <BlockUl>
        {items.map(({name,avatar,isOnline, id})=>(

            
            <ItemList key={id}>
                
      <Span className="">{isOnline}</Span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p  className="name" >{name}</p>
    
            </ItemList>))}
   </BlockUl>
)}

DesckList.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        avatar:PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
    }))
    }