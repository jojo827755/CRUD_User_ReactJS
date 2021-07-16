

export default function validator (options){
    var check ;
    function validate(inputElement , rule){
        var errorElement     =       inputElement.parentElement.querySelector('.form-message')
        var errorMessage = rule.test(inputElement.value)
                    
        if(errorMessage){
            errorElement.innerText=errorMessage;
            inputElement.parentElement.classList.add('invalid')
            return errorMessage;
        } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove('invalid')
            return undefined;
        }
    }
    var formElement = document.querySelector(options.form);
    if (formElement){
        console.log(formElement);
        formElement.onsubmit = function(e){
            var test;
            e.preventDefault();
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var result = validate(inputElement,rule);
                if(result){
                    test = result;
                }
            })
            if(!test){
                check = true
            }
            
            else {console.log(test);check= false}
            
        }


        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement     =       inputElement.parentElement.querySelector('.form-message')
            if(inputElement){
                inputElement.onblur = function(){
                    validate (inputElement , rule);
                }
                inputElement.oninput = function(){
                    errorElement.innerText="";
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }
    return check;
}

validator.isRequired = function(selector) {
    return {
        selector ,
        test(value){
            return value.trim() ? undefined : 'Input here'
        }
    }
}

validator.isEmail = function(selector){
    return {
        selector ,
        test(value){
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : 'Please input email'
        }
    }
}