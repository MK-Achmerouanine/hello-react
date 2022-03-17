import React, { useState } from 'react'

const App = () => {
    const question = {
        img: "https://picsum.photos/200",
        sentence: "Hello, welcome to ODC!"
    }
    const quiz = [
        {
            img: "https://picsum.photos/200",
            sentence: "Hello, welcome to ODC!"
        },
        {
            img: "https://picsum.photos/200",
            sentence: "Bonjour, bienvenue à ODC!"
        },
        {
            img: "https://picsum.photos/200",
            sentence: "Let's learn ReactJS"
        }
    ]
    const sentence = "Hello, welcome to ODC!"
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
        return array;
    }
    const questionStyle = {
        margin: "1rem",
        padding: "1rem"
    }

    const [answer, setAnswer] = useState([])


    const onTagClick= (val) =>{
        /*alert(val);
        let newArray=answer.map((x) =>x);
        newArray.push(val);
        setAnswer(newArray);
        //answer.push(val);
        console.log(answer);*/
        setAnswer(Array.from(new Set([...answer,val])))


    }

    return (
        <>
            {/**{quiz.map((q, k) => (
            <div className='box question p-3 m-3 my-5'>
                <img src={question.img} alt="Question image" />
                <div className="tags">
                    {shuffleArray(question.sentence.split(" ")).map((mot, k) => (
                        <span key={k} className="tag">{mot}</span>
                    ))}
                </div>
                
            </div>
            ))}*/}
            
            <div className='box question'>
                <img src="https://picsum.photos/200/300" alt="Question image" />
                <div className="tags">
                    {shuffleArray(sentence.split(" ")).map((mot, k) => (
                        <span key={k} style={{cursor:'pointer'}} className="tag" onClick={() =>onTagClick(mot)}>{mot}</span>
                    ))}
                </div>
                <hr />
                <div className="tags">
                    {answer.map((mot, k) => (
                        <span key={k} className="tag">{mot}</span>
                    ))}
                </div>
            </div>
            <hr />
            <div className='answer'>
                <div className="tags">
                    <span className="tag">One</span>
                    <span className="tag">Two</span>
                    <span className="tag">Three</span>
                </div>
            </div>
        </>
    )
}

export default App