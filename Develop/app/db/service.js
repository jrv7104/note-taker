import { promises as fs } from "fs";

let realPath;

export default {};

(async () => {
    realPath = await fs.realpath("./");
})();