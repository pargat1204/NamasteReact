import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import "./css/App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <div>
                        <Body />
                    </div>
                )
            },
            {
                path: "/about",
                element: (
                    <div>
                        <About />
                    </div>
                )
            },
            {
                path: "/contact",
                element: (
                    <div>
                        <Contact />
                    </div>
                )
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);