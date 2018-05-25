let isSmall = () => {
    let mql = window.matchMedia("(max-width: 479px)");
    if(mql.matches){
        return true;
    }else{
        return false;
    }
}

let isMedium = () => {
    let mql = window.matchMedia("(min-width: 480px) and (max-width: 959px)");
    if(mql.matches){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isSmall,
    isMedium
}