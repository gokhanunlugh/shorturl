"use server"
import { createClient } from "@/utils/supabase/client"


export default async function UserData(){
  const supabase = createClient();
  const { data: {user}} = await supabase.auth.getUser();

  return (
    <>
      <div className="container">
        <header>
          <h1></h1>
        </header>
      </div>
    </>
  )
}