function joinArrayRemoveDuplicate(arrayA: string[], arrayB: string[]): string[] {
    const jadiSatu: string[] = [...arrayA, ...arrayB];
    const arrayTemp: string[] = [];

    for (let i = 0; i < jadiSatu.length; i++) {
        if (!arrayTemp.includes(jadiSatu[i])) {
            arrayTemp.push(jadiSatu[i]);
        }
    }

    return arrayTemp;
}

console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));

console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));

console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));

console.log(joinArrayRemoveDuplicate(["laptop", "gitar","Hello","Monitor"], ["laptop","gitar","kamu"]));
