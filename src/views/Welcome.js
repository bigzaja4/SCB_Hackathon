import React, { Component } from 'react'
import styled from 'styled-components'
import { Color } from '../utils'
import TouchCarousel from 'react-touch-carousel'

const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.6%, ${() => Color.secondary} 100%), ${() => Color.primary};
`

const listOfData = [
    {}
  ]

export default class extends Component {
  state = {

  }

CarouselContainer =  (props) => {
    // render the carousel structure
  }
  
renderCard  = (index, modIndex, cursor) => {
    const item = listOfData[modIndex]
    // render the item
  }
  
  componentDidMount() {
    // MARK: Check Token
    console.log("****** welcome developmetn")
  }

  render() {
    return (
      <Container>
          <div>
              welcome page
          </div>
      </Container>
    )
  }
}