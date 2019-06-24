import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import styled from 'styled-components'


const AddTodo = ({ dispatch }) => {
  let input



  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <Input ref={node => input = node} />
        <button >

          Add Todo
</button>
      </form>

    </div>
  )
}

const Input = styled.input`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 24px;
  height: 40px;
  width: 500px;
  margin-bottom: 16px;

  &::placeholder {
    color: #8d96a8;
  }
`

export default connect()(AddTodo)
