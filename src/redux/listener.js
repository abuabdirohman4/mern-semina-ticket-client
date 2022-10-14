import store from "./store";

let currentAuth;

function listener() {
  let previousAuth = currentAuth;
  console.log("previous Auth ", previousAuth)
  
  currentAuth = store.getState().auth;
  console.log("current Auth ", currentAuth)

  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
