const usersSentences = {
    register : "INSERT INTO `users`(`name`, `last_name`, `email`, `password`) VALUES(?, ?, ?, ?)",
    auth : "SELECT u.id, u.name, u.last_name, u.password as password FROM `users` u WHERE u.email = ?"
};

module.exports = usersSentences;