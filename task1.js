 const stringLength = (string) => {
     if (string.length < 1 ) {
        throw new Error('string must be at least 1 character long')
     }
     else if (string.length > 10 ) {
        throw new Error('string must be not longer than 10 characters')
     }
     
     return string.length
 }

 module.exports = stringLength;
