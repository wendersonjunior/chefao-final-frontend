import { VuexPersistence } from 'vuex-persist'
  
export default ({ store }) => {
  new VuexPersistence({
    producer: window.localStorage,  
  }).plugin(store);
}