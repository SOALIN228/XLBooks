import { getOpnId } from './home'

export function getSetting (auth, onSuccess, onFail) { // 获取用户授权
  mpvue.getSetting({
    success (res) {
      if (res.authSetting[`scope.${auth}`]) { // 用户授权类型是否成功
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail (res) { // 抛出异常
      console.log(res)
    }
  })
}

export function getUserInfo (onSuccess, onFail) { // 获取用户信息
  mpvue.getUserInfo({
    success (res) {
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res)
    }
  })
}

export function setStorageSync (key, data) { // 存入storage
  mpvue.setStorageSync(key, data)
}

export function getStorageSync (key) { // 取出storage
  return mpvue.getStorageSync(key)
}

export function getUserOpenId (callback) { // 获取用户OpenId
  mpvue.login({
    success (res) {
      if (res.code) {
        getOpnId(res.code).then(response => {
          const { data: { data: { openid } } } = response
          setStorageSync('openId', openid)
          callback && callback(openid)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    fail (res) {
      console.log(res)
    }
  })
}

export function showLoading (title) {
  mpvue.showLoading({
    title,
    mask: true
  })
}

export function hideLoading (title) {
  mpvue.hideLoading()
}
