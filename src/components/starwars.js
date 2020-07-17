import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from './title'
import { loadCharacter } from '../actions'

function Starwars(){
    const dispatch = useDispatch()

    const [characterNumber, setNumber] = useState(0)
    const [characterList, setList] = useState([])
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

            <form
                onSubmit={event => {
                    event.preventDefault()

                    let characterObject = {
                        name: data.name,
                        height: data.height,
                        mass: data.mass,
                        hairColor: data.hair_color,
                        eyeColor: data.eyeColor,
                    }
                    const list = [...characterList, characterObject];
                    setList(list)
                }}
            >
                <button name="save" type="submit">Save</button>
            </form>
            <Title title={data.name}/>
        </div>
    )
}

export default Starwars