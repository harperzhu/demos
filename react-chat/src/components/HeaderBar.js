//headerbar component
export default function NavBar() {

  const USERS = ["Penguin", "Parrot", "Zebra", null]

  //convenience
  const userButtons = USERS.map((userName) => {
    return (
      <button className="btn user-icon" name={userName} key={userName}>
        <img src={'img/'+userName+'.png'} />
      </button>
    )
  })

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>
      <div>
        {userButtons}
      </div>
    </header>
  )
};