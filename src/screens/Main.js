import logo from "../logo.svg";
import "../App.css";
import { View } from "react-native";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const AUTH_ENDPOINT = `${API_ENDPOINT}auth/authorize`;
const TOKEN_ENDPOINT = `${API_ENDPOINT}auth/token`;

const redirect_uri = `http://localhost:3000/callback`;

const client_id = process.env.REACT_APP_CLIENT_ID;

const client_secret = process.env.REACT_APP_CLIENT_SECRET;

const LINK = `${AUTH_ENDPOINT}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=read write`;

function App(props) {
  const onAuthPress = async () => {};

  return (
    <View className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This app is in development.</p>
        <p>Use at your own risk.</p>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
          <a href={LINK} className="App-link">
            LINK
          </a>
          {/* <Button title="Start auth flow" onPress={onAuthPress} /> */}
          {/* <Button title="Rehydrate" onPress={onAuthPress} /> */}
        </View>
      </header>
    </View>
  );
}

export default App;
