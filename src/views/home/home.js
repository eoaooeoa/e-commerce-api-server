import * as Api from "/api.js";
import { randomId } from "/useful-functions.js";

async function getDataFromApi() {
  const data = await Api.get("/api/users");
  const random = randomId();

  console.log({ data });
  console.log({ random });
}

getDataFromApi()