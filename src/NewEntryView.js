import React, { useState } from 'react'

export default function NewEntryView(props) {
    const { cat_id } = props.match.params
    const { categories, addEntry } = props
    const [entry, setEntry] = useState("")
    return (
        <div>
            <h1>New Entry View</h1>
            <h4>Category: {categories[cat_id]} </h4>
            <form onSubmit={e => e.preventDefault(); addEntry(entry)}>
                <div>
                    <textarea value ={entry} onChange={e => setEntry(e.target.value)}></textarea>
                </div>
                <button>Create New Entry</button>
            </form>
        </div>
    )
}