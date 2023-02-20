import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { Svg, Circle, Text } from 'react-native-svg';

const ProgressCircle = ({progress}) => {

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  const completionStatus = progress === 100 ? 'Completed' : 'Not completed';

  return (
    <View style={styles.container}>
      <Svg height="80" width="80">
        <Circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#E0E0E0"
          strokeWidth="10"
          fill="none"
        />
        <AnimatedCircle
          cx="40"
          cy="40"
          r={radius}
          stroke="#4245E5"
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
          transform={`rotate(-90, 40, 40)`}
        />
        <Text
          fill="#000"
          fontSize="15"
          fontWeight="bold"
          textAnchor="middle"
          x="40"
          y="46"
        >
          {`${progress}%`}
        </Text>
      </Svg>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
    container: {

    },
});

export default ProgressCircle;
