import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpeg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
        <div>Hi, I'm Maria - a frontend dev from <span role="img" aria-label="Bulgaria">🇧🇬</span> living in <span role="img" aria-label="USA">🇺🇸</span></div>{'\n'} 
        Currently focused on learning backend development, reading comic books and drinking tea.{' '}
          <a href="https://twitter.com/mbazhlekova">
            You can follow me on Twitter>
          </a>
          {' '}
          <a href="https://github.com/mbazhlekova">
            or GitHub>
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
