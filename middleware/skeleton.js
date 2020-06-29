export default function ({store, route}) {
  if (process.server) {
    let skeleton = null;
  
    if (route.name.indexOf("users") !== -1) {
      skeleton = "skeleton-page-one";
      store.commit("UPDATE_LOADING", true);
    } else {
      skeleton = "";
    }
    
    store.commit("UPDATE_SKELETON", skeleton);
  }
}
