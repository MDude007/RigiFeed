import { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const FeedPost = ({ data }) => {

    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleStyle}>{data.title}</Text>
            <Text style={styles.descriptionStyle}>{data.description}</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: data.image }}
                    style={styles.imageStyle}
                    onLoadStart={() => { setLoading(true) }}
                    onLoadEnd={() => { setLoading(false) }}
                />
                {
                    loading
                        ?
                        <ActivityIndicator color='black' size='large' style={styles.loaderStyle} />
                        :
                        null
                }
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={require("../assets/icon_Like.png")} style={styles.buttonStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={require("../assets/icon_Comment.png")} style={styles.buttonStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={require("../assets/icon_Share.png")} style={styles.buttonStyle} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 10,
        width: '100%',
        padding: 10,
        backgroundColor: '#E1EEDD',
        borderRadius: 5
    },
    titleStyle: {
        fontFamily: 'Avenir',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: -0.3,
    },
    descriptionStyle: {
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: -0.3,
    },
    imageContainer: {
        height: 150,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#F0A04B',
        borderRadius: 5,
        marginVertical: 10
    },
    imageStyle: {
        height: 150,
        width: 150
    },
    loaderStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: '#FEFBE9',
        borderRadius: 20
    },
    buttonStyle: {
        height: 20,
        width: 20,
    }
})

export default FeedPost;