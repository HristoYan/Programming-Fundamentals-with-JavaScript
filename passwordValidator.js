function passValid(pass) {
    pass = pass.split('');
    let isValid = true;
    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    numLet(pass);

    function numLet(pass) {
        let count = 0;
        let isNumOrLet = true;
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt();
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {

            } else {
                isNumOrLet = false;
                isValid = false;
            }

            if (code >= 48 && code <= 57) {
                count++;
            }
        }
        if(!isNumOrLet) {
            console.log("Password must consist only of letters and digits");
        }
        if (count < 2) {
            isValid = false;
            console.log("Password must have at least 2 digits");
        }
    }
    if (isValid) {
        console.log("Password is valid");
    }
}
passValid('pass12');