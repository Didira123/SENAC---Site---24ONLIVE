import React from 'react';

// var navigation = NavigationScreenProp<NavigationState, NavigationParams>;
import {View, SafeAreaView, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text, Image} from 'react-native';

import {css, imagens, textos, htmls} from "./src/mocks/home";

import Produtos from "./src/Componentes/Produtos";
import Categorias from './src/Componentes/Categorias';
import Final from './src/Componentes/Final';

export default function App() {
  const [number, onChangeNumber] = React.useState('');

  return (
    <ScrollView>
    <SafeAreaView>
      <View style={{flexDirection: "row", padding:8, marginHorizontal:"auto", backgroundColor:"lightgray", justifyContent:'space-between', alignItems:'center'}}>
        <Image style={styles.imagem} source={imagens.logoHome}/>
        <View style={{flexDirection: "row", marginHorizontal:5}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao}>Search</Text></TouchableOpacity>
        </View>
        <Image style={styles.imagem} source={imagens.menu}/>
      </View>
      <View style={styles.lista}>
        <View style={styles.itemlista}>
          <View style={[styles.caixoteItemLista, styles.caixote1]}>
            <Text style={styles.textoItem}>Retire perto de Você</Text>
            <Image style={styles.imagem} source={imagens.casa}/>
          </View>
        </View>
        <View style={styles.itemlista}>
          <View style={[styles.caixoteItemLista, styles.caixote2]}>
            <Text style={styles.textoItem}>Frete Grátis</Text>
            <Image style={styles.imagem} source={imagens.frete}/>
          </View>
        </View>
        <View style={styles.itemlista}>
          <View style={[styles.caixoteItemLista, styles.caixote3]}>
            <Text style={styles.textoItem}>Entrega Relâmpago</Text>
            <Image style={styles.imagem} source={imagens.flash}/>
          </View>
        </View>
      </View>
      <Categorias/>
      <Produtos/>
      <Final/>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    imagem:{
    width:35,
    height:35,
  },
  input: {
    width:120,
    paddingLeft:4,
    borderWidth: 1,
    fontSize:12,
  },
  botao:{
    backgroundColor: "#0069d9",
    padding:4,
    justifyContent:"center",
    alignItems:"center",
  },
  textoBotao:{
    color: "white", 
    fontWeight:"bold",
  },
  lista:{
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center",
  },
  itemlista:{
    width:"50%",
    marginVertical:5,
    alignItems:"center",
    justifyContent:"center",
  },
  caixoteItemLista:{
    borderWidth:1,
    width:80,
    height:80,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-around",
    padding:2,
  },
  caixote1:{
    backgroundColor:"#20B2AA",
  },
  caixote2:{
    backgroundColor:"#1E90FF",
  },
  caixote3:{
    backgroundColor:"#D5BE73",
  },
  textoItem:{
    textAlign:"center",
    color:"white",
  },
  
});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
