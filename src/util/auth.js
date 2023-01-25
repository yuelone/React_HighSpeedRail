import axios from 'axios'

// import { tokenInvalidMessageModal } from 'Components/swal'

// const reloadPage = () => {
//   window.location.reload()
// }

export default (() => {
  const instance = axios.create({
    baseURL: API_HOST,
  })
  instance.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return request
  })
  //   instance.interceptors.response.use((response) => {
  //     if (response?.data?.messageid === 'TOKEN_FAIL') {
  //       tokenInvalidMessageModal(reloadPage)
  //     }
  //     return response
  //   })
  return instance
})()
