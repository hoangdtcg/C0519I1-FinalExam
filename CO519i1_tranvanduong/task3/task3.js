function printFibonacci(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; ; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
        if(arr[i] > n){
            arr.pop();
            break;
        }
    }
    return arr;
}
document.write(" the fibonaci 1 is : " + printFibonacci(12));
document.write(" the fibonaci 2 is : " + printFibonacci(25));
