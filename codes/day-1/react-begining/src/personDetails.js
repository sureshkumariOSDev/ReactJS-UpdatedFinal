import React from 'react'

function PersonDetails(data) {

    var detail = data.fname + ' ' + data.lname;
    //<span id='' class='' style=''>detail</span>
    // var nameSpan = React.createElement(
    //     'span',
    //     {
    //         id: 'detailSpan',
    //         style: { backgroundColor: 'lime', fontSize: 'medium' }
    //     },
    //     detail);

    //JSX: JavaScript XML
    var nameSpan =
        (
            <span id='detailSpan' style={{ backgroundColor: 'lime', fontSize: 'medium' }}>
                {detail}
                {/** my comment */}
            </span>
        );

    return nameSpan;
}

function Check() {
    return 'Hi...';
}

export { PersonDetails, Check };
