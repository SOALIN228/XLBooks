function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}

function handleError (err) {
  console.log('handleError: ', err)
}

function showToast (response, showError) {
  if (showError) {
    const msg = (response && response.data && response.data.msg) || '请求失败'
    mpvue.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
  }
}

export function get (url, params = {}, showError = true) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        if (response && response.data && response.data.error_code === 0) {
          resolve(response)
        } else {
          showToast(response, showError)
          reject(response)
        }
      }).catch(err => {
        handleError(err)
        reject(err)
      })
    })
  }
}

export function post (url, params = {}, showError = true) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        if (response && response.data && response.data.error_code === 0) {
          resolve(response)
        } else {
          showToast(response, showError)
          reject(response)
        }
      }).catch(err => {
        console.log(err)
        handleError(err)
        reject(err)
      })
    })
  }
}
