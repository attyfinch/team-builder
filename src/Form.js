import React from "react";


export default function Circus(props) {
const { submit, change, values } = props;

const submitForm = (e) => {
    e.preventDefault();
    submit();
}
    
    return (
        <form className="form" onSubmit={submitForm}>
            <div className="formField">
                <label className="name">Name 
                    <input
                    type="text"
                    name="name"
                    placeholder="type your name here"
                    value={values.name}
                    onChange={change}
                    maxLength="60"
                    />
                </label>
            </div>
            <div className="formField">
                <label className="act">What's your act?
                    <select name="act" onChange={change}>
                        <option value="">Select an act</option>
                        <option value="Clown">Clown</option>
                        <option value="Trapeze Artiste">Trapeze Artiste</option>
                        <option value="Lion Tamer">Lion Tamer</option>
                        <option value="fFire Eaterire">Fire Eater</option>
                        <option value="Juggler Extraordinaire">Juggler Extraordinaire</option>
                        <option value="Magician">Magician</option>
                        <option value="Fortune Teller">Fortune Teller</option>
                    </select> 
                </label>
            </div>
            <div className="formField">
                <label> Do you have health insurance?
                    <input
                    className="checkbox" 
                    name="insurance"
                    type="checkbox"
                    onChange={change}
                    value={values.insurance}
                    />
                </label>
            </div>
            <br>
            </br>
            <div className="submitButton">
            <input type='submit' value="Join Now!"/>
            </div>
        </form>
    )


}