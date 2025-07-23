import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"

// handleGET
export const handleGet = async (res) => {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}