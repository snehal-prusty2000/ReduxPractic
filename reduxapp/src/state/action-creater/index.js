export const depositeMoney = (amount) => {
   return (dispatch) =>{
    dispatch({
        type:'deposite',
        payload: amount
    })
   }
}


export const withdrawmoney = (amount) => {
    return (dispatch) =>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
       }
}