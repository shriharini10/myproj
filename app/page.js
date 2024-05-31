export default function Home() {

    const isUserLoggedIn = false

    const userName = 'HARINI'

    return (
    <div>
        {isUserLoggedIn?<h1>Welcome {userName}</h1>:<p>PLEASE LOG IN❗</p>}
    </div>
    )
}