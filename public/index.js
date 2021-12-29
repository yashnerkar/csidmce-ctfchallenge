function checkData(event) {
    
    event.preventDefault();
    let x = document.forms["login-form"]["username"].value;
    const p = document.forms["login-form"]["password"].value;
    // oh no! Client side validation always fails! thank god I have encrypted it!
    if (x === "John" || SHA1(p) == "b89356ff6151527e89c4f3e3d30c8e6586c63962") {;
    } else {
        alert("Invalid username or password");
    }

};