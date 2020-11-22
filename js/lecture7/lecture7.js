function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

function sum(a) {
    return a.reduce(function(prevVal, elem){
        return prevVal + elem;});
}

console.log("Expected output of sum([1,2,3,4]) is 10 and  "
    + myFunctionTest(10, function(){return sum( [1,2,3,4]); }));

function reverse(s) {
    let a = s.split('');
    return a.reduce(function(prevVal, elem){
        return elem+prevVal;});
}

console.log("Expected output of reverse(\"jag testar\") is \"ratset gaj\" and  "
    + myFunctionTest("ratset gaj", function(){return reverse( "jag testar"); }));

function filterLongWords(a, i) {
    return a.filter(function(elem){
        return elem.length > i;});
}
console.log("Expected output of filterLongWords(['1', '22', '333', '4444'], 3) is ['4444'] and  "
    + myFunctionTest('4444', function(){return filterLongWords( ['1', '22', '333', '4444'], 3)[0]; }));