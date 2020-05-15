export function GetDataFromServer(apiPath, reqMethod) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  return fetch(apiPath, { method: reqMethod, headers: myHeaders });
}

export function PostDataToServer(apiPath, reqMethod, formBody) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (formBody) {
    let fetchData = {
      method: reqMethod,
      body: formBody,
      headers: myHeaders,
    };
    return fetch(apiPath, fetchData);
  }
}
