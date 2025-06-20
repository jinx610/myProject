const baseUrl = import.meta.env.VITE_API_BASE;
fetch(`${baseUrl}/xxx`)

export async function sendChat(question: string) {
  const res = await fetch(`${baseUrl}/api/users`, {
    method: 'POST',
    body: JSON.stringify({ name: 'alice', email: '3211' }),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}

export async function testPing(code: string) {
  const res = await fetch(`${baseUrl}/api/ping`, {
    method: 'POST',
    body: JSON.stringify({ code: code }),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}
