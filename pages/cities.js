import React from 'react'
import { Link } from 'react-router'
import { data } from '../data/citiesData'
class SingleCity extends React.Component{
  render() {
    return (
        <p key={this.props.city.id+3}>
          {this.props.city.name}
        </p>
    )
  }
}
export default class Cities extends React.Component{
  constructor(){
    super()
    this.state = {
      search: '',
      off: 'none'
    }
  }
  updateSearch(e){
    let search = e.target.value
    this.setState({search})

    if(e.target.value.length>1)
      this.setState({off: 'block'})
    else
      this.setState({off: 'none'})

    //console.log(e.target.value.length);
  }
  render() {
    const input = {
      fontSize: '150%',
      padding: 10,
      marginTop: 30,
      marginBottom: 30,
      width: 320
    }
    let filteredCities = data.filter(
    (city) => {
      return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    }

    );
    return (
      <div className="text-center">
        <input style={input} placeholder="Podaj miasto..." value={this.state.search}  onChange={this.updateSearch.bind(this)} />
        {
            filteredCities.map((x)=>{
              return(
              <Link style={{display: this.state.off}}  to={'/city/' + x.id} key={x.id+1}>
                <SingleCity city={x} key={x.id+2} />
              </Link>
               )
          })
        }
      </div>
    )
  }
}