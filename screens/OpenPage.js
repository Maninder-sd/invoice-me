import React from 'react';
import { StyleSheet, View } from 'react-native'

import { Fab, Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import theme from '../config/theme'
import SearchBar from './SearchBar'

export default class OpenPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container style={styles.background}>
                

                <Fab style={styles.newButton}>
                    <Icon name="share" style={{ color: "black" }} />
                </Fab>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: theme.primary
    },
    newButton: {
        backgroundColor: theme.secondary
    }
})
