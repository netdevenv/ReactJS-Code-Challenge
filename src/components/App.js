import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styled from 'styled-components'


const App = () => (
  <div>
    <Wrapper>
      <TodosWrapper>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </TodosWrapper>
    </Wrapper>


  </div>
)

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

export default App




