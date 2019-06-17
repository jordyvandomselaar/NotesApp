import React from "react";
import {Card, Text} from "react-native-elements";
import {Note as NoteInterface} from "../interfaces/Note";

interface IProps {
    note: NoteInterface
}

const Note = ({note}: IProps) => {
    return (
        <Card title={note.title}>
            <Text>{note.content}</Text>
        </Card>
    );
};

export default Note;
