import React from 'react'
import { Link } from 'react-router-dom'

export default function CategorySelectionView(props) {
    return (
        <div>
            <h1>Category Selection</h1>
            <ul>
                {
                    props.categories.map((item, index) => (
                        <li>
                            <Link to='entry/new/${index}'>{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}