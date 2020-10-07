import React from 'react'
import PropTypes from 'prop-types'

//props = {personInfo:{firstName:'NA', lastName:'NA'}}

export default function PersonDeail({ updateFirstNameCallback, updateLastNameCallback, personInfo, loadingStatus }) {
    console.log('[PD] rendered')
    // const { updateFirstNameCallback, updateLastNameCallback, personInfo } = props;
    const { firstName, lastName } = personInfo;
    // const changeFirstName = (e) => {
    //     let firstName = e.target.value;
    //     updateFirstNameCallback(firstName);
    // }
    // const changeLastName = (e) => {
    //     let lastName = e.target.value;
    //     updateLastNameCallback(lastName);
    // }

    let design = null;
    if (loadingStatus) {
        design = 'loading...';
    }
    else {
        design = (
            <div>
                FirstName: &nbsp;
                <input
                    type='text'
                    value={firstName}
                    onChange={(e) => updateFirstNameCallback(e.target.value)} />
                <br />
            LastName: &nbsp;
                <input
                    type='text'
                    value={lastName}
                    onChange={(e) => updateLastNameCallback(e.target.value)}
                />
                <br />
                <button>Update</button>
            </div>
        );
    }
    return design;
}

PersonDeail.propTypes = {
    personInfo: PropTypes.object.isRequired,
    updateFirstNameCallback: PropTypes.func.isRequired,
    updateLastNameCallback: PropTypes.func.isRequired,
}