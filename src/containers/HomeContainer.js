import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoContainer from './TodoContainer'
import NewsContainer from './NewsContainer'
import WeatherContainer from './WeatherContainer'

class HomeContainer extends Component {



    render() {
        console.log(this.props.user)
        return (
            <div style={{padding: "1%"}}>
                <TodoContainer />
                <NewsContainer />
                <WeatherContainer />
            </div>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {user: state.user.current_user}
}

export default connect(mapStateToProps)(HomeContainer);