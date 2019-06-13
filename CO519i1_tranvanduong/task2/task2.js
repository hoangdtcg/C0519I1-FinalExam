function tryRemoveFromArray(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            arr.splice(i,1);
        }

    }
    return arr;

}

let arr = [12, 6, 3, 7, 21, 5, 7];
let arr1 = [12, 6, 3, 7, 21, 5, 7];
let arr2= [12, 6, 3, 7, 21, 5, 7];
let arr3 = [12, 6, 3, 4, 7, 21, 5, 7];

function display() {
    document.write("the array after do request is : "+tryRemoveFromArray(arr, 2));
    document.write("<br>");
    document.write("the array after do request is : "+tryRemoveFromArray(arr1, 12));
    document.write("<br>");
    document.write("the array after do request is : " +tryRemoveFromArray(arr2, 7));
    document.write("<br>");
    document.write("the array after do request is : "+ tryRemoveFromArray(arr3, 7));


}

display();


