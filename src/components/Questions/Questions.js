import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Question.css'


const Questions = () => {
    const questions = useLoaderData();
    const { name } = questions.data;
    // const [value, setValue] = useState(0);
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

                        ></Question>)
                    }
                </div>
                <div>
                    <h1>Result Board</h1>
                    <h3>Right answers: { }</h3>
                    <h3>Wrong answers: { }</h3>
                </div>
            </div>
        </div>
    );
};

export default Questions;
