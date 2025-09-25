import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { ThemeContextProvider } from "./components/Episode_14/ThemeContext";
import { Box } from "./components/Episode_14/Box";
import { UserContextProvider } from "./components/Episode_15/UserContext";
//import { User } from "./components/state/User";
import { User } from "./components/Episode_15/User";
import { Private } from "./components/Episode_18/Private";
import { Profile } from "./components/Episode_18/Profile";
import { List } from "./components/Episode_19_generics/List";
import { RandomNumber } from "./components/Episode_20_restrictions/RandomNumber";
import { Toast } from "./components/Episode_21_TemplateLiterals/Toast";
import { CustomButton } from "./components/Episode_22_WrappingHTML/Button";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <div>
        Episode 15 demo
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
      <div>
        Episode 14 demo
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
      <div>
        Episode 18 demo
        <Private isLoggedIn={true} component={Profile} />
      </div>
      <div>
        Episode 19 demo
        <List
          items={["Batman", "Venom", "Wonder Woman"]}
          onClick={(item) => console.log(item)}
        />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      </div>
      <div>
        Episode 20 demo - not super practical, but communicates the basics of
        restricting props
        <RandomNumber value={10} isPositive />
      </div>
      <div>
        Episode 21 demo
        <Toast position="left-center" />
      </div>
      <div>
        Episode 22 demo
        <CustomButton variant="primary">Text</CustomButton>
      </div>

      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Heading>Placeholder text</Heading>
      <Greet name="Meee" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>Oscar goes to some guy</Oscar>
    </div>
  );
}

export default App;
