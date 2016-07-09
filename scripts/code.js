
(function(exports) {
  "use strict";
    var $table, $button, $log, $data
    var BeerList = {
        setData: function(data, cb){
            $data = data
            return cb()
        },
        data:  $data,        
        init: function(){
            $table = $("#table")
            $button = $("#button")
            $log = $('#log')
            //Make table
            $table.bootstrapTable({
                data: $data
            })
            //Make log
            $log.bootstrapTable({
                data: []
            })
            //Attach click event
            $button.click(function () {
                var checkedRows = BeerList.getCheckedRowObject()
                BeerList.addToLog(checkedRows.rows)
                BeerList.removeFromTable(checkedRows.ids)
            })
        },
        addToLog: function(rowsToRemove){
            rowsToRemove.forEach(function(row) {
                $log.bootstrapTable('insertRow', {index: log.length, row: row})
            })
        },
        removeFromTable: function(idsToRemove){
            $table.bootstrapTable('remove', {
                    field: 'id',
                    values: idsToRemove
            })
        },
        getCheckedRowObject: function(){
            var rowsToRemove = BeerList.getSelectedRowsFromTable()
            var idsToRemove = BeerList.extractIdsFromRows(rowsToRemove)
            return {"rows": rowsToRemove, "ids": idsToRemove}
        },
        getSelectedRowsFromTable: function(){
            return $table.bootstrapTable('getSelections')
        },
        extractIdsFromRows: function(rowsToRemove){
            return rowsToRemove.map(function(row) {
                return row.id
            })
        }
    }
    exports.BeerList = BeerList
})(this)