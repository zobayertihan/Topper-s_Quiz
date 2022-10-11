import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const Question = ({ qus, val }) => {

    const { question, options, correctAnswer } = qus
    const notify = (ans) => {
        if (JSON.stringify(ans) === JSON.stringify(correctAnswer)) {
            toast("Right Ans");
            // setValue(value + 1);
        }
        else {
            toast("Wrong Ans");

        }

    };
    const rightAns = (correctAnswer) => toast(correctAnswer);

    return (
        <div className='quiz-container'>
            <div className='question'>
                <h2>{question}</h2>
                <div className='icon'>
                    <EyeSlashIcon onClick={() => rightAns(correctAnswer)} />
                </div>
            </div>
            <div className='options'>
                {
                    options.map((option, index) => <button onClick={(e) => { notify(e.target.innerText) }} key={index}>{option}</button>)
                    // e.currentTarget.setAttribute("disabled", true)
                }
            </div>
        </div >
    );
};

export default Question;