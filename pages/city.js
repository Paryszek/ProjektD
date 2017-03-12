import React from 'react'
import { data } from '../data/citiesData'
export default class City extends React.Component{
  constructor(){
    super()
    this.state={
      title: '',
    }
  }
  componentDidMount(){
    console.log(this.props)
    var title = data[this.props.params.id].name
    this.setState({title: title})
  }
  buttonclick(){
    this.refs.button.classList.toggle('active');
  }
  render(){
    const h2Style = {
      fontSize: '300%',
      paddingTop: 30,
      paddingBottom: 10,
    }
    return(<div>
      <h1 style={h2Style} className="text-center">
        {this.state.title}
      </h1>
      
        <div className="row">
          <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="btn-group" className="text-center" data-toggle="buttons">
                  <button className="btn btn-warning active" ref="button" onClick={this.buttonclick.bind(this)}>Higiena i profilaktyka</button>
                  <button className="btn btn-primary" ref="button2" onClick={this.buttonclick.bind(this)}>Fluoryzacja</button>
                  <button className="btn btn-warning">Stomatologia estetyczna</button>
              </div>
              <div className="btn-group" className="text-center" data-toggle="buttons">
                  <button className="btn btn-primary">Stomatologia zachowawcza</button>
                  <button className="btn btn-warning">Endodoncja</button>
                  <button className="btn btn-primary">Pedodoncja</button>
              </div>
              <div className="btn-group" className="text-center" data-toggle="buttons">
                  <button className="btn btn-warning">Chirurgia</button>
                  <button className="btn btn-primary">Implantologia</button>
                  <button className="btn btn-warning">Ortodoncja</button>
              </div>
            </div>
            <div className="col-md-6"></div>
        </div>
      
    </div>
    )
  }
}
