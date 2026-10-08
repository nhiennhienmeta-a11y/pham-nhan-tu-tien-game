/* =========================================
   PHÀM NHÂN TU TIÊN
   HỆ THỐNG GAME
   ========================================= */


/* =========================================
   DỮ LIỆU NHÂN VẬT
   ========================================= */

const player = {

    name: "Chưa tạo",

    gender: "nam",

    age: 16,

    realm: "Phàm nhân",

    spirit: 0,

    spiritStone: 0

};


/* =========================================
   TẠO NHÂN VẬT
   ========================================= */

function createCharacter() {

    const nameInput =
        document.getElementById("character-name");

    const genderInput =
        document.getElementById("character-gender");

    const ageInput =
        document.getElementById("character-age");


    if (!nameInput || !genderInput || !ageInput) {

        console.error(
            "Không tìm thấy giao diện tạo nhân vật."
        );

        return;
    }


    const name =
        nameInput.value.trim();

    const gender =
        genderInput.value;

    const age =
        Number(ageInput.value);


    /* Kiểm tra tên */

    if (!name) {

        alert("Hãy nhập tên nhân vật.");

        nameInput.focus();

        return;
    }


    /* Kiểm tra tuổi */

    if (!Number.isInteger(age) || age < 1 || age > 100) {

        alert("Tuổi nhân vật phải từ 1 đến 100.");

        ageInput.focus();

        return;
    }


    /* Cập nhật nhân vật */

    player.name = name;

    player.gender = gender;

    player.age = age;

    player.realm = "Phàm nhân";

    player.spirit = 0;

    player.spiritStone = 0;


    /* Lưu game */

    savePlayer();


    /* Cập nhật giao diện */

    updatePlayerUI();


    /* Ẩn màn hình tạo nhân vật */

    const creationScreen =
        document.getElementById("character-creation");

    const gameScreen =
        document.getElementById("game-screen");


    if (creationScreen) {

        creationScreen.classList.add("hidden");

    }


    if (gameScreen) {

        gameScreen.classList.remove("hidden");

    }


    /* Đưa người chơi về mở đầu */

    showBeginning();

}


/* =========================================
   LƯU NHÂN VẬT
   ========================================= */

function savePlayer() {

    localStorage.setItem(
        "phamNhanPlayer",
        JSON.stringify(player)
    );

}


/* =========================================
   TẢI NHÂN VẬT
   ========================================= */

function loadPlayer() {

    const savedPlayer =
        localStorage.getItem("phamNhanPlayer");


    if (!savedPlayer) {

        return false;

    }


    try {

        const data =
            JSON.parse(savedPlayer);


        player.name =
            data.name || "Chưa tạo";

        player.gender =
            data.gender || "nam";

        player.age =
            data.age || 16;

        player.realm =
            data.realm || "Phàm nhân";

        player.spirit =
            data.spirit || 0;

        player.spiritStone =
            data.spiritStone || 0;


        return true;

    }

    catch (error) {

        console.error(
            "Không thể tải dữ liệu nhân vật:",
            error
        );

        return false;

    }

}


/* =========================================
   CẬP NHẬT THÔNG TIN TRÊN MÀN HÌNH
   ========================================= */

function updatePlayerUI() {

    const nameElement =
        document.getElementById("player-name");

    const realmElement =
        document.getElementById("player-realm");

    const spiritElement =
        document.getElementById("player-spirit");

    const stoneElement =
        document.getElementById("player-stone");


    if (nameElement) {

        nameElement.textContent =
            player.name;

    }


    if (realmElement) {

        realmElement.textContent =
            player.realm;

    }


    if (spiritElement) {

        spiritElement.textContent =
            player.spirit;

    }


    if (stoneElement) {

        stoneElement.textContent =
            player.spiritStone;

    }

}


/* =========================================
   MÀN HÌNH MỞ ĐẦU
   ========================================= */

function showBeginning() {

    const storyTitle =
        document.getElementById("story-title");

    const storyText =
        document.getElementById("story-text");


    if (!storyTitle || !storyText) {

        return;

    }


    storyTitle.textContent =
        "Sơn Biên Tiểu Thôn";


    storyText.innerHTML = `

        <p>
            ${player.name}, ngươi chỉ là một phàm nhân
            bình thường sống tại một sơn thôn nhỏ.
        </p>

        <p>
            Cuộc sống vốn bình lặng,
            cho đến ngày một người xa lạ xuất hiện
            trước cửa thôn.
        </p>

        <p>
            Ngươi không biết rằng cuộc gặp gỡ này
            sẽ mở ra một con đường hoàn toàn khác
            trong cuộc đời mình.
        </p>

    `;

}


/* =========================================
   HỆ THỐNG LỰA CHỌN
   ========================================= */

function choose(choice) {

    const storyTitle =
        document.getElementById("story-title");

    const storyText =
        document.getElementById("story-text");


    if (!storyTitle || !storyText) {

        return;

    }


    /* ==============================
       LỰA CHỌN 1
       ============================== */

    if (choice === 1) {

        storyTitle.textContent =
            "Người lạ";


        storyText.innerHTML = `

            <p>
                ${player.name} bước lên phía trước.
            </p>

            <p>
                Người kia mặc một bộ trường bào màu xanh,
                ánh mắt bình tĩnh quan sát ngươi.
            </p>

            <p>
                "Tiểu tử, ngươi có biết nơi này
                có người nào tên là Mặc đại phu không?"
            </p>

            <p>
                Ngươi chưa từng nghe đến cái tên này.
            </p>

        `;

    }


    /* ==============================
       LỰA CHỌN 2
       ============================== */

    else if (choice === 2) {

        storyTitle.textContent =
            "Quan sát";


        storyText.innerHTML = `

            <p>
                ${player.name} không tiến lên.
            </p>

            <p>
                Từ xa, ngươi lặng lẽ quan sát người kia.
            </p>

            <p>
                Có điều gì đó rất kỳ lạ.
            </p>

            <p>
                Người này rõ ràng không giống những người
                bình thường trong sơn thôn.
            </p>

        `;

    }


    /* ==============================
       LỰA CHỌN 3
       ============================== */

    else if (choice === 3) {

        storyTitle.textContent =
            "Rời đi";


        storyText.innerHTML = `

            <p>
                ${player.name} quyết định không dây dưa
                với người lạ.
            </p>

            <p>
                Ngươi xoay người rời khỏi nơi này.
            </p>

            <p>
                Nhưng ngươi không biết rằng,
                quyết định này sẽ ảnh hưởng đến
                vận mệnh của ngươi sau này.
            </p>

        `;

    }

}


/* =========================================
   KHỞI ĐỘNG GAME
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const hasPlayer =
            loadPlayer();


        if (hasPlayer) {

            updatePlayerUI();


            const creationScreen =
                document.getElementById(
                    "character-creation"
                );


            const gameScreen =
                document.getElementById(
                    "game-screen"
                );


            if (creationScreen) {

                creationScreen.classList.add(
                    "hidden"
                );

            }


            if (gameScreen) {

                gameScreen.classList.remove(
                    "hidden"
                );

            }


            showBeginning();

        }

    }
);
