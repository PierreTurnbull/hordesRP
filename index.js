const hash = window.location.hash.replace('#', '')
let accessData

if (hash) {
  accessData = hash.split('&').map(hashItem => {
    const formattedHashItem = hashItem.split('=')
    return { [formattedHashItem[0]]: formattedHashItem[1] }
  })
  console.log(1, accessData)
} else {
  accessData = null
  const authUrl = 'https://twinoid.com/oauth/auth'
  const responseType = 'token'
  const clientId = '345'
  const redirectUri = 'file:///home/corbux/Desktop/other/hordesApi/index.html'
  const scope = 'contacts'
  const state = ''
  window.location = `${authUrl}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`
}
