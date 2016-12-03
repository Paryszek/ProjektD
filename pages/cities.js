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
  }
  render() {
    const h2Style = {
      fontSize: '200%',
      paddingTop: 10,
      paddingBottom: 20,
    }
    let filteredCities = data.filter(
    (city) => {
      return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    }

    );
    return (
      <div className="text-center">
        <h1 style={h2Style}> Gdzie te wszystkie dentysty som?! </h1>
        <input style={{marginBottom: 30,}} placeholder="Szukaj..." value={this.state.search}  onChange={this.updateSearch.bind(this)} />
        {
            filteredCities.map((x)=>{
              return(
              <Link to={'/city/' + x.id} key={x.id+1}>
                <SingleCity city={x} key={x.id+2} />
              </Link>
               )
          })
        }
      </div>
    )
  }
}