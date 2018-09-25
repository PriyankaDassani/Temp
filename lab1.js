const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let squareSum=0;
    arr.forEach(element => {
        const square=element*element;
        squareSum=square+squareSum;
    });
    return squareSum;
}
const questionTwo = function questionTwo(num) { 
    // Implement question 2 here

    if (num < 1){
        return 0;
    }
    else if (num == 1){
        return 1;
    }
    else {
        return questionTwo(num-1)+questionTwo(num-2);
    }

}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let count=0;
    let text1= text.toLowerCase();    
    for(let i = 0; i < text1.length; i++){
        if(text1[i] == 'a' || text1[i] == 'i' || text1[i] == 'o' ||text1[i] == 'e' ||text1[i] == 'u'){
          count+=1;
        }
      }
      return count;
    
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if (num < 0){
        return "NaN";
    }
    else if( num == 0){
        return 1;
    }
    else{
        return (num * questionFour(num-1));
    }
}

module.exports = {
    firstName: "PRIYANKA", 
    lastName: "DASSANI", 
    studentId: "10426752",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};