const firstFocus =()=>{
    let sale = document.registration.fullname.focus();
};

const valProd =() =>{
    let fname=document.registration.fullname;
    let checkerror = document.querySelector('.one');
    const nameee = /^[a-zA-Z0-9]+$/;
    if(fname.value.length <3 || !fname.value.match(nameee)){
        fname.style.border ='2px solid red';
        checkerror.textContent = 'characters should be 3-5'
        return false;
}
else{
    fname.style.border ='2px solid green '
    return true
}
}

const valEmail =() =>{
    let Emal=document.registration.email;
    let checkerror = document.querySelector('.two');
    const emaill = /^[a-zA-Z0-9]+$/;
    if(Emal.value.length <3 || !Emal.value.match(emaill)){
        Emal.style.border ='2px solid red';
        checkerror.textContent = 'Email format'
        return false;
}
else{
    fname.style.border ='2px solid green '
    return true
}
};

const ValPasso=() =>{
    let password=document.registration.pass;
    let checkerror = document.querySelector('.three');
    const passe = /^[a-zA-Z0-9]+$/;
    if(password.value.length <3 || !password.value.match(emaill)){
        password.style.border ='2px solid red';
        checkerror.textContent = 'characters 4 min'
        return false;
}
else{
    fname.style.border ='2px solid green '
    return true
}
};

