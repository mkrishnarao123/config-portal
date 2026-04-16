import { useEffect,useState } from "react"

function Home(){
    useEffect(() => {

    })
    const [data,setData] = useState([])
    async function getDataFromServer(){
        let res = await fetch('')
        let response = res.json()
        setData(response)
    }
    return(
        <div>
            <div></div>
        </div>
    )
}

export default Home