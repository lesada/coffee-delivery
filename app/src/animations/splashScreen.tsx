import React, { useCallback, useEffect } from 'react';

import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { styled } from 'styled-components';

import { Images } from '@/assets';

function SplashScreen() {
  const iconPositionX = useSharedValue(0);

  const textPositionX = useSharedValue(30);
  const textOpacity = useSharedValue(0);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: iconPositionX.value }],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: textPositionX.value }],
      opacity: textOpacity.value,
      position: 'absolute',
    };
  });

  const startAnimation = useCallback(() => {
    textPositionX.value = withDelay(
      700,
      withTiming(30, {
        duration: 500,
        easing: Easing.ease,
      }),
    );

    iconPositionX.value = withDelay(
      500,
      withTiming(-50, {
        duration: 500,
        easing: Easing.ease,
      }),
    );

    textOpacity.value = withDelay(
      700,
      withTiming(1, {
        duration: 600,
        easing: Easing.ease,
      }),
    );
  }, [iconPositionX, textOpacity, textPositionX]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
  `;

  return (
    <Container
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
      }}
    >
      <Animated.View style={[iconAnimatedStyle]}>
        <Images.LogoIcon />
      </Animated.View>
      <Animated.View style={[textAnimatedStyle]}>
        <Images.LogoText />
      </Animated.View>
    </Container>
  );
}

export default SplashScreen;
