
var $table = $('#table'),
    $button = $('#button')

$(function () {
    //Make table
    $('#table').bootstrapTable({
        data: data
    })
    //Make log
    $('#log').bootstrapTable({
        data: log
    })
    //Attach click event
    $button.click(function () {

        //Collect checked row
        var rowsToRemove = $table.bootstrapTable('getSelections')
        var idsToRemove = rowsToRemove.map(function(row) {
          return row.id;
        });

        //Add to log
        rowsToRemove.forEach(function(row) {
            $("#log").bootstrapTable('insertRow', {index: log.length, row: row})
        });

        //Remove checked rows
        $table.bootstrapTable('remove', {
            field: 'id',
            values: idsToRemove
        })


    })
})
