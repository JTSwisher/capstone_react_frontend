import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoContainer from './TodoContainer'
import NewsContainer from './NewsContainer'

class HomeContainer extends Component {



    render() {
        console.log(this.props.user)
        return (
            <div>
                <TodoContainer />
                <NewsContainer />
            </div>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {user: state.user.current_user}
}

export default connect(mapStateToProps)(HomeContainer);