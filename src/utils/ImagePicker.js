import ImagePicker from 'react-native-image-picker';

const settings = {
  title: 'Select Image',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...',
  chooseFromLibraryButtonTitle: 'Choose from Library...',
  cameraType: 'back',
  mediaType: 'photo',
  maxWidth: 500,
  maxHeight: 500,
  quality: 1,
  allowsEditing: false,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const imagePicker = {
  show(options = {}) {
    return new Promise((resolve, reject) => {
      ImagePicker.showImagePicker(Object.assign(settings, options), (response) => {
        const result = {
          source: null,
          type: null,
          message: '',
        };
        if (response.didCancel) {
          result.type = 'UserCancel';
          result.message = 'User cancelled image picker';
        } else if (response.error) {
          return reject({
            type: 'Error',
            message: response.error,
          });
        } else if (response.customButton) {
        } else {
          result.source = {
            // uri: `data:image/jpeg;base64,${response.data}`,
            uri: response.uri,
            isStatic: true,
          };
        }
        return resolve(result);
      });
    });
  },
};

export const imagePickerFromCamera = {
  show(options = {}) {
    return new Promise((resolve, reject) => {
      ImagePicker.launchCamera(Object.assign(settings, options), (response) => {
        const result = {
          source: null,
          type: null,
          message: '',
        };
        if (response.didCancel) {
          result.type = 'UserCancel';
          result.message = 'User cancelled image picker';
        } else if (response.error) {
          return reject({
            type: 'Error',
            message: response.error,
          });
        } else if (response.customButton) {
        } else {
          result.source = {
            // uri: `data:image/jpeg;base64,${response.data}`,
            uri: response.uri,
            isStatic: true,
          };
        }
        return resolve(result);
      });
    });
  }
};

export const imagePickerFromLibrary = {
  show(options = {}) {
    return new Promise((resolve, reject) => {
      ImagePicker.launchImageLibrary(Object.assign(settings, options), (response) => {
        const result = {
          source: null,
          type: null,
          message: '',
        };
        if (response.didCancel) {
          result.type = 'UserCancel';
          result.message = 'User cancelled image picker';
        } else if (response.error) {
          return reject({
            type: 'Error',
            message: response.error,
          });
        } else if (response.customButton) {
        } else {
          result.source = {
            uri: `data:image/jpeg;base64,${response.data}`,
            isStatic: true,
          };
        }
        return resolve(result);
      });
    });
  }
};
