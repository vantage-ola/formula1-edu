import React, { useState } from "react";
import { View, Platform} from 'react-native';
import { Appbar , Text} from 'react-native-paper';
import PickYear from "../../data/year";


function Header() {

    const [year, setYear ] = useState(2022) // year season
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'; // change icon based on platform

    return (
        <View>
            {/* Header, contains title, edit and side bar button */}
        <Appbar.Header>
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />            
            <Appbar.Content titleStyle={{fontWeight: "bold", fontSize: 25 }} title="Learn F1" />
            <Text style={{fontSize: 15 ,color: '#fff'}}>Season </Text>
            <PickYear/>
        </Appbar.Header>
        </View>
    )

}


export default Header;