export async function sendChat(question: string) {
  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'alice', email: '3211' }),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}
