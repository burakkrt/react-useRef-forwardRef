import Input from './Input';
import {useRef} from "react";

export default function () {

    const nameInput = useRef(null);
    const subjectInput = useRef(null);
    const messageInput = useRef(null);

    function handleButton(e) {

        nameInput.current.focus();

        e.preventDefault()
    }


    return (
        <form className="grid place-content-center h-full">
            <Input ref={nameInput}>Name :</Input>
            <Input ref={subjectInput}>Subject :</Input>
            <Input ref={messageInput}>Message :</Input>
            <button className="bg-slate-700 text-white px-2 py-1 rounded mt-2 hover:bg-slate-500 duration-150"
                    onClick={(event) => {
                        nameInput.current.focus();
                        event.preventDefault();
                    }}>Focus
                Name Input
            </button>
            <button className="bg-slate-700 text-white px-2 py-1 rounded mt-2 hover:bg-slate-500 duration-150"
                    onClick={(event) => {
                        subjectInput.current.focus();
                        event.preventDefault();
                    }}>Focus
                Subject Input
            </button>
            <button className="bg-slate-700 text-white px-2 py-1 rounded mt-2 hover:bg-slate-500 duration-150"
                    onClick={(event) => {
                        messageInput.current.focus();
                        event.preventDefault();
                    }}>Focus
                Message Input
            </button>

        </form>
    )
}