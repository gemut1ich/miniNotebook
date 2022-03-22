import React from "react";

const Note = ({notes}) => {
    return (
        notes.map(note => {
            return (
                <div className="note">
                    <h2>Quote:</h2>
                    <p>{note.title}</p>
                    <h2>Note: </h2>
                    <p>{note.content}</p>
                </div>
            )
        })
    )
}

export default Note;