export default defineNuxtRouteMiddleware(async () => {
    const { user, initUser } = useAuth()
  
    // initialise user from session if not already set
    if (!user.value) {
      await initUser()
    }
  
    // after init, if still no user — redirect to login
   
  })
