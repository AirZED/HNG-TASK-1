//importing components
import TreeLink from "./components/TreeLink";
import Profile from "./components/Profile";

//importing styles
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Profile />
      <main>
        <TreeLink href="https://training.zuri.team/">Twitter Link</TreeLink>
        <TreeLink href="twitter.com/.">Zuri Team</TreeLink>
        <TreeLink href="twitter.com/.">Zuri Books</TreeLink>
        <TreeLink href="twitter.com/.">Python Books</TreeLink>
        <TreeLink href="twitter.com/.">Background Ckeck for Coders</TreeLink>
        <TreeLink href="twitter.com/.">Design Books</TreeLink>
      </main>
    </div>
  );
}

export default App;
