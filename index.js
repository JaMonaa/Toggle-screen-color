
$(document).ready(function () {
    for (var i = 0; i < $(".checkbox").length; i++) { 
        $("#switch" + (i + 1)).change(function () {
            var isChecked = $(this).is(":checked");
            var switchId = $(this).attr("id");
            changeBackGround (isChecked, switchId);
        });
    }
});


function changeBackGround (isChecked, switchId) {

    switch (switchId) {
        case "switch1":
            if(isChecked) {
                $("body").css("background-color", "pink");
            } else {
                $("body").css("background-color", "white")
            }
        break;

        case "switch2":
            if(isChecked) {
                $("body").css("background-color", "lightgreen");
            } else {
                $("body").css("background-color", "white");
            }
        break;

        case "switch3":
            if (isChecked) {
                $("body").css("background-color", "lightblue");
            } else {
                $("body").css("background-color", "white");
            }
        break;

        case "switch4":
            if (isChecked) {
                $("body").css("background-color", "lightyellow");
            } else {
                $("body").css("background-color", "white");
            }
        break;

        case "switch5":
            if (isChecked) {
                $("body").css("background-color", "rgb(220, 177, 246)");
            } else {
                $("body").css("background-color", "white");
            }
        break;

        default: console.log("Incorrect command");
    }

}
