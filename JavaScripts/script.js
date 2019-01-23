//using only 1 record to check
var myDatabase = [
    {
        userName:   "amitabh",
        password:   "123"
    }
];
//desiging the newsFeed
var myNewsFeed = [
    {
        userName:   "amitabh",
        feed:       "It is a wonderful thing to learn javaScript"
    },
    {
        userName:   "geetanjali",
        feed:       "wow nice to know people are so interested in JS",
    }
];
//prompting the user for user name 

var promptUserName = prompt("what is your userName");
var promptPassword = prompt("what is your password");
//this would be generic function later we will pass the 
function login(usr,pwd){
    if (usr === myDatabase[0].userName && 
        pwd === myDatabase[0].password){
        console.log(myNewsFeed);
    }else{
        console.log("wrong username or password");
    }

};
//invoking the functiononsole.log("hi there");
login(promptUserName,promptPassword);
