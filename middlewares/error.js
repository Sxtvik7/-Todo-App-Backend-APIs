// ----Getting Some Error While Using this Middleware will fix that in Future/ not using it

class ErrorHandler extends Error {
    constructor(errorMessage, statusCode){
        super(errorMessage);     
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
