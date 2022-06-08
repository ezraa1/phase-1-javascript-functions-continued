// code your solution 
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.` 
}
function wrapAdjective(style) {
    let result =(function(activity) {
        return "You are " +style+ activity+
        style + "!"
    })
    let emphatic = result;
    return emphatic;   
}