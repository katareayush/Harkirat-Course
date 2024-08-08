const express= require('express');
const app =express();

app.use(express.json());

function isMiddlewareOldenough(req,res,next){
  const age= req.query.age;
  if(age>=14){
    next();
  }
  else{
    res.json({msg:"Sorry you are not old enough to access this resource"
      })
    }
  }
  
// app.use(isMiddlewareOldenough); //this will run for all routes
app.get("/ride1", isMiddlewareOldenough, function(req,res){ //we can remove the isMiddlewareOldenough from here as we have added it to the app.use
  res.json({msg:"You have succesfully booked a ride 1!"
    })
})

app.get("/ride2",isMiddlewareOldenough, function(req,res){
  res.json({msg:"You have succesfully booked a ride 2!"
  })
})

app.listen(3000);