import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoContainer from './TodoContainer'

class HomeContainer extends Component {

  

    render() {
        console.log(this.props.user)
        return (
            <div>
                <h1>HOME</h1>
                <TodoContainer />
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.current_user}
}

export default connect(mapStateToProps)(HomeContainer);