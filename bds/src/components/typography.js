import React from 'react'
import Link from 'gatsby-link'

const Typography = () => (
 <section id="typography" className="bds-container bds-pad-b-xxl">
    <h2 className="bds-marg-b-sm bds-txt-bold" name="typography">Typography</h2>

    <div className="use-chart typography-swap-weight">
      <h4>Font size</h4>
      <p className="bds-marg-t-xs">
        There are a max of 3 ways to set font size:<br/> 
        1. <b>Tags</b>: h1 to h6<br/> 
        2. <b>Class represention of tags</b>: bds-h1 to bds-h6, bds-b1 to bds-b4, and bds-l1<br/> 
        3. <b>Class represention of relative pixel size</b>: bds-txt-44 to bds-txt-11 (see chart below)
      </p>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>
              Class<br/>
              <span className="bds-l1 bds-txt-light">Use one of the following:</span>
            </th>
            <th>Pixels Approx</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              h1<br/>
              bds-h1<br/>
              bds-txt-44
            </td>
            <td>44px</td>
            <td className="swap-weight">
              <h1>Heading h1</h1>
            </td>
          </tr>
          <tr>
            <td>
              h2<br/>
              bds-h2<br/>
              bds-txt-40
            </td>
            <td>40px</td>
            <td className="swap-weight">
              <h2>Heading h2</h2>
            </td>
          </tr>
          <tr>
            <td>
              h3<br/>
              bds-h3<br/>
              bds-txt-34
            </td>
            <td>34px</td>
            <td className="swap-weight">
              <h3>Heading h3</h3>
            </td>
          </tr>
          <tr>
            <td>
              h4<br/>
              bds-h4<br/>
              bds-txt-24
            </td>
            <td>24px</td>
            <td className="swap-weight">
              <h4>Heading h4</h4>
            </td>
          </tr>
          <tr>
            <td>
              h5<br/>
              bds-h5<br/>
              bds-txt-22
            </td>
            <td>22px</td>
            <td className="swap-weight">
              <h5>Heading h5</h5>
            </td>
          </tr>
          <tr>
            <td>
              h6<br/>
              bds-h6<br/>
              bds-txt-20
            </td>
            <td>20px</td>
            <td className="swap-weight">
              <h6>Heading h6</h6>
            </td>
          </tr>
          <tr>
            <td>
              bds-b1<br/>
              bds-txt-18
            </td>
            <td>18px</td>
            <td className="swap-weight">
              <h6 className="bds-b1">Body b1</h6>
            </td>
          </tr>
          <tr>
            <td>
              bds-b2<br/>
              bds-txt-16
            </td>
            <td>16px</td>
            <td className="swap-weight">
              <h6 className="bds-b2">Body b2</h6>
            </td>
          </tr>
          <tr>
            <td>
              bds-b3<br/>
              bds-txt-14
            </td>
            <td>14px</td>
            <td className="swap-weight">
              <h6 className="bds-b3">Body b3</h6>
            </td>
          </tr>
          <tr>
            <td>
              bds-b4<br/>
              bds-txt-12
            </td>
            <td>12px</td>
            <td className="swap-weight">
              <h6 className="bds-b4">Body b4</h6>
            </td>
          </tr>
          <tr>
            <td>
              bds-l1<br/>
              bds-txt-11
            </td>
            <td>11px</td>
            <td className="swap-weight">
              <h6 className="bds-b4">Legal l1</h6>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <div className="use-chart typography-weight bds-marg-t-lg">
      <h4>Font weight</h4>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>Class</th>
            <th>Weight</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              bds-txt-light
            </td>
            <td>Light</td>
            <td>
              <h4 className="bds-txt-light">bds-txt-light</h4>
            </td>
          </tr>
          <tr>
            <td>
              bds-txt-regular
            </td>
            <td>Regular</td>
            <td>
              <h4 className="bds-txt-regular">bds-txt-regular</h4>
            </td>
          </tr>
          <tr>
            <td>
              bds-txt-semi-bold
            </td>
            <td>Semi Bold</td>
            <td>
              <h4 className="bds-txt-semi-bold">bds-txt-semi-bold</h4>
            </td>
          </tr>
          <tr>
            <td>
              bds-txt-bold
            </td>
            <td>Bold</td>
            <td>
              <h4 className="bds-txt-bold">bds-txt-bold</h4>
            </td>
          </tr>
          {/* <tr>
            <td>
              bds-txt-lg-[VALUE]
            </td>
            <td>
              <h4 className="bds-txt-lg-bold">bds-txt-lg-bold</h4>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
    {/*/txt weight chart */}

    <div className="use-chart text-align bds-marg-t-lg">
      <h4>Text align</h4>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>Class</th>
            <th>Function</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bds-txt-left</td>
            <td>Left align text</td>
            <td className="bds-txt-left">
              left
            </td>
          </tr>
          <tr>
            <td>bds-txt-right</td>
            <td>Right align text</td>
            <td className="bds-txt-right">
              right
            </td>
          </tr>
          <tr>
            <td>bds-txt-center</td>
            <td>Center text</td>
            <td className="bds-txt-center">
              center
            </td>
          </tr>
          <tr>
            <td>bds-txt-md-[VALUE]</td>
            <td>Set text alignment on medium breakpoint</td>
            <td className="bds-txt-md-center">
              bds-txt-md-center
            </td>
          </tr>
          <tr>
            <td>bds-txt-lg-[VALUE]</td>
            <td>Set text alignment on large breakpoint</td>
            <td className="bds-txt-lg-center">
              bds-txt-lg-center
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/*/ text align chart */}

    {/* example */}
    <div className="example bds-marg-t-lg">
      <h4 className="bds-marg-y-xs">Examples:</h4>
        <div className="bds-marg-b-xs">
            <h5>Hello world 1</h5>
            <div className="bds-h4">Hello world 2</div>
            <div className="bds-txt-bold bds-b1">Hello world 3</div>
            <span className="bds-txt-light bds-txt-16">Hello world 4</span>
        </div>
        <script src="https://gist.github.com/xianc/4baa6045d1e3d805d502d209b505eb5b.js"></script>
    </div>
  </section>
)

export default Typography
