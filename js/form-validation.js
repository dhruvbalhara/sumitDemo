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

    const appIdList = {
        app1: {
            id: "9f6eb-8b53-4b80-b3d2-d0f290a38f58",
            authToken: "OGJlOGJlZDYtYjEwOC00OTk3LTg0NGEtNjU2NzlmM2NmN2Ni"
        },
        app2: {
            id: "9f6eb-8b53-4b80-b3d2-d0f290a38f58",
            authToken: "OGJlOGJlZDYtYjEwOC00OTk3LTg0NGEtNjU2NzlmM2NmN2Ni"
        },
        app3: {
            id: "9f6eb-8b53-4b80-b3d2-d0f290a38f58",
            authToken: "OGJlOGJlZDYtYjEwOC00OTk3LTg0NGEtNjU2NzlmM2NmN2Ni"
        },
        app4: {
            id: "9f6eb-8b53-4b80-b3d2-d0f290a38f58",
            authToken: "OGJlOGJlZDYtYjEwOC00OTk3LTg0NGEtNjU2NzlmM2NmN2Ni"
        },
        app5: {
            id: "9f6eb-8b53-4b80-b3d2-d0f290a38f58",
            authToken: "OGJlOGJlZDYtYjEwOC00OTk3LTg0NGEtNjU2NzlmM2NmN2Ni"
        }
    };


    $("#submit").on("click", (e) => {
        e.preventDefault();

        let heading = $("#heading").val();
        let textContent = $("#textContent").val();
        let sendAfter = $("#sendAfter").val();

        let checkedList = $("input[name=app-env]:checked");
        try {
            for (let i = 0; i < checkedList.length; i++) {
                let selectedEnv = appIdList[checkedList[i].value];
                let appId = selectedEnv.id;
                if (appId && heading && sendAfter) {
                    let data = {
                        app_id: appId,
                        headings: { en: heading },
                        contents: { en: textContent || "" },
                        send_after: new Date(sendAfter).toUTCString(),
                        included_segments: ["All"]
                    };
                    $.ajax({
                        type: "POST",
                        url: "https://onesignal.com/api/v1/notifications",
                        data: JSON.stringify(data),
                        dataType: "json",
                        headers: {
                            Authorization: "Basic " + selectedEnv.authToken,
                            "Content-Type": "application/json"
                        }
                    })
                    .done(resp => {
                        alert(resp);
                    })
                    .fail(e => {
                        alert(e);
                    });
                } else {
                    alert("appId && heading && sendAfter check kar lo");
                }
            }
        } catch(e) {
            alert(e);
        }

    });

  }, false)
}())