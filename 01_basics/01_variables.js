const accountId = 14453  //not change the value
let accountEmail ="salonivis43@gmail.com"  //
var accountPassword ="123456"
accountCity = "Gorakhpur"

// accountId = 2  //  not allowed

accountEmail="saloni@gmai;.com"
accountPassword="467987"
accountCity="delhi"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountPassword,accountEmail,accountCity])