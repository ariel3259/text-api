const notesBlockSentences = {
    readAll : "SELECT t.id, t.Title, t.Description FROM `text_block` t INNER JOIN `users` u on t.id_user=u.id WHERE t.id_user = ?",
    readByTitle : "SELECT t.id, t.title, t.description FROM `text_block` t INNER JOIN `users` u on t.id_user=u.id WHERE t.id_user = ? and t.title = ?",
    add : "INSERT INTO `text_block`(`Title`, `Description`, `id_user`) VAlUES(?,``, ?)",
    delete : "DELETE FROM `text_block` t WHERE t.id = ?",
    modify : "UPDATE `text_block` set  `Description` = ? where id like ? and id_user like ?"
};

module.exports = notesBlockSentences;