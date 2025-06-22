import Filter from "./components/Filter";
import UserList from "./components/UserList";
import styles from "./styles/App.module.css";


function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Users list</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
