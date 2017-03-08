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
    const checkBoxText = {
      
      paddingLeft: 5,
      fontSize: '20%',
      width:'50%',
      float:'left',
    }
    const checkBoxFilter = {
      float:'left',
    }
    return(<div>
      <h1 style={h2Style} className="text-center">
        {this.state.title}
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="checkbox">
                <input type="checkbox" className={checkBoxFilter} name="filter" value="higienaIProfilaktyka"></input><div className={checkBoxText}>Higiena i profilaktyka</div>
              </div> 
              <div className="checkbox"> 
                <input type="checkbox" className={checkBoxFilter} name="filter" value="fluoryzacja"></input><div className={checkBoxText}>Fluoryzacja</div>
              </div>
              <div className="checkbox">
                <input type="checkbox" className={checkBoxFilter} name="filter" value="stomatologiaEstetyczna"></input><div className={checkBoxText}>Stomatologia estetyczna</div>
              </div>
              <div className="checkbox">  
                <input type="checkbox" className={checkBoxFilter} name="filter" value="stomatologiaZachowawcza"></input><div className={checkBoxText}>Stomatologia zachowawcza</div>
              </div>
              <div className="checkbox"> 
                <input type="checkbox" className={checkBoxFilter} name="filter" value="endodoncja"></input><div className={checkBoxText}>Endodoncja</div>
              </div>
              <div className="checkbox"> 
                <input type="checkbox" className={checkBoxFilter} name="filter" value="pndodoncja"></input><div className={checkBoxText}>Pndodoncja</div>
              </div>
              <div className="checkbox"> 
                <input type="checkbox" className={checkBoxFilter} name="filter" value="chirurgia"></input><div className={checkBoxText}>Chirurgia</div>
              </div>
              <div className="checkbox">  
                <input type="checkbox" className={checkBoxFilter} name="filter" value="implantologia"></input><div className={checkBoxText}>Implantologia</div>
              </div>
              <div className="checkbox"> 
                <input type="checkbox" className={checkBoxFilter} name="filter" value="ortodoncja"></input><div className={checkBoxText}>Ortodoncja</div>
              </div>
            </div>
            <div className="col-md-2"></div>
        </div>
      </div>
    </div>
    )
  }
}
