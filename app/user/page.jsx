"use server"
import { defaultHeader } from "@/utils/header";
import { createClient } from "@/utils/supabase/server"
import Link from "next/link";


export default async function UserData(){
  const supabase = createClient();
  const { data: { user }} = await supabase.auth.getUser();

  const response = await fetch(`https://iblitesiugyvrzmeoqsf.supabase.co/rest/v1/urls?select=*`, {
    method: "GET",
    headers: defaultHeader
  })

  const userLinks = await response.json()
  
  const shortLinks = userLinks.map(x=> (x.user_email === user.email ? x.short_url : null)).filter(x=> x !== null)
  const longLinks =  userLinks.map(x=> (x.user_email === user.email ? x.long_url : null)).filter(x=> x !== null)

  return (
    <>
      <div className="container">
        <header>
          <h1>Merhaba {user.email}</h1>
        </header>

        <div className="links">
          <div className="short">
          {shortLinks.map((x,i,key)=> (
             <p key={i}><Link key={key}  href={x}>{x}</Link></p>
            ))}
          </div>
          <div className="long">
          {longLinks.map((x,i,key)=> (
             <p key={i}><Link key={key} href={x}>{x}</Link></p>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}