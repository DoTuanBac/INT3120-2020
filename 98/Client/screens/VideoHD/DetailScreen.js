/*import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function DetailScreen(props) {
    const { vid } = props;
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                //isLooping
                style={styles.backgroundVideo}
            />
        </View>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            backgroundColor: 'black',
        },
        backgroundVideo: {
            position: 'relative',
            height: 300,
            margin: 8,
        },
    });*/

import React from "react";
import { WebView } from 'react-native-webview';

export default function VideoDetail(props) {
    const { link } = props;
    return (
        <WebView
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            source={{ uri: "https://www.youtube.com/watch?v=guqQP1wOOBs" }}
        />
    );
}