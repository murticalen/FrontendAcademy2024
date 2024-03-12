console.log('Start')

function randomNumberInStringPromise() {
  // any work can be wrapped in Promise
  return new Promise((resolve, reject) => {
    // note try-catch block similar to other languages
    try {
      // throw Error('Custom error!')
      resolve('Your random value is ' + 4715) // Croatia NT id on Sofascore
    } catch (error) {
      reject(error)
    }
  })
}

const promise = randomNumberInStringPromise();

  promise
  // then is called when promise is in fulfilled state (resolve is called from promise constructor)
  .then(text => {
    console.log(text)
  })
  // catch is called when promise is in rejected state (reject is called from promise constructor)
  .catch(error => console.error('Error:', error.message))
  .finally(() => {
    console.log("We have resolved the promise")
  })

console.log('End')
