export default async (to, from, next) => {
  if (sessionStorage.getItem('token') === null) {
    sessionStorage.setItem('token', '')
  }
  console.log(to.name)
  if (to.name === 'login') {
    next()
  } else if (to.name !== 'login' && sessionStorage.getItem("token") == '') {
    next({ name: 'login' })
  } else {
    next()
  }
}