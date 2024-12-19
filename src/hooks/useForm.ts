import { useActionState } from "react";
import { fakeLogin } from "../api/fake-api"


type ReturnActionState = {
    data: {email: string, password: string} | null,
    error: string | null
}

export const useForm = () => {

    const auth = async (prevState: any, formData: FormData): Promise<ReturnActionState> => {
        const email = formData.get('email')
        const password = formData.get('password')


        try {
            const response = await fakeLogin(email as string, password as string)
            return { data: response as ReturnActionState['data'], error: null }
        }
        catch (error) {
            return {...prevState, error: (error as Error).message}
        }

        
    }

    const [state, submitAction] = useActionState(auth, {
        data: null,
        error: null
    })


    return {
        state,
        submitAction
    }

}