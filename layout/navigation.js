import React from 'react'
import { Link } from 'react-router'

export default class Navigation extends React.Component{
  render(){
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container-fluid">
            <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <p className="brand">ProjektD Web applikacja</p>
            <div id="navbar" className="nav-collapse collapse">
                <ul className="nav text-center">
                  <div className="row">
                    <div className="col-xs-4">
                    </div>
                    <div className="col-xs-4">
                      <Link to="/">
                        <li className="active btn-navbar">Start</li>
                      </Link>
                    </div>
                    <div className="col-xs-4">
                    </div>
                  </div>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
