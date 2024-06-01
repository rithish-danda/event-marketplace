import React from 'react'

const handleSubmit = () => {
    console.log("submit")
}

const events = () => {
  return (
    <div>
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <div>
                <h3>Login</h3>
                <form action="handleSubmit()">
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        </div>
    </div>
  )
}

export default events