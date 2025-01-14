import React from 'react'
import SearchForm from './SearchForm'

export default function WelcomePage() {
  return <section className="welcome-page">
    <header>
      <h1>Welcome to the ultimate fan site!</h1>
      <img className="main-img ui centered medium circular image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
    </header>
    <SearchForm />
  </section>

}
