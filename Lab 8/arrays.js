//1
function maxSubarray(arr) {
    var maxSum = arr[0];
    var currentSum = arr[0];

    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum,
        subarray: arr.slice(start, end + 1)
    };
}
const arr = [-2, 8, -9, 16, -1, 2, 1, -8, 4];
const result1 = maxSubarray(arr);

console.log("Максимальна сума:", result1.maxSum);
console.log("Підмасив:", result1.subarray);



//2
function addStrings(a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var result = [];

    while (i >= 0 || j >= 0 || carry) {
        const digit1 = i >= 0 ? Number(a[i]) : 0;
        const digit2 = j >= 0 ? Number(b[j]) : 0;

        const sum = digit1 + digit2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result.reverse().join('');
}
const long1 = "987654321987654321987654321";
const long2 = "123456789123456789123456789";

const result2 = addStrings(long1, long2);

console.log("\n", "Сума великих чисел:", result2);



//3
function arrayDifference(a, b) {
    const countB = {};

    for (const x of b) {
        countB[x] = (countB[x] || 0) + 1;
    }

    const result = [];

    for (const x of a) {
        if (countB[x] > 0) {
            countB[x]--;
        } else {
            result.push(x);
        }
    }

    return result;
}
const arrA = [1, 2, 2, 3, 4, 4, 4];
const arrB = [2, 4, 4];

const result3 = arrayDifference(arrA, arrB);

console.log("\n", "Різниця масивів:", result3);
