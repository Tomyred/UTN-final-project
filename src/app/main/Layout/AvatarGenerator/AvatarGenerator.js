import React, { useState } from "react";
import { setAvatar } from "../../Auth/store/actions";

const AvatarGenerator = ({ store, dispatch }) => {
    const [input, setInput] = useState("");
    const [text, setText] = useState("tomy");
    const [avatarType, setAvatarType] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
        setText(input);
        if (input.length === 0) {
            setText("tomy");
        }
    };

    const avatarUrl = `https://robohash.org/${text}?set=set${avatarType}`;

    return (
        <div className="avatar__container">
            <h1>¡Crea tu avatar!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Escribe lo que sea"
                    onChange={e => setInput(e.target.value)}
                />

                <button type="submit">¡Quiero mi avatar!</button>
            </form>

            <img src={avatarUrl} alt={text} />
            <button
                onClick={() => dispatch(setAvatar(avatarUrl))}
                className="set__profile__pic"
            >
                Colocar de perfil
            </button>
            <div className="text__box">
                <p>
                    ¿No te gustan estos robots? ¡No hay problema! Tambien
                    tenemos... ¡mas robots! y monstruos. Y si todo esto te
                    resulta demasiado aterrador, prueba con los gatitos
                </p>
            </div>
            <div className="radio__container">
                <div className="radio__option">
                    <span>Robots</span>
                    <input
                        type="radio"
                        value="1"
                        defaultChecked
                        name="name"
                        onClick={e => setAvatarType(e.target.value)}
                    />
                </div>
                <div className="radio__option">
                    <span>Monstruos</span>
                    <input
                        name="name"
                        onClick={e => setAvatarType(e.target.value)}
                        value="2"
                        type="radio"
                    />
                </div>
                <div className="radio__option">
                    <span>Mas robots</span>
                    <input
                        name="name"
                        onClick={e => setAvatarType(e.target.value)}
                        value="3"
                        type="radio"
                    />
                </div>
                <div className="radio__option">
                    <span>Bestias maullantes</span>
                    <input
                        name="name"
                        onClick={e => setAvatarType(e.target.value)}
                        value="4"
                        type="radio"
                    />
                </div>
            </div>
        </div>
    );
};

export default AvatarGenerator;
