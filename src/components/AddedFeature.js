import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions'

class AddedFeature extends React.Component {

  render(){
    return (
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button onClick={ () => {this.props.removeFeature(this.props.feature)}} className="button">X</button>
        {this.props.feature.name}
      </li>
    );
  }
};

const mapStateToProps = state => {
  return{
    
  }
}
const mapDispatchToProps = {
  removeFeature
}
export default connect (mapStateToProps,mapDispatchToProps) (AddedFeature);
