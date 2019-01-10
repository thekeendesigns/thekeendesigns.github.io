function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password','');

    while (testV <= 3) {
        if (!pass1) 
            history.go(-1); // goes back one step
        if (pass1 == 'GoogleBest123!') {
            window.open('https://thekeendesigns.github.io/google-design.html','_self'); // opens new page, '_self' = opens in same tab
            break;
        }
        var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again', '');  
        testV += 1;
    }

    if (pass1.toLowerCase()!="google" & testV == 3) { // if user gets pass correct on last try, cancel other if()
    history.go(-1);
    return " ";
    }
}