const dates = { uname: "zhangsan", age: "12" };

const nameChange = (state = dates, action) => {
  switch (action.type) {
    case "delete":
      return {
        ...state,
        ...action.reqInfo,
        age: state.age + action.age,
      };
    case "add":
      return {
        ...state,
        ...action.reqInfo,
        age: state.age + action.age,
      };
    case "login":
      return {
        ...state,
        ...action.reqInfo,
        age: state.age + action.age,
      };
    default:
      return state;
  }
};
export default nameChange;
