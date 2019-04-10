import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getChar} from '../actions'
class CharacterListView extends React.Component {


  componentDidMount() {
    this.props.getChar();
    // call our action
  }

  render() {
    console.log(this.props)
    if (this.props.isFetching) {
      <p>loading...</p>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    loading: state.charsReducer.loading
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  
    {getChar}
    /* action creators go here */
  
)(CharacterListView);
