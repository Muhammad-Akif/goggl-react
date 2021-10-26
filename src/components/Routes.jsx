import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Results from './Results'

const Routes = () => {
    return (
        <div className="p-4">
            <Route exact path="/">
                <Redirect to="/search" />
            </Route>
            <Route exact path={['/search', '/images', '/news', '/videos']}>
                <Results />
            </Route>
        </div>
    )
}

export default Routes;
