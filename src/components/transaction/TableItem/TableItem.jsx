import PropTypes from 'prop-types';
import { Item } from "../Item/Item";
import items from '../transactions.json'
import {Table,TBody,THead} from './TableItem.styled'


export const TableItem=function(){

  return (
    <Table>
        {TableHead(items)}
        {TableBody(items)}
    </Table>
    
  )
}

function TableHead(items){
    const tableHead = (Object.keys(items[0]).filter((el,idx)=>idx!==0));
 return (<THead>
  <tr>
    {
      tableHead.map(el=>
      <th key={el}>
          {el}
      </th>)
    }
    </tr>
    </THead>)

}

 const TableBody = function(items){

  return (
  <TBody >{items.map(item=>(

      <tr key={item.id}>
        <Item
        type={item.type}
        amount={item.amount}
        currency={item.currency}
         /> 
    </tr>))
  }</TBody>)
  }

  TableBody.propTypes={
      id:PropTypes.string.isRequired,
    }
    

