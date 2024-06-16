import styled from "./Transaction.module.css";
export default function TransactionHistory({items}){
  return (
    <>
    <table className={styled.tableTransaction}>
  <thead className={styled.head}>
    <tr className={styled.tr}>
      <th className={styled.th}>Type</th>
      <th className={styled.th}>Amont</th>
      <th className={styled.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
        <tr key={id} className={styled.text}>
            <td className={styled.td}>{type}</td>
            <td className={styled.td}>{amount}</td>
            <td className={styled.td}>{currency}</td>
       </tr>
    )
       
    )}
    
  </tbody>
</table>

    </>
  )
}