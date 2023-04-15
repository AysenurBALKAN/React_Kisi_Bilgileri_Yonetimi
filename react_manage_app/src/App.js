import EmpList from "./components/EmpList";
import EmployeeContextProvider from "./contexts/EmployeeContext";
function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
        
            <EmployeeContextProvider>
            <EmpList />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    
  );
}

export default App;
