import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSOUsers } from '../../actions/stack-overflow';
import MainComponent from './MainComponent';

class Main extends Component{

    componentDidMount(){
        this.props.getUsers();
    }

    render()
    {
        let users = undefined; 

        if(this.props.stackOverflowUsers.data.items){
            users = this.props.stackOverflowUsers.data.items.map(user => 
                ({ name: user.display_name, avatar: user.profile_image }));   
        }

        return (<MainComponent error={this.props.stackOverflowUsers.error} 
            errorMessage={this.props.stackOverflowUsers.errorMessage}
            loading={this.props.stackOverflowUsers.fetching} 
            users={users} />);
    }
}

const mapStateToProps = (state) => ({
    stackOverflowUsers: state.stackOverflowUsers
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => getSOUsers(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
