// https://github.com/bikashpaulbp/assignment.js

function kilometerToMeter(kilo){
    var result = 1000 * kilo;
    return result;
}


function budgetCalculator(watch, mobile, laptop){
   var watchPrice = watch * 50;
   var mobilePrice = mobile * 100;
   var laptopPrice = laptop * 500;
   var totalBudget = watchPrice + mobilePrice + laptopPrice;
    return totalBudget;
    
}


function hotelCost(day){
    
    var totalCost = 0;

    for(var i=1; i<=day; i++){


        if(i <= 10){
            totalCost = totalCost +  100;
        }
        
        else if(i >= 11 && i <= 20 ){

            totalCost = totalCost +  80;
        }

       else {

             totalCost = totalCost +  50;
        }

        
    }

    
    return totalCost;

}



function megaFriend(friendList){

    

    if(friendList.length == 0){
        return "Empty List";
    }

    var maxName = friendList[0];

    for(var i=1; i<friendList.length; i++){

        if(maxName.length < friendList[i].length){
            maxName = friendList[i];
        }
    }
    
    return maxName;
}

