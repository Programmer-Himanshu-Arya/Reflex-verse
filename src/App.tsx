import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader";

const NotFound = lazy(() => import("./Pages/404Page"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const FormPage = lazy(() => import("./Pages/FormPage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App