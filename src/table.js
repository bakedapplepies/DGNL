const style = window.getComputedStyle(document.body)

const color1 = style.getPropertyValue("--color1");
const color2 = style.getPropertyValue("--color2");
const color3 = style.getPropertyValue("--color3");
const color4 = style.getPropertyValue("--color4");

function create_cell(current_row, text)
{
    var cell = current_row.insertCell();
    // cell.style.borderRadius = "10px"
    cell.append(document.createTextNode(text));
}

async function create_table1() {
    const response = await fetch("src/first.json");
    const json = await response.json();
    const subjects = json["subjects"];  // List

    const table = document.createElement("table");
    table.style.marginTop = "20px";
    table.style.width = "100%";
    const current_row = table.insertRow();
    create_cell(current_row, "Phần thi");
    create_cell(current_row, "Kết quả đợt 1");
    create_cell(current_row, "Mức độ tự tin");
    create_cell(current_row, "Mục tiêu đợt 2");

    subjects.forEach(element => {
        const subject = element["name"];
        const score1 = element["score1"];
        const confidence = element["confidence"];
        const score2_target = element["score2target"];

        const current_row = table.insertRow();
        create_cell(current_row, subject);
        create_cell(current_row, score1);
        create_cell(current_row, confidence);
        create_cell(current_row, score2_target);
    });

    const table_div = document.getElementById("table-div1");
    table_div.appendChild(table);
}

async function create_table2() {
    const response = await fetch("src/second.json");
    const json = await response.json();
    const subjects = json["subjects"];  // List

    const table = document.createElement("table");
    table.style.marginTop = "20px";
    table.style.width = "100%";
    const current_row = table.insertRow();
    create_cell(current_row, "Phần thi");
    create_cell(current_row, "Mục tiêu đợt 2");
    create_cell(current_row, "Mức độ khả thi");
    create_cell(current_row, "Kế hoạch cải thiện");

    subjects.forEach(element => {
        const subject = element["name"];
        const score2_target = element["score2target"];
        const probable = element["probable"];
        const improvement_plan = element["improvement_plan"];

        const current_row = table.insertRow();
        create_cell(current_row, subject);
        create_cell(current_row, score2_target);
        create_cell(current_row, probable);
        create_cell(current_row, improvement_plan);
    });

    const table_div = document.getElementById("table-div2");
    table_div.appendChild(table);
}

function lerp(a, b, t) {
    return (1 - t) * a + t * b;
}

function rgb_to_string(color) {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

const backgroundStyle = document.querySelector("body");

window.onload = async () => {
    // backgroundStyle.style.backgroundColor = rgb_to_string(color_dark2);
    await create_table1();
    await create_table2();
}

window.addEventListener("scroll", () => {
    // BACKGROUND COLOR LERPING
    // const [r1, g1, b1] = [209, 79, 62];
    // const [r2, g2, b2] = [105, 41, 60];

    // const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight; 
    // console.log(limit)
    // const currentY = window.scrollY;
    // const threshold = limit / 3.0;
    // const percentage = ((Math.max(threshold, currentY) / limit) - (1.0/3.0)) * 1.5;

    // const [r, g, b] = [
    //     lerp(r1, r2, percentage),
    //     lerp(g1, g2, percentage),
    //     lerp(b1, b2, percentage)
    // ];

    // backgroundStyle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})