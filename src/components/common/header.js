import React, { Component } from 'react'
import Img from 'gatsby-image'
import config from '../../utils/siteConfig'
import { Link} from 'gatsby'
import { Navigation } from '.'

export default class Header extends Component {

  render(){
    const {site, data, twitterUrl, facebookUrl, isHome, theme } = this.props
    // const theme = this.context
    // console.log(this.context)
    // console.log(theme)
    return( 
    <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
      <div className="container">
          <div className="site-mast">
              <div className="site-mast-left">
                  <Link to="/">
                      {site.logo ?
                          <img className="site-logo" src={site.logo} alt={site.title} />
                          : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                      }
                  </Link>
              </div>
              <div className="site-mast-right">
                  { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                  { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                  <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
              </div>
          </div>
          { isHome ?
              <div className="site-banner">
                  <h1 className="site-banner-title">{site.title}</h1>
                  <p className="site-banner-desc">{site.description}</p>
              </div> :
              null}
          <nav className="site-nav">
              <div className="site-nav-left">
                  {/* The navigation items as setup in Ghost */}
                  <Navigation data={site.navigation} navClass="site-nav-item" />
              </div>
              <div className="site-nav-right">
                  {/* <Link className="site-nav-button" to="/author/omar">Me</Link> */}
                  <button className='site-nav-button' onClick={theme.toggleDark} style={{background: 'none'}} >
                      {theme.dark ? <span>☀️</span> : <span>🌙</span>}
                  </button>
                  
              </div>
          </nav>
      </div>
    </header>
    )
  }
}


// export default Header