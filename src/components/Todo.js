import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Todo = ({ onClick, completed, text }) => (
  <Wrapper onClick={onClick}>
    <code>
      [{completed ? 'x' : '  '}] <Text completed={completed}>{text}</Text>
    </code>
  </Wrapper>

)

const Wrapper = styled.p`
  font-size: 24px;
  cursor: pointer;
`

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
