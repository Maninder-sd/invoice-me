import React from 'react';
import {StyleSheet} from 'react-native'
import { Container, Fab, Header, Icon, Input, Item, Text} from 'native-base';


import theme from '../config/theme'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <Container style={{height:'20'}}>
                <Input style={{backgroundColor:"grey"}}/>
            </Container>
        );
    }
}
 
const styles = StyleSheet.create({
    searchBar:{
        backgroundColor:"grey",
        width:'75%',
        height:'20'
    }
})
