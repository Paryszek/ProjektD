import React from 'react'
import Navigation from '../layout/navigation'
import Footer from '../layout/footer'
export default class Layout extends React.Component{
  render() {
    return (
      <div>
        <Navigation />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
