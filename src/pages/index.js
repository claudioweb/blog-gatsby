import React from 'react'
import Link from 'gatsby-link'

import data from '../general/data.json';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <img src={ data.logo } />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/posts/">Go to Posts</Link>
  </div>
)

export default IndexPage
