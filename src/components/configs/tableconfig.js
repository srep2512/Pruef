/*eslint-disable*/
const config = {
    // [REQUIRED] Set the row height
    rowHeight: '50px',
    // (optional) Title to display
    title: 'Aktuelle Tickets',
    // (optional) No columns header
    noHeader: false,
    // (optional) Display refresh button
    refresh: true,
    // (optional)
    // User will be able to choose which columns
    // should be displayed
    columnPicker: true,
    // (optional) How many columns from the left are sticky
    leftStickyColumns: 0,
    // (optional) How many columns from the right are sticky
    rightStickyColumns: 0,
    // (optional)
    // Styling the body of the data table;
    // "minHeight", "maxHeight" or "height" are important
    bodyStyle: {
        maxHeight: '800px'
    },
    pagination: {
        rowsPerPage: 15,
        options: [5, 10, 15, 30, 50, 500]
    },
    // (optional) By default, Data Table is responsive,
    // but you can disable this by setting the property to "false"
    responsive: true,
    // (optional) Override default messages when no data is available
    // or the user filtering returned no results.
    messages: {
        noData: '<i>warning</i> No data available to show.',
        noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
    },
    selection: 'multiple',

}

/*eslint-disable*/
const columns = [{
        label: 'ID',
        field: 'id',
        sort: true,
        filter: true,
        width: '100px',        
    },
    {
        label: 'Name',
        field: 'name',
        sort: true,
        filter: true,
        width: '100px',
        
    },
    {
        label: 'Beschreibung',
        field: 'beschreibung',
        sort: true,
        filter: true,
        width: '100px',
        
    }
];

export { config, columns }
