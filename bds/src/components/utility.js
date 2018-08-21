import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";
import hideShow_mob from '../images/hide-show-chart2.png'
import hideShow_desk from '../images/hide-show-chart.png'

const Utility = () => (
  <div class="utilities">
      <section id="hideshow" className="bds-container bds-pad-b-xxl">
        <h2 className="bds-marg-b-sm bds-txt-bold" name="hideshow">Hide Show</h2>

        <div className="bds-hide-lg-up">
          <img src={hideShow_mob}/>
          <br/>

          <img src={hideShow_desk}/>
        </div>

        <div className="use-chart text-align bds-hide-md-down">
          <h4>Hide</h4>
          <table className="bds-marg-t-xs">
            <thead>
              <tr>
                <th>Class</th>
                <th>&#60;= sm</th>
                <th>sm - md</th>
                <th>md - lg</th>
                <th>lg - xl</th>
                <th>&#62;= xl</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bds-hide</td>
                <td> 
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  <div className="bds-hide bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-sm-up</td>
                <td>
                  visible
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  <div className="bds-hide-sm-up bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-md-up</td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  <div className="bds-hide-md-up bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-lg-up</td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  <div className="bds-hide-lg-up bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-xl-up</td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                </td>
                <td>
                  <div className="bds-hide-xl-up bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-sm-down</td>
                <td>
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  <div className="bds-hide-sm-down bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-md-down</td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  <div className="bds-hide-md-down bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-lg-down</td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  visible
                </td>
                <td>
                  visible
                </td>
                <td>
                  <div className="bds-hide-lg-down bds-bg-green">visible</div>
                </td>
              </tr>
              <tr>
                <td>bds-hide-xl-down</td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                  visible
                </td>
                <td>
                  <div className="bds-hide-xl-down bds-bg-green">visible</div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>


        <div className="use-chart text-align bds-marg-t-lg bds-hide-md-down">
          <h4>Display</h4>
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
                <td>bds-block</td>
                <td>
                  Set display to block
                </td>
                <td>
                  <a href="#" className="bds-block bds-bg-green">bds-block</a>
                </td>
              </tr>
              <tr>
                <td>bds-block-[sm/md/lg/xl]</td>
                <td>
                  Set display to block at >= [sm/md/lg/xl] bkpt
                </td>
                <td>
                  <a href="#" className="bds-block-sm bds-bg-green">bds-block-sm</a>
                </td>
              </tr>
              <tr>
                <td>bds-inline-block</td>
                <td>
                  Set display to inline-block
                </td>
                <td>
                  <a href="#" className="bds-inline-block bds-bg-green">bds-inline-block</a>
                </td>
              </tr>
              <tr>
                <td>bds-inline-block-[sm/md/lg/xl]</td>
                <td>
                  Set display to inline-block at >= [sm/md/lg/xl] bkpt
                </td>
                <td>
                  <a href="#" className="bds-inline-block-sm bds-bg-green">bds-inline-block-sm</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*/hiding and showing example */}
        <div className="example">
            <h6 className="bds-marg-y-xs">Example:</h6>
            <div className="bds-b3"><i>re-size browser or use emulator to see examples</i></div>
            <div className="bds-marg-b-xs">
                How do you show a message on mobile but hide on desktop?
                <br/>
                <u>Solution</u>: className="bds-hide-lg"
                <br/>
                <br/>
                <div className="bds-border-grey-65 bds-pad-all-xxs">
                    <div className="bds-hide-lg bds-bg-red-65 bds-marg-all-sm">
                        This is hidden on the large breakpoint
                    </div>
                </div>

                <br/> How do you hide a message on mobile, but show on desktop?
                <br/>
                <u>Solution 1</u>: className="bds-hide bds-block-lg"
                <br/>
                <br/>
                <div className="bds-border-grey-65 bds-pad-all-xs">
                    <div className="bds-hide bds-block-lg bds-bg-purple-65 bds-marg-all-sm">
                        This is showing on the large breakpoint
                    </div>
                </div>
                <br/>
                <u>Solution 2</u>: className="bds-hide-lg-down"
                <br/>
                <div className="bds-border-grey-65 bds-pad-all-xs">
                    <div className="bds-hide-lg-down bds-bg-purple-65 bds-marg-all-sm">
                        This is showing on the large breakpoint
                    </div>
                </div>
            </div>
            <script src="https://gist.github.com/xianc/c450892c847fe13d2030ffea9bf13194.js"></script>
        </div>

      </section>


      <section id="utilities" className="bds-container bds-pad-b-xxl">
        <h2 className="bds-marg-b-sm bds-txt-bold" name="utilities">Other Utilities</h2>

        {/* text align */}
        <div className="use-chart text-align">
          <h4>Text Alignment</h4>
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
                <td>bds-txt-left</td>
                <td>
                  Text align left
                </td>
                <td>
                  <div className="bds-txt-left">bds-txt-left</div>
                </td>
              </tr>
              <tr>
                <td>bds-txt-right</td>
                <td>
                  Text align right
                </td>
                <td>
                  <div className="bds-txt-right">bds-txt-left</div>
                </td>
              </tr>
              <tr>
                <td>bds-txt-lg-[left/right/center]</td>
                <td>
                  Set text align for >= lg breakpoint
                </td>
                <td>
                  <div className="bds-txt-lg-center">bds-txt-lg-center</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* positioning */}
        <div className="use-chart text-align bds-marg-t-lg">
          <h4>Positioning</h4>
          <table className="bds-marg-t-xs">
            <thead>
              <tr>
                <th>Prefixes</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>relative,<br/>bds-relative</td>
                <td>
                  position relative
                </td>
              </tr>
              <tr>
                <td>bds-fixed</td>
                <td>
                  position fixed
                </td>
              </tr>
              <tr>
                <td>absolute,<br/>bds-absolute</td>
                <td>
                  position absolute
                </td>
              </tr>
              <tr>
                <td>bds-tl-0</td>
                <td>
                  top: 0<br/>
                  left: 0
                </td>
              </tr>
              <tr>
                <td>bds-marg-x-auto</td>
                <td>
                  margin-left: auto<br/>
                  margin-right: auto
                </td>
              </tr>
              <tr>
                <td>bds-x-center</td>
                <td>
                  left: 50%<br/>
                  transform: translateX(-50%)
                </td>
              </tr>
              <tr>
                <td>bds-y-center</td>
                <td>
                  top: 50%;<br/>
                  transform: translateY(-50%);
                </td>
              </tr>
              <tr>
                <td>bds-xy-center</td>
                <td>
                  top: 50%;<br/>
                  left: 50%;<br/>
                  transform: translateX(-50%) translateY(-50%);
                </td>
              </tr>
              <tr>
                <td>bds-width-100</td>
                <td>
                  width: 100%
                </td>
              </tr>
              <tr>
                <td>bds-height-100</td>
                <td>
                  height: 100%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* floats */}
        <div className="use-chart text-align bds-marg-t-lg">
          <h4>Floats</h4>
          <table className="bds-marg-t-xs">
            <thead>
              <tr>
                <th>Prefixes</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bds-left</td>
                <td>
                  float left
                </td>
              </tr>
              <tr>
                <td>bds-right</td>
                <td>
                  float right
                </td>
              </tr>
              <tr>
                <td>clearfix</td>
                <td>
                  clear all floats
                </td>
              </tr>
            </tbody>
          </table>
        </div>

         {/* z-index */}
        <div className="use-chart text-align bds-marg-t-lg">
          <h4>z-index</h4>
          <table className="bds-marg-t-xs">
            <thead>
              <tr>
                <th>Prefixes</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bds-z-index-0</td>
                <td>
                  z-index: 0
                </td>
              </tr>
              <tr>
                <td>bds-z-index-[1-5]</td>
                <td>
                  z-index: 1<br/>
                  ...<br/>
                  z-index: 5
                </td>
              </tr>
              <tr>
                <td>bds-z-index-10</td>
                <td>
                  z-index: 10
                </td>
              </tr>
              <tr>
                <td>bds-z-index-100</td>
                <td>
                  z-index: 100
                </td>
              </tr>
              <tr>
                <td>bds-z-index-500</td>
                <td>
                  z-index: 500
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>
  </div>

)

export default Utility