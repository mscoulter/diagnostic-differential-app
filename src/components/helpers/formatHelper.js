export const formatText = (input) => {
   return input.toLowerCase()
            .replace(/\s|-/g,"_")
            .replace(/'/g,"");
}
