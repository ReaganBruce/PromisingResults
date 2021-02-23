document.addEventListener("DOMContentLoaded", function(){

  
  // slowMath.add(6, 2)
  // .then((additionResults) =>{
  //     console.log(`${6} + ${2} =`);
  //     console.log(additionResults);
  //     console.log(`Addition Success!`)
  //     return slowMath.multiply(additionResults, 2)
  
  // }).then((multipliedResults) =>{
  //     console.log(`${8} * ${2} =`)
  //     console.log(multipliedResults);
  //     console.log(`Multiplication Success!`);
  //     return slowMath.divide(multipliedResults, 4)
  
  // }).then((dividedResults) =>{
  //     console.log(`${16} / ${4} =`)
  //     console.log(dividedResults);
  //     console.log(`Division Success!`);
  //     return slowMath.subtract(dividedResults, 3)
  
  // }).then((subtractedResults) =>{
  //     console.log(`${4} - ${3} =`)
  //     console.log(subtractedResults);
  //     console.log(`Subtraction Success!`);
  //     return slowMath.add(subtractedResults, 98);
  
  // }).then((moreAdditionalResults) =>{
  //     console.log(`${98} + ${1} =`)
  //     console.log(moreAdditionalResults);
  //     console.log(`Addition Success!`);
  //     return slowMath.remainder(moreAdditionalResults, 2);
  
  // }).then((modResults) =>{
  //     console.log(`${99} % ${2} =`)
  //     console.log(modResults);
  //     console.log(`Modification Success!`);
  //     return slowMath.multiply(modResults, 2);
  
  // }).then((moreMultipliedResults) =>{
  //     console.log(`${1} * ${50} = `)
  //     console.log(moreMultipliedResults);
  //     console.log(`Multiplication Success!`);
  //     return slowMath.remainder(moreMultipliedResults, 40);
  
  // }).then((moreModResults) =>{
  //     console.log(`${50} % ${40} =`);
  //     console.log(moreModResults);
  //     console.log(`Modification Success!`);
  //     return slowMath.add(moreModResults, 32);
  
  // }).then((finalResult) =>{
  //     console.log(`${32} + ${10} =`)
  //     setTimeout(() => {
  //         console.log(`Last Result is ${finalResult}`)
  //         console.log('I promised this worked!');
  //     }, 1000);
  // }).catch((err) =>{
  //     console.log(err);
  // })
  


  
  //ASYNC SYNTAX
  async function doMath() {
    try {
      let addingResult = await slowMath.add(6, 2);
      document.getElementById('result1').textContent = `Addition Output: ${addingResult}`;
  
      let multipliedResult = await slowMath.multiply(addingResult, 2);
      document.getElementById('result2').textContent = `Multiplied Output:  ${multipliedResult}`;
  
      let dividedResult = await slowMath.divide(multipliedResult, 4); 
      document.getElementById('result3').textContent = `Divided Output: ${dividedResult}`;
  
      let subtractedResult = await slowMath.subtract(dividedResult, 3); 
      document.getElementById('result4').textContent = `Subtracted Output: ${subtractedResult}`;
  
      let moreAdditionalResults = await slowMath.add(subtractedResult, 98); 
      document.getElementById('result5').textContent = `Addition Output: ${moreAdditionalResults}`
  
      let modResults = await slowMath.remainder(moreAdditionalResults, 2);
      document.getElementById('result6').textContent = `Modular Ouput: ${modResults}`;
  
      let moreMultipliedResuts = await slowMath.multiply(modResults, 50);
      document.getElementById('result7').textContent = `Multiplied Output: ${moreMultipliedResuts}`;
  
      let moreModResults = await slowMath.remainder(moreMultipliedResuts, 40);
      document.getElementById('result8').textContent = `Modular Ouput:  ${moreModResults}`
  
      let finalResult = await slowMath.add(moreModResults, 32);
      document.getElementById('result9').textContent = 'THE FINAL RESULT IS......'

  
      setTimeout(() => {
        document.getElementById('result10').textContent = `......  ${finalResult}`
        setTimeout(() => {
          console.log(`GOOD JOB!!!!!`);
        },1000)
      }, 5000);
    } catch (err) {
    
      console.log(err);
     document.getElementById('result10').textContent = `Error, Bitch ---->`
    }
  }
  doMath();
})

