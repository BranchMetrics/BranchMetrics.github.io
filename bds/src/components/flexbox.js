import React from 'react'
import Link from 'gatsby-link'

const Flexbox = () => (

      <section id="flexbox" className="bds-container bds-pad-b-xxl">
        <h2 className="bds-marg-b-sm bds-txt-bold" name="flexbox">Flexbox</h2>
        <p>To use flexbox, you <strong>must</strong> wrap the container with a flex display </p>
        
        {/* flex display */}
        <div className="use-chart text-align bds-marg-t-lg">
          <h4>Flex Display</h4>
          <table className="bds-marg-t-xxs">
            <thead>
              <tr>
                <th>Prefixes</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bds-flex</td>
                <td>
                  Makes flex available. Container is displayed like a block. 
                </td>
              </tr>
              <tr>
                <td>bds-inline-flex</td>
                <td>
                  Makes flex available. Container is displayed like a inline-block. 
                </td>
              </tr>
            </tbody>
          </table>
        </div>


          <div className="use-chart text-align bds-marg-t-lg">
              <h4>Flex Centering</h4>
              <table className="bds-marg-t-xxs">
                <thead>
                  <tr>
                    <th>Prefixes</th>
                    <th>Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bds-xy-center</td>
                    <td>
                      Vertically and horizontally centered
                    </td>
                  </tr>
                  <tr>
                    <td>bds-y-center</td>
                    <td>
                      Vetically centered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>



          <div className="bds-row bds-marg-t-md">
            <div className="bds-col-6 bds-bg-red-65 bds-flex bds-y-center" style={{ height: '200px' }}>
                bds-flex bds-y-center
            </div>
            <div className="bds-col-6 bds-bg-purple-65 bds-flex bds-xy-center" style={{ height: '200px' }}>
                bds-flex bds-xy-center
            </div>
          </div>

          {/* flex center example*/}
          <div className="example">
              <h6 className="bds-marg-y-xs">Example</h6>
              <script src="https://gist.github.com/xianc/0cb1e9303beaa70608a41ec6e44eb109.js"></script>
              *note: inline style, height is only for example purposes. Please avoid inline styles in your markup.
          </div>



          <div className="use-chart text-align bds-marg-t-lg">
              <h4>Flex Order</h4>
              <p className="bds-marg-t-xs bds-pad-b-md">
                - Flex order classes should be <b>children</b> of bds-flex.<br/> 
                - These flex order classes <b>impacts content on the larger breakpoint and larger.</b><br/> 
                - These classes changes the order in which your content shows up, even if the markup setup in - HTML has it in a different order<br/> 
                - <b>Always set up your content in mobile hierarchy</b>, then use css and the order classes to change desktop.
              </p>

              <table className="bds-marg-t-xxs">
                <thead>
                  <tr>
                    <th>Prefixes</th>
                    <th>Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bds-order-1</td>
                    <td>
                      Sets the content to display first on the large breakpoint
                    </td>
                  </tr>
                  <tr>
                    <td>bds-order-[2-5]</td>
                    <td>
                      Sets the content to displa [2nd - 5th] on the large breakpoint
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div className="bds-marg-y-md bds bds-marg-t-xs">
                <div className="bds-b3"><i>re-size browser or use emulator to see how the order changes</i></div>
                <div className="bds-row bds-flex bds-marg-y-xxs">
                    <div className="bds-col-6 bds-order-2 bds-bg-red-65 bds-order-2">
                        1st content
                    </div>
                    <div className="bds-col-6 bds-order-1 bds-bg-orange-65 bds-order-1">
                        2nd content
                    </div>
                </div>
            </div>



            <div className="use-chart text-align bds-marg-t-lg">
              <h4>Flex Spacing</h4>
              <table className="bds-marg-t-xxs">
                <thead>
                  <tr>
                    <th>Prefixes</th>
                    <th>Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bds-space-between</td>
                    <td>
                      Sets even spacing between elements
                    </td>
                  </tr>
                  <tr>
                    <td>bds-space-around</td>
                    <td>
                      Sets even spacing around elements 
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            {/* flex spacing example */}
            <div className="bds-bg-grey-45 bds-pad-y-sm bds-marg-t-xs">
                <div className="bds-flex bds-space-between">
                    <div className="bds-pad-all-xs bds-bg-orange-65">bds-flex bds-space-between</div>
                    <div className="bds-pad-all-xs bds-bg-orange-65">bds-flex bds-space-between</div>
                    <div className="bds-pad-all-xs bds-bg-orange-65">bds-flex bds-space-between</div>
                </div>

                <div className="bds-flex bds-space-around bds-marg-t-sm">
                    <div className="bds-pad-all-xs bds-bg-green-65">bds-flex bds-space-around</div>
                    <div className="bds-pad-all-xs bds-bg-green-65">bds-flex bds-space-around</div>
                    <div className="bds-pad-all-xs bds-bg-green-65">bds-flex bds-space-around</div>
                </div>
            </div>

            <div className="example">
                <h6 className="bds-marg-y-xs">Example</h6>
                <script src="https://gist.github.com/xianc/a5a7268c488a8eac6352df9b7c58ecce.js"></script>
            </div>
            {/*/flex spacing */}


      </section>

)

export default Flexbox
