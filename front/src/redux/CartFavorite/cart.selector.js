export const totalCartAA  = (rootReducer) => {
    return rootReducer.FCReducer.products.reduce((acc, curr) => acc + curr.price * curr.amount)
}