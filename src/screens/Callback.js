import logo from "../logo.svg";
import "../App.css";
import { View } from "react-native";
import { useEffect } from "react";
import { Button } from "react-native";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const TOKEN_ENDPOINT = `${API_ENDPOINT}auth/token`;
const client_id = process.env.REACT_APP_CLIENT_ID;

const client_secret = process.env.REACT_APP_CLIENT_SECRET;

function App() {
  const onAuthPress = () => {
    console.log({
      client_id,
      client_secret,
      grant_type: "authorization_code",
      code: window.location.href.split("code=")[1],
      redirect_uri: "http://localhost:3001/callback",
      // scope: "read",
    });
    fetch(TOKEN_ENDPOINT, {
      headers: {
        // "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({
        client_id,
        client_secret,
        grant_type: "authorization_code",
        code: window.location.href.split("code=")[1],
        redirect_uri: "http://localhost:3001/callback",
        scope: "read",
      }),
    })
      .then((response) => {
        console.log("TOKEN? ", response);
      })
      .catch((error) => {
        console.log("ERROR? ", error);
      });
  };

  useEffect(() => {
    console.log(
      "Here",
      window.location.href.includes("callback") &&
        window.location.href.split("code=")[1]
    );
  }, []);

  return (
    <View className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Callback
        <Button title="AUTH" onPress={onAuthPress} />
      </header>
    </View>
  );
}

export default App;
