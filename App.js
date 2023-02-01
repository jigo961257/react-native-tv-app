import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center", alignItems: "center"
    }}>
      <Text>This is the first App for using react-native 69.0</Text>
      <View style={{
        height: "30%",
        width: "50%",
        padding: 10,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        elevation: 5,
        shadowRadius: 10,
        shadowOffset: {
          height: 0,
          width: 0,
        }
      }}>
        <View style={{
          flex: 1,
          flexDirection: "row",
        }}>
          <View
            style={{
              width: "40%",
              height: "100%",
            }}
          >
            <Image source={{ uri: `data:image/jpeg;base64,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` }}
              style={{
                flex: 1,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{
            marginLeft: 16,
          }}>
            <View style={{ flex: 1 }}>
              <Text style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 20,
              }}>Jeegar Goyani</Text>
              <Text style={{
                fontWeight: "600",
                fontSize: 14,
              }}>@jigo goyani</Text>
            </View>
            <View style={{

            }}>
              <Text>Contact : +91 7621 8276 82</Text>
              <Text>Email : riskbyjigo@gmail.com</Text>
            </View>

            <View style={{
              
            }}>
              <Text>This is the my first app for the android {`\n`}app using react native tv app</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default App