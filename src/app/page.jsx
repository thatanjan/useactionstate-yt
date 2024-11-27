'use client'
import { login } from '@/actions'
import useResettableActionState from '@/useResettableState'
import { useEffect } from 'react'

export default function Home() {
  const { updateState, state, formAction, isPending, resetState } =
    useResettableActionState({
      initialState: { message: null, error: null },
      action: login,
    })

  const { message, error } = state

  useEffect(() => {
    setTimeout(() => {
      // if (!isPending) updateState({ message: null, error: null })
      if (!isPending) resetState()
    }, 3000)
  }, [isPending])

  return (
    <div className='flex justify-center  items-center  h-screen'>
      <form className='w-96' action={formAction}>
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text'>Email</span>
          </div>
          <input
            type='email'
            placeholder='Email'
            className='input input-bordered w-full '
            name='email'
          />
        </label>
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text'>Password</span>
          </div>
          <input
            type='password'
            placeholder='Password'
            className='input input-bordered w-full '
            name='password'
          />
        </label>
        <div className='label'>
          <button className='btn btn-primary w-full' disabled={isPending}>
            Login
          </button>
        </div>

        {error && (
          <div role='alert' className='alert alert-error'>
            <span>Error! {error}</span>
          </div>
        )}

        {message && (
          <div role='alert' className='alert alert-success'>
            <span>{message}</span>
          </div>
        )}
      </form>
    </div>
  )
}
