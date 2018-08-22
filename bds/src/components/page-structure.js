import React from 'react'
import Link from 'gatsby-link'
import page_structure from '../images/page-structure.png'

const PageStructure = () => (

 <section id="pageStructure" className="bds-container bds-pad-b-xxl">
  <h2 className="bds-marg-b-sm bds-txt-bold" name="pageStructure">Page Structure</h2>

    <div className="use-chart text-align">
      <h4>Breakpoints</h4>
      <table className="bds-marg-t-xxs">
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th>Pixel Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>xs</td>
            <td>
              up to 479px
            </td>
          </tr>
          <tr>
            <td>s</td>
            <td>
              480px - 767px
            </td>
          </tr>
          <tr>
            <td>md</td>
            <td>
              768px - 991px
            </td>
          </tr>
          <tr>
            <td>lg</td>
            <td>
              992px - 1199px
            </td>
          </tr>
          <tr>
            <td>xl</td>
            <td>
              1200px and larger
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bds-pad-t-sm bds-marg-t-lg">
        <h4>Hierarchy</h4>
       <img className="bds-marg-t-sm" src={page_structure}/>
    </div>


  </section>

)

export default PageStructure
