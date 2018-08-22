import React from 'react'
import Link from 'gatsby-link'
import ColorPalette from '../components/color-palette'
import Typography from '../components/typography'
import Buttons from '../components/buttons'
import Spacing from '../components/spacing'
import Utility from '../components/utility'
import Flexbox from '../components/flexbox'
import PageStructure from '../components/page-structure'

const IndexPage = () => (
  <div>
    <ColorPalette />
    <Typography />
    <Buttons />
    <Spacing />
    <Utility />
    <Flexbox />
    <PageStructure />
    {/*<Link to="/color-palette/">Go to page 2</Link>*/}
  </div>

)

export default IndexPage
