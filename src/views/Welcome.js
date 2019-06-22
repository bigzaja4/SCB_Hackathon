import React, { Component } from 'react'
import styled from 'styled-components'
import { Color } from '../utils'
import TouchCarousel,{clamp} from 'react-touch-carousel'
import NonPassiveTouchTarget from '../components/NonPassiveTouchTarget'

const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.6%, ${() => Color.secondary} 100%), ${() => Color.primary};
`


const cardSize = 300
const cardPadCount = 3
const carouselWidth = clamp(window.innerWidth, 0, 960)


export default class extends Component {
    state = {

    }

    carouselComponent(props) {
       const {cursor, carouselState, ...rest} = props
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (
    <NonPassiveTouchTarget className='carousel-container'>
      <NonPassiveTouchTarget
        className='carousel-track'
        style={{transform: `translate3d(${translateX}px, 0, 0)`}}
        {...rest}
      />
    </NonPassiveTouchTarget>
  )
    }


    renderCard = (index, modIndex, cursor) => {
        return (
            <div style={{ color: "red" }}>
                {index}
                <div>
                    <div className='carousel-title'>{'title'}</div>
                    <div className='carousel-text'>{'text'}</div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // MARK: Check Token
        console.log("****** welcome developmetn")
    }

    render() {
        return (
            <Container>
                <div className="Dashboard">
                    <div className="DHeader">
                        &nbsp;&nbsp;&nbsp;&nbsp;Dashboard
                    </div>
                </div>
                <TouchCarousel
                    component={this.carouselComponent}
                    cardCount={listOfData.length}
                    cardSize={375}
                    renderCard={this.renderCard}
                    loop
                    autoplay={3000}
                />
            </Container>
        )
    }

}

const listOfData = [
    {
        title: 'Card 1',
        background: '#0072bb',
        text: `react-touch-carousel only handles the trouble parts, i.e.
        - touch gestures parsing
        - scroll cursor rounding and modding
        - items padding and looping
        - auto playing`
    },
    {
        title: 'Card 2',
        background: '#ff4c3b',
        text: `It is left up to you to
        - decide the carousel structure
        - render each item in the carousel
        - style everything
        - add some fancy decorators like dots`
    },
    {
        title: 'Card 3',
        background: '#ffca18',
        text: `Install it by
        - npm install --save react-touch-carousel`
    },
    {
        title: 'Card 4',
        background: '#44c1c1',
        text: `See some example code in the '/examples' dir at GitHub. And you can run and play with the code after cloning it, by
        - npm install
        - npm run dev
        - open localhost:5000`
    },
    {
        title: 'Card 5',
        background: '#29c53c',
        text: 'react-touch-carousel is released under MIT license'
    }
]