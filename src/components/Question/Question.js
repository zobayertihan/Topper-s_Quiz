// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Question = ({ qus, val }) => {
//     const { question, options, correctAnswer } = qus
//     const notify = (ans) => {
//         if (JSON.stringify(ans) === JSON.stringify(correctAnswer)) {
//             toast("Right Ans")
//         }
//         else {
//             toast("Wrong Ans")
//         }

//     };


//     return (
//         <div>
//             <h2>Quiz  { }: {question}</h2>
//             <div>
//                 <button >{correctAnswer}</button>

//             </div>
//             {
//                 options.map((option, index) => <button onClick={(e) => notify(e.target.innerText)} key={index}>{option}</button>)

//             }
//         </div >
//     );
// };

// export default Question;