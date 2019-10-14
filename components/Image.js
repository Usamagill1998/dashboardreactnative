import * as React from 'react';
import { Button, Image, View,TouchableHighlight ,TouchableNativeFeedback,ImageBackground} from 'react-native';
import * as  ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

// const  resizeMode = 'center';
 
  // const text = 'This is some text inlaid in an <Image />';

   render() { 
     //==;' usama
    let { image } = this.state; 
 
    return (



<TouchableWithoutFeedback  onPress={this._pickImage}>

<ImageBackground
        
        style={{width: 100, height: 100,marginLeft:125,marginBottom:10,marginTop:80}}
        source={require('../assets/no_dp.png')}
        imageStyle={{borderRadius:100/2}}
        
        > 

        {image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100,resizeMode:'contain' ,borderRadius:100/2}} />}
</ImageBackground>
        </TouchableWithoutFeedback>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);  

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}