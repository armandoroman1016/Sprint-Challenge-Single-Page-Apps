import React from 'react'
import { Card} from 'semantic-ui-react'

export default function LocationCard (props) {
  
  const {dimension} = props
  const {name} = props
  const {residents} = props
  const {type} = props
  const {id} = props

  console.log(props)

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{dimension}</Card.Meta>
        <Card.Description>
        <p>Residents : {residents.length}</p>
        <p>Type : {type}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
