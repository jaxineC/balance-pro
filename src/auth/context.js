//Context is designed to share data that can be considered “global”
//current authenticated user, theme, or preferred language.

// Create a context for the current theme (with "light" as the default).
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);
//const MyContext = React.createContext(defaultValue);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}





//----------------------------------------------------------------


<MyContext.Provider value={/* some value */}>
  <Toolbar />
</MyContext.Provider>

function Toolbar() {
  return (
    <>
      <Button />
    </>
  )
}
  


function Button() {
  const value = useContext(MyContext);
  //static contextType = MyContext in class , or to <MyContext.Consumer>.
}
