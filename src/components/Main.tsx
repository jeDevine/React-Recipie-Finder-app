import React, { useState } from 'react';
import SearchForms from './SearchForms';

const Main = () => {
    const [] = useState();

    const handleSubmitForm = () => {

    }

    return (
        <div>
            <h1>Recipe Rescue!</h1>
            <SearchForms onSubmit={handleSubmitForm}/>
            {/* <ResultsList /> */}
        </div>
    )
}

export default Main;