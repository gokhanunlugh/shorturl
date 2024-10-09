"use client"
import { linkShortener } from "@/actions/link"
import { useFormState } from "react-dom"


export default function Form(){

  const [state, shorten] = useFormState(linkShortener, {
    message: null,
    error: null
  })
  
  return (
    <form action={shorten}>
    <input type="text" name="url" placehlder="Linki giriniz" />
    <button>Linki Kısalt</button>
    </form>
  )
}