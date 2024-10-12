"use server"

import { makeid } from "@/utils/shortUrl";
import { defaultHeader } from "@/utils/header";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function linkShortener(prevState, formData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const longUrl = formData.get('url');
  if (!longUrl) return { error: "Url alanı boş olamaz."}

  const regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  if(!regex.test(longUrl)) return { error: "Geçersiz bir url girdiniz" }

  const shortUrl = makeid(6)
  const response = await fetch("https://iblitesiugyvrzmeoqsf.supabase.co/rest/v1/urls", {
    method: "POST",
    headers: defaultHeader,
    body: JSON.stringify({
      short_url: shortUrl,
      long_url: longUrl,
      user_id: user ? user.id : null,
      user_email: user ? user.email : null
    })
  })

  if(response.ok){
    redirect('/')
    return {message: "Link başarıyla kısaltıldı."}
  }
}