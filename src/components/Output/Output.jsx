import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";
import style from './Output.module.css';
import {RxArrowLeft} from 'react-icons/rx';


const Output = () => {
    const [valid, setValid] = useState(false);
    const [confirm, setConfirm] = useState(true)
    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");
    const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
        total,
        hours,
        minutes,
        seconds,
    };
};
    const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };
    const clearTimer = (e) => {
    setTimer("00:00:10");
        if (Ref.current) clearInterval(Ref.current);
            const id = setInterval(() => {
            startTimer(e);
            }, 1000);
    Ref.current = id;
};
    const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    setTimeout(() => {
        setValid(true)
    },10000)
    return deadline;
};
    useEffect(() => {
    clearTimer(getDeadTime());
    }, []);

const data = useSelector((state) => {
    return [state.seat.seatData]
})

const userName = useSelector((state) => {
    return state.seat.userName
})

const ticketSubmitHandler = () => {
    setConfirm(false)
}

const backToHomeHandler = () => {
    setConfirm(true)
}

return (
    <div className="App">
    {confirm && <Card className={style.main_OutputBox}>
        <span>{valid && <Link to={"/seating"}>{<RxArrowLeft />}</Link>}</span>
        <div className={style.countDown_Timer}>
            <h2>Count Down Timer</h2>
            <h3>{timer}</h3>
        </div>
        <div className={style.user_seatDetails}>
            <h4>Ticket Booking informations</h4>
             <h2>{`User Name :- ${userName}`}</h2>
            <h2>{`Seat No = ${data}`}</h2>
            <h2>{`Total Amount :- $${data[0].length*100}`}</h2>
        </div>
        <div className={style.submit_btn}>
            <button onClick={ticketSubmitHandler}>Submit</button>
        </div>
    </Card>}
    {!confirm && <div className={style.successfully_submit}>
        <p>Your Ticket is SuccessFully Submited!</p>
        <div className={style.back_button}>
            <Link onClick={backToHomeHandler} to={"/"}>Go to home</Link>
            </div>
        </div>}
    </div>
    );
};

export default Output;
