"use client"
import { linkShortener } from "@/actions/link"
import { useFormState } from "react-dom"
import { useEffect, useRef } from "react"
import { toast } from "sonner"


export default function Form() {

  const [state, shorten] = useFormState(linkShortener, {
    message: null,
    error: null
  })

  const formRef = useRef(null);
  useEffect(() => {
    if (state?.message) {
      toast.success(state.message)
      formRef.current.reset();
    }
    if (state?.error) {
      toast.error(state.error)
    }
  }, [state])

  return (
    <form ref={formRef} action={shorten}>
      <input type="text" name="url" placehlder="Linki giriniz" />
      <button>Linki Kısalt</button>
    </form>
  )
}