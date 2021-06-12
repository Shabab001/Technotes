import React,{lazy} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

const Header =lazy(()=>import("../components/SharedComponents/Header"))
const Footer =lazy(()=>import("../components/SharedComponents/Footer"))
const Home =lazy(()=>import('../pages/Home'))
const Note =lazy(()=>import('../pages/Note'))
const Routes = (props) => {
    return (
       <>
       <Switch>
           <>
           <Header {...props}/>
           <Route exact path="/" component={Home} />
           <Route exact path="/note" component={Note} />
           <Footer/>
           </>
       </Switch>
       </>
    )
}

export default Routes
