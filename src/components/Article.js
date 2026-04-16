import { useEffect, useState } from "react";

function Article() {
  useEffect(() =>{
    getData()
  })
  const [data,setData] = useState([])
  async function getData(){
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

export default Article;
