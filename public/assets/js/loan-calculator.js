if ($("#loan-calculator-1").length) {
    jQuery(function($) {


        var monthtoyear = $('#totalmonth').text() / 12;
        var yeartomonth = $('#totalyear').text() * 12;

        $('.loan-yearly-changer input').on('click', function() {
            var monthtoyear = $('#totalmonth').text() / 12;
            var yeartomonth = $('#totalyear').text() * 12;

            if ($('.loan-yearly-changer').length) {

                if ($('.loan-yearly-changer input').prop('checked')) {
                    $("#total-year-slide").slider({
                        range: "min",
                        min: 0.25,
                        max: 20,
                        step: 0.25,
                        value: monthtoyear,
                        slide: function(event, ui) {
                            $("#totalyear").text(ui.value);
                            loancalculateyear();
                        }
                    });

                    $("#totalyear").text($("#total-year-slide").slider("value"));
                    $('.yearly').addClass('active');
                    $('.monthly').removeClass('active');
                    loancalculateyear();
                } else {
                    $("#total-month-slide").slider({
                        range: "min",
                        min: 3,
                        max: 240,
                        step: 3,
                        value: yeartomonth,
                        slide: function(event, ui) {
                            $("#totalmonth").text(ui.value);
                            loancalculate();
                        }
                    });

                    $("#totalmonth").text($("#total-month-slide").slider("value"));
                    $('.yearly').removeClass('active');
                    $('.monthly').addClass('active');
                    loancalculate();
                }
            }
        })



        $("#pricipal-slide").slider({
            range: "min",
            min: 10000,
            max: 100000000,
            value: 100000,
            step: 10000,
            slide: function(event, ui) {
                $("#pricipal").text(ui.value);
                loancalculate();
            }
        });
        $("#pricipal").text($("#pricipal-slide").slider("value"));

        $("#total-year-slide").slider({
            range: "min",
            min: 0.25,
            max: 20,
            step: 0.25,
            value: monthtoyear,
            slide: function(event, ui) {
                $("#totalyear").text(ui.value);
                loancalculateyear();
            }
        });

        $("#totalyear").text($("#total-year-slide").slider("value"));

        $("#total-month-slide").slider({
            range: "min",
            min: 3,
            max: 240,
            step: 3,
            value: yeartomonth,
            slide: function(event, ui) {
                $("#totalmonth").text(ui.value);
                loancalculate();
            }
        });

        $("#totalmonth").text($("#total-month-slide").slider("value"));

        $("#intrest-slide").slider({
            range: "min",
            min: 5,
            max: 30,
            step: 0.01,
            value: 10,
            slide: function(event, ui) {
                $("#intrest").text(ui.value);
                loancalculate();
            }
        });
        $("#intrest").text($("#intrest-slide").slider("value"));

        loancalculate();
    });

    //if (typeof(functionName) != 'loancalculate') {

    function loancalculate() {


        var loanAmount = $("#pricipal").text();
        var rateOfInterest = $("#intrest").text();
        numberOfMonths = $("#totalmonth").text();
        var monthlyInterestRatio = (rateOfInterest / 100) / 12;

        var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
        var bottom = top - 1;
        var sp = top / bottom;
        var emi = ((loanAmount * monthlyInterestRatio) * sp);
        var full = numberOfMonths * emi;
        var interest = full - loanAmount;
        var int_pge = (interest / full) * 100;
        //$("#tbl_int_pge").html(int_pge.toFixed(2)+" %");
        //$("#tbl_loan_pge").html((100-int_pge.toFixed(2))+" %");

        var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        jQuery("#emi").html(emi_str);
        jQuery("#tbl_emi").html(int_str);
        jQuery("#tbl_la").html(full_str);

    }

    function loancalculateyear() {


        var loanAmount = $("#pricipal").text();
        var rateOfInterest = $("#intrest").text();
        numberOfMonths = $("#totalyear").text() * 12;
        var monthlyInterestRatio = (rateOfInterest / 100) / 12;

        var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
        var bottom = top - 1;
        var sp = top / bottom;
        var emi = ((loanAmount * monthlyInterestRatio) * sp);
        var full = numberOfMonths * emi;
        var interest = full - loanAmount;
        var int_pge = (interest / full) * 100;
        //$("#tbl_int_pge").html(int_pge.toFixed(2)+" %");
        //$("#tbl_loan_pge").html((100-int_pge.toFixed(2))+" %");

        var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");


        jQuery("#emi").html(emi_str);
        jQuery("#tbl_emi").html(int_str);
        jQuery("#tbl_la").html(full_str);

    }


    //}
}