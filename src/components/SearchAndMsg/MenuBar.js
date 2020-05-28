import React from 'react';
import Search from '../SearchAndMsg/Search/Search';
import AlertsInModal from '../SearchAndMsg/AlertsFromServer/AlertsInModal';

function SearchAndAlerts(props){
    return(
        <div class="msg col-10">
        <AlertsInModal show={props.show}/>
        <Search/>
        </div>
    )
}

export default SearchAndAlerts