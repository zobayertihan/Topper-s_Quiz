import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Questions.css'


const Questions = () => {
    const questions = useLoaderData();
    const { name } = questions.data;
    const [posvalue, setposValue] = useState(0);
    const [negvalue, setnegValue] = useState(0);
    // console.log(questions)
    const val = questions.length
    return (
        <div>
            {
                <h1>{name}</h1>
            }
            <div className='main-container'>
                <div className='qus-container'>
                    {
                        questions.data.questions.map(qus => <Question
                            key={qus.id}
                            qus={qus}
                            val={val}
                            posvalue={posvalue}
                            setposValue={setposValue}
                            negvalue={negvalue}
                            setnegValue={setnegValue}
                        ></Question>)
                    }
                </div>
                <div>
                    <h1>Result Board</h1>
                    <h3>Right answers: {posvalue}</h3>
                    <h3>Wrong answers: {negvalue}</h3>
                </div>
            </div>
        </div>
    );
};

export default Questions;
