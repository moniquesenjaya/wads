// The keyword async before a function makes the function return a promise
// The keyword await before a function makes the function wait for a promise

const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
  doSomething()
  console.log('After')
