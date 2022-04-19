import React, { useEffect, useState } from 'react'
import { user } from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../../images/closeIcon.png";
import { CircularProgress } from '@mui/material';
import swl from 'sweetalert';

let socket;

const ENDPOINT = "https://demo-cchat.herokuapp.com/";

const Chat = ({value}) => {
    console.log(value)
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])
    const [Con, setCon] = useState(false)

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }

    console.log(messages);
    useEffect(() => {

        socket = socketIo(ENDPOINT, { transports: ['websocket'] });
        
        socket.on('connect', () => {
            swl({
                title: "Connected",
                icon: "success",
                button: "Continue",
                timer: 1500
            }).then(() => {
                setCon(true)
            })
            

            // alert('Connected');
            setid(socket.id);

        })
        console.log(socket);
        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])

    return (
        <>
        {Con ?
        <div className="chatPage">            
            <div className="chatContainer">
                <div className="header">
                    <h2>Peanuts Group</h2>
                    <a href="/"> <img src={closeIcon} alt="Close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn"><img src={sendLogo} alt="Send" /></button>
                </div>
            </div>
        
        
        </div>
        :
        <div className="loader" style={{width:"100%",height:"calc(100vh - 110px)",display:"grid",placeItems:"center"}}>
        <CircularProgress color="success"/>
        </div>}
        </>
    )
}

export default Chat
