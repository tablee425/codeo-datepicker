jest.mock('react-native-fetch-blob', () => {
  return {
    fs: {
      dirs: {
        DocumentDir: ''
      },
      writeFile: () => Promise.resolve()
    }
  };
});

jest.mock('react-native-maps', () => {
  const React = require.requireActual('react');
  const MapView = require.requireActual('react-native-maps');

  class MockMarker extends React.Component {
    render() {
      return React.createElement('Marker', this.props, this.props.children);
    }
  }

  class MockMapView extends React.Component {
    animateToRegion() {}
    render() {
      return React.createElement('MapView', this.props, this.props.children);
    }
  }

  MockMarker.propTypes = MapView.Marker.propTypes;
  MockMapView.propTypes = MapView.propTypes;
  MockMapView.Marker = MockMarker;
  return MockMapView;
});

jest.mock('@expo/react-native-action-sheet', () => 'ActionSheet');

jest.mock('react-native-camera', () => {
  const React = require.requireActual('react');
  const constants = {
    Aspect: {},
    BarCodeType: {},
    Type: {},
    CaptureMode: {},
    CaptureTarget: {},
    CaptureQuality: {},
    Orientation: {},
    FlashMode: {},
    TorchMode: {}
  };

  class MockCamera extends React.Component {
    static constants = constants;
    render() {
      return null;
    }
  }

  MockCamera.constants = constants;
  return MockCamera;
});

jest.mock('react-native-video', () => 'Video');

jest.mock('react-native-camera-roll-picker', () => 'CameraRollPicker');
