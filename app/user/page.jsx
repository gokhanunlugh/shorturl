"use server"
import { signOut } from "@/actions/auth";
import { defaultHeader } from "@/utils/header";
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";
import Link from "next/link";
import Anasayfa from "./action";


export default async function UserData() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if(!user) {
    redirect('/')
  }



  const response = await fetch(`https://iblitesiugyvrzmeoqsf.supabase.co/rest/v1/urls?select=*`, {
    method: "GET",
    headers: defaultHeader
  })

  const userLinks = await response.json()

  const shortLinks = userLinks.map(x => (x.user_email === user.email ? x.short_url : null)).filter(x => x !== null)
  const longLinks = userLinks.map(x => (x.user_email === user.email ? x.long_url : null)).filter(x => x !== null)

  return (
    <>
      <div className="userPage">
        <header>
          <h1><form action={Anasayfa}><button>Anasayfa</button></form></h1>
          <h1>Merhaba {user.email} <form action={signOut}><button>Çıkış Yap</button></form></h1>
        </header> 

        <div className="links">
          <div className="short">
            {shortLinks.map((x, i, key) => (
              <p key={i}><Link key={key} href={x}>https://shorturl-six-hazel.vercel.app/{x}</Link></p>
            ))}
          </div>
          <div className="long">
            {longLinks.map((x, i, key) => (
              <p key={i}><Link key={key} href={x}>{x}</Link></p>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}