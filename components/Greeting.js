import { Text, TextInput, View } from 'react-native'
import {useState} from 'react'

export default function Greeting() {
    const [name, setName] = useState("Reina");

    return (
        <View>
            <TextInput placeholder="Enter your name..." onchangeText={text => setName(text)}
            />

            <Text>Hello {name}!</Text>
        </View>

    )

}