import { useState } from 'react'
import SHOP_DATA from './ShopData'

import CollectionPreview from '../../components/collection-preview/CollectionPreview.component'

function ShopPage() {
    const [shopData,setShopData] = useState(SHOP_DATA)
    return <div> 

            {
                shopData.map(collection=>(
                    <CollectionPreview key={collection.id} collection={collection}/>
                ))

            }       
    
           </div>
}

export default ShopPage