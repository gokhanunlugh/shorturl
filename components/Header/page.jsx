import { signOut } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server"
import Link from "next/link";

export default async function Header(){
  const supabase = createClient();
  const { data : { user }, error } = await supabase.auth.getUser();

  return(
    <header>
      { user ? (
                <>
                    <Link href={'/user'}><span>Merhaba {user.email}</span></Link>
                    <form action={signOut}>
                        <button>Çıkış Yap</button>
                    </form>
                </>
            ) : (
                <Link href="/login">Giriş Yap</Link>
            ) }
    </header>
  )
}