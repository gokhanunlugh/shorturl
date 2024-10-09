"use server"

import { makeid } from "@/utils/shorturl";

export async function linkShortener(formData) {
  const longUrl = formData.get('url');
  if (!longUrl) return { error: "Url alanı boş olamaz."}

  const regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  if(!regex.test(longUrl)) return { error: "Geçersiz bir url girdiniz" }

  const shortUrl = makeid(6)
  const response = await fetch("https://iblitesiugyvrzmeoqsf.supabase.co/rest/v1/", {
    method: "POST",
    
  })
}