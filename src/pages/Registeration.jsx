import "../App.css";

const Registeration = () => {
  return (
    <div className="formContainer">
        <h1>Fill the form to register!</h1>
        <form action="">
            <h2>Basic Information</h2>
            <div className="nameContainer">
                <label>
                    <span>First Name</span>
                    <input type="text" placeholder='John' />
                </label>
                <label>
                    <span>Last Name</span>
                    <input type="text" placeholder='Doe' />
                </label>
            </div>
            <label>
                <span>E-mail</span>
                <input type="text" placeholder='John' />
            </label>
            <label>
                <span>Phone Number</span>
                <input type="text" placeholder='########' />
            </label>

            <h2>Proffessional Information</h2>

            <label>
                <span>E-mail</span>
                <input type="text" placeholder='John' />
            </label>
            <label>
                <span>Phone Number</span>
                <input type="text" placeholder='########' />
            </label>
            <label>
                <span>E-mail</span>
                <input type="text" placeholder='John' />
            </label>
            <label>
                <span>Phone Number</span>
                <input type="text" placeholder='########' />
            </label>

            <button className="buttons">Register</button>

            {/* <hr /> */}



        </form>
    </div>
  )
}

export default Registeration