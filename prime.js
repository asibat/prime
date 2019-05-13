const maybeCallback = (cb) =>{
  if (typeof cb === 'function')
    return cb;

  throw Error('Invalid Callback');
}

module.exports = {
  /*
  Checks if the number is 0, 1, or negative 2 or 3. Returning true if it's within this range.
  The last if statement returns that the number is not prime if it is divisible by 2 or 3.
  The last part of this function is the trickiest — the while loop! It is essentially checking every odd number that is not divisible by 3 until it becomes larger than the square root of the num. For example, the first i and i + 2 will be 5 and 7. The next i and i + 2 will be 11 and 13. It does not check 9 or 15 because both are divisible by 3 and would have been caught in the last else if statement.
  Finally returns true if the number was not divisible by any i or i+2 entries because the number is prime.
  */
   isPrime(num, callback) {
     callback = maybeCallback(callback);

     if(isNaN(num)) throw Error('not a number')

     if (num <= 3) {
       callback(null, true)
     } else if (num%2 === 0 || num%3 === 0) {
       callback(null, false)
     }

     let i = 5
     while (i*i <= num) {
       if (num%i === 0 || num%(i+2) === 0) {
         callback(null, false)
       }
       i += 6
     }
    callback(null, true)
    }
}
