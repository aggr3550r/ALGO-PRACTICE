function lengthOfLongestSubstring(str) {
    let a_pointer = 0;
    let b_pointer = 0;
    let max = 0;

    let charSet = new Set();

    while (b_pointer < str.length) {
        if (!charSet.has(str.charAt(b_pointer))) {
            charSet.add(str.charAt(b_pointer));
            b_pointer++;
            max = Math.max(charSet.size, max);
        } else {
            charSet.delete(str.charAt(a_pointer));
            a_pointer++;
        }
    }

    return max;

}

console.log(lengthOfLongestSubstring("hellothere"))



const longestSubstring = (str) => {
    let a_pointer = 0, b_pointer = 0, max = 0;

    let charSet = new Set();

    while(b_pointer<=str.length){
        if(!charSet.has(str.charAt(b_pointer))){
            charSet.add(str.charAt(b_pointer))
            b_pointer++
            max = Math.max(charSet.size, max);
        }
        else {
            charSet.delete(str.charAt(a_pointer));
            a_pointer++
        }
    }
    return max;
}
/*
* iterate over each character in the string
    -for each character, check if it has occured in the frequency counter
        -if it has occured, wipe the frequency counter's memory
        -else if it has not occured, record its occurence
* at this point, we have achieved statelessness in our frequency counter
    -
*/