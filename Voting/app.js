function dark(){
    document.querySelector('html').style.colorScheme='dark'
}
function light(){
    document.querySelector('html').style.colorScheme='light'
}

function send(){
    // let name =document.frm.Name.value;
    // let city =document.frm.City.value;
    // let number =document.frm.number.value;
    // let age =document.frm.Age.value;
    // let document = document.
    let name = document.getElementById('Name').value;
    let age = document.getElementById('Age').value;
    let city = document.getElementById('City').value;
    let number = document.getElementById('Number').value;
    let doc =document.getElementById('Document').value;
    sessionStorage.setItem('Name',name);
    sessionStorage.setItem('Age',age);
    sessionStorage.setItem('City',city);
    sessionStorage.setItem('Number',number);
    sessionStorage.setItem('Document',doc);
    open('resulyt.html')
}
