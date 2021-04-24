import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


const SearchBar = (props) =>{
    return(
        <View style = {style.background} >
            <FontAwesome name="search" style = {style.iconStyle} />
            <TextInput style= {style.inputStyle} placeholder = "Search.."
            value= {props.term}
            onChangeText = {(newTerm)=>props.onTermChange(newTerm)}
            onEndEditing = {()=>props.onSearch()}
            />
        </View>
    );
}

const style = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 5,
        flexDirection: 'row',
    },
    iconStyle:{
        fontSize:28,
        //marginTop: 7,
        marginLeft: 10,
        alignSelf: 'center',
    },
    inputStyle: {
        flex: 1, 
        marginLeft: 3,
        fontSize: 18
        //height: 1,
        //borderWidth:1
    }
})

export default SearchBar;