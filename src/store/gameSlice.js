import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'



export const fetchClues = createAsyncThunk(
    'clues/fetchClues',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch('https://jservice.io/api/clues?_limit=5')

            if(!response.ok){
                throw new Error('ServerError')
            }
            const data = await response.json()
    
            return data;
        }catch(error){
            return rejectWithValue(error.message)
        }
        
    }
)



const gameSlice = createSlice({
    name: 'clues',
    initialState:{
        clues:[],
        status:null,
        error:null,
        categories: [],
        currentClue:null,
        score:0,
    },
    reducers:{
        changeStatus(state, action){
            const changedClue = state.clues.find(clue=> clue.id  === action.payload.id)
            changedClue.completed =! changedClue.completed
        },

    },
    extraReducers:{
        [fetchClues.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchClues.fulfilled]:(state, action)=>{
            state.status = 'resolved';
            state.clues = action.payload;
        },
        [fetchClues.rejected]:(state, action)=>{
            state.status = 'rejected';
            state.error = action.payload
        },
    }



})
 

export const {changeStatus} = gameSlice.actions

export default gameSlice.reducer;