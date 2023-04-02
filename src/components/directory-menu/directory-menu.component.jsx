import { useState,useEffect } from "react"


import sections from './data'
import MenuItem from "../collection-Items/collection-Items.component"
import './directory-menu.css'


const DirectoryMenu = () =>{
    const [shopdata,setShopData] = useState([])

    useEffect(()=>{
        setShopData(sections)   
    },[])

    console.log(shopdata)    
    return  <div className='directory-menu'>
                {
                    shopdata.map(item=>(
                        <MenuItem item={item} key={item.id}/>
                    ))
                }
            </div>
}


export default DirectoryMenu