import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../Question/Question';

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const params = useParams();
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        getDeck(params.id).then((data) => setQuestions(data));
    }, []);

    useEffect(() => {
        updateNextQuestion();
    }, [questions]);

    function updateNextQuestion() {
        if (questions.length) {
            const id = Math.round(Math.random() * (questions.length - 1));
            const q = questions[id];
            setQuestion(q);
        }
    }

    async function getDeck(id) {
        const url = 'http://localhost:3010';
        const endpoint = 'decks';
        const response = await fetch(`${url}/${endpoint}/${id}/cards`);

        return await response.json();
    }

    return (
        <div>
            {!question ? (
                <h2>Loading</h2>
            ) : (
                <Question
                    updateNextQuestion={updateNextQuestion}
                    question={question.question}
                    answer={question.answer}
                />
            )}
        </div>
    );
}

export default QuestionList;
