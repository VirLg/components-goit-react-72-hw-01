import PropTypes from 'prop-types';
import items from '../data/transactions.json';
import {Table,TBody,THead} from './TableItem.styled';


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
  <TBody >{items.map(({id,type,amount,currency})=>(

      <tr key={id}>
       <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
    </tr>))
  }</TBody>)
  }

  TableBody.propTypes={
      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
    }
    


