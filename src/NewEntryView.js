import React from 'react'

export default function NewEntryView(props) {
    const { cat_id } = props.match.params
    const { categories } = props
    return (
        <div>
            <h1>New Entry View</h1>
            <h4>Category: {categories[cat_id]} </h4>
        </div>
    )
}