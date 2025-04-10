function billing(veh, dur){
    dur = Math.ceil(dur)
    if (veh== 'Car'){
        if (dur > 24){
            return 5000 + (3000*(dur-1)) + 50000
        }
        return 5000 + (3000*(dur-1))
    }
    if (dur > 24){
        return 2000 + (1000*(dur-1)) + 20000
    }
    return 2000 + (1000*(dur-1))
}

module.exports = billing;

// console.log(billing('Car',3))
// console.log(billing('bike',1))
// console.log(billing('Car',27))
// console.log(billing('bike',27))