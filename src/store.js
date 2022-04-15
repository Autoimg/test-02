import {createStore,applyMiddleware} from 'redux'
import changeDate from './reducer/index'
import logger from 'redux-logger'
const changeLow = []
if(process.env.NODE_ENV !== 'production'){
    changeLow.push(logger)
}
// 若想使用redux浏览器插件需要进行配置
export default createStore(changeDate,applyMiddleware(...changeLow))