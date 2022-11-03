const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
                    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];


function generate() {
    let password1 = ""
    let password2 = ""
    for (let i = 1; i <= 15; i++){
        let randomPasswd1 = characters[Math.floor(Math.random() * characters.length)]
        password1 += randomPasswd1
        document.getElementById("password1").value = password1
       
        
        let randomPasswd2 = characters[Math.floor(Math.random() * characters.length)]
        password2 += randomPasswd2
        document.getElementById("password2").value = password2
       
    }
   
}


function copyPassword(){
    let alertBox = document.querySelector('.alerBox')
    alertBox.textContent = "Copied";
    let copyPassText1 = document.getElementById("password1");
    copyPassText1.select();
    copyPassText1.setSelectionRange(0,9999);
    document.execCommand("copy");
    alertBox.classList.toggle('active')
   
}

function copyPasword(){
    let copyPassText2 = document.getElementById("password2");
    copyPassText2.select();
    copyPassText2.setSelectionRange(0,9999);
    document.execCommand("copy");
    alertBox1.classList.toggle('active')
    let alertBox1 = document.querySelector('.alerBox1')
    alertBox1.innerHTML = "Copied";
}


