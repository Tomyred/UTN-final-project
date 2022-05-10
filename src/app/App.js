import { Provider } from "react-redux";
import generateStore from "./store";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import particlesOptions from "./particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const store = generateStore();

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Particles options={particlesOptions} init={particlesInit} />
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
