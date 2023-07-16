import pool from "../configs/connectDb";

let getHomepage = async (req, res) => {
    //logic
    let data = [];
    const [rows, fields] = await pool.execute("SELECT * FROM `user` ");
    return res.render("index.ejs", {
        dataUser: rows,
        test: ">>check String",
    });
};

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from user where id = ?`, [
        userId,
    ]);

    return res.send(JSON.stringify(user));
};

module.exports = {
    getHomepage,
    getDetailPage,
};
