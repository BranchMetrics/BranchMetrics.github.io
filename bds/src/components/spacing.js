import React from 'react'
import Link from 'gatsby-link'

const Buttons = () => (

  <section id="spacing" className="bds-container bds-pad-b-xxl">
    <h2 className="bds-marg-b-sm bds-txt-bold" name="spacing">Spacing</h2>


     <div className="spaces bds-flex bds-space-between bds-marg-t-md bds-txt-center">
        <div>
            *-xxs
            <br/>
            <div className="bds-space-xxs"> </div>
            <br/> ~8px
        </div>
        <div>
            *-xs
            <br/>
            <div className="bds-space-xs"> </div>
            <br/> ~16px
        </div>
        <div>
            *-sm
            <br/>
            <div className="bds-space-sm"> </div>
            <br/> ~24px
        </div>
        <div>
            *-md
            <br/>
            <div className="bds-space-md"> </div>
            <br/> ~32px
        </div>
        <div>
            *-lg
            <br/>
            <div className="bds-space-lg"> </div>
            <br/> ~48px
        </div>
        <div>
            *-xl
            <br/>
            <div className="bds-space-xl"> </div>
            <br/> ~67px
        </div>
        <div>
            *-xxl
            <br/>
            <div className="bds-space-xxl"> </div>
            <br/> ~88px
        </div>
        <div></div>
    </div>



    {/* margin */}
    <div className="use-chart text-align bds-marg-t-lg">
      <h4>Margin</h4>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>Prefixes</th>
            <th>Function</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bds-marg-all</td>
            <td>Adds margin to all sides</td>
            <td>
              <div className="bds-marg-all-xs bds-bg-green">
                bds-marg-all-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-marg-t</td>
            <td>Adds margin to the top</td>
            <td>
              <div className="bds-marg-t-xs bds-bg-green">
                bds-marg-t-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-marg-b</td>
            <td>Adds margin to the bottom</td>
            <td>
              <div className="bds-marg-b-xs bds-bg-green">
                bds-marg-b-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-marg-l</td>
            <td>Adds margin to the left</td>
            <td>
              <div className="bds-marg-l-xs bds-bg-green">
                bds-marg-l-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-marg-r</td>
            <td>Adds margin to the right</td>
            <td>
              <div className="bds-marg-r-xs bds-bg-green">
                bds-marg-r-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-marg-y</td>
            <td>Adds margin to the top and bottom</td>
            <td>
              <div className="bds-marg-y-xs bds-bg-green">
                bds-marg-y-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-marg-x</td>
            <td>Adds margin to the left and right</td>
            <td>
              <div className="bds-marg-x-xs bds-bg-green">
                bds-marg-x-xs
              </div>
            </td>
          </tr>

          <tr>
            <td>bds-marg-lg-[VALUE]</td>
            <td>Adds margin to the large breakpoint only</td>
            <td>
              <div className="bds-marg-lg-x-xs bds-bg-green">
                bds-marg-lg-x-xs
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    {/*/margin*/}

    {/* padding */}
    {/* margin */}
    <div className="use-chart text-align bds-marg-t-lg">
      <h4>Padding</h4>
      <table className="bds-marg-t-xs">
        <thead>
          <tr>
            <th>Prefixes</th>
            <th>Function</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bds-pad-all</td>
            <td>Adds padding to all sides</td>
            <td>
              <div className="bds-pad-all-xs bds-bg-green">
                bds-pad-all-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-pad-t</td>
            <td>Adds padding to the top</td>
            <td>
              <div className="bds-pad-t-xs bds-bg-green">
                bds-pad-t-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-pad-b</td>
            <td>Adds padding to the bottom</td>
            <td>
              <div className="bds-pad-b-xs bds-bg-green">
                bds-pad-b-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-pad-l</td>
            <td>Adds padding to the left</td>
            <td>
              <div className="bds-pad-l-xs bds-bg-green">
                bds-pad-l-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-pad-r</td>
            <td>Adds padding to the right</td>
            <td>
              <div className="bds-pad-r-xs bds-bg-green">
                bds-pad-r-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-pad-y</td>
            <td>Adds padding to the top and bottom</td>
            <td>
              <div className="bds-pad-y-xs bds-bg-green">
                bds-pad-y-xs
              </div>
            </td>
          </tr>
          <tr>
            <td>bds-pad-x</td>
            <td>Adds padding to the left and right</td>
            <td>
              <div className="bds-pad-x-xs bds-bg-green">
                bds-pad-x-xs
              </div>
            </td>
          </tr>

          <tr>
            <td>bds-pad-lg-[VALUE]</td>
            <td>Adds padding to the large breakpoint only</td>
            <td>
              <div className="bds-pad-lg-x-xs bds-bg-green">
                bds-pad-lg-x-xs
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    {/*/padding*/}


    {/* example */}
    <div className="example">
        <h6 className="bds-marg-y-xs">Example:</h6>
        <div className="bds-marg-b-xs">
            <div className="bds-bg-orange-65 bds-pad-y-md">Hello world</div>
            <div className="bds-bg-purple-65 bds-pad-all-xxs">Hello world</div>
            <div className="bds-bg-green bds-pad-l-xl">
                <div className="bds-bg-white bds-pad-b-md">
                    Hello world
                </div>
            </div>
        </div>
        <script src="https://gist.github.com/xianc/998a97c9c32c91b0ec7743a0e5b1589f.js"></script>
    </div>

  </section>


)

export default Buttons
