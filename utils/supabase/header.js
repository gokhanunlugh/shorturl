const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlibGl0ZXNpdWd5dnJ6bWVvcXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjAsImV4cCI6MjA0MzM3ODY2MH0.HcGHuXwXVzhz6_wF-u_yOfVjupBZ7KrjtMHfxKN95n0";

export const defaultHeader = {
  "apikey": apikey,
  "Authorization": `Bearer ${apikey}`,
  "Content-Type": "application/json"
}