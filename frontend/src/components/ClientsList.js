import React from 'react'
import {List, Datagrid, TextField, DateField, EmailField, EditButton, DeleteButton} from 'react-admin'

const ClientsList = (props) => {
  return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='fullname'/>
                <EmailField source='email'/>
                <TextField source='subject'/>
                <TextField source='message'/>
                <DateField source='date' label='date recieved'/>
                <DeleteButton basePath='admin' undoable={false}/>
            </Datagrid>
        </List>
  )
}

export default ClientsList