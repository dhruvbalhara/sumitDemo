// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    // Array.prototype.filter.call(forms, function (form) {
    //   form.addEventListener('submit', function (event) {
    //     if (form.checkValidity() === false) {
    //       event.preventDefault()
    //       event.stopPropagation()
    //     }
    //     form.classList.add('was-validated')
    //   }, false)
    // })

//     "https://onesignal.com/api/v1/notifications" \
//   --header "Authorization: Basic OGJlOGJlZDYtYjEwOC00OTk3LTg0NGEtNjU2NzlmM2NmN2Ni" \
//   --header "Content-Type: application/json" \
//   --data "{
//     \"app_id\" : \"9f6eb-8b53-4b80-b3d2-d0f290a38f58\",
//   \"headings\": {
//                 \"en\": \"Test Notification Header"
//             },
//    \"contents\": {
//                 \"en\": \"1. This is first line of notification\\n2.This is second line\\n3.and this is third line\"
//             },
//    \"send_after\" : \"2020-01-24 20:03:00 GMT+0530\",
//     \"included_segments\" : [\"All\"]
// }


    $("#submit").on("click", (e) => {
        e.preventDefault();

        let heading = $("#heading").val();
        let textContent = $("#textContent").val();
        let sendAfter = $("#sendAfter").val();


        let data = {
            app_id: "9f6eb-8b53-4b80-b3d2-d0f290a38f58",
            headings: { en: heading },
            contents: { en: textContent || "" },
            send_after: new Date(sendAfter).toUTCString()
        };

        $.ajax({
            type: "POST",
            url: "https://onesignal.com/api/v1/notifications",
            data: data,
            headers: {
                Authorization: "Basic OGJlOGJlZDYtYjEwOC00OTk3LTg0NGEtNjU2NzlmM2NmN2Ni",
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            dataType: "json"
        }).done((resp) => {
            console.log(resp);
        }).fail((e) => {
            console.log(e);
        })
    });

  }, false)
}())