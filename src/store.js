import { configureStore, createSlice } from "@reduxjs/toolkit";


let user = createSlice({
    name: "user", //변수명이랑 똑같이 적어주면 덜 헷갈림
    initialState: {
        loggedln : false,
        data : null,
        uid : null
    }, //state 기본값
    reducers: {
        logIn : (state, action) => {
            state.loggedln = true;
            state.uid = action.payload;
        },
        loggedln: (state, action)=>{
            state.loggedln = true;
            state.data = action.payload;
        },
        logOut : (state) =>{
            state.loggedln = false;
            state.data = null;
            state.uid = null;
        }
    }
})

let user2 = createSlice({
    name: "user", //변수명이랑 똑같이 적어주면 덜 헷갈림
    initialState: "박수연", //state 기본값
    reducers: {
        changeName() {
            return "그린아트"
        }
    } 
})

let dark = createSlice({
    name : "dark",
    initialState : "light",
    reducers :{
        ToggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

export const {logIn,loggedln,logOut} = user.actions;
export const {changeName} = user.actions;
export const {ToggleTheme} = dark.actions;
export const {} = dark.actions;

export default configureStore({
    reducer: {
        user : user.reducer,
        dark : dark.reducer,
        dark : dark.reducer
    }
}) //항상 정보를 가지고있어야하는 데이터를 쓸때 예) 로그인, 장바구니 