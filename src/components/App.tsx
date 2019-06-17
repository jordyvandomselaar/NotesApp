import React from "react";
import {Header} from "react-native-elements";
import {View} from "react-native";
import {Note as NoteInterface} from "../interfaces/Note";
import Note from "./Note";
import NewNote from "./NewNote";

const notes: NoteInterface[] = [
    {
        title: "Test note one",
        content: "#This is a test note"
    },
    {
        title: "Test note one",
        content: "#This is a test note"
    },
];

const App = () => {
    return (
        <View>
            <Header/>
            <NewNote/>
            <Note note={notes[0]}/>
        </View>
    );
};

export default App;
