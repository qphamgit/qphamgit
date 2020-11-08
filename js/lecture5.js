function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}


function max(a , b) {
    if (a > b) return a;
    else return b;
}
console.log("Expected output of max(20,10) is 10 and  "
    + myFunctionTest(20, function(){return max( 20, 10); }));
function maxOfThree(a, b, c) {
    var d = max(a,b)
    return max(d,c);
}

console.log("Expected output of maxOfThree(20, 10, 30) is 30 and  "
    + myFunctionTest(30, function(){return maxOfThree( 20, 10, 30); }));

function isVowel(c) {
    let vowels = ['a', 'e', 'i', 'o','u'];
    for (let i in vowels) {
        if (c === vowels[i]) return true;
    }
    return false;
}
console.log("Expected output of isVowel('a') is true and  "
    + myFunctionTest(true, function(){return isVowel( 'a'); }));
console.log("Expected output of isVowel('b') is false and  "
    + myFunctionTest(false, function(){return isVowel( 'b'); }));


function add(a) {
    return a.reduce(function(prevVal, elem){
        return prevVal + elem;});
}

console.log("Expected output of add([1,2,3,4]) is 10 and  "
    + myFunctionTest(10, function(){return add( [1,2,3,4]); }));

function multiply(a) {
    return a.reduce(function(prevVal, elem){
        return prevVal * elem;});
}

console.log("Expected output of multiply([1,2,3,4]) is 24 and  "
    + myFunctionTest(24, function(){return multiply( [1,2,3,4]); }));

function reverse(s) {
    let a = s.split('');
    return a.reduce(function(prevVal, elem){
        return elem+prevVal;});
}
console.log("Expected output of reverse(\"jag testar\") is \"ratset gaj\" and  "
    + myFunctionTest("ratset gaj", function(){return reverse( "jag testar"); }));

function findLongestWord(a) {
    return a.reduce(function(prevVal, elem){
        if (prevVal.length > elem.length) return prevVal
        else return elem;});
}

console.log("Expected output of findLongestWord(['1', '22', '333']) is '333' and  "
    + myFunctionTest('333', function(){return findLongestWord( ['1', '22', '333']); }));

function filterLongWords(a, i) {
    return a.filter(function(elem){
        return elem.length > i;});
}
console.log("Expected output of filterLongWords(['1', '22', '333', '4444'], 3) is ['4444'] and  "
    + myFunctionTest('4444', function(){return filterLongWords( ['1', '22', '333', '4444'], 3)[0]; }));