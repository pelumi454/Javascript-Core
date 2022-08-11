// how to access data from an object

const fitBitData = {
    totalMiles: 308777,
    totalSteps: 27223,
    avgCalorieBurn: 5755,
    workoutThisWeek: '5 of 7',
    avgGoodSleep: 2.13
}
fitBitData.totalMiles 
// should give us 308777

//another way to access data from an object 
const numbers = {
    100: 'one hundred',
    16: 'sixteen'
}
numbers[100] 
// the result should be 'one hundred'

// how to add properties to an object 
const userReviews = {};
userReviews.mrSmith = 4;
userReviews['queenBee'] = 7;