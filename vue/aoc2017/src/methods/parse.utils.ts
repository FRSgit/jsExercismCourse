const parseInputToRows = (input:string) => input.split('\n');

export const parseToNumbers = (input:string) => 
    parseInputToRows(input)
        .map((row) => row.split(/\s+/)
            .map(value => parseInt(value))
        );

