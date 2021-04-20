import {useState, useEffect} from 'react'
import Link from 'next/Link'
import {API} from 'aws-amplify'
import {listTodos} from '../graphql/queries'
import postcss from 'postcss'
import styled from "styled-components"

export default function Landing() {
  const [todos,setTodos] = useState([])
  useEffect(() => {
    fetchTodos()
  },[])
  async function fetchTodos() {
    const postData = await API.graphql({
      query: listTodos
    })
    setTodos(postData.data.listTodos.items)
  }
  return (
    <MainDiv>
      <h1 className='text3xl font-semibold tracking-wide mt-6 mb-2'>Posts</h1>
      {
        todos.map((todo, index) => (
        <Link key={index} href={'/todos/${todo.id}'}>
          <div className='cursor-pointer border-b border-grey-300 mt-8 pb-4'>
            <h1 className='text-x1 font-semibold'>{todo.name}</h1>
          </div>
        </Link>)
        )
      }
    </MainDiv>
  )
}

const MainDiv = styled.div`
  text-align: center;
  font-size: 2rem;
`
