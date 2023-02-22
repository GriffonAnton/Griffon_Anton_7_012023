
import React  from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from '../../pages/Home';
import FicheLogement from '../../pages/FicheLogement';
import APropos from '../../pages/APropos';
import Error from '../../pages/Error';

function MainRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/fiche-logement/:logementId" element={<FicheLogement/>}/>
            <Route path="/a-propos" element={<APropos/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
}

export default MainRouter;