

export default function Form(){
  
  return (
    <form action={shorten}>
    <input type="text" name="url" placehlder="Linki giriniz" />
    <button>Linki Kısalt</button>
    </form>
  )
}