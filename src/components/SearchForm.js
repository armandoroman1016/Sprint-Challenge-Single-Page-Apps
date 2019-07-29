import React, { useState } from 'react';
import {Form, Button } from 'semantic-ui-react'

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  return (
    <div>
      <Form className="search-form">
        <Form.Field onSubmit={() => onSearch(query)}>
        <label>Search For Character</label>
        <input  placeholder='Character Name'
              onChange={handleInputChange}
              value={query.name}
              name="name" />
        </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
  );
}