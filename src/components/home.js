import React from 'react'
import Title from './title'
import Starwars from './starwars'

function Home(){
    return (
        <div className="home">
            <Title title="FEW 2.3 Final - Audi Blades" />
            <Starwars/>
        </div>
    )
}

export default Home