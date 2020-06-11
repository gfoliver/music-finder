import React from 'react'
import ResultStyle from '../styles/Result'
import { Link } from 'react-router-dom'
import Player from './Player'

export default function Result({ cover, title, artist, preview }) {
    return(
        <ResultStyle cover={cover}>
            <Player url={preview} />
            <div className="text">
                <Link className="title" to={`/${encodeURI(artist)}/${encodeURI(title)}`}>{title}</Link>
                <div className="artist">{artist}</div>
            </div>
        </ResultStyle>
    )
}