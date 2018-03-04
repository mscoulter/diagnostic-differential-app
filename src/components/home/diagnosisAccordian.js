import React from 'react'
import { Accordion, Button, Form, Segment } from 'semantic-ui-react'

const panels = [
  {
    title: 'Optional Details',
    content: {
      as: Form.Input,
      key: 'content',
      label: 'Maiden Name',
      placeholder: 'Maiden Name',
    },
  },
]

const AccordionExampleForm = () => (
  <Segment>
      <Form.Group widths={2}>
        <Form.Input label='First Name' placeholder='First Name' />
      </Form.Group>
      <Accordion as={Form.Field} panels={panels} />

      <Button secondary>Sign Up</Button>
  </Segment>
)

export default AccordionExampleForm
