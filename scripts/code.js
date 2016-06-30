
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
        var rowToRemove = $table.bootstrapTable('getSelections')[0]

        //Add to log
        $("#log").bootstrapTable('insertRow', {index: log.length, row: data[0]})

        //Remove checked rows
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [rowToRemove.id]
        })


    })
})
