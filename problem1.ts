// function compareString(a: string, b: string) {
//     let arrayA: string[] = [];
//     let arrayB: string[] = [];

//     for (let i: number = 0; i < a.length; i++) {
//         console.log(a[i])
//         for (let j: number = i + 1; j <= a.length; j++) {
//             arrayA.push(a.slice(i, j));
//         }
//     }

//     for (let i: number = 0; i < b.length; i++) {
//         for (let j: number = i + 1; j <= b.length; j++) {
//             arrayB.push(b.slice(i, j));
//         }
//     }

//     for (let i: number = 0; i < arrayA.length; i++) {
//         if (arrayB.includes(arrayA[i])) {
//             return arrayA[i];
//         }
//     }

//     return "tidak ada string yang sama";
// }
function compareString(a: string, b: string): string {
    let longestSubstring: string = "";
  
    for (let i = 0; i < a.length; i++) {
      for (let j = 1; j <= a.length - i; j++) {
        const substring = a.substring(i, j);
        if (b.includes(substring) && substring.length > longestSubstring.length) {
          longestSubstring = substring;
        }
      }
    }
  
    return longestSubstring;
  }

console.log(compareString("AKASHI", "AKA"));     // AKA
console.log(compareString("KANGAROO", "KANG"));  // KANG
console.log(compareString("KI", "KIJANG"));      // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA"));    // ILA