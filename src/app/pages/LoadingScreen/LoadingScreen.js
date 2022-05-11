import React from "react";

const styles = {
    height: "100%",
    display: "grid",
    placeContent: "center",
};

const LoadingScreen = () => {
    return (
        <div style={styles}>
            <h2>Cargando...</h2>
        </div>
    );
};

export default LoadingScreen;
