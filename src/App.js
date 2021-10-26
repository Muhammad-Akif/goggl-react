import React, { useState } from 'react'

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? "dark" : ""}>
            <div className="bg-gray-400">
                Hello World
            </div>
        </div>
    )
}

export default App