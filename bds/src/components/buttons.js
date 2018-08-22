import React from 'react'
import Link from 'gatsby-link'

const Buttons = () => (

  <section id="buttons" className="bds-container bds-pad-b-xxl">
    <h2 className="bds-marg-b-sm bds-txt-bold" name="buttons">Buttons</h2>
    {/* base buttons */}
    <div className="use-chart text-align">
      <h4>Base Buttons</h4>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>Prefixes</th>
            <th>Function</th>
            <th className="bds-hide-sm-down">Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bds-btn-primary</td>
            <td>Primary button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn-primary">bds-btn-primary</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn-secondary</td>
            <td>Secondary button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn-secondary">bds-btn-secondary</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn-tertiary</td>
            <td>Tertiary button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn-tertiary">bds-btn-tertiary</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn-ghost</td>
            <td>Ghost button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn-ghost">bds-btn-ghost</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn-i-primary</td>
            <td>Inversed Primary Button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn-i-primary">bds-btn-i-primary</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn-i-secondary</td>
            <td>Inversed Secondary Button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn-i-secondary">bds-btn-i-secondary</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn-i-tertiary</td>
            <td>Inversed Tertiary Button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn-i-tertiary">bds-btn-i-tertiary</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn</td>
            <td>Base button</td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn">bds-btn</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/*/base buttons*/}


    <div className="use-chart text-align bds-marg-t-lg">
      <h4>Customizations</h4>
      <p>
        Custom buttons can be created by appending color and typography utility classes to bds-btn
      </p>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>Prefixes</th>
            <th>Example Classes</th>
            <th className="bds-hide-sm-down">Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bds-btn [VALUE]</td>
            <td>
              bds-btn <br/>
              bds-bg-orange <br/>
              bds-txt-white <br/>
              bds-hov-bg-white <br/>
              bds-hov-txt-orange<br/>
            </td>
            <td className="bds-hide-sm-down">
              <a href="#" className="bds-btn bds-bg-orange bds-txt-white bds-hov-bg-white bds-hov-txt-orange">Custom Button</a>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    {/*/custom buttons */}
    <div className="example">
        <h6 className="bds-marg-y-xs">Example:</h6>
        <div className="bds-marg-b-xs">
            <a className="bds-btn-primary" href="">Button 1</a>
            <a className="bds-btn bds-bg-black bds-txt-white bds-hov-bg-black bds-hov-txt-orange" href="">Button 2</a>
            <a className="bds-btn-ghost bds-bg-green-65 bds-border-green" href="">Button 3</a>
        </div>
        <script src="https://gist.github.com/xianc/ab987a2afcac90e81221da847bc4c433.js"></script>
    </div>



    <div className="use-chart text-align bds-marg-t-lg">
      <h4>Natural Width/Height</h4>
      <p>Sets the button size to its natural width & height</p>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>Prefixes</th>
            <th>Function</th>
            <th className="bds-hide-md-down">Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bds-btn-auto [BASE BUTTONS]</td>
            <td>
              Append base classes for this styling
            </td>
            <td className="bds-hide-md-down">
              <a href="#" className="bds-btn-auto bds-btn-primary">bds-btn-auto bds-btn-primary</a>
            </td>
          </tr>
          <tr>
            <td>bds-btn-auto [VALUES]</td>
            <td>
              Append color and typography utility classes
            </td>
            <td className="bds-hide-md-down">
              <a href="#" className="bds-btn-auto bds-bg-grey-15">bds-btn-auto bds-bg-grey-15</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </section>

)

export default Buttons
