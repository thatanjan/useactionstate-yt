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
    <div className=''>
      <form className='max-w-xs' action={formAction}>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>Error! {error}</span>
          </div>
        )}

        {message && (
          <div role='alert' className='alert alert-success'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>{message}</span>
          </div>
        )}
      </form>
    </div>
  )
}
