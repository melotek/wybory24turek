import client from "./client";
import { defineCancelApiObject } from "./utills";

const questionsAPI = {
  createCityCouncilquestion: async function (question: any, cancel = false) {
    const formDataCityCouncil = new FormData();
    await formDataCityCouncil.append("firstname", question.firstname);
    formDataCityCouncil.append("secondname", question.secondname);
    formDataCityCouncil.append("email", question.email);
    formDataCityCouncil.append("question", question.question);
    formDataCityCouncil.append("category", question.category);
    formDataCityCouncil.append("district", question.district);
    formDataCityCouncil.append("recipient", "CITY_COUNCIL");
    formDataCityCouncil.append("status", "draft");

    const response = await client(false).request({
      url: `/api/v1/questions/city-council`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: formDataCityCouncil,
      signal: cancel
        ? cancelApiObject[
            this.createCityCouncilquestion.name
          ].handleRequestCancellation().signal
        : undefined,
    });
    return response;
  },
  createMayorquestion: async function (question: any, cancel = false) {
    const formDataMayor = new FormData();
    await formDataMayor.append("firstname", question.firstname);
    formDataMayor.append("secondname", question.secondname);
    formDataMayor.append("email", question.email);
    formDataMayor.append("question", question.question);
    formDataMayor.append("category", question.category);
    formDataMayor.append("recipient", "MAYOR");
    formDataMayor.append("status", "draft");
    const response = await client(false).request({
      url: `/api/v1/questions/mayor`,
      method: "POST",
      data: formDataMayor,
      headers: {
        "Content-Type": "application/json",
      },
      signal: cancel
        ? cancelApiObject[
            this.createMayorquestion.name
          ].handleRequestCancellation().signal
        : undefined,
    });
    return response;
  },
  createCountyCouncilquestion: async function (question: any, cancel = false) {
    const formDataCountyCouncil = new FormData();
    await formDataCountyCouncil.append("firstname", question.firstname);
    formDataCountyCouncil.append("secondname", question.secondname);
    formDataCountyCouncil.append("email", question.email);
    formDataCountyCouncil.append("question", question.question);
    formDataCountyCouncil.append("category", question.category);
    formDataCountyCouncil.append("district", question.district);
    formDataCountyCouncil.append("recipient", "COUNTY_COUNCIL");
    formDataCountyCouncil.append("status", "draft");

    const response = await client(false).request({
      url: `/api/v1/questions/county-council`,
      method: "POST",
      data: formDataCountyCouncil,
      headers: {
        "Content-Type": "application/json",
      },
      signal: cancel
        ? cancelApiObject[
            this.createCountyCouncilquestion.name
          ].handleRequestCancellation().signal
        : undefined,
    });
    return response;
  },
  getAllQuestions: async function (cancel = false) {
    try {
      const response = await client(false).request({
        url: `/api/v1/questions`,
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*", // or specify the specific domain you want to allow
          "Access-Control-Allow-Methods": "GET, POST, PUT",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json",
        },
        signal: cancel
          ? cancelApiObject[
              this.getAllQuestions.name
            ].handleRequestCancellation().signal
          : undefined,
      });

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
const cancelApiObject = defineCancelApiObject(questionsAPI);
export default questionsAPI;
