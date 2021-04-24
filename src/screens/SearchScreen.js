import React, { useState } from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () =>{

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async ()=>{
        const response = await yelp.get('/search',{
            params:{
                term: term,
                limit: 50,
                location: 'san jose'
            }
        });
        console.log(response);
        setResults(response.data.businesses);
    }

    return(
        <View>
            {console.log(term)}
            <SearchBar term = {term} onTermChange = {(newTerm)=>setTerm(newTerm)} onSearch = {()=>searchApi()} />
            <Text>We have fond {results.length} results</Text>
        </View>
    );
}


export default SearchScreen;