import axios from "axios"
const creatingNewConnector = axios.create({
  baseURL: "http://test.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function creatingnewconnector_get_animals_read(payload) {
  return creatingNewConnector.get(`/animals`, {
    params: { breed: payload.breed }
  })
}
export const apiService = { creatingnewconnector_get_animals_read }
