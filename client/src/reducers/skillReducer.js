export const INITIAL_STATE = {
    userId: JSON.parse(localStorage.getItem("currentuser"))?._id,
    title: "",
    category: "",
    cover: "",
    images: [],
    desc: "",
    shortDesc: "",
    lessons: 0,
  };

  export const skillReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case "ADD_COVER":{
            return {
                ...state,
                cover: action.payload.cover,
            }
        };
        case "ADD_IMAGES":{
            return {
                ...state,
                images: action.payload.images,
            }
        };
        default:
            return state;
    }
  };