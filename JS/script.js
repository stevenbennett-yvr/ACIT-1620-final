
const toggle = document.querySelector('.toggle');

function mode_swap(event) {
    const body = document.querySelector('body');
    if (body == "body.light-theme"){
    document.body.classList.remove('light-theme')
    document.body.classList.add("dark-theme")
    }
    else{
    document.body.classList.remove('dark-theme')
    document.body.classList.add("light-theme")
    }
};

toggle.addEventListener("click", mode_swap);


const submit = document.querySelector('#frm-btn')

function logsubmit(event) {
    let addcontact = {
    name: document.querySelector('#name').value,
    address: document.querySelector('#address').value,
    email: document.querySelector('#msg').value,
    };
    console.log(addcontact);
    event.preventDefault();

}

submit.addEventListener("click", logsubmit)