import { FC } from "react";
import { useFormStatus } from "react-dom";

export const SubmitButton: FC = () => {
    const {pending} = useFormStatus()

    
    return (
        <button disabled={pending} type="submit" className="mui-btn mui-btn--primary">
            {pending ? 'Logging in...' : 'Login'}
          
        </button>
        
    )
}