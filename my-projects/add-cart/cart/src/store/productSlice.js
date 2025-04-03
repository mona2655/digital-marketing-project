import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const fetchProduct = createAsyncThunk(
    'fetch/product',
    async() => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data)
       return  data;
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {products:[], status: "idle", error:null },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending,(state) =>{
            state.status= 'loading'
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.products = action.payload
        })
        .addCase(fetchProduct.rejected,(state, action) =>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const productReducer = productSlice.reducer
export { fetchProduct };