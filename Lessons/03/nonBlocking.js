console.log('Start')

setTimeout(() => {
  console.log('Callback')
  // what happens if we set timeout to 0s -> Should console.log happen immediately?
}, 1000)

console.log('End')

// for (let i = 0; i < 4e10; i += 1) {} // cca. 15s on my machine
