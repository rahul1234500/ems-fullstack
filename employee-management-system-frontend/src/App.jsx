import EmployeeComponent from "./assets/components/EmployeeComponent";
import FooterComponent from "./assets/components/FooterComponent";
import HeaderComponent from "./assets/components/HeaderComponent";
import ListEmployeeComponent from "./assets/components/ListEmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <HeaderComponent />
          <Routes>
            {/* // http://localhost:3000 */}
            <Route
              path="/"
              element={
                <main className="flex-grow-1 d-flex justify-content-center align-items-start">
                  <ListEmployeeComponent />
                </main>
              }
            ></Route>
            {/* // http://localhost:3000/employees */}
            <Route
              path="/employees"
              element={
                <main className="flex-grow-1 d-flex justify-content-center align-items-start">
                  <ListEmployeeComponent />
                </main>
              }
            ></Route>
            {/* // http://localhost:3000/add-employee */}
            <Route path="/add-employee" element={
              <EmployeeComponent/>
            }></Route>
            {/* // http://localhost:3000/edit-employee/1 */}
            <Route path="/edit-employee/:id" element={<EmployeeComponent/>}></Route>
          </Routes>

          <FooterComponent />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
