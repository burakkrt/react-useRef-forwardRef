import {forwardRef} from "react";


const Input = forwardRef(function (props, ref) {

    return (
        <label className="block p-2 flex text-white bg-slate-500 w-full my-2 rounded p-3"
               style={{minWidth: "350px"}}>
            {props.children}
            <input className="ms-auto bg-slate-200 rounded mx-2 border border-slate-600 px-1 text-black" type="text"
                   ref={ref}/>
        </label>
    )
})

export default Input;