const {isPrime} = require('./prime')
const util = require('util');

module.exports = {
  getPrime(start, end) {
    let primes = []
    const asyncIsPrime = util.promisify(isPrime)

    for(let i=start; i<=end; i++) {
      primes.push(asyncIsPrime(i))
    }

    Promise.all(primes).then(values =>
      values.forEach((value, index) => {
        if(value) console.log(start+index)
      })
    ).catch(err => console.log(err));
  }
}
