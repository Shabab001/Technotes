import React,{lazy} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

const Header =lazy(()=>import("../components/SharedComponents/Header"))
const Footer =lazy(()=>import("../components/SharedComponents/Footer"))
const Home =lazy(()=>import('../pages/Home'))

const SingleNote =lazy(()=>import('../pages/SingleNote'))
const Routes = (props) => {
    return (
       <>
       <Switch>
           <>
           <Header {...props}/>
           <Route exact path="/note" component={Home} />
           
           <Route exact path="/note/:id" component={SingleNote} />
           <Footer/>
           </>
       </Switch>
       </>
    )
}

export default Routes
