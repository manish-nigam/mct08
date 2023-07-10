const intialData = {
    UserallData : []
}


const reducer = (store = intialData,action) =>{
    if(action.type ==="Takedata"){
        return {
            ...store,
            UserallData : action.payload
        }
    } 
    return store
}
export default reducer