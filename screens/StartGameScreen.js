import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import Card from '../components/Card';
import Btn from '../components/Btn';
import { Colors } from '../design/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = () => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const [confirmed, setComfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputHandler = (inputText) => {
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredNumber('');
        setComfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }
        setComfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredNumber('');
        Keyboard.dismiss();
    };

    const ConfirmedOutput = () => {
        return (
            <Card style={styles.summaryContainer}>
                <Text style={styles.summaryContainerTitle}>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Btn>
                    <Button title="start game" color={Colors.primary} />
                </Btn>
            </Card>
        );
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <View style={styles.gameTitleContainer}>
                    <Text style={styles.gameTitle}>Start New Game</Text>
                </View>
                <Card style={styles.card}>
                    <Text style={styles.title}>Enter a number</Text>
                    <Input
                        value={enteredNumber}
                        onChangeText={inputHandler}
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onSubmitEditing={confirmInputHandler}
                    />
                    <View style={styles.btnGroup}>
                        <Btn style={{ width: 100 }}>
                            <Button
                                title="Reset"
                                color={Colors.secondary}
                                onPress={resetInputHandler}
                            />
                        </Btn>
                        <Btn style={{ width: 100 }}>
                            <Button
                                title="Confirm"
                                color={Colors.primary}
                                onPress={confirmInputHandler}
                            />
                        </Btn>
                    </View>
                </Card>
                {confirmed ? <ConfirmedOutput /> : null}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 5,
        flex: 1,
        alignItems: 'center',
    },
    gameTitleContainer: {
        backgroundColor: Colors.accent,
        paddingVertical: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    gameTitle: {
        fontSize: 22,
    },
    title: {
        fontSize: 20,
        marginVertical: 5,
    },
    card: {
        marginVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        maxWidth: '85%',
    },
    btnGroup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    input: {
        width: 80,
        textAlign: 'center',
    },
    summaryContainer: {
        paddingHorizontal: 25,
        marginTop: 20,
        width: 250,
        alignItems: 'center',
    },
    summaryContainerTitle: {
        fontSize: 20,
    },
});
