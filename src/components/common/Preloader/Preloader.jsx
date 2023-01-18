import preloader from './../../../assets/images/preloader.gif';
import React from 'react';

let Preloader = (props) => {
    return <div style={ {zIndex: 2} }>
        <img src={preloader} style={ {height: '150px'} } />
    </div>
}

export default Preloader;