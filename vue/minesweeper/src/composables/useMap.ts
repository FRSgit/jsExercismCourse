import { ref, Ref, watch } from "vue";

export const MAP_BOMB_NUMBER = 5;
const MAP_SIZE = 10;

const generateMap = (bombNumber: number): string[] => {
    const map = new Array(MAP_SIZE)
        .fill(0)
        .map(() => new Array(MAP_SIZE).fill(' '));
    const temp = new Array(MAP_SIZE*MAP_SIZE)
        .fill(0)
        .map((_val, index) => index);

    for(let i = 0; i < bombNumber; ++i){
        const index_temp = Math.floor(Math.random() * temp.length);
        const pos = temp[index_temp];
        const y = Math.floor(pos / MAP_SIZE);
        const x = pos % MAP_SIZE;
        map[y][x] = '*';
        temp.splice(index_temp, 1);
    }

    return map.map(val => val.join(''));
};

export const useMap = (bombNumber: Ref<number>): { map: Ref<string[]>, reset: ()=> void } => {
    const map = ref(generateMap(bombNumber.value));
    const reset = () => map.value = generateMap(bombNumber.value);
    watch(bombNumber, (bombNumber) => map.value = generateMap(bombNumber));

    return { map, reset };
};
