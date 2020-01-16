

const FolderService = {
    list(knex){
        return knex('folders').select('*');
    },



    insert(knex,folder){
        return knex('folders')
            .insert(folder)
            .returning('*')
            .then(rows => rows[0]);
    }




};

module.exports = FolderService;