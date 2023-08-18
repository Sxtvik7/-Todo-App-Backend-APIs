class ErrorHandler extends Error {
    constructor(errorMessage, statusCode){
        super(errorMessage);     //super basiclly is constructor of parent class
        this.statusCode = statusCode;        
 }
}
const errorMiddleware = (err, req, res, next)=>{
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;


    return res.status(err.statusCode).json({
      success:false,
      errorMessage:err.message,
  },
  );
  } 
  
  module.exports = errorMiddleware;
  module.exports = ErrorHandler;