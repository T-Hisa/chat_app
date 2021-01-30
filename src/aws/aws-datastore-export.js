import { syncExpression } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { Todo } from '../models'

console.log('DataStore', DataStore)
console.log('syncExpression')

// DataStore.configure({
//   syncExpressions: [
//     syncExpression(Todo, () => {
//       return Predicates.ALL
//     })
//   ]
// })
// const datastoreConfig = {
//   syncExpressions: [
//     syncExpression(Todo,/*  async */ () => {
//         return Predicates.ALL
//     })
//   ]
// }
const datastoreConfig = ""

export default datastoreConfig
