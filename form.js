function handleSubmit(event){
    for (control of event){
        if(control.tagName !== "BUTTON"){
        formdata[control.id]=control.value;
        }
    }
    console.log(formdata);
    window.alert("Form Submitted");
    event.reset();
    sessionStorage.setItem('userData',JSON.stringify(formdata));
    window.location="form_confirmation.html";

    return false;
}
const formdata={}

