import "BrowerRouter" from "React";
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tab/>}/>
                {/* <Route path="/products" element={<CardList/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}