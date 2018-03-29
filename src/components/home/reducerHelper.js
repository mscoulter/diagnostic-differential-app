export const arrayMove = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
        let k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
   return arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
};