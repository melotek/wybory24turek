import client from "./client"
import { defineCancelApiObject } from "./utills"



const questionsAPI = {
    createCityCouncilquestion: async function (question: any, cancel = false) {
      
      const formData = new FormData();
      await formData.append('firstname', question.firstname);
      formData.append('secondname', question.secondname);
      formData.append('email', question.email);
      formData.append('question', question.question);
      formData.append('category', question.category);
      formData.append('district', question.district);
      formData.append('recipient', "CITY_COUNCIL");

      const response = await client(false).request({
          url: `/api/v1/questions/city-council`,
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          data: formData,
          signal: cancel ? cancelApiObject[this.createCityCouncilquestion.name].handleRequestCancellation().signal : undefined,
        })
        return response

      },
      createMayorquestion: async function (question: any, cancel = false) {
        const formData  = new FormData();
        await formData.append('firstname', question.firstname);
        formData.append('secondname', question.secondname);
        formData.append('email', question.email);
        formData.append('question', question.question);
        formData.append('category', question.category);
        formData.append('recipient', "MAYOR");
        const response =   await client(false).request({
            url: `/api/v1/questions/mayor`,
            method: "POST",
            data: formData,
            headers: {
              'Content-Type': 'application/json'
            },
            // signal: cancel ? cancelApiObject[this.createMayorquestion.name].handleRequestCancellation().signal : undefined,
          })
          return response
  
        },
        createCountyCouncilquestion: async function (question: any, cancel = false) {
          const formData  = new FormData();
          await formData.append('firstname', question.firstname);
          formData.append('secondname', question.secondname);
          formData.append('email', question.email);
          formData.append('question', question.question);
          formData.append('category', question.category);
          formData.append('district', question.district);

          formData.append('recipient', "COUNTY");
            const response =   await client(false).request({
                url: `/api/v1/questions/county-council`,
                method: "POST",
                data: question,
                headers: {
                  'Content-Type': 'application/json'
                },
                signal: cancel ? cancelApiObject[this.createCountyCouncilquestion.name].handleRequestCancellation().signal : undefined,
                })
                return response
        
            }

}
const cancelApiObject = defineCancelApiObject(questionsAPI)
export default questionsAPI