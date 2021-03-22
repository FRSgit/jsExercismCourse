//type Grades = {[key:number]:string[]}
type Grades = Record<number, string[]>
export class GradeSchool {
    private data:Grades = {};

    roster():Grades {
        const obj = {...this.data };
        for (const fieldname in obj) {
            obj[fieldname] = [...this.data[fieldname]];
        }
        return obj;
    }

    add(name:string, grade:number):void {
        for (const fieldname in this.data) {
            this.data[fieldname] = this.data[fieldname]
                .filter(name2 => name !== name2);
        }
        if (!this.data[grade]) this.data[grade] = [];
        this.data[grade].push(name);
        this.grade(grade);
    }

    grade(gradeNumber:number):string[] {
        return !this.data[gradeNumber] 
            ? [] 
            : [...this.data[gradeNumber].sort()];
    }
}