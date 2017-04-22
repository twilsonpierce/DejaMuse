export function getSong(str) {
  	console.log("STR",str)

  	let song = str.split("").reverse().join("");
  	
  	console.log(reversedStr)
  return {
    type: 'REVERSE',
    payload: reversedStr
  };
}

