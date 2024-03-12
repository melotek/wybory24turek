import client from "./client"
import { defineCancelApiObject } from "./utills"

const QuestionsAPI = {
    createCityCouncilQuestion: async function (question: any, cancel = false) {
      const response =   await client(false).request({
          url: `/api/v1/questions/city-council`,
          method: "POST",
          data: question,
          signal: cancel ? cancelApiObject[this.createCityCouncilQuestion.name].handleRequestCancellation().signal : undefined,
        })
        return response

      },
      createMayorQuestion: async function (question: any, cancel = false) {
        const response =   await client(false).request({
            url: `/api/v1/questions/mayor`,
            method: "POST",
            data: question,
            signal: cancel ? cancelApiObject[this.createMayorQuestion.name].handleRequestCancellation().signal : undefined,
          })
          return response
  
        },
        createCountyCouncilQuestion: async function (question: any, cancel = false) {
            const response =   await client(false).request({
                url: `/api/v1/questions/county-council`,
                method: "POST",
                data: question,
                signal: cancel ? cancelApiObject[this.createCountyCouncilQuestion.name].handleRequestCancellation().signal : undefined,
                })
                return response
        
            }

}
const cancelApiObject = defineCancelApiObject(QuestionsAPI)
export default QuestionsAPI