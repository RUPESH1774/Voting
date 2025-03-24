let changer = document.querySelector('#checkbox');
let isDark = false;

changer.addEventListener('click', () => {
    if (isDark) {
        document.querySelector('html').style.colorScheme = 'light';
        isDark = false;
    } else {
        document.querySelector('html').style.colorScheme = 'dark';
        isDark = true;
        
    }
});

    


function files() {
    const preview = document.getElementById('preview');
    const file = document.getElementById('Document').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result; // sets the preview image source
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

// Send data and save to sessionStorage
function send() {
    let name = document.getElementById('Name').value;
    let age = document.getElementById('Age').value;
    let city = document.getElementById('City').value;
    let number = document.getElementById('Number').value;
    let docInput = document.getElementById('Document');
    let docFile = docInput.files[0]; // get the actual File object

    if (docFile) {
        console.log("File Name: ", docFile.name);
        alert("Uploaded Document: " + docFile.name);
        sessionStorage.setItem('DocumentName', docFile.name); // saving file name in sessionStorage
    } else {
        alert("No document uploaded.");
        sessionStorage.setItem('DocumentName', "No Document");
    }

    // Save other form fields
    sessionStorage.setItem('Name', name);
    sessionStorage.setItem('Age', age);
    sessionStorage.setItem('City', city);
    sessionStorage.setItem('Number', number);

    // Open the next page
    open('resulyt.html');
}

// Welcome message prompt
let wel = prompt('Enter Your Name');
alert('Welcome To Voting Age Checker, ' + wel + '!');


