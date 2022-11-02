import { useState } from 'react';

function ScoreCalculator() {
    
    const [inputs, setInputs] = useState({
        id: 0,
    });

    // const [firstName, setFirstName] = useState('');

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        
        // validation can be done here
        let scoreFields = ["score1", "score2", "score3"];
        let scoreValidator = "";
        scoreFields.forEach((item, index, array)=>{
            scoreValidator = scoreValidator +
            'if(' + 
            '    (fieldName === "' + item.toString() + '") && ' + 
            '    (fieldValue > 100 || fieldValue < 0 || fieldValue === undefined || fieldValue.toString().trim() === "" || !fieldValue) ' + 
            '){' + 
            '     setErrors(values=>({...values, ' + item.toString() + ': "This field must be in 0 to 100.", ' + item + '_fieldClass: "error-field"}));' +
            '}else{' + 
            '     setErrors(values=>({...values, ' + item.toString() + ': "", ' + item.toString() + '_fieldClass: ""}));' + 
            '}';
        });
        console.log(scoreValidator);
        eval(scoreValidator);

        // let nameFields = ["first_name", "last_name"];
        // let nameValidator = "";
        // nameFields.forEach((item, index, array)=>{
        //     nameValidator = nameValidator + 
        //     'if(inputs.' + item + ' === undefined || inputs.' + item + ' === ""){' +
        //     '   setErrors(values=>({...values, ' + item + ': "This field is required.", ' + item + '_fieldClass: "error-field"}));' +
        //     '}else{' +
        //     '   setErrors(values=>({...values, ' + item + ': "", ' + item + '_fieldClass: ""}));' +
        //     '};' +
        //     'setInputs(values=>({...values,[fieldName]: fieldValue}));'
        //     ;
        // });
        // eval(nameValidator);


        // if(
        //     (fieldName === 'score1') && 
        //     (fieldValue > 99 || fieldValue < 0 || fieldValue === undefined || fieldValue.toString().trim() === '' || !fieldValue) 
        // ){
        //     setErrors(values=>({...values, score1: "This field must be less than 100, not below 0.", score1_fieldClass: 'error-field'}));
        // }else{
        //     setErrors(values=>({...values, score1: "", score1_fieldClass: ''}));
        // }

        setInputs(values=>({...values,[fieldName]: fieldValue}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // '   console.log("first name");' + 
        let name_fields = ['first_name', 'last_name'];
        let nameValidator = "";
        name_fields.forEach((item,index,array) => {
            nameValidator = nameValidator + 
            'if(inputs.' + item + ' === undefined || inputs.' + item + ' === ""){' +
            '   setErrors(values=>({...values, ' + item + ': "This field is required.", ' + item + '_fieldClass: "error-field"}));' +
            '}else{' +
            '   setErrors(values=>({...values, ' + item + ': "", ' + item + '_fieldClass: ""}));' +
            '};';
        });
        console.log(nameValidator);
        eval(nameValidator);
        
    }

    // col-sm-4
    // col-sm-8
    return(
        <div className="container">
            <div>
                <h2 className="h1">Score Calculator App</h2>
            </div>
           <form className="form"
                // onSubmit={handleSubmit}
                >
                <div className="row">
                    <div className="col border-box">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name: </label>
                            <input type="text" name="first_name" className={"form-control name-field mx-auto " + errors.first_name_fieldClass} value={inputs.first_name}/>
                            <div className="error_message">{errors.first_name}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name: </label>
                            <input type="text" name="last_name" className={"form-control name-field mx-auto " + errors.first_name_fieldClass} value={inputs.last_name}/>
                            <div className="error_message">{errors.last_name}</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col border-box">
                        <div className="form-group">
                            <label htmlFor="score1">Score 1 </label>
                            <input type="number" id="score1" name="score1" className={"form-control score-field mx-auto " + errors.score1_fieldClass} value={inputs.score1} min="0" max="100" onChange={handleChange}/>
                            <div className="error_message">{errors.score1}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="score2">Score 2 </label>
                            <input type="number" id="score2" name="score2" className={"form-control score-field mx-auto " + errors.score2_fieldClass} value={inputs.score2} min="0" max="100" onChange={handleChange}/>
                            <div className="error_message">{errors.score2}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="score3">Score 3 </label>
                            <input type="number" id="score3" name="score3" className={"form-control score-field mx-auto " + errors.score3_fieldClass} value={inputs.score3} min="0" max="100" onChange={handleChange}/>
                            <div className="error_message">{errors.score3}</div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" id="submit" name="submit" type="submit" onClick={handleSubmit}>Calculate Average</button>
            </form>
            <div className="row">
                <div className="col">
                    <div id="student_name">Student Name: {inputs.first_name.trim()} {inputs.last_name.trim()}</div>
                    <div id="result" className="average_score" name="average_score"></div>

                </div>
            </div>
        </div>
    );
}

export default ScoreCalculator;