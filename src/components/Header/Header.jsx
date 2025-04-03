import React from 'react'
import "./Header.css";
const Header = () => {
  return (
    <header className="main-header">
    <div className="header-bg-wallpaper"></div>
    <div className="header-content">
        <div className="header-card">
            <div className="header-card-title-row">
                <div>
                    <h2 className="main-header-h2">0x</h2>
                </div>
                <h1 className="giant-h1">4C</h1>
                {/* <div>
                    <h3 className="header-h3">ow</h3>
                    <h3 className="header-h3">evel</h3>
                    <h3 className="header-h3">earning</h3>
                </div> */}
            </div>
            <div className="header-caption-row">
                <p>Low</p>
                <p>Level</p>
                <p>Learning</p>
            </div>
            <div className="header-blurb">
                <p><span className="desktop-tablet">Learn about</span> programming in the <span>C</span> language</p>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header