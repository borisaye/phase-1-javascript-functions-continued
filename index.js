
function saturdayFun(satActivity = "roller-skate"){

    return `This Saturday, I want to ${satActivity}!`


}

function mondayWork(monWork = "go to the office"){

    return `This Monday, I will ${monWork}.`

}

function wrapAdjective(charWrap = "*"){
    const msgAdj = function(AdjDesc = "Special"){

    return `You are ${charWrap}${AdjDesc}${charWrap}!`;


    }
    return msgAdj;
}