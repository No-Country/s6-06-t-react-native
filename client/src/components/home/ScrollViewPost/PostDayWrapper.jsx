import React from 'react';
import { View, Text } from 'react-native';
import { trasformDateADateString } from '../../../utils/Date';
import CardPost from './CardPost';
import { styles } from './styles';

const PostDayWrapper = ({posts, date}) => {

    return (
        <>
            <View style={styles.datePublish}>
                <View style={styles.line}></View>
                <Text style={styles.date}>{trasformDateADateString(date)}</Text>
                <View style={styles.line}></View>
            </View>

            {posts.listPosts.map((p, i) => {
                return p.pinned.status && <CardPost key={i} data={p} />
            })}
            {posts.listPosts.map((p, i) => {
                return !p.pinned.status && <CardPost key={i} data={p} />
            })}
        </>
    );
}

export default PostDayWrapper;
