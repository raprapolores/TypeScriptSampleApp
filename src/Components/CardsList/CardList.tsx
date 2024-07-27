import React from 'react'
import Card from '../Card/Card'

type Props = {}

const CardList : React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName="APPLE" ticker="APL" price={100}/>
        <Card companyName="Microsoft" ticker="MSFT" price={150}/>
        <Card companyName="Tesla" ticker="TSLA" price={200}/>
    </div>
  )
}

export default CardList