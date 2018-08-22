import React from 'react'
import Link from 'gatsby-link'

const ColorPalette = () => (
  <section id="colorPalette" className="bds-container bds-pad-b-xxl">
    <h2 className="bds-marg-b-sm bds-txt-bold" name="colorPalette">Color Palette</h2>
      {/*  color swatches */}
      <div className="swatch bds-txt-center">
        {/*  greys */}
        <div className="bds-row bds-marg-t-xs">
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-black bds-txt-white">
            *-black<br/>
            #000000
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-grey bds-txt-white">
            *-grey<br/> 
            #333E48
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-grey-85 bds-txt-white">
            *-grey-85<br/> 
            #4E5760
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-grey-65 bds-txt-white">
            *-grey-65<br/> 
            #757C83
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-grey-45 bds-txt-white">
            *-grey-45<br/> 
            #9EA2A7
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-grey-15 bds-txt-white">
            *-grey-15<br/> 
            #e3e2e2
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-grey-05 bds-txt-white">
            *-grey-05<br/> 
            #f0f0f0
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-white bds-txt-black">
            *-white<br/>
            #ffffff
          </div>
        </div>

        {/*  blues */}
        <div className="bds-row bds-marg-t-xs">
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-dark-blue bds-txt-white">
            *-dark-blue<br/> 
            #004876
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-dark-blue-85 bds-txt-white">   
            *-dark-blue-85<br/>
            #356189
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-blue bds-txt-white">
            *-blue<br/> 
            #0075C9
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-blue-85 bds-txt-white">
            *-blue-85<br/> 
            #0088D1
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-blue-65 bds-txt-white">
            *-blue-65<br/> 
            #4DA3DC
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-blue-45 bds-txt-white">
            *-blue-45<br/> 
            #8DBEE7
          </div>
        </div>

        {/*  purple */}
        <div className="bds-row bds-marg-t-xs">
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-purple bds-txt-white">
            *-purple<br/>
            #8547ad
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-purple-85 bds-txt-white">
            *-purple-85<br/>
            #9862b9
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-purple-65 bds-txt-white">
            *-purple-65<br/>
            #b388cb
          </div>
        </div>

        {/*  reds */}
        <div className="bds-row bds-marg-t-xs">
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-red bds-txt-white">
            *-red<br/> 
            #F42534
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-red-85 bds-txt-white">
            *-red-85<br/> 
            #FC564F
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-red-65 bds-txt-white">
            *-red-65<br/> 
            #ff988a
          </div>
        </div>

        {/*  orange */}
        <div className="bds-row bds-marg-t-xs">
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-orange bds-txt-white">
            *-orange<br/> 
            #ff9e16
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-orange-85 bds-txt-white">
            *-orange-85<br/> 
            #ffad45
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-orange-65 bds-txt-white">
            *-orange-65<br/> 
            #ffc072
          </div>
        </div>

        {/*  greens */}
        <div className="bds-row bds-marg-t-xs">
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-green bds-txt-white">
            *-green<br/> 
            #00bd70
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-green-85 bds-txt-white">
            *-green-85<br/> 
            #00c884
          </div>
          <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-green-65 bds-txt-white">
            *-green-65<br/> 
            #5fd6a0
          </div>
        </div>

      </div>
      {/* /color swatches*/}



      <div className="logo-colors bds-pad-t-lg">
        <h4 name="logoColor">Logo Color</h4>

        <div className="swatch">
          <div className="bds-row bds-txt-center">
            <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-grey bds-txt-white">
              *-grey<br/> 
              #333E48
            </div>
            <div className="bds-col-6 bds-col-lg-3 bds-pad-sm bds-bg-blue-65 bds-txt-white">
              *-blue-65<br/> 
              #4DA3DC
            </div>
          </div>

        </div>
      </div>



      {/* use chart */}
      <div className="use-chart">
        {/* background color */}
        <div className="bds-marg-t-lg">
          <h4>Background color</h4>
            <table className="bds-marg-t-xs">
              <thead>
                <tr>
                  <th>Prefix</th>
                  <th>Function</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>bds-bg</td>
                  <td>sets background color</td>
                  <td>
                    <div className="bds-bg-green">bds-bg-green</div>
                  </td>
                </tr>
                <tr>
                  <td>bds-bg-lg</td>
                  <td>
                    changes the large breakpoint background color
                  </td>
                  <td>
                    <div className="bds-bg-lg-purple">bds-bg-lg-purple</div>
                  </td>
                </tr>
                <tr>
                  <td>bds-hov-bg</td>
                  <td>
                    changes the background color when hovered
                  </td>
                  <td>
                    <div className="bds-hov-bg-orange">bds-hov-bg-orange</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* text color */}
          <div className="bds-marg-t-lg">
            <h4>Text color</h4>
            <table className="bds-marg-t-xs">
              <thead>
                <tr>
                  <th>Prefix</th>
                  <th>Function</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>bds-txt</td>
                  <td>
                    sets the text color
                  </td>
                  <td>
                    <div className="bds-txt-blue">bds-txt-blue</div>
                  </td>
                </tr>
                <tr>
                  <td>bds-hov-txt</td>
                  <td>
                    changes the text color when hovered
                  </td>
                  <td>
                    <div className="bds-hov-txt-red">bds-hov-txt-red</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* border color */}
          <div className="bds-marg-t-lg">
            <h4>Border color</h4>
            <table className="bds-marg-t-xs">
              <thead>
                <tr>
                  <th>Prefix</th>
                  <th>Function</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>bds-border</td>
                  <td>
                    sets a colored 1px border
                  </td>
                  <td>
                    <div className="bds-border-green">bds-border-green</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>{/*/end use chart */}

        {/* example */}
        <div className="example bds-marg-t-lg">
          <h4 className="bds-marg-y-xs">Examples:</h4>
          <div className="bds-marg-b-xs">
              <div className="bds-bg-dark-blue bds-txt-white">Hello world</div>
              <div className="bds-bg-green-65 bds-hov-bg-orange">Hello world</div>
              <div className="bds-bg-white bds-border-red bds-hov-txt-red">Hello world</div>
          </div>
          <script src="https://gist.github.com/xianc/a2e9ad1cf7d1c593667ab8595502dcfa.js"></script>
        </div>

  </section>
)

export default ColorPalette
