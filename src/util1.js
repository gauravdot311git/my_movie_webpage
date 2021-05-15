const Check=(ar)=>{
    if(ar==null || ar==undefined || ar.length<0){
        return true
    }
    return false
}

const Out=(msg)=>{
    console.log(msg)
}
export {Check,Out}