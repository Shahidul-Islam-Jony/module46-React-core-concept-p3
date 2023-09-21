// creating custom hook
import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    //Returnnig array
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }
    // return [value, handleChange];
    const onChange = e => {
        setValue(e.target.value);
    }
    return {value, onChange};
}
export default useInputState;