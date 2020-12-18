const addRooms = (data) => {
    let { rooms, adults } = data
    
    if (adults === rooms) {
        rooms++
        adults++
    } else {
        rooms++
    }
    return {...data, rooms, adults}
}

const addAdults = (data) => {
    let { rooms, adults, children } = data
    adults ++
    const totalMembers = adults + children 
    if(totalMembers > 20) {
        adults --
    } else {
        if(rooms * 4 < totalMembers) {
            if(rooms === 5) {
                adults --
            } else {
                rooms ++
            }
        }
    }
    return {...data, rooms, adults}
}

const addChildren = (data) => {
    let { rooms, adults, children } = data
    children ++
    const totalMembers = adults + children 
    if(totalMembers > 20) {
        children --
    } else {
        if(rooms * 4 < totalMembers) {
            rooms ++
            if (rooms > adults){
                adults++
            }
        }
    }
    return {...data, rooms, adults, children}
}


const reduceRooms = (data) => {
    let { rooms, adults, children } = data
    let totalMembers = adults + children
    rooms--
    while(rooms * 4 < totalMembers) {
        if(children > 0) {
            children --
        } else {
            adults --
        }
        totalMembers = adults + children
    }
    return {...data, rooms, adults, children}
}

const reduceAdults = (data) => {
    let { rooms, adults, children } = data
    const totalMembers = adults + children 
    if (rooms === adults) {
        adults --
        rooms --
    } else {
        adults --
    }
    return {...data, rooms, adults}
}

const reduceChildren = (data) => {
    let { rooms, adults, children } = data
    const totalMembers = adults + children 
    // if(totalMembers % 4 === 0) {
    //     children --
    //     // rooms --
    //     if (rooms > adults){
    //         // adults--
    //     }
    // }
    // else {
        children --
    //}
    return {...data, rooms, adults, children}
}



export default {
    addRooms, addAdults, addChildren, reduceRooms, reduceAdults, reduceChildren
}