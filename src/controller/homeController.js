import connection from "../configs/connectDb";

let getHomepage = (req, res) => {
    //logic
    let data = [];
    connection.query("SELECT * FROM `user` ", function (err, results, fields) {
        results.map((row) => {
            data.push({
                id: row.id,
                email: row.email,
                lastName: row.lastName,
                firstName: row.firstName,
                address: row.address,
            });
        });
        return res.render("index.ejs", { dataUser: data });
    });
};

module.exports = {
    getHomepage,
};
