function range(start, end){
    if(end < start) {
        throw new Error("Range end index must larger than start index.");
    }
    const len = end - start;
    let res = new Array(len);
    let i = 0;
    while(i < len) { 
        res[i] = start + i;
        i = i + 1;
    }
    return res;
}
