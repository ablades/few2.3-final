import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from './title'
import { loadCharacter } from '../actions'

function Starwars(){
    const dispatch = useDispatch()

    const [characterNumber, setNumber] = useState(0)
    const data = useSelector(state => state.character)

    return(
        <div>
            <form
                onSubmit={event => {
                    event.preventDefault()
                    dispatch(loadCharacter(characterNumber))
                    }
                }
            >

                <input
                    type="number"
                    onChange={event => setNumber(event.target.value)}
                />
                <button name="submit" type="submit">Submit</button>
            </form>

            <Title title={data.name}/>
        </div>
    )
}

export default Starwars