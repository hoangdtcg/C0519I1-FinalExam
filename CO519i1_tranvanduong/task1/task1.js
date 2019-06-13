function findMaxScore(arr) {
    let maxScore = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxScore < arr[i]) {
            maxScore = arr[i];

        }

    }
    return maxScore;

}


let arr1 = [10, 5, 2, 8, -1, 6, 8];
let arr2 = [2.4, 0, 5, -1];
let arr3 = [-8, -6, -2, -6, -1, -1, -4];

function display() {
    document.write("the max Score of arr 1 is : " + findMaxScore(arr1));
    document.write("<br>");
    document.write("the max Score of arr 2 is : " + findMaxScore(arr2));
    document.write("<br>");
    document.write("the max Score of arr 3 is :" + findMaxScore(arr3));


}

display();