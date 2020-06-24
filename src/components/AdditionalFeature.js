import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions';

class AdditionalFeature extends React.Component {
  state = {
    newFeature: ''
  }


  render(){
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button onClick={() => {this.props.addFeature(this.props.feature)}} className="button">Add</button>
        {this.props.feature.name} (+{this.props.feature.price})
      </li>
    );
  }
};

const mapStateToProps = state => {
  return{
    
  }
}

const mapDispatchToProps = {
  addFeature
}

export default connect (mapStateToProps, mapDispatchToProps) (AdditionalFeature);
