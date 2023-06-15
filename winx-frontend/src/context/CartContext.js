import { createContext, useState, useEffect, useReducer } from "react";

export const CartContext = createContext()

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('state') || '[]')
export const Context = ({ children }) =>{

    const reducer = (state, action) =>{
        switch(action.type)
        {
            case 'ADD':
                const tempstate = state.filter((item) => action.payload.id === item.id)
                if(tempstate.length > 0){
                    return state
                }else{
                    return [ ...state, action.payload ]
                }

            case 'INCREASE':
                const tempState = state.map((item) =>{
                    if(item.id === action.payload.id){
                        return { ...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
                return tempState

                case 'DECREASE':
                    const tempState2 = state.map((item) =>{
                        if(item.id === action.payload.id){
                            return { ...item, quantity: item.quantity - 1}
                        }else{
                            return item
                        }
                    })
                    return tempState2

                case 'REMOVE':
                    const tempState3 = state.filter((item) => item.id !== action.payload.id)
                    return tempState3


            default:
                 return state
        }
    }

    // const initial = [cartFromLocalStorage]
    const [state, dispatch] = useReducer(reducer, [])

    // useEffect(() =>{
    //     localStorage.setItem('state', JSON.stringify(state))
    // }, [state])

    const cartInfo = {
        state, dispatch
    }

    return <CartContext.Provider value={cartInfo}>
        {children}
    </CartContext.Provider>
}












































// export const cartContext = createContext({
//     items: [],
//     getProductQuantity: () => {},
//     addToCart: () => {},
//     removeOneFromCart: () => {},
//     deleteFromCart: () => {},
//     getTotalCost: () => {},
// })


// export const CartProvider = ({ children }) =>{

//     const [cartProducts, setcartProducts] = useState([])


//     let [products, setProducts] = useState([])

//     useEffect(() =>{
//         getProducts()
//     }, [])
    
//     let getProducts = async () =>{
//         let response = await fetch('http://127.0.0.1:8000/api/products',{
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//         })
//         let data = await response.json()
    
//         if(response.status === 200){
//         setProducts(data)
//         }
//     }

//     const getProductQuantity = (id) =>{
//         const quantity = products.find(product => product.id === id)?.quantity

//         if(quantity === undefined){
//             return 0
//         }
//         return quantity
//     }

//     const addToCart = (id) =>{
//         const quantity = getProductQuantity(id)

//         if(quantity === 0){
//             setProducts([...products, {id: id, quantity: 1}])
//         }else{
//             setProducts(products.findIndex(product => product.id === id ? {...product, quantity: product.quantity + 1} : product))
//         }
//     }

//     const removeOneFromCart = (id) =>{
//         const quantity = getProductQuantity(id)

//         if(quantity == 1){
//             deleteFromCart(id)
//         }else{
//             setProducts(products.map(product => product.id === id ? {...product, quantity: product.quantity - 1} : product))
//         }
//     }

//     const deleteFromCart = (id) =>{
//         setProducts(products => products.filter(currentProduct => {
//             return currentProduct.id !== id;
//         }))
//     }

//     const getTotalCost = () =>{
//         let totalCost = 0
//         products.map(cartItem =>{
//             const productData = getProducts(cartItem.id)
//             totalCost += (productData.price * cartItem.quantity)
//         })
//         return totalCost
//     }
    
//     const contextValue = {
//         items: products,
//         getProductQuantity,
//         addToCart,
//         removeOneFromCart,
//         deleteFromCart,
//         getTotalCost,
//     }

//     return (
//         <cartContext.Provider value={contextValue}>
//             {children}
//         </cartContext.Provider>
//     )
// }

// export default CartProvider