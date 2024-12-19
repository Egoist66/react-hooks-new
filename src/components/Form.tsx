import { FC, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { SubmitButton } from "./SubmitButton";

export const Form: FC = () => {
  const { state, submitAction } = useForm();


  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <form action={submitAction} className="mui-form">
      <legend>Login</legend>
      <div className="mui-textfield">
        <input name="email" type="email" placeholder="Email" />
      </div>
      <div className="mui-textfield">
        <input name="password" type="password" placeholder="Password" />
      </div>

      <SubmitButton />

      {state.data && !state.error && <p>{state.data.email} Logged In</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
};
