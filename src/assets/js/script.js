function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_jskb7yp", "template_frsdhvq", params).then(function (res) {
        alert("Success!" + res.status);
    })
}