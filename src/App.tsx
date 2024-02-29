import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { NewNotePage } from "./pages/NewNotePage";

function App() {
  return (
    <Container className="m-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNotePage />} />
        <Route path="/:id">
          <Route index element={<h1>Profile</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
