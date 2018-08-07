import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'

export default () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/hi" component={() => 'HI'} />
    </div>
)