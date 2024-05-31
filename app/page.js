import styles from './Home.module.css';

export default function Home() {

    const isUserLoggedIn = true;

    const userName = 'HARINI';

    return (
        <div className={styles.container}>
        {isUserLoggedIn ? (
            <h1 className={styles.welcomeMessage}>Welcome {userName}</h1>
        ) : (
            <p className={styles.loginMessage}>PLEASE LOG IN❗</p>
        )}
    </div>
    );
}