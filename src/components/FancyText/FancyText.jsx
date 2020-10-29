import React, {useState} from 'react';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

const FancyText = () => {
    const [text, setText] = useState('');

    const textChangedHandler = ({target}) => {
        setText(target.value);
    };

    const removeCharHandler = (index) => {
        const _text = text.split('');
        _text.splice(index, 1);
        setText(_text.join(''));
    }

    const charList = () => (
        text.split('').map((char, index) => {
            return (
                <Char
                    key={index}
                    char={char}
                    remove={() => removeCharHandler(index)}
                />
            )
        })
    );

    return (
        <div>
            <input type={'text'} value={text} onChange={textChangedHandler}/>
            <p>Input text length: {text.length}</p>
            <Validation textLength={text.length}/>
            {charList()}
        </div>
    );
};

export default FancyText;
