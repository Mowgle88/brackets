module.exports = function check(str, bracketsConfig) {
  let bracketsPair = {};
	let openBrackets = [];
	for(let i = 0; i < bracketsConfig.length; i++) {
		bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
		openBrackets.push(bracketsConfig[i][0])
	} 
	// console.log(bracketsPair, openBrackets)
	
		let stack = [];

		for(let j = 0; j < str.length; j++) {
			let currentSymbol = str[j];
      if(bracketsPair[currentSymbol] !== currentSymbol) {
        
        if(openBrackets.includes(currentSymbol)) {
          stack.push(currentSymbol);
        } else {
          if(stack.length === 0) {
            
            return false; 
          }
  
          let topElement = stack[stack.length - 1];
  
          if (bracketsPair[currentSymbol] === topElement) {
            stack.pop();
          } else {
            return false;
          }
        }

			} 
      

			
		}
		
		return stack.length === 0;
}
