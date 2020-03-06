import random from "js/utils.js";

const resolveAfter2Seconds = () => {

    return new Promise(resolve => {
                            setTimeout(() => {
                                resolve('resolved');
                            }, random(2000));
                        });
}
  
const asyncCall = async (number) =>  {

    const result = await resolveAfter2Seconds();

    console.log(result + number);
}
  
// asyncCall(1)
// asyncCall(2)
// asyncCall(3)

