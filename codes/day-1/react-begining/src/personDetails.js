//component: personDetails
function personDetails(data) {
    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = data.fname + ' ' + data.lname;
    return nameSpan;
}
