import React, { useState } from 'react'
import Container from '../styles/Container'
import SearchForm from '../styles/SearchForm'
import Icon from '../assets/img/search.svg'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()
    const [query, setQuery] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        history.push('search', { query })
    }

    return(
        <div className="Home page">
            <Container>
                <h1>Music Finder</h1>
                <p>Find your favourite music and lyrics</p>
                <SearchForm onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Type in an artist or music name..." 
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        required
                    />
                    <button type="submit"><img src={Icon} alt="search"/></button>
                </SearchForm>
            </Container>
        </div>
    )
}