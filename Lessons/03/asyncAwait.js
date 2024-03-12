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

async function runAsync() {
  console.log('Start')

  // always in try-catch
  try {
    const text = await randomNumberInStringPromise()
    console.log(text)
  } catch (error) {
    console.error('Error:', error.message)
  }

  console.log('End')
}

console.log('Before async')

runAsync()

console.log('After async')
