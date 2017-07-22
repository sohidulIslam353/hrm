"use strict";
$(document).ready(function () {
    //        File input
    $("#input_21").fileinput({
        theme: "fa",
        previewFileType: "image",
        browseClass: "btn btn-success",
        browseLabel: "Pick Image",
        removeClass: "btn btn-danger",
        removeLabel: "Delete"
    });
    $("#input_4").fileinput({
        showCaption: false,
        theme: "fa"
    });
    $("#input_22").fileinput({
        theme: "fa",
        previewFileType: "text",
        allowedFileExtensions: ["txt", "md", "ini", "text"],
        previewClass: "bg-warning"
    });
    $("#input_fa").fileinput({
        theme: "fa",
        uploadUrl: "/file-upload-batch/2"
    });
//        End of file input

//       ============================ jquery file upload========================================
    $('#fileupload').fileupload({
        dataType: 'json',
        maxNumberOfFiles: 4
    });
//    ====================================    End of jquery file upload==========================

//    ===============================    dropify===================================================
    $('.dropify').dropify();
    $("[data-max-file-size]").dropify({
        error: {
            'fileSize': 'The file size is too big ({{ value }}B max).'
        }
    });
//    ============================    End of dropify===============================================

})