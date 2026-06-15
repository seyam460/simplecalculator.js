function reverse(str) {
    if (typeof str !== 'string') return '';
    let rev_str = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }
    // return reverse string
    return rev_str;

}

// function check that string is palindrome or not 

function is_palindrome(str) {
    reverse_str = reverse(str);

    if(reverse_str == str) {
        console.log("passed string is palindrome");
    }else {
        console.log("passed string is not palindrome");
    }
}

// Example usage:
console.log(is_palindrome('racecar')) // true
console.log(is_palindrome('hello')) // false