import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import FicheLogement from '../../pages/FicheLogement';
import APropos from '../../pages/APropos';
import Error from '../../pages/Error';

function MainRouter() {
    return (
        <Router>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/fiche-logement/:logementId">
                <FicheLogement/>
            </Route>
            <Route path="/a-propos">
                <APropos/>
            </Route>
            <Route>
                <Error/>
            </Route>
        </Router>
    );
}

export default MainRouter;