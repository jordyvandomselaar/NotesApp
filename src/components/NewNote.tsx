import React from "react";
import {Button, Card, Input} from "react-native-elements";

interface IProps {

}

const NewNote = ({}: IProps) => {
    return (
        <Card title="New note">
            <Input label="Title"/>
            <Input label="Content" multiline/>
            <Button title="Save Note"/>
        </Card>
    );
};

export default NewNote;
