'use strict';
$(document).ready(function () {
//       ====================  Advanced form elements ============================
    $(".chosen-select").chosen();
    $("#chosen6").chosen({
        disable_search_threshold: 10
    });
    $("#select2_1,#select2_2,#select2_4").select2();
    $("#select2_3").select2({
        placeholder: "Select a state",
        allowClear: true
    });
    $(".select_enable").on("click", function () {
        $("#select2_4").prop("disabled", false);
    });

    $(".select_disable").on("click", function () {
        $("#select2_4").prop("disabled", true);
    });
    $("#select2_5").select2({
        maximumSelectionLength: 2
    });
    $("#select2_6").select2({
        minimumResultsForSearch: Infinity
    });
    var $example = $("#select2_7").select2();
    $(".single_set_val").on("click", function () {
        $example.val("CA").trigger("change");
    });

    $(".single_open").on("click", function () {
        $example.select2("open");
    });
    $(".single_close").on("click", function () {
        $example.select2("close");
    });

    $(".single_init").on("click", function () {
        $example.select2();
    });
    $(".single_destroy").on("click", function () {
        $example.select2("destroy");
    });

    var $exampleMulti = $("#select2_8").select2();
    $(".multi_set_val").on("click", function () {
        $exampleMulti.val(["CA"]).trigger("change");
    });
    $(".multi_clear").on("click", function () {
        $exampleMulti.val(null).trigger("change");
    });
    $("#select2_9").select2({
        tags: true
    });
    $("#select2_10").select2({
        theme: "classic"
    });
    $("#select2_11").select2({
        templateResult: formatState,
        templateSelection: formatState
    });
    function formatState (state) {
        if (!state.id) { return state.text; }
//        console.log(state);
        var $state = $(
            '<span><img src="vendors/select2/images/' + state.element.value.toLowerCase() + '.png" class="img-flag img_flag" /> ' + state.text + '</span>'
        );
        return $state;
    }

    // ==========================choices=====================================
    new Choices(document.getElementById('choices-text-remove-button'), {
        delimiter: ',',
        editItems: true,
        maxItemCount: 5,
        removeItemButton: true
    });
    new Choices('#choices-text-unique-values', {
        paste: false,
        duplicateItems: false,
        editItems: true
    });

    new Choices('#choices-text-email-filter', {
        editItems: true,
        regexFilter: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    }).setValue(['joe@bloggs.com']);

    new Choices('#choices-text-disabled', {
        addItems: false,
        removeItems: false
    }).disable();


    new Choices('#choices-text-preset-values', {
        items: ['josh@joshuajohnson.co.uk', { value: 'joe@bloggs.co.uk', label: 'Joe Bloggs' } ]
    });
    var rtl = new Choices(document.getElementById('choices-text-rtl'), {
        delimiter: ',',
        editItems: true,
        maxItemCount: 5,
        removeItems: false
    });

    new Choices('#choices-multiple-remove-button', {
        removeItemButton: true
    });

    new Choices(document.getElementById('choices-multiple-rtl'), {
        delimiter: ',',
        editItems: true,
        maxItemCount: 5,
        removeItems: false
    });
    // =============================End of choices===================================
});
//    ========================== End of Advanced form elements================================