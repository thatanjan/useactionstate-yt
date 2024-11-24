'use server'

const wait = (ms = 3000) => new Promise(resolve => setTimeout(resolve, ms))

export const login = async (prevState, formData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    return {
      error: 'Please fill in all fields',
      message: null,
    }
  }

  await wait()

  return {
    message: 'Login successful',
    error: null,
  }
}
