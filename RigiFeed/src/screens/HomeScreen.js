import { useEffect, useRef, useState } from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import FeedPost from "../components/FeedPost";

const HomeScreen = () => {

    const [data, setData] = useState([]);
    const offset = useRef(0);

    const addData = () => {
        if (offset.current < 20) {
            setData((curr) => {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        id: `ID_+${10 * offset.current + i}`,
                        title: `Post ${10 * offset.current + i + 1}`,
                        description: `Some description about this post ${10 * offset.current + i + 1}`,
                        image: `https://robohash.org/user${10 * offset.current + i}`
                    })
                }
                return [...curr, ...data];
            })
            offset.current += 1;
        }
    }

    useEffect(() => {
        addData();
    }, [])


    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleStyle}>RigiFeed</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => item.id + index}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.1}
                onEndReached={() => { addData(); }}
                renderItem={({ item }) => <FeedPost data={item} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20
    },
    titleStyle: {
        fontFamily: 'Avenir',
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: -0.3,
        textAlign: 'center',
        marginBottom: 10
    }
})

export default HomeScreen;