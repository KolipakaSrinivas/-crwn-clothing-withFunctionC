


import './collection-preview.style.css'
import CollectionItem from '../collection-items/collection-item.component'


const CollectionPreview = ({collection}) => {

    const {items} = collection

    return <div className="collection-preview">
                <h1 className="title">{collection.title}</h1>
                    <div className="preview">
                        {
                            items.filter((item,index)=>index<4).map(item =>(
                                <CollectionItem key={item.id} item={item} />
                            ))
                        }

                    </div>
           </div>
}

export default CollectionPreview