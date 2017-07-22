"use dtrict";
$(document).ready(function () {
    //===========Editable table=======================
    $("body").on('click',".footable-show",function () {
        $(this).parent().closest('table').find('th.footable-editing').html('<b>Actions</b>');
    });
    jQuery(function($){
        var $modal = $('#editor-modal'),
            $editor = $('#editor'),
            $editorTitle = $('#editor-title'),
            ft = FooTable.init('#editing-example', {
                editing: {
                    enabled: true,
                    addRow: function(){
                        $modal.removeData('row');
                        $editor[0].reset();
                        $editorTitle.text('Add a new row');
                        $modal.modal('show');
                    },
                    editRow: function(row){
                        var values = row.val();
                        $editor.find('#id').val(values.id);
                        $editor.find('#firstName').val(values.firstName);
                        $editor.find('#lastName').val(values.lastName);
                        $editor.find('#jobTitle').val(values.jobTitle);
                        $editor.find('#location').val(values.location);
                        $editor.find('#dept').val(values.dept);

                        $modal.data('row', row);
                        $editorTitle.text('Edit row #' + values.id);
                        $modal.modal('show');
                    },
                    deleteRow: function(row){
                        if (confirm('Are you sure you want to delete the row?')){
                            row.delete();
                        }
                    }
                }
            }),
            uid = 10;

        $editor.on('submit', function(e){
            if (this.checkValidity && !this.checkValidity()) return;
            e.preventDefault();
            var row = $modal.data('row'),
                values = {
                    id: $editor.find('#id').val(),
                    firstName: $editor.find('#firstName').val(),
                    lastName: $editor.find('#lastName').val(),
                    jobTitle: $editor.find('#jobTitle').val(),
                    location: $editor.find('#location').val(),
                    dept: $editor.find('#dept').val()

                };

            if (row instanceof FooTable.Row){
                row.val(values);
            } else {
                values.id = uid++;
                ft.rows.add(values);
            }
            $modal.modal('hide');
        });
    });
//==================Editable table end=====

//=============Sorting columns============
    $('#filtering-example-1').footable();
    //=============Sorting columns end============

    //=============Row Toggle ============
    $('#toggle-example-1').footable();
    //=============Row Toggle end ============

    //=============Position the Row toggle ============
    $('#toggle-example-3').footable();
    //=============Position the Row toggle end ============

    //=============  Accordion Tables ============
    $('#accordion-example-1,#accordion-example-2').footable();
    //=============  Accordion Tables end============
});