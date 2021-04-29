import React, {useState, useEffect} from "react"
import Tab from "./Tab"

const url = "https://course-api.com/react-tabs-project"

function App() {
  const [loading, setLoading] = useState(true);
    const [people,
        setPeople] = useState([])

    const getData = async() => {
     //setLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        console.log(true)
        setPeople(data);
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
      return (
        <main>
          <h1 className="title">loading...</h1>
        </main>
      )
    }

    return (
        <main>
            <h2 className="title">Experience</h2>
            <div className="underline"></div>
            <Tab people={people}/>
            <button type="button" className="more-info-btn">more info</button>
        </main>

    );
}

export default App;
