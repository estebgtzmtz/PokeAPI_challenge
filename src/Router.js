import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import PokemonsList from './pages/PokemonList/PokemonsList';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={PokemonsList} path='/' exact />
                <Route component={PokemonDetail} path='/pokemonDetail/:id' exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Router