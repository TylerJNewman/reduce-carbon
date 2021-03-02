import React, {useState, useEffect} from 'react'
import Section from './Section'
import {useScroll} from './scroll-context'

// import useTimeout from 'common/hooks/useTimeout'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import useFormStyles from './FormStyles'
import {useForm} from 'react-hook-form'
// import Snackbar from '@material-ui/core/Snackbar'
// import Alert from '@material-ui/lab/Alert'

export default function ContactForm() {
  const {contactRef} = useScroll()

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [pending, setPending] = useState(false)
  // const [open, setOpen] = useState(false) // Snackbar
  // const classes = useFormStyles()

  // useEffect(() => {
  //   if (error) setOpen(true)
  // }, [error])

  // useEffect(() => {
  //   if (success) setOpen(true)
  // }, [success])

  // const {start} = useTimeout(() => {
  //   if (error) setError(false)
  //   if (success) setSuccess(false)
  //   setOpen(false)
  // }, 3500)

  const submitSendgrid = async (email) => {
    setPending(true)
    const response = await fetch(
      'https://api.sendgrid.com/v3/marketing/contacts',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        method: 'PUT',
        body: JSON.stringify({
          list_ids: [],
          contacts: [{email}],
        }),
      },
    )

    const data = await response.json()
    if (data.job_id) {
      setPending(false)
      setSuccess(true)
    } else if (data.errors.length) {
      setPending(false)
      setError(true)
    }
    reset()
  }

  const {register, handleSubmit, reset} = useForm()

  // const handleSBClose = (event, reason) => {
  //   if (reason === 'clickaway') return
  //   setOpen(false)
  // }

  // const SnackbarMessage = () => {
  //   const severity = error ? 'error' : 'success'
  //   return (
  //     <Alert severity={severity}>
  //       <div className={classes.snackbarMessage} />
  //       {error && 'Something went wrong :('}
  //       {success && 'Success!  You will hear from us soon :)'}
  //     </Alert>
  //   )
  // }

  return (
    <>
      {/* <form
        noValidate
        onSubmit={handleSubmit((data) => {
          if (data.email === '') return
          submitSendgrid(data.email)
        })}
        className={classes.root}
      >
        <TextField
          inputRef={register}
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          placeholder="Enter email address"
          type="email"
          style={{
            paddingLeft: 30,
            width: 316,
            paddingRight: 30,
            marginBottom: 6,
            '@media (maxWidth: 600px)': {
              width: '100%',
            },
          }}
        />
        <Button type="submit" disabled={pending}>
          Notify Me
        </Button>
      </form>
      {open ? (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleSBClose}>
          <SnackbarMessage />
        </Snackbar>
      ) : null} */}
      <>
        <Section forwardedRef={contactRef}>
          <div class="bg-white rounded-md mx-4 sm:mx-6 lg:mx-8">
            <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <h4 class="font-bold text-gray-900  ">
                Want more? <br class="hidden sm:inline" />
                <span class="text-green-600">We will send you updates</span>
              </h4>
              <form
                class="mt-8 sm:flex"
                onSubmit={handleSubmit((data) => {
                  if (data.email === '') return
                  submitSendgrid(data.email)
                })}
              >
                <input
                  name="email"
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                  aria-label="Email address"
                  type="email"
                  required
                  class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                  placeholder="Enter your email"
                />
                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Send
                    <div className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-send"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </>
    </>
  )
}
