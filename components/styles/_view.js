import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    position: 'relative',
    height: '80%'
  },
  text: {
    textAlign: 'center',
    marginTop: 20
  },
  map: {
    left:0,
    right: 0,
    top:0,
    bottom: 0,
    position: 'absolute'
  }
});
