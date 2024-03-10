import client from "./client"
import { defineCancelApiObject } from "./utills"

const QuestionsAPI = {
    createCityCouncil: async function (question: any, cancel = false) {
      const response =   await client(false).request({
          url: `/api/v1/questions/city-council`,
          method: "POST",
          data: question,
          signal: cancel ? cancelApiObject[this.createCityCouncil.name].handleRequestCancellation().signal : undefined,
        })
        return response

      },
}
const cancelApiObject = defineCancelApiObject(QuestionsAPI)
export default QuestionsAPI