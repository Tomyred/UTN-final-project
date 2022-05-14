import React from "react";

const Home = () => {
    return (
        <div className="home__component">
            <div className="presentation">
                <h1>Curso: UTN - Softtek: React Abril 2022</h1>
                <p>
                    Este es el proyecto final del curso de React js brindado por
                    Softtek en conjunto con la UTN.
                </p>
                <div className="project__info">
                    <h3>Este proyecto consta de:</h3>
                    <ul>
                        <li> 10 componentes </li>
                        <li> 5 llamadas a API´s </li>
                        <li> 4 formularios </li>
                        <li> Redux </li>
                        <li> Hooks </li>
                    </ul>
                </div>
            </div>

            <span>
                Desarrollado por{" "}
                <a
                    href="https://github.com/Tomyred"
                    target="_blank"
                    rel="noreferrer"
                >
                    Tomás Rojo
                </a>
            </span>
        </div>
    );
};

export default Home;
