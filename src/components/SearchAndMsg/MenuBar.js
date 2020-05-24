import React from 'react';
import Search from '../SearchAndMsg/Search/Search';
import AlertsInModal from '../SearchAndMsg/AlertsFromServer/AlertsInModal';

function SearchAndAlerts(){
    return(
        <div class="msg col-10">
        <AlertsInModal/>
        <Search/>
        </div>
    )
}

export default SearchAndAlerts