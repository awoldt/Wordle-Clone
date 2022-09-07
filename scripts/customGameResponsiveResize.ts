export default (
  keyboardDimentions: string[],
  changeKeyboardSize: React.Dispatch<React.SetStateAction<string[]>>,
  gd: string[],
  setGD: React.Dispatch<React.SetStateAction<string[]>>
) => {
  window.addEventListener("resize", () => {
    const w = window.innerWidth;

    //GRID
    if (w >= 1400) {
      if (gd[0] !== "80px") {
        const x: string[] = ["5%", "65px", "26px"];
        setGD(x);
      }
    } else if (w >= 1200) {
      if (gd[0] !== "75px") {
        const x: string[] = ["5%", "60px", "24px"];
        setGD(x);
      }
    } else if (w >= 992) {
      if (gd[0] !== "70px") {
        const x: string[] = ["5%", "50px", "22px"];
        setGD(x);
      }
    } else if (w >= 768) {
      if (gd[0] !== "70px") {
        const x: string[] = ["5%", "40px", "20px"];
        setGD(x);
      }
    } else if (w >= 576) {
      if (gd[0] !== "60px") {
        const x: string[] = ["5%", "35px", "18px"];
        setGD(x);
      }
    } else {
      if (gd[0] !== "50px") {
        const x: string[] = ["5%", "26px", "16px"];
        setGD(x);
      }
    }

    //keyoboard
    if (w >= 1400) {
      if (keyboardDimentions[0] !== "70px") {
        const x = ["70px", "70px", "28px"];
        changeKeyboardSize(x);
      }
    } else if (w >= 1200) {
      if (keyboardDimentions[0] !== "70px") {
        const x = ["70px", "70px", "28px"];
        changeKeyboardSize(x);
      }
    } else if (w >= 992) {
      if (keyboardDimentions[0] !== "60px") {
        const x = ["60px", "60px", "25px"];
        changeKeyboardSize(x);
      }
    } else if (w >= 768) {
      if (keyboardDimentions[0] !== "55px") {
        const x = ["55px", "55px", "22px"];
        changeKeyboardSize(x);
      }
    } else if (w >= 576) {
      if (keyboardDimentions[0] !== "37px") {
        const x = ["37px", "37px", "18px"];
        changeKeyboardSize(x);
      }
    } else {
      if (keyboardDimentions[0] !== "28px") {
        const x = ["29px", "29px", "16px"];
        changeKeyboardSize(x);
      }
    }
  });
};
