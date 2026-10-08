const player = {
    name: "Chưa tạo",
    realm: "Phàm nhân",
    spirit: 0,
    spiritStone: 0
};


function choose(choice) {

    const storyTitle =
        document.getElementById("story-title");

    const storyText =
        document.getElementById("story-text");

    if (choice === 1) {

        storyTitle.textContent =
            "Người lạ";

        storyText.innerHTML = `
            <p>
                Ngươi bước lên phía trước.
            </p>

            <p>
                Người kia mặc một bộ trường bào màu xanh,
                ánh mắt bình tĩnh quan sát ngươi.
            </p>

            <p>
                "Tiểu tử, ngươi có biết nơi này có người
                nào tên là Mặc đại phu không?"
            </p>

            <p>
                Ngươi chưa từng nghe đến cái tên này.
            </p>
        `;

    }

    else if (choice === 2) {

        storyTitle.textContent =
            "Quan sát";

        storyText.innerHTML = `
            <p>
                Ngươi không tiến lên.
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

    else if (choice === 3) {

        storyTitle.textContent =
            "Rời đi";

        storyText.innerHTML = `
            <p>
                Ngươi quyết định không dây dưa với người lạ.
            </p>

            <p>
                Ngươi xoay người rời khỏi nơi này.
            </p>

            <p>
                Nhưng ngươi không biết rằng,
                quyết định này sẽ ảnh hưởng đến vận mệnh
                của ngươi sau này.
            </p>
        `;
    }

}
