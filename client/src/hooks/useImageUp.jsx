import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useUpdatePic } from './usePost';

export function useImageUp() {
    const [image, setImage] = useState(null);
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    const { updatePic } = useUpdatePic();

    const pickImage = async (setImageFather, token) => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [7, 8],
        quality: 1,
      });
      // console.log(result)
      if (!result.canceled) {
        setImageFather(result.assets[0].uri);
        setImage(result.assets[0].uri);
        updatePic(token, result.assets[0].uri)
      }
      
    };
  
    let pickCam = async (setImageFather, token)=>{
      if(status.status === "denied"){
          return requestPermission()
      }
  
      let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [7, 8],
          quality: 1,
      })

      if (!result.canceled) {
        setImageFather(result.assets[0].uri);
        setImage(result.assets[0].uri);
        updatePic(token, result.assets[0].uri)
      }
  
    }

    return {
        pickImage,
        pickCam
    }

}  