import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated,useSpring, useSprings,interpolate } from 'react-spring'
import './index.css'

function Stack({ image, background }) {
  const [open, setOpen] = useState(false)
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 })
  const cards = useSprings(5, [0, 1, 2, 3, 4].map(i => ({ opacity: 0.2 + i / 5, z: open ? (i / 5) * 80 : 0 })))
  return (
    <div class="container" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity,
            background,
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            )
          }}>
          {index === 4 && <animated.img style={{ transform: f.interpolate([0, 1], ['scale(0.7)', 'scale(1)']) }} src={image} />}
        </animated.div>
      ))}
    </div>
  )
}

const pages = [
  ({ style }) => <animated.div name="div1" style={{ ...style, background: 'lightblue' }}>
  Want to Get an Awesome Resume?<br/>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>Just Follow 3 Steps</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>
  <div class="main">
  <Stack image="https://i.imgur.com/uSuYQO3.jpg" background="#ee7074" />
  <Stack image="https://i.imgur.com/GUtgZut.jpg" background="#f7f295" />
  <Stack image="https://i.imgur.com/3XFrSdZ.jpg" background="#52649e" />
</div>
  </animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(50%,50%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div>
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
    <div className="dotstyle dotstyle-fillup">
        <ul>
          <li className="current"><a href="#">Home</a></li>
          <li><a href="#div1">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      </div>
  )
}


