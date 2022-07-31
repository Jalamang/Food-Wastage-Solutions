const regExp = /^([1-9]{1})([0-9]{2})-([1-9]{1})([0-9]{2})-([0-9]{4})$/


//   string = {
//     phone:/([1-9]{1})([0-9]{2})-([1-9]{1})([0-9]{2})-([0-9]{4})/,
    // email:/[]/,
    // password:/[]/
    // }

formatPhoneNumber = (field) =>{
  return regExp.test(field) 
}


module.exports ={
    formatPhoneNumber
}