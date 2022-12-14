import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'


const Question = ({ qus, val, posvalue, negvalue, setnegValue, setposValue }) => {

    const { question, options, correctAnswer } = qus
    const notify = (ans) => {
        let correct = JSON.stringify(correctAnswer)
        let answer = JSON.stringify(ans)
        correct = correct.replace(/\s+/g, ' ').trim();
        if (correct === answer) {
            toast("Right Ans");
            setposValue(posvalue + 1);
        }
        else {
            toast("Wrong Ans");
            setnegValue(negvalue < 0 ? 0 : negvalue + 1)

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