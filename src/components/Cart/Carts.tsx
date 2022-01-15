import React from 'react'
import CartItem from './CartItem'

const Carts:React.FC<{users:any}> = (props) => {
    return (
        props?.users?.map((user:Object, index:number) => (
            <CartItem item={user} key={index} />
        ))
    )
}

export default Carts
