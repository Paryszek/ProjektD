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
      <p className="text-center"> Dodać liste typków z przekierowaniami na ich prywatne strony</p>
    </div>
    )
  }
}
