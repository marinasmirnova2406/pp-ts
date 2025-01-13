import React, { ReactNode } from "react";

interface InputGroupProps {
    additionalClass?: string;
    content: ReactNode;
    type?: "checkbox" | "date" | "datetime-local" | "email" | "number" | "password" | "radio" | "tel" | "text" | "time";
  }
  const InputGroup: React.FC<InputGroupProps> = ({
    additionalClass = "",
    type
    
  }) => {

    const isCheckbox = type === "checkbox";




    return (

        <div className="input-group">



        <div className="registration-form__input-group">
          <label htmlFor="username">
            Text
          </label>
          <input type="text" id="username" name="username" required />
        </div>


        <div className="registration-form__error">Username Error</div>

      </div>








    );
  };
  
  export { InputGroup };