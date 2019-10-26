'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroImage
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}
        {/* <ViroGeometry position={[-2.5, 0, -0.1]} scale={[1.0, 1.0, 1.0]}
          vertices={[[1, 0, -1], [-1, 0, -1], [1, 5, -1],
          [-1, 5, -1], [2, 5, -1], [-2, 5, -1], [0, 7, -1]]}
          normals={[[0, 0, 1], [0, 0, 1], [0, 0, 1]]}
          texcoords={[[1, 0], [0, 1], [-1, 0]]}
          triangleIndices={[[0, 1, 2]]} /> */}
        {/* <ViroPolygon rotation={[-90, 0, 0]}
          position={[0, 0, -1]}
          vertices={[[-1, 0], [0, 1], [1, 0]]}
        /> */}
        <ViroImage
          height={1}
          width={1}
          position={[0, 0, -1]}
          rotation={[-45, 0, 0]}
          source={require('./res/arrow.png')}
        />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: ""
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
