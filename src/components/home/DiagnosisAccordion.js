import React from 'react'
import { Accordion, Button, Form, Input, Segment } from 'semantic-ui-react'

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
    Diagnosis #1<br/>
    <Input type="text" placeholder='Enter Problem...' />
    <Accordion as={Form.Field} panels={panels} />
  </Segment>
)

export default AccordionExampleForm
