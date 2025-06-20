export async function sendChat(question: string) {
  const res = await fetch('/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'alice', email: '3211' }),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}

export async function testPing(code: string) {
  const res = await fetch('/ping', {
    method: 'POST',
    body: JSON.stringify({ code: code }),
    headers: { 'Content-Type': 'application/json' }
  })
  return res.json()
}
