import { CartProvider } from "common/context/Cart";
import { UserProvider } from "common/context/Users";
import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CartProvider>
            <Route path="/feira">
              <Feira />
            </Route>
          </CartProvider>
          <Route path="/carrinho">
            <Carrinho />
          </Route>
        </UserProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;