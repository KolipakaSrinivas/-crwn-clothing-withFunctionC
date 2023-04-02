


import './collection-preview.style.css'


const CollectionPreview = ({collection}) => {

    const {items} = collection

    return <div className="collection-preview">
                <h1 className="title">{collection.title}</h1>
                    <div className="preview">
                        {
                            items.filter((item,index)=>index<4).map(item =>(
                                <h1>{item.name}</h1>
                            ))
                        }

                    </div>
           </div>
}

export default CollectionPreview