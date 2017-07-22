'use strict';
$(document).ready(function () {
    // =======================Advanced form elements2======================================

    //        Masks
    $(".input_mask").inputmask();
//        End of masks

//        Jumps to next field
    $(".autotab").keyup(function () {
        if (this.value.length == this.maxLength) {
            var $next = $(this).next('.autotab');
            if ($next.length)
                $(this).next('.autotab').focus();
            else
                $(this).blur();
        }
    });
//        End of Jumps to next field

    // Multi select
    $('#multi_select1').multiSelect();
    $('#multi_select2').multiSelect({
        selectableOptgroup: true
    });
    $('#multi_select3').multiSelect({
        selectableHeader: "<div class='custom-header'>Selectable items</div>",
        selectionHeader: "<div class='custom-header'>Selection items</div>",
        selectableFooter: "<div class='custom-header'>Selectable footer</div>",
        selectionFooter: "<div class='custom-header'>Selection footer</div>"
    });
    $('#multi_select4').multiSelect({
        selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
        selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

            that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                .on('keydown', function (e) {
                    if (e.which === 40) {
                        that.$selectableUl.focus();
                        return false;
                    }
                });

            that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                .on('keydown', function (e) {
                    if (e.which == 40) {
                        that.$selectionUl.focus();
                        return false;
                    }
                });
        },
        afterSelect: function () {
            this.qs1.cache();
            this.qs2.cache();
        },
        afterDeselect: function () {
            this.qs1.cache();
            this.qs2.cache();
        }
    });
//        End of multiselect

    // =======================End of advanced form elements2======================================
});
