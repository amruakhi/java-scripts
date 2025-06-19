function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function checkFirstElementPrime(arr) {
  if (arr.length === 0) {
    console.log("Array is empty.");
    return;
  }
  const first = arr[0];
  const result = isPrime(first);
  console.log(`${first} is ${result ? "a prime number" : "not a prime number"}`);
}
// Example usage:
checkFirstElementPrime([7, 10, 15]); // Output: 7 is a prime number
function mostFrequentItem(arr) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (let item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequent = item;
    }
  }

  console.log(`Most frequent item is "${mostFrequent}" appearing ${maxCount} times.`);
}

// Example usage:
mostFrequentItem([3, "a", "a", "b", "b", "b", "a", 3, "a", 2, 4, 9, 3]);
// Output: Most frequent item is "a" appearing 4 times.
for (let i = 0; i <= 15; i++) {
  const type = i % 2 === 0 ? "even" : "odd";
  console.log(`${i} is ${type}`);
}
function sumOfSquares(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num * num;
  }
  console.log(`Sum of squares: ${sum}`);
}

// Example usage:
sumOfSquares([1, 2, 3, 4]); // Output: Sum of squares: 30
