class ApiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        errors = [],
        stack="" // i have changed something so check if got error
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success = false
        this.errors = errors


        if(stack){
            this.stack=stack  // i have changed something so check if got error
        }else{
            Error.captureStackTrace(this,this.constructor)// Is V8-specific ,works in node and chrome ,on other engines it may be udefined
        }
    }
}

export {ApiError}