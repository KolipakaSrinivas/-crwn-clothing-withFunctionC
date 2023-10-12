import  { useEffect, useState } from 'react'
import SHOP_DATA from './shop_data'

import CollectionPreview from '../../components/collection-preview/collection-preview-component'


function Shop() {

    const [shopData,setShopData] = useState([])

    useEffect(()=>{
        setShopData(SHOP_DATA)
    })


  return (
    <div className='shop-page'>
      {
        shopData.map(({id,...otherprops})=>{
        return  <CollectionPreview key={id} {...otherprops}/>
        })
      }
    </div>
  )
}

export default Shop

