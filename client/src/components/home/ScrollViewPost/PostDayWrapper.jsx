import React from 'react';
import { Text } from 'react-native';
import CardPost from './CardPost';
import DateTitle from './DateTitle';


const PostDayWrapper = ({group}) => {
    if (!group) {
        return <Text>Cargando...</Text>
    }
    return (
        <>
            <DateTitle d={group.date} />
            {
                group.posts.map((p, i)=>(
                    <CardPost key={i}data={p} />

                ))
            }
        </>
    );
}

export default PostDayWrapper;
