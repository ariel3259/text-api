const notesBlockSentences = {
    readAll : "SELECT t.id, t.Title, t.Description FROM `text_block` t INNER JOIN `users` u on t.id_user=u.id WHERE t.id_user = ? and state = 1",
    readByTitle : "SELECT t.id, t.title, t.description FROM `text_block` t INNER JOIN `users` u on t.id_user=u.id WHERE t.id_user = ? and t.title = ? and t.state = 1",
    add : "INSERT INTO `text_block`(`Title`, `id_user`,`state`) VAlUES(?, ?, 1)",
    delete : "UPDATE `text_block` SET `state` = 0  WHERE `id` = ?",
    modify : "UPDATE `text_block` SET  `Description` = ? where id like ? and id_user like ?"
};

module.exports = notesBlockSentences;