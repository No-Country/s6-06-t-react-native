
import React from 'react';
import NavMenu from './NavMenu';
import OptionsComunity from './OptionsComunity';
import InfoComunity from './InfoComunity';

const Index = ({pathImgUser, TypeComunity}) => {
    return (
        <>
            <NavMenu 
                pathImgUser={pathImgUser}
            />
            <OptionsComunity 
                TypeComunity={TypeComunity}
            />
            <InfoComunity />
        </>
    );
}


export default Index;