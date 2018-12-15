import React, { Component } from "react";
import MoreOutput from "../../components/Main/More/MoreOutput";

class More extends Component {

  state = {
    id: this.props.match.params.id
  }

  render() {
    console.log(this.state.id);
    return (
      <>
        <MoreOutput id={this.state.id} />
      </>
    )
  }
}

export default More;