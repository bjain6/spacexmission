jQuery(document).ready(function() {
    var data;

    function ajax1() {
        // NOTE:  This function must return the value 
        //        from calling the $.ajax() method.
        return $.ajax({
            url: "https://api.spaceXdata.com/v3/launches?limit=100",
            dataType: "json"
        });
    }

    $.when(ajax1()).done(function(data) {
        datalive = data;
        length = data.length;
        for (var i = 0; i < length; i++) {

            var memberdetail = document.createElement("div");
            memberdetail.id = "mem-" + i;
            memberdetail.className = "member-detail";

            var memberimg = document.createElement("div");
            memberimg.id = "mem-img-" + i;
            memberimg.className = "mem-img";
            memberdetail.appendChild(memberimg);

            var loaderImg = document.createElement("img");
            loaderImg.className = "mission-img";
            loaderImg.src = "assest/mem.png";
            memberimg.appendChild(loaderImg);

            var memdetail = document.createElement("div");
            memberdetail.id = "mem-detail" + i;
            memdetail.className = "mem-detail";
            memberdetail.appendChild(memdetail);

            var header = document.createElement("h1");
            header.id = "mem-head-" + i;
            header.className = "head";
            memdetail.appendChild(header);

            var para = document.createElement("p");
            para.id = "mem-para-" + i;
            para.className = "text";
            memdetail.appendChild(para);

            var launch = document.createElement("p");
            launch.id = "mem-launch-" + i;
            launch.className = "text";
            memdetail.appendChild(launch);

            var successlaunch = document.createElement("p");
            successlaunch.id = "mem-slaunch-" + i;
            successlaunch.className = "text";
            memdetail.appendChild(successlaunch);

            var successlanding = document.createElement("p");
            successlanding.id = "mem-slanding-" + i;
            successlanding.className = "text";
            memdetail.appendChild(successlanding);

            document.getElementById("mission").appendChild(memberdetail);


            $("#mem-head-" + i).html("<b>" + data[i].mission_name + "</b>");
            $("#mem-para-" + i).html("<span class='title'>Mission IDS:</span>" + data[i].mission_id);
            $("#mem-launch-" + i).html("<span class='title'>Launch Year:</span>" + data[i].launch_year);
            $("#mem-slaunch-" + i).html("<span class='title'> Successful Launch:</span>" + data[i].launch_success);
            $("#mem-slanding-" + i).html("<span class='title'>Successful Landing:</span>" + data[i].rocket.first_stage.cores[0].land_success);

            if (data[i].rocket.first_stage.cores[0].land_success == null) {
                $(".member-detail").hide();
            }
        }
    });
    $(".launch-year a.year").on("click touchstart", function() {

        var year = $(this).html();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".member-detail").show();
            return false;
        }
        $("a.year").removeClass("active");
        $(this).addClass("active");
        for (i = 0; i < datalive.length; i++) {
            if (datalive[i].launch_year == year) {
                $("#mem-detail" + i).show();
            } else {
                $("#mem-detail" + i).hide();
            }
        }
        return false;
    });
    $("#true_launch").on("click touchstart", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".member-detail").show();
            return false;
        }
        $("a.launch").removeClass("active");
        $(this).addClass("active");
        for (i = 0; i < datalive.length; i++) {
            if (datalive[i].launch_success) {
                $("#mem-detail" + i).show();
            } else {
                $("#mem-detail" + i).hide();
            }

        }
        return false;
    });

    $("#false_launch").on("click touchstart", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".member-detail").show();
            return false;
        }
        $("a.launch").removeClass("active");
        $(this).addClass("active");
        for (i = 0; i < datalive.length; i++) {
            if (!(datalive[i].launch_success)) {
                $("#mem-detail" + i).show();
            } else {
                $("#mem-detail" + i).hide();
            }

        }
        return false;
    });




    $("#true_land").on("click touchstart", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".member-detail").show();
            return false;
        }
        $("a.landing").removeClass("active");
        $(this).addClass("active");
        for (i = 0; i < datalive.length; i++) {
            console.log(datalive[i].rocket.first_stage.cores[0].land_success);
            if (datalive[i].rocket.first_stage.cores[0].land_success) {
                $("#mem-detail" + i).show();
            } else {
                $("#mem-detail" + i).hide();
            }

        }
        return false;
    });

    $("#false_land").on("click touchstart", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".member-detail").show();
            return false;
        }
        $("a.landing").removeClass("active");
        $(this).addClass("active");
        for (i = 0; i < datalive.length; i++) {
            if (!(datalive[i].rocket.first_stage.cores[0].land_success) && !(datalive[i].rocket.first_stage.cores[0].land_success == null)) {
                $("#mem-detail" + i).show();
            } else {
                $("#mem-detail" + i).hide();
            }

        }
        return false;
    });
});