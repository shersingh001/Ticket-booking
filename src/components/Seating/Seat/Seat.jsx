import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Seat.module.css';
import { useDispatch } from 'react-redux';
import { action } from '../../../Store/index';

const Seat = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [userName, setUserName] = useState("")
    const [valid, setValid] = useState(false);
    const [process, setProcess] = useState(false);
    let dispatch = useDispatch();

    const userNameHandler = (event) => {
        setUserName(event.target.value)
    }

    const tableValue = (event) => {
        if(event.target.checked === true){
            setValid(true)
            setProcess(true)
            setSelectedSeats((pre) => {
                return [...pre, event.target.value]
            })
        }
        else{
            for(let i = 0; i < selectedSeats.length; i++){
                if(selectedSeats.includes(selectedSeats[i])){
                    setSelectedSeats(selectedSeats.filter(seat => seat !==event.target.value ))
                }
            }
            if(selectedSeats.length === 0){
                setValid(false)
            }
        }
    };

    const confirmHandler = (event) => {
        event.preventDefault();
        if(userName !== ""){
            setProcess(true)
            dispatch(action.user(userName))
        }else{
            alert("Please fill User Name")
            return
        }
        if(selectedSeats.length > 0){
        dispatch(action.selected(selectedSeats))
        }
        else{
            alert("Please Choose Seat for Booking!")
            return
        }
        }

    return(
        <section className={style.main}>
        <div className={style.userDetail}>
            <label htmlFor="name">USERNAME :- </label>
            <input onChange={userNameHandler} type="text" name="user" className={style.userNameInput} placeholder="Type name here..."/>
        </div>
        <div className={style.main_box}>
            <table onChange={tableValue}>
                <tbody>
                    <tr>
                        <tr>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th>A</th>
                            <td><input type="checkbox" value="A1" /></td>
                            <td><input type="checkbox" value="A2" /></td>
                            <td><input type="checkbox" value="A3" /></td>
                            <td><input type="checkbox" value="A4" /></td>
                            <td><input type="checkbox" value="A5" /></td>
                            <td><input type="checkbox" value="A6" /></td>
                            <td><input type="checkbox" value="A7" /></td>
                            <td><input type="checkbox" value="A8" /></td>
                            <td><input type="checkbox" value="A9" /></td>
                            <td><input type="checkbox" value="A10" /></td>
                        </tr>
                        <tr>
                            <th>B</th>
                            <td><input type="checkbox" value="B1" /></td>
                            <td><input type="checkbox" value="B2" /></td>
                            <td><input type="checkbox" value="B3" /></td>
                            <td><input type="checkbox" value="B4" /></td>
                            <td><input type="checkbox" value="B5" /></td>
                            <td><input type="checkbox" value="B6" /></td>
                            <td><input type="checkbox" value="B7" /></td>
                            <td><input type="checkbox" value="B8" /></td>
                            <td><input type="checkbox" value="B9" /></td>
                            <td><input type="checkbox" value="B10" /></td>
                        </tr>
                        <tr>
                            <th>C</th>
                            <td><input type="checkbox" value="C1" /></td>
                            <td><input type="checkbox" value="C2" /></td>
                            <td><input type="checkbox" value="C3" /></td>
                            <td><input type="checkbox" value="C4" /></td>
                            <td><input type="checkbox" value="C5" /></td>
                            <td><input type="checkbox" value="C6" /></td>
                            <td><input type="checkbox" value="C7" /></td>
                            <td><input type="checkbox" value="C8" /></td>
                            <td><input type="checkbox" value="C9" /></td>
                            <td><input type="checkbox" value="C10" /></td>
                        </tr>
                        <tr>
                            <th>D</th>
                            <td><input type="checkbox" value="D1" /></td>
                            <td><input type="checkbox" value="D2" /></td>
                            <td><input type="checkbox" value="D3" /></td>
                            <td><input type="checkbox" value="D4" /></td>
                            <td><input type="checkbox" value="D5" /></td>
                            <td><input type="checkbox" value="D6" /></td>
                            <td><input type="checkbox" value="D7" /></td>
                            <td><input type="checkbox" value="D8" /></td>
                            <td><input type="checkbox" value="D9" /></td>
                            <td><input type="checkbox" value="D10" /></td>
                        </tr>
                        <tr>
                            <th>E</th>
                            <td><input type="checkbox" value="E1" /></td>
                            <td><input type="checkbox" value="E2" /></td>
                            <td><input type="checkbox" value="E3" /></td>
                            <td><input type="checkbox" value="E4" /></td>
                            <td><input type="checkbox" value="E5" /></td>
                            <td><input type="checkbox" value="E6" /></td>
                            <td><input type="checkbox" value="E7" /></td>
                            <td><input type="checkbox" value="E8" /></td>
                            <td><input type="checkbox" value="E9" /></td>
                            <td><input type="checkbox" value="E10" /></td>
                        </tr>
                        <tr>
                            <th>F</th>
                            <td><input type="checkbox" value="F1" /></td>
                            <td><input type="checkbox" value="F2" /></td>
                            <td><input type="checkbox" value="F3" /></td>
                            <td><input type="checkbox" value="F4" /></td>
                            <td><input type="checkbox" value="F5" /></td>
                            <td><input type="checkbox" value="F6" /></td>
                            <td><input type="checkbox" value="F7" /></td>
                            <td><input type="checkbox" value="F8" /></td>
                            <td><input type="checkbox" value="F9" /></td>
                            <td><input type="checkbox" value="F10" /></td>
                        </tr>
                        <tr>
                            <th>G</th>
                            <td><input type="checkbox" value="G1" /></td>
                            <td><input type="checkbox" value="G2" /></td>
                            <td><input type="checkbox" value="G3" /></td>
                            <td><input type="checkbox" value="G4" /></td>
                            <td><input type="checkbox" value="G5" /></td>
                            <td><input type="checkbox" value="G6" /></td>
                            <td><input type="checkbox" value="G7" /></td>
                            <td><input type="checkbox" value="G8" /></td>
                            <td><input type="checkbox" value="G9" /></td>
                            <td><input type="checkbox" value="G10" /></td>
                        </tr>
                        <tr>
                            <th>H</th>
                            <td><input type="checkbox" value="H1" /></td>
                            <td><input type="checkbox" value="H2" /></td>
                            <td><input type="checkbox" value="H3" /></td>
                            <td><input type="checkbox" value="H4" /></td>
                            <td><input type="checkbox" value="H5" /></td>
                            <td><input type="checkbox" value="H6" /></td>
                            <td><input type="checkbox" value="H7" /></td>
                            <td><input type="checkbox" value="H8" /></td>
                            <td><input type="checkbox" value="H9" /></td>
                            <td><input type="checkbox" value="H10" /></td>
                        </tr>
                        <tr>
                            <th>I</th>
                            <td><input type="checkbox" value="I1" /></td>
                            <td><input type="checkbox" value="I2" /></td>
                            <td><input type="checkbox" value="I3" /></td>
                            <td><input type="checkbox" value="I4" /></td>
                            <td><input type="checkbox" value="I5" /></td>
                            <td><input type="checkbox" value="I6" /></td>
                            <td><input type="checkbox" value="I7" /></td>
                            <td><input type="checkbox" value="I8" /></td>
                            <td><input type="checkbox" value="I9" /></td>
                            <td><input type="checkbox" value="I10" /></td>
                        </tr>
                    </tr>
                </tbody>
            </table>
            </div>
            {valid && <div className={style.btn}>
                <p onClick={confirmHandler}><Link to={process && "/ticket-confirm"}>{`Proceed to Payment $${selectedSeats.length*100}.00`}</Link></p>
            </div>}
        </section>
    )
};

export default Seat;