$("#breakfast").change ( function () {
    var targID  = $(this).val ();
    $("div.style-sub-1, div.style-sub-2").hide();
    $('#' + targID).show();
} )
