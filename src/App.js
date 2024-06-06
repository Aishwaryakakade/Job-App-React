import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index elemnt={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* pages that are displayed without authentication are Landing, Register, and Error page */}
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
