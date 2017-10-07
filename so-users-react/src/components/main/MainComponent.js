import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, List, ListItem, Avatar, Subheader } from 'material-ui';

class MainComponent extends Component{
    render(){
        const error = this.props.error ? true : false;
        const errorMessage = this.props.errorMessage || "";
        const loading = this.props.loading || false;
        const users = this.props.users || [];

        const errorStyles = {
            textAlign: "center",
            color: "red"
        };

        if(error){
            return (<h3 styles={errorStyles}>Error retrieving users.</h3>);
        }

        if(loading){
            return (<CircularProgress size={60} thickness={5} />);
        }

        if(users){
            const listItems = users.map((user) => {
                const name = user.name || "";
                const avatar = user.avatar || "";
                return (<ListItem 
                        primaryText={name} 
                        leftAvatar={<Avatar src={avatar} />}  
                        />);
            });

            return (
                <List>
                    <Subheader>Stack Overflow Users</Subheader>
                    {listItems}
                </List>
            );
        }

        return (<h3 styles={errorStyles}>Error retrieving users.</h3>);
    }
}

MainComponent.propTypes = {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    loading: PropTypes.bool,
    users: PropTypes.array
};

export default MainComponent;