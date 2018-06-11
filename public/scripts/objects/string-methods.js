//Length
console.log(name);
console.log(name.length);

//convert to uppercase
console.log(name.toUpperCase());
 
//includes method
let password = 'p@44asda';

console.log(password.includes('p@ssw0rd12344asda'));

//Trim
let nam = '    Anne Charmaine ';
console.log(nam.trim());

let isValidpassword = (password) =>{
    // if(!password.includes('password') && password.length > 8 ){
    //     return true
    // } else{
    //     return false;
    // }
    return password.length > 8 && !password.includes('password');
        
};
console.log(`Password validation result: ${isValidpassword('passowrd123123')}`);
console.log(`Password validation result: ${isValidpassword('password2aksdw')}`);
console.log(`Password validation result: ${isValidpassword('askldjsuw')}`);
