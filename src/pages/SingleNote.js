import React from 'react'
import NoteDetail from "../components/SingleNoteComponents/NoteDetailes"

const SingleNote = (props) => {
    console.log(props.match.params.id)
   
    return (
       <NoteDetail id={props.match.params.id} history={props.history}/>
    )
}

export default SingleNote
