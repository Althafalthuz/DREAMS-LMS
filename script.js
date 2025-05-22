const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);

});

let menu= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};


/* Email JS */




function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value

    };


const serviceID = "service_a8jubza";
const templateID = "template_2jehyrl";

emailjs.send(serviceID,templateID,params)
.then( (res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully");
})

.catch((err) => console.log(err));

}

