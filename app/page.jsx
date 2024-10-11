import Header from "@/components/Header/page";
import Form from "./form";
import { createClient } from "@/utils/supabase/server";
import ShortUrl from "@/components/shorturl/page";



export default async function Home() {

  const supabase = createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  let { data: urls, error } = await supabase
    .from('urls')
    .select('*');
  return (
    <>
    <Header />
    <div className="fp">
      <Form />
      <ShortUrl urls={urls} user={user} />
    </div>
    </>
  );
}
