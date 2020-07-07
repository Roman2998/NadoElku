$('#btn-to-order').on("click", function() {
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let email = $("#email").val().trim();
    let adress = $("#adress").val();

    if(name == "") {
        $("#errorMess").text("Введите Имя");
        return false;
    } else if(phone == "") {
        $("#errorMess").text("Введите Телефон");
        return false;
    }  else if(email == "") {
        $("#errorMess").text("Введите Email");
        return false;
    } else if(adress == "") {
        $("#errorMess").text("Введите Адрес");
        return false;
    }
    $("#errorMess").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'name': name,
            'phone': phone,
            'email': email,
            'adress': adress
        },
        dataType: 'html',
        beforeSend: function() {
            $('#btn-to-order').prop("disabled", true);
        },
        success: function(data) {
            if (!data) {
                alert("Были ошибки, сообщение не отправилось");
            }else {
            $("#mailForm").trigger("reset");
            $('#orderModal').modal('hide');
            $('#btn-to-order').prop("disabled", false);
            $('#orderModalSuccess').modal('show');
            }
        }
    });


});