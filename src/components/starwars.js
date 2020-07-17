import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCharacter } from '../actions'
import CharactersDisplay from '../components/charactersDisplay.js'
import Character from '../components/character.js'

function Starwars(){
    const dispatch = useDispatch()

    const [characterNumber, setNumber] = useState(0)
    const [characterList, setList] = useState([])
    const data = useSelector(state => state.character)

    return(
        <div>
        <div className="forms">
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

                    let character = <Character name={data.name} 
                        height={data.height} 
                        mass={data.mass} 
                        hairColor={data.hair_color} 
                        eyeColor={data.eye_color} 

                    />
                    
                    const list = [...characterList, character];
                    setList(list)
                }}
            >
                <button name="save" type="submit">Save</button>
            </form>
            
        </div>

        {data &&
            <div>
                <Character name={data.name} 
                        height={data.height} 
                        mass={data.mass} 
                        hairColor={data.hair_color} 
                        eyeColor={data.eye_color} 
                    />
            </div>
        }

        <CharactersDisplay characterList={characterList} />

        </div>
    )
}

export default Starwars