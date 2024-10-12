"use client"

import { useState, useEffect} from "react"
import Link from "next/link";

export default function ShortUrl({urls, user}){
  const [data, setData] = useState([]);


  useEffect(() => {
    if(user){
      setData(urls?.filter(x => x.user_id ===  user.id));
    }else{
      setData(urls);
    }
    
  }, [urls]);

  return (
    <ul>
      {data.map(x=> (
        <p className="linkList" key={x.id}>
          <Link href={`/${x.short_url}`}>shorturl-six-hazel.vercel.app/{x.short_url}</Link>  <span>{x.long_url}</span>
        </p>
      ))}
    </ul>
  )
}