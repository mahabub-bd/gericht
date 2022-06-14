import { Route, Routes } from 'react-router-dom';
import Global from './Global';
import { About, Awards, BookTable, Contact, Home, Login, Menu, PageNotFound } from './Page';

const App = () => (
    <>
        <Global />
        <Routes>
            <Route path="/gericht" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookTable" element={<BookTable />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    </>
);

export default App;
