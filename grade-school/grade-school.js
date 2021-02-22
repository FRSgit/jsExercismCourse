//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    #data = {};

    roster() {
        const obj = {...this.#data };
        for (let fieldname in obj) {
            obj[fieldname] = [...this.#data[fieldname]];
        }
        return obj;
    }

    add(name, grade) {
        for (let fieldname in this.#data) {
            this.#data[fieldname] = this.#data[fieldname]
                .filter(name2 => name !== name2);
        }
        if (!this.#data[grade]) this.#data[grade] = [];
        this.#data[grade].push(name);
        this.grade(grade);
    }

    grade(gradeNumber) {
        return !this.#data[gradeNumber] 
            ? [] 
            : [...this.#data[gradeNumber].sort()];
    }
}